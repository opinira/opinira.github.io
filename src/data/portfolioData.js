import motionCoverImg from '../assets/images/motion_cover.jpg';
import posterCoverImg from '../assets/images/poster_cover.jpg';

export const DRIVE_VIDEO_URL = 'https://drive.google.com/drive/folders/1TGqEy1MuzGmSlE_NvG_UMAF7qB0RucNN?usp=sharing';
export const DRIVE_STATIC_URL = 'https://drive.google.com/drive/folders/11nSmd7EdYUi81w2m4UZJoMdLF0ho7huC?usp=sharing';
export const DRIVE_PROJECTS_URL = DRIVE_VIDEO_URL;
export const BEHANCE_PROFILE_URL = 'https://www.behance.net/opinira';

export const portfolioCategories = [
  {
    id: 'all',
    label: 'All Categories',
    count: 2,
    description: 'The two primary creative disciplines: Commercial Motion Graphics & Video Advertising, and Luxury Static Poster Design.',
    driveUrl: DRIVE_VIDEO_URL,
  },
  {
    id: 'motion',
    label: 'Motion Graphics & Video',
    count: 1,
    description: 'Commercial video advertising, promotional video ads, luxury product showcases, kinetic typography, and brand motion design.',
    driveUrl: DRIVE_VIDEO_URL,
  },
  {
    id: 'poster',
    label: 'Static Poster Design',
    count: 1,
    description: 'Promotional posters, product advertising artwork, campaign visuals, digital banners, and commercial graphic design.',
    driveUrl: DRIVE_STATIC_URL,
  }
];

export const projectsData = [
  {
    id: 'motion-graphics-commercial-showcase',
    title: 'Commercial Motion Graphics & Video Advertising',
    category: 'motion',
    categoryLabel: 'Motion Graphics & Video',
    coverImage: motionCoverImg,
    featured: true,
    description: 'Comprehensive commercial motion graphics and video advertising suite for international luxury brands with kinetic typography, product showcase reels, and audio-synchronized visual storytelling.',
    brand: 'Royal Hair Wigs & Roylux (Worldwide Export Brands)',
    timeline: 'November 2023 – Present (Ongoing)',
    deliverableType: 'Commercial Video Advertisements & Motion Graphics',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Photoshop', 'CapCut', 'Canva Pro', 'AI Tools'],
    driveUrl: DRIVE_VIDEO_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
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
        { name: 'CapCut / Canva Pro', purpose: 'Mobile social platform preview & rapid marketing variation export' },
        { name: 'AI Creative Pipeline (Google Flow / Gemini / Claude)', purpose: 'Concept ideation, creative hook drafting & visual moodboards' }
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
    category: 'poster',
    categoryLabel: 'Static Poster Design',
    coverImage: posterCoverImg,
    featured: true,
    description: 'Editorial-grade commercial advertising posters, luxury product promotional artwork, digital marketing banners, and visual campaign creatives engineered for print and digital channels.',
    brand: 'Commercial Brand Campaigns & Export Marketing',
    timeline: 'November 2023 – Present (Ongoing)',
    deliverableType: 'High-Impact Promotional Posters & Digital Banners',
    tools: ['Adobe Photoshop', 'Figma', 'Canva Pro', 'Google Flow'],
    driveUrl: DRIVE_STATIC_URL,
    behanceUrl: BEHANCE_PROFILE_URL,
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
        { name: 'Canva Pro', purpose: 'Marketing collateral standardization & rapid promotional resizing' },
        { name: 'Google Flow / Gemini AI', purpose: 'Creative conceptualization & atmospheric background texture synthesis' }
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
