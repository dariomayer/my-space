// /Users/dario/Documents/Progetti/next-core/i18n-config.ts
export const locales = ["it", "en"] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = "it";
