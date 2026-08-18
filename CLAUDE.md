# kantes-io — portfolio of Salif KANTÉ

The personal site published at **https://www.kantes.me/**. Rebuilt from a Vite + Bootstrap SPA to a
statically rendered, trilingual Next.js site in August 2026.

## Positioning

The site is the public counterpart of the 2026 French CV (content brief:
`../curriculum-vitae/CLAUDE.md`). It must read as the profile of a **research/IT engineer**, credible
to an academic or institutional reader — not as a "hire me" landing page.

- **Capability-driven, not vacancy-driven.** No "Hire Me Now" phrasing. Use "Get in touch" / "Contact".
- Professional and sober register. No exaggeration, no filler superlatives, no fake metrics
  (the old 100%-everything skill bars are gone and must not come back).
- Emphasise: engineering practice, applied AI/ML, big data, web platforms, electromagnetic-
  compatibility research, international mobility, multilingualism.
- **Never fabricate.** Every date, employer, degree, publication, certification and skill must trace
  to the CV brief or to prior site content. `content/skills.ts` and `content/credentials.ts` are
  deliberately limited to what is evidenced — do not pad them. Certificate providers are not guessed:
  where the source records none, the entry sits under "Other".
- **Privacy.** This is a public site. Never publish date of birth, nationality, passport or identity
  data, home address, or marital status — those belong to the CV dossier only.

## Architecture

**Next.js 16 (App Router, Turbopack) + React 19 + TypeScript strict + Tailwind v4**, statically
rendered, deployed on Vercel. Next 16 was current at rebuild time; the plan originally said 15.

```
app/
  [locale]/
    layout.tsx            → <html lang>, fonts, theme + intl providers, metadata, JSON-LD
    [[...section]]/
      page.tsx            → one page, addressed by /[locale] and /[locale]/<section>
    not-found.tsx
    opengraph-image.tsx   → 1200×630 card, generated per locale
  globals.css             → Tailwind v4 import, design tokens, base layer, utilities
  icon.png                → 96×96 favicon, downscaled from the portrait
  apple-icon.png          → 180×180 touch icon, same source
  sitemap.ts  robots.ts
proxy.ts                  → next-intl locale routing (Next 16 renamed middleware.ts → proxy.ts)
i18n/
  routing.ts              → locales, display names, BCP-47 + OG locale tags
  request.ts  navigation.ts
components/
  layout/                 → site-header, site-footer
  sections/               → hero, about, profile, research, projects, skills, credentials, contact
  ui/                     → section, tag, theme-toggle, language-switcher, project-gallery,
                            section-link, social-icons
  page-content.tsx        → the shared document every route renders
  section-router.tsx      → scroll spy, history sync, back/forward, section links
  theme-provider.tsx
content/                  → site, sections, projects, publications, skills, credentials
                            (typed, no JSX)
messages/                 → en.json, fr.json, ru.json
public/images/            → 25 project screenshots (all 1366×768), profile portrait
public/cv/                → CV PDF
```

### Conventions

- **Content lives in `content/*.ts` and `messages/*.json`, never inline in JSX.** Structural and
  non-translatable data (image paths, URLs, technology names, certificate titles, years) goes in
  `content/`; every user-visible string goes in `messages/`, keyed by the id used in `content/`.
- Sections are server components; only `site-header`, `language-switcher`, `theme-toggle` and
  `project-gallery` are client components.
- Styling is Tailwind v4 utilities over CSS-variable tokens defined in `app/globals.css`
  (`:root` for light, `.dark` for dark, exposed through `@theme inline`). There is no
  `tailwind.config.js` — v4 is configured in CSS. Bootstrap is gone; do not reintroduce it.
- Locale routes are always prefixed (`/en`, `/fr`, `/ru`); `/` redirects. `setRequestLocale` is
  called in the layout and page so all routes stay statically rendered.
- **Sections are routes, not fragments.** `content/sections.ts` is the single source of the seven
  section ids, which serve simultaneously as DOM ids, route segments and `nav.*` message keys — keep
  those three aligned or metadata generation fails at build time. The optional catch-all
  `[[...section]]` means `/en` and `/en/research` are the same route, so moving between sections
  never remounts the tree: `section-router.tsx` scrolls the document and updates `history` directly.
  Section links carry a real `href` and only upgrade plain left-clicks, so middle-click, ⌘-click and
  crawlers still work. Section routes canonicalise to the locale root — they are the same document,
  and only the roots belong in the sitemap. The one remaining fragment is the `#main` skip link,
  which is the correct accessibility idiom and should stay.
- Every string added must land in **all three** catalogues. No English left visible in `fr` or `ru`.
- French and Russian copy uses the typographic apostrophe `’`, not `'` — a bare apostrophe is an
  escape character in ICU message syntax.
- Scientific paper titles are translated per locale; the Russian-language paper additionally shows
  its original title (`items.shieldingRu.original`, present only in `en`/`fr`).

## Content sources

Authoritative brief: `../curriculum-vitae/CLAUDE.md`. Currently reflected on the site:

