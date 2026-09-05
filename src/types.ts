export type NavigationPage = 
  | 'inicio' 
  | 'nosotros' 
  | 'servicios' 
  | 'instrumentos-ambientales' 
  | 'evaluacion-riesgos' 
  | 'profesionales' 
  | 'proyectos' 
  | 'casos-exito' 
  | 'blog' 
  | 'recursos' 
  | 'cotizacion' 
  | 'contacto';

export interface EnvironmentalInstrument {
  id: 'evap' | 'dia' | 'its' | 'pama' | 'fitsa' | 'otros';
  code: string;
  name: string;
  fullName: string;
  tagline: string;
  whatIs: string;
  purpose: string;
  whenRequired: string;
  requirements: string[];
  deliverables: string[];
  timelineEst: string;
  normativeReference: string;
  faqs: { q: string; a: string }[];
}

export interface RiskCategory {
  id: 'geodinamica-interna' | 'geodinamica-externa' | 'hidrometeorologicos';
  title: string;
  subtitle: string;
  hazards: string[];
  description: string;
  workflow: string[];
  technicalTools: string[];
  typicalScenarios: string[];
  deliverables: string[];
}

export interface Professional {
  id: string;
  name: string;
  profession: string;
  specialty: string;
  experienceYears: number;
  location: string;
  modality: 'Presencial' | 'Híbrido' | 'Remoto' | 'Campo';
  sectors: string[];
  bio: string;
  verifiedBadge: boolean;
  avatarUrl: string;
  keyProjects: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'gestion-ambiental' | 'riesgos' | 'profesionales';
  sector: string;
  location: string;
  region: string;
  year: number;
  description: string;
  imageUrl: string;
  challenge: string;
  analysis: string;
  solution: string;
  result: string;
  isCaseStudy?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Gestión Ambiental' | 'Gestión del Riesgo' | 'SIG/GIS' | 'Normativa' | 'Prevención';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Guía Técnica' | 'Checklist' | 'Ficha Técnica' | 'Infografía' | 'Plantilla';
  pagesOrFormat: string;
  description: string;
  downloadCount: number;
}

export interface QuoteRequest {
  id: string;
  service: string;
  instrumentOrHazard?: string;
  region: string;
  province: string;
  district: string;
  projectType: string;
  description: string;
  fullName: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  whatsapp: string;
  createdAt: string;
  status: 'Recibido' | 'En revisión' | 'En Evaluación' | 'Cotizado' | 'Cerrado';
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'ambiental' | 'riesgo' | 'integral';
  sector: string;
  instrument: string;
  location: string;
  authority: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}

export interface TechnicalResource {
  id: string;
  title: string;
  category: string;
  format: string;
  fileSize: string;
  description: string;
}


export interface ContactMessage {
  id: string;
  name: string;
  company: string;
  position?: string;
  email: string;
  phone: string;
  region: string;
  service: string;
  message: string;
  createdAt: string;
}

export interface SectorItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  applicableServices: string[];
  regulations: string;
}
