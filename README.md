# Kavidu Premasiri – 3D Portfolio (home page)

Interactive 3D island built with **Three.js + Tailwind CSS + vanilla JS**.

## Run it
Just double-click `index.html` (works from `file://`) – or serve the folder:
`npx serve .`

## Edit your content
`src/config.js` – name, links, and the text shown for SLIIT, NupaStack, Projects Lab and About.
After editing run:  `npm install` (once) then `npm run build`
(`npm run watch` rebuilds on save).

## Structure
- `index.html`        – page + Tailwind-styled UI (nav, panel, loader)
- `src/world.js`      – the whole 3D scene (island, buildings, plaza, hologram, bridge, water, sky)
- `src/textures.js`   – signs, facades, paving etc. painted on canvas (no image files to download)
- `src/main.js`       – renderer, camera controls, picking, UI wiring, adaptive quality
- `js/app.js`         – prebuilt, minified bundle (three.js included, ~535 KB / ~140 KB gzipped)
- `css/styles.css`    – prebuilt, minified Tailwind (~14 KB)

## Performance design
- All solid geometry merged into 2 meshes → ~50 draw calls, ~50k triangles
- Zero image/model downloads – textures are generated procedurally
- No real-time shadows; lamp glow = additive sprites
- Pixel ratio capped (2 desktop / 1.5 phones) and auto-lowered if FPS drops
- Pauses automatically in background tabs; respects "reduce motion"
