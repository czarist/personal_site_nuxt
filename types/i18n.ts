import type { EducationItem, ExperienceItem, LanguageItem, NavigationItem } from './portfolio'

export type Locale = 'pt' | 'en'

export interface SiteContent {
  navigation: NavigationItem[]
  hero: {
    badge: string
    title: string
    about: string
    photoAlt: string
  }
  heroStatsLabels: {
    years: string
    companies: string
    technologies: string
  }
  contactLabels: {
    location: string
    linkedin: string
    github: string
    website: string
  }
  locationValue: string
  experienceSection: {
    eyebrow: string
    heading: string
    subtitle: string
  }
  currentPositionLabel: string
  experiences: ExperienceItem[]
  educationSection: {
    eyebrow: string
    heading: string
  }
  interruptedLabel: string
  education: EducationItem[]
  languagesHeading: string
  languages: LanguageItem[]
  techSection: {
    eyebrow: string
    heading: string
    subtitle: string
  }
  techCategoryTitles: string[]
  certificatesSection: {
    eyebrow: string
    heading: string
    linkLabel: string
  }
  footerTagline: string
}
