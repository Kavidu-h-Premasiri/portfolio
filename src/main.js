import * as THREE from 'three';
import { buildWorld, HORIZON } from './world.js';
import { CONFIG } from './config.js';

const $ = (s) => document.querySelector(s);
const canvas = $('#scene');
const coarse = matchMedia('(pointer:coarse)').matches;
const mobile = coarse || Math.min(innerWidth, innerHeight) < 600;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FOV = 50, LENS = 1.2;

// ───────── renderer ─────────
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance', stencil: false });
} catch (e) {
  $('#loader-text').textContent = 'Your browser/device does not support WebGL, so the 3D scene cannot start.';
  $('#loader-bar').classList.add('hidden');
  throw e;
}
renderer.setClearColor(HORIZON);
if (location.search.includes('debug')) window.__r = renderer;
const maxPR = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
let pr = maxPR;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 1, 1600);

// ───────── camera rig (orbit + fly-to + parallax) ─────────
const cur = { yaw: 0, pitch: 0.5, tx: 0, ty: 1.5, tz: 3, zoom: 1 };
const des = { ...cur };
let baseDist = 60, viewDist = null, currentView = 'home';
let lastInput = -99, dragging = false;
const ptr = { x: 0, y: 0, nx: 0, ny: 0, moved: false, inside: false };
let par = { x: 0, y: 0 };

const sizeFactor = () => {
  const a = camera.aspect;
  return a >= 1.2 ? 1 : THREE.MathUtils.clamp(0.42 + ((a - 0.5) / 0.7) * 0.58, 0.42, 1);
};
const fitDist = () => {
  const a = camera.aspect, hw = 33;
  const d = Math.max(hw / (Math.tan((FOV * Math.PI) / 360) * a), 40);
  return d * sizeFactor() * LENS;
};
const portraitScale = () => (camera.aspect < 1.2 ? Math.pow(1.2 / camera.aspect, 0.65) : 1);

const VIEWS = {
  home: { yaw: 0, pitch: 0.31, tx: 0, ty: 2.5, tz: 4 },
  about: { yaw: 0, pitch: 0.24, tx: 0, ty: 4.2, tz: 3, d: 30 },
  nupa: { yaw: 0, pitch: 0.26, tx: 0, ty: 4.4, tz: -9, d: 36 },
  sliit: { yaw: 0.5, pitch: 0.27, tx: -20, ty: 3.6, tz: -3.5, d: 31 },
  labs: { yaw: -0.5, pitch: 0.27, tx: 20, ty: 3.6, tz: -3.5, d: 31 },
};

function setView(key) {
  const v = VIEWS[key]; if (!v) return;
  currentView = key;
  des.yaw = v.yaw; des.pitch = v.pitch; des.tx = v.tx; des.ty = v.ty; des.tz = v.tz; des.zoom = 1;
  viewDist = v.d ? v.d * portraitScale() * LENS : null;
  lastInput = performance.now() / 1000;
  document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('is-active', b.dataset.view === key));
}

