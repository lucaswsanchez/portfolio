// Personal data shown on the site. Edit here, not in the components.

export const profile = {
  name: "Lucas Sanchez",
  initials: "LS",
  title: "Software Developer — Python · TypeScript · React · SQL",
  location: "Corrientes, Argentina · Remote (UTC-3)",
  // Optional photo in /public (e.g. "/me.webp"), shown small next to the "Open to work" pill. Empty = no photo.
  photo: "/me.webp",
  email: "sanchezwlucas@gmail.com",
  github: "https://github.com/lucaswsanchez",
  linkedin: "https://www.linkedin.com/in/lucaswsanchez/",
  // CV PDF in /public. Empty = the CV button is hidden.
  cv: "/Lucas_Sanchez_CV.pdf",
  seoDescription:
    "Lucas Sanchez — Software Developer from Corrientes, Argentina. Full-stack, data and IT support projects built with Python, TypeScript, React and SQL.",
};

export const about = [
  "I'm a Systems Analyst from Corrientes, Argentina, and I build software end to end: REST APIs, data pipelines, dashboards, and the tests and documentation that keep them maintainable.",
  "I like taking a real process, like booking an appointment, finding a junior job or fixing a locked account, and turning it into a tool that is simple to use. I'm looking for my first role in software development, QA, IT support or AI. I work in Spanish (native) and English (B2–C1).",
];

// Only tools used in the projects above (checked against each repo).
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "PowerShell"] },
  { group: "Backend", items: ["NestJS", "FastAPI", "Prisma", "SQLAlchemy", "REST & OpenAPI", "JWT auth"] },
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { group: "Data & AI", items: ["PostgreSQL", "Supabase", "ETL pipelines", "LLM APIs", "RAG (BM25)"] },
  {
    group: "Testing & DevOps",
    items: ["pytest", "Jest", "Vitest", "Playwright", "Postman/Newman", "Pester", "GitHub Actions", "Docker"],
  },
];

// How the five projects were run (same process in every repo).
export const howIWork: { title: string; text: string }[] = [
  { title: "User stories + Kanban", text: "Work starts as user stories with acceptance criteria on a GitHub Projects board." },
  { title: "One PR per feature", text: "A branch and pull request per story, with Conventional Commits." },
  { title: "CI on every PR", text: "Lint, type checks and tests run in GitHub Actions before anything merges." },
  { title: "Tested before release", text: "Features ship with tests, and releases are versioned with a changelog." },
];

export const education = [
  {
    degree: "B.A. in Technologies for Organizational Management",
    school: "Universidad Nacional del Litoral (UNL)",
    period: "In progress",
  },
  {
    degree: "Associate Degree in Systems Analysis",
    school: "Instituto de Estudios Superiores de Buenos Aires (ESBA)",
    period: "Graduated 2025",
  },
];
