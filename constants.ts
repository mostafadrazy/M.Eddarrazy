
import { VideoProject, ExperienceItem, SkillCategory, Testimonial } from './types';

export const SOCIAL_LINKS = {
  email: "Mostafadrazy@gmail.com",
  phone: "+212 657 067 384",
  linkedin: "https://linkedin.com/in/eddarrazy",
  website: "https://www.9adiya.site/",
  location: "Salé, Morocco"
};

export const ASSETS = {
  heroVideo: "https://res.cloudinary.com/dmnqlruhl/video/upload/users_cm36fnldg0bvzqq01ucd25h3d_hv1qaGPxLSiUaA4R-lv_0_20240403210232_1_n5qbah.mp4",
  heroImageDesktop: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764382602/me-in-desktop_mdqom4.png",
  heroImagePortrait: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png",
  footerBanner: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1767054584/s_olcyqf.png"
};

export const VIDEOS: VideoProject[] = [
  {
    title: "Porsche Cinematic",
    category: "Cinematography",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1772298922/Porsche_2_tzdfdk.mp4"
  },
  {
    title: "Fitness Lifestyle",
    category: "Reels",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1772298931/Focus_on_Building_muscle_2_z2j84v.mp4"
  },
  {
    title: "Sequence VFX",
    category: "VFX",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1772299348/Extremely_affordable_w5yyj8.mp4"
  },
  {
    title: "Aya",
    category: "Cinematography",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1764376898/Aya_anxhsh.mp4"
  },
  {
    title: "Sequence 01",
    category: "Editing",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1764377214/Sequence_01_6_hjkn7p.mp4"
  }
];

