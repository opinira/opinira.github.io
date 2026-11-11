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
    id: 'development-web',
    label: 'Development & Web Apps',
    title: 'Development & Web Apps',
    subtitle: 'Modern Web Engineering',
    description: 'Fast, responsive web applications built with modern frameworks.',
    coverImage: categoryDevWebImg,
    tag: 'Web Engineering',
    count: 2,
    actionLabel: 'View Web Apps',
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Design',
    title: 'UI/UX Design',
    subtitle: 'Interface Architecture',
    description: 'User-centered interface design and interactive prototypes.',
    coverImage: categoryUiUxImg,
    tag: 'Interface Design',
    count: 1,
    actionLabel: 'View UI/UX Projects',
  },
  {
    id: 'app-development',
    label: 'App Development',
    title: 'App Development',
    subtitle: 'Mobile Engineering',
    description: 'Cross-platform mobile applications with intelligent AI integrations.',
    coverImage: categoryAppDevImg,
    tag: 'Mobile Platforms',
    count: 1,
    actionLabel: 'View Mobile Apps',
  },
  {
    id: 'motion',
    label: 'Motion Design',
    title: 'Motion Design',
    subtitle: 'Video Ads & Motion',
    description: 'Commercial video advertising and kinetic motion design.',
    coverImage: categoryMotionImg,
    tag: 'Motion & Video',
    count: 2,
    actionLabel: 'View Motion Work',
  }
];

