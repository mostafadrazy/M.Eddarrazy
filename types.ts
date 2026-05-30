
export interface VideoProject {
  title: string;
  category: string;
  url: string;
  thumbnail?: string;
  modalImage?: string;
  images?: string[];
  isWeb?: boolean;
  year?: string;
  slug?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}
