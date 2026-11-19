// Personal data shown on the site. Edit here, not in the components.

export const profile = {
  name: "Lucas Sanchez",
  initials: "LS",
  title: "Systems Analyst & Full-stack Developer",
  subtitle: "Python · TypeScript · React · SQL — plus QA automation and IT support",
  location: "Corrientes, Argentina · Remote (UTC-3)",
  // Optional photo in /public (e.g. "/me.webp"), shown small next to the "Open to work" pill. Empty = no photo.
  photo: "/me.webp",
  email: "sanchezwlucas@gmail.com",
  github: "https://github.com/lucaswsanchez",
  linkedin: "https://www.linkedin.com/in/lucaswsanchez/",
  // CV PDF in /public. Empty = the CV button is hidden.
  cv: "/Lucas_Sanchez_CV.pdf",
  seoDescription:
    "Lucas Sanchez — Systems Analyst & Full-stack Developer from Corrientes, Argentina. Full-stack, data, AI, QA and IT support projects built with Python, TypeScript, React and SQL.",
};

export const about = [
  "I'm a Systems Analyst (Associate Degree, 2025) from Corrientes, Argentina, currently studying Technologies for Organizational Management at UNL. I build software end to end and ship it: REST APIs, data pipelines, dashboards and LLM features, with the tests, CI and documentation that keep them maintainable.",
  "I like taking a real process — booking an appointment, finding a junior job, fixing a locked account — and turning it into a tool that is simple to use, then proving it works: my QA suite for BookFlow found 4 real bugs, which I fixed and retested.",
  "I'm looking for my first role in software development, QA, IT support or AI, remote (UTC-3) or on-site in Corrientes. I work in Spanish (native) and English (B2–C1).",
];

// Tools from the projects above (checked against each repo) plus earlier work
// Lucas can defend (Java/Spring Boot/MySQL team project, LightGBM crypto pipeline).
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "PowerShell", "Java", "HTML/CSS"] },
  {
    group: "Backend",
    items: ["NestJS", "Node.js", "FastAPI", "Spring Boot", "Pydantic", "Prisma", "SQLAlchemy", "REST & OpenAPI", "JWT auth"],
  },
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Zod"] },
  {
    group: "Data & AI",
    items: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "ETL pipelines",
      "LLM APIs",
      "RAG (BM25)",
      "prompt engineering",
      "LLM evaluation",
      "LightGBM",
    ],
  },
  {
    group: "Testing & DevOps",
    items: [
      "Git",
      "GitHub Actions",
      "pytest",
      "Jest",
      "Vitest",
      "Playwright",
      "Postman/Newman",
      "axe-core",
      "Pester",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
  {
    group: "IT Support",
    items: ["Windows", "Microsoft 365", "Active Directory", "ITIL 4", "Networking basics (DNS, TCP/IP)"],
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
