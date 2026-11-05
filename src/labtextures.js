import * as THREE from 'three';
import { rng } from './textures.js';

const FONT = '"Poppins","Segoe UI",system-ui,Arial,sans-serif';
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const tex = (c, aniso = 4) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t; };
const rr = (x, X, Y, W, H, R) => { x.beginPath(); if (x.roundRect) x.roundRect(X, Y, W, H, R); else x.rect(X, Y, W, H); };

// ───────── big sunset window wall ─────────
export function windowSky() {
  const W = 2048, H = 1024, [c, x] = mk(W, H), r = rng(21);
  const g = x.createLinearGradient(0, 0, 0, H * 0.72);
  g.addColorStop(0, '#2c2480'); g.addColorStop(0.35, '#7a45b8'); g.addColorStop(0.65, '#e467a0'); g.addColorStop(1, '#ffa56e');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  for (let i = 0; i < 14; i++) { // clouds
    const px = r() * W, py = 120 + r() * 300, rad = 80 + r() * 160;
    const cg = x.createRadialGradient(px, py, 0, px, py, rad); cg.addColorStop(0, 'rgba(255,170,200,.35)'); cg.addColorStop(1, 'rgba(255,170,200,0)');
    x.fillStyle = cg; x.fillRect(px - rad, py - rad, rad * 2, rad * 2);
  }
  const ridge = (base, amp, f, col, ph) => {
    x.beginPath(); x.moveTo(0, H);
    for (let i = 0; i <= 128; i++) { const t = i / 128; x.lineTo(t * W, base - amp * (0.5 + 0.3 * Math.sin(t * f + ph) + 0.15 * Math.sin(t * f * 2.7 + ph * 2) + 0.07 * Math.sin(t * f * 6 + ph))); }
    x.lineTo(W, H); x.closePath(); x.fillStyle = col; x.fill();
  };
  ridge(640, 190, 9, '#7a58a8', 1); ridge(700, 170, 11, '#523f8a', 3); ridge(770, 120, 14, '#34306c', 5);
  x.fillStyle = '#1c1a40'; x.fillRect(0, 800, W, H - 800);
  for (let i = 0; i < 220; i++) { // garden bokeh lights
    const px = r() * W, py = 790 + r() * 220, rad = 3 + r() * 9;
    x.fillStyle = r() > 0.5 ? 'rgba(255,200,110,.85)' : 'rgba(255,150,210,.75)';
    x.beginPath(); x.arc(px, py, rad, 0, 7); x.fill();
  }
  const bloom = (cx, cy, spread, n) => { // blossom trees
    x.strokeStyle = '#2a1a3a'; x.lineWidth = 14; x.beginPath(); x.moveTo(cx, 1000); x.quadraticCurveTo(cx + 20, cy + 250, cx - 10, cy + 100); x.stroke();
    for (let i = 0; i < n; i++) {
      const px = cx + (r() - 0.5) * spread, py = cy + (r() - 0.5) * spread * 0.7, rad = 14 + r() * 38;
      x.fillStyle = `rgba(${240 + r() * 15},${120 + r() * 70},${200 + r() * 40},${0.55 + r() * 0.4})`;
      x.beginPath(); x.arc(px, py, rad, 0, 7); x.fill();
    }
  };
  bloom(120, 560, 420, 140); bloom(420, 620, 300, 70); bloom(1700, 580, 400, 130); bloom(1950, 540, 320, 90);
  // mullions
  x.fillStyle = 'rgba(14,10,34,.92)';
  for (let i = 0; i <= 8; i++) x.fillRect(i * (W / 8) - 6, 0, 12, H);
  for (const y of [0.33, 0.66]) x.fillRect(0, H * y - 5, W, 10);
  const sh = x.createLinearGradient(0, 0, W, H); sh.addColorStop(0.35, 'rgba(255,255,255,0)'); sh.addColorStop(0.5, 'rgba(255,255,255,.10)'); sh.addColorStop(0.65, 'rgba(255,255,255,0)');
  x.fillStyle = sh; x.fillRect(0, 0, W, H);
  return tex(c, 4);
}

