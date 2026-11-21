// ─────────────────────────────────────────────────────────────────────────────
//  ESPAÑOL — todos los textos visibles de la página en español (/es/).
//  Mismas claves que en.ts. Los nombres de tecnologías, de proyectos y los
//  números tienen que quedar idénticos en los dos idiomas.
// ─────────────────────────────────────────────────────────────────────────────

import type { Dict } from "./en";

export const es: Dict = {
  meta: {
    title: "Lucas Sanchez — Analista de Sistemas y Desarrollador Full Stack",
    description:
      "Lucas Sanchez, Analista de Sistemas y desarrollador full stack de Corrientes, Argentina. Proyectos full stack, de datos, IA, QA y soporte IT con Python, TypeScript, React y SQL.",
    ogLocale: "es_AR",
    ogImage: "/og-es.png",
    jobTitle: "Analista de Sistemas y Desarrollador Full Stack",
  },
  ui: {
    skipToContent: "Ir al contenido",
    mainNav: "Principal",
    languageNav: "Idioma",
    toggleTheme: "Cambiar modo oscuro",
    backToTop: "Volver arriba",
    intro: "Presentación",
    profilesAndContact: "Perfiles y contacto",
    photoAlt: "Foto de Lucas Sanchez",
    openToWork: "Disponible · Dev, QA, soporte IT e IA",
    downloadCv: "Descargar CV",
    email: "Email",
    copyEmail: "Copiar email",
    copied: "Copiado ✓",
    copyFallback: "Usá Ctrl+C",
    opensInNewTab: "se abre en una pestaña nueva",
    linkFor: "de",
    stackOf: "stack",
    highlightsOf: "métricas",
    screenshot: "Captura",
    footer: "Hecho con Astro",
  },
  nav: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
  sections: {
    about: "Sobre mí",
    skills: "Conocimientos",
    projects: "Proyectos",
    howIWork: "Cómo trabajo",
    education: "Formación",
    contact: "Contacto",
  },
  hero: {
    title: "Analista de Sistemas y Desarrollador Full Stack",
    subtitle: "Python · TypeScript · React · SQL — además, automatización de QA y soporte IT",
    location: "Corrientes, Argentina (UTC-3)",
  },
  cv: { href: "/Lucas_Sanchez_CV_ES.pdf", fileName: "Lucas_Sanchez_CV_ES.pdf" },
  about: [
    "Soy Analista de Sistemas (técnico superior, egresado en 2025) de Corrientes, Argentina, y curso la Licenciatura en Tecnologías para la Gestión de las Organizaciones en la UNL. Desarrollo software de punta a punta y lo llevo a producción: APIs REST, pipelines de datos, dashboards y funcionalidades con LLMs, con los tests, el CI y la documentación que los mantienen sostenibles.",
    "Me gusta tomar un proceso real —reservar un turno, encontrar un primer trabajo, desbloquear una cuenta— y convertirlo en una herramienta simple de usar, y después demostrar que funciona: mi suite de QA para BookFlow encontró 4 bugs reales, que corregí y volví a verificar.",
    "Busco mi primer puesto en desarrollo de software, QA, soporte IT o IA: remoto, híbrido o presencial en Corrientes; abierto a reubicación. Trabajo en español (nativo) e inglés (B2).",
  ],
  skills: [
    { group: "Lenguajes", items: ["Python", "TypeScript", "JavaScript", "SQL", "PowerShell", "Java", "HTML/CSS"] },
    {
      group: "Backend",
      items: ["NestJS", "Node.js", "FastAPI", "Spring Boot", "Pydantic", "Prisma", "SQLAlchemy", "REST y OpenAPI", "Autenticación JWT"],
    },
    { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Zod"] },
    {
      group: "Datos e IA",
      items: ["PostgreSQL", "MySQL", "Supabase", "Pipelines ETL", "APIs de LLM", "RAG (BM25)", "Prompt engineering", "Evaluación de LLMs", "LightGBM"],
    },
    {
      group: "Testing y DevOps",
      items: ["Git", "GitHub Actions", "pytest", "Jest", "Vitest", "Playwright", "Postman/Newman", "axe-core", "Pester", "Docker", "Vercel", "Render"],
    },
    { group: "Soporte IT", items: ["Windows", "Microsoft 365", "Active Directory", "ITIL 4", "Redes básicas (DNS, TCP/IP)"] },
  ],
  linkLabels: { demo: "Demo en vivo", reports: "Reportes de tests", site: "Sitio", docs: "Docs de la API", code: "Código" },
  projects: {
    bookflow: {
      description:
        "Sistema de turnos multi-negocio para pequeños comercios: página pública de reservas, agenda de administración y reportes, con los turnos superpuestos bloqueados por una restricción de exclusión en PostgreSQL.",
      metrics: ["104 tests en CI", "Turnos superpuestos bloqueados en la base", "4 bugs de QA corregidos"],
      imageAlt: "Panel de administración de BookFlow con facturación, próximos turnos y ocupación",
    },
    "bookflow-qa": {
      description:
        "QA independiente de BookFlow: plan de pruebas, 48 casos de prueba, E2E con Playwright y Page Objects, y tests de API con Postman/Newman, con reportes diarios en CI.",
      metrics: ["49/49 en Playwright", "161/161 aserciones de API", "4 bugs reales encontrados"],
      imageAlt: "Página de reportes de tests de BookFlow QA en GitHub Pages",
      badge: "Testea BookFlow",
      pairNote: "Lo desarrollé, lo testeé de forma independiente, encontré 4 bugs reales, los corregí y verifiqué las correcciones.",
    },
    "triage-ai": {
      description:
        "Asistente de IA para mesa de ayuda: clasifica tickets por impacto × urgencia, busca artículos de la base de conocimiento con RAG (BM25) y redacta respuestas con citas.",
      metrics: ["100% de precisión en categoría", "78% en prioridad", "evaluado con 50 tickets"],
      imageAlt: "Pantalla de triage de TriageAI con la clasificación del ticket y un borrador de respuesta con citas",
    },
    "jobs-radar": {
      description:
        "ETL diario sobre cinco APIs públicas de empleo que filtra puestos junior abiertos a Argentina y LATAM, detecta 108 skills y publica un dashboard con el panorama del mercado.",
      metrics: ["746 → 90 puestos junior (primera corrida)", "194 tests en CI"],
      imageAlt: "Dashboard de Junior Tech Jobs Radar con indicadores, embudo del pipeline y ranking de skills",
    },
    "helpdesk-kb": {
      description:
        "Base de conocimiento de mesa de ayuda con procesos ITIL 4 y 10 casos de tickets, más scripts de soporte en PowerShell testeados con Pester.",
      metrics: ["21 artículos", "7 herramientas en PowerShell", "116 tests de Pester"],
      imageAlt: "Página principal del Service Desk con una grilla de triage por síntoma",
    },
  },
  howIWork: [
    {
      title: "Historias de usuario + Kanban",
      text: "El trabajo arranca como historias de usuario con criterios de aceptación en un tablero de GitHub Projects.",
    },
    { title: "Un PR por funcionalidad", text: "Una rama y un pull request por historia, con Conventional Commits." },
    { title: "CI en cada PR", text: "Lint, chequeo de tipos y tests corren en GitHub Actions antes de mergear cualquier cambio." },
    { title: "Testeado antes de publicar", text: "Cada funcionalidad sale con tests, y las versiones se publican numeradas y con changelog." },
  ],
  education: [
    {
      degree: "Licenciatura en Tecnologías para la Gestión de las Organizaciones",
      school: "Universidad Nacional del Litoral",
      period: "En curso",
    },
    {
      degree: "Técnico Superior en Análisis de Sistemas",
      school: "Instituto de Estudios Superiores de Buenos Aires",
      period: "Egresado 2025",
    },
  ],
  contact: {
    text: "Busco puestos junior en desarrollo de software, QA, soporte IT e IA: remoto, híbrido o presencial en Corrientes; abierto a reubicación. La forma más rápida de contactarme es por email.",
    elsewhere: "También estoy en",
    and: "y",
  },
};
