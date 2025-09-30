// /Users/dario/Documents/Progetti/next-core/features/i18n/messages/en.ts
const messages = {
  common: {
    loading: "Loading...",
    error: "Error"
  },
  hero: {
    headline: "Hi, I'm Dario",
    subheadline: "Frontend Engineer crafting delightful experiences",
    cta: "View my work"
  },
  nav: {
    home: "Home",
    about: "About",
    contact: "Contact"
  },
  profile: {
    title: "My Profile",
    description: "Minimal, elegant CV inspired by Apple design."
  },
  experience: {
    title: "Experience",
    current: "Current"
  },
  skills: {
    title: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools"
  },
  projects: {
    title: "Projects",
    viewProject: "View project"
  }
} as const;

export default messages;
