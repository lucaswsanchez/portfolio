# Lucas Sanchez — Portfolio

Personal portfolio: a single, fast static page with my projects, skills, education and contact.

**Live:** https://lucaswsanchez.vercel.app

## Stack

- [Astro](https://astro.build) (static output, no client framework)
- Tailwind CSS v4
- Self-hosted Inter and Geist Mono variable fonts
- Images optimized to WebP at build time with `astro:assets`

## Features

- Light and dark mode (system preference, with a toggle that is remembered)
- Responsive layout, accessible markup (skip link, landmarks, visible focus, reduced-motion support)
- SEO: canonical URL, Open Graph and Twitter cards, JSON-LD `Person`, sitemap
- Subtle CSS-only motion; a tiny script adds the cursor light, the active nav link and "Copy email"

## Languages

The site is bilingual with Astro's i18n routing: English at `/` (default) and Spanish at `/es/`.
Each page has its own `<html lang>`, title, description, Open Graph image and `hreflang` alternates.
The `EN | ES` switch remembers the visitor's choice; on a first visit with no saved choice, a
Spanish-language browser is sent to `/es/`. The CV buttons download the CV in the page's language.

## Editing content

| File | What it holds |
| --- | --- |
| [`src/i18n/en.ts`](src/i18n/en.ts) / [`src/i18n/es.ts`](src/i18n/es.ts) | Every visible text, per language: title, about, skills, project descriptions and metrics, How I work, education, contact, CV file |
| [`src/data/profile.ts`](src/data/profile.ts) | Name, photo, email, GitHub and LinkedIn (same in both languages) |
| [`src/data/projects.ts`](src/data/projects.ts) | Project order, names, stack, screenshots and links. A card without links is hidden. |

Project screenshots go in `src/assets/projects/`. The CVs (`Lucas_Sanchez_CV_EN.pdf`, `Lucas_Sanchez_CV_ES.pdf`)
and the photo go in `public/`.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site in dist/
pnpm og       # regenerate public/og.png and og-es.png (link preview images)
```

## License

[MIT](LICENSE)
