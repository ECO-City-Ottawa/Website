export interface ProjectOverview {
  problem: string;
  action: string;
  outcome: string;
}

export interface ProjectContact {
  email: string;
  website?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  image: string;
  // Status values used across the site
  status: 'past' | 'current' | 'under consideration';
  startDate: string;
  endDate?: string;
  tags: string[];
  theme: string;
  type: string;
  city: string;
  partner?: string;
  // Single-project page fields
  objective?: string;
  address?: string;
  organization?: string;
  tools?: string[];           // e.g. ['PAL', 'CSP']
  overview?: ProjectOverview;
  gallery?: string[];
  contact?: ProjectContact;
  coordinates?: { lat: number; lng: number };
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleFr?: string;
  slug: string;
  excerpt: string;
  excerptFr?: string;
  content: string;
  contentFr?: string;
  image: string;
  author: string;
  publishedAt: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  titleFr?: string;
  slug: string;
  description: string;
  descriptionFr?: string;
  image: string;
  location: string;
  locationFr?: string;
  isVirtual: boolean;
  eventDate: string; // ISO 8601 date string or timestamp
  startTime: string;
  endTime: string;
  registrationLink?: string;
  createdAt: string;
  updatedAt: string;
}
