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
    {
      title: "Task Management API",
      description: {
        es: "API RESTful para gestion de tareas con autenticacion JWT, roles de usuario y notificaciones en tiempo real via WebSockets.",
        en: "RESTful API for task management with JWT authentication, user roles, and real-time notifications via WebSockets.",
      } as Bilingual,
      technologies: ["NestJS", "TypeScript", "MongoDB", "Socket.io", "Docker"],
      image: "",
      github: "https://github.com/juanperez/task-api",
      live: "",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: {
        es: "Dashboard interactivo de clima con datos en tiempo real, graficos historicos y alertas personalizadas para ciudades de Ecuador.",
        en: "Interactive weather dashboard with real-time data, historical charts, and custom alerts for cities in Ecuador.",
      } as Bilingual,
      technologies: ["Next.js", "Tailwind CSS", "Chart.js", "OpenWeather API"],
      image: "",
      github: "https://github.com/juanperez/weather-dash",
      live: "https://weather-ec.vercel.app",
      featured: true,
    },
    {
      title: "Chat en Tiempo Real",
      description: {
        es: "Aplicacion de chat con soporte para grupos, mensajes multimedia y cifrado de extremo a extremo.",
        en: "Chat application with group support, multimedia messages, and end-to-end encryption.",
      } as Bilingual,
      technologies: ["React Native", "Firebase", "WebRTC", "TypeScript"],
      image: "",
      github: "https://github.com/juanperez/realtime-chat",
      live: "",
      featured: false,
    },
    {
      title: "Portfolio CMS",
      description: {
        es: "Sistema de gestion de contenido headless para portafolios con editor WYSIWYG y deploy automatico.",
        en: "Headless content management system for portfolios with WYSIWYG editor and automatic deployment.",
      } as Bilingual,
      technologies: ["Vue.js", "Strapi", "GraphQL", "Vercel"],
      image: "",
      github: "https://github.com/juanperez/portfolio-cms",
      live: "",
      featured: false,
    },
    {
      title: "DevOps Pipeline Tool",
      description: {
        es: "Herramienta CLI para automatizar pipelines de CI/CD con integracion a GitHub Actions y AWS CodePipeline.",
        en: "CLI tool for automating CI/CD pipelines with GitHub Actions and AWS CodePipeline integration.",
      } as Bilingual,
      technologies: ["Go", "Docker", "AWS", "GitHub API"],
      image: "",
      github: "https://github.com/juanperez/pipeline-tool",
      live: "",
      featured: false,
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
      company: "StartupXYZ",
      role: {
        es: "Full Stack Developer",
        en: "Full Stack Developer",
      } as Bilingual,
      period: {
        es: "2021 - 2023",
        en: "2021 - 2023",
      } as Bilingual,
      description: {
        es: "Desarrollo de la plataforma principal de la startup desde cero, alcanzando 50K usuarios activos mensuales.",
        en: "Built the startup's main platform from scratch, reaching 50K monthly active users.",
      } as Bilingual,
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      company: "Agencia Digital Quito",
      role: {
        es: "Frontend Developer",
        en: "Frontend Developer",
      } as Bilingual,
      period: {
        es: "2019 - 2021",
        en: "2019 - 2021",
      } as Bilingual,
      description: {
        es: "Desarrollo de sitios web y aplicaciones para clientes corporativos, con enfoque en UX/UI y rendimiento.",
        en: "Developed websites and applications for corporate clients, focusing on UX/UI and performance.",
      } as Bilingual,
      technologies: ["React", "Vue.js", "SCSS", "WordPress"],
    },
  ],

  // --- Education ---
  education: [
    {
      institution: "Escuela Politecnica Nacional",
      degree: {
        es: "Ingenieria en Sistemas Informaticos y de Computacion",
        en: "Computer and Information Systems Engineering",
      } as Bilingual,
      period: "2015 - 2019",
      location: "Quito, Ecuador",
    },
    {
      institution: "Udemy / Platzi",
      degree: {
        es: "Certificaciones en Cloud Computing, DevOps y Arquitectura de Software",
        en: "Certifications in Cloud Computing, DevOps, and Software Architecture",
      } as Bilingual,
      period: {
        es: "2020 - Presente",
        en: "2020 - Present",
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