export const ALL_PROJECTS = [
  ...VIDEOS,
  {
    title: "ESSA Estates",
    category: "Web Development",
    url: "https://www.behance.net/gallery/249578525/project",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ac1ed9249578525.6a0b1950b542e.png",
    modalImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a61dbb249578525.6a0b1950b668d.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a61dbb249578525.6a0b1950b668d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7e24c8249578525.6a0b1950b6ecf.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3a3fad249578525.6a0b1950b624c.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cb3cd4249578525.6a0b1950b5d8a.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/78bea6249578525.6a0b1950b6abf.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9e324c249578525.6a0b1950b592e.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56a06e249578525.6a0b1950b72ee.png"
    ],
    isWeb: true,
    year: "2026"
  },
  {
    title: "Anime & Movie Streaming Platform",
    category: "Web Development",
    url: "https://movies-dun-one.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772301647/Gemini_Generatedw_Image_fr5tnrfr5tnrfr5t-_1_ivnlsv.png",
    modalImage: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772301628/screencapture-movies-dun-one-vercel-app-2026-02-28-18_00_11_dngvxt.png",
    isWeb: true,
    year: "2026"
  },
  {
    title: "Rachid Labrik",
    category: "Web Development",
    url: "https://www.rachidlabrik.com/",
    thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772300195/synthid-removed-Gemini_Generated_Image_ky744qky744qky74_ezgzoj.jpg",
    modalImage: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772300217/Screenshot_28-2-2026_172533_www.rachidlabrik.com_ht3yme.jpg",
    isWeb: true,
    year: "2026"
  },
  {
    title: "Tabr3",
    category: "Web Development",
    url: "https://tabr3.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772302084/3546e6225579067.681fb1002b4b5_hwlyys.jpg",
    modalImage: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772302062/screencapture-tabr3-vercel-app-2026-02-28-18_07_30_r4gmra.png",
    isWeb: true,
    year: "2024"
  },
  {
    title: "9adiya.site",
    category: "Web Development",
    url: "https://www.9adiya.site/",
    thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg",
    isWeb: true,
    year: "2024"
  },
  {
    title: "Neon Nights",
    category: "Motion Design",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1764377214/Sequence_01_6_hjkn7p.mp4",
    year: "2024"
  },
  {
    title: "Dripergy Logo",
    category: "Graphic Design",
    url: "https://www.behance.net/gallery/210280955/LOGO-DESIGN-DRIPERGY",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/35db14210280955.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    isWeb: true,
    year: "2024"
  },
  {
    title: "Catalyst Creators",
    category: "Graphic Design",
    url: "https://www.behance.net/gallery/206892799/Logo-design-For-Catalyst-Creators",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/d4596c206892799.Y3JvcCwxMTcyLDkxNiwzNTMsNTg.jpg",
    modalImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7be34206892799.66d475bc43c11.jpg",
    isWeb: true,
    year: "2024"
  },
  {
    title: "Resume Verification Ads",
    category: "Graphic Design",
    url: "https://www.behance.net/gallery/195604377/Facebook-Ads-Posters-for-a-Resume-Verification-Company",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/14c22b195604377.Y3JvcCwxMDgwLDg0NCwwLDEwOQ.png",
    isWeb: true,
    year: "2024"
  },
  {
    title: "Association Sportive Sale",
    category: "Rebranding",
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/30f52e151133187.630668ac01f38.png",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/78c0aa151133187.Y3JvcCwxNDAwLDEwOTUsMCwxNDkw.png",
    isWeb: true,
    year: "2024"
  },
  {
    title: "Rental Application Design",
    category: "Web Development",
    url: "https://www.behance.net/gallery/182674111/A-rental-Application-Website-Design-UIUX",
    thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772302281/621508182674111.653161b34e0d_pxc0vg.png",
    modalImage: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1772302280/1ab5ee182674111.6531861b340fc_qehext.png",
    isWeb: true,
    year: "2023"
  },
  {
    title: "Urban Flow",
    category: "Editing",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1772298931/Focus_on_Building_muscle_2_z2j84v.mp4",
    year: "2023"
  },
  {
    title: "Abstract Realm",
    category: "VFX",
    url: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1772299348/Extremely_affordable_w5yyj8.mp4",
    year: "2023"
  },
  {
    title: "Brand Identity",
    category: "Art Direction",
    url: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg",
    isWeb: true,
    year: "2023"
  },
  {
    title: "Sausome Gorilla Merch",
    category: "Graphic Design",
    url: "https://www.behance.net/gallery/185805541/Merch-For-Sausome-Gorilla-Stringer-Tank",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/553438185805541.Y3JvcCwxMTY5LDkxNCwxMzAsMzA4NQ.png",
    modalImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/3ddcdc185805541.6569e78aeac82.png",
    isWeb: true,
    year: "2023"
  },
  {
    title: "Gym Coach Website",
    category: "Web Development",
    url: "https://www.behance.net/gallery/183612443/A-Gym-coach-Website-Design-UIUX",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/f0b383183612443.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    modalImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e33ab7183612443.6542ba9b0143e.png",
    isWeb: true,
    year: "2023"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Slimstock",
    role: "Video Editor & Graphic Designer",
    period: "Jul 2025 - Present"
  },
  {
    company: "S2M Consulting",
    role: "Data Scraping Specialist",
    period: "May 2024 - Jun 2024"
  },
  {
    company: "DigiReach Media",
    role: "Video Editor & Graphic Designer",
    period: "Feb 2022 - Aug 2023"
  },
  {
    company: "Viral Ideas",
    role: "Video Editor & Graphic Designer",
    period: "Apr 2023 - Jun 2023"
  },
  {
    company: "Dar Chabab Batana",
    role: "Graphic Design Instructor",
    period: "Jan 2020 - Apr 2020"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Creative",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Illustrator", "Figma"]
  },
  {
    title: "Technical",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Django", "Scraping"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Mustapha's ability to blend rhythm and visual storytelling completely transformed our brand narrative. He doesn't just edit; he engineers emotion.",
    name: "Sarah Jenkins",
    role: "Creative Director",
    company: "Visionary Media"
  },
  {
    quote: "Fast, precise, and incredibly creative. The kinetic typography work he delivered set a new standard for our marketing campaigns.",
    name: "David Alami",
    role: "CMO",
    company: "TechFlow"
  },
  {
    quote: "A rare talent who bridges the gap between technical development and high-end design. The website he built is both performant and visually stunning.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Lumina Studios"
  }
];

export const IMAGES = {
  hero: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png",
  about: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764382689/c02e59e2_Large_dpwia7.png",
  project: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg"
};

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

export const getProjectBySlug = (slug: string) => {
  return ALL_PROJECTS.find(p => slugify(p.title) === slug);
};
