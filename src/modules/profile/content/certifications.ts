// src/modules/profile/content/certifications.ts
import type { Certification } from '@/modules/profile/types'

import it from './certifications.it.json'
import en from './certifications.en.json'

const map: Record<string, Certification[]> = { it, en }

export function getCertifications(lang: string): Certification[] {
  const key = (lang || 'en').split('-')[0]
  return map[key] ?? map.en
}
