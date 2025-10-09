// src/modules/profile/content/education.ts
import type { Education } from '@/modules/profile/types'

import it from './education.it.json'
import en from './education.en.json'

const map: Record<string, Education[]> = { it, en }

export function getEducation(lang: string): Education[] {
  const key = (lang || 'en').split('-')[0]
  const data = map[key]
  return Array.isArray(data) && data.length > 0 ? data : map.en
}
