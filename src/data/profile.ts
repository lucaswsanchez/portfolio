// Personal data shown on the site. Edit here, not in the components.

export const profile = {
  name: "Lucas Sanchez",
  initials: "LS",
  title: "Software Developer — Python · TypeScript · React · SQL",
  location: "Corrientes, Argentina · Remote (UTC-3)",
  // Optional photo in /public (e.g. "/me.webp"). Empty = show the initials monogram.
  photo: "",
  email: "42994495lucas@gmail.com",
  github: "https://github.com/lucaswsanchez",
  linkedin: "https://www.linkedin.com/in/lucaswsanchez/",
  // TODO: add the CV PDF to /public (e.g. "/Lucas-Sanchez-CV.pdf"). Empty = the CV button is hidden.
  cv: "",
  seoDescription:
    "Lucas Sanchez — Software Developer from Corrientes, Argentina. Full-stack, data and IT support projects built with Python, TypeScript, React and SQL.",
};

export const about = [
  "I'm a Systems Analyst from Corrientes, Argentina, and I build software end to end: REST APIs, data pipelines, dashboards, and the tests and documentation that keep them maintainable.",
  "I like taking a real process, like booking an appointment, finding a junior job or fixing a locked account, and turning it into a tool that is simple to use. I'm looking for my first role in software development, QA, IT support or AI. I work in Spanish (native) and English (B2–C1).",
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "PowerShell"] },
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML & CSS"] },
  { group: "Backend", items: ["NestJS", "Node.js", "FastAPI", "Prisma", "REST & OpenAPI", "JWT auth"] },
  { group: "Data", items: ["PostgreSQL", "Supabase", "ETL pipelines", "SQLAlchemy"] },
  { group: "Testing", items: ["pytest", "Vitest", "Pester", "Playwright"] },
  { group: "DevOps & Tools", items: ["Git", "GitHub Actions", "Docker", "Vercel", "Render"] },
  { group: "IT Support", items: ["Windows", "Microsoft 365", "Active Directory", "ITIL 4", "Networking basics"] },
];

export const education = [
  {
    degree: "Licenciatura en Gestión de Tecnologías para las Organizaciones",
    school: "Universidad Nacional del Litoral (UNL)",
    period: "In progress",
  },
  {
    degree: "Associate Degree in Systems Analysis",
    school: "Analista en Sistemas", // TODO: add the institution name
    period: "Graduated 2025",
  },
];
