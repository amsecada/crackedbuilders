# Adam Secada

The single-page personal website for Adam Secada, built with Astro and static CSS.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Build the production site |
| `npm test` | Run browser regression tests at mobile and desktop sizes |
| `npm run test:links` | Check production output for broken links, fragments, and CSS assets |
| `npm run verify` | Run every check required before publication |

## GitHub Pages

The Astro source entry point is `src/pages/index.astro`. `npm run build` generates the publishable site in `dist/`; generated files are intentionally ignored and should not be copied into the product-documentation directory at `docs/`.

The site is configured as the GitHub project site at `https://amsecada.github.io/crackedbuilders/`. Pushes to `master` run the complete verification suite before `.github/workflows/deploy.yml` publishes `dist/`. Pull requests run the same suite without deploying.

In the repository settings, select **GitHub Actions** as the Pages build and deployment source. Run `npx playwright install chromium` once on a new development machine before running browser tests locally.

Content placeholders are centralized in `src/data/site.ts` and intentionally remain non-clickable until real project, writing, and contact details are supplied.

> **Maintenance note:** Update `WORKLOG.md` after every feature build so it remains an accurate record of completed work. Give each new top-level entry an ISO 8601 timestamp with its UTC offset (for example, `2026-08-31T12:18:01-05:00`) so changes remain chronologically sortable and auditable.
