export interface Project {
  id: number;
  title: string;
  category: string;
  videoUrl: string; // Used for hover preview and modal
  type: 'video' | 'image';
  aspect: 'video' | 'vertical' | 'square';
  description?: string;
  externalLink?: string;
  className?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
