import * as THREE from 'three';
import { buildWorld, HORIZON } from './world.js';
import { CONFIG } from './config.js';
import { buildLab } from './lab.js';

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
  labsDoor: { yaw: -0.52, pitch: 0.1, tx: 18.4, ty: 2.6, tz: -0.6, d: 9 },
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
  $('#p-projects').innerHTML = (p.projects || []).map((pr) => `<div class="rounded-2xl border border-white/10 bg-white/5 p-4"><div class="flex items-start justify-between gap-3"><h3 class="text-sm font-semibold leading-snug">${pr.title}</h3>${pr.year ? `<span class="shrink-0 text-xs text-cyan-300">${pr.year}</span>` : ''}</div>${pr.bullets ? `<ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-white/75">${pr.bullets.map((b) => `<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300"></span><span>${b}</span></li>`).join('')}</ul>` : ''}${pr.stack ? `<div class="mt-3 flex flex-wrap gap-1.5">${pr.stack.map((t) => `<span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px]">${t}</span>`).join('')}</div>` : ''}${(pr.details || []).map((d) => `<p class="mt-2 text-xs leading-relaxed text-white/75"><b class="text-white/90">${d.heading}:</b> ${d.text}</p>`).join('')}${pr.href ? `<a href="${pr.href}" target="_blank" rel="noopener" class="mt-3 inline-block text-xs font-semibold text-cyan-300 hover:underline">Live site ↗</a>` : ''}</div>`).join('');
  $('#p-groups').innerHTML = (p.groups || []).map((g) => `<div><p class="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">${g.title}</p><div class="flex flex-wrap gap-2">${g.items.map(chip).join('')}</div></div>`).join('');
  $('#p-tags').innerHTML = (p.tags || []).map(chip).join('');
  $('#p-buttons').innerHTML = (p.buttons || []).map((b) => b.action ? `<button data-action="${b.action}" class="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/20">${b.label}</button>` : `<a href="${CONFIG.links[b.href] || b.href}" target="_blank" rel="noopener" class="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#0b1230] transition hover:brightness-110">${b.label}</a>`).join('');
  panel.querySelectorAll('[data-action]').forEach((b) => b.addEventListener('click', () => go('labsLab')));
  panel.scrollTop = 0;
  panel.dataset.open = 'true'; panelOpen = true;
}
function closePanel() { panel.dataset.open = 'false'; panelOpen = false; }
function go(key) {
  if (busy) return;
  if (key === 'labsLab') { if (mode === 'lab') return; enterLab(false, 0, 'lab'); return; }
  if (key === 'labsInfo') key = 'labs';
  if (mode === 'lab') { exitLab().then(() => { if (key !== 'home') go(key); }); return; }
  setView(key); key === 'home' ? closePanel() : openPanel(key);
}
document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => go(b.dataset.view)));
$('#p-close').addEventListener('click', () => go('home'));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { if (readerOpen) closeReader(); else mode === 'lab' ? exitLab() : go('home'); return; }
  if (mode === 'lab' && !readerOpen) { if (e.key === 'ArrowRight') labStep(1); if (e.key === 'ArrowLeft') labStep(-1); }
});
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
  if (touches.size === 2) { const [a, b] = [...touches.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); zoom0 = mode === 'lab' ? labCam.zoom : des.zoom; }
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
    if (pinch0) { if (mode === 'lab') labCam.zoom = THREE.MathUtils.clamp(zoom0 * (pinch0 / d), 0.7, 1.2); else des.zoom = THREE.MathUtils.clamp(zoom0 * (pinch0 / d), 0.45, 1.25); }
  } else if (down && mode === 'lab') {
    down.moved += Math.abs(dx) + Math.abs(dy);
    labCam.dyaw = THREE.MathUtils.clamp(labCam.dyaw - dx * 0.004, -0.45, 0.45);
    labCam.dpitch = THREE.MathUtils.clamp(labCam.dpitch + dy * 0.003, -0.05, 0.22);
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
    if (mode === 'lab') { labClick(e.clientX, e.clientY); down = null; return; }
    const hit = pick(e.clientX, e.clientY);
    if (hit) go(hit.go || hit.key); else if (panelOpen && currentView !== 'home') go('home');
  }
  down = null;
};
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('pointerleave', () => { ptr.inside = false; });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (mode === 'lab') { labCam.zoom = THREE.MathUtils.clamp(labCam.zoom * Math.exp(e.deltaY * 0.0011), 0.7, 1.2); return; } des.zoom = THREE.MathUtils.clamp(des.zoom * Math.exp(e.deltaY * 0.0011), 0.45, 1.25); lastInput = performance.now() / 1000; }, { passive: false });

// ───────── picking ─────────
const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
let world, hoverKey = null;
function pick(x, y) {
  v2.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
  ray.setFromCamera(v2, camera);
  const hits = ray.intersectObjects(world.pickables.map((p) => p.mesh), false);
  if (!hits.length) return null;
  const ent = (h) => world.pickables.find((p) => p.mesh === h.object);
  return ent(hits.find((h) => ent(h).priority) || hits[0]);
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
  if (mode === 'lab') labFrame(dt, t); else islandFrame(dt, t, now);
  adapt(dt);
  if (!started && ++shown === 2) {
    started = true;
    const l = $('#loader'); l.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => l.remove(), 900);
    setTimeout(() => $('#hint').classList.add('opacity-0'), 9000);
    window.__ready = true;
  }
}
function islandFrame(dt, t, now) {
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
}

