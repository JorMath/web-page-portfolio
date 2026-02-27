export const user = {
  // --- Informacion Personal ---
  name: "Jorman Chuquer",
  title: "Ingeniero de Software",
  location: "Quito, Ecuador",
  email: "jorman240802@hotmail.com",
  phone: "+593 98 239 0699",
  avatar: "/pixel_art_avatar.jpg", // URL de tu foto (dejar vacio para placeholder)

  // --- Web3Forms ---
  web3formsKey: "826345dd-3cab-4b38-9930-904c380364aa",

  // --- Links / Redes Sociales ---
  social: {
    github: "https://github.com/JorMath",
    linkedin: "https://www.linkedin.com/in/jorman-chuquer-murillo-187096276/",
    twitter: "https://x.com/Chromebtw",
  },

  // --- Bio / Sobre Mi ---
  bio: [
    "Ingeniero de Software con experiencia desarrollando aplicaciones web escalables.",
    "Apasionado por la arquitectura limpia, el codigo de calidad y las soluciones que generan impacto real y entregan valor.",
    "Especializado en ecosistemas JavaScript/TypeScript, con experiencia en React.",
  ],

  // --- Tecnologias / Habilidades ---
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

  // --- Proyectos ---
  projects: [
    {
      title: "Salinas Yuyay SI",
      description:
        "Sistema de gestión de información para el centro cultural comunitario Salinas Yuyay",
      technologies: ["Next.js", "Pocketbase", "Cloudflare R2", "Vercel", "Railway"],
      image: "/salinas_yuyay.jpeg", // URL de imagen (dejar vacio para placeholder)
      github: "https://github.com/cristian-sangucho-a/salinas-yuyay-sistema-de-informacion",
      live: "https://salinas-yuyay-si.vercel.app/",
      featured: true,
    },
    {
      title: "Task Management API",
      description:
        "API RESTful para gestion de tareas con autenticacion JWT, roles de usuario y notificaciones en tiempo real via WebSockets.",
      technologies: ["NestJS", "TypeScript", "MongoDB", "Socket.io", "Docker"],
      image: "",
      github: "https://github.com/juanperez/task-api",
      live: "",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard interactivo de clima con datos en tiempo real, graficos historicos y alertas personalizadas para ciudades de Ecuador.",
      technologies: ["Next.js", "Tailwind CSS", "Chart.js", "OpenWeather API"],
      image: "",
      github: "https://github.com/juanperez/weather-dash",
      live: "https://weather-ec.vercel.app",
      featured: true,
    },
    {
      title: "Chat en Tiempo Real",
      description:
        "Aplicacion de chat con soporte para grupos, mensajes multimedia y cifrado de extremo a extremo.",
      technologies: ["React Native", "Firebase", "WebRTC", "TypeScript"],
      image: "",
      github: "https://github.com/juanperez/realtime-chat",
      live: "",
      featured: false,
    },
    {
      title: "Portfolio CMS",
      description:
        "Sistema de gestion de contenido headless para portafolios con editor WYSIWYG y deploy automatico.",
      technologies: ["Vue.js", "Strapi", "GraphQL", "Vercel"],
      image: "",
      github: "https://github.com/juanperez/portfolio-cms",
      live: "",
      featured: false,
    },
    {
      title: "DevOps Pipeline Tool",
      description:
        "Herramienta CLI para automatizar pipelines de CI/CD con integracion a GitHub Actions y AWS CodePipeline.",
      technologies: ["Go", "Docker", "AWS", "GitHub API"],
      image: "",
      github: "https://github.com/juanperez/pipeline-tool",
      live: "",
      featured: false,
    },
  ],

  // --- Experiencia Laboral ---
  experience: [
    {
      company: "TechCorp Ecuador",
      role: "Senior Software Engineer",
      period: "2023 - Presente",
      description:
        "Liderando el equipo de desarrollo frontend, implementando arquitectura de micro-frontends y mejorando la performance un 40%.",
      technologies: ["React", "TypeScript", "AWS", "Micro-frontends"],
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description:
        "Desarrollo de la plataforma principal de la startup desde cero, alcanzando 50K usuarios activos mensuales.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      company: "Agencia Digital Quito",
      role: "Frontend Developer",
      period: "2019 - 2021",
      description:
        "Desarrollo de sitios web y aplicaciones para clientes corporativos, con enfoque en UX/UI y rendimiento.",
      technologies: ["React", "Vue.js", "SCSS", "WordPress"],
    },
  ],

  // --- Educacion ---
  education: [
    {
      institution: "Escuela Politecnica Nacional",
      degree: "Ingenieria en Sistemas Informaticos y de Computacion",
      period: "2015 - 2019",
      location: "Quito, Ecuador",
    },
    {
      institution: "Udemy / Platzi",
      degree: "Certificaciones en Cloud Computing, DevOps y Arquitectura de Software",
      period: "2020 - Presente",
      location: "Online",
    },
  ],

  // --- Idiomas ---
  languages: [
    { name: "Espanol", level: "Nativo" },
    { name: "Ingles", level: "Conversacional (B2)" },
  ],
};

// Tipo exportado para uso en componentes
export type UserData = typeof user;
