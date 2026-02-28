import type { Locale } from "../i18n/translations";

// --- Bilingual helpers ---
export interface Bilingual<T = string> {
  es: T;
  en: T;
}

/** Extract the correct locale value from a bilingual field */
export function localize<T>(field: Bilingual<T>, locale: Locale): T {
  return field[locale];
}

export const user = {
  // --- Personal Info ---
  name: "Jorman Chuquer",
  title: {
    es: "Ingeniero de Software",
    en: "Software Engineer",
  } as Bilingual,
  location: "Quito, Ecuador",
  email: "jorman240802@hotmail.com",
  phone: "+593 98 239 0699",
  avatar: "/pixel_art_avatar.jpg",

  // --- Web3Forms ---
  web3formsKey: "826345dd-3cab-4b38-9930-904c380364aa",

  // --- Social Links ---
  social: {
    github: "https://github.com/JorMath",
    linkedin: "https://www.linkedin.com/in/jorman-chuquer-murillo-187096276/",
    twitter: "https://x.com/Chromebtw",
  },

  // --- Bio ---
  bio: {
    es: [
      "Ingeniero de Software con experiencia desarrollando aplicaciones web escalables.",
      "Apasionado por la arquitectura limpia, el codigo de calidad y las soluciones que generan impacto real y entregan valor.",
      "Especializado en ecosistemas JavaScript/TypeScript, con experiencia en React.",
    ],
    en: [
      "Software Engineer with experience building scalable web applications.",
      "Passionate about clean architecture, quality code, and solutions that generate real impact and deliver value.",
      "Specialized in JavaScript/TypeScript ecosystems, with experience in React.",
    ],
  } as Bilingual<string[]>,

  // --- Skills ---
  skills: {
    languages: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
    ],
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "Django", level: 75 },
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 85 },
    ],
    databases: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Claude Code", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 85 },
    ],
  },

  // --- Projects ---
  projects: [
    {
      title: "Salinas Yuyay SI",
      description: {
        es: "Sistema de gestión de información para el centro cultural comunitario Salinas Yuyay",
        en: "Information management system for the Salinas Yuyay community cultural center",
      } as Bilingual,
      technologies: ["Next.js", "Pocketbase", "Cloudflare R2", "Vercel", "Railway"],
      image: "/salinas_yuyay.jpeg",
      github: "https://github.com/cristian-sangucho-a/salinas-yuyay-sistema-de-informacion",
      live: "https://salinas-yuyay-si.vercel.app/",
      featured: true,
    },
    
  ],

  // --- Work Experience ---
  experience: [
    {
      company: "SLB",
      role: {
        es: "Student Intern",
        en: "Student Intern",
      } as Bilingual,
      period: {
        es: "Junio 2025 - Diciembre 2025",
        en: "June 2025 - December 2025",
      } as Bilingual,
      description: {
        es: "Mantenimiento y creación de nuevas recipes del proyecto 'Weekly Forecast.'",
        en: "Maintenance and creation of new recipes for the 'Weekly Forecast' project.",
      } as Bilingual,
      technologies: ["Dataiku", "Python", "PowerBI", "Spotfire"],
    },
    {
      company: "BIESS",
      role: {
        es: "Practicante",
        en: "Intern",
      } as Bilingual,
      period: {
        es: "Abril 2025 - Mayo 2025",
        en: "April 2025 - May 2025",
      } as Bilingual,
      description: {
        es: "Soporte de TI y mantenimiento de sistemas en el Banco del Instituto Ecuatoriano de Seguridad Social.",
        en: "IT Support and systems maintenance at the Banco del Instituto Ecuatoriano de Seguridad Social.",
      } as Bilingual,
      technologies: ["IT Support", "Systems Maintenance"],
    },
  ],

  // --- Education ---
  education: [
    {
      institution: "Escuela Politécnica Nacional",
      degree: {
        es: "Ingeniero de Software",
        en: "Software Engineer",
      } as Bilingual,
      period: "2020-2026",
      location: "Quito, Ecuador",
    },
    {
      institution: "Raiola Networks",
      degree: {
        es: "Curso de automatizaciones con N8N e Inteligencia Artificial",
        en: "Course on automation with N8N and Artificial Intelligence",
      } as Bilingual,
      period: {
        es: "2026 - Presente",
        en: "2026 - Present",
      } as Bilingual,
      location: "Online",
    },
    {
      institution: "Udemy / Platzi",
      degree: {
        es: "React: De cero a experto",
        en: "React: From Zero to Expert",
      } as Bilingual,
      period: {
        es: "2025 - Presente",
        en: "2025 - Present",
      } as Bilingual,
      location: "Online",
    },
  ],

  // --- Languages ---
  languages: [
    {
      name: {
        es: "Espanol",
        en: "Spanish",
      } as Bilingual,
      level: {
        es: "Nativo",
        en: "Native",
      } as Bilingual,
    },
    {
      name: {
        es: "Ingles",
        en: "English",
      } as Bilingual,
      level: {
        es: "Conversacional (B2)",
        en: "Conversational (B2)",
      } as Bilingual,
    },
  ],

  // --- Interests ---
  interests: {
    games: [
      {
        title: "Zenless Zone Zero",
        genre: "Action RPG",
        image: "/zzz.webp",
      },
      {
        title: "Minecraft",
        genre: "Sandbox",
        image: "/minecraft.webp",
      },
      {
        title: "Left 4 Dead 2",
        genre: "Co-op Shooter",
        image: "/l4d2.webp",
      },
    ],
    music: [
      {
        name: "A Day to Remember",
        genre: "Post-Hardcore",
        image: "/adtr.webp",
      },
      {
        name: "Ado",
        genre: "J-Pop / Rock",
        image: "/ado.webp",
      },
      {
        name: "Justin Timberlake",
        genre: "Pop / R&B",
        image: "/j_timberlake.webp",
      },
    ],
  },
};

// Exported type for use in components
export type UserData = typeof user;
