// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS — language-independent data: order, names, stack, screenshots, links.
//  Descriptions, metrics and link labels are in src/i18n/en.ts and es.ts,
//  under `projects[id]` and `linkLabels`.
//  The first `featured` project is shown large; the rest as compact cards
//  (2 columns on desktop). A card without links is hidden.
// ─────────────────────────────────────────────────────────────────────────────

import type { ImageMetadata } from "astro";
import bookflowShot from "../assets/projects/bookflow.jpg";
import jobsRadarShot from "../assets/projects/jobs-radar.png";
import helpdeskShot from "../assets/projects/helpdesk-kb.png";
import triageShot from "../assets/projects/triage-ai.png";
import qaShot from "../assets/projects/bookflow-qa.png";

export type LinkLabel = "demo" | "reports" | "site" | "docs" | "code";

export type ProjectLink = { label: LinkLabel; href: string };

export type Project = {
  id: string;
  name: string;
  stack: string[];
  image?: ImageMetadata;
  links: ProjectLink[];
  featured?: boolean;
  /** id of the featured project this one is paired with (BookFlow QA → BookFlow). */
  pairedWith?: string;
};

export const projects: Project[] = [
  {
    id: "bookflow",
    name: "BookFlow",
    featured: true,
    stack: ["NestJS", "Prisma", "PostgreSQL", "React", "TypeScript"],
    image: bookflowShot,
    links: [
      { label: "demo", href: "https://bookflow-phi-ivory.vercel.app" },
      { label: "docs", href: "https://bookflow-api-f8qe.onrender.com/docs" },
      { label: "code", href: "https://github.com/lucaswsanchez/bookflow" },
    ],
  },
  {
    id: "bookflow-qa",
    name: "BookFlow QA",
    pairedWith: "bookflow",
    stack: ["Playwright", "TypeScript", "Postman", "Newman", "GitHub Actions"],
    image: qaShot,
    links: [
      { label: "reports", href: "https://lucaswsanchez.github.io/bookflow-qa/" },
      { label: "code", href: "https://github.com/lucaswsanchez/bookflow-qa" },
    ],
  },
  {
    id: "triage-ai",
    name: "TriageAI",
    stack: ["Python", "FastAPI", "Pydantic", "React", "TypeScript"],
    image: triageShot,
    links: [
      { label: "demo", href: "https://triage-ai-roan.vercel.app" },
      { label: "docs", href: "https://triage-ai-api-j687.onrender.com/docs" },
      { label: "code", href: "https://github.com/lucaswsanchez/triage-ai" },
    ],
  },
  {
    id: "jobs-radar",
    name: "Junior Tech Jobs Radar",
    stack: ["Python", "PostgreSQL", "GitHub Actions", "React", "TypeScript"],
    image: jobsRadarShot,
    links: [
      { label: "demo", href: "https://junior-tech-jobs-radar.vercel.app" },
      { label: "code", href: "https://github.com/lucaswsanchez/junior-tech-jobs-radar" },
    ],
  },
  {
    id: "helpdesk-kb",
    name: "IT Help Desk KB & Toolkit",
    stack: ["MkDocs", "PowerShell", "Pester", "GitHub Actions"],
    image: helpdeskShot,
    links: [
      { label: "site", href: "https://lucaswsanchez.github.io/helpdesk-kb/" },
      { label: "code", href: "https://github.com/lucaswsanchez/helpdesk-kb" },
    ],
  },
];

export const visibleProjects = projects.filter((p) => p.links.length > 0);
