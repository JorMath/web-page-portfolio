export type Locale = "es" | "en";

export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      about: "Sobre Mi",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      interests: "Intereses",
      contact: "Contacto",
      lightMode: "Modo Claro",
      darkMode: "Modo Oscuro",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },

    // Hero
    hero: {
      available: "Disponible para proyectos",
      cta: "Conoce mas",
      rotatingTexts: ["MERN Stack Developer", "DJango Developer"],
    },

    // About
    about: {
      title: "Sobre Mi",
      location: "Ubicacion",
      email: "Email",
      languages: "Idiomas",
      education: "Educacion",
    },

    // Skills
    skills: {
      title: "Habilidades",
      speed: "VELOCIDAD",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        databases: "Bases de Datos",
        tools: "Herramientas",
      } as Record<string, string>,
    },

    // Projects
    projects: {
      title: "Proyectos",
      code: "Codigo",
      demo: "Demo",
      showAll: "Ver todos",
      showLess: "Ver menos",
    },

    // Experience
    experience: {
      title: "Experiencia",
    },

    // Interests
    interests: {
      title: "OFF_DUTY",
      subtitle: "// MÁS ALLÁ DEL CODIGO",
      games: "GAMES",
      music: "MUSIC",
    },

    // Contact
    contact: {
      title: "Contacto",
      talkTitle: "Hablemos",
      talkText: "Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. No dudes en contactarme.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuentame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado con exito. Te respondere pronto!",
      errorDefault: "Hubo un error al enviar el mensaje.",
      errorConnection: "Error de conexion. Intenta de nuevo mas tarde.",
      emailSubject: "Contacto desde Portafolio",
      formSender: "Portafolio Web",
      formSubject: "Nuevo mensaje de",
    },

    // Footer
    footer: {
      madeWith: "Disenado y desarrollado con dedicacion en",
    },

    // Language toggle
    lang: {
      label: "ES",
      switchTo: "Cambiar idioma",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      interests: "Interests",
      contact: "Contact",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },

    hero: {
      available: "Available for projects",
      cta: "Learn more",
      rotatingTexts: ["MERN Stack Developer", "DJango Developer"],
    },

    about: {
      title: "About Me",
      location: "Location",
      email: "Email",
      languages: "Languages",
      education: "Education",
    },

    skills: {
      title: "Skills",
      speed: "SPEED",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps",
        databases: "Databases",
        tools: "Tools",
      } as Record<string, string>,
    },

    projects: {
      title: "Projects",
      code: "Code",
      demo: "Demo",
      showAll: "Show all",
      showLess: "Show less",
    },

    experience: {
      title: "Experience",
    },

    interests: {
      title: "OFF_DUTY",
      subtitle: "// BEYOND THE CODE",
      games: "GAMES",
      music: "MUSIC",
    },

    contact: {
      title: "Contact",
      talkTitle: "Let's Talk",
      talkText: "I'm available for freelance projects, collaborations, or full-time positions. Don't hesitate to reach out.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully. I'll get back to you soon!",
      errorDefault: "There was an error sending the message.",
      errorConnection: "Connection error. Please try again later.",
      emailSubject: "Contact from Portfolio",
      formSender: "Web Portfolio",
      formSubject: "New message from",
    },

    footer: {
      madeWith: "Designed and developed with care in",
    },

    lang: {
      label: "EN",
      switchTo: "Switch language",
    },
  },
} as const;

// Use a structural type so both locales are assignable
export type Translations = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    interests: string;
    contact: string;
    lightMode: string;
    darkMode: string;
    switchToLight: string;
    switchToDark: string;
  };
  hero: {
    available: string;
    cta: string;
    rotatingTexts: readonly string[];
  };
  about: {
    title: string;
    location: string;
    email: string;
    languages: string;
    education: string;
  };
  skills: {
    title: string;
    speed: string;
    categories: Record<string, string>;
  };
  projects: {
    title: string;
    code: string;
    demo: string;
    showAll: string;
    showLess: string;
  };
  experience: {
    title: string;
  };
  interests: {
    title: string;
    subtitle: string;
    games: string;
    music: string;
  };
  contact: {
    title: string;
    talkTitle: string;
    talkText: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    errorDefault: string;
    errorConnection: string;
    emailSubject: string;
    formSender: string;
    formSubject: string;
  };
  footer: {
    madeWith: string;
  };
  lang: {
    label: string;
    switchTo: string;
  };
};
