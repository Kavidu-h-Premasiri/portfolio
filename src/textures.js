import * as THREE from 'three';

// Small seeded RNG so the scene is identical on every load
export function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FONT = '"Poppins","Segoe UI",system-ui,Arial,sans-serif';
const mk = (w, h) => {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
};
const toTex = (c, aniso = 4) => {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
};
function rr(x, X, Y, W, H, R) {
  x.beginPath();
  if (x.roundRect) x.roundRect(X, Y, W, H, R); else x.rect(X, Y, W, H);
}

export function glowTexture() {
  const [c, x] = mk(128, 128);
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return toTex(c, 1);
}

export function signTexture(kind) {
  const [c, x] = mk(1024, 256);
  const border = { nupa: 'rgba(70,200,255,.75)', sliit: 'rgba(190,170,255,.55)', labs: 'rgba(170,110,255,.8)' }[kind];
  const bg = { nupa: ['#080e20', '#122042'], sliit: ['#1d2268', '#0f1240'], labs: ['#1d1046', '#2b1760'] }[kind];
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, bg[0]); g.addColorStop(1, bg[1]);
  rr(x, 6, 6, 1012, 244, 26); x.fillStyle = g; x.fill();
  x.lineWidth = 4; x.strokeStyle = border; x.stroke();
  x.textBaseline = 'alphabetic';

  if (kind === 'nupa') {
    const lg = x.createLinearGradient(70, 60, 190, 200);
    lg.addColorStop(0, '#40f0ff'); lg.addColorStop(1, '#2a7bff');
    x.save();
    x.shadowColor = '#2fd6ff'; x.shadowBlur = 24;
    x.lineWidth = 36; x.lineJoin = 'round'; x.lineCap = 'round'; x.strokeStyle = lg;
    x.beginPath(); x.moveTo(92, 190); x.lineTo(92, 66); x.lineTo(188, 190); x.lineTo(188, 66); x.stroke();
    x.restore();
    x.fillStyle = '#fff'; x.font = `700 118px ${FONT}`;
    x.fillText('NupaStack', 250, 178);
  }
  if (kind === 'sliit') {
    // shield crest
    x.save(); x.translate(44, 28);
    x.beginPath(); x.moveTo(0, 0); x.lineTo(150, 0); x.lineTo(150, 120); x.quadraticCurveTo(150, 190, 75, 204); x.quadraticCurveTo(0, 190, 0, 120); x.closePath();
    x.fillStyle = '#fff'; x.fill();
    x.clip();
    const cols = ['#3a3fb8', '#7a4fd0', '#2c8fe0'];
    const r = rng(5);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      x.fillStyle = (i + j) % 2 ? '#fff' : cols[Math.floor(r() * 3)];
      x.fillRect(12 + i * 32, 14 + j * 32, 30, 30);
    }
    x.fillStyle = '#2c2f93'; x.fillRect(12, 148, 126, 40);
    x.restore();
    x.fillStyle = '#fff'; x.font = `700 100px ${FONT}`; x.fillText('SLIIT', 235, 120);
    x.fillStyle = '#e7e5ff'; x.font = `600 78px ${FONT}`; x.fillText('University', 235, 212);
  }
  if (kind === 'labs') {
    x.save();
    x.shadowColor = '#b58cff'; x.shadowBlur = 26;
    x.fillStyle = '#d6c4ff'; x.font = `700 118px "Consolas","Courier New",monospace`;
    x.fillText('</>', 36, 168);
    x.restore();
    x.fillStyle = '#fff'; x.font = `700 84px ${FONT}`; x.fillText('My Projects', 330, 118);
    x.fillStyle = '#e4d8ff'; x.font = `700 88px ${FONT}`; x.fillText('Lab', 330, 212);
  }
  return toTex(c, 8);
}

export function bannerTexture() {
  const [c, x] = mk(256, 768);
  x.clearRect(0, 0, 256, 768);
  x.beginPath(); x.moveTo(8, 0); x.lineTo(248, 0); x.lineTo(248, 740); x.lineTo(128, 690); x.lineTo(8, 740); x.closePath();
  const g = x.createLinearGradient(0, 0, 0, 768);
  g.addColorStop(0, '#2a3aa8'); g.addColorStop(1, '#0f1648');
  x.fillStyle = g; x.fill();
  x.lineWidth = 8; x.strokeStyle = '#e9d9a8'; x.stroke();
  // open book
  x.save(); x.translate(128, 250);
  x.fillStyle = '#fff';
  x.beginPath(); x.moveTo(0, 20); x.quadraticCurveTo(-50, -10, -96, 10); x.lineTo(-96, 90); x.quadraticCurveTo(-50, 70, 0, 100); x.closePath(); x.fill();
  x.beginPath(); x.moveTo(0, 20); x.quadraticCurveTo(50, -10, 96, 10); x.lineTo(96, 90); x.quadraticCurveTo(50, 70, 0, 100); x.closePath(); x.fill();
  x.strokeStyle = '#7d86ff'; x.lineWidth = 5;
  for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(-80, 34 + i * 16); x.lineTo(-18, 38 + i * 16); x.moveTo(80, 34 + i * 16); x.lineTo(18, 38 + i * 16); x.stroke(); }
  x.restore();
  x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = `600 40px ${FONT}`;
  x.fillText('Education', 128, 480); x.fillText('& Learning', 128, 530);
  return toTex(c, 4);
}

