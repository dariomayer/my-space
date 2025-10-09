// src/modules/profile/types.ts
export interface Experience {
  company: string
  role: string
  period: string
  achievements: string[]
}

export interface Certification {
  title: string
  institution: string
  date: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
}

export interface SkillCategoryData {
  title: string
  skills: string[]
}
