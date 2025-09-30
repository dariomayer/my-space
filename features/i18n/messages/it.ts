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
  introduction: {
    scheduleCall: "Prenota una chiamata",
    name: "Dario Pratola",
    role: "Ingegnere",
    location: "Zola Predosa (BO)",
    languages: {
      italian: "Italiano",
      english: "Inglese"
    },
    description: "Ingegnere chimico e di processo appassionato di tecnologia e innovazione. Ho ampliato le mie competenze in ambito cloud computing e sviluppo software con l'obiettivo di integrare l'ingegneria tradizionale con soluzioni intelligenti e interconnesse. Obiettivo: integrare building automation e IoT per smart building e smart cities.",
    contact: {
      email: "dario.pratola@gmail.com",
      phone: "(+39) 393 255 1353",
      linkedin: "linkedin.com/in/dariopratola",
      github: "dariomayer",
      website: "Sito Web"
    }
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