export function kpTexture() {
  const [c, x] = mk(512, 512);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = `700 250px ${FONT}`;
  const g = x.createLinearGradient(0, 130, 0, 380);
  g.addColorStop(0, '#7ffbff'); g.addColorStop(1, '#2c8bff');
  x.shadowColor = '#22d4ff'; x.shadowBlur = 50; x.fillStyle = g;
  x.fillText('KP', 256, 270); x.fillText('KP', 256, 270);
  x.shadowBlur = 0; x.fillText('KP', 256, 270);
  return toTex(c, 4);
}

export function holoLabelTexture(name, tag) {
  const [c, x] = mk(768, 220);
  rr(x, 6, 6, 756, 208, 34); x.fillStyle = 'rgba(14,22,62,.82)'; x.fill();
  x.lineWidth = 3; x.strokeStyle = 'rgba(120,205,255,.7)'; x.stroke();
  x.textAlign = 'center';
  x.fillStyle = '#fff'; let fs = 72; x.font = `600 ${fs}px ${FONT}`; while (x.measureText(name).width > 690 && fs > 30) { fs -= 2; x.font = `600 ${fs}px ${FONT}`; } x.fillText(name, 384, 100);
  x.fillStyle = '#cfe4ff'; x.font = `400 56px ${FONT}`; x.fillText(tag, 384, 176);
  return toTex(c, 4);
}

export function gearTexture() {
  const [c, x] = mk(256, 256);
  x.translate(128, 128);
  const teeth = 9, R = 100, r = 76;
  x.beginPath();
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (i / (teeth * 2)) * Math.PI * 2, a1 = ((i + 1) / (teeth * 2)) * Math.PI * 2;
    const rad = i % 2 ? r : R;
    x.lineTo(Math.cos(a0 + 0.08) * rad, Math.sin(a0 + 0.08) * rad);
    x.lineTo(Math.cos(a1 - 0.08) * rad, Math.sin(a1 - 0.08) * rad);
  }
  x.closePath();
  x.arc(0, 0, 34, 0, Math.PI * 2, true);
  const g = x.createLinearGradient(-100, -100, 100, 100);
  g.addColorStop(0, '#d6c0ff'); g.addColorStop(1, '#8a4dff');
  x.shadowColor = '#b27dff'; x.shadowBlur = 30; x.fillStyle = g; x.fill('evenodd');
  return toTex(c, 4);
}

export function pavingTexture() {
  const S = 1024, [c, x] = mk(S, S), r = rng(11);
  x.fillStyle = '#8f8cab'; x.fillRect(0, 0, S, S);
  const bands = [70, 140, 230, 330, 420, 480, 512];
  const counts = [1, 14, 22, 32, 44, 56, 64];
  x.translate(S / 2, S / 2);
  for (let b = 1; b < bands.length; b++) {
    const r0 = bands[b - 1], r1 = bands[b], n = counts[b], off = b % 2 ? 0 : Math.PI / n;
    for (let i = 0; i < n; i++) {
      const a0 = off + (i / n) * Math.PI * 2, a1 = off + ((i + 1) / n) * Math.PI * 2;
      const l = 56 + r() * 10 + (b === 6 ? 8 : 0);
      x.beginPath(); x.arc(0, 0, r1, a0, a1); x.arc(0, 0, r0, a1, a0, true); x.closePath();
      x.fillStyle = `hsl(250,${14 + r() * 6}%,${l}%)`; x.fill();
      x.lineWidth = 3; x.strokeStyle = 'rgba(40,30,80,.5)'; x.stroke();
    }
  }
  // soft lighter inner halo so the fountain area reads brighter
  const g = x.createRadialGradient(0, 0, 60, 0, 0, 300);
  g.addColorStop(0, 'rgba(150,230,255,.28)'); g.addColorStop(1, 'rgba(150,230,255,0)');
  x.fillStyle = g; x.fillRect(-S / 2, -S / 2, S, S);
  const t = toTex(c, 8);
  return t;
}

export function grassTexture() {
  const [c, x] = mk(512, 512), r = rng(3);
  x.fillStyle = '#2f6e45'; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 420; i++) {
    x.fillStyle = r() > 0.5 ? 'rgba(80,170,90,.10)' : 'rgba(10,50,60,.12)';
    x.beginPath(); x.arc(r() * 512, r() * 512, 6 + r() * 26, 0, 7); x.fill();
  }
  for (let i = 0; i < 2600; i++) {
    x.strokeStyle = r() > 0.5 ? 'rgba(120,210,120,.35)' : 'rgba(10,60,50,.35)';
    const px = r() * 512, py = r() * 512;
    x.beginPath(); x.moveTo(px, py); x.lineTo(px + r() * 4 - 2, py - 3 - r() * 5); x.stroke();
  }
  const t = toTex(c, 4);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 7);
  return t;
}

