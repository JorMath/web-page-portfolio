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
  skills: [
    { name: "TypeScript", type: { es: "Lenguaje", en: "Language" } as Bilingual, desc: { es: "Tipado estático sobre JavaScript para código más robusto y mantenible.", en: "Static typing over JavaScript for more robust and maintainable code." } as Bilingual },
    { name: "JavaScript", type: { es: "Lenguaje", en: "Language" } as Bilingual, desc: { es: "Lenguaje principal para desarrollo web, tanto en frontend como backend.", en: "Core language for web development, both frontend and backend." } as Bilingual },
    { name: "Python", type: { es: "Lenguaje", en: "Language" } as Bilingual, desc: { es: "Automatización, scripting y desarrollo de APIs con sintaxis clara.", en: "Automation, scripting, and API development with clean syntax." } as Bilingual },
    { name: "SQL", type: { es: "Consultas", en: "Queries" } as Bilingual, desc: { es: "Consultas y manipulación de datos en bases de datos relacionales.", en: "Querying and manipulating data in relational databases." } as Bilingual },
    { name: "Java", type: { es: "Lenguaje", en: "Language" } as Bilingual, desc: { es: "Desarrollo de aplicaciones empresariales y sistemas robustos.", en: "Enterprise application development and robust systems." } as Bilingual },
    { name: "React", type: { es: "Librería UI", en: "UI Library" } as Bilingual, desc: { es: "Construcción de interfaces de usuario con componentes reutilizables.", en: "Building user interfaces with reusable components." } as Bilingual },
    { name: "Next.js", type: { es: "Framework", en: "Framework" } as Bilingual, desc: { es: "Framework fullstack con SSR, SSG y API routes sobre React.", en: "Fullstack framework with SSR, SSG, and API routes on top of React." } as Bilingual },
    { name: "Tailwind CSS", type: { es: "Estilos", en: "Styling" } as Bilingual, desc: { es: "Framework de utilidades CSS para diseño rápido y consistente.", en: "Utility-first CSS framework for fast and consistent design." } as Bilingual },
    { name: "Node.js", type: { es: "Runtime", en: "Runtime" } as Bilingual, desc: { es: "Entorno de ejecución de JavaScript del lado del servidor.", en: "Server-side JavaScript runtime environment." } as Bilingual },
    { name: "Express", type: { es: "Framework", en: "Framework" } as Bilingual, desc: { es: "Framework minimalista para construir APIs y servidores web.", en: "Minimal framework for building APIs and web servers." } as Bilingual },
    { name: "Django", type: { es: "Framework", en: "Framework" } as Bilingual, desc: { es: "Framework web de Python con ORM, admin y seguridad incluidos.", en: "Python web framework with built-in ORM, admin, and security." } as Bilingual },
    { name: "Docker", type: { es: "Contenedores", en: "Containers" } as Bilingual, desc: { es: "Contenedorización de aplicaciones para despliegues reproducibles.", en: "Application containerization for reproducible deployments." } as Bilingual },
    { name: "CI/CD", type: { es: "Automatización", en: "Automation" } as Bilingual, desc: { es: "Pipelines de integración y despliegue continuo con GitHub Actions.", en: "Continuous integration and deployment pipelines with GitHub Actions." } as Bilingual },
    { name: "PostgreSQL", type: { es: "Base de datos", en: "Database" } as Bilingual, desc: { es: "Base de datos relacional avanzada con soporte ACID completo.", en: "Advanced relational database with full ACID compliance." } as Bilingual },
    { name: "MongoDB", type: { es: "Base de datos", en: "Database" } as Bilingual, desc: { es: "Base de datos NoSQL orientada a documentos para datos flexibles.", en: "Document-oriented NoSQL database for flexible data." } as Bilingual },
    { name: "Git", type: { es: "Control de versiones", en: "Version Control" } as Bilingual, desc: { es: "Gestión de código fuente con branching, merging y colaboración.", en: "Source code management with branching, merging, and collaboration." } as Bilingual },
    { name: "VS Code", type: { es: "Editor", en: "Editor" } as Bilingual, desc: { es: "Editor de código principal con extensiones y personalización avanzada.", en: "Primary code editor with extensions and advanced customization." } as Bilingual },
    { name: "Claude Code", type: { es: "Asistente IA", en: "AI Assistant" } as Bilingual, desc: { es: "Asistente de programación con IA para desarrollo acelerado.", en: "AI-powered programming assistant for accelerated development." } as Bilingual },
    { name: "Figma", type: { es: "Diseño", en: "Design" } as Bilingual, desc: { es: "Diseño de interfaces y prototipos colaborativos en la nube.", en: "Cloud-based collaborative interface design and prototyping." } as Bilingual },
    { name: "Linux", type: { es: "Sistema operativo", en: "OS" } as Bilingual, desc: { es: "Administración de servidores, scripting en bash y entornos de desarrollo.", en: "Server administration, bash scripting, and dev environments." } as Bilingual },
  ],

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
