export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectArchitectureStep {
  label: string;
  tech: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ml-ai' | 'data-engineering' | 'cloud-system';
  categoryLabel: string;
  status: 'Completed' | 'In Progress' | 'Practice / Exploring';
  githubUrl?: string;
  f1Score?: string;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyHighlights: string[];
  architectureSteps: ProjectArchitectureStep[];
  deploymentNote?: string;
  isUpcomingPlaceholder?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  isPrimary?: boolean;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  badgeCode?: string;
  description: string;
}

export interface AchievementMedia {
  label: string;
  type: 'certificate' | 'photo';
  url: string;
  caption: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  organization: string;
  year: string;
  placement?: string;
  description: string;
  metric?: string;
  media?: AchievementMedia[];
}

export interface ResumeTrack {
  id: 'data-engineer' | 'software-developer' | 'cloud-engineer';
  label: string;
  roleTitle: string;
  pdfPath: string;
  downloadName: string;
  objective: string;
  skillRows: { category: string; items: string }[];
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  wordmark: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  resumePdfPath: string;
  availability: string;
  graduationDate: string;
  cgpa: string;
  shortBio: string;
  detailedBio: string[];
}

