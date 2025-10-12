<!-- README.md -->
# My space

A modern, responsive personal portfolio website built with cutting-edge web technologies. Showcases professional experience, skills, and projects in an elegant, accessible design with internationalization support.

**Built by Dario Pratola using React & TypeScript with AI pair programming, continuously deployed to Cloudflare from GitHub.**



## Technologies

This project leverages modern web technologies to create a fast, accessible, and maintainable portfolio website:

### Core Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript** - Static type checking for enhanced development experience
- **Vite** - Fast build tool and development server with ESM support

### Styling & UI
- **Tailwind CSS 4.0** - Utility-first CSS framework for rapid styling
- **PostCSS** - CSS post-processing for optimized builds
- **Shadcn UI** - Accessible primitive components
- **Lucide React** - Beautiful icon library

### Internationalization
- **i18next** - Powerful internationalization framework
- **react-i18next** - React integration for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### Development Tools
- **pnpm** - Fast, disk-efficient package manager
- **ESLint** - Code linting and formatting
- **TypeScript** - Advanced type checking with strict configuration

### Deployment
- **Cloudflare Pages** - Global content delivery network for fast, secure deployment

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
