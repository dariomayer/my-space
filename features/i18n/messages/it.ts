//features/i18n/messages/it.ts
const messages = {
  common: {
    loading: "Caricamento...",
    error: "Errore"
  },
  hero: {
    headline: "Ciao, sono Dario",
    subheadline: "Frontend Engineer che crea esperienze straordinarie",
    cta: "Scopri il mio lavoro"
  },
  nav: {
    home: "Home",
    about: "Chi sono",
    contact: "Contatti"
  },
  profile: {
    title: "Il Mio Profilo",
    description: "CV minimale ed elegante ispirato al design Apple."
  },
  experience: {
    title: "Esperienza",
    current: "Attuale"
  },
  skills: {
    title: "Competenze",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Strumenti"
  },
  projects: {
    title: "Progetti",
    viewProject: "Vedi progetto"
  }
} as const;

export default messages;
