import motionCoverImg from '../assets/images/motion_cover.jpg';
import posterCoverImg from '../assets/images/poster_cover.jpg';

import categoryMotionImg from '../assets/images/category-motion-design.webp';
import categoryUiUxImg from '../assets/images/category-ui-ux.webp';
import categoryDevWebImg from '../assets/images/category-development-web.webp';
import categoryAppDevImg from '../assets/images/category-app-development.webp';

import cashlessVuImg from '../assets/images/project-cashless-vu.webp';
import folbrittoImg from '../assets/images/project-folbritto.webp';
import biteboxImg from '../assets/images/project-bitebox.webp';
import campuspathImg from '../assets/images/project-campuspath-ai.webp';

export const DRIVE_VIDEO_URL = 'https://drive.google.com/drive/folders/1TGqEy1MuzGmSlE_NvG_UMAF7qB0RucNN?usp=sharing';
export const DRIVE_STATIC_URL = 'https://drive.google.com/drive/folders/11nSmd7EdYUi81w2m4UZJoMdLF0ho7huC?usp=sharing';
export const DRIVE_PROJECTS_URL = DRIVE_VIDEO_URL;
export const BEHANCE_PROFILE_URL = 'https://www.behance.net/opinira';

export const portfolioCategories = [
  {
    id: 'motion',
    label: 'Motion Design',
    title: 'Motion Design',
    subtitle: 'Commercial Video Ads & Kinetic Typography',
    description: 'Commercial video ads, luxury product showcases, kinetic typography, and audio-synced visual storytelling.',
    coverImage: categoryMotionImg,
    tag: 'Motion & Video',
    count: 2,
    actionLabel: 'View Motion Work',
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    title: 'UI/UX Design',
    subtitle: 'Interface Architecture & User Flow Prototyping',
    description: 'User-centric wireframes, interactive prototypes, and elegant design systems designed in Figma.',
    coverImage: categoryUiUxImg,
    tag: 'Interface Design',
    count: 1,
    actionLabel: 'View UI/UX Projects',
  },
  {
    id: 'development-web',
    label: 'Development & Web Apps',
    title: 'Development & Web Apps',
    subtitle: 'Modern Static & Reactive Web Experiences',
    description: 'Fast, accessible web applications engineered with React, Astro, TypeScript, and modern styling.',
    coverImage: categoryDevWebImg,
    tag: 'Web Engineering',
    count: 2,
    actionLabel: 'View Web Apps',
  },
  {
    id: 'app-development',
    label: 'App Development',
    title: 'App Development',
    subtitle: 'Native Mobile Engineering & AI Engines',
    description: 'Cross-platform mobile applications built in Flutter with custom animations and AI integration.',
    coverImage: categoryAppDevImg,
    tag: 'Mobile Platforms',
    count: 1,
    actionLabel: 'View Mobile Apps',
  }
];

