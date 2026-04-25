# АОК — Асоціація Охоронних Компаній

Static landing site for the Security Companies Association of Ukraine.

**Stack:** Astro 5 · Tailwind CSS 4 · zero JS frameworks · GitHub Pages.

## Local development

```bash
npm install
npm run dev    # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy

Pushed to `main` → GitHub Actions builds and deploys to GitHub Pages.

The workflow auto-derives:
- `SITE_URL` → `https://<owner>.github.io`
- `BASE_PATH` → `/<repo-name>`

To deploy under a custom domain (e.g. `nsau.org.ua`):
1. Set repo variables `SITE_URL=https://nsau.org.ua` and `BASE_PATH=/`
2. Add a `public/CNAME` file with `nsau.org.ua`
3. Configure DNS A/CNAME records per GitHub Pages docs.

## Structure

```
src/
  components/   Astro components (one per section)
  i18n/ui.ts    UA + EN content + translation helpers
  layouts/      BaseLayout with SEO + i18n hreflang
  pages/        index.astro (UA), en/index.astro (EN)
  styles/       global.css with Tailwind theme tokens
public/         favicon.svg, static assets
```

## Languages

- `/` → Ukrainian (default)
- `/en/` → English

Edit copy in `src/i18n/ui.ts` — both languages live in one typed dict.
