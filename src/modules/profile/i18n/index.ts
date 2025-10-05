// my-space/src/modules/profile/i18n/index.ts
import { createModuleI18nLoader } from '@/shared/i18n/module-loader'

export const ensureProfileI18n = createModuleI18nLoader(
  'profile',
  (lang: string) => import(`./${lang}.json`),
  () => import('./en.json'),
)
