# AGENTS.md

## Project

This repository contains the personal website for Adam Secada.

The site is a mobile-first, single-page personal brand and builder portfolio.

Before making meaningful product, design, layout, or copy decisions, read:

- `docs/PRODUCT.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`

Visual inspiration is stored under:

- `references/visual/`

These documents are the source of truth.

---

## Core Objective

Build a distinctive, minimal personal website that communicates:

- who Adam is
- what he builds
- what he thinks about
- selected projects and experiments
- how to contact him

The site should feel polished, opinionated, technical, and slightly irreverent.

It should not feel like:

- a SaaS landing page
- a résumé
- a generic developer portfolio
- a cyberpunk template
- a fake terminal
- a "hacker" novelty website

---

## Technology

Use Astro.

Prefer the simplest implementation that satisfies the design.

Default preferences:

- Astro components
- semantic HTML
- modern CSS
- minimal JavaScript
- no frontend framework unless clearly justified
- no unnecessary dependencies
- no component library unless explicitly requested

Do not introduce React, Vue, Tailwind, animation libraries, or large dependency trees simply for convenience.

Prefer native platform capabilities.

---

## Architecture

The public website should remain a single page unless requirements explicitly change.

Primary sections:

1. Navigation
2. Hero
3. About
4. Work / Projects
5. Writing / Thinking
6. Contact
7. Footer

Navigation links should scroll to anchor sections on the same page.

Components may be separated internally for maintainability even though the rendered experience is one page.

---

## Design Priorities

Order of importance:

1. typography
2. composition
3. spacing
4. readability
5. responsive behavior
6. subtle graphic details
7. motion

The visual system should be strong without relying on animation.

Mobile is the primary design target.

Desktop should feel like an expansion of the mobile composition rather than a separate design.

---

## Visual Direction

The site uses:

- near-black / charcoal backgrounds
- white or off-white primary typography
- purple accent color
- oversized typography
- aggressive negative space
- thin geometric rules
- occasional outlined boxes
- asymmetrical layouts
- diagonal slash motifs
- small amounts of technical metadata
- occasional mono or condensed microtype

See `docs/DESIGN.md` for detailed guidance.

---

## Visual Reference Rules

Images inside `references/visual/` are inspiration, not templates.

Extract visual principles from them.

Do not recreate reference artwork literally.

In particular, avoid turning the site into a stereotypical hacker or cyberpunk experience.

Do not add decorative elements such as:

- Matrix rain
- random binary strings
- fake source code
- terminal windows
- command prompts
- neon glow everywhere
- circuit-board backgrounds
- skull imagery
- excessive glitch effects
- meaningless technical jargon

Technical details should feel intentional and restrained.

---

## Motion

Motion should support polish, not announce itself.

Acceptable examples:

- subtle entrance transitions
- restrained hover states
- smooth anchor scrolling
- small typography or rule transitions

Avoid:

- dramatic parallax
- constant animation
- cursor gimmicks
- large scroll-jacking effects
- aggressive glitch effects

Respect `prefers-reduced-motion`.

---

## Content

Do not invent accomplishments, companies, projects, metrics, biography, or opinions.

Placeholder content is acceptable where explicitly identified.

The initial site should prioritize real content for:

- hero
- about
- contact

Project and writing sections may initially contain placeholders or incomplete entries.

See `docs/CONTENT.md`.

---

## Accessibility

Use semantic HTML.

Maintain strong contrast.

Interactive elements must have visible focus states.

Navigation must work with keyboard input.

Use descriptive link text where reasonable.

Do not sacrifice readability for visual experimentation.

---

## Responsive Behavior

Design mobile first.

The page should work cleanly at narrow phone widths before desktop layouts are considered.

Avoid fixed widths that create horizontal scrolling.

Typography should scale fluidly where appropriate.

Decorative elements must never obscure important text.

---

## Performance

This is a simple personal website.

Treat unnecessary complexity as a defect.

Prefer:

- static output
- minimal client JavaScript
- optimized images
- local styling
- simple components

Avoid dependencies that provide functionality easily implemented with HTML or CSS.

---

## Implementation Philosophy

When choosing between:

- clever and understandable
- abstract and explicit
- dynamic and static
- dependency and native functionality

prefer the simpler option unless there is a meaningful user-facing benefit.

Do not overengineer this project.

---

## Working With Ambiguity

If a requested change conflicts with the documented visual or product direction:

1. identify the conflict
2. preserve the existing design system where possible
3. make the smallest reasonable interpretation
4. update documentation if the product direction has intentionally changed

Do not silently invent a new design language.

---

## Definition of Done

A change is complete when:

- it satisfies the requested behavior
- it works on mobile
- it works on desktop
- typography and spacing remain consistent
- there are no obvious accessibility regressions
- unnecessary dependencies have not been introduced
- the implementation remains consistent with the project documentation