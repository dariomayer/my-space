<!-- my-space/PROJECT_INFO.md -->
# PROJECT_INFO

Questo file è la fonte di verità per tutte le operazioni future. Consultarlo sempre prima di apportare modifiche.

## Metadati
- Project name: `my space`
- Package name: `my-space`
- Stack: React + Vite + TypeScript + Tailwind v4 + (Shadcn UI: integrazione successiva)
- Package manager: pnpm
- i18n: it/en con i18next
- Deployment: Cloudflare Pages (build command: `pnpm build`, output: `dist`)
- File naming: kebab-case
- Regola: ogni file dovrebbe riportare in testa il percorso relativo (dove il formato del file lo consente senza rompere la sintassi)

## Struttura directory
- `src/main.tsx`
- `src/modules/app/app.tsx`
- `src/shared/i18n/config.ts`
- `src/shared/i18n/locales/{en,it}/common.json`
- `src/styles/index.css`

## Best practices
- Componenti piccoli e riutilizzabili
- Tipi espliciti in TypeScript
- Separazione della business logic dai componenti UI (`src/shared/` per servizi, store, util)
- Aggiornare `CHANGELOG.md` ad ogni release

## Tailwind v4 + Shadcn UI
- Tailwind v4 già importato in `src/styles/index.css` con `@import "tailwindcss";`
- Shadcn UI: seguire https://ui.shadcn.com/docs/installation/vite
  - Generare i componenti in `src/shared/ui/` (kebab-case) e ri-esportarli da `src/shared/ui/index.ts`
  - Verificare compatibilità preset con Tailwind v4; in caso di necessità aggiungere configurazione PostCSS nel `package.json`

## Cloudflare Pages
- Guida: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/
- Impostazioni:
  - Build command: `pnpm build`
  - Build output: `dist`

## TODO futuri (testing)
- Aggiungere `vitest`, `@testing-library/react` e setup file in `src/setup-tests.ts`