// side wall of the hall: warm lit glass, balcony levels, hanging greens
export function wallTexture(seed = 1) {
  const W = 1024, H = 512, [c, x] = mk(W, H), r = rng(seed * 13 + 5);
  x.fillStyle = '#1b1735'; x.fillRect(0, 0, W, H);
  const rows = [[0, 0.5], [0.5, 1]];
  rows.forEach(([a, b], ri) => {
    for (let i = 0; i < 12; i++) {
      const X = 8 + i * (W / 12), w = W / 12 - 12, Y = a * H + 14, h = (b - a) * H - 28;
      const g = x.createLinearGradient(0, Y, 0, Y + h);
      const lit = r() > 0.2;
      g.addColorStop(0, lit ? '#ffe6b0' : '#6a5a90'); g.addColorStop(1, lit ? '#ff9f58' : '#352a60');
      x.fillStyle = g; x.fillRect(X, Y, w, h);
      if (lit) { x.fillStyle = 'rgba(40,20,20,.6)'; x.fillRect(X + w * 0.3, Y + h * 0.55, w * 0.4, h * 0.08); }
    }
    x.fillStyle = '#ffd9a0'; x.fillRect(0, b * H - 16, W, 5); // glowing floor edge
  });
  for (let i = 0; i < 70; i++) { // hanging plants
    x.strokeStyle = `rgba(60,${130 + r() * 60},80,.9)`; x.lineWidth = 3 + r() * 3;
    const px = r() * W, py = (r() > 0.5 ? 0.5 : 0) * H;
    x.beginPath(); x.moveTo(px, py + 8); x.lineTo(px + (r() - 0.5) * 14, py + 30 + r() * 60); x.stroke();
  }
  return tex(c, 4);
}

export function marbleTexture() {
  const S = 1024, [c, x] = mk(S, S), r = rng(31);
  const g = x.createLinearGradient(0, 0, S, S); g.addColorStop(0, '#d9cdbd'); g.addColorStop(0.5, '#c9bcb0'); g.addColorStop(1, '#bfb4b8');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
  for (let i = 0; i < 40; i++) { x.strokeStyle = `rgba(110,100,120,${0.05 + r() * 0.1})`; x.lineWidth = 1 + r() * 2; x.beginPath(); x.moveTo(r() * S, r() * S); x.bezierCurveTo(r() * S, r() * S, r() * S, r() * S, r() * S, r() * S); x.stroke(); }
  x.strokeStyle = 'rgba(90,80,100,.45)'; x.lineWidth = 3; x.strokeRect(1, 1, S - 2, S - 2);
  const t = tex(c, 8); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(16, 14); return t;
}

