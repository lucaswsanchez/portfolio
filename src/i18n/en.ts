// ─────────────────────────────────────────────────────────────────────────────
//  ENGLISH — every visible string of the English page (/).
//  Spanish lives in es.ts with the same keys. Tech names, project names and
//  numbers must stay identical in both files.
// ─────────────────────────────────────────────────────────────────────────────

export const en = {
  meta: {
    title: "Lucas Sanchez — Systems Analyst & Full-stack Developer",
    description:
      "Lucas Sanchez — Systems Analyst & Full-stack Developer from Corrientes, Argentina. Full-stack, data, AI, QA and IT support projects built with Python, TypeScript, React and SQL.",
    ogLocale: "en_US",
    ogImage: "/og.png",
    jobTitle: "Systems Analyst & Full-stack Developer",
  },
  ui: {
    skipToContent: "Skip to content",
    mainNav: "Main",
    languageNav: "Language",
    toggleTheme: "Toggle dark mode",
    backToTop: "Back to top",
    intro: "Introduction",
    profilesAndContact: "Profiles and contact",
    photoAlt: "Portrait of Lucas Sanchez",
    openToWork: "Open to work · Dev, QA, IT support & AI",
    downloadCv: "Download CV",
    email: "Email",
    copyEmail: "Copy email",
    copied: "Copied ✓",
    copyFallback: "Press Ctrl+C",
    opensInNewTab: "opens in a new tab",
    linkFor: "for",
    stackOf: "stack",
    highlightsOf: "highlights",
    screenshot: "Screenshot",
    footer: "Built with Astro",
  },
  nav: { about: "About", projects: "Projects", contact: "Contact" },
  sections: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    howIWork: "How I work",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    title: "Systems Analyst & Full-stack Developer",
    subtitle: "Python · TypeScript · React · SQL — plus QA automation and IT support",
    location: "Corrientes, Argentina · Remote (UTC-3)",
  },
  cv: { href: "/Lucas_Sanchez_CV_EN.pdf", fileName: "Lucas_Sanchez_CV_EN.pdf" },
  about: [
    "I'm a Systems Analyst (Associate Degree, 2025) from Corrientes, Argentina, currently studying Technologies for Organizational Management at UNL. I build software end to end and ship it: REST APIs, data pipelines, dashboards and LLM features, with the tests, CI and documentation that keep them maintainable.",
    "I like taking a real process — booking an appointment, finding a junior job, fixing a locked account — and turning it into a tool that is simple to use, then proving it works: my QA suite for BookFlow found 4 real bugs, which I fixed and retested.",
    "I'm looking for my first role in software development, QA, IT support or AI, remote (UTC-3) or on-site in Corrientes. I work in Spanish (native) and English (B2–C1).",
  ],
  // Tools from the projects (checked against each repo) plus earlier work Lucas
  // can defend (Java/Spring Boot/MySQL team project, LightGBM crypto pipeline).
  skills: [
    { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "PowerShell", "Java", "HTML/CSS"] },
    {
      group: "Backend",
      items: ["NestJS", "Node.js", "FastAPI", "Spring Boot", "Pydantic", "Prisma", "SQLAlchemy", "REST & OpenAPI", "JWT auth"],
    },
    { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Zod"] },
    {
      group: "Data & AI",
      items: ["PostgreSQL", "MySQL", "Supabase", "ETL pipelines", "LLM APIs", "RAG (BM25)", "prompt engineering", "LLM evaluation", "LightGBM"],
    },
    {
      group: "Testing & DevOps",
      items: ["Git", "GitHub Actions", "pytest", "Jest", "Vitest", "Playwright", "Postman/Newman", "axe-core", "Pester", "Docker", "Vercel", "Render"],
    },
    { group: "IT Support", items: ["Windows", "Microsoft 365", "Active Directory", "ITIL 4", "Networking basics (DNS, TCP/IP)"] },
  ],
  linkLabels: { demo: "Live demo", reports: "Test reports", site: "Live site", docs: "API docs", code: "Code" },
  // Project texts, keyed by the ids in src/data/projects.ts. Metrics come from each
  // project's README or its latest green CI run.
  projects: {
    bookflow: {
      description:
        "Multi-tenant appointment booking for small businesses: public booking page, admin agenda and reports, with double bookings blocked by a PostgreSQL exclusion constraint.",
      metrics: ["104 tests in CI", "Double bookings blocked at DB level", "4 QA bugs fixed"],
      imageAlt: "BookFlow admin overview with revenue, next appointments and occupancy",
    },
    "bookflow-qa": {
      description:
        "Independent QA for BookFlow: test plan, 48 test cases, Playwright E2E with page objects and Postman/Newman API tests, with daily CI reports.",
      metrics: ["49/49 Playwright passing", "161/161 API assertions", "4 real bugs found"],
      imageAlt: "BookFlow QA live test reports page on GitHub Pages",
      badge: "Tests BookFlow",
      pairNote: "Built it, tested it independently, found 4 real bugs, then fixed and retested them.",
    },
    "triage-ai": {
      description:
        "AI help desk assistant: classifies tickets by impact × urgency, retrieves KB articles with BM25 RAG and drafts cited replies.",
      metrics: ["100% category accuracy", "78% priority", "50-ticket eval"],
      imageAlt: "TriageAI triage page with ticket classification and a cited draft reply",
    },
    "jobs-radar": {
      description:
        "Daily ETL from five public job APIs that keeps junior roles open to Argentina and LATAM, detects 108 skills and publishes a market-report dashboard.",
      metrics: ["746 → 90 junior roles (first run)", "194 tests in CI"],
      imageAlt: "Junior Tech Jobs Radar dashboard with indicators, pipeline funnel and skills ranking",
    },
    "helpdesk-kb": {
      description:
        "Service Desk knowledge base with ITIL 4 processes and 10 ticket cases, plus PowerShell support scripts tested with Pester.",
      metrics: ["21 KB articles", "7 PowerShell tools", "116 Pester tests"],
      imageAlt: "IT Service Desk overview page with a symptom-first triage grid",
    },
  } as Record<string, { description: string; metrics: string[]; imageAlt: string; badge?: string; pairNote?: string }>,
  howIWork: [
    { title: "User stories + Kanban", text: "Work starts as user stories with acceptance criteria on a GitHub Projects board." },
    { title: "One PR per feature", text: "A branch and pull request per story, with Conventional Commits." },
    { title: "CI on every PR", text: "Lint, type checks and tests run in GitHub Actions before anything merges." },
    { title: "Tested before release", text: "Features ship with tests, and releases are versioned with a changelog." },
  ],
  education: [
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
  ],
  contact: {
    text: "Open to junior roles in software development, QA, IT support and AI, remote or hybrid. The fastest way to reach me is email.",
    elsewhere: "Or find me on",
    and: "and",
  },
};

export type Dict = typeof en;