export const projectsData = [
  {
    id: 'bitebox-food-discovery',
    title: 'BiteBox — Premium Food Discovery',
    category: 'development-web',
    categoryLabel: 'Development & Web Apps',
    coverImage: biteboxImg,
    featured: true,
    description: 'International editorial food discovery web application with restaurant profiles, signature dish menus, cart management, and interactive checkout.',
    brand: 'BiteBox Food Tech Startup',
    timeline: '2026',
    deliverableType: 'Production React + TypeScript Web Application',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://opinira.github.io/bitebox-food-discovery/',
    githubUrl: 'https://github.com/opinira/bitebox-food-discovery',
    actionText: 'Live Preview',
    caseStudy: {
      overview: {
        title: 'BiteBox — Editorial Food Discovery & Order Experience',
        client: 'BiteBox Food Tech Startup',
        projectType: 'React + TypeScript Web Application',
        timeline: '2026',
        role: 'Full-Stack Frontend Developer & UI Designer'
      },
      objective: 'Design and engineer a luxury food discovery platform allowing food lovers to explore curated restaurant partners, examine nutritional macros, and simulate seamless order checkout.',
      creativeApproach: {
        visualDirection: 'Warm ivory canvas (#F7F3EB) with midnight charcoal typography and strategic BiteBox orange interaction accents.',
        composition: 'Two-column editorial hero, responsive 8-category carousel, and high-impact 1:1 food photography cards.',
        motionStyle: 'Smooth entrance transitions, slide-in order summary drawers, and celebratory confetti upon checkout completion.'
      },
      productionProcess: [
        {
          step: '01. Brand & Design System',
          detail: 'Created comprehensive design tokens with high-contrast accessibility standards and custom serif display typography.'
        },
        {
          step: '02. Data Architecture & State',
          detail: 'Engineered typed data models for 8 partner restaurants, 24 dishes, dietary flags, and persistent LocalStorage cart state.'
        },
        {
          step: '03. Interactive Modules',
          detail: 'Built real-time search modal, multi-axis category and dietary filter bars, quantity counters, and free shipping progress bars.'
        },
        {
          step: '04. Production Deployment',
          detail: 'Configured HashRouter and relative asset bundling for 100% resilient zero-404 GitHub Pages static hosting.'
        }
      ],
      toolsUsed: [
        { name: 'React 18 & TypeScript', purpose: 'Component hierarchy, state management & type-safe data architecture' },
        { name: 'Tailwind CSS', purpose: 'Design token implementation, responsive grids & layout styling' },
        { name: 'Framer Motion & Canvas Confetti', purpose: 'Micro-interactions, modal overlays & checkout celebration' },
        { name: 'Vite', purpose: 'Sub-second development compilation & optimized production bundling' }
      ],
      deliverables: [
        'Live Responsive Web Application',
        '8 Interactive Restaurant Showcases',
        '24 Curated Dish Profiles with Macro Insights',
        'Cart & Checkout Simulation with LocalStorage Persistence'
      ],
      reflection: 'Pairing editorial luxury typography with instant reactive filters elevates food tech from a basic transaction utility into an appetizing discovery experience.'
    }
  },
  {
    id: 'folbritto-fruit-directory',
    title: 'Folbritto (ফলবৃত্ত) — Bengali Fruit Guide',
    category: 'development-web',
    categoryLabel: 'Development & Web Apps',
    coverImage: folbrittoImg,
    featured: true,
    description: 'Clean, trustworthy Bengali static fruit directory featuring seasonal calendars, nutritional facts, and instant bilingual search.',
    brand: 'Folbritto Editorial Platform',
    timeline: '2026',
    deliverableType: 'Static Editorial Fruit Knowledge Directory',
    tools: ['Astro', 'TypeScript', 'Tailwind CSS', 'Static Site Gen'],
    liveUrl: 'https://opinira.github.io/folbritto/',
    githubUrl: 'https://github.com/opinira/folbritto',
    actionText: 'Live Preview',
    caseStudy: {
      overview: {
        title: 'Folbritto (ফলবৃত্ত) — Bengali Fruit Knowledge Directory',
        client: 'Folbritto Editorial Platform',
        projectType: 'Astro Static Site Architecture',
        timeline: '2026',
        role: 'Frontend Architect & UI Designer'
      },
      objective: 'Create an authentic, visually stunning Bengali-language static directory cataloging fruits grown and consumed in Bangladesh with seasonal harvest guides and nutritional insights.',
      creativeApproach: {
        visualDirection: 'Spacious editorial natural palette with organic deep green (#185C3A), warm cream background (#FFFDF5), and crisp Bengali typography.',
        composition: 'Minimalist square fruit imagery grid, compact hero banner, and clear multi-attribute season filtering.',
        motionStyle: 'Lightweight client-side transitions and instantaneous query-param synchronized search.'
      },
      productionProcess: [
        {
          step: '01. Botanical Content Structuring',
          detail: 'Curated structured datasets for Bengali fruits with scientific names, Bengali aliases, nutritional metrics, and cautions.'
        },
        {
          step: '02. Bilingual Search Engine',
          detail: 'Implemented Unicode-normalized instant search matching Bengali script, phonetic English names, and regional aliases.'
        },
        {
          step: '03. Seasonal Filtering',
          detail: 'Engineered season-based filter chips (Summer, Monsoon, Autumn, Winter, Spring, Year-round) with Boolean combinators.'
        },
        {
          step: '04. Static Performance',
          detail: 'Built with Astro static generation for sub-second page loads and zero server dependencies on GitHub Pages.'
        }
      ],
      toolsUsed: [
        { name: 'Astro', purpose: 'Zero-JS by default static site generation & component composition' },
        { name: 'TypeScript', purpose: 'Strict data validation for botanical records and harvest schedules' },
        { name: 'Tailwind CSS', purpose: 'Responsive editorial typography and custom leaf brand styling' }
      ],
      deliverables: [
        'Complete Bengali Fruit Directory',
        'Instant Bilingual Search & Season Filter Engine',
        'Pre-rendered Botanical Detail Pages',
        'GitHub Pages Production Build'
      ],
      reflection: 'Designing localized, language-first editorial experiences requires deep care for typographic cadence, readability, and immediate search responsiveness.'
    }
  },
  {
    id: 'cashless-vu',
    title: 'Cashless Vu — Smart Campus Wallet',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design',
    coverImage: cashlessVuImg,
    featured: true,
    description: 'Intuitive mobile digital wallet and cashless payment experience designed for university cafeteria ordering, library fees, and peer transfers.',
    brand: 'Varendra University Campus Project',
    timeline: '2026',
    deliverableType: 'High-Fidelity Mobile App UI/UX & Interactive Prototype',
    tools: ['Figma', 'UI/UX Prototyping', 'Design Systems', 'User Research'],
    figmaUrl: 'https://www.figma.com/design/ZRF4cSjx4uE2mRk0H7kpoM/Untitled?t=Bs2vUbW2FLzVMIwt-1',
    actionText: 'View Prototype',
    caseStudy: {
      overview: {
        title: 'Cashless Vu — Campus Digital Payment System',
        client: 'Varendra University Campus Community',
        projectType: 'Mobile UI/UX Design & Figma Prototype',
        timeline: '2026',
        role: 'Lead UI/UX Designer & Researcher'
      },
      objective: 'Eliminate long cafeteria queues, lost meal tokens, and manual fee reconciliations by designing a unified digital campus wallet for students and faculty.',
      creativeApproach: {
        visualDirection: 'Crisp royal navy base with modern biometric authentication indicators, clean white cards, and vibrant transaction accents.',
        composition: 'Thumb-friendly one-tap QR scanner, quick-send contact avatars, real-time balance card, and categorized monthly spending graphs.',
        motionStyle: 'Micro-animations for payment confirmations, haptic card flips, and animated receipt generation.'
      },
      productionProcess: [
        {
          step: '01. Student Flow & Architecture',
          detail: 'Mapped user journeys for rapid 3-second cafeteria checkout, balance reloads, and semester fee verification.'
        },
        {
          step: '02. Wireframing & Design Tokens',
          detail: 'Formulated a comprehensive Figma design system with accessible typography, form inputs, and status badges.'
        },
        {
          step: '03. Interactive Prototyping',
          detail: 'Connected dynamic components, smart animations, and interactive touch points for realistic mobile simulation.'
        },
        {
          step: '04. Usability Testing & Iteration',
          detail: 'Refined numeric keypad accessibility, contrast ratios, and transaction confirmation safety dialogs.'
        }
      ],
      toolsUsed: [
        { name: 'Figma', purpose: 'High-fidelity UI screens, auto-layout components & responsive design tokens' },
        { name: 'Interactive Prototyping', purpose: 'Smart animate transitions, modal flows & gesture micro-interactions' },
        { name: 'User Flow Mapping', purpose: 'Edge-case identification, PIN safety gates & failed transaction fallbacks' }
      ],
      deliverables: [
        'Complete Mobile UI Screen Suite',
        'Interactive Figma Clickable Prototype',
        'Campus Design System & Component Library',
        'User Journey Documentation'
      ],
      reflection: 'Designing financial products for campus environments requires stripping away transaction friction while maximizing visual trust and confirmation feedback.'
    }
  },
  {
    id: 'campuspath-ai',
    title: 'CampusPath AI — Academic Guidance Mobile App',
    category: 'app-development',
    categoryLabel: 'App Development',
    coverImage: campuspathImg,
    featured: true,
    description: 'Flutter mobile academic guidance platform powered by Mistral AI, delivering 14 interactive screens, career match scoring, and course roadmaps.',
    brand: 'LeadLux Studio / University AI Edition',
    timeline: '2026',
    deliverableType: 'Flutter Android Mobile Application & AI Matching Engine',
    tools: ['Flutter', 'Dart', 'Mistral AI API', 'Material 3', 'LeadLux Engine'],
    actionText: 'View Case Study',
    caseStudy: {
      overview: {
        title: 'CampusPath AI — University Career & Academic Platform',
        client: 'University AI Hackathon Edition (LeadLux Studio)',
        projectType: 'Flutter Mobile Application (Android / iOS)',
        timeline: '2026',
        role: 'Mobile App Developer & UI Designer'
      },
      objective: 'Empower university students to discover their ideal academic departments and high-growth global career paths through intelligent AI assessment engines and interactive milestones.',
      creativeApproach: {
        visualDirection: 'Modern academic palette featuring Indigo (#4F46E5), Emerald (#10B981) match rings, and Sky Blue highlights across Light and Dark themes.',
        composition: 'Balanced 6-tab navigation, custom-painted radial score rings, interactive 4-segment department tabs, and salary trajectory roadmaps.',
        motionStyle: 'Fluid page route transitions, animated score progress counters, and floating toast feedback.'
      },
      productionProcess: [
        {
          step: '01. 14-Screen Architecture',
          detail: 'Architected complete student lifecycle from splash, quiz assessment, departmental exploration, career roadmaps, to saved paths.'
        },
        {
          step: '02. Mistral AI Integration',
          detail: 'Integrated Mistral AI Fluent engine via REST API to analyze student interests and compute personalized match alignment scores.'
        },
        {
          step: '03. Custom Flutter Widgets',
          detail: 'Engineered custom painted radial score rings, salary milestones, dynamic bookmarking, and theme switching.'
        },
        {
          step: '04. Native Android Compilation',
          detail: 'Configured Gradle, Android SDK 34, AndroidManifest permissions, and compiled release-ready APK.'
        }
      ],
      toolsUsed: [
        { name: 'Flutter & Dart', purpose: 'Cross-platform reactive UI framework and state management' },
        { name: 'Mistral AI API', purpose: 'Large Language Model matching engine & customized academic guidance' },
        { name: 'Google Fonts & Material 3', purpose: 'Accessible typography and adaptive Light/Dark mode themes' },
        { name: 'Android SDK & Gradle', purpose: 'Native build toolchain and standalone APK production' }
      ],
      deliverables: [
        '14-Screen Flutter Mobile Application',
        'Standalone Android Release APK (app-release.apk)',
        'Mistral AI Academic & Career Assessment Engine',
        'Custom Radial Score Painting System'
      ],
      reflection: 'Integrating generative AI directly into mobile academic workflows transforms complex career planning into encouraging, bite-sized daily guidance.'
    }
  },
  {
    id: 'motion-graphics-commercial-showcase',
    title: 'Commercial Motion Graphics & Video Advertising',
    category: 'motion',
    categoryLabel: 'Motion Design',
    coverImage: motionCoverImg,
    featured: true,
    description: 'Commercial motion graphics and video advertising suite for international luxury brands with kinetic typography, product showcase reels, and audio-synchronized visual storytelling.',
    brand: 'Royal Hair Wigs & Roylux (Worldwide Export Brands)',
    timeline: 'November 2023 – Present',
    deliverableType: 'Commercial Video Advertisements & Motion Graphics',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop', 'Canva Pro'],
    driveUrl: DRIVE_VIDEO_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
    actionText: 'View Reel & Drive',
    caseStudy: {
      overview: {
        title: 'Commercial Motion Graphics & Video Advertising Portfolio',
        client: 'Royal Hair Wigs & Roylux (Worldwide Export Brands)',
        projectType: 'Commercial Motion Graphics & Video Campaigns',
        timeline: 'November 2023 – Present',
        role: 'Motion Graphics Designer & Video Producer'
      },
      objective: 'Produce high-converting commercial video advertisements and dynamic product showcase reels for international luxury export markets (US, UK, Europe, and global regions), communicating craftsmanship, luxury texture, and brand elegance.',
      creativeApproach: {
        visualDirection: 'Cinematic studio lighting with deep royal navy and warm bronze color grading, creating high-contrast luxury appeal.',
        composition: 'Macro product focal points paired with seamless dynamic zooms, rhythmic audio cuts, and clean kinetic typography highlights.',
        motionStyle: 'Smooth keyframed easing curves, particle atmosphere accents, and fluid multi-format video choreography.'
      },
      productionProcess: [
        {
          step: '01. Concept & Storyboarding',
          detail: 'Planning pacing, 3-second visual hooks, narrative flow, and commercial call-to-actions.'
        },
        {
          step: '02. Asset Preparation & Grading',
          detail: 'High-resolution photo/video asset curation, background clean-up, and tonal balancing in Photoshop and Premiere Pro.'
        },
        {
          step: '03. Motion Design & Kinetic Typography',
          detail: 'Animating kinetic text overlays, dynamic camera sweeps, and product rotation in Adobe After Effects.'
        },
        {
          step: '04. Sound Synchronization & Multi-Platform Export',
          detail: 'Syncing sound effects to audio beats and rendering multi-format masters (1:1 square, 9:16 vertical stories, 16:9 widescreen).'
        }
      ],
      toolsUsed: [
        { name: 'Adobe After Effects', purpose: 'Kinetic typography, motion tracking, camera choreography & particle effects' },
        { name: 'Adobe Premiere Pro', purpose: 'Master timeline editing, color grading & audio synchronization' },
        { name: 'Adobe Photoshop', purpose: 'Asset preparation, texture isolation & specular lighting maps' },
        { name: 'CapCut / Canva Pro', purpose: 'Mobile social platform preview & rapid marketing variation export' }
      ],
      deliverables: [
        'Commercial Video Advertisements (1080p & 4K)',
        'Kinetic Typography Motion Packages',
        'Multi-Format Social Media Video Creatives (1:1 Square & 9:16 Vertical)',
        'Product Showcase Motion Reels'
      ],
      reflection: 'Mastery of timing, kinetic typography, and intentional motion pacing significantly amplifies brand authority and engagement in international export marketing.'
    }
  },
  {
    id: 'static-poster-commercial-design',
    title: 'Static Poster Design & Commercial Artwork',
    category: 'motion',
    categoryLabel: 'Motion Design',
    coverImage: posterCoverImg,
    featured: true,
    description: 'Editorial-grade commercial advertising posters, luxury product promotional artwork, digital marketing banners, and visual campaign creatives engineered for print and digital channels.',
    brand: 'Commercial Brand Campaigns & Export Marketing',
    timeline: 'November 2023 – Present',
    deliverableType: 'High-Impact Promotional Posters & Digital Banners',
    tools: ['Adobe Photoshop', 'Figma', 'Canva Pro', 'Google Flow'],
    driveUrl: DRIVE_STATIC_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
    actionText: 'View Gallery & Drive',
    caseStudy: {
      overview: {
        title: 'Static Poster Design & Commercial Advertising Artwork',
        client: 'Commercial Product & Export Marketing Brands',
        projectType: 'Commercial Promotional Posters & Digital Banner Suite',
        timeline: 'November 2023 – Present',
        role: 'Visual & Poster Designer'
      },
      objective: 'Design striking, magazine-grade promotional posters and digital advertising creatives that instantly capture viewer attention and communicate luxury product positioning across global marketing channels.',
      creativeApproach: {
        visualDirection: 'Dramatic studio lighting, atmospheric textures, and golden specular reflections set against deep royal navy surfaces.',
        composition: 'Golden-ratio structural grid, elevated pedestal staging, and clean editorial typographic hierarchy.',
        motionStyle: 'Static artwork infused with dynamic visual tension, directional lighting sweeps, and immaculate contrast.'
      },
      productionProcess: [
        {
          step: '01. Grid Staging & Composition',
          detail: 'Setting visual focal points, product pedestal alignment, and editorial typographic hierarchy in Figma and Photoshop.'
        },
        {
          step: '02. Precision Retouching & Isolation',
          detail: 'Pixel-perfect product cutouts, edge feathering, and natural ambient occlusion contact shadows.'
        },
        {
          step: '03. Lighting & Atmospheric Compositing',
          detail: 'Painting directional rim lights, specular highlights, and atmospheric depth layers in Photoshop.'
        },
        {
          step: '04. Export & Multi-Format Standardization',
          detail: 'Generating 300 DPI print-ready masters and responsive digital banners for e-commerce and social feeds.'
        }
      ],
      toolsUsed: [
        { name: 'Adobe Photoshop', purpose: 'Precision retouching, composite blending, specular lighting & color grading' },
        { name: 'Figma', purpose: 'Grid layout, typography scale, e-commerce banner staging & design tokens' },
        { name: 'Canva Pro', purpose: 'Marketing collateral standardization & rapid promotional resizing' }
      ],
      deliverables: [
        'Print-Ready Commercial Advertising Posters (300 DPI)',
        'E-Commerce Homepage Hero & Category Banners',
        'Social Media Campaign Poster Suites (1:1 Square & 4:5 Feed Formats)',
        'Digital Marketing Promotional Graphics'
      ],
      reflection: 'Static poster design requires balancing visual drama with clean typographic hierarchy to deliver a persuasive commercial message at a single glance.'
    }
  }
];