// ───────── mock website screens (preschool) ─────────
export function screenUI(kind) {
  const W = 800, H = 560, [c, x] = mk(W, H), r = rng(kind.length * 9 + 2);
  const bar = (X, Y, w, h, col = '#c9cde6') => { rr(x, X, Y, w, h, h / 2); x.fillStyle = col; x.fill(); };
  if (kind === 'home') {
    x.fillStyle = '#eaf2ff'; x.fillRect(0, 0, W, H);
    x.fillStyle = '#fff'; x.fillRect(0, 0, W, 46); bar(20, 14, 80, 18, '#9a7aff'); bar(600, 16, 60, 14); bar(680, 16, 60, 14);
    const g = x.createLinearGradient(0, 60, 0, 330); g.addColorStop(0, '#8fd0ff'); g.addColorStop(1, '#d6f0ff');
    rr(x, 30, 64, 740, 270, 22); x.fillStyle = g; x.fill();
    x.fillStyle = '#7ccf6a'; x.beginPath(); x.ellipse(400, 330, 380, 70, 0, Math.PI, 0); x.fill();
    x.fillStyle = '#fff3e0'; x.fillRect(300, 190, 200, 100); x.fillStyle = '#e8564a'; x.beginPath(); x.moveTo(280, 195); x.lineTo(400, 120); x.lineTo(520, 195); x.fill();
    x.fillStyle = '#ffcf5a'; x.fillRect(380, 235, 40, 55); x.fillStyle = '#8bd0ff'; x.fillRect(320, 215, 40, 36); x.fillRect(440, 215, 40, 36);
    x.fillStyle = '#3f9a52'; x.beginPath(); x.arc(200, 240, 46, 0, 7); x.arc(610, 235, 52, 0, 7); x.fill();
    ['#ff8fc0', '#9a7aff', '#8a6aff', '#ffb85a'].forEach((col, i) => {
      const X = 30 + i * 188; rr(x, X, 360, 170, 170, 26); x.fillStyle = col; x.fill();
      x.fillStyle = 'rgba(255,255,255,.85)'; x.beginPath(); x.arc(X + 85, 430, 34, 0, 7); x.fill(); bar(X + 30, 490, 110, 14, 'rgba(255,255,255,.7)');
    });
  } else if (kind === 'gallery') {
    x.fillStyle = '#eef1ff'; x.fillRect(0, 0, W, H); x.fillStyle = '#fff'; x.fillRect(0, 0, W, 46); bar(20, 14, 100, 18, '#6a8aff');
    for (let j = 0; j < 2; j++) for (let i = 0; i < 3; i++) {
      const X = 30 + i * 250, Y = 70 + j * 230, g = x.createLinearGradient(X, Y, X + 220, Y + 200);
      g.addColorStop(0, ['#ffd9a0', '#ffb0c8', '#b0d0ff'][(i + j) % 3]); g.addColorStop(1, ['#ff9a60', '#c070d0', '#6a8aff'][(i + j) % 3]);
      rr(x, X, Y, 220, 200, 18); x.fillStyle = g; x.fill();
      x.fillStyle = 'rgba(40,20,60,.35)'; x.beginPath(); x.arc(X + 70 + r() * 60, Y + 90, 24, 0, 7); x.arc(X + 130 + r() * 40, Y + 100, 20, 0, 7); x.fill();
    }
    bar(30, 510, 200, 16, '#b0b8e8');
  } else if (kind === 'chart') {
    x.fillStyle = '#f6f1ff'; x.fillRect(0, 0, W, H); x.fillStyle = '#8a5cff'; x.fillRect(0, 0, 90, H);
    for (let i = 0; i < 5; i++) { x.fillStyle = 'rgba(255,255,255,.75)'; x.beginPath(); x.arc(45, 60 + i * 70, 16, 0, 7); x.fill(); }
    bar(120, 24, 220, 20, '#7a5cd0');
    ['#ff7fb8', '#9a7aff', '#ffb04a', '#6ad0b0', '#8a8aff'].forEach((col, i) => { const h = 80 + r() * 160; rr(x, 140 + i * 56, 380 - h, 40, h, 8); x.fillStyle = col; x.fill(); });
    x.lineWidth = 36; ['#9a7aff', '#ff7fb8', '#ffb04a'].forEach((col, i) => { x.strokeStyle = col; x.beginPath(); x.arc(600, 170, 78, i * 2.1, i * 2.1 + 1.9); x.stroke(); });
    for (let i = 0; i < 4; i++) { bar(430, 320 + i * 46, 300, 22, '#ddd2f6'); x.fillStyle = '#9a7aff'; x.beginPath(); x.arc(450, 331 + i * 46, 9, 0, 7); x.fill(); }
  } else {
    x.fillStyle = '#f4f0ff'; x.fillRect(0, 0, W, H); x.fillStyle = '#fff'; x.fillRect(0, 0, W, 46); bar(20, 14, 100, 18, '#9a7aff');
    for (let j = 0; j < 5; j++) for (let i = 0; i < 7; i++) {
      x.fillStyle = ['#ff7fb8', '#9a7aff', '#ffb04a', '#e4def5', '#6ad0b0'][Math.floor(r() * 5)]; x.beginPath(); x.arc(70 + i * 55, 100 + j * 55, 18, 0, 7); x.fill();
    }
    for (let i = 0; i < 6; i++) { rr(x, 450, 70 + i * 70, 310, 56, 14); x.fillStyle = '#fff'; x.fill(); x.fillStyle = ['#ff9ac8', '#9a7aff', '#ffb85a'][i % 3]; x.beginPath(); x.arc(480, 98 + i * 70, 17, 0, 7); x.fill(); bar(510, 86 + i * 70, 180, 14, '#ddd2f6'); bar(510, 108 + i * 70, 120, 10, '#ece6fa'); }
  }
  return tex(c, 4);
}

export function podiumTextTexture(text) {
  const W = 1400, H = 160, [c, x] = mk(W, H);
  x.strokeStyle = '#7fe6ff'; x.lineWidth = 5; x.shadowColor = '#37d7ff'; x.shadowBlur = 14;
  x.beginPath(); x.moveTo(110, 100); x.lineTo(150, 62); x.lineTo(190, 100); x.moveTo(120, 98); x.lineTo(120, 128); x.lineTo(180, 128); x.lineTo(180, 98); x.stroke();
  x.beginPath(); x.moveTo(150, 46); x.lineTo(134, 54); x.lineTo(150, 62); x.lineTo(166, 54); x.closePath(); x.stroke();
  x.shadowBlur = 0; x.fillStyle = '#fff'; x.font = `600 56px ${FONT}`; x.textAlign = 'left'; x.fillText(text, 230, 100);
  const tw = x.measureText(text).width;
  // pointing hand
  x.save(); x.translate(230 + tw + 60, 40); x.strokeStyle = '#fff'; x.fillStyle = 'rgba(255,255,255,.12)'; x.lineWidth = 4;
  x.beginPath(); x.roundRect ? x.roundRect(10, 28, 44, 52, 14) : x.rect(10, 28, 44, 52); x.fill(); x.stroke();
  x.beginPath(); x.roundRect ? x.roundRect(14, 0, 14, 44, 7) : x.rect(14, 0, 14, 44); x.fill(); x.stroke();
  x.strokeStyle = '#7fe6ff'; x.beginPath(); x.arc(0, 0, 14, 0, 7); x.stroke(); x.restore();
  return tex(c, 4);
}

