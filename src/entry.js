// Start-up: pick the 3D island or the simple 2D version.
import { renderLite } from './lite.js';

const qs = new URLSearchParams(location.search);
let pref = null;
try { pref = localStorage.getItem('kp-view'); } catch (_) {}

const hasGL = (() => {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext(); // free the test context
    return true;
  } catch (_) { return false; }
})();

window.__kpLite = (reason) => renderLite(reason, hasGL);

if (!hasGL) renderLite('nowebgl', false);
else if (qs.has('lite') || (pref === 'lite' && !qs.has('3d'))) renderLite('chosen', true);
else {
  // slow device or connection: offer the 2D version while the island is still being built
  setTimeout(() => { const l = document.getElementById('loader-lite'); if (l && !window.__ready) l.classList.remove('invisible', 'opacity-0'); }, 7000);
  import('./main.js').catch((e) => { console.error(e); renderLite('error', true); });
}
