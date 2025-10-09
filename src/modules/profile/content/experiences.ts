// src/modules/profile/content/experiences.ts
import type { Experience } from '@/modules/profile/types'

// Import statici per compatibilità con Vite build
import it from './experiences.it.json'
import en from './experiences.en.json'

const map: Record<string, Experience[]> = { it, en }

export function getExperiences(lang: string): Experience[] {
  const key = (lang || 'en').split('-')[0]
  return map[key] ?? map.en
}
