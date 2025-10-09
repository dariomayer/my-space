<!-- README.md -->
# my space

Starter frontend basato su React + Vite + TypeScript con Tailwind v4 e i18n (it/en). Integrazione Shadcn UI prevista come step successivo (vedi note sotto).

## Requisiti
- pnpm
- Node 18+

## Avvio
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
pnpm preview
```

## Tailwind v4
- Config minimal: non è richiesto `tailwind.config.js`. Import in `src/styles/index.css`:
  ```css
  @import "tailwindcss";
  ```
- Riferimenti: https://tailwindcss.com/docs/installation

## Shadcn UI (placeholder)
- Guida Vite: https://ui.shadcn.com/docs/installation/vite
- Con Tailwind v4 consultare la documentazione ufficiale per la CLI aggiornata e i preset. Dopo l'installazione, generare i componenti in `src/shared/ui/` seguendo le convenzioni del progetto.

## i18n
- Inizializzazione in `src/shared/i18n/config.ts`.
- Risorse condivise: `src/shared/i18n/{en,it}.json` (namespace `common`).
- Copy UI del modulo profilo: `src/modules/profile/i18n/{en,it}.json` (namespace `profile`).
- Contenuti localizzati (dati strutturati):
  - Esperienze: `src/modules/profile/content/experiences.{en,it}.json`
  - Studi: `src/modules/profile/content/education.{en,it}.json`
  - Certificazioni: `src/modules/profile/content/certifications.{en,it}.json`
  - Competenze: `src/modules/profile/content/skills.{en,it}.json`
  - Loader lingua con fallback EN: `src/modules/profile/content/{experiences,education,certifications,skills}.ts`

Linee guida:
- i18n per micro-copy/etichette; content per dataset ricchi (liste/descrizioni). Evitare di inserire contenuti corposi in i18n.

## Deployment: Cloudflare Pages
- Build command: `pnpm build`
- Build output: `dist`
- Guida: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

## Struttura
- Moduli UI in `src/modules/`
- Logica di dominio e servizi in `src/shared/` separati dai componenti UI

## Testing
- Non configurato ora. Tenere spazio per `vitest`/`testing-library` in futuro.

## Licenza
- MIT © Dario Pratola (vedi `LICENSE`).
