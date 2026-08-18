# kantes.me

Personal portfolio of Salif Kanté — engineer at TUSUR University, Tomsk.
Live at **https://www.kantes.me/**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · next-intl · deployed on Vercel.
Statically rendered in three languages: English, French and Russian.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3001
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server on port 3001 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

Run `build`, `lint` and `typecheck` before pushing.

## Editing content

No copy lives in components.

- **`messages/{en,fr,ru}.json`** — every user-visible string. A key added to one file must be added
  to all three.
- **`content/*.ts`** — structural data: project screenshots, publications, skills, certifications,
  communities, contact details.

Adding a project means dropping a 1366×768 screenshot into `public/images/<group>/`, adding an entry
to `content/projects.ts`, and adding its title to the three message catalogues.

## Notes

- Locale routes are always prefixed (`/en`, `/fr`, `/ru`); `/` redirects to the detected locale.
- The site is one document addressed by routes: `/fr/research` scrolls to the research section
  rather than loading a separate page, and the address bar follows as you scroll. Section ids live
  in `content/sections.ts` and must match the `nav.*` message keys.
- Theming uses CSS variables defined in `app/globals.css`. Tailwind v4 is configured in CSS —
  there is no `tailwind.config.js`.
- See `CLAUDE.md` for the positioning rules, content sources and outstanding work.
