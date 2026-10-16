export type QuickStat = {
  label: string;
  value: string;
};

export type HomeContent = {
  headline: string;
  subheadline: string;
  introParagraphs: string[];
  quickStats: QuickStat[];
  featuredProjectIds: string[];
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type SkillItem = {
  id: string;
  name: string;
  level?: "Advanced" | "Intermediate" | "Working";
  keywords?: string[];
};

export type SkillGroup = {
  id: string;
  category: string;
  items: SkillItem[];
};

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  featured: boolean;
  status: "Live" | "Production" | "In Progress";
  repoUrl?: string;
  liveUrl?: string;
};

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  filePath: string;
  verifyUrl?: string;
  tags: string[];
  featured?: boolean;
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  coursework: string[];
};

export type PublicationItem = {
  id: string;
  title: string;
  venue: string;
  year: string;
};