// ───────── inside My Projects Lab ─────────
const LAB_FOV = 46;
let mode = 'island', lab = null, labKey = 'lab', busy = false, hoverModel = false, hoverCta = false, cardFor = -1;
const labCam = { yaw: 0, pitch: 0, dyaw: 0, dpitch: 0, zoom: 1 };
const fade = $('#fade'), labUI = $('#lab-ui'), card = $('#lab-card');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const labs = {};
const labProjects = () => CONFIG.places.labs.projects;
const projectFor = (roomKey) => labProjects().find((p) => p.room === roomKey);

function cardHTML(pr) {
  const chip = (t) => `<span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px]">${t}</span>`;
  return `<p class="text-[11px] font-semibold uppercase tracking-widest text-cyan-300">My Projects Lab${pr.year ? ' · ' + pr.year : ''}</p>
    <h3 class="mt-1 text-base font-bold leading-snug">${pr.title}</h3>
    ${pr.bullets ? `<ul class="mt-2 space-y-1.5 text-xs leading-relaxed text-white/80">${pr.bullets.map((b) => `<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300"></span><span>${b}</span></li>`).join('')}</ul>` : ''}
    ${pr.stack ? `<div class="mt-3 flex flex-wrap gap-1.5">${pr.stack.map(chip).join('')}</div>` : ''}`;
}
function showCard(x, y) {
  const room = lab.rooms[lab.current], pr = projectFor(room.key); if (!pr) return;
  if (cardFor !== lab.current) { card.innerHTML = cardHTML(pr); cardFor = lab.current; }
  card.classList.remove('opacity-0');
  const cw = card.offsetWidth, ch = card.offsetHeight;
  let px, py;
  if (coarse || W < 700) { px = (W - cw) / 2; py = H - ch - 130; }
  else { px = x + 22; py = y + 18; if (px + cw > W - 12) px = x - cw - 22; if (py + ch > H - 12) py = H - ch - 12; }
  card.style.transform = `translate(${Math.max(8, px)}px, ${Math.max(8, py)}px)`;
}
const hideCard = () => card.classList.add('opacity-0');

function updateLabUI() {
  const r = lab.rooms[lab.current], pr = projectFor(r.key), n = lab.rooms.length;
  $('#lab-title').textContent = `${lab.current + 1} / ${n} · ${pr ? pr.title : r.key}`;
  $('#lab-dots').innerHTML = lab.rooms.map((_, i) => `<span class="h-2 rounded-full transition-all ${i === lab.current ? 'w-6 bg-cyan-300' : 'w-2 bg-white/40'}"></span>`).join('');
  cardFor = -1; hideCard();
}
function labStep(d) {
  if (!lab || lab.transitioning()) return;
  lab.setRoom((lab.current + d + lab.rooms.length) % lab.rooms.length, d);
  labCam.dyaw = 0; labCam.dpitch = 0; updateLabUI();
}
$('#lab-prev').addEventListener('click', () => labStep(-1));
$('#lab-next').addEventListener('click', () => labStep(1));
$('#lab-exit').addEventListener('click', () => exitLab());

