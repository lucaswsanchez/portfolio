// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS — the only file to edit when a project changes.
//  Cards render in this order: the first one marked `featured` is shown large,
//  the rest as compact cards (2 columns on desktop). A card without links is hidden.
//  Metrics must come from the project's README or its latest green CI run.
// ─────────────────────────────────────────────────────────────────────────────

import type { ImageMetadata } from "astro";
import bookflowShot from "../assets/projects/bookflow.jpg";
import jobsRadarShot from "../assets/projects/jobs-radar.png";
import helpdeskShot from "../assets/projects/helpdesk-kb.png";
import triageShot from "../assets/projects/triage-ai.png";
import qaShot from "../assets/projects/bookflow-qa.png";

export type ProjectLink = { label: string; href: string; kind: "demo" | "docs" | "code" };

export type Project = {
  name: string;
  description: string; // one line
  /** Highlighted line of real, verifiable numbers. */
  metrics: string[];
  stack: string[];
  // Optional screenshot in src/assets/projects (real captures from each README).
  image?: { src: ImageMetadata; alt: string };
  links: ProjectLink[];
  featured?: boolean;
  /** Short note linking this card to the featured one (shown as a badge + caption). */
  pairedWith?: { name: string; note: string };
};

export const projects: Project[] = [
  {
    name: "BookFlow",
    featured: true,
    description:
      "Multi-tenant appointment booking for small businesses: public booking page, admin agenda and reports, with double bookings blocked by a PostgreSQL exclusion constraint.",
    // CI on main (Nov 19, 2026): 37 + 40 Jest/Supertest + 27 Vitest. QA bugs: bookflow-qa README.
    metrics: ["104 tests in CI", "Double bookings blocked at DB level", "4 QA bugs fixed"],
    stack: ["NestJS", "Prisma", "PostgreSQL", "React", "TypeScript"],
    image: { src: bookflowShot, alt: "BookFlow admin overview with revenue, next appointments and occupancy" },
    links: [
      { label: "Live demo", href: "https://bookflow-phi-ivory.vercel.app", kind: "demo" },
      { label: "API docs", href: "https://bookflow-api-f8qe.onrender.com/docs", kind: "docs" },
      { label: "Code", href: "https://github.com/lucaswsanchez/bookflow", kind: "code" },
    ],
  },
  {
    name: "BookFlow QA",
    description:
      "Independent QA for BookFlow: test plan, 48 test cases, Playwright E2E with page objects and Postman/Newman API tests, with daily CI reports.",
    // bookflow-qa docs/test-summary-report.md (reference run) and README.
    metrics: ["49/49 Playwright passing", "161/161 API assertions", "4 real bugs found"],
    stack: ["Playwright", "TypeScript", "Postman", "Newman", "GitHub Actions"],
    image: { src: qaShot, alt: "BookFlow QA live test reports page on GitHub Pages" },
    pairedWith: {
      name: "BookFlow",
      note: "Built it, tested it independently, found 4 real bugs, then fixed and retested them.",
    },
    links: [
      { label: "Test reports", href: "https://lucaswsanchez.github.io/bookflow-qa/", kind: "demo" },
      { label: "Code", href: "https://github.com/lucaswsanchez/bookflow-qa", kind: "code" },
    ],
  },
  {
    name: "TriageAI",
    description:
      "AI help desk assistant: classifies tickets by impact × urgency, retrieves KB articles with BM25 RAG and drafts cited replies.",
    // triage-ai README evaluation table.
    metrics: ["100% category accuracy", "78% priority", "50-ticket eval"],
    stack: ["Python", "FastAPI", "Pydantic", "React", "TypeScript"],
    image: { src: triageShot, alt: "TriageAI triage page with ticket classification and a cited draft reply" },
    links: [
      { label: "Live demo", href: "https://triage-ai-roan.vercel.app", kind: "demo" },
      { label: "API docs", href: "https://triage-ai-api-j687.onrender.com/docs", kind: "docs" },
      { label: "Code", href: "https://github.com/lucaswsanchez/triage-ai", kind: "code" },
    ],
  },
  {
    name: "Junior Tech Jobs Radar",
    description:
      "Daily ETL from five public job APIs that keeps junior roles open to Argentina and LATAM, detects 108 skills and publishes a market-report dashboard.",
    // README (first production run) and CI on main (Nov 19, 2026): 173 pytest + 21 Vitest.
    metrics: ["746 → 90 junior roles (first run)", "194 tests in CI"],
    stack: ["Python", "PostgreSQL", "GitHub Actions", "React", "TypeScript"],
    image: { src: jobsRadarShot, alt: "Junior Tech Jobs Radar dashboard with indicators, pipeline funnel and skills ranking" },
    links: [
      { label: "Live demo", href: "https://junior-tech-jobs-radar.vercel.app", kind: "demo" },
      { label: "Code", href: "https://github.com/lucaswsanchez/junior-tech-jobs-radar", kind: "code" },
    ],
  },
  {
    name: "IT Help Desk KB & Toolkit",
    description:
      "Service Desk knowledge base with ITIL 4 processes and 10 ticket cases, plus PowerShell support scripts tested with Pester.",
    // README and CI on main: Pester "Tests Passed: 116".
    metrics: ["21 KB articles", "7 PowerShell tools", "116 Pester tests"],
    stack: ["MkDocs", "PowerShell", "Pester", "GitHub Actions"],
    image: { src: helpdeskShot, alt: "IT Service Desk overview page with a symptom-first triage grid" },
    links: [
      { label: "Live site", href: "https://lucaswsanchez.github.io/helpdesk-kb/", kind: "demo" },
      { label: "Code", href: "https://github.com/lucaswsanchez/helpdesk-kb", kind: "code" },
    ],
  },
];

export const visibleProjects = projects.filter((p) => p.links.length > 0);
