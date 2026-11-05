import * as THREE from 'three';
import { Batch, GEO } from './world.js';
import * as T from './textures.js';
import * as L from './labtextures.js';

const lit = () => new THREE.MeshLambertMaterial({ vertexColors: true });
const glow = () => new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
const basic = (map, o = {}) => new THREE.MeshBasicMaterial({ map, toneMapped: false, transparent: true, ...o });

// small modelling toolkit on top of the merged-geometry Batch
function kit(B, rand) {
  const k = {
    box: (b, c, x, y, z, w, h, d, ry = 0, rx = 0, rz = 0) => B.add(b, GEO.box, c, { x, y, z, sx: w, sy: h, sz: d, ry, rx, rz }),
    cyl: (b, c, x, y, z, r, h, sx = 1, sz = 1) => B.add(b, GEO.cyl, c, { x, y, z, sx: r * sx, sy: h, sz: r * sz }),
    cone: (b, c, x, y, z, r, h, rx = 0, rz = 0, ry = 0) => B.add(b, GEO.cone, c, { x, y, z, sx: r, sy: h, sz: r, rx, rz, ry }),
    ico: (b, c, x, y, z, r, sy = 1, sx = 1) => B.add(b, GEO.ico, c, { x, y, z, sx: r * sx, sy: r * sy, sz: r, ry: rand() * 6 }),
    tor: (b, c, R, t, x, y, z, arc = Math.PI * 2, seg = 64) => B.add(b, new THREE.TorusGeometry(R, t, 6, seg, arc).rotateX(Math.PI / 2), c, { x, y, z }),
    torV: (b, c, R, t, x, y, z, arc = Math.PI, ry = 0) => B.add(b, new THREE.TorusGeometry(R, t, 6, 32, arc), c, { x, y, z, ry }),
    local(x, y, z, ry, fn) {
      B.push(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1, 1, 1)));
      fn(); B.pop();
    },
    // pitched roof: ridge along local X, centred on its base. Colours: front slope, back slope
    roof(b, cf, cb, cx, cy, cz, w, d, h, ry = 0) {
      k.local(cx, cy, cz, ry, () => {
        const a = Math.atan2(h, d / 2), Ls = Math.hypot(d / 2, h) + 0.3;
        k.box(b, cf, 0, h / 2, d / 4, w + 0.5, 0.2, Ls, 0, a);
        k.box(b, cb, 0, h / 2, -d / 4, w + 0.5, 0.2, Ls, 0, -a);
        k.box(b, cb, 0, h + 0.02, 0, w + 0.6, 0.22, 0.34);
        const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, h);
        for (const sx of [-1, 1]) B.add(b, new THREE.ExtrudeGeometry(s, { depth: 0.16, bevelEnabled: false }).translate(0, 0, -0.08).rotateY(Math.PI / 2), 0xf6ead6, { x: sx * (w / 2), y: 0.05, z: 0 });
      });
    },
  };
  return k;
}

const plane = (map, w, h, x, y, z, ry = 0, o = {}) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), basic(map, o)); m.position.set(x, y, z); m.rotation.y = ry; return m; };
function arc(r, h, width, mat, yc) { // curved plate hugging a round podium (front facing +z)
  const tl = width / r;
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 40, 1, true, -tl / 2, tl), mat); m.position.y = yc; return m;
}
function mirrored(content) {
  const w = new THREE.Group(); w.add(content);
  const m = content.clone(true); m.traverse((o) => { if (o.isSprite || o.isPoints) o.visible = false; });
  m.scale.y = -1; w.add(m); return w;
}

