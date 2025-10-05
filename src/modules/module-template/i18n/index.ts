// my-space/src/modules/module-template/i18n/index.ts
import { createModuleI18nLoader } from '@/shared/i18n/module-loader'

// Sostituisci 'module-template' con il namespace del tuo modulo
export const ensureModuleTemplateI18n = createModuleI18nLoader(
  'module-template',
  (lang: string) => import(`./${lang}.json`),
  () => import('./en.json'),
)
