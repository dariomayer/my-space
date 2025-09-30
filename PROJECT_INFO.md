PROJECT_INFO.md

# My Profile – Project Info

- **[tipo]** Frontend only (Next.js)
- **[hosting]** Cloudflare Pages
- **[package manager]** pnpm
- **[inizializzazione]** `pnpm dlx shadcn@latest init`

## Stack tecnico
- **[framework]** `next@15.5.4`
- **[ui]** shadcn/ui, `lucide-react@0.544.0`
- **[styling]** Tailwind CSS `^4` + `tailwind-merge@^3.3.1`
- **[utils]** `clsx@^2.1.1`, `class-variance-authority@^0.7.1`
- **[lint]** `eslint@^9`, `eslint-config-next@15.5.4`
- **[ts]** `typescript@^5`, `@types/*` per React/Node
## Script (`package.json`)
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}

## Tailwind CSS v4
- Configurato con `@tailwindcss/postcss` e `tailwindcss@^4`.
- Verificare PostCSS pipeline in caso di aggiunta plugin futuri.

## shadcn/ui
- Inizializzato via `shadcn init`.
- Componenti generati vengono salvati in `components/` (o percorso scelto durante init). Mantenere consistenza di stile e varianti con `class-variance-authority`.

## Deploy: Cloudflare Pages
- Target: Cloudflare Pages (repo collegato).
- Build command: preferibilmente `pnpm build` (coerente con `package.json`).
## Convenzioni
- **[naming]** creare nuovi file in kebab-case.
- **[architettura]** seguire feature-based: ogni feature in `features/` con componenti, hooks, types.
- **[import]** usare alias `@/` per percorsi assoluti.
- **[styling]** prediligere utility-first con Tailwind, consolidando classi con `tailwind-merge`/`clsx`.
- **[icone]** `lucide-react` per consistenza.
- **[accessibilità]** mantenere semantica HTML e aria-attributes.
- **[i18n]** messaggi organizzati per namespace in `features/i18n/messages/`, Server Components di default.
- **[lint]** eseguire `pnpm lint` prima di aprire PR.
- [ ] Definire struttura cartelle (`app/`, `components/`, `lib/`, `styles/`).
- [ ] Setup regole ESLint/Prettier condivise (se necessario Prettier con Tailwind plugin).
- [ ] Configurare CI (lint, build) e integrazione con Cloudflare Pages.
- [ ] Valutare `@cloudflare/next-on-pages` per edge runtime se richiesto.

## Architettura Feature-Based
- **[organizzazione]** Il progetto segue un'architettura feature-based dove ogni feature contiene tutto il necessario (componenti, hooks, types, messaggi i18n).
- **[routing]** La struttura `app/` riflette le route URL, mentre `features/` contiene la logica riutilizzabile.

### Struttura cartelle
```
app/
  [locale]/          # Routing localizzato
    layout.tsx       # Layout con provider i18n
    page.tsx         # Homepage (profile)
    
features/
  i18n/              # Feature internazionalizzazione
    messages/
      en.ts          # Messaggi inglesi (organizzati per namespace)
      it.ts          # Messaggi italiani
    config.ts        # Config locales e defaultLocale
    
  profile/           # Feature profilo/CV
    components/
      hero-section.tsx
      language-switcher.tsx
    hooks/           # (future)
    types/           # (future)
```
## Localizzazione (i18n)
- **[package]** `next-intl@^3`
- **[locales]** `it`, `en`
- **[defaultLocale]** `it`
- **[file principali]**
  - `i18n-config.ts`: definizione `locales` e `defaultLocale`.
  - `middleware.ts`: middleware `next-intl` per rilevare/forzare la lingua.
  - `i18n/request.ts`: config `next-intl` che carica messaggi da `features/i18n/messages/`.
  - `next.config.ts`: plugin `next-intl/plugin` puntato a `./i18n/request.ts`.
  - `app/page.tsx`: redirect alla lingua di default `/${defaultLocale}`.
  - `app/[locale]/layout.tsx`: provider `NextIntlClientProvider` con `getMessages()` server-side.
  - `features/i18n/messages/{locale}.ts`: cataloghi messaggi organizzati per namespace.

### Messaggi organizzati per namespace
- `common`: messaggi condivisi (loading, error)
- `hero`: sezione hero homepage
- `nav`: navigazione
- `profile`: profilo/CV
- `experience`, `skills`, `projects`: sezioni CV

### Note
- I messaggi sono Server Components per default: usare `getTranslations()` da `next-intl/server`.
- Per Client Components: usare `'use client'` + `useTranslations()` da `next-intl`.
- Aggiungere nuovi namespace in `features/i18n/messages/{locale}.ts` e usarli con `getTranslations('namespace')`.
## Riferimento file chiave
- `package.json`: nome progetto, script, dipendenze.
- `tsconfig.json`: alias e opzioni TS.
- `PROJECT_INFO.md`: questo documento, mantenuto aggiornato.
- Aggiornare questa pagina quando:
  - aggiungi/aggiorni dipendenze chiave;
  - cambi script o pipeline di build;
  - modifichi strategia di deploy su Cloudflare Pages;
  - introduci nuove convenzioni di codice o struttura.