- **Position** — Engineer, Department of Television and Control, TUSUR University; research
  laboratory *Fundamental Research on Electromagnetic Compatibility*; doctoral work in AI/ML.
- **Publications** — 4 papers (ITMO Congress of Young Scientists, Apr 2025 & Apr 2026; TUSUR
  Scientific Session, May 2025 & May 2026) plus the co-authored preprint arXiv:2506.02443 (9th author).
- **Communities** — Doniyaso (since 2023), IA Mali (since 2025).
- **Certifications** — 6 CDOSS + 4 Coursera.
- **Languages** — Bambara (native), French (working), English IELTS 6.0 / B2, Russian B1+ (TUSUR).
- **CV** — `public/cv/CV_Salif_KANTE_2026_FR.pdf`, copied from `../curriculum-vitae/` on 2026-08-18.

⚠️ **The published CV carries data the site itself withholds**: date of birth, nationality and two
personal phone numbers. That is appropriate for the institutional dossier it was written for, but it
means anyone can download those details from a public URL. If that is not intended, produce a web
variant of the PDF with the header trimmed and point `site.cv` at it — do not simply unlink the
button, since the file stays fetchable at its path.

The 2026 CV also documents material the site does not yet show: seven professional roles
(2019–2024, Mali and Tunisia), dated degrees from FSEG Sfax, and a far broader technology list
(R, C#, Keras, scikit-learn, NLTK, spaCy, Vue.js, Angular, Spring Boot, PostgreSQL/MySQL/Oracle/
SQL Server/MongoDB/Cassandra/Redis, Power BI, Tableau, Weka, RapidMiner, BeautifulSoup, Scrapy).
Adding an experience section and widening `content/skills.ts` is the obvious next content step.

## Working rules

- Keep `www.kantes.me` and the existing Vercel project. No custom server.
- Verify with `npm run build && npm run lint && npm run typecheck`, then `npx next start` and check
  all three locales, before declaring work finished. Report failures rather than hiding them.
- Do not commit build output (`.next/`, `out/`, `dist/`).
- Keep the site deployable at every commit.

## State of the rebuild

Done:

- [x] `npm i` clean — no `--legacy-peer-deps`, 0 vulnerabilities (was 20)
- [x] `dist/` untracked (184 files) and ignored, alongside `.next/` and `out/`
- [x] Bootstrap, jQuery-era CSS and the duplicate Tailwind install replaced by Tailwind v4 alone
- [x] Five copy-paste `Portfolio*` components collapsed into one data-driven `ProjectGallery`
- [x] `/en`, `/fr`, `/ru` statically prerendered, correct `<html lang>`, hreflang + x-default alternates
- [x] Metadata, per-locale OG image (1200×630), Twitter card, sitemap, robots, JSON-LD `Person`
- [x] Dark/light theme via `next-themes`, no flash, no mounted-guard
- [x] Gallery thumbnails are real buttons (keyboard reachable); `prefers-reduced-motion` honoured
- [x] 2025–2026 research, certifications and communities present in all three locales
- [x] Images through `next/image` — the 1.4 MB `countdown.png` is served as a 9.7 KB AVIF
- [x] Favicon and Apple touch icon generated from the portrait; the old site pointed at a 225 KB
      `github.jpg` with an invalid `type="image"`. Regenerate with `sharp` if the portrait changes.
- [x] The 4.1 MB stock-photo hero deleted outright, replaced by a token-based accent wash

- [x] Sections addressed by real routes (`/fr/research`) instead of `#` fragments, with a scroll spy
      that keeps the address bar in step and back/forward wired to scroll
- [x] 2026 CV published; LinkedIn, Bambara and the Coursera provider recovered from it

Remaining:

- [ ] **Vercel framework preset** — the project was created as a Vite build (`dist` output). A
      `vercel.json` pins `"framework": "nextjs"`, but check the dashboard setting on first deploy.
      The CV redirects live in the same file and only take effect once deployed.
- [ ] **Verify the LinkedIn URL resolves.** It was derived mechanically from the vanity slug printed
      in the CV (`salif-kanté-66720118b` → percent-encoded), not from a working link.
- [ ] Decide whether the published CV should keep date of birth and phone numbers (see above).
- [ ] Lighthouse has not been measured on the deployed URL (target ≥ 95 in all four categories).
- [ ] No test suite yet — Vitest + Testing Library for components, a Playwright smoke test per locale.
- [ ] `next-intl` message-key type augmentation (`global.d.ts` with `IntlMessages`) is intentionally
      absent: it conflicts with the dynamic `t(\`items.${id}\`)` lookups the data-driven sections use.
      Revisit if the ids become literal unions.
- [ ] LinkedIn is not linked — no URL was available. Add to `content/site.ts` when known.
- [ ] Source PNGs on disk are still unoptimised (up to 1.4 MB). `next/image` handles delivery, but
      the lightbox fetches originals; consider re-encoding the archive.
- [ ] The rebuild was verified by build, lint, typecheck and HTML inspection — not yet by a human
      looking at it in a browser, and contrast has not been formally measured. The scroll spy,
      smooth scrolling and back/forward behaviour in particular are client-side and unverified.
