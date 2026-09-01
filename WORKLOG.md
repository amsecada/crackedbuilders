# Work Log

> **Maintenance note:** Update this file after every feature build so it remains an accurate record of completed work. Give each new top-level entry an ISO 8601 timestamp with its UTC offset so entries remain chronologically sortable and auditable.

## Initial Website Layout

### Project foundation

- Scaffolded a static Astro website with strict TypeScript configuration.
- Added development, type-checking, production build, and preview commands.
- Kept the implementation framework-free and free of client-side JavaScript.
- Added repository ignore rules for dependencies, generated output, Astro cache files, and operating-system artifacts.
- Documented local development commands and content-placeholder behavior in the README.

### Page structure

- Built the complete single-page layout with semantic navigation, hero, about, work, writing, contact, and footer sections.
- Added stable anchor targets for the top of the page and each primary navigation destination.
- Split the page into focused Astro components while preserving one rendered public page.
- Added a shared base layout with page metadata, theme color, generator metadata, and canonical-link support when a site URL is configured.

### Visual system

- Created a mobile-first design system based on the project documentation and poster reference.
- Added a near-black, off-white, muted-gray, and restrained-purple color system.
- Implemented fluid typography, responsive gutters, generous section spacing, thin rules, outlined geometry, and sharp corners.
- Designed a viewport-scale typographic hero with separate `ADAM` and `SECADA` lines and a CSS-rendered diagonal slash.
- Gave the about, work, writing, and contact sections distinct editorial compositions rather than repeating a card layout.
- Added responsive layouts for narrow phones, tablets, desktop screens, and short desktop viewports.

### Typography and assets

- Added locally bundled Space Grotesk and IBM Plex Mono fonts.
- Limited the production font payload to one Latin WOFF2 file per typeface.
- Preloaded the critical display font.
- Added third-party font attribution and license information.

### Content architecture

- Added typed source collections for featured projects, smaller experiments, writing entries, and contact links.
- Defined project-status values matching the approved content language.
- Added explicit placeholder variants that cannot provide URLs, preventing incomplete content from rendering as dummy links.
- Centralized all incomplete work, writing, and contact content in `src/data/site.ts` with source comments identifying what must be replaced before publishing.
- Used only documented biographical themes and honest placeholder language; no projects, accomplishments, articles, contact details, or social profiles were fabricated.

### Accessibility and interaction

- Added semantic page landmarks and a single accessible `h1` while keeping the graphic hero treatment hidden from assistive technology.
- Added a keyboard-accessible skip link and visible focus indicators.
- Added descriptive navigation labels and hid decorative geometry from assistive technology.
- Implemented CSS anchor scrolling and matching scroll offsets for the sticky header.
- Added a reduced-motion mode that disables smooth scrolling and nonessential motion.
- Prevented decorative elements and fluid typography from introducing horizontal overflow at supported viewport sizes.

### Verification and maintenance

- Upgraded the scaffold to the patched Astro 7 release after dependency auditing identified advisories in the initially pinned Astro 5 line.
- Confirmed the final production dependency tree reports zero known vulnerabilities.
- Ran Astro and TypeScript checks with zero errors, warnings, or hints.
- Produced a successful static production build.
- Verified generated anchor links and target IDs, the final font payload, and clean patch whitespace.

## GitHub Pages Publication and Regression Suite — 2026-08-31T12:18:01-05:00

### Publication configuration

- Configured Astro for the `https://amsecada.github.io/crackedbuilders/` GitHub project-site URL, including the repository base path required for generated assets.
- Added a GitHub Actions workflow that validates pull requests and pushes targeting `master`.
- Gated the Pages artifact upload and deployment on the complete verification suite, so failed checks cannot publish the site.
- Kept generated files in the ignored `dist/` directory and documented why the product-documentation directory at `docs/` is not a Pages publishing source.

### Automated regression coverage

- Added Playwright browser testing with mobile and desktop viewport projects against the production Astro preview.
- Added a data-driven primary-navigation test that discovers every menu item and verifies its fragment, unique target inside `main`, URL behavior, visibility, and sticky-header clearance.
- Added Linkinator checks for internal resources, CSS assets, links, and fragment targets across the generated site.
- Added a single `npm run verify` command that runs Astro and TypeScript analysis, produces a clean static build, checks links, and executes browser regression tests.
- Ignored local Playwright reports and test artifacts while retaining failures in CI output.
- Confirmed the navigation guard by temporarily introducing a missing Writing target, observing failures at both viewport sizes, restoring the target, and rerunning the clean suite.

## Work-log Timestamp Convention — 2026-08-31T12:18:01-05:00

- Documented the requirement to timestamp every future top-level work-log entry using ISO 8601 with an explicit UTC offset.

## Collapsible Long-form Writing Reader — 2026-09-01T02:10:00+00:00

- Replaced the Writing placeholder with the complete “We Rebuilt Corporate Bureaucracy Out of Tokens” essay from Issue #4.
- Kept the single-page site scannable by placing the essay in a native, keyboard-accessible disclosure.
- Added a height-capped, independently scrollable reading surface with sticky metadata so opening the essay does not turn the homepage into an extreme scroll.
- Created responsive editorial typography, section rhythm, article lists, rules, and end matter consistent with the existing black, white, gray, and restrained-purple visual system.
- Kept the experience framework-free and dependency-free, with motion disabled by the existing reduced-motion preference.

## Social Profile Links — 2026-09-01T07:39:00-04:00

- Replaced the contact placeholder with Adam's active X, TikTok, and Instagram profiles.
- Kept LinkedIn visible as an intentionally offline channel while its replacement account is being prepared.
- Added a compact technical index, profile handles, outbound indicators, and restrained hover/focus movement to the bottom contact section.
- Opened active profiles in a new tab with safe external-link attributes and added browser regression coverage for every destination.
