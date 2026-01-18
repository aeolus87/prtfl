export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  portfolio: string
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
  link?: string
}

export interface Education {
  degree: string
  institution: string
  graduationDate: string
}

export interface ResumeData {
  personal: PersonalInfo
  summary: string
  techStack: TechCategory[]
  experience: Experience[]
  projects: Project[]
  education: Education
}
