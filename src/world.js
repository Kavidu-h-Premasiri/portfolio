import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as T from './textures.js';
import { CONFIG } from './config.js';

// ───────── layout constants ─────────
export const ISLAND = { ax: 30, az: 17, water: -2.6 };
const PLAZA = { z: 3, r: 8 };
export const HORIZON = 0xd9608f;               // fog / horizon colour
const hexVec = (h) => new THREE.Vector3(((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255);

// ───────── static-geometry batcher: everything solid ends up in 2 draw calls ─────────
const ni = (g) => {
  const n = g.index ? g.toNonIndexed() : g;
  for (const k of Object.keys(n.attributes)) if (!['position', 'normal', 'uv'].includes(k)) n.deleteAttribute(k);
  return n;
};
export const GEO = {
  box: ni(new THREE.BoxGeometry(1, 1, 1)),
  cyl: ni(new THREE.CylinderGeometry(1, 1, 1, 12)),
  cone: ni(new THREE.ConeGeometry(1, 1, 8)),
  ico: ni(new THREE.IcosahedronGeometry(1, 1)),
};
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

export class Batch {
  constructor() { this.parts = { lit: [], glow: [] }; this.base = new THREE.Matrix4(); this.stack = []; }
  push(m) { this.stack.push(this.base.clone()); this.base.multiply(m); }
  pop() { this.base = this.stack.pop(); }
  add(bucket, geo, color, t = {}) {
    const g = ni(geo.clone());
    _e.set(t.rx || 0, t.ry || 0, t.rz || 0); _q.setFromEuler(_e);
    _p.set(t.x || 0, t.y || 0, t.z || 0); _s.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1);
    _m.compose(_p, _q, _s).premultiply(this.base);
    g.applyMatrix4(_m);
    const n = g.attributes.position.count, col = new Float32Array(n * 3);
    _c.set(color);
    for (let i = 0; i < n; i++) { col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.parts[bucket].push(g);
  }
  build(bucket, mat) { return new THREE.Mesh(mergeGeometries(this.parts[bucket]), mat); }
}

// ───────── shaders ─────────
const SKY_FRAG = /* glsl */`
varying vec3 vP;
void main(){
  vec3 n = normalize(vP);
  float h = n.y;
  vec3 top = vec3(0.09,0.06,0.30);
  vec3 mid = vec3(0.42,0.20,0.62);
  vec3 low = vec3(0.90,0.38,0.62);
  vec3 hor = vec3(1.0,0.60,0.46);
  vec3 col = mix(hor, low, smoothstep(0.0,0.10,h));
  col = mix(col, mid, smoothstep(0.06,0.34,h));
  col = mix(col, top, smoothstep(0.30,0.85,h));
  float sun = pow(max(dot(n, normalize(vec3(-0.45,0.07,-1.0))),0.0), 18.0);
  col += vec3(1.0,0.55,0.35)*sun*0.55;
  col = mix(col, vec3(0.85,0.24,0.56), smoothstep(0.0,-0.25,h)); // below horizon
  gl_FragColor = vec4(col,1.0);
}`;

const WATER_FRAG = /* glsl */`
uniform float uTime; uniform vec2 uL[20]; uniform vec2 uIsl; uniform vec3 uFog;
varying vec3 vW;
void main(){
  vec3 V = normalize(cameraPosition - vW);
  float t = uTime;
  float rip = sin(vW.x*1.3+t*0.8)+sin(vW.z*1.7-t*1.0)+sin((vW.x+vW.z)*2.6+t*0.6)+sin((vW.x-vW.z)*3.9-t*1.2);
  rip *= 0.25;
  vec3 deep = vec3(0.015,0.04,0.17);
  vec3 mid  = vec3(0.06,0.11,0.34);
  vec3 refl = mix(vec3(0.30,0.16,0.55), vec3(0.95,0.45,0.65), pow(1.0-V.y,6.0));
  float fres = pow(1.0 - clamp(V.y,0.0,1.0), 3.0);
  vec3 col = mix(deep, mid, 0.5+0.12*rip);
  col = mix(col, refl, clamp(fres*0.85 + rip*0.02, 0.0, 1.0));
  // island rim glow
  vec2 q = vW.xz / uIsl;
  float d = (length(q)-1.0) * min(uIsl.x,uIsl.y);
  col += vec3(0.05,0.55,1.0) * exp(-max(d,0.0)*0.55) * 0.5 * step(-0.2,d);
  col += vec3(1.0,0.55,0.25) * exp(-max(d,0.0)*0.25) * 0.10 * step(-0.2,d);
  // lamp reflections (long wobbly streaks toward the viewer)
  for(int i=0;i<20;i++){
    vec2 dd = vW.xz - uL[i];
    float s = exp(-dd.x*dd.x*2.2) * smoothstep(0.0,0.6,dd.y) * exp(-max(dd.y,0.0)*0.20);
    s *= 0.55 + 0.45*sin(dd.y*6.0 - t*1.8 + dd.x*3.0);
    col += vec3(1.0,0.62,0.25)*s*0.55;
  }
  float dist = length(vW - cameraPosition);
  col = mix(col, uFog, smoothstep(70.0, 320.0, dist)*0.75);
  gl_FragColor = vec4(col,1.0);
}`;

const HOLO_FRAG = /* glsl */`
varying vec3 vN; varying vec3 vV; uniform float uTime;
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 2.2);
  vec3 c = mix(vec3(0.10,0.55,1.0), vec3(0.65,1.0,1.0), rim);
  float a = 0.06 + rim*0.8;
  gl_FragColor = vec4(c*a, a);
}`;

// ───────────────────────────────────────────────────────────────
export function buildWorld(scene, { mobile = false } = {}) {
  const rand = T.rng(42);
  const B = new Batch();
  const halos = [];      // lamp / sparkle glow points
  const pools = [];      // warm light pools on the ground
  const pickables = [];  // clickable things
  const updaters = [];
  const WY = ISLAND.water, ax = ISLAND.ax, az = ISLAND.az;

  // ---- helpers ----
  const box = (b, c, x, y, z, w, h, d, ry = 0) => B.add(b, GEO.box, c, { x, y, z, sx: w, sy: h, sz: d, ry });
  const cyl = (b, c, x, y, z, r, h, rz = r) => B.add(b, GEO.cyl, c, { x, y, z, sx: r, sy: h, sz: rz });
  const ico = (b, c, x, y, z, r, sy = 1) => B.add(b, GEO.ico, c, { x, y, z, sx: r, sy: r * sy, sz: r, ry: rand() * 6 });
  const cone = (b, c, x, y, z, r, h) => B.add(b, GEO.cone, c, { x, y, z, sx: r, sy: h, sz: r });
  const inEllipse = (x, z, k = 1) => (x * x) / ((ax * k) ** 2) + (z * z) / ((az * k) ** 2) < 1;
  const tr = (x, y, z, ry = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1, 1, 1));
  const planeMat = (map, extra = {}) => new THREE.MeshBasicMaterial({ map, toneMapped: false, ...extra });

  const lamp = (x, z, h = 1.5, y0 = 0, color = 0xffb445, pool = true, big = false) => {
    cyl('lit', 0x2e2330, x, y0 + h / 2, z, 0.07, h);
    box('glow', color, x, y0 + h + 0.16, z, 0.26, 0.34, 0.26);
    halos.push([x, y0 + h + 0.18, z, color, big ? 1.4 : 1]);
    if (pool) pools.push([x, y0 + 0.06, z, big ? 4.2 : 3.2]);
  };

  // ════════ SKY ════════
  {
    const m = new THREE.Mesh(new THREE.SphereGeometry(700, 24, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader: SKY_FRAG,
    }));
    m.renderOrder = -10; m.frustumCulled = false; scene.add(m);
    updaters.push((t, dt, cam) => m.position.copy(cam.position));

    // drifting clouds
    const ct = T.cloudTexture(), clouds = [];
    const cols = [0xff9ac0, 0xffb28a, 0xc78cff, 0xff7fb0];
    for (let i = 0; i < (mobile ? 6 : 10); i++) {
      const mat = new THREE.MeshBasicMaterial({ map: ct, color: cols[i % cols.length], transparent: true, opacity: 0.55 + rand() * 0.3, depthWrite: false, fog: false, toneMapped: false });
      const c = new THREE.Mesh(new THREE.PlaneGeometry(260 + rand() * 160, 65 + rand() * 30), mat);
      c.position.set(-320 + rand() * 640, 22 + rand() * 45, -400 - rand() * 100);
      scene.add(c); clouds.push(c);
    }
    updaters.push((t, dt) => clouds.forEach((c, i) => { c.position.x += dt * (1.2 + (i % 3) * 0.5); if (c.position.x > 380) c.position.x = -380; }));
  }

  // ════════ MOUNTAINS (3 hazy ridges wrapped around the back) ════════
  {
    const layers = [
      { R: 150, amp: 30, top: 0x3d5aa8, bot: 0x26407f, f: 4.6 },
      { R: 215, amp: 46, top: 0x6a5cb8, bot: 0x40509a, f: 3.6 },
      { R: 290, amp: 62, top: 0xa47fcc, bot: 0x7a62b0, f: 2.8 },
    ];
    for (const L of layers) {
      const N = mobile ? 90 : 160, pos = [], col = [], idx = [];
      const ph = [rand() * 6, rand() * 6, rand() * 6, rand() * 6];
      const ct = new THREE.Color(L.top), cb = new THREE.Color(L.bot).lerp(new THREE.Color(0x9a6fc0), 0.45);
      for (let i = 0; i <= N; i++) {
        const th = -1.5 + (3.0 * i) / N;
        const n = 0.5 + 0.22 * Math.sin(th * L.f + ph[0]) + 0.16 * Math.sin(th * L.f * 2.7 + ph[1]) + 0.1 * Math.sin(th * L.f * 6.1 + ph[2]) + 0.05 * Math.sin(th * L.f * 13 + ph[3]);
        const h = L.amp * (0.3 + 0.7 * n);
        const x = th * L.R * 1.15, z = -L.R + 0.12 * L.R * th * th;
        pos.push(x, -2.6 + h, z, x, -8, z);
        const k = Math.min(1, h / L.amp);
        const c1 = cb.clone().lerp(ct, 0.25 + 0.75 * k);
        col.push(c1.r, c1.g, c1.b, cb.r, cb.g, cb.b);
        if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      g.setIndex(idx);
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, toneMapped: false }));
      m.frustumCulled = false; scene.add(m);
    }
  }

  // ════════ WATER ════════
  const lampUniform = Array.from({ length: 20 }, () => new THREE.Vector2(999, 999));
  const waterMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uL: { value: lampUniform }, uIsl: { value: new THREE.Vector2(ax, az) }, uFog: { value: hexVec(HORIZON) } },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: WATER_FRAG,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1000, 1, 1).rotateX(-Math.PI / 2), waterMat);
  water.position.set(0, WY, -150); scene.add(water);
  updaters.push((t) => { waterMat.uniforms.uTime.value = t; });

  // ════════ ISLAND ════════
  {
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 0.86, 3.6, 64, 1, true).scale(ax, 1, az).translate(0, -1.8, 0),
      new THREE.MeshLambertMaterial({ color: 0x4b3b55 }));
    scene.add(body);
    const gt = T.grassTexture();
    const grass = new THREE.Mesh(new THREE.CircleGeometry(1, 72).rotateX(-Math.PI / 2).scale(ax - 0.1, 1, az - 0.1), new THREE.MeshLambertMaterial({ map: gt, emissive: 0x3a7a5a, emissiveMap: gt }));
    grass.position.y = 0.0; scene.add(grass);

    // plaza
    const plaza = new THREE.Mesh(new THREE.CircleGeometry(PLAZA.r, 72).rotateX(-Math.PI / 2), (() => { const pt = T.pavingTexture(); return new THREE.MeshLambertMaterial({ map: pt, emissive: 0x9a98c8, emissiveMap: pt }); })());
    plaza.position.set(0, 0.08, PLAZA.z); scene.add(plaza);
    cyl('lit', 0x4a4768, 0, -0.02, PLAZA.z, PLAZA.r + 0.35, 0.1);
    B.add('glow', new THREE.TorusGeometry(PLAZA.r - 0.05, 0.07, 6, 120).rotateX(Math.PI / 2), 0xff9a38, { x: 0, y: 0.16, z: PLAZA.z });
    B.add('glow', new THREE.TorusGeometry(PLAZA.r - 1.5, 0.035, 6, 120).rotateX(Math.PI / 2), 0xffd7a0, { x: 0, y: 0.12, z: PLAZA.z });

    // rocky cliff border (two staggered rows of mid-size rocks)
    const N = mobile ? 90 : 150;
    const rocks = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshLambertMaterial({ flatShading: true }), N);
    const wfAngles = [1.97, 1.17, 2.95, 0.2];
    const dm = new THREE.Object3D(), col = new THREE.Color();
    let k = 0;
    for (let i = 0; i < N * 1.5 && k < N; i++) {
      const t = (i / (N * 1.5)) * Math.PI * 2 + (rand() - 0.5) * 0.03;
      if (wfAngles.some((a) => Math.abs(Math.atan2(Math.sin(t - a), Math.cos(t - a))) < 0.085)) continue;
      if (Math.abs(Math.cos(t)) < 0.1 && Math.sin(t) > 0) continue;          // keep the bridge entrance clear
      const row = i % 2, s = 0.7 + rand() * 0.95;
      dm.position.set((ax + 0.1 + row * 0.7 + rand() * 0.5) * Math.cos(t), -0.55 - row * 0.9 - rand() * 0.5, (az + 0.1 + row * 0.7 + rand() * 0.5) * Math.sin(t));
      dm.scale.set(s * (1.0 + rand() * 0.6), s * (0.8 + rand() * 0.7), s * (1.0 + rand() * 0.6));
      dm.rotation.set(rand() * 0.6, rand() * 6, rand() * 0.6); dm.updateMatrix();
      rocks.setMatrixAt(k, dm.matrix);
      col.setHSL(0.07 + rand() * 0.08, 0.06 + rand() * 0.08, 0.14 + rand() * 0.11); rocks.setColorAt(k, col);
      k++;
    }
    rocks.count = k; scene.add(rocks);

    // glowing cyan rim hugging the rocks at water level
    const pts = []; for (let i = 0; i < 160; i++) { const t = (i / 160) * Math.PI * 2; pts.push(new THREE.Vector3((ax + 1.4) * Math.cos(t), WY + 0.12, (az + 1.4) * Math.sin(t))); }
    const rim = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 220, 0.1, 5, true), new THREE.MeshBasicMaterial({ color: 0x35c8ff, toneMapped: false }));
    scene.add(rim);
    const rim2 = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p.x * 1.012, p.y, p.z * 1.012)), true), 220, 0.45, 5, true),
      new THREE.MeshBasicMaterial({ color: 0x2a8cff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    scene.add(rim2);

    // waterfalls
    const wfMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `varying vec2 vUv; uniform float uTime;
        void main(){
          float s = sin(vUv.x*38.0 + sin(vUv.y*6.0)*1.5)*0.5+0.5;
          float f = fract(vUv.y*2.4 + uTime*1.5 + s*0.5);
          float a = (0.40 + 0.45*smoothstep(0.35,1.0,f)*s) * smoothstep(0.0,0.05,vUv.x)*smoothstep(1.0,0.95,vUv.x);
          vec3 c = mix(vec3(0.55,0.85,1.0), vec3(1.0), smoothstep(0.5,1.0,f));
          gl_FragColor = vec4(c, a);
        }` });
    updaters.push((t) => { wfMat.uniforms.uTime.value = t; });
    for (const a of wfAngles) {
      const px = (ax + 0.9) * Math.cos(a), pz = (az + 0.9) * Math.sin(a);
      const nx = Math.cos(a) / ax, nz = Math.sin(a) / az;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.2), wfMat);
      m.position.set(px, -1.15, pz); m.rotation.y = Math.atan2(nx, nz);
      m.material.side = THREE.DoubleSide; scene.add(m);
      for (let j = -1; j <= 1; j++) halos.push([px + Math.cos(a) * 0.6 + j * 1.0, WY + 0.25, pz + Math.sin(a) * 0.6, 0xbfe9ff, 1.5]);
    }
  }

  // ════════ FOUNTAIN + HOLOGRAM ════════
  const fz = PLAZA.z;
  {
    cyl('lit', 0x1c2a58, 0, 0.32, fz, 3.7, 0.5);
    cyl('lit', 0x25407a, 0, 0.62, fz, 3.1, 0.25);
    B.add('glow', new THREE.TorusGeometry(3.6, 0.09, 6, 80).rotateX(Math.PI / 2), 0x35d8ff, { x: 0, y: 0.6, z: fz });
    B.add('glow', new THREE.TorusGeometry(3.05, 0.07, 6, 80).rotateX(Math.PI / 2), 0x6aa0ff, { x: 0, y: 0.78, z: fz });
    cyl('glow', 0x7ee8ff, 0, 0.84, fz, 1.9, 0.08);
    cyl('lit', 0x14204a, 0, 0.9, fz, 1.0, 0.5);
    cyl('glow', 0xc8f6ff, 0, 1.2, fz, 0.7, 0.06);

    // animated ground rings
    const rings = [];
    [2.3, 2.75, 3.3, 4.2].forEach((r, i) => {
      const m = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.1, 72).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0x4aa8ff : 0x39e6ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
      m.position.set(0, 0.95 - i * 0.02, fz); scene.add(m); rings.push(m);
      if (i === 3) m.position.y = 0.2;
    });
    updaters.push((t) => rings.forEach((m, i) => { m.material.opacity = 0.45 + 0.4 * Math.sin(t * 2 + i * 1.4); }));

    // light beam
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.5, 5.0, 28, 1, true),
      new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { uTime: { value: 0 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: 'varying vec2 vUv; uniform float uTime; void main(){ float a = (1.0-vUv.y)*0.55*(0.8+0.2*sin(vUv.x*40.0+uTime*3.0)); gl_FragColor = vec4(0.25,0.8,1.0, a); }' }));
    beam.position.set(0, 3.3, fz); scene.add(beam);
    updaters.push((t) => { beam.material.uniforms.uTime.value = t; });

    // hologram sphere
    const hg = new THREE.Group(); hg.position.set(0, 6.0, fz); scene.add(hg);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(3.0, 40, 28),
      new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, uniforms: { uTime: { value: 0 } },
        vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv; }',
        fragmentShader: HOLO_FRAG }));
    hg.add(sphere);
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(3.02, 16, 12)),
      new THREE.LineBasicMaterial({ color: 0x66e6ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }));
    hg.add(wire);
    const gl = T.glowTexture();
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: gl, color: 0x3cc8ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    aura.scale.set(11, 11, 1); hg.add(aura);
    const kp = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.kpTexture(), transparent: true, depthWrite: false, toneMapped: false, fog: false }));
    kp.scale.set(4.2, 4.2, 1); kp.material.depthTest = false; kp.renderOrder = 10; hg.add(kp);
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.holoLabelTexture(CONFIG.name, CONFIG.tagline), transparent: true, depthWrite: false, toneMapped: false, fog: false }));
    label.scale.set(6.2, 1.8, 1); label.position.set(0, -2.9, 0.5); label.material.depthTest = false; label.renderOrder = 11; hg.add(label);
    updaters.push((t) => { wire.rotation.y = t * 0.25; sphere.rotation.y = t * 0.1; hg.position.y = 6.0 + Math.sin(t * 0.9) * 0.12; aura.material.opacity = 0.45 + 0.1 * Math.sin(t * 1.6); });

    const hit = new THREE.Mesh(new THREE.SphereGeometry(3.3, 8, 6), new THREE.MeshBasicMaterial()); hit.visible = false; hit.position.copy(hg.position);
    scene.add(hit); pickables.push({ key: 'about', mesh: hit, label: CONFIG.name, anchor: new THREE.Vector3(0, 9.5, fz) });
  }

  // ════════ BUILDINGS ════════
  const facades = {};
  const addBuilding = (key, x, z, ry, sc, buildFn) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; g.scale.setScalar(sc); g.updateMatrix(); scene.add(g);
    B.push(g.matrix); const info = buildFn(g); B.pop();
    const hit = new THREE.Mesh(new THREE.BoxGeometry(...info.hit), new THREE.MeshBasicMaterial()); hit.visible = false;
    hit.position.set(0, info.hit[1] / 2, 0); g.add(hit);
    pickables.push({ key, mesh: hit, label: CONFIG.places[key].label, anchor: new THREE.Vector3(x, info.top * sc, z), sign: info.sign });
    return g;
  };
  const plane = (g, map, w, h, x, y, z, extra) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), planeMat(map, extra)); m.position.set(x, y, z); g.add(m); return m;
  };
  const steps = (n, w, z0, depth, rise, color) => {
    for (let i = 0; i < n; i++) box('lit', color, 0, (rise * (n - i)) / 2, z0 + (i + 0.5) * depth, w, rise * (n - i), depth);
  };

  // ---- NupaStack (centre, modern glass) ----
  addBuilding('nupa', 0, -11.5, 0, 1.1, (g) => {
    const fac = T.facadeTexture('nupa');
    box('lit', 0x232a42, 0, 0.2, 0, 23, 0.4, 10);
    box('lit', 0x1b2136, 0, 3.7, 0, 14, 6.6, 7);
    plane(g, fac, 13.2, 5.7, 0, 3.55, 3.52);
    // wings
    for (const s of [-1, 1]) {
      box('lit', 0x1b2136, s * 9.0, 2.7, 1.4, 4.6, 4.6, 5.6);
      plane(g, fac, 4.0, 3.9, s * 9.0, 2.65, 4.22);
      box('lit', 0x252c46, s * 9.0, 5.2, 1.4, 5.2, 0.5, 6.2);
      box('glow', 0x35c9ff, s * 9.0, 4.95, 4.55, 5.2, 0.1, 0.1);
      box('glow', 0x35c9ff, s * 11.3, 2.7, 4.25, 0.1, 4.6, 0.1);
    }
    // roof slab + neon edges
    box('lit', 0x232a42, 0, 7.3, 0.2, 15.6, 0.6, 8.4);
    box('glow', 0x3bd0ff, 0, 7.0, 4.46, 15.6, 0.12, 0.12);
    box('glow', 0x3bd0ff, -7.75, 7.0, 0.2, 0.12, 0.12, 8.4);
    box('glow', 0x3bd0ff, 7.75, 7.0, 0.2, 0.12, 0.12, 8.4);
    box('glow', 0x3b7bff, -7.8, 7.3, 4.46, 0.14, 0.7, 0.14);
    box('glow', 0x3b7bff, 7.8, 7.3, 4.46, 0.14, 0.7, 0.14);
    // sign block
    box('lit', 0x0c1226, 0, 8.8, -0.4, 8.6, 2.3, 1.4);
    box('glow', 0x35c8ff, 0, 7.72, 0.34, 8.7, 0.08, 0.08);
    box('glow', 0x35c8ff, 0, 9.98, 0.34, 8.7, 0.08, 0.08);
    box('glow', 0x35c8ff, -4.3, 8.85, 0.34, 0.08, 2.3, 0.08);
    box('glow', 0x35c8ff, 4.3, 8.85, 0.34, 0.08, 2.3, 0.08);
    const sign = plane(g, T.signTexture('nupa'), 8.2, 2.05, 0, 8.85, 0.32);
    // door canopy + glow
    box('lit', 0x1b2136, 0, 3.2, 4.6, 5.2, 0.35, 2.4);
    box('glow', 0x4ad8ff, 0, 3.0, 5.78, 5.2, 0.08, 0.08);
    box('glow', 0xffe2a8, 0, 1.4, 3.6, 2.8, 2.7, 0.06);
    box('lit', 0x0d1426, -1.5, 1.4, 3.58, 0.14, 2.8, 0.14); box('lit', 0x0d1426, 1.5, 1.4, 3.58, 0.14, 2.8, 0.14); box('lit', 0x0d1426, 0, 1.4, 3.58, 0.1, 2.8, 0.1);
    // steps
    steps(5, 5.6, 4.0, 0.55, 0.09, 0x9895b8);
    for (const s of [-1, 1]) { box('lit', 0x6a6890, s * 3.1, 0.35, 5.4, 0.35, 0.7, 2.8); box('glow', 0x35c9ff, s * 3.1, 0.75, 5.4, 0.1, 0.06, 2.7); }
    const bh = new THREE.Mesh(new THREE.BoxGeometry(9.4, 2.8, 1.4), new THREE.MeshBasicMaterial()); bh.visible = false; bh.position.set(0, 8.85, 0.9); g.add(bh);
    pickables.push({ key: 'nupaInfo', mesh: bh, label: 'NupaStack · project details', priority: true, sign, anchor: new THREE.Vector3(0, 10, -11.5) });
    return { hit: [24, 11, 10], top: 10.8, sign };
  });
  pickables[pickables.length - 1].go = 'nupaLab';   // clicking the building walks inside

  // ---- SLIIT University (left, classical) ----
  addBuilding('sliit', -20, -3.5, 0.52, 1.0, (g) => {
    const fac = T.facadeTexture('sliit');
    box('lit', 0xd8c9b2, 0, 0.3, 0, 15.5, 0.6, 9);
    box('lit', 0xcbbba3, 0, 2.9, -0.2, 12.5, 4.6, 6.2);
    plane(g, fac, 9.6, 3.9, 0, 2.85, 2.93);
    for (let i = 0; i < 6; i++) {
      const cx = -5.5 + i * 2.2;
      cyl('lit', 0xeee3cf, cx, 2.95, 3.5, 0.36, 4.6);
      box('lit', 0xf4ead8, cx, 5.3, 3.5, 0.95, 0.22, 0.95);
      box('lit', 0xf4ead8, cx, 0.72, 3.5, 0.95, 0.22, 0.95);
    }
    box('lit', 0xd6c7ae, 0, 5.75, 0.6, 14.4, 0.6, 8.2);
    box('glow', 0xffe0a8, 0, 5.4, 4.72, 14.4, 0.1, 0.1);
    for (const s of [-1, 1]) box('lit', 0xcbbba3, s * 6.9, 2.9, -0.2, 1.4, 4.6, 6.2);
    // sign
    box('lit', 0x161a52, 0, 7.2, 0.4, 9.6, 2.5, 1.3);
    box('glow', 0xc9b4ff, 0, 6.0, 1.1, 9.7, 0.09, 0.09);
    box('glow', 0xc9b4ff, 0, 8.46, 1.1, 9.7, 0.09, 0.09);
    box('glow', 0xc9b4ff, -4.8, 7.25, 1.1, 0.09, 2.5, 0.09);
    box('glow', 0xc9b4ff, 4.8, 7.25, 1.1, 0.09, 2.5, 0.09);
    const sign = plane(g, T.signTexture('sliit'), 9.2, 2.3, 0, 7.22, 1.08);
    // banners
    const bt = T.bannerTexture();
    for (const s of [-1, 1]) {
      plane(g, bt, 1.25, 3.75, s * 3.3, 2.6, 4.15, { transparent: true, alphaTest: 0.4 });
      box('lit', 0x4a3a2a, s * 3.3, 4.55, 4.1, 1.5, 0.1, 0.1);
    }
    steps(4, 7.5, 4.3, 0.55, 0.15, 0xdcd0bb);
    const bh = new THREE.Mesh(new THREE.BoxGeometry(10, 2.8, 1.4), new THREE.MeshBasicMaterial()); bh.visible = false; bh.position.set(0, 7.2, 1.0); g.add(bh);
    pickables.push({ key: 'sliitInfo', mesh: bh, label: 'SLIIT University · education details', priority: true, sign, anchor: new THREE.Vector3(-20, 9, -3.5) });
    return { hit: [15.5, 10, 9], top: 9.8, sign };
  });
  pickables[pickables.length - 1].go = 'sliitLab';   // clicking the building walks inside

  // ---- My Projects Lab (right, purple neon) ----
  addBuilding('labs', 20, -3.5, -0.52, 1.0, (g) => {
    const fac = T.facadeTexture('labs');
    box('lit', 0x241c40, 0, 0.2, 0, 14.5, 0.4, 9.4);
    box('lit', 0x1f1838, 0, 2.6, 0, 12, 4.4, 6.6);
    plane(g, fac, 9.0, 3.7, -1.3, 2.55, 3.32);
    box('lit', 0x14102a, 4.4, 2.6, 3.3, 2.6, 4.4, 0.2);   // solid pillar for the gear
    const gear = plane(g, T.gearTexture(), 2.3, 2.3, 4.4, 2.7, 3.45, { transparent: true });
    // roof & neon
    box('lit', 0x241c40, 0, 5.0, 0.2, 13.4, 0.55, 7.6);
    box('glow', 0xa56bff, 0, 4.78, 4.02, 13.4, 0.12, 0.12);
    box('glow', 0xa56bff, -6.7, 4.78, 0.2, 0.12, 0.12, 7.6);
    box('glow', 0x7a8cff, -6.0, 2.6, 3.4, 0.1, 4.4, 0.1);
    box('glow', 0x7a8cff, 6.0, 2.6, 3.4, 0.1, 4.4, 0.1);
    // sign block
    box('lit', 0x120a2e, -0.5, 6.7, 0.4, 8.8, 2.7, 1.4);
    box('glow', 0xa56bff, -0.5, 5.33, 1.12, 8.9, 0.09, 0.09);
    box('glow', 0xa56bff, -0.5, 8.07, 1.12, 8.9, 0.09, 0.09);
    box('glow', 0xa56bff, -4.9, 6.7, 1.12, 0.09, 2.75, 0.09);
    box('glow', 0xa56bff, 3.9, 6.7, 1.12, 0.09, 2.75, 0.09);
    const sign = plane(g, T.signTexture('labs'), 8.4, 2.1, -0.5, 6.7, 1.14);
    steps(3, 6.5, 3.9, 0.55, 0.15, 0x8a84b0);
    const bh = new THREE.Mesh(new THREE.BoxGeometry(9.2, 3.0, 1.4), new THREE.MeshBasicMaterial()); bh.visible = false; bh.position.set(-0.5, 6.7, 1.0); g.add(bh);
    pickables.push({ key: 'labsInfo', mesh: bh, label: 'My Projects Lab · project details', priority: true, sign, anchor: new THREE.Vector3(20, 9, -3.5) });
    return { hit: [14.5, 9.5, 9.4], top: 9.4, sign, gear };
  });
  pickables[pickables.length - 1].go = 'labsLab';   // clicking the building walks inside

  // ════════ PATHS ════════
  const pathSeg = (x1, z1, x2, z2, w, color = 0xa5a2c4) => {
    const dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz);
    box('lit', color, (x1 + x2) / 2, 0.05, (z1 + z2) / 2, w, 0.1, len, Math.atan2(dx, dz));
  };
  pathSeg(0, -4.6, 0, -4.0, 5.2);
  pathSeg(-14.4, 0.6, -6.6, 2.4, 3.2); pathSeg(14.4, 0.6, 6.6, 2.4, 3.2);
  pathSeg(0, 10.5, 0, 17, 3.8, 0x8d6a45);

  // ════════ BRIDGE ════════
  {
    const z0 = 11, z1 = 42, w = 3.7, plankC = [0x9a6738, 0x84552d];
    for (let z = z0; z < z1; z += 0.42) box('lit', plankC[Math.round(z / 0.42) % 2], 0, 0.0, z, w, 0.14, 0.38);
    for (const s of [-1, 1]) {
      box('lit', 0x5e3b22, s * (w / 2 + 0.05), -0.2, (z0 + z1) / 2, 0.22, 0.28, z1 - z0);
      box('lit', 0x70472a, s * (w / 2 + 0.05), 0.95, (z0 + z1) / 2, 0.14, 0.12, z1 - z0);
      box('lit', 0x70472a, s * (w / 2 + 0.05), 0.45, (z0 + z1) / 2, 0.1, 0.1, z1 - z0);
    }
    let li = 0;
    for (let z = z0 + 1.5; z < z1 - 1; z += 3.1) {
      for (const s of [-1, 1]) {
        const x = s * (w / 2 + 0.05);
        box('lit', 0x5e3b22, x, 0.55, z, 0.2, 1.1, 0.2);
        box('glow', 0xffb445, x, 1.35, z, 0.24, 0.3, 0.24);
        halos.push([x, 1.38, z, 0xffb445, 1.5]);
        if (li < 20) lampUniform[li++].set(x, z);
      }
    }
    for (let z = z0 + 4; z < z1; z += 7) for (const s of [-1, 1]) cyl('lit', 0x3f2a1e, s * 1.5, WY / 2 - 0.1, z, 0.18, Math.abs(WY) + 0.4);
  }

  // ════════ LAMPS ════════
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const skip = [Math.PI / 2, -Math.PI / 2, 0, Math.PI, Math.PI * 1.5].some((s) => Math.abs(Math.atan2(Math.sin(a - s), Math.cos(a - s))) < 0.2);
    if (skip) continue;
    lamp((PLAZA.r + 1.3) * Math.cos(a), PLAZA.z + (PLAZA.r + 1.3) * Math.sin(a), 1.5, 0, 0xffb445, true, true);
  }
  [[-3.6, -4.2], [3.6, -4.2], [-12.5, 0.8], [-9.5, 2.2], [12.5, 0.8], [9.5, 2.2], [-2.4, 13.5], [2.4, 13.5]].forEach(([x, z]) => lamp(x, z, 1.3));
  for (let i = 0; i < 26; i++) {
    const t = (i / 26) * Math.PI * 2;
    if ([1.97, 1.17, 2.95, 0.2].some((a) => Math.abs(Math.atan2(Math.sin(t - a), Math.cos(t - a))) < 0.14)) continue;
    const x = (ax - 1.6) * Math.cos(t), z = (az - 1.6) * Math.sin(t);
    if (z < -8) continue;
    lamp(x, z, 0.9, 0, 0xffa83a, true);
  }

  // ════════ BENCHES ════════
  const bench = (x, z, ry) => {
    B.push(tr(x, 0, z, ry));
    box('lit', 0x7a4a2a, 0, 0.55, 0, 1.9, 0.12, 0.55);
    box('lit', 0x6b3f23, 0, 1.0, -0.26, 1.9, 0.5, 0.1);
    for (const s of [-1, 1]) { box('lit', 0x2c2330, s * 0.8, 0.28, 0.05, 0.1, 0.56, 0.5); box('lit', 0x2c2330, s * 0.8, 0.8, -0.26, 0.1, 0.9, 0.1); }
    B.pop();
  };
  [[-9.5, 7.5], [-13, 10], [-18.5, 7.5], [-14, 13], [9.5, 7.5], [13, 10], [18.5, 7.5], [14, 13], [-24, 5], [24, 5]]
    .forEach(([x, z]) => bench(x, z, Math.atan2(-x, PLAZA.z - z + 0.001) + Math.PI));

  // ════════ TREES ════════
  const pinks = [0xff8ed8, 0xff6fc6, 0xf06ad8, 0xffb2ea, 0xd070ff, 0xff9ad2];
  const cherry = (x, z, s = 1) => {
    cone('lit', 0x5b3a30, x, 1.6 * s, z, 0.5 * s, 3.4 * s);
    for (let i = 0; i < 2; i++) { const a = rand() * 6; B.add('lit', GEO.cone, 0x5b3a30, { x: x + Math.cos(a) * 0.5 * s, y: 3.0 * s, z: z + Math.sin(a) * 0.5 * s, sx: 0.16 * s, sy: 1.6 * s, sz: 0.16 * s, rx: Math.sin(a) * 0.6, rz: Math.cos(a) * 0.6 }); }
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.28 + rand(), rad = (0.4 + rand() * 1.5) * s;
      ico('lit', pinks[Math.floor(rand() * pinks.length)], x + Math.cos(a) * rad, (3.5 + rand() * 1.4) * s, z + Math.sin(a) * rad, (1.0 + rand() * 0.7) * s, 0.8);
    }
    ico('lit', 0xff9bdf, x, 4.9 * s, z, 1.3 * s, 0.8);
  };
  const greens = [0x1f5e44, 0x2a7a52, 0x174c3e, 0x2f8a5c];
  const bigTree = (x, z, s = 1) => {
    cone('lit', 0x4a3328, x, 3.0 * s, z, 0.85 * s, 6.4 * s);
    for (let i = 0; i < 9; i++) {
      const a = rand() * 6.28, rad = (0.5 + rand() * 3.2) * s;
      ico('lit', greens[Math.floor(rand() * greens.length)], x + Math.cos(a) * rad, (6.4 + rand() * 2.0) * s, z + Math.sin(a) * rad, (1.9 + rand() * 1.5) * s, 0.7);
    }
  };
  [[-27.5, 3.5, 1.25], [-21, -10.5, 1.4], [-10.5, -2.5, 0.8], [10.5, -2.5, 0.8], [21, -10.5, 1.4], [27.5, 3.5, 1.25], [10.5, 1.8, 0.7], [-10.8, 6.5, 0.0], [22, 10, 1.1], [-22, 9.5, 1.0], [-16, 12.5, 0.8], [16.5, 12.5, 0.8]]
    .forEach(([x, z, s]) => cherry(x, z, s));
  [[-13.5, -15, 1.0], [13.5, -15, 1.0], [-26, -3, 0.9], [26, -3, 0.9]].forEach(([x, z, s]) => bigTree(x, z, s));

  // bushes & flowers
  const bushC = [0x2c7a4c, 0x378a55, 0x24664a], flowC = [0xa760ff, 0xff74d0, 0xc490ff, 0xff9ae0];
  const blocked = (x, z) => {
    if (Math.hypot(x, z - PLAZA.z) < PLAZA.r + 1) return true;
    if (Math.abs(x) < 2.6 && z > 8) return true;
    if (Math.abs(x) < 8.5 && z < -3 && z > -18) return true;
    if (Math.abs(Math.abs(x) - 20) < 9.2 && z > -10.5 && z < 2.5) return true;
    return false;
  };
  for (let i = 0, n = 0; i < 900 && n < (mobile ? 55 : 90); i++) {
    const x = (rand() * 2 - 1) * (ax - 2), z = (rand() * 2 - 1) * (az - 2);
    if (!inEllipse(x, z, 0.93) || blocked(x, z)) continue;
    n++;
    if (rand() > 0.45) { ico('lit', bushC[Math.floor(rand() * 3)], x, 0.4, z, 0.5 + rand() * 0.5, 0.8); }
    else for (let k = 0; k < 4; k++) ico('lit', flowC[Math.floor(rand() * 4)], x + (rand() - 0.5) * 0.9, 0.3, z + (rand() - 0.5) * 0.9, 0.22 + rand() * 0.15);
  }

  // ════════ MERGED STATIC MESHES ════════
  scene.add(B.build('lit', new THREE.MeshLambertMaterial({ vertexColors: true })));
  scene.add(B.build('glow', new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false })));

  // ════════ LIGHT POOLS + HALOS ════════
  {
    const gt = T.glowTexture();
    const pm = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ map: gt, color: 0xff9a40, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }), pools.length);
    const o = new THREE.Object3D();
    pools.forEach(([x, y, z, s], i) => { o.position.set(x, y, z); o.scale.set(s, 1, s); o.updateMatrix(); pm.setMatrixAt(i, o.matrix); });
    scene.add(pm);

    const pos = new Float32Array(halos.length * 3), col = new Float32Array(halos.length * 3), c = new THREE.Color();
    halos.forEach(([x, y, z, hex], i) => { pos.set([x, y, z], i * 3); c.set(hex); col.set([c.r, c.g, c.b], i * 3); });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const hm = new THREE.Points(g, new THREE.PointsMaterial({ size: 1.9, map: gt, vertexColors: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, toneMapped: false }));
    hm.frustumCulled = false; scene.add(hm);
  }

  // ════════ FIREFLIES / SPARKLES ════════
  const flyMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uScale: { value: 300 } },
    vertexShader: `attribute float aSeed; attribute vec3 aColor; uniform float uTime; uniform float uScale; varying vec3 vC; varying float vA;
      void main(){ vec3 p = position; p.y += sin(uTime*0.6 + aSeed*20.0)*0.7; p.x += sin(uTime*0.4 + aSeed*13.0)*0.9; p.z += cos(uTime*0.35 + aSeed*9.0)*0.9;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = 0.55 + 0.45*sin(uTime*2.0 + aSeed*30.0); gl_PointSize = uScale*(0.5+0.5*fract(aSeed*7.0))/-mv.z; vC = aColor; }`,
    fragmentShader: 'varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vC, a*a*vA); }',
  });
  {
    const n = mobile ? 70 : 170, pos = new Float32Array(n * 3), seed = new Float32Array(n), col = new Float32Array(n * 3);
    const pal = [[1, 0.7, 0.35], [0.45, 0.9, 1], [1, 0.55, 0.85]];
    for (let i = 0; i < n; i++) {
      pos.set([(rand() * 2 - 1) * ax * 0.95, 0.6 + rand() * 7, (rand() * 2 - 1) * az * 1.2 + 2], i * 3);
      seed[i] = rand(); col.set(pal[i % 3], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1)); g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    const p = new THREE.Points(g, flyMat); p.frustumCulled = false; scene.add(p);
    updaters.push((t) => { flyMat.uniforms.uTime.value = t; });
  }

  // ════════ LIGHTS ════════
  scene.add(new THREE.HemisphereLight(0xffe6ff, 0x8a5aa8, 3.0));
  const sun = new THREE.DirectionalLight(0xffb48a, 2.2); sun.position.set(-30, 25, -20); scene.add(sun);
  const fill = new THREE.DirectionalLight(0x7aa8ff, 0.9); fill.position.set(25, 15, 30); scene.add(fill);
  scene.fog = new THREE.Fog(HORIZON, 140, 520);

  // sign hover pulse
  const signs = pickables.filter((p) => p.sign);
  return {
    pickables,
    update(t, dt, cam, hoverKey) {
      for (const u of updaters) u(t, dt, cam);
      for (const p of signs) { const s = p.sign.scale.x, tgt = hoverKey === p.key ? 1.06 : 1; p.sign.scale.setScalar(s + (tgt - s) * Math.min(1, dt * 8)); }
    },
    setPointScale(h, fov) { flyMat.uniforms.uScale.value = (0.9 * h) / (2 * Math.tan((fov * Math.PI) / 360)); },
  };
}
