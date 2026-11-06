// ─────────────────────────────────────────────────────────────
//  Edit your content here – no 3D knowledge needed.
//  After editing run:  npm run build
// ─────────────────────────────────────────────────────────────
export const CONFIG = {
  name: 'Kavidu_H_Premasiri',
  fullName: 'G.K.H. Premasiri',
  initials: 'KP',
  tagline: '3D Portfolio',
  role: 'Software Engineering Intern',

  links: {
    github: 'https://github.com/Kavidu-h-Premasiri',
    linkedin: 'https://lk.linkedin.com/in/kavidu-h-premasiri',
    email: 'mailto:kavindupremasiri272@gmail.com',
  },

  // Each key matches a building / object in the scene.
  places: {
    about: {
      label: 'About me',
      kicker: 'G.K.H. Premasiri · Software Engineering Intern',
      title: 'Kavidu_H_Premasiri',
      text:
        "I'm a Software Engineering Intern and a third-year, first-semester undergraduate pursuing a BSc (Hons) in Computer Science. I'm passionate about software development, modern web technologies, 3D experiences, and DevOps, with a strong drive to build innovative solutions and continuously grow as a software engineer.",
      groups: [
        { title: 'Programming & Frameworks', items: ['Spring Boot', 'React', 'Go', 'Node.js', 'Java', 'Python', 'R', 'C#', 'Tailwind CSS', 'HTML', 'CSS3', 'JavaScript', 'PHP'] },
        { title: 'Cloud Computing', items: ['AWS', 'Railway', 'Vercel', 'Netlify'] },
        { title: 'Containerization & Orchestration', items: ['Docker'] },
        { title: 'Testing', items: ['Playwright', 'JMeter', 'JUnit', 'Mockito'] },
        { title: 'Code Quality', items: ['SonarQube'] },
        { title: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'] },
        { title: 'Authentication & Security', items: ['Keycloak'] },
        { title: 'Version Control', items: ['Git', 'GitLab'] },
        { title: 'Soft Skills', items: ['Team Collaboration', 'Project Management', 'Analytical Thinking', 'Documentation'] },
      ],
      buttons: [
        { label: 'GitHub', href: 'github' },
        { label: 'LinkedIn', href: 'linkedin' },
        { label: 'Email', href: 'email' },
      ],
    },

    sliit: {
      label: 'SLIIT University',
      kicker: 'Education & Learning',
      title: 'SLIIT University',
      text: 'Pursuing a BSc (Hons) in Computer Science, now in the final year.',
      points: [
        'Degree: BSc (Hons) Computer Science',
        'Current year: 3rd year, 1st semester (final year)',
        'Expected graduation: April 2027',
      ],
      tags: ['Software Development', 'Modern Web', '3D Experiences', 'DevOps'],
      buttons: [{ label: 'Enter the SLIIT Showroom →', action: 'sliitlab' }],
    },

    nupa: {
      label: 'NupaStack',
      kicker: 'Software Engineering Intern',
      title: 'NupaStack',
      text:
        'I work as a Software Engineering Intern at NupaStack, a cloud and DevOps delivery firm focused on AWS. NupaStack designs, builds and operates cloud infrastructure so clients can ship without an in-house DevOps team.',
      points: [
        'Role: Software Engineering Intern',
        'Cloud Audit – review of AWS architecture, security and spend',
        'Implementation – migrations, infrastructure as code, CI/CD',
        'DevOps Retainer – ongoing infrastructure management',
        'Custom Software – cloud-native apps, APIs and tools',
      ],
      tags: ['AWS', 'DevOps', 'Cloud', 'Custom Software'],
      projects: [
        {
          title: 'NupaStack Website – 3D Enhancement',
          room: 'nupa',
          href: 'https://nupastack.netlify.app',
          bullets: [
            'Integrated Three.js into the NupaStack website to create an interactive and modern 3D experience.',
            'NupaStack is a cloud and DevOps consultancy site (cloud audits, DevOps retainers, implementation) – the 3D layer was added without changing its fast, plain HTML/CSS/JS foundation.',
          ],
          details: [
            { heading: 'My contributions', items: [
              'Built page-specific 3D hero scenes with Three.js r160 for Home, About, How We Work, Blog, Cloud Audit and Founder pages.',
              'Created reusable procedural 3D components and a shared scene toolkit (rounded boxes, glow materials, reflection environment).',
              'Modelled the NupaStack hero in Blender (Python/bpy script) and exported it as an optimised GLB loaded with GLTFLoader.',
              'Optimised performance: lazy-start scenes, pixel-ratio limits, and static WebP/PNG fallbacks when WebGL is unavailable.',
              'Automated checks with Node.js, Puppeteer and Playwright, plus captures of the rendered scenes.',
              'Improved the user experience with responsive layouts and an SEO-ready setup (sitemap, robots, Open Graph).',
            ] },
            { heading: 'How it is built', text: 'Plain HTML, CSS and JavaScript – no framework. Three.js r160 is served locally through an import map, so every page loads only the 3D code it needs. The site is deployed on Netlify with custom headers and redirects.' },
          ],
          stack: ['HTML5', 'CSS3', 'JavaScript (ES Modules)', 'Three.js r160', 'WebGL', 'GLTF / GLB', 'Blender + Python (bpy)', 'Node.js', 'Puppeteer', 'Playwright', 'Netlify'],
        },
      ],
      buttons: [{ label: 'Enter the NupaStack Showroom →', action: 'nupalab' }, { label: 'Visit nupastack.com', href: 'https://nupastack.com/' }],
    },

    labs: {
      label: 'My Projects Lab',
      kicker: 'Projects',
      title: 'My Projects Lab',
      text: 'A selection of the websites and systems I have built.',
      projects: [
        {
          title: 'Leads Preschool Website (MERN)',
          room: 'preschool',
          year: '2025',
          href: 'https://leads-preschool.vercel.app/',
          bullets: [
            'Preschool learning and classroom management web app supporting lesson planning, student engagement activities and basic progress tracking for early childhood education.',
            'Full-stack system using React, CSS, Node.js and MongoDB to manage educational content and store student-related data efficiently.',
            'Extra features: an AI chatbot for user assistance and a QR code-based attendance system.',
          ],
          stack: ['React', 'CSS', 'Node.js', 'MongoDB', 'Docker', 'AWS (basic hands-on)', 'Vercel', 'Railway'],
        },
        { title: 'Randu Salon Website' },
        {
          title: 'TaskFlow – Full-Stack Team Collaboration & Task Management System',
          year: '2026',
          bullets: [
            'Collaborative full-stack task management web app using React, TypeScript and Tailwind CSS on the frontend and Go (Golang) on the backend, with real-time team messaging and role-based access control (Admin/Member).',
            'Secure Go backend using Gin and GORM with PostgreSQL, Amazon S3 for profile media and file attachments, and an automated AWS CI/CD pipeline with CodePipeline and Docker for seamless cloud deployments.',
          ],
          stack: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'AWS (S3 / CodePipeline)', 'Docker', 'Tailwind CSS', 'Git', 'Docker Hub'],
        },
        {
          title: 'New Year Auspicious Time Website',
          room: 'avurudu',
          year: '2026',
          href: 'https://kaviduhpremasiri-nine.vercel.app/',
          bullets: [
            'Responsive "Nakath Charithra" web app that displays traditional Sri Lankan auspicious times.',
            'Client-side time calculations and dynamic updates in JavaScript to determine and show accurate Nakath (auspicious) time information in a user-friendly interface.',
          ],
          stack: ['React', 'CSS', 'JavaScript', 'Vercel'],
        },
        { title: 'Poker Game Website' },
      ],
      buttons: [{ label: 'Enter the 3D Lab →', action: 'lab' }, { label: 'More on GitHub', href: 'github' }],
    },
  },
};
