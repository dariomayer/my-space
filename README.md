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
