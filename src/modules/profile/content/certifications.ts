// src/modules/profile/content/certifications.ts
import type { Certification } from '@/modules/profile/types'

import it from './certifications.it.json'
import en from './certifications.en.json'
import data from './certifications-data.json'

const map: Record<string, Certification[]> = { it, en }

export function getCertifications(lang: string): Certification[] {
  const key = (lang || 'en').split('-')[0]
  let localizedCerts = map[key] ?? map.en
  
  // Fallback a 'en' se l'array è vuoto
  if (localizedCerts.length === 0) {
    localizedCerts = map.en
  }
  
  // Unisce i dati localizzati con i dati comuni (badge e URL)
  return localizedCerts.map((cert) => {
    const commonData = data.find((d) => d.title === cert.title)
    return {
      ...cert,
      badgeUrl: commonData?.badgeUrl,
      certificateUrl: commonData?.certificateUrl,
    }
  })
}