// ───────── UI wiring ─────────
const panel = $('#panel');
let panelOpen = false;
function openPanel(key) {
  const p = CONFIG.places[key]; if (!p) return;
  const chip = (t) => `<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${t}</span>`;
  $('#p-kicker').textContent = p.kicker; $('#p-title').textContent = p.title; $('#p-text').textContent = p.text;
  $('#p-points').innerHTML = (p.points || []).map((t) => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span><span>${t}</span></li>`).join('');
  $('#p-projects').innerHTML = (p.projects || []).map((pr) => `<div class="rounded-2xl border border-white/10 bg-white/5 p-4"><div class="flex items-start justify-between gap-3"><h3 class="text-sm font-semibold leading-snug">${pr.title}</h3>${pr.year ? `<span class="shrink-0 text-xs text-cyan-300">${pr.year}</span>` : ''}</div>${pr.bullets ? `<ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-white/75">${pr.bullets.map((b) => `<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300"></span><span>${b}</span></li>`).join('')}</ul>` : ''}${pr.stack ? `<div class="mt-3 flex flex-wrap gap-1.5">${pr.stack.map((t) => `<span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px]">${t}</span>`).join('')}</div>` : ''}${pr.href ? `<a href="${pr.href}" target="_blank" rel="noopener" class="mt-3 inline-block text-xs font-semibold text-cyan-300 hover:underline">Live site ↗</a>` : ''}</div>`).join('');
  $('#p-groups').innerHTML = (p.groups || []).map((g) => `<div><p class="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">${g.title}</p><div class="flex flex-wrap gap-2">${g.items.map(chip).join('')}</div></div>`).join('');
  $('#p-tags').innerHTML = (p.tags || []).map(chip).join('');
  $('#p-buttons').innerHTML = (p.buttons || []).map((b) => `<a href="${CONFIG.links[b.href] || b.href}" target="_blank" rel="noopener" class="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#0b1230] transition hover:brightness-110">${b.label}</a>`).join('');
  panel.scrollTop = 0;
  panel.dataset.open = 'true'; panelOpen = true;
}
function closePanel() { panel.dataset.open = 'false'; panelOpen = false; }
function go(key) { setView(key); key === 'home' ? closePanel() : openPanel(key); }
document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => go(b.dataset.view)));
$('#p-close').addEventListener('click', () => go('home'));
addEventListener('keydown', (e) => { if (e.key === 'Escape') go('home'); });
$('#social-gh').href = CONFIG.links.github; $('#social-in').href = CONFIG.links.linkedin; $('#social-mail').href = CONFIG.links.email;
document.querySelectorAll('[data-name]').forEach((n) => (n.textContent = CONFIG.name));
document.title = `${CONFIG.name} – ${CONFIG.tagline}`;

// ───────── pointer input ─────────
const touches = new Map();
let down = null, pinch0 = 0, zoom0 = 1;
canvas.addEventListener('pointerdown', (e) => {
  canvas.setPointerCapture(e.pointerId);
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  down = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 };
  if (touches.size === 2) { const [a, b] = [...touches.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); zoom0 = des.zoom; }
  dragging = true; lastInput = performance.now() / 1000;
  $('#hint').classList.add('opacity-0');
});
canvas.addEventListener('pointermove', (e) => {
  ptr.x = e.clientX; ptr.y = e.clientY; ptr.nx = (e.clientX / innerWidth) * 2 - 1; ptr.ny = (e.clientY / innerHeight) * 2 - 1; ptr.moved = true; ptr.inside = true;
  const t = touches.get(e.pointerId);
  if (!t) return;
  const dx = e.clientX - t.x, dy = e.clientY - t.y; t.x = e.clientX; t.y = e.clientY;
  if (touches.size === 2) {
    const [a, b] = [...touches.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinch0) des.zoom = THREE.MathUtils.clamp(zoom0 * (pinch0 / d), 0.45, 1.25);
  } else if (down) {
    down.moved += Math.abs(dx) + Math.abs(dy);
    des.yaw = THREE.MathUtils.clamp(des.yaw - dx * 0.0055, VIEWS[currentView].yaw - 0.95, VIEWS[currentView].yaw + 0.95);
    des.pitch = THREE.MathUtils.clamp(des.pitch + dy * 0.0042, 0.16, 1.05);
  }
  lastInput = performance.now() / 1000;
});
const endPtr = (e) => {
  touches.delete(e.pointerId); pinch0 = 0;
  if (!touches.size) dragging = false;
  if (down && down.moved < 8 && performance.now() - down.t < 450 && e.type === 'pointerup') {
    const hit = pick(e.clientX, e.clientY);
    if (hit) go(hit.key); else if (panelOpen && currentView !== 'home') go('home');
  }
  down = null;
};
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('pointerleave', () => { ptr.inside = false; });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); des.zoom = THREE.MathUtils.clamp(des.zoom * Math.exp(e.deltaY * 0.0011), 0.45, 1.25); lastInput = performance.now() / 1000; }, { passive: false });

// ───────── picking ─────────
const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
let world, hoverKey = null;
function pick(x, y) {
  v2.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
  ray.setFromCamera(v2, camera);
  const hits = ray.intersectObjects(world.pickables.map((p) => p.mesh), false);
  return hits.length ? world.pickables.find((p) => p.mesh === hits[0].object) : null;
}
const tip = $('#tip');

// ───────── sizing / adaptive quality ─────────
let shiftX = 0, shiftY = 0, lensY = 0, W = 1, H = 1;
function resize() {
  W = innerWidth; H = innerHeight;
  renderer.setPixelRatio(pr); renderer.setSize(W, H, false);
  camera.aspect = W / H; baseDist = fitDist();
  if (world) world.setPointScale(H * pr, FOV);
  if (viewDist) viewDist = VIEWS[currentView].d * portraitScale() * LENS;
}
addEventListener('resize', resize);
let acc = 0, frames = 0, slow = 0, fast = 0;
function adapt(dt) {
  acc += dt; frames++;
  if (frames < 45) return;
  const avg = acc / frames; acc = 0; frames = 0;
  if (avg > 0.028 && pr > 0.7) { pr = Math.max(0.7, pr - 0.2); slow++; fast = 0; resize(); }
  else if (avg < 0.0185 && pr < maxPR && slow < 6) { if (++fast > 4) { pr = Math.min(maxPR, pr + 0.15); fast = 0; resize(); } }
  else fast = 0;
}

// ───────── main loop ─────────
const clock = new THREE.Clock();
let started = false, shown = 0;
function frame() {
  const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime, now = performance.now() / 1000;
  const idle = now - lastInput;

  // idle motion
  let sway = 0;
  if (!reduced && !dragging && currentView === 'home') {
    sway = Math.sin(t * 0.22) * 0.035;
    if (camera.aspect < 1.1 && idle > 2.5) { des.tx = Math.sin(t * 0.13) * 15; des.yaw = Math.sin(t * 0.13) * 0.12; }
  }
  // mouse parallax (desktop only)
  const pxT = !coarse && ptr.inside && !dragging ? ptr.nx : 0, pyT = !coarse && ptr.inside && !dragging ? ptr.ny : 0;
  par.x += (pxT - par.x) * Math.min(1, dt * 3); par.y += (pyT - par.y) * Math.min(1, dt * 3);

  const k = 1 - Math.exp(-dt * 4.5);
  for (const key of ['yaw', 'pitch', 'tx', 'ty', 'tz', 'zoom']) cur[key] += (des[key] - cur[key]) * k;
  const dist = (viewDist || baseDist) * cur.zoom;
  const yaw = cur.yaw + sway - par.x * 0.05, pitch = cur.pitch + par.y * 0.025, cp = Math.cos(pitch);
  camera.position.set(cur.tx + dist * Math.sin(yaw) * cp, cur.ty + dist * Math.sin(pitch), cur.tz + dist * Math.cos(yaw) * cp);
  camera.lookAt(cur.tx, cur.ty, cur.tz);

  // shift the scene so the focused building isn't hidden behind the info panel
  const wantX = panelOpen && W >= 900 ? 230 : 0, wantY = panelOpen && W < 900 ? H * 0.2 : 0;
  shiftX += (wantX - shiftX) * k; shiftY += (wantY - shiftY) * k;
  lensY += (((currentView === 'home' && camera.aspect >= 1.2) ? 0 : camera.aspect < 1.2 ? 0.62 : 0.5) - lensY) * k;
  const FW = W * LENS, FH = H * LENS;
  camera.setViewOffset(FW, FH, (FW - W) / 2 + shiftX, (FH - H) * lensY + shiftY, W, H);
  camera.updateProjectionMatrix();

  // hover
  if (ptr.moved && !coarse && !dragging) {
    ptr.moved = false;
    const h = ptr.inside ? pick(ptr.x, ptr.y) : null;
    hoverKey = h ? h.key : null;
    canvas.style.cursor = h ? 'pointer' : dragging ? 'grabbing' : 'grab';
    if (h) { tip.textContent = h.label; tip.style.transform = `translate(${ptr.x + 16}px, ${ptr.y + 14}px)`; tip.classList.remove('opacity-0'); } else tip.classList.add('opacity-0');
  }

  world.update(t, dt, camera, hoverKey);
  renderer.render(scene, camera);
  adapt(dt);

  if (!started && ++shown === 2) {
    started = true;
    const l = $('#loader'); l.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => l.remove(), 900);
    setTimeout(() => $('#hint').classList.add('opacity-0'), 9000);
    window.__ready = true;
  }
}

// ───────── boot ─────────
async function boot() {
  const bar = $('#loader-fill'); bar.style.width = '15%';
  try { await Promise.race([document.fonts.load('700 40px Poppins'), new Promise((r) => setTimeout(r, 1200))]); } catch (_) {}
  bar.style.width = '45%';
  await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
  world = buildWorld(scene, { mobile });
  bar.style.width = '90%';
  resize(); setView('home');
  // snap camera to the home view immediately
  Object.assign(cur, des);
  const sk = new URLSearchParams(location.search).get('view'); if (sk && VIEWS[sk]) { go(sk); Object.assign(cur, des); }
  renderer.setAnimationLoop(frame);
}
boot();