export function laurelBanner() {
  const [c, x] = mk(256, 768);
  x.beginPath(); x.moveTo(0, 0); x.lineTo(256, 0); x.lineTo(256, 700); x.lineTo(128, 590); x.lineTo(0, 700); x.closePath();
  const g = x.createLinearGradient(0, 0, 0, 768); g.addColorStop(0, '#1b2760'); g.addColorStop(1, '#101a48'); x.fillStyle = g; x.fill();
  x.strokeStyle = '#e9edff'; x.lineWidth = 3; x.stroke();
  const cx = 128, cy = 215; x.fillStyle = '#fff';
  for (const s of [-1, 1]) for (let i = 0; i < 11; i++) {
    const f = 0.35 + i * 0.24, px = cx + s * Math.sin(f) * 86, py = cy + Math.cos(f) * 86 - 6;
    x.beginPath(); x.ellipse(px, py, 17, 7, Math.atan2(-Math.sin(f), s * Math.cos(f)), 0, 7); x.fill();
  }
  x.strokeStyle = '#fff'; x.lineWidth = 4; x.lineJoin = 'round';
  x.beginPath(); x.moveTo(cx, cy - 20); x.quadraticCurveTo(cx - 34, cy - 40, cx - 58, cy - 28); x.lineTo(cx - 58, cy + 26); x.quadraticCurveTo(cx - 32, cy + 12, cx, cy + 34); x.stroke();
  x.beginPath(); x.moveTo(cx, cy - 20); x.quadraticCurveTo(cx + 34, cy - 40, cx + 58, cy - 28); x.lineTo(cx + 58, cy + 26); x.quadraticCurveTo(cx + 32, cy + 12, cx, cy + 34); x.stroke();
  x.lineWidth = 3; for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(cx - 48, cy - 14 + i * 12); x.lineTo(cx - 10, cy - 8 + i * 12); x.moveTo(cx + 48, cy - 14 + i * 12); x.lineTo(cx + 10, cy - 8 + i * 12); x.stroke(); }
  return tex(c, 4);
}

export function galleryPlate(text = 'Student Projects Gallery') {
  const [c, x] = mk(1024, 192);
  const g = x.createLinearGradient(0, 0, 0, 192); g.addColorStop(0, '#d8d0c8'); g.addColorStop(1, '#a8a0a8');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 192);
  x.fillStyle = '#ffe2a8'; x.fillRect(0, 0, 1024, 6); x.fillRect(0, 186, 1024, 6);
  x.textAlign = 'center'; x.font = `600 62px ${FONT}`; x.shadowColor = '#ffd27a'; x.shadowBlur = 16; x.fillStyle = '#fff';
  x.fillText(text, 512, 118);
  x.shadowBlur = 0; x.fillStyle = '#ffd27a'; x.fillRect(60, 142, 900, 3);
  return tex(c, 4);
}

export function schoolSign() {
  const [c, x] = mk(512, 192);
  rr(x, 6, 6, 500, 180, 30); x.fillStyle = '#fff8ea'; x.fill(); x.lineWidth = 8; x.strokeStyle = '#f5a43a'; x.stroke();
  x.textAlign = 'center'; x.fillStyle = '#2a5fc8'; x.font = `700 62px ${FONT}`; x.fillText('Little Learners', 256, 96);
  x.fillStyle = '#e8573a'; x.font = `700 54px ${FONT}`; x.fillText('Preschool', 256, 156);
  return tex(c, 4);
}

export function letterBlock(ch, bg) {
  const [c, x] = mk(128, 128);
  x.fillStyle = bg; x.fillRect(0, 0, 128, 128); x.fillStyle = 'rgba(255,255,255,.3)'; x.fillRect(8, 8, 112, 112);
  x.fillStyle = '#fff'; x.font = `800 96px ${FONT}`; x.textAlign = 'center'; x.fillText(ch, 64, 100);
  return tex(c, 2);
}

export function chalkboard() {
  const [c, x] = mk(256, 256);
  x.fillStyle = '#26382f'; x.fillRect(0, 0, 256, 256); x.strokeStyle = 'rgba(255,255,255,.85)'; x.lineWidth = 4; x.lineCap = 'round';
  x.beginPath(); x.moveTo(40, 70); x.lineTo(110, 60); x.moveTo(40, 110); x.lineTo(170, 105); x.moveTo(40, 150); x.lineTo(130, 156); x.stroke();
  x.beginPath(); x.arc(190, 190, 24, 0, 7); x.stroke();
  return tex(c, 2);
}

