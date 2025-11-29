import { Project, Experience, Education } from './types';

export const NAV_LINKS = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Profile', href: '/about' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Porsche Cinematic',
    category: 'Cinematography',
    videoUrl: 'https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FQUw3Vga10FLSgpm7-Porsche%2520(2).mp4?w=1280&q=100',
    type: 'video',
    aspect: 'video',
    className: 'aspect-video lg:col-span-2'
  },
  {
    id: 2,
    title: 'Fitness Lifestyle',
    category: 'Reels',
    videoUrl: 'https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2F8dIqUuICpyVplbPu-Focus%2520on%2520Building%2520muscle_2.mp4?w=1280&q=100',
    type: 'video',
    aspect: 'vertical',
    className: 'lg:col-span-1 aspect-[8/9]'
  },
  {
    id: 3,
    title: 'Sequence',
    category: 'VFX',
    videoUrl: 'https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FzkXr4qomep6XAYxg-Sequence%252002_6.mp4?w=1280&q=100',
    type: 'video',
    aspect: 'square'
  },
  {
    id: 4,
    title: 'Aya',
    category: 'Cinematography',
    videoUrl: 'https://res.cloudinary.com/dmnqlruhl/video/upload/v1764376898/Aya_anxhsh.mp4',
    type: 'video',
    aspect: 'video'
  },
  {
    id: 5,
    title: 'Sequence 01',
    category: 'Editing',
    videoUrl: 'https://res.cloudinary.com/dmnqlruhl/video/upload/v1764377214/Sequence_01_6_hjkn7p.mp4',
    type: 'video',
    aspect: 'video'
  },
  {
    id: 6,
    title: '9adiya.site',
    category: 'Legal Tech SaaS',
    videoUrl: 'https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg',
    type: 'image',
    aspect: 'video',
    description: 'Founder & Creator of a case management system for lawyers.',
    externalLink: 'https://www.9adiya.site/',
    className: 'aspect-video lg:col-span-3 lg:aspect-[2.5/1]'
  }
];

export const EXPERIENCES: Experience[] = [
  { id: 1, company: 'Slimstock', role: 'Video Editor & Graphic Designer', period: 'Jul 2025 - Present', isCurrent: true },
  { id: 2, company: 'S2M Consulting', role: 'Data Scraping Specialist', period: 'May 2024 - Jun 2024', isCurrent: false },
  { id: 3, company: 'DigiReach Media', role: 'Video Editor & Graphic Designer', period: 'Feb 2022 - Aug 2023', isCurrent: false },
  { id: 4, company: 'Viral Ideas', role: 'Video Editor & Graphic Designer', period: 'Apr 2023 - Jun 2023', isCurrent: false },
  { id: 5, company: 'Dar Chabab Batana', role: 'Graphic Design Instructor', period: 'Jan 2020 - Apr 2020', isCurrent: false },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: 'BA, English Language & Literature',
    institution: 'Mohammed V University in Rabat',
    period: 'Jan 2021 - Apr 2024',
    description: 'Developed strong communication and analytical skills.'
  }
];

export const SERVICES = [
  {
    title: "Video Editing",
    description: "Motion graphics, video podcasts, and promotional content designed to engage.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  },
  {
    title: "Graphic Design",
    description: "Impactful social media graphics and visual identities.",
    tools: ["Photoshop", "Illustrator", "Brand Strategy"]
  },
  {
    title: "Web Development",
    description: "Building functional tools like case management systems.",
    tools: ["Python", "React", "Django", "Data Scraping"]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the core objectives and brand voice to tailor the perfect solution."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Planning the visual narrative or technical architecture to ensure impact."
  },
  {
    number: "03",
    title: "Execution",
    description: " bringing ideas to life with precision editing, design, or code."
  },
  {
    number: "04",
    title: "Delivery",
    description: "Final polish and optimization for the best possible user experience."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Mustapha doesn't just edit; he directs attention. His ability to weave narrative into raw footage is rare and highly valuable.",
    author: "Sarah Jenkins",
    role: "Creative Director, DigiReach"
  },
  {
    quote: "Bridging technical data requirements with clean UI design is hard. Mustapha made it look easy on our latest dashboard project.",
    author: "Ahmed K.",
    role: "Manager, S2M Consulting"
  }
];

export const FAQ = [
  {
    question: "What is your typical turnaround time?",
    answer: "For most video projects, the initial draft is delivered within 3-5 business days. Complex web development projects typically take 2-4 weeks depending on the scope."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, all packages include 2 rounds of revisions to ensure the final product meets your vision perfectly. Additional revisions can be discussed if needed."
  },
  {
    question: "How do we communicate during the project?",
    answer: "I use Notion for project tracking and WhatsApp or Email for daily updates. You'll always know exactly where your project stands."
  },
  {
    question: "Can you handle rush orders?",
    answer: "Yes, rush delivery is available for an additional fee depending on my current workload. Please contact me directly to check availability."
  }
];

export const GEAR_STACK = {
  software: [
    "Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Illustrator", "Figma"
  ],
  development: [
    "React", "TypeScript", "Tailwind CSS", "Python", "Django", "Node.js"
  ],
  hardware: [
    "MacBook Pro M2", "Sony A7III", "Shure SM7B", "Custom PC (RTX 4080)"
  ]
};

export const DETAILED_SERVICES = [
  {
    title: "Video Editing & Post-Production",
    description: "Turning raw footage into compelling narratives that drive engagement.",
    features: [
      "Advanced Color Grading",
      "Sound Design & Mixing",
      "Motion Graphics Integration",
      "Multi-cam Editing",
      "Social Media Optimization (9:16, 4:5)"
    ],
    idealFor: "YouTubers, Podcasters, Brands needing ad creatives"
  },
  {
    title: "Brand Identity & Design",
    description: "Visuals that make your brand unforgettable across all platforms.",
    features: [
      "Logo Design & Usage Guidelines",
      "Social Media Kits",
      "Marketing Collateral",
      "Thumbnail Design",
      "Visual Strategy"
    ],
    idealFor: "Startups, Content Creators, Small Businesses"
  },
  {
    title: "Web Development & Automation",
    description: "Custom digital solutions to streamline your business operations.",
    features: [
      "Custom React/Next.js Websites",
      "Python Automation Scripts",
      "Data Scraping & Analysis",
      "SaaS MVP Development",
      "API Integration"
    ],
    idealFor: "Agencies, Law Firms, Tech Startups"
  }
];

// System prompt for the Gemini AI Assistant
export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for Mustapha Eddarrazy's portfolio website. 
Mustapha is a Video Editor, Graphic Designer, and Entrepreneur based in Salé, Morocco.
He is the Founder of 9adiya.site, a case management system for lawyers.
Skills: Adobe Creative Suite (Photoshop, Premiere Pro, After Effects, Illustrator), Python, Data Scraping, Web Development.
Experience: Slimstock, S2M Consulting, DigiReach Media, Viral Ideas.
Education: BA in English Language & Literature from Mohammed V University.
Contact: Mostafadrazy@gmail.com | +212657067384 | LinkedIn: eddarrazy.
Tone: Professional, creative, concise, and helpful.
`;