async function enterLab(instant = false, idx = 0, which = 'lab') {
  if (mode === 'lab' || busy) return;
  busy = true; closePanel(); labKey = which;
  if (!instant) { setView('labsDoor'); document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('is-active', b.dataset.view === 'labs')); await sleep(reduced ? 150 : 1150); }
  fade.classList.remove('opacity-0'); await sleep(instant ? 0 : 480);
  if (!labs[which]) labs[which] = buildLab({ mobile, theme: which });
  lab = labs[which];
  lab.setRoom(idx, 1, true);
  mode = 'lab'; camera.fov = LAB_FOV; camera.clearViewOffset(); camera.updateProjectionMatrix();
  Object.assign(labCam, { yaw: 0, pitch: 0, dyaw: 0, dpitch: 0, zoom: 1 });
  labUI.classList.remove('hidden'); $('#mnav').classList.add('hidden'); $('#hint').classList.add('opacity-0'); tip.classList.add('opacity-0');
  updateLabUI(); canvas.style.cursor = 'grab';
  await sleep(60); fade.classList.add('opacity-0'); busy = false;
}
async function exitLab() {
  if (mode !== 'lab' || busy) return;
  busy = true; fade.classList.remove('opacity-0'); await sleep(480);
  mode = 'island'; camera.fov = FOV; camera.updateProjectionMatrix();
  labUI.classList.add('hidden'); $('#mnav').classList.remove('hidden'); hideCard(); closeReader(); tip.classList.add('opacity-0');
  setView('home'); Object.assign(cur, des); hoverModel = hoverCta = false;
  await sleep(60); fade.classList.add('opacity-0'); busy = false;
}
function labPick(x, y) {
  v2.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1); ray.setFromCamera(v2, camera);
  return lab.pick(ray);
}
function openSite(pr) { if (pr && pr.href) window.open(pr.href, '_blank', 'noopener'); }
function labClick(x, y) {
  const kind = labPick(x, y), pr = projectFor(lab.rooms[lab.current].key);
  if (kind === 'laptop') { hideCard(); openReader(pr); }
  else if (kind === 'model') {
    openSite(pr);
  }
}
// ───────── project details reader (laptop) ─────────
const reader = $('#reader'), rBody = $('#r-body');
let readerOpen = false;
function readerHTML(pr) {
  const chip = (t) => `<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${t}</span>`;
  const sec = (h, inner) => `<h4 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-widest text-cyan-300">${h}</h4>${inner}`;
  const dot = '<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"></span>';
  return `<p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">My Projects Lab${pr.year ? ' · ' + pr.year : ''}</p>
    <h3 class="mt-1 text-2xl font-bold leading-tight sm:text-3xl">${pr.title}</h3>
    ${pr.bullets ? sec('About this project', `<ul class="space-y-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">${pr.bullets.map((b) => `<li class="flex gap-3">${dot}<span>${b}</span></li>`).join('')}</ul>`) : ''}
    ${(pr.details || []).map((d) => sec(d.heading, `<p class="text-sm leading-relaxed text-white/85 sm:text-[15px]">${d.text}</p>`)).join('')}
    ${pr.stack ? sec('Tech stack', `<div class="flex flex-wrap gap-2">${pr.stack.map(chip).join('')}</div>`) : ''}
    ${pr.href ? `<div class="mt-8"><a href="${pr.href}" target="_blank" rel="noopener" class="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#0b1230] transition hover:brightness-110">Visit live website ↗</a></div>` : ''}`;
}
function openReader(pr) {
  if (!pr || readerOpen) return;
  rBody.innerHTML = readerHTML(pr); rBody.scrollTop = 0; $('#r-url').textContent = pr.href ? pr.href.replace(/^https?:\/\//, '') : 'project-details.md';
  readerOpen = true; hideCard(); tip.classList.add('opacity-0');
  reader.classList.remove('hidden'); reader.classList.add('flex'); requestAnimationFrame(() => requestAnimationFrame(() => reader.classList.remove('opacity-0')));
}
function closeReader() {
  if (!readerOpen) return; readerOpen = false; reader.classList.add('opacity-0');
  setTimeout(() => { if (!readerOpen) { reader.classList.add('hidden'); reader.classList.remove('flex'); } }, 300);
}
$('#r-close').addEventListener('click', closeReader);
reader.addEventListener('click', (e) => { if (e.target === reader) closeReader(); });
function labFrame(dt, t) {
  const k = 1 - Math.exp(-dt * 5), room = lab.rooms[lab.current];
  labCam.yaw += (labCam.dyaw - labCam.yaw) * k; labCam.pitch += (labCam.dpitch - labCam.pitch) * k;
  const pxT = !coarse && ptr.inside && !dragging ? ptr.nx : 0, pyT = !coarse && ptr.inside && !dragging ? ptr.ny : 0;
  par.x += (pxT - par.x) * Math.min(1, dt * 3); par.y += (pyT - par.y) * Math.min(1, dt * 3);
  const a = camera.aspect, hw = THREE.MathUtils.lerp(9.5, 15.5, THREE.MathUtils.clamp((a - 0.6) / 0.6, 0, 1));
  const dist = Math.max(room.cam.d, hw / (Math.tan((LAB_FOV * Math.PI) / 360) * a)) * labCam.zoom;
  const yaw = labCam.yaw - par.x * 0.04, pitch = 0.06 + labCam.pitch + par.y * 0.02, cp = Math.cos(pitch);
  camera.position.set(dist * Math.sin(yaw) * cp, room.cam.y + dist * Math.sin(pitch), dist * Math.cos(yaw) * cp);
  camera.lookAt(0, room.cam.y, 0);

  if (ptr.moved && !coarse && !dragging && !lab.transitioning()) {
    ptr.moved = false;
    const kind = ptr.inside ? labPick(ptr.x, ptr.y) : null;
    hoverCta = kind === 'laptop'; hoverModel = kind === 'model';
    canvas.style.cursor = kind ? 'pointer' : 'grab';
    if (hoverCta) { tip.textContent = 'Read project details'; tip.style.transform = `translate(${ptr.x + 16}px, ${ptr.y + 14}px)`; tip.classList.remove('opacity-0'); } else tip.classList.add('opacity-0');
  }
  if (lab.transitioning()) { hoverModel = hoverCta = false; hideCard(); tip.classList.add('opacity-0'); }
  lab.update(t, dt, hoverModel, hoverCta);
  renderer.render(lab.scene, camera);
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
  const qs = new URLSearchParams(location.search), sk = qs.get('view');
  if (sk && VIEWS[sk] && !sk.endsWith('Door')) { go(sk); Object.assign(cur, des); }
  if (qs.has('lab')) await enterLab(true, +qs.get('lab') || 0);
  renderer.setAnimationLoop(frame);
}
boot();
