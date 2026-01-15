export interface VideoProject {
  title: string;
  category: string;
  url: string;
  isWeb?: boolean;
  year?: string;
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