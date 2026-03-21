export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  whatsapp: string
  medium: string
}

export interface TechCategory {
  name: string
  skills: string[]
}

export interface Experience {
  company: string
  location: string
  role: string
  period: string
  current?: boolean
  achievements: string[]
}

export interface Project {
  name: string
  subtitle: string
  techStack: string
  description: string[]
  /** Primary repo or product link */
  link?: string
  /** Demo, deployed app, or docs */
  liveUrl?: string
  pinned?: boolean
  /** One-line “what it is / why it exists” */
  purpose?: string
}

export interface Education {
  degree: string
  institution: string
  graduationDate: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  description?: string
}

export interface Blog {
  title: string
  subtitle: string
  description: string[]
  link: string
}

export interface ResumeData {
  personal: PersonalInfo
  summary: string
  socSummary: string
  techStack: TechCategory[]
  socSkills: TechCategory[]
  experience: Experience[]
  projects: Project[]
  blogs: Blog[]
  certifications: Certification[]
  education: Education
}
