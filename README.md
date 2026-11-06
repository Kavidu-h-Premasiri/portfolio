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
- `src/lab.js`        – the Projects Lab interior (hall, reflective floor, all project showrooms: Preschool, Avurudu, Portfolio, TaskFlow, Poker, FoodWeb)
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
The lab has **6 showrooms**: Leads Preschool, New Year Auspicious Time (Avurudu), 3D Portfolio Website, TaskFlow, Fish and Chips Poker and FoodWeb. Click the My Projects Lab building (or "Projects" in the menu) to walk in. Use the ‹ › arrows (or ← → keys) to switch
between project showrooms. Hover a model to see the project details; click "CLICK TO EXPLORE" to open the live site.
To add another project room: add `room: 'yourKey'` to the project in `src/config.js` and build a room in `src/lab.js`.

## Projects Lab – table, laptop & details reader
- Click the **model** in a room → opens that project's live site (`href` in `src/config.js`).
- Click the **laptop on the table** → opens a scrollable project-details window (bullets, tech stack, live-site button). Add extra sections per project with `details: [{ heading: '…', text: '…' }]` in `src/config.js`.
- Click the **"My Projects Lab" banner** on the island → opens the full project list panel (it also has an "Enter the 3D Lab" button). Clicking the rest of the building still walks you inside.
- Rebuild after editing: `npm run build`

## SLIIT University showroom
Click the **SLIIT University building** → walk inside a daylight university hall (cream walls, navy & gold banners, SLIIT sign) with **3 project showrooms**: Leads Preschool, Fish and Chips Poker and FoodWeb. Click the **SLIIT banner** (or "Education" in the menu) for the education details panel, which also has an "Enter the SLIIT Showroom" button. Theme colours live in the `TH` object at the top of `buildLab()` in `src/lab.js`. Which rooms each hall shows is decided by the `rooms` list near the end of `buildLab()`.

## NupaStack showroom
Click the **NupaStack building** → enter a violet corporate lobby with the "NupaStack Website – 3D Enhancement" exhibit (logo wall, website screen, overview panel, building model). Click the model → https://nupastack.netlify.app, click the laptop or the "View Project Details" kiosk → project details reader. Click the NupaStack banner (or "NupaStack" in the menu) for the details panel. Edit the project in `src/config.js` (`places.nupa.projects`).

The small NupaStack building on the plinth **rotates** – drag it left/right (it also turns slowly by itself). The room has NupaStack banners (Cloud Audit, DevOps Retainer, Secure by Design, Build & Deploy), a Tech Stack panel and a 3D Highlights panel, server racks, a floating cloud, an infinity loop and floating tool cubes. The tech stack and details come from the real site source (plain HTML/CSS/JS, Three.js r160, Blender/GLB, Node + Puppeteer/Playwright, Netlify).

## 3D Portfolio Website showroom (My Projects Lab, room 3)
The third room of My Projects Lab shows this portfolio itself: a header, a screen with a preview of the island (`assets/island-preview.jpg`), overview/tech-stack panel, and a rotatable miniature island (drag it). **To add the hosted link**, set `href` of the "3D Portfolio Website" project in `src/config.js` (`places.labs.projects`) and run `npm run build`; until then clicking the model shows "Live website link coming soon".

## TaskFlow showroom (My Projects Lab, room 4)
Full-Stack Team Collaboration & Task Management System (2026): kanban board screen, feature and tech-stack panels (React, TypeScript, Go, PostgreSQL, AWS S3 / CodePipeline, Docker, Tailwind CSS, Git, Docker Hub) and a rotatable desk-workspace model. Not hosted yet, so clicking the model shows "Live website link coming soon"; set `href` in `src/config.js` once it is live.

## Fish and Chips Poker showroom (My Projects Lab room 5 + SLIIT University room 2)
Themed poker game (Texas Hold'em, Omaha, Seven-Card Stud, Five-Card Draw, Razz) with 7 AI opponents, fish coins, a 41-level rank ladder and a quiz reward system. The room has a poker-table screen, panels, a rotatable miniature table and **fast little fish swimming from a chasing shark** (the `swim` animation type in the lab update loop). Details come from the game's repo; it has no hosted link yet.

## FoodWeb showroom (My Projects Lab room 6 + SLIIT University room 3)
MERN food ordering system (React, Vite, Node.js, Express, MongoDB, JWT, bcrypt): a mock of the real site's home page on the screen, key-feature and tech-stack panels, a rotatable food-stall model with a delivery scooter, and floating burger / cup / fries. Not hosted yet ("Live website link coming soon").

## Branding
The KP logo (`assets/logo.png`) is used on the loading screen, the top-left home button and as the favicon.
