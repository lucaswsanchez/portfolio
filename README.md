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

## Editing content

All content lives in two files:

| File | What it holds |
| --- | --- |
| [`src/data/profile.ts`](src/data/profile.ts) | Name, title, links, CV, photo, about, skills, education |
| [`src/data/projects.ts`](src/data/projects.ts) | Project cards (order, description, stack, screenshot, links). A card without links is hidden. |

Project screenshots go in `src/assets/projects/`. The CV and an optional photo go in `public/`.

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site in dist/
pnpm og       # regenerate public/og.png (link preview image)
```

## License

[MIT](LICENSE)