export const projectsData = [
  {
    id: 'bitebox-food-discovery',
    title: 'BiteBox — Food Discovery',
    category: 'development-web',
    categoryLabel: 'Development & Web Apps',
    coverImage: biteboxImg,
    featured: true,
    description: 'Editorial food discovery web app with curated restaurants, menus, and interactive cart checkout.',
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
        role: 'Front-End Developer & UI Designer'
      },
      objective: 'Design and engineer a luxury food discovery platform allowing food lovers to explore curated restaurant partners, examine nutritional macros, and simulate seamless order checkout.',
      creativeApproach: {
        visualDirection: 'Warm ivory canvas (#F7F3EB) with midnight charcoal typography and strategic BiteBox orange interaction accents.',
        composition: 'Two-column editorial hero, responsive 8-category carousel, and high-impact 1:1 food photography cards.',
        motionStyle: 'Smooth entrance transitions, slide-in order summary drawers, and celebratory confetti upon checkout completion.'
      },
      deliverables: [
        'Live Responsive Web Application',
        '8 Interactive Restaurant Showcases',
        '24 Curated Dish Profiles with Macro Insights',
        'Cart & Checkout Simulation with LocalStorage Persistence'
      ],
      toolsUsed: [
        { name: 'React 18 & TypeScript', purpose: 'Component hierarchy & type-safe data architecture' },
        { name: 'Tailwind CSS', purpose: 'Design tokens & responsive layouts' },
        { name: 'Framer Motion', purpose: 'Micro-interactions & drawer overlays' }
      ]
    }
  },
  {
    id: 'folbritto-fruit-directory',
    title: 'Folbritto (ফলবৃত্ত) — Fruit Guide',
    category: 'development-web',
    categoryLabel: 'Development & Web Apps',
    coverImage: folbrittoImg,
    featured: true,
    description: 'Bengali static fruit directory featuring seasonal harvest calendars and fast bilingual search.',
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
        role: 'Front-End Developer & UI Designer'
      },
      objective: 'Create an authentic, visually stunning Bengali-language static directory cataloging fruits grown and consumed in Bangladesh with seasonal harvest guides and nutritional insights.',
      creativeApproach: {
        visualDirection: 'Spacious editorial natural palette with organic deep green (#185C3A), warm cream background (#FFFDF5), and crisp Bengali typography.',
        composition: 'Minimalist square fruit imagery grid, compact hero banner, and clear multi-attribute season filtering.',
        motionStyle: 'Lightweight client-side transitions and instantaneous query-param synchronized search.'
      },
      deliverables: [
        'Complete Bengali Fruit Directory',
        'Instant Bilingual Search & Season Filter Engine',
        'Pre-rendered Botanical Detail Pages',
        'GitHub Pages Production Build'
      ],
      toolsUsed: [
        { name: 'Astro', purpose: 'Zero-JS by default static site generation' },
        { name: 'TypeScript', purpose: 'Data validation for botanical records' },
        { name: 'Tailwind CSS', purpose: 'Responsive editorial typography' }
      ]
    }
  },
  {
    id: 'cashless-vu',
    title: 'Cashless Vu — Campus Wallet',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design',
    coverImage: cashlessVuImg,
    featured: true,
    description: 'Smart campus wallet prototype for seamless university dining payments and digital transactions.',
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
        motionStyle: 'Micro-animations for payment confirmations and animated receipt generation.'
      },
      deliverables: [
        'Complete Mobile UI Screen Suite',
        'Interactive Figma Clickable Prototype',
        'Campus Design System & Component Library'
      ],
      toolsUsed: [
        { name: 'Figma', purpose: 'High-fidelity UI screens & design tokens' },
        { name: 'Interactive Prototyping', purpose: 'Smart animate transitions' }
      ]
    }
  },
  {
    id: 'campuspath-ai',
    title: 'CampusPath AI — Mobile App',
    category: 'app-development',
    categoryLabel: 'App Development',
    coverImage: campuspathImg,
    featured: true,
    description: 'Flutter mobile app delivering 14 interactive screens, career match scoring, and course roadmaps.',
    brand: 'LeadLux Studio / University AI Edition',
    timeline: '2026',
    deliverableType: 'Flutter Android Mobile Application & AI Matching Engine',
    tools: ['Flutter', 'Dart', 'Mistral AI API', 'Material 3'],
    actionText: 'View Details',
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
        composition: 'Balanced 6-tab navigation, custom radial score rings, interactive 4-segment department tabs, and salary trajectory roadmaps.',
        motionStyle: 'Fluid page route transitions and animated score progress counters.'
      },
      deliverables: [
        '14-Screen Flutter Mobile Application',
        'Standalone Android Release APK (app-release.apk)',
        'Mistral AI Academic & Career Assessment Engine'
      ],
      toolsUsed: [
        { name: 'Flutter & Dart', purpose: 'Cross-platform reactive UI framework' },
        { name: 'Mistral AI API', purpose: 'Academic guidance matching engine' }
      ]
    }
  },
  {
    id: 'motion-graphics-commercial-showcase',
    title: 'Commercial Motion Graphics',
    category: 'motion',
    categoryLabel: 'Motion Design',
    coverImage: motionCoverImg,
    featured: true,
    description: 'Commercial video ads and kinetic typography reels designed for luxury international export brands.',
    brand: 'Royal Hair Wigs & Roylux (Worldwide Export Brands)',
    timeline: 'November 2023 – Present',
    deliverableType: 'Commercial Video Advertisements & Motion Graphics',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop', 'Canva Pro'],
    driveUrl: DRIVE_VIDEO_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
    actionText: 'View Reel',
    caseStudy: {
      overview: {
        title: 'Commercial Motion Graphics & Video Advertising Portfolio',
        client: 'Royal Hair Wigs & Roylux (Worldwide Export Brands)',
        projectType: 'Commercial Motion Graphics & Video Campaigns',
        timeline: 'November 2023 – Present',
        role: 'Motion Graphics Designer & Video Producer'
      },
      objective: 'Produce high-converting commercial video advertisements and dynamic product showcase reels for international luxury export markets, communicating craftsmanship, luxury texture, and brand elegance.',
      deliverables: [
        'Commercial Video Advertisements (1080p & 4K)',
        'Kinetic Typography Motion Packages',
        'Multi-Format Social Media Video Creatives'
      ],
      toolsUsed: [
        { name: 'Adobe After Effects', purpose: 'Kinetic typography & camera choreography' },
        { name: 'Adobe Premiere Pro', purpose: 'Timeline editing & audio synchronization' }
      ]
    }
  },
  {
    id: 'static-poster-commercial-design',
    title: 'Static Poster Design',
    category: 'motion',
    categoryLabel: 'Motion Design',
    coverImage: posterCoverImg,
    featured: true,
    description: 'Magazine-grade commercial advertising posters and digital promotional campaign artwork.',
    brand: 'Commercial Brand Campaigns & Export Marketing',
    timeline: 'November 2023 – Present',
    deliverableType: 'High-Impact Promotional Posters & Digital Banners',
    tools: ['Adobe Photoshop', 'Figma', 'Canva Pro'],
    driveUrl: DRIVE_STATIC_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
    actionText: 'View Gallery',
    caseStudy: {
      overview: {
        title: 'Static Poster Design & Commercial Advertising Artwork',
        client: 'Commercial Product & Export Marketing Brands',
        projectType: 'Commercial Promotional Posters & Digital Banner Suite',
        timeline: 'November 2023 – Present',
        role: 'Visual & Poster Designer'
      },
      objective: 'Design striking promotional posters and digital advertising creatives communicating luxury product positioning across global marketing channels.',
      deliverables: [
        'Print-Ready Commercial Advertising Posters',
        'E-Commerce Hero & Category Banners',
        'Social Media Campaign Poster Suites'
      ],
      toolsUsed: [
        { name: 'Adobe Photoshop', purpose: 'Precision retouching & lighting' },
        { name: 'Figma', purpose: 'Grid layout & typography scale' }
      ]
    }
  }
];
