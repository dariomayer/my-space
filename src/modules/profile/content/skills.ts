// src/modules/profile/content/skills.ts
import type { SkillCategoryData } from '@/modules/profile/types'

// Import statici per compatibilità build Vite
import it from './skills.it.json'
import en from './skills.en.json'

const map: Record<string, SkillCategoryData[]> = { it, en }

export function getSkills(lang: string): SkillCategoryData[] {
  const key = (lang || 'en').split('-')[0]
  const data = map[key]
  return Array.isArray(data) && data.length > 0 ? data : map.en
}
