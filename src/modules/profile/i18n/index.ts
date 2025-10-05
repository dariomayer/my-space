// my-space/src/modules/profile/i18n/index.ts
import { createModuleI18nLoader } from '@/shared/i18n/module-loader'

// Import statici per compatibilità con Vite build
import en from './en.json'
import it from './it.json'

const translations: Record<string, unknown> = { en, it }

export const ensureProfileI18n = createModuleI18nLoader(
  'profile',
  (lang: string) => Promise.resolve({ default: translations[lang] || translations.en }),
  () => Promise.resolve({ default: en }),
)
