export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Redevelopment';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  price?: string;
  reraId?: string;
  imageUrl: string;
  description: string;
  stats: {
    units?: number;
    area?: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ProjectFilters {
  location: string;
  status: string;
  type: string;
}

export enum NavLinkType {
  HOME = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
  CONTACT = '/contact',
  REDEVELOP = '/redevelop',
  MEDIA = '/media',
  CAREERS = '/careers',
  BLOGS = '/blogs',
  LEGAL = '/legal'
}

export interface BlogPost {
  title: string;
  date: string;
  img: string;
  snippet: string;
}

export interface Testimonial {
  name: string;
  project: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  center?: boolean;
}

export interface JobOpening {
  title: string;
  exp: string;
  loc: string;
  type: string;
  department: string;
}

export interface NewsItem {
  title: string;
  img: string;
}

export interface Vertical {
  title: string;
  description: string;
  img: string;
}