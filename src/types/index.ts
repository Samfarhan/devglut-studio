export type ProjectCategory = 
  | 'Creative Technology'
  | 'Intelligent Systems'
  | 'Digital Engineering'
  | 'Digital Growth';

export type ProjectBadge = 'EXPERIMENTAL BUILD' | 'CONCEPT PROJECT' | 'STUDIO ARCHIVE';

export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: ProjectCategory;
  badge: ProjectBadge;
  headline: string;
  summary: string;
  fullOverview: string;
  highlights: string[];
  techStack: string[];
  visualType: 'spatial-3d' | 'neural-graph' | 'product-telemetry';
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  specialization: string[];
}

export interface CapabilityDiscipline {
  number: string;
  title: string;
  services: string[];
}
