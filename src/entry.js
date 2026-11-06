// Start-up: run the 3D island. If the device cannot run it (no WebGL, or the GPU was reset),
// show a short message with the island picture and the contact links instead of a blank screen.
import { CONFIG } from './config.js';
import ISLAND from './islandPreview.js';

const hasGL = (() => {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext(); // free the test context
    return true;
  } catch (_) { return false; }
})();

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function showNoWebGL(reason) {
  if (document.getElementById('no3d')) return;
  ['#scene', '#loader', 'header', '#mnav', '#hint', '#tip', '#lab-ui', '#reader', '#fade', '#panel', '#ctl', '#toast'].forEach((q) => document.querySelectorAll(q).forEach((n) => n.remove()));
  const msg = reason === 'lost'
    ? 'The 3D view stopped because the graphics chip was reset. Reload the page to try again.'
    : 'This device or browser can’t show the 3D island (WebGL is turned off or not supported). Try another browser, or turn on hardware acceleration in the browser settings.';
  const link = (k, t) => `<a href="${esc(CONFIG.links[k])}" ${k === 'email' ? '' : 'target="_blank" rel="noopener"'} class="inline-flex min-h-[44px] items-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold hover:bg-white/15">${t}</a>`;
  const el = document.createElement('main');
  el.id = 'no3d';
  el.className = 'fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 overflow-y-auto bg-gradient-to-b from-[#1b1040] via-[#2a1450] to-[#1b1040] p-6 text-center text-white';
  el.innerHTML = `
    <img src="assets/logo.png" alt="" class="h-16 w-16 rounded-2xl">
    <h1 class="text-xl font-bold sm:text-2xl">${esc(CONFIG.name)}</h1>
    <p class="max-w-md text-sm leading-relaxed text-white/80">${msg}</p>
    <img src="${ISLAND}" alt="Preview of the 3D portfolio island" class="w-full max-w-md rounded-2xl border border-white/15">
    <div class="flex flex-wrap justify-center gap-2">${link('github', 'GitHub')}${link('linkedin', 'LinkedIn')}${link('email', 'Email')}</div>`;
  document.body.append(el);
  document.body.classList.remove('overflow-hidden');
}
window.__kpNoGL = showNoWebGL;

if (!hasGL) showNoWebGL('nowebgl');
else import('./main.js').catch((e) => { console.error(e); showNoWebGL('error'); });