// ═════════════════════════════════════════════════════════════
export function buildLab({ mobile = false, theme = 'sliit' } = {}) {
  const TH = { bg: 0xa9c4e4, hemi: [0xffffff, 0xf0e6d2, 2.9], key: [0xfff0d8, 2.0], rim: [0xbcd4ff, 1.0], ceil: 0xf1ead8, cove: 0xff9a3a, dark: 0x1c2a5c, pillar: 0x1c2a5c, sofa: 0x2a3a78, pool: 0xffe2a8, sky: L.windowSkyDay(), wall: L.wallTextureDay(), sign: L.sliitPillarSign(), plate: 'Student Projects Gallery', banner: L.uniBanner() };
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(TH.bg);
  const rand = T.rng(77);
  const updaters = [];
  const glowTex = T.glowTexture();

  scene.add(new THREE.HemisphereLight(TH.hemi[0], TH.hemi[1], TH.hemi[2]));
  const key = new THREE.DirectionalLight(TH.key[0], TH.key[1]); key.position.set(0, 12, 18); scene.add(key);
  const rim = new THREE.DirectionalLight(TH.rim[0], TH.rim[1]); rim.position.set(0, 6, -16); scene.add(rim);

  // ───────── shared hall ─────────
  {
    const B = new Batch(), k = kit(B, rand), hall = new THREE.Group();
    hall.add(plane(TH.sky, 60, 22, 0, 10, -17.5, 0, { transparent: false }));
    const wt = TH.wall;
    for (const s of [-1, 1]) {
      const w = plane(wt, 44, 13, s * 25, 6.5, -4, -s * Math.PI / 2, { transparent: false }); hall.add(w);
      k.box('lit', TH.dark, s * 20, 6.0, -4, 9, 0.5, 30); k.box('glow', 0xffd9a0, s * 15.6, 5.9, -4, 0.1, 0.12, 30);
      k.box('glow', 0xffe2b0, s * 15.6, 6.6, -4, 0.08, 0.7, 30);
      for (let i = 0; i < 22; i++) k.cone('lit', 0x3a8a4a, s * 15.4, 5.2 - rand() * 0.9, -17 + i * 1.3, 0.12, 1.2 + rand() * 1.2, Math.PI, 0);
      for (const z of [-9]) { k.box('lit', TH.pillar, s * 15.8, 6.5, z, 1.5, 13, 1.5); k.box('glow', 0xffcf8a, s * 15.8 - s * 0.78, 6.5, z, 0.06, 12.4, 0.5); }
    }
    k.box('lit', TH.ceil, 0, 13.2, -4, 60, 0.4, 40);
    // ceiling spot glows
    const pos = [];
    for (let x = -18; x <= 18; x += 6) for (let z = -14; z <= 10; z += 6) pos.push(x, 12.8, z);
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    hall.add(Object.assign(new THREE.Points(pg, new THREE.PointsMaterial({ size: 1.6, map: glowTex, color: 0xffd9a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })), { frustumCulled: false }));
    // lounge: sofas, coffee table, rugs, plants
    const sofa = (x, z, ry, c) => k.local(x, 0, z, ry, () => {
      k.box('lit', c, 0, 0.5, 0, 4.4, 0.8, 1.7); k.box('lit', c, 0, 1.15, -0.7, 4.4, 1.1, 0.5);
      for (const s of [-1, 1]) k.box('lit', c, s * 2.2, 0.75, 0, 0.5, 1.2, 1.7);
      k.box('lit', 0x2c3270, -1.0, 1.0, 0.1, 0.9, 0.7, 0.3, 0.2); k.box('lit', 0x3a2f5a, 1.1, 1.0, 0.1, 0.9, 0.7, 0.3, -0.2);
    });
    const plant = (x, z, s = 1) => { k.cyl('lit', 0x2b2433, x, 0.5 * s, z, 0.5 * s, 1.0 * s); for (let i = 0; i < 9; i++) { const a = (i / 9) * 6.28; k.cone('lit', i % 2 ? 0x2e7a4a : 0x3f9a58, x + Math.cos(a) * 0.3 * s, 1.5 * s + rand() * 0.4, z + Math.sin(a) * 0.3 * s, 0.34 * s, (1.6 + rand()) * s, Math.sin(a) * 0.5, -Math.cos(a) * 0.5); } };
    sofa(-14, 11, 0.7, TH.sofa); sofa(15, 11.5, -0.7, TH.sofa);
    k.cyl('lit', 0xe8e0d6, -11, 0.45, 13, 1.4, 0.18); k.cyl('lit', 0x8a6a3a, -11, 0.2, 13, 0.3, 0.4);
    plant(-17.5, 12.5, 1.1); plant(18.5, 11.5, 1.2); plant(-19, 3, 1.4); plant(19.5, 2, 1.3);
    for (const s of [-1, 1]) for (let i = 0; i < 7; i++) { const a = rand() * 6.28; k.cone('lit', 0x2f8a52, s * (17 + rand() * 2), 0.8, 17 + rand(), 0.5, 2.8 + rand(), Math.sin(a) * 0.7, Math.cos(a) * 0.7); }
    hall.add(B.build('lit', lit()), B.build('glow', glow()));
    scene.add(mirrored(hall));
    // floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(260, 220).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: L.marbleTexture(), transparent: true, opacity: 0.86, toneMapped: false, depthWrite: false }));
    floor.position.set(0, 0, -4); floor.renderOrder = 1; scene.add(floor);
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(40, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: glowTex, color: TH.pool, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    pool.position.set(0, 0.03, 2); pool.renderOrder = 2; scene.add(pool);
  }

  const mk = () => { const B = new Batch(); return { B, k: kit(B, rand), g: new THREE.Group() }; };
  const hoverRing = (r, y, color) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.14, 6, 80).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    m.position.y = y; return m;
  };
  const screen = (g, B, k, map, x, y, z, ry, w, h) => {
    const grp = new THREE.Group(); grp.position.set(x, y, z); grp.rotation.y = ry; grp.updateMatrix(); g.add(grp);
    grp.add(plane(map, w, h, 0, 0, 0.04, 0, { transparent: false }));
    B.push(grp.matrix);
    k.box('glow', 0x5fb8ff, 0, h / 2 + 0.05, 0, w + 0.2, 0.08, 0.12); k.box('glow', 0x5fb8ff, 0, -h / 2 - 0.05, 0, w + 0.2, 0.08, 0.12);
    k.box('glow', 0x5fb8ff, -w / 2 - 0.05, 0, 0, 0.08, h, 0.12); k.box('glow', 0x5fb8ff, w / 2 + 0.05, 0, 0, 0.08, h, 0.12);
    k.box('lit', 0x25306a, 0, -h / 2 - 0.5, 0, w + 0.9, 0.7, 0.9); k.box('glow', 0x5fb8ff, 0, -h / 2 - 0.12, 0.46, w + 0.9, 0.06, 0.05);
    B.pop();
  };

  // display table with a clickable laptop (opens the project-details reader)
  const desk = (g, k, { x, z, ry, title, accent, accentHex }) => {
    const grp = new THREE.Group(); grp.position.set(x, 0, z); grp.rotation.y = ry; g.add(grp);
    k.local(x, 0, z, ry, () => {
      k.box('lit', 0xb98a58, 0, 1.55, 0, 4.4, 0.16, 2.4); k.box('glow', accentHex, 0, 1.4, 1.2, 4.4, 0.05, 0.05); k.box('glow', accentHex, 0, 1.4, -1.2, 4.4, 0.05, 0.05);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) k.box('lit', 0x2a2440, sx * 1.95, 0.75, sz * 0.95, 0.14, 1.5, 0.14);
      k.box('lit', 0x3a3256, 0, 0.45, 0, 3.8, 0.08, 1.9);
      k.box('lit', 0xc4c8d4, 0, 1.68, 0.1, 2.7, 0.1, 1.7); k.box('lit', 0x8a90a0, 0, 1.74, 0.5, 1.2, 0.01, 0.6);
      k.cyl('lit', 0xf4efe6, 1.7, 1.77, 0.7, 0.18, 0.28); k.torV('lit', 0xf4efe6, 0.1, 0.035, 1.9, 1.77, 0.7, Math.PI * 2);
      k.box('lit', 0xe8302c, -1.7, 1.7, 0.6, 0.9, 0.1, 0.65, 0.2); k.box('lit', 0x2a7be8, -1.7, 1.8, 0.6, 0.8, 0.1, 0.58, 0.05); k.box('lit', 0xffb81a, -1.7, 1.9, 0.6, 0.7, 0.1, 0.5, -0.1);
      k.cyl('lit', 0x2b2433, -1.6, 1.86, -0.6, 0.25, 0.4);
      for (let i = 0; i < 6; i++) { const a = (i / 6) * 6.28; k.cone('lit', i % 2 ? 0x2e7a4a : 0x3f9a58, -1.6 + Math.cos(a) * 0.15, 2.3, -0.6 + Math.sin(a) * 0.15, 0.2, 0.9, Math.sin(a) * 0.6, -Math.cos(a) * 0.6); }
    });
    const lid = new THREE.Group(); lid.position.set(0, 1.73, -0.72); lid.rotation.x = -0.3; grp.add(lid);
    { const lm = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.75, 0.08), new THREE.MeshLambertMaterial({ color: 0xc4c8d4 })); lm.position.set(0, 0.875, 0); lid.add(lm); }
    lid.add(plane(L.laptopScreen(title, accent), 2.5, 1.56, 0, 0.875, 0.05, 0, { transparent: false }));
    const glowSp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: accentHex, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })); glowSp.scale.set(6.5, 4.6, 1); glowSp.position.set(0, 2.5, -0.2); grp.add(glowSp);
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: L.laptopLabel('READ PROJECT DETAILS'), transparent: true, depthWrite: false, toneMapped: false })); label.scale.set(3.6, 0.85, 1); label.position.set(0, 4.6, 0.2); grp.add(label);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(4.6, 3.4, 2.6), new THREE.MeshBasicMaterial()); hit.visible = false; hit.position.set(0, 1.9, 0); hit.userData.kind = 'laptop'; grp.add(hit);
    return { hit, glow: glowSp, label, update(t, on) { glowSp.material.opacity += ((on ? 0.95 : 0.34 + 0.1 * Math.sin(t * 3)) - glowSp.material.opacity) * 0.15; label.position.y = 4.6 + Math.sin(t * 2) * 0.12; label.scale.set(3.6 * (on ? 1.08 : 1), 0.85 * (on ? 1.08 : 1), 1); } };
  };

  // ═════════ ROOM 1 : Preschool Management System ═════════
  const preschool = (() => {
    const { B, k, g } = mk(), picks = [], Y = 1.36;
    // podium
    k.cyl('lit', 0x0f1a48, 0, 0.6, 0, 7.0, 1.2); k.cyl('lit', 0x5ab548, 0, 1.28, 0, 6.7, 0.16);
    k.tor('glow', 0x48b8ff, 7.0, 0.08, 0, 1.2, 0); k.tor('glow', 0xffb348, 7.35, 0.07, 0, 0.1, 0); k.tor('glow', 0x48b8ff, 7.0, 0.06, 0, 0.3, 0);
    const txt = arc(7.04, 1.0, 8.6, basic(L.podiumTextTexture('Preschool Management System')), 0.62); g.add(txt);
    // picket fence
    for (let i = 0; i < 56; i++) { const a = (i / 56) * 6.28; if (Math.abs(Math.atan2(Math.sin(a - Math.PI / 2), Math.cos(a - Math.PI / 2))) < 0.2) continue; k.box('lit', 0xffffff, Math.cos(a) * 6.3, Y + 0.38, Math.sin(a) * 6.3, 0.14, 0.76, 0.06, -a + Math.PI / 2); }
    k.tor('lit', 0xffffff, 6.3, 0.035, 0, Y + 0.6, 0); k.tor('lit', 0xffffff, 6.3, 0.035, 0, Y + 0.25, 0);
    // house
    k.box('lit', 0xfff0da, 0, Y + 1.2, -1.4, 5.4, 2.4, 3.4); k.box('lit', 0xfff0da, -3.3, Y + 1.0, -1.2, 3.0, 2.0, 3.0);
    k.roof('lit', 0x7a56cc, 0x5e3fae, 0, Y + 2.4, -1.4, 5.4, 3.6, 1.5); k.roof('lit', 0x7a56cc, 0x5e3fae, -3.3, Y + 2.0, -1.2, 3.0, 3.2, 1.3);
    k.roof('lit', 0xf0522f, 0xd8421f, 0, Y + 2.4, 0.55, 2.8, 2.6, 1.15, Math.PI / 2);
    k.box('lit', 0xfff0da, 0, Y + 1.2, 0.2, 2.4, 2.4, 0.3);
    [0xe8302c, 0xff9a2a, 0xffd830, 0x44b84a, 0x3a8cf0].forEach((c, i) => k.torV('lit', c, 0.9 - i * 0.14, 0.07, 0, Y + 3.8, 0.62, Math.PI));
    k.ico('lit', 0xffffff, -0.95, Y + 3.8, 0.62, 0.22, 0.8); k.ico('lit', 0xffffff, 0.95, Y + 3.8, 0.62, 0.22, 0.8);
    k.box('lit', 0xf4ece0, -1.7, Y + 3.9, -1.6, 0.55, 1.4, 0.55); k.box('lit', 0xd8421f, -1.7, Y + 4.65, -1.6, 0.7, 0.14, 0.7);
    k.box('lit', 0x8a5a2a, 0, Y + 0.8, 0.38, 1.3, 1.6, 0.12); k.box('glow', 0xffd890, 0, Y + 0.85, 0.45, 1.0, 1.4, 0.04); k.box('lit', 0x8a5a2a, 0, Y + 0.85, 0.47, 0.06, 1.4, 0.04);
    for (const s of [-1, 1]) { k.box('lit', 0xffffff, s * 1.9, Y + 1.2, 0.1, 1.1, 1.0, 0.08); k.box('glow', 0xffe0a0, s * 1.9, Y + 1.2, 0.15, 0.9, 0.8, 0.04); k.box('lit', 0xff9a2a, s * 1.9, Y + 1.85, 0.2, 1.3, 0.14, 0.4, 0, 0.3); }
    for (const s of [-1, 1]) { k.box('lit', 0xffffff, -3.3 + s * 0.8, Y + 1.0, 0.4, 1.0, 0.9, 0.08); k.box('glow', 0xffe0a0, -3.3 + s * 0.8, Y + 1.0, 0.45, 0.82, 0.72, 0.04); }
    const sign = plane(L.schoolSign(), 1.9, 0.71, 0, Y + 2.35, 0.82); g.add(sign);
    for (let i = 0; i < 6; i++) k.cyl('lit', 0xf4efe6, (i % 2 ? 0.3 : -0.3), Y + 0.06, 1.0 + i * 0.85, 0.34, 0.1, 1.2, 0.8);
    for (let i = 0; i < 26; i++) { const s = i % 2 ? 1 : -1; k.ico('lit', [0xff6fa8, 0xffd23a, 0xff7a3a, 0xffffff, 0xb070ff][Math.floor(rand() * 5)], s * (1.5 + rand() * 1.2), Y + 0.2, 0.9 + rand() * 1.0, 0.16 + rand() * 0.1); }
    for (const s of [-1, 1]) k.ico('lit', 0x3f9a52, s * 2.6, Y + 0.35, 0.7, 0.45, 0.8);
    // playground (left)
    k.local(-4.4, Y, 2.0, 0.3, () => {
      for (const [x, z] of [[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.6], [0.6, 0.6]]) k.box('lit', 0xe8302c, x, 1.0, z, 0.14, 2.0, 0.14);
      k.box('lit', 0xffc23a, 0, 1.45, 0, 1.4, 0.12, 1.4); k.cone('lit', 0x3a8cf0, 0, 2.55, 0, 1.15, 0.9, 0, 0, Math.PI / 4);
      k.box('lit', 0xffd23a, 0.0, 0.95, 1.9, 0.75, 0.1, 2.9, 0, 0.62); k.box('lit', 0xe8302c, -0.4, 1.0, 1.9, 0.08, 0.3, 2.9, 0, 0.62); k.box('lit', 0xe8302c, 0.4, 1.0, 1.9, 0.08, 0.3, 2.9, 0, 0.62);
      for (let i = 0; i < 5; i++) k.box('lit', 0x3a8cf0, -1.05, 0.25 + i * 0.3, -0.2, 0.06, 0.06, 0.7); k.box('lit', 0x3a8cf0, -1.05, 0.8, -0.2, 0.08, 1.7, 0.08, 0, 0, 0.2);
    });
    // easel + chalkboard
    k.box('lit', 0x8a5a2a, -1.9, Y + 0.75, 2.45, 1.1, 1.0, 0.08, 0, -0.12); { const cb = plane(L.chalkboard(), 0.95, 0.85, -1.9, Y + 0.78, 2.5, 0, { transparent: false }); cb.rotation.x = -0.12; g.add(cb); }
    k.box('lit', 0x8a5a2a, -2.3, Y + 0.35, 2.7, 0.08, 0.8, 0.08, 0, 0.3); k.box('lit', 0x8a5a2a, -1.5, Y + 0.35, 2.7, 0.08, 0.8, 0.08, 0, 0.3);
    // tree
    k.cone('lit', 0x6a4528, 3.5, Y + 1.5, -0.9, 0.5, 3.2); const gr = [0x2f8a3a, 0x3fa84a, 0x58bd4a, 0x2a7a36];
    for (let i = 0; i < 9; i++) { const a = rand() * 6.28, r = rand() * 1.3; k.ico('lit', gr[i % 4], 3.5 + Math.cos(a) * r, Y + 3.7 + rand() * 1.3, -0.9 + Math.sin(a) * r, 0.95 + rand() * 0.5, 0.85); }
    // swing set
    k.local(4.7, Y, 2.0, -0.2, () => {
      for (const s of [-1, 1]) { k.box('lit', 0x2a7be8, s * 1.4, 1.1, -0.35, 0.1, 2.3, 0.1, 0, 0, 0.18 * s); k.box('lit', 0x2a7be8, s * 1.4, 1.1, 0.35, 0.1, 2.3, 0.1, 0, 0, 0.18 * s); }
      k.box('lit', 0x2a7be8, 0, 2.15, 0, 3.0, 0.12, 0.12);
      for (const x of [-0.6, 0.6]) { k.box('lit', 0x6a5a40, x, 1.4, 0, 0.03, 1.5, 0.03); k.box('lit', x > 0 ? 0xe8302c : 0xffc23a, x, 0.62, 0, 0.55, 0.07, 0.25); }
    });
    // ABC blocks
    [['A', '#f0522f', -0.1, 0, 2.5, 0.15], ['B', '#2a7be8', 0.78, 0, 2.55, -0.1], ['C', '#ffb81a', 0.34, 0.72, 2.5, 0.05]].forEach(([ch, col, x, yy, z, ry], i) => {
      const bx = 1.7 + x; k.box('lit', [0xf0522f, 0x2a7be8, 0xffb81a][i], bx, Y + 0.36 + yy, z, 0.72, 0.72, 0.72, ry);
      const p = plane(L.letterBlock(ch, col), 0.62, 0.62, bx, Y + 0.36 + yy, z + 0.37, ry, { transparent: false }); g.add(p);
    });
    for (let i = 0; i < 40; i++) { const a = rand() * 6.28, r = 5.2 + rand() * 0.8; k.ico('lit', [0xff6fa8, 0xffd23a, 0xff7a3a, 0xb070ff, 0xffffff][Math.floor(rand() * 5)], Math.cos(a) * r, Y + 0.18, Math.sin(a) * r, 0.14 + rand() * 0.1); }
    // screens
    screen(g, B, k, L.screenUI('home'), -11.4, 5.3, 2.0, 0.5, 6.4, 4.5); screen(g, B, k, L.screenUI('gallery'), -6.9, 4.9, -3.4, 0.3, 3.9, 2.9);
    screen(g, B, k, L.screenUI('chart'), 6.9, 4.9, -3.4, -0.3, 3.9, 2.9); screen(g, B, k, L.screenUI('list'), 11.4, 5.3, 2.0, -0.5, 6.4, 4.5);
    // banners, sign, plate
    const bt = TH.banner;
    for (const s of [-1, 1]) { g.add(plane(bt, 3.2, 9.6, s * 12.9, 8.2, -5.5, -s * 0.18)); k.box('glow', 0xffe0a8, s * 12.9, 13.0, -5.5, 3.4, 0.14, 0.2); }
    k.box('lit', 0x0a0f2a, 0, 11.0, -13.2, 9.6, 3.6, 0.5); k.box('glow', 0x5aa0ff, 0, 12.82, -12.92, 9.7, 0.08, 0.08); k.box('glow', 0x5aa0ff, 0, 9.18, -12.92, 9.7, 0.08, 0.08);
    g.add(plane(TH.sign, 7.2, 3.6, 0, 11.0, -12.9, 0, { transparent: false }));
    k.box('lit', 0xb8b0a8, 0, 8.0, -13.2, 11.0, 2.0, 0.6); g.add(plane(L.galleryPlate(TH.plate), 10.6, 1.95, 0, 8.0, -12.88, 0, { transparent: false }));
    // chandelier + ceiling cove
    k.tor('glow', 0xffd27a, 4.6, 0.13, 0, 11.4, -1); k.tor('glow', 0xffe9b8, 3.3, 0.11, 0, 10.6, -1);
    for (const a of [0.8, 2.4, 3.9, 5.5]) k.box('glow', 0xffd27a, Math.cos(a) * 4.0, 12.2, Math.sin(a) * 4.0 - 1, 0.05, 1.7, 0.05);
    for (const [w, d, x, z, c] of [[32, 0.14, 0, -12, TH.cove], [32, 0.14, 0, 8, TH.cove], [0.14, 20, -16, -2, TH.cove], [0.14, 20, 16, -2, TH.cove]]) k.box('glow', c, x, 12.9, z, w, 0.14, d);
    const dk = desk(g, k, { x: 8.4, z: 6.2, ry: -0.5, title: 'Preschool Management System', accent: '#5fb8ff', accentHex: 0x5fb8ff });
    picks.push(dk.hit);
    g.add(B.build('lit', lit()), B.build('glow', glow()));
    const hover = hoverRing(7.05, 1.22, 0x66d0ff); g.add(hover);
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(7.4, 7.4, 8, 12), new THREE.MeshBasicMaterial()); hit.visible = false; hit.position.y = 4.8; hit.userData.kind = 'model'; g.add(hit); picks.push(hit);
    return { key: 'preschool', group: mirrored(g), picks, hover, desk: dk, cam: { x: 0, y: 4.6, d: 24 } };
  })();

  // ═════════ ROOM 2 : Avurudu Auspicious Times ═════════
  const avurudu = (() => {
    const { B, k, g } = mk(), picks = [], Y = 1.36, upd = [];
    k.cyl('lit', 0x2a2330, 0, 0.6, 0, 7.8, 1.2); k.cyl('lit', 0x4f8f3a, 0, 1.28, 0, 7.5, 0.16);
    k.tor('glow', 0xf0b848, 7.8, 0.09, 0, 1.2, 0); k.tor('glow', 0x46b0ff, 8.25, 0.09, 0, 0.1, 0); k.tor('glow', 0x46b0ff, 7.85, 0.05, 0, 0.35, 0);
    const earth = new THREE.Mesh(new THREE.CircleGeometry(5.6, 40).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ map: L.earthTexture() })); earth.position.set(0.4, 1.38, 1.2); g.add(earth);
    const rang = plane(L.rangoliTexture(), 5.4, 5.4, 0.2, 1.4, 2.2, 0); rang.rotation.x = -Math.PI / 2; g.add(rang);
    // stone tablet
    const sh = new THREE.Shape(); sh.moveTo(-2.9, 0); sh.lineTo(2.9, 0); sh.lineTo(2.9, 4.4); sh.absarc(0, 4.4, 2.9, 0, Math.PI, false); sh.lineTo(-2.9, 0);
    B.add('lit', new THREE.ExtrudeGeometry(sh, { depth: 0.9, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.12, bevelSegments: 1, curveSegments: 18 }), 0x9a8672, { x: 0.8, y: Y + 1.1, z: -5.6, sx: 1.4, sy: 1.4, sz: 1.4 });
    for (const s of [-1, 1]) { k.box('lit', 0x6a5848, 0.8 + s * 5.0, Y + 4.9, -5.0, 0.9, 7.6, 1.0); k.cone('lit', 0x8a7660, 0.8 + s * 5.0, Y + 9.1, -5.0, 0.65, 1.0); }
    g.add(plane(L.sunTablet(), 7.9, 9.88, 0.8, Y + 6.6, -4.14, 0));
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffb860, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })); aura.scale.set(14, 14, 1); aura.position.set(0.8, Y + 9.6, -3.8); g.add(aura);
    // Sri Lankan house
    const HX = -2.3, HZ = 0.7;
    k.local(HX, Y, HZ, 0.12, () => {
      k.box('lit', 0xf4e8d4, 0, 1.1, 0, 5.6, 2.2, 3.4); k.box('lit', 0x7a5a3a, 0, 0.08, 1.7, 5.8, 0.16, 1.7);
      k.roof('lit', 0xb4452e, 0x9a3626, 0, 2.2, 0, 5.6, 4.6, 1.6);
      for (const x of [-2.6, -0.9, 0.9, 2.6]) k.cyl('lit', 0x6a3f22, x, 1.15, 2.4, 0.12, 2.3);
      k.box('lit', 0xa63f2a, 0, 2.5, 2.0, 6.4, 0.16, 2.6, 0, 0.3);
      for (const x of [-1.9, 1.9]) { k.box('lit', 0x4a2a16, x, 1.2, 1.74, 1.1, 1.0, 0.1); k.box('glow', 0xffb85a, x, 1.2, 1.8, 0.9, 0.8, 0.04); }
      k.box('lit', 0x4a2a16, 0, 1.0, 1.74, 1.1, 1.8, 0.1); k.box('glow', 0xffa840, 0, 0.95, 1.8, 0.9, 1.6, 0.04);
      for (const x of [-2.2, 2.2]) { k.box('lit', 0x7a4a24, x, 0.45, 2.7, 1.5, 0.1, 0.5); k.box('lit', 0x7a4a24, x, 0.8, 2.95, 1.5, 0.5, 0.08); k.box('lit', 0x7a4a24, x, 0.22, 2.7, 0.1, 0.44, 0.4); }
      for (const x of [-1.8, 1.8]) { k.box('glow', 0xffcf6a, x, 2.1, 2.4, 0.18, 0.28, 0.18); }
    });
    // blossom tree (left)
    const pinks = [0xff8ed8, 0xff6fc6, 0xf06ad8, 0xffb2ea, 0xd070ff];
    k.cone('lit', 0x5b3a30, -7.6, Y + 2.0, -1.8, 0.55, 4.2); k.cone('lit', 0x5b3a30, -6.7, Y + 4.2, -1.8, 0.2, 2.2, 0, 0.9);
    for (let i = 0; i < 18; i++) { const a = rand() * 6.28, r = rand() * 2.6; k.ico('lit', pinks[i % 5], -7.1 + Math.cos(a) * r, Y + 4.4 + rand() * 2.2, -1.8 + Math.sin(a) * r * 0.8, 0.8 + rand() * 0.8, 0.8); }
    // golden shower tree + swing (right)
    k.local(1.8, 0, 0, 0, () => {
    k.cone('lit', 0x5a3c2a, 5.4, Y + 1.9, -1.6, 0.7, 4.0); k.cone('lit', 0x5a3c2a, 5.0, Y + 4.2, -1.6, 0.25, 2.2, 0, 0.5); k.cone('lit', 0x5a3c2a, 6.0, Y + 4.1, -1.6, 0.22, 2.0, 0, -0.5);
    for (let i = 0; i < 14; i++) { const a = rand() * 6.28, r = rand() * 2.4; k.ico('lit', [0x6aa83a, 0x8abe4a, 0x4e9034][i % 3], 5.5 + Math.cos(a) * r, Y + 5.0 + rand() * 1.4, -1.6 + Math.sin(a) * r * 0.7, 0.7 + rand() * 0.5, 0.7); }
    for (let i = 0; i < 70; i++) { const a = rand() * 6.28, r = 0.4 + rand() * 2.8; k.cone('lit', i % 3 ? 0xffd21a : 0xf5b800, 5.5 + Math.cos(a) * r, Y + 4.7 - rand() * 0.8, -1.6 + Math.sin(a) * r * 0.7, 0.09, 0.5 + rand() * 0.9, Math.PI); }
    k.box('lit', 0x6a4a2a, 6.5, Y + 3.5, 0.6, 0.22, 0.22, 0.22); k.box('lit', 0x6a4a2a, 7.9, Y + 1.7, 0.6, 0.26, 3.6, 0.26); k.box('lit', 0x6a4a2a, 6.6, Y + 3.5, 0.6, 3.2, 0.22, 0.22);
    k.box('lit', 0x6a4a2a, 5.2, Y + 1.9, 0.6, 0.26, 3.9, 0.26, 0, 0, 0.1);
    for (const x of [6.0, 7.2]) { for (let i = 0; i < 10; i++) k.ico('lit', 0xffd21a, x, Y + 3.3 - i * 0.2, 0.6, 0.1); }
    k.box('lit', 0xd8365a, 6.6, Y + 1.25, 0.6, 1.6, 0.14, 0.5);
    });
    // brass lamp
    const lx = 1.6, lz = 3.4; k.cyl('lit', 0xd9a23a, lx, Y + 0.08, lz, 0.55, 0.14); k.tor('lit', 0xe8365a, 0.7, 0.1, lx, Y + 0.16, lz);
    k.cyl('lit', 0xd9a23a, lx, Y + 1.2, lz, 0.07, 2.2); for (const yy of [0.4, 1.0, 1.7, 2.2]) k.ico('lit', 0xe8b84a, lx, Y + yy, lz, 0.17);
    for (let i = 0; i < 5; i++) { const a = (i / 5) * 6.28; k.cone('lit', 0xd9a23a, lx + Math.cos(a) * 0.34, Y + 2.42, lz + Math.sin(a) * 0.34, 0.12, 0.2); k.box('glow', 0xffd060, lx + Math.cos(a) * 0.34, Y + 2.6, lz + Math.sin(a) * 0.34, 0.07, 0.16, 0.07); }
    k.box('glow', 0xffd060, lx, Y + 2.65, lz, 0.1, 0.22, 0.1);
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffa840, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })); flame.scale.set(2.6, 2.6, 1); flame.position.set(lx, Y + 2.7, lz); g.add(flame);
    upd.push((t) => { flame.material.opacity = 0.75 + 0.2 * Math.sin(t * 9) * Math.sin(t * 5.3); });
    // decorative wheel
    for (const [r, c, z] of [[0.95, 0xd8302c, 0], [0.75, 0xffd23a, 0.03], [0.55, 0xd8302c, 0.06], [0.35, 0xffd23a, 0.09]]) B.add('lit', GEO.cyl, c, { x: 3.1, y: Y + 1.5, z: 0.9 + z, sx: r, sy: 0.06, sz: r, rx: Math.PI / 2 });
    // table with fruits
    k.box('lit', 0x7a4a24, 4.3, Y + 1.0, 3.4, 2.8, 0.14, 1.4); for (const [x, z] of [[-1.2, -0.5], [1.2, -0.5], [-1.2, 0.5], [1.2, 0.5]]) k.box('lit', 0x6a3f22, 4.3 + x, Y + 0.5, 3.4 + z, 0.12, 1.0, 0.12);
    k.box('lit', 0xf4efe6, 4.3, Y + 0.62, 4.1, 2.7, 0.8, 0.04); for (let i = 0; i < 6; i++) k.box('lit', 0xc83a3a, 3.2 + i * 0.44, Y + 0.62, 4.13, 0.14, 0.8, 0.03);
    k.cyl('lit', 0xe0a53a, 4.8, Y + 1.2, 3.3, 0.5, 0.3); for (let i = 0; i < 7; i++) k.ico('lit', [0xff7a2a, 0xffd23a, 0x8abe3a, 0xe8302c][i % 4], 4.8 + (rand() - 0.5) * 0.7, Y + 1.5 + rand() * 0.2, 3.3 + (rand() - 0.5) * 0.7, 0.2);
    for (let i = 0; i < 5; i++) k.box('lit', 0xffd21a, 3.6 + i * 0.1, Y + 1.15 + i * 0.03, 3.3 + i * 0.07, 0.8, 0.14, 0.16, 0.1 * i, 0, 0.2);
    k.cyl('lit', 0xe0a53a, 3.9, Y + 1.14, 3.9, 0.3, 0.2); k.ico('lit', 0xffffff, 3.9, Y + 1.3, 3.9, 0.26, 0.6);
    // sweets table + pot + crate
    k.box('lit', 0x6a3f22, -3.3, Y + 0.5, 4.3, 3.2, 0.16, 1.5); for (const x of [-1.4, 1.4]) k.box('lit', 0x5a3418, -3.3 + x, Y + 0.25, 4.3, 0.14, 0.5, 1.2);
    k.cyl('lit', 0xc8a060, -3.3, Y + 0.68, 4.3, 1.1, 0.2); k.tor('lit', 0xa88040, 1.1, 0.07, -3.3, Y + 0.78, 4.3);
    for (let i = 0; i < 9; i++) { const a = (i / 9) * 6.28, r = i < 7 ? 0.75 : 0.0; B.add('lit', new THREE.TorusGeometry(0.26, 0.11, 6, 14).rotateX(Math.PI / 2), [0xf0b030, 0xe89a20][i % 2], { x: -3.3 + Math.cos(a) * r, y: Y + 0.9 + (i > 6 ? 0.18 : 0), z: 4.3 + Math.sin(a) * r }); }
    for (let i = 0; i < 12; i++) k.ico('lit', 0x4a2a1a, -3.9 + rand() * 1.3, Y + 0.95, 4.0 + rand() * 0.9, 0.15, 0.8);
    for (let i = 0; i < 6; i++) k.box('lit', 0xf6f0e4, -2.9 + rand() * 0.9, Y + 0.9, 4.0 + rand() * 0.7, 0.24, 0.16, 0.24, rand());
    k.ico('lit', 0x8a4a2a, -6.2, Y + 0.9, 3.8, 0.95, 0.9); k.cyl('lit', 0x8a4a2a, -6.2, Y + 1.75, 3.8, 0.42, 0.4); k.tor('lit', 0x7a3a1a, 0.46, 0.08, -6.2, Y + 1.95, 3.8); k.tor('lit', 0xf4e8d4, 0.93, 0.04, -6.2, Y + 0.95, 3.8);
    k.box('lit', 0x8a5a2a, -4.8, Y + 0.6, 2.4, 1.3, 1.2, 1.2); for (let i = 0; i < 4; i++) k.box('lit', 0x5a3418, -4.8, Y + 0.3 + i * 0.28, 3.02, 1.2, 0.05, 0.03);
    // plants + fence
    for (let i = 0; i < 9; i++) { const a = i * 0.7; k.cone('lit', i % 2 ? 0x2e8a4a : 0x3fa058, -4.6 + Math.cos(a) * 0.3, Y + 1.0, 1.6 + Math.sin(a) * 0.3, 0.4, 2.2 + rand(), Math.sin(a) * 0.9, -Math.cos(a) * 0.9); }
    for (let i = 0; i < 9; i++) { const a = 0.15 + i * 0.1, a2 = a + 0.1, x1 = Math.sin(a) * 6.9, z1 = Math.cos(a) * 6.9, x2 = Math.sin(a2) * 6.9, z2 = Math.cos(a2) * 6.9; k.box('lit', 0x7a4a24, x1, Y + 0.5, z1, 0.14, 1.0, 0.14); k.box('lit', 0x7a4a24, (x1 + x2) / 2, Y + 0.75, (z1 + z2) / 2, Math.hypot(x2 - x1, z2 - z1), 0.09, 0.07, Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2); k.box('lit', 0x7a4a24, (x1 + x2) / 2, Y + 0.4, (z1 + z2) / 2, Math.hypot(x2 - x1, z2 - z1), 0.09, 0.07, Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2); }
    // left stone pillar + sign
    k.box('lit', 0x3a3640, -15.2, 7.0, -9.5, 4.6, 14, 3.4); k.box('glow', 0xffd9a0, -12.88, 7.0, -9.5, 0.08, 13.4, 0.4);
    g.add(plane(TH.sign, 4.2, 2.1, -15.2, 11.3, -7.76, 0, { transparent: false }));
    // holo panels
    const holo = (map, w, h, x, y, z, ry) => { const m = plane(map, w, h, x, y, z, ry); g.add(m); return m; };
    holo(L.holoInfoPanel(), 3.9, 8.36, -11.9, 4.5, 3.0, 0.42);
    const cal = L.holoCalendar(), sch = L.holoSchedule(), cnt = L.holoCountdown(), loc = L.holoLocation(), rem = L.holoReminder();
    const w = 4.5, hs = [cal, sch, cnt, loc, rem].map((p, i) => w * [640, 400, 300, 240, 220][i] / 760); let yy = 11.2;
    [cal, sch, cnt, loc, rem].forEach((p, i) => { const m = holo(p.tex || p, w, hs[i], 11.7, yy - hs[i] / 2, 3.0, -0.42); yy -= hs[i] + 0.14; });
    let last = -1; upd.push((t) => { const s = Math.floor(t); if (s !== last) { last = s; cnt.update(); loc.update(); } });
    for (const s of [-1, 1]) { k.box('glow', 0x5fb8ff, s * 11.7 - s * 0.1, 0.06, 3.0, 5.2, 0.08, 0.5, -s * 0.42); }
    for (const [w2, d, x, z] of [[32, 0.14, 0, -12], [32, 0.14, 0, 8], [0.14, 20, -16, -2], [0.14, 20, 16, -2]]) k.box('glow', 0xffcf8a, x, 12.9, z, w2, 0.14, d);
    const dk = desk(g, k, { x: 8.8, z: 6.6, ry: -0.5, title: 'New Year Auspicious Time Website', accent: '#ffcf6a', accentHex: 0xffcf6a });
    g.add(B.build('lit', lit()), B.build('glow', glow()));
    const hover = hoverRing(7.85, 1.22, 0xffd070); g.add(hover);
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 8.5, 12), new THREE.MeshBasicMaterial()); hit.visible = false; hit.position.y = 5; hit.userData.kind = 'model'; g.add(hit);
    updaters.push((t) => upd.forEach((f) => f(t)));
    return { key: 'avurudu', group: mirrored(g), picks: [dk.hit, hit], hover, desk: dk, cam: { x: 0, y: 4.8, d: 25 } };
  })();

  const rooms = [preschool, avurudu];
  rooms.forEach((r) => { r.group.visible = false; scene.add(r.group); });
  let cur = 0, from = -1, tr = 1, dir = 1;
  rooms[0].group.visible = true;

  const ease = (x) => 1 - Math.pow(1 - x, 3);
  return {
    scene, rooms, get current() { return cur; },
    setRoom(i, d = 1, instant = false) {
      if (i === cur && tr >= 1) return;
      if (instant) { rooms.forEach((r, n) => { r.group.visible = n === i; r.group.position.x = 0; }); cur = i; tr = 1; return; }
      if (tr < 1) rooms.forEach((r, n) => { r.group.visible = n === cur; r.group.position.x = 0; });
      from = cur; cur = i; dir = d; tr = 0; rooms[cur].group.visible = true;
    },
    update(t, dt, hoverModel, hoverLaptop) {
      for (const u of updaters) u(t, dt);
      if (tr < 1) {
        tr = Math.min(1, tr + dt * 1.6); const e = ease(tr);
        rooms[from].group.position.x = -dir * 40 * e; rooms[cur].group.position.x = dir * 40 * (1 - e);
        if (tr >= 1) { rooms[from].group.visible = false; rooms[from].group.position.x = 0; rooms[cur].group.position.x = 0; }
      }
      rooms.forEach((r, n) => { const want = n === cur && hoverModel ? 0.55 + 0.15 * Math.sin(t * 4) : 0; r.hover.material.opacity += (want - r.hover.material.opacity) * Math.min(1, dt * 8); });
      rooms.forEach((r, n) => { if (r.group.visible) r.desk.update(t, n === cur && hoverLaptop); });
    },
    pick(raycaster) {
      const hits = raycaster.intersectObjects(rooms[cur].picks, false);
      return hits.length ? hits[0].object.userData.kind : null;
    },
    transitioning: () => tr < 1,
  };
}
