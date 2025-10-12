<!-- README.md -->
# my space

A modern, responsive personal portfolio website built with cutting-edge web technologies. Showcases professional experience, skills, and projects in an elegant, accessible design with internationalization support.

**Built by Dario Pratola using React & TypeScript with AI pair programming, continuously deployed to Cloudflare from GitHub.**



## Requirements
- pnpm
- Node 18+

## Start
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
pnpm preview
```

## i18n
- Configuration in `src/shared/i18n/config.ts`.
- Shared resources: `src/shared/i18n/{en,it}.json` (namespace `common`).
- Profile module UI copy: `src/modules/profile/i18n/{en,it}.json` (namespace `profile`).
- Localized content (structured data):
  - Experiences: `src/modules/profile/content/experiences.{en,it}.json`
  - Education: `src/modules/profile/content/education.{en,it}.json`
  - Certifications: `src/modules/profile/content/certifications.{en,it}.json`
  - Skills: `src/modules/profile/content/skills.{en,it}.json`
  - Language loaders with EN fallback: `src/modules/profile/content/{experiences,education,certifications,skills}.ts`


## Deployment: Cloudflare Pages
- Build command: `pnpm build`
- Build output: `dist`
- Guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

## Structure
- UI modules in `src/modules/`
- Domain logic and services in `src/shared/` separated from UI components

## License
- MIT © Dario Pratola (see `LICENSE`).
