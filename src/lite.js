// ─────────────────────────────────────────────────────────────
//  Simple 2D version of the portfolio.
//  Shown when the device has no WebGL, when the 3D scene fails to
//  start, or when the visitor picks "2D view". Same content as the
//  3D island, built from CONFIG, with the rooms' screens as thumbnails.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from './config.js';
import { ROOMS_BY_HALL } from './lab.js';
import * as L from './labtextures.js';
import ISLAND from './islandPreview.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const link = (k) => CONFIG.links[k] || k;

// the screen painted in each 3D room, reused as the project thumbnail
const THUMBS = {
  preschool: () => L.screenUI('home'), avurudu: () => L.sunTablet(), portfolio: () => L.portScreen(),
  taskflow: () => L.tfScreen(), poker: () => L.pkScreen(), food: () => L.fwScreen(), nupa: () => L.nupaScreen(),
};
const HALL_NAMES = { lab: 'My Projects Lab', sliit: 'SLIIT University', nupa: 'NupaStack' };
const hallsFor = (room) => Object.keys(ROOMS_BY_HALL).filter((h) => ROOMS_BY_HALL[h].includes(room)).map((h) => HALL_NAMES[h]);

const chip = (t) => `<span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">${esc(t)}</span>`;
const dotList = (items, cls = 'text-sm') => `<ul class="space-y-2 ${cls} leading-relaxed text-white/85">${items.map((b) => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"></span><span>${esc(b)}</span></li>`).join('')}</ul>`;
const section = (id, kicker, title, inner) => `
  <section id="${id}" class="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
    <div class="mx-auto max-w-6xl">
      <p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">${esc(kicker)}</p>
      <h2 class="mt-1 text-2xl font-bold sm:text-3xl">${esc(title)}</h2>
      <div class="mt-6">${inner}</div>
    </div>
  </section>`;

function projectCard(pr) {
  const halls = pr.room ? hallsFor(pr.room) : [];
  const more = (pr.details || []).map((d) => `<h4 class="mt-4 text-xs font-semibold uppercase tracking-widest text-cyan-300">${esc(d.heading)}</h4><div class="mt-2">${d.items ? dotList(d.items, 'text-[13px]') : `<p class="text-[13px] leading-relaxed text-white/85">${esc(d.text)}</p>`}</div>`).join('');
  return `
  <article class="glass flex flex-col overflow-hidden rounded-2xl">
    <div class="relative aspect-video bg-[#140a33]" data-thumb="${esc(pr.room || '')}">
      ${pr.room && THUMBS[pr.room] ? '' : `<div class="grid h-full place-items-center text-4xl text-white/30">&lt;/&gt;</div>`}
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
        ${pr.year ? `<span>${esc(pr.year)}</span>` : ''}${halls.map((h) => `<span class="rounded-full bg-cyan-300/10 px-2 py-0.5 normal-case tracking-normal text-cyan-200">${esc(h)}</span>`).join('')}
      </div>
      <h3 class="mt-2 text-lg font-bold leading-snug">${esc(pr.title)}</h3>
      ${pr.bullets ? `<div class="mt-3">${dotList(pr.bullets, 'text-[13px]')}</div>` : ''}
      ${pr.stack ? `<div class="mt-4 flex flex-wrap gap-1.5">${pr.stack.map(chip).join('')}</div>` : ''}
      ${more ? `<details class="group mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"><summary class="cursor-pointer list-none text-sm font-semibold text-white/90 marker:hidden">More details <span class="inline-block transition group-open:rotate-90">›</span></summary>${more}</details>` : ''}
      <div class="mt-auto pt-5">
        ${pr.href
          ? `<a href="${esc(pr.href)}" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-sm font-semibold text-[#0b1230] transition hover:brightness-110">Visit live website ↗</a>`
          : `<span class="inline-flex min-h-[44px] items-center rounded-full border border-white/15 px-5 text-sm text-white/60">Live link coming soon</span>`}
      </div>
    </div>
  </article>`;
}

export function renderLite(reason = 'chosen', canTry3D = true) {
  if (document.getElementById('lite')) return;
  // remove the 3D layer and its overlays
  ['#scene', '#loader', 'header', '#mnav', '#hint', '#tip', '#lab-ui', '#reader', '#fade', '#panel', '#ctl', '#toast'].forEach((q) => document.querySelectorAll(q).forEach((n) => n.remove()));
  document.body.classList.remove('overflow-hidden');
  document.body.classList.add('overflow-y-auto');

  const P = CONFIG.places, about = P.about, uni = P.sliit, nupa = P.nupa;
  const projects = P.labs.projects.filter((p) => p.bullets);
  const notice = {
    nowebgl: 'Your device or browser can’t show the 3D island (WebGL is not available), so here is the simple version with everything in it.',
    error: 'The 3D island couldn’t start on this device, so here is the simple version with everything in it.',
    lost: 'The 3D view stopped because the graphics chip was reset, so here is the simple version.',
  }[reason];
  const navLinks = [['about', 'About'], ['education', 'Education'], ['experience', 'NupaStack'], ['projects', 'Projects']];

  const root = document.createElement('div');
  root.id = 'lite';
  root.className = 'min-h-[100dvh] bg-gradient-to-b from-[#1b1040] via-[#2a1450] to-[#1b1040] text-white';
  root.innerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#1b1040]">Skip to content</a>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-[#140a33]/80 backdrop-blur-md" style="padding-top:env(safe-area-inset-top)">
    <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
      <a href="#top" class="flex min-w-0 items-center gap-3"><img src="assets/logo.png" alt="" class="h-9 w-9 shrink-0 rounded-xl"><span class="truncate text-sm font-semibold">${esc(CONFIG.name)}</span></a>
      <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Sections">${navLinks.map(([id, t]) => `<a href="#${id}" class="nav-btn">${t}</a>`).join('')}</nav>
      ${canTry3D ? `<a href="./" data-to3d class="ml-auto inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/20 md:ml-2">View in 3D</a>` : ''}
    </div>
    <nav class="flex gap-1 overflow-x-auto px-3 pb-2 md:hidden" aria-label="Sections">${navLinks.map(([id, t]) => `<a href="#${id}" class="nav-btn shrink-0 !px-3 !py-1.5 !text-xs">${t}</a>`).join('')}</nav>
  </header>
  <main id="main">
    ${notice ? `<div class="mx-auto mt-4 max-w-6xl px-4 sm:px-6"><p role="status" class="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">${notice}</p></div>` : ''}
    <section id="top" class="px-4 pb-4 pt-10 sm:px-6 sm:pt-16">
      <div class="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">${esc(CONFIG.role)}</p>
          <h1 class="mt-2 break-words text-3xl font-bold leading-tight sm:text-5xl">${esc(CONFIG.name)}</h1>
          <p class="mt-1 text-sm text-white/60">${esc(CONFIG.fullName)}</p>
          <p class="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">${esc(about.text)}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            ${about.buttons.map((b, i) => `<a href="${esc(link(b.href))}" ${b.href === 'email' ? '' : 'target="_blank" rel="noopener"'} class="inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold transition ${i === 0 ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0b1230] hover:brightness-110' : 'border border-white/20 bg-white/10 hover:bg-white/15'}">${esc(b.label)}</a>`).join('')}
          </div>
        </div>
        <figure class="glass overflow-hidden rounded-3xl">
          <img data-island alt="Preview of the 3D portfolio island with the SLIIT University, NupaStack and My Projects Lab buildings" class="aspect-video w-full object-cover" loading="eager">
          <figcaption class="px-4 py-3 text-xs text-white/65">The 3D island: SLIIT University, NupaStack and My Projects Lab${canTry3D ? ' – tap “View in 3D” to explore it.' : '.'}</figcaption>
        </figure>
      </div>
    </section>
    ${section('about', 'About me', 'Skills', `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${about.groups.map((g) => `<div class="glass rounded-2xl p-5"><p class="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">${esc(g.title)}</p><div class="flex flex-wrap gap-2">${g.items.map(chip).join('')}</div></div>`).join('')}</div>`)}
    ${section('education', uni.kicker, uni.title, `<div class="glass rounded-2xl p-6"><p class="text-[15px] leading-relaxed text-white/85">${esc(uni.text)}</p><div class="mt-4">${dotList(uni.points)}</div><div class="mt-5 flex flex-wrap gap-2">${uni.tags.map(chip).join('')}</div></div>`)}
    ${section('experience', nupa.kicker, nupa.title, `<div class="grid gap-5 lg:grid-cols-2"><div class="glass rounded-2xl p-6"><p class="text-[15px] leading-relaxed text-white/85">${esc(nupa.text)}</p><div class="mt-4">${dotList(nupa.points)}</div><div class="mt-5 flex flex-wrap gap-2">${nupa.tags.map(chip).join('')}</div></div>${(nupa.projects || []).map(projectCard).join('')}</div>`)}
    ${section('projects', P.labs.kicker, P.labs.title, `<p class="-mt-2 mb-6 text-sm text-white/70">${esc(P.labs.text)}</p><div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">${projects.map(projectCard).join('')}</div>`)}
  </main>
  <footer class="border-t border-white/10 px-4 py-8 text-center text-xs text-white/55 sm:px-6" style="padding-bottom:calc(2rem + env(safe-area-inset-bottom))">
    <div class="mb-3 flex justify-center gap-2">${['github', 'linkedin', 'email'].map((k) => `<a href="${esc(link(k))}" ${k === 'email' ? '' : 'target="_blank" rel="noopener"'} class="inline-flex min-h-[40px] items-center rounded-full border border-white/15 px-4 text-white/80 hover:bg-white/10">${{ github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' }[k]}</a>`).join('')}</div>
    © ${new Date().getFullYear()} ${esc(CONFIG.fullName)}
  </footer>`;
  document.body.prepend(root);

  // remember the choice: "View in 3D" clears it
  root.querySelector('[data-to3d]')?.addEventListener('click', () => { try { localStorage.removeItem('kp-view'); } catch (_) {} });

  // island preview image + room-screen thumbnails (painted on 2D canvas, no WebGL needed)
  root.querySelector('[data-island]').src = ISLAND;
  const paint = () => root.querySelectorAll('[data-thumb]').forEach((box) => {
    const fn = THUMBS[box.dataset.thumb]; if (!fn) return;
    try {
      const cv = fn().image; // the canvas keeps its drawing size; CSS scales it
      cv.className = 'h-full w-full object-cover'; cv.setAttribute('role', 'img'); cv.setAttribute('aria-label', 'Screen from the 3D showroom');
      box.replaceChildren(cv);
    } catch (_) { /* thumbnail is optional */ }
  });
  Promise.race([document.fonts ? document.fonts.load('700 40px Poppins') : 0, new Promise((r) => setTimeout(r, 1500))]).catch(() => {}).then(paint);
}