export function ctaTexture() {
  const [c, x] = mk(1024, 220);
  const g = x.createLinearGradient(0, 0, 0, 220); g.addColorStop(0, '#4a3a2a'); g.addColorStop(1, '#241a12');
  x.beginPath(); x.moveTo(60, 10); x.lineTo(964, 10); x.lineTo(1014, 110); x.lineTo(964, 210); x.lineTo(60, 210); x.lineTo(10, 110); x.closePath();
  x.fillStyle = g; x.fill(); x.lineWidth = 7; x.strokeStyle = '#e9b85a'; x.shadowColor = '#ffcf6a'; x.shadowBlur = 16; x.stroke(); x.shadowBlur = 0;
  x.strokeStyle = '#ffd98a'; x.lineWidth = 2; x.strokeRect(80, 28, 864, 164);
  x.save(); x.translate(150, 70); x.strokeStyle = '#ffd98a'; x.fillStyle = 'rgba(255,217,138,.15)'; x.lineWidth = 5;
  x.beginPath(); x.roundRect ? x.roundRect(8, 30, 44, 56, 14) : x.rect(8, 30, 44, 56); x.fill(); x.stroke();
  x.beginPath(); x.roundRect ? x.roundRect(16, 0, 14, 48, 7) : x.rect(16, 0, 14, 48); x.fill(); x.stroke(); x.restore();
  x.fillStyle = '#ffd98a'; x.font = `700 70px ${FONT}`; x.textAlign = 'left'; x.fillText('CLICK TO EXPLORE', 245, 140);
  x.font = `700 70px ${FONT}`; x.fillText('»', 835, 140);
  return tex(c, 4);
}


export function sunTablet() {
  const W = 1024, H = 1280, [c, x] = mk(W, H);
  const cx = W / 2, cy = 330;
  // carved border
  x.strokeStyle = '#8a5a2a'; x.lineWidth = 10;
  x.beginPath(); x.moveTo(90, H - 60); x.lineTo(90, cy + 60); x.arc(cx, cy + 60, cx - 90, Math.PI, 0); x.lineTo(W - 90, H - 60); x.closePath(); x.stroke();
  x.strokeStyle = '#d9a64a'; x.lineWidth = 4; x.stroke();
  // sun rays
  x.fillStyle = '#e8b04a'; x.shadowColor = '#ffcf6a'; x.shadowBlur = 20;
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2, r1 = 130, r2 = i % 2 ? 190 : 235;
    x.beginPath(); x.moveTo(cx + Math.cos(a - 0.1) * r1, cy + Math.sin(a - 0.1) * r1); x.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2); x.lineTo(cx + Math.cos(a + 0.1) * r1, cy + Math.sin(a + 0.1) * r1); x.fill();
  }
  const sg = x.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, 140); sg.addColorStop(0, '#ffe8a0'); sg.addColorStop(1, '#d99a30');
  x.fillStyle = sg; x.beginPath(); x.arc(cx, cy, 135, 0, 7); x.fill(); x.shadowBlur = 0;
  x.strokeStyle = '#8a5a1a'; x.lineWidth = 6; x.lineCap = 'round';
  x.beginPath(); x.moveTo(cx - 62, cy - 20); x.quadraticCurveTo(cx - 40, cy - 38, cx - 18, cy - 20); x.moveTo(cx + 62, cy - 20); x.quadraticCurveTo(cx + 40, cy - 38, cx + 18, cy - 20); x.stroke();
  x.beginPath(); x.moveTo(cx, cy - 20); x.lineTo(cx - 8, cy + 30); x.lineTo(cx + 10, cy + 30); x.stroke();
  x.beginPath(); x.arc(cx, cy + 20, 58, 0.3, Math.PI - 0.3); x.stroke();
  // text
  x.textAlign = 'center'; x.lineJoin = 'round'; x.font = `800 128px ${FONT}`;
  [['AVURUDU', 640], ['AUSPICIOUS', 770], ['TIMES', 900]].forEach(([t, y]) => {
    x.strokeStyle = '#5a3410'; x.lineWidth = 16; x.strokeText(t, cx, y);
    const tg = x.createLinearGradient(0, y - 100, 0, y); tg.addColorStop(0, '#ffe9a8'); tg.addColorStop(1, '#e0a030'); x.fillStyle = tg; x.fillText(t, cx, y);
  });
  x.fillStyle = '#d9a64a'; x.fillRect(cx - 200, 970, 400, 5); x.beginPath(); x.arc(cx, 972, 14, 0, 7); x.fill();
  return tex(c, 8);
}

