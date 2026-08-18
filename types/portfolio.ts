export interface ExperienceItem {
  role: string
  company: string
  period: string
  isCurrent: boolean
  description: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  start: string
  end: string
  interrupted?: boolean
}

export interface SkillItem {
  label: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface TechCategory {
  title: string
  icon: string
  items: TechItem[]
}

export interface CertificateItem {
  title: string
  institution: string
  url: string
}

export interface LanguageItem {
  language: string
  level: string
  proficiency: number
}

export interface NavigationItem {
  label: string
  anchor: string
  icon?: string
  cta?: boolean
}

export interface ContactItem {
  label: string
  value: string
  href: string
  icon: string
}