export function cloudTexture() {
  const [c, x] = mk(512, 128), r = rng(9);
  for (let i = 0; i < 46; i++) {
    const px = 70 + r() * 372, py = 64 + (r() - 0.5) * 34, rad = 22 + r() * 34;
    const g = x.createRadialGradient(px, py, 0, px, py, rad);
    g.addColorStop(0, 'rgba(255,255,255,.28)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(px - rad, py - rad, rad * 2, rad * 2);
  }
  return toTex(c, 1);
}

// Warm, lit interiors painted on glass – one texture per building style
export function facadeTexture(kind) {
  const W = 1024, H = 512, [c, x] = mk(W, H), r = rng(kind.length * 31 + 7);
  const cfg = {
    nupa: { cols: 8, rows: 2, top: '#fff3cf', bot: '#ffb55a', frame: '#0c1326' },
    sliit: { cols: 5, rows: 2, top: '#fff7e0', bot: '#ffc272', frame: '#8a6a4c' },
    labs: { cols: 6, rows: 2, top: '#7a45ff', bot: '#2a1070', frame: '#100829' },
  }[kind];
  x.fillStyle = cfg.frame; x.fillRect(0, 0, W, H);
  const f = 12, cw = (W - f) / cfg.cols, ch = (H - f) / cfg.rows;
  for (let j = 0; j < cfg.rows; j++) for (let i = 0; i < cfg.cols; i++) {
    const X = f / 2 + i * cw + f / 2, Y = f / 2 + j * ch + f / 2, w = cw - f, h = ch - f;
    const g = x.createLinearGradient(0, Y, 0, Y + h);
    g.addColorStop(0, cfg.top); g.addColorStop(1, cfg.bot);
    x.fillStyle = g; x.fillRect(X, Y, w, h);
    if (r() < 0.14 && kind !== 'sliit') { x.fillStyle = 'rgba(8,12,30,.5)'; x.fillRect(X, Y, w, h); }
    if (kind === 'nupa') {
      x.fillStyle = 'rgba(255,255,255,.9)'; x.fillRect(X + w * 0.2, Y + 6, w * 0.6, 5);
      x.fillStyle = 'rgba(15,22,48,.85)'; x.fillRect(X + 6, Y + h * 0.66, w - 12, 10);   // desk
      x.fillStyle = '#58d3ff'; x.fillRect(X + w * 0.2, Y + h * 0.5, w * 0.22, h * 0.16); // monitor
      x.fillStyle = 'rgba(15,22,48,.85)';
      if (r() > 0.4) { x.beginPath(); x.arc(X + w * 0.68, Y + h * 0.42, 9, 0, 7); x.fill(); rr(x, X + w * 0.68 - 14, Y + h * 0.48, 28, h * 0.22, 8); x.fill(); }
    } else if (kind === 'sliit') {
      for (let s = 0; s < 6; s++) {
        x.fillStyle = ['#8a4b2a', '#c0803f', '#5a3a66', '#3d6a8a'][Math.floor(r() * 4)];
        x.fillRect(X + 8 + s * 9, Y + h * 0.3, 7, h * 0.62);
        x.fillRect(X + w - 14 - s * 9, Y + h * 0.3, 7, h * 0.62);
      }
      x.fillStyle = 'rgba(255,255,255,.7)'; x.beginPath(); x.arc(X + w / 2, Y + 18, 8, 0, 7); x.fill();
      x.fillStyle = 'rgba(70,40,20,.75)'; x.fillRect(X + w * 0.3, Y + h * 0.7, w * 0.4, 9);
    } else {
      for (let m = 0; m < 3; m++) {
        const mg = x.createLinearGradient(0, 0, 0, 1);
        x.fillStyle = r() > 0.5 ? '#8fe9ff' : '#b9a0ff';
        x.fillRect(X + 8 + m * (w / 3), Y + h * 0.38, w / 3 - 12, h * 0.22);
      }
      x.fillStyle = 'rgba(10,6,30,.9)'; x.fillRect(X + 4, Y + h * 0.64, w - 8, 9);
      x.beginPath(); x.arc(X + w * (0.3 + r() * 0.4), Y + h * 0.6, 8, 0, 7); x.fill();
    }
  }
  // soft diagonal glass sheen
  const sh = x.createLinearGradient(0, 0, W, H);
  sh.addColorStop(0.3, 'rgba(255,255,255,0)'); sh.addColorStop(0.45, 'rgba(255,255,255,.12)'); sh.addColorStop(0.6, 'rgba(255,255,255,0)');
  x.fillStyle = sh; x.fillRect(0, 0, W, H);
  return toTex(c, 8);
}