export function rangoliTexture() {
  const S = 512, [c, x] = mk(S, S); x.translate(S / 2, S / 2);
  const ring = (n, r, len, w, col) => { x.fillStyle = col; for (let i = 0; i < n; i++) { x.save(); x.rotate((i / n) * Math.PI * 2); x.beginPath(); x.ellipse(0, -r, w, len, 0, 0, 7); x.fill(); x.restore(); } };
  x.fillStyle = '#fff3d0'; x.beginPath(); x.arc(0, 0, 250, 0, 7); x.fill();
  ring(16, 200, 44, 18, '#e8365a'); ring(16, 150, 40, 16, '#ffd23a'); ring(12, 108, 34, 18, '#ff7ab8'); ring(8, 64, 26, 16, '#fff'); ring(8, 64, 18, 8, '#e8365a');
  x.fillStyle = '#ffd23a'; x.beginPath(); x.arc(0, 0, 24, 0, 7); x.fill();
  x.strokeStyle = '#e8365a'; x.lineWidth = 6; x.beginPath(); x.arc(0, 0, 238, 0, 7); x.stroke();
  return tex(c, 4);
}

export function earthTexture() {
  const S = 512, [c, x] = mk(S, S), r = rng(8);
  x.fillStyle = '#9a7a54'; x.fillRect(0, 0, S, S);
  for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(${90 + r() * 70},${60 + r() * 50},40,.18)`; x.beginPath(); x.arc(r() * S, r() * S, 4 + r() * 22, 0, 7); x.fill(); }
  x.strokeStyle = 'rgba(60,40,20,.55)'; x.lineWidth = 2;
  for (let i = 0; i < 40; i++) { x.beginPath(); let px = r() * S, py = r() * S; x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += (r() - 0.5) * 70; py += (r() - 0.5) * 70; x.lineTo(px, py); } x.stroke(); }
  return tex(c, 4);
}

// ───────── Avurudu holographic panels ─────────
function glass(x, W, H, accent = '#58b8ff') {
  const c = 26;
  x.beginPath(); x.moveTo(c, 0); x.lineTo(W - c, 0); x.lineTo(W, c); x.lineTo(W, H - c); x.lineTo(W - c, H); x.lineTo(c, H); x.lineTo(0, H - c); x.lineTo(0, c); x.closePath();
  const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, 'rgba(24,52,120,.82)'); g.addColorStop(1, 'rgba(14,26,78,.86)');
  x.fillStyle = g; x.fill(); x.lineWidth = 5; x.strokeStyle = accent; x.shadowColor = accent; x.shadowBlur = 16; x.stroke(); x.shadowBlur = 0;
}
function wrap(x, text, X, Y, maxW, lh) {
  let line = '', y = Y;
  for (const w of text.split(' ')) { const t = line + w + ' '; if (x.measureText(t).width > maxW && line) { x.fillText(line, X, y); line = w + ' '; y += lh; } else line = t; }
  x.fillText(line, X, y); return y;
}
const pad = (n) => String(n).padStart(2, '0');
export function nextAvurudu(now = new Date()) {
  let y = now.getFullYear(); let d = new Date(y, 3, 14, 0, 0, 0);
  if (now > new Date(y, 3, 15)) d = new Date(y + 1, 3, 14, 0, 0, 0);
  return d;
}

export function holoInfoPanel() {
  const W = 700, H = 1500, [c, x] = mk(W, H); glass(x, W, H);
  x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(60, 60, 140, 100); x.beginPath(); x.moveTo(30, 175); x.lineTo(230, 175); x.stroke();
  x.fillStyle = '#fff'; x.font = `700 54px ${FONT}`; x.fillText('</>', 82, 128);
  x.font = `700 62px ${FONT}`; ['Sri Lankan New Year', 'Auspicious Times', 'Website'].forEach((t, i) => x.fillText(t, 60, 290 + i * 76));
  x.fillStyle = '#8fd0ff'; x.fillRect(60, 520, W - 120, 3);
  x.fillStyle = '#e8f2ff'; x.font = `400 40px ${FONT}`;
  wrap(x, 'A web application that provides the Sinhala and Tamil New Year date, auspicious times, and traditional guidelines in a modern, user-friendly way.', 60, 600, W - 120, 56);
  ['Avurudu Calendar', 'Auspicious Times', 'Reminders & Alerts', 'Location & Timezone', 'Cultural Information'].forEach((t, i) => {
    const Y = 900 + i * 120; rr(x, 50, Y, W - 100, 92, 30); x.fillStyle = 'rgba(40,90,190,.55)'; x.fill(); x.strokeStyle = '#6ab8ff'; x.lineWidth = 3; x.stroke();
    x.strokeStyle = '#fff'; x.lineWidth = 4; x.beginPath(); x.arc(110, Y + 46, 20, 0, 7); x.stroke();
    x.fillStyle = '#fff'; x.font = `600 40px ${FONT}`; x.fillText(t, 165, Y + 58);
  });
  return tex(c, 4);
}

export function holoCalendar() {
  const W = 760, H = 640, [c, x] = mk(W, H); glass(x, W, H);
  const d = nextAvurudu(), y = d.getFullYear();
  x.fillStyle = '#fff'; x.font = `600 36px ${FONT}`; x.fillText('Sinhala & Tamil New Year Calendar', 60, 62);
  x.textAlign = 'center'; x.font = `600 42px ${FONT}`; x.fillText(`April ${y}`, W / 2, 128);
  x.font = `500 26px ${FONT}`; ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((t, i) => x.fillText(t, 90 + i * 97, 185));
  const first = new Date(y, 3, 1).getDay();
  x.font = `600 34px ${FONT}`;
  for (let n = 1; n <= 30; n++) {
    const idx = first + n - 1, col = idx % 7, row = Math.floor(idx / 7), X = 90 + col * 97, Y = 248 + row * 62;
    if (n === 14) { rr(x, X - 36, Y - 38, 72, 52, 12); x.fillStyle = '#e8a030'; x.fill(); x.fillStyle = '#fff'; } else x.fillStyle = '#e8f2ff';
    x.fillText(String(n), X, Y);
  }
  return tex(c, 4);
}

export function holoSchedule() {
  const W = 760, H = 400, [c, x] = mk(W, H); glass(x, W, H);
  x.fillStyle = '#fff'; x.font = `600 38px ${FONT}`; x.fillText('Auspicious Time Schedule', 70, 66);
  const rows = [['Punya Kalaya', '06:12 AM – 07:00 AM'], ['Anuradha Kalaya', '10:24 AM – 11:12 AM'], ['Meal Preparation', '11:48 AM – 12:18 PM'], ['Work Commencement', '02:36 PM – 03:12 PM']];
  rows.forEach(([a, b], i) => {
    const Y = 135 + i * 66; x.fillStyle = '#ffcf6a'; x.beginPath(); x.arc(80, Y - 10, 18, 0, 7); x.fill();
    x.fillStyle = '#e8f2ff'; x.font = `500 25px ${FONT}`; x.textAlign = 'left'; x.fillText(a, 120, Y); x.textAlign = 'right'; x.fillText(b, W - 45, Y);
  });
  return tex(c, 4);
}

export function holoCountdown() {
  const W = 760, H = 300, [c, x] = mk(W, H), t = tex(c, 4);
  const target = nextAvurudu();
  const draw = () => {
    x.clearRect(0, 0, W, H); glass(x, W, H);
    x.fillStyle = '#fff'; x.font = `600 38px ${FONT}`; x.textAlign = 'left'; x.fillText('Time Until Avurudu', 70, 62);
    const s = Math.max(0, Math.floor((target - new Date()) / 1000));
    const v = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60], lab = ['Days', 'Hours', 'Minutes', 'Seconds'];
    v.forEach((n, i) => {
      const X = 40 + i * 175; rr(x, X, 90, 150, 110, 16); x.fillStyle = 'rgba(30,70,170,.7)'; x.fill(); x.strokeStyle = '#6ab8ff'; x.lineWidth = 3; x.stroke();
      x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = `700 66px ${FONT}`; x.fillText(i === 0 ? String(n) : pad(n), X + 75, 172);
      x.font = `500 26px ${FONT}`; x.fillStyle = '#cfe4ff'; x.fillText(lab[i], X + 75, 240);
    });
    t.needsUpdate = true;
  };
  draw(); return { tex: t, update: draw };
}

export function holoLocation() {
  const W = 760, H = 240, [c, x] = mk(W, H), t = tex(c, 4);
  const draw = () => {
    x.clearRect(0, 0, W, H); glass(x, W, H);
    x.fillStyle = '#fff'; x.textAlign = 'left'; x.font = `600 36px ${FONT}`; x.fillText('Your Location', 120, 62);
    x.strokeStyle = '#fff'; x.lineWidth = 5; x.beginPath(); x.arc(70, 52, 15, 0, 7); x.stroke();
    x.font = `500 34px ${FONT}`; x.fillText('Kurunegala, Sri Lanka', 70, 128);
    let time = ''; try { time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit' }); } catch (e) { time = '--:--'; }
    x.fillText(`Time (IST) : ${time}`, 70, 188);
    t.needsUpdate = true;
  };
  draw(); return { tex: t, update: draw };
}

export function holoReminder() {
  const W = 760, H = 220, [c, x] = mk(W, H); glass(x, W, H);
  x.fillStyle = '#fff'; x.font = `600 38px ${FONT}`; x.fillText('Reminder', 120, 68);
  x.strokeStyle = '#ffd27a'; x.lineWidth = 5; x.beginPath(); x.arc(70, 56, 16, Math.PI, 0); x.lineTo(86, 78); x.lineTo(54, 78); x.closePath(); x.stroke();
  rr(x, 590, 36, 110, 52, 26); x.fillStyle = '#2fd16a'; x.fill(); x.fillStyle = '#fff'; x.beginPath(); x.arc(674, 62, 20, 0, 7); x.fill();
  x.font = `400 30px ${FONT}`; x.fillStyle = '#e8f2ff'; x.fillText('Notify me before each auspicious time', 60, 160);
  return tex(c, 4);
}

// ───────── laptop on the display table ─────────
export function laptopScreen(title, accent = '#5fb8ff') {
  const W = 768, H = 480, [c, x] = mk(W, H);
  const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0e1740'); g.addColorStop(1, '#2a1654');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(0, 0, W, 46);
  ['#ff6b6b', '#ffd23a', '#4cd964'].forEach((col, i) => { x.fillStyle = col; x.beginPath(); x.arc(30 + i * 30, 23, 8, 0, 6.3); x.fill(); });
  x.fillStyle = 'rgba(255,255,255,.14)'; rr(x, 150, 10, 470, 26, 13); x.fill();
  x.fillStyle = 'rgba(255,255,255,.7)'; x.font = `500 17px ${FONT}`; x.textAlign = 'left'; x.fillText('project-details.md', 170, 29);
  x.fillStyle = accent; x.font = `700 20px ${FONT}`; x.fillText('MY PROJECTS LAB', 44, 100);
  x.fillStyle = '#fff'; x.font = `700 40px ${FONT}`;
  const words = title.split(' '), lines = []; let cur = '';
  for (const w of words) { if (x.measureText(cur + ' ' + w).width > 680 && cur) { lines.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w; }
  lines.push(cur); lines.slice(0, 3).forEach((l, i) => x.fillText(l, 44, 156 + i * 48));
  for (let i = 0; i < 3; i++) { x.fillStyle = 'rgba(255,255,255,.16)'; rr(x, 44, 318 + i * 24, 560 - i * 90, 10, 5); x.fill(); }
  x.fillStyle = accent; rr(x, 44, 400, 330, 52, 26); x.fill();
  x.fillStyle = '#0b1230'; x.font = `700 22px ${FONT}`; x.fillText('Click to read details', 74, 434);
  return tex(c, 4);
}
export function laptopLabel(text) {
  const W = 640, H = 150, [c, x] = mk(W, H);
  x.fillStyle = 'rgba(14,10,40,.82)'; rr(x, 8, 8, W - 16, 96, 48); x.fill();
  x.strokeStyle = '#6fd6ff'; x.lineWidth = 4; x.stroke();
  x.fillStyle = '#fff'; x.font = `700 40px ${FONT}`; x.textAlign = 'center'; x.fillText(text, W / 2, 72);
  x.fillStyle = '#6fd6ff'; x.beginPath(); x.moveTo(W / 2 - 22, 108); x.lineTo(W / 2 + 22, 108); x.lineTo(W / 2, 142); x.closePath(); x.fill();
  return tex(c, 4);
}

// "My Projects Lab" sign (replaces the old SLIIT sign in the background)
export function labSign() {
  const [c, x] = mk(1024, 512);
  const g = x.createLinearGradient(0, 0, 1024, 512); g.addColorStop(0, '#1a1040'); g.addColorStop(1, '#2d1b5e'); x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  x.strokeStyle = '#a56bff'; x.lineWidth = 8; x.strokeRect(14, 14, 996, 484);
  x.save(); x.shadowColor = '#a56bff'; x.shadowBlur = 24; x.fillStyle = 'rgba(165,107,255,.18)'; rr(x, 62, 130, 230, 230, 40); x.fill(); x.strokeStyle = '#c9a8ff'; x.lineWidth = 8; x.stroke(); x.restore();
  x.fillStyle = '#fff'; x.font = `700 112px ${FONT}`; x.textAlign = 'center'; x.fillText('</>', 177, 280);
  x.textAlign = 'left'; x.shadowColor = '#c9a8ff'; x.shadowBlur = 14; x.fillStyle = '#fff';
  x.font = `700 118px ${FONT}`; x.fillText('My Projects', 330, 240); x.font = `700 118px ${FONT}`; x.fillText('Lab', 330, 365);
  x.shadowBlur = 0; x.fillStyle = '#ffd27a'; x.fillRect(330, 392, 560, 5);
  return tex(c, 4);
}

