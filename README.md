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
- `src/main.js`       – renderer, camera, picking, UI wiring, adaptive quality, enter/exit of the Projects Lab
- `src/lab.js`        – the Projects Lab interior (hall, reflective floor, Preschool and Avurudu showrooms)
- `src/labtextures.js` – screens, signs, sunset windows and Avurudu hologram panels painted on canvas
- `js/app.js`         – prebuilt, minified bundle (three.js included, ~535 KB / ~140 KB gzipped)
- `css/styles.css`    – prebuilt, minified Tailwind (~14 KB)

## Performance design
- All solid geometry merged into 2 meshes → ~50 draw calls, ~50k triangles
- Zero image/model downloads – textures are generated procedurally
- No real-time shadows; lamp glow = additive sprites
- Pixel ratio capped (2 desktop / 1.5 phones) and auto-lowered if FPS drops
- Pauses automatically in background tabs; respects "reduce motion"

## Projects Lab interior
Click the My Projects Lab building (or "Projects" in the menu) to walk in. Use the ‹ › arrows (or ← → keys) to switch
between project showrooms. Hover a model to see the project details; click "CLICK TO EXPLORE" to open the live site.
To add another project room: add `room: 'yourKey'` to the project in `src/config.js` and build a room in `src/lab.js`.

## Projects Lab – table, laptop & details reader
- Click the **model** in a room → opens that project's live site (`href` in `src/config.js`).
- Click the **laptop on the table** → opens a scrollable project-details window (bullets, tech stack, live-site button). Add extra sections per project with `details: [{ heading: '…', text: '…' }]` in `src/config.js`.
- Click the **"My Projects Lab" banner** on the island → opens the full project list panel (it also has an "Enter the 3D Lab" button). Clicking the rest of the building still walks you inside.
- Rebuild after editing: `npm run build`

## SLIIT University showroom
Click the **SLIIT University building** → walk inside a daylight university hall (cream walls, navy & gold banners, SLIIT sign) with the same two project showrooms, tables and laptops. Click the **SLIIT banner** (or "Education" in the menu) for the education details panel, which also has an "Enter the SLIIT Showroom" button. Theme colours live in the `TH` object at the top of `buildLab()` in `src/lab.js`.

## NupaStack showroom
Click the **NupaStack building** → enter a violet corporate lobby with the "NupaStack Website – 3D Enhancement" exhibit (logo wall, website screen, overview panel, building model). Click the model → https://nupastack.netlify.app, click the laptop or the "View Project Details" kiosk → project details reader. Click the NupaStack banner (or "NupaStack" in the menu) for the details panel. Edit the project in `src/config.js` (`places.nupa.projects`).

The small NupaStack building on the plinth **rotates** – drag it left/right (it also turns slowly by itself). The room has NupaStack banners (Cloud Audit, DevOps Retainer, Secure by Design, Build & Deploy), a Tech Stack panel and a 3D Highlights panel, server racks, a floating cloud, an infinity loop and floating tool cubes. The tech stack and details come from the real site source (plain HTML/CSS/JS, Three.js r160, Blender/GLB, Node + Puppeteer/Playwright, Netlify).
