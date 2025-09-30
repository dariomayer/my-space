//features/i18n/messages/en.ts
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
  introduction: {
    scheduleCall: "Schedule a call",
    name: "Dario Pratola",
    role: "Engineer",
    location: "Zola Predosa (BO)",
    languages: {
      italian: "Italian",
      english: "English"
    },
    description: "Chemical and process engineer passionate about technology and innovation. I have expanded my skills in cloud computing and software development with the goal of integrating traditional engineering with intelligent and interconnected solutions. Objective: integrate building automation and IoT for smart buildings and smart cities.",
    contact: {
      email: "dario.pratola@gmail.com",
      phone: "(+39) 393 255 1353",
      linkedin: "linkedin.com/in/dariopratola",
      github: "dariomayer",
      website: "Website"
    }
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
