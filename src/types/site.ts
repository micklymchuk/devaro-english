export type Locale = 'uk' | 'en'

export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ProgramItem {
  title: string
  text: string
}

export interface TeacherProfile {
  name: string
  role: string
  text: string
  image: string
}

export interface PricingPackage {
  name: string
  count: string
  text: string
  price: string
}

export interface SiteCopy {
  nav: NavItem[]
  hero: {
    eyebrow: string
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
    trustItems: string[]
    imageAlt: string
    lessonLabel: string
    lessonValue: string
    lessonNote: string
    videoTitle: string
    videoDuration: string
    proofText: string
    proofEmphasis: string
    scheduleBadge: string
    greetingBadge: string
    testTitle: string
    testCta: string
  }
  stats: StatItem[]
  programs: {
    eyebrow: string
    title: string
    items: ProgramItem[]
  }
  lessonFlow: {
    eyebrow: string
    title: string
    steps: string[]
  }
  teachers: {
    eyebrow: string
    title: string
    items: TeacherProfile[]
  }
  pricing: {
    eyebrow: string
    title: string
    items: PricingPackage[]
  }
  social: {
    eyebrow: string
    title: string
    text: string
    testimonial: string
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    fields: string[]
    submitLabel: string
    channels: string[]
  }
}
