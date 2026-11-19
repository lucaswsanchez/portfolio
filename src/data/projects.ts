// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS — the only file to edit when a project changes.
//  Cards render in this order. A card is HIDDEN while it has no links at all,
//  so to publish TriageAI or BookFlow QA just fill in their `links` below.
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
  stack: string[];
  // Optional screenshot in src/assets/projects (real captures from each README).
  image?: { src: ImageMetadata; alt: string };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "BookFlow",
    description:
      "Multi-tenant appointment booking for small businesses: public booking page, admin agenda and reports, with double bookings blocked by a PostgreSQL exclusion constraint.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "React", "TypeScript"],
    image: { src: bookflowShot, alt: "BookFlow admin overview with revenue, next appointments and occupancy" },
    links: [
      { label: "Live demo", href: "https://bookflow-phi-ivory.vercel.app", kind: "demo" },
      { label: "API docs", href: "https://bookflow-api-f8qe.onrender.com/docs", kind: "docs" },
      { label: "Code", href: "https://github.com/lucaswsanchez/bookflow", kind: "code" },
    ],
  },
  {
    name: "Junior Tech Jobs Radar",
    description:
      "Daily ETL from five public job APIs that keeps junior roles open to Argentina and LATAM, detects 108 skills and publishes a market-report dashboard.",
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
      "Service Desk knowledge base with 21 articles, ITIL 4 processes and 10 ticket cases, plus 7 PowerShell support scripts tested with Pester.",
    stack: ["MkDocs", "PowerShell", "Pester", "GitHub Actions"],
    image: { src: helpdeskShot, alt: "IT Service Desk overview page with a symptom-first triage grid" },
    links: [
      { label: "Live site", href: "https://lucaswsanchez.github.io/helpdesk-kb/", kind: "demo" },
      { label: "Code", href: "https://github.com/lucaswsanchez/helpdesk-kb", kind: "code" },
    ],
  },
  {
    name: "TriageAI",
    description:
      "AI assistant for IT help desks: classifies tickets by impact × urgency, retrieves KB articles with BM25 RAG and drafts cited replies, with a public evaluation page.",
    stack: ["Python", "FastAPI", "Pydantic", "React", "TypeScript"],
    image: { src: triageShot, alt: "TriageAI triage page with ticket classification and a cited draft reply" },
    links: [
      { label: "Live demo", href: "https://triage-ai-roan.vercel.app", kind: "demo" },
      { label: "API docs", href: "https://triage-ai-api-j687.onrender.com/docs", kind: "docs" },
      { label: "Code", href: "https://github.com/lucaswsanchez/triage-ai", kind: "code" },
    ],
  },
  {
    name: "BookFlow QA",
    description:
      "End-to-end QA for BookFlow: test plan, 48 test cases, 28 Playwright E2E tests with page objects, Postman/Newman API tests and daily CI reports.",
    stack: ["Playwright", "TypeScript", "Postman", "Newman", "GitHub Actions"],
    image: { src: qaShot, alt: "BookFlow QA live test reports page on GitHub Pages" },
    links: [
      { label: "Test reports", href: "https://lucaswsanchez.github.io/bookflow-qa/", kind: "demo" },
      { label: "Code", href: "https://github.com/lucaswsanchez/bookflow-qa", kind: "code" },
    ],
  },
];

export const visibleProjects = projects.filter((p) => p.links.length > 0);
