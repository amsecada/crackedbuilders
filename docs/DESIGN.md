# Design System

## Design Intent

The site should feel like a polished personal brand interpreted through restrained underground technical poster design.

The target is:

> editorial minimalism with punk technical energy

The experience should feel deliberate, expensive, confident, and slightly confrontational.

It must remain highly readable.

---

## Reference Material

Primary visual reference:

`references/visual/poster-reference.png`

The reference demonstrates useful visual principles including:

- bold typography
- extreme contrast
- asymmetry
- diagonal geometry
- outlined shapes
- large areas of negative space
- micro typography
- irregular composition
- monochrome graphic systems

Extract those principles rather than recreating the artwork.

The website should not literally look like hacker merchandise.

---

## Overall Aesthetic

Imagine:

Swiss editorial design
+
underground technical poster
+
modern personal portfolio

Do not interpret the aesthetic as:

cyberpunk UI
+
terminal simulator
+
developer cliché

---

## Color

### Background

Primary background should be near-black rather than necessarily absolute black.

Examples of appropriate direction:

- charcoal
- graphite
- nearly black neutral

### Primary text

White or slightly softened off-white.

### Secondary text

Muted gray.

### Accent

Purple.

Purple should function as punctuation.

Use it selectively for elements such as:

- rules
- hover states
- selected text
- small labels
- section markers
- geometric accents
- occasional emphasized words

Avoid flooding the page with purple.

The page should remain predominantly black, white, and gray.

---

## Typography

Typography is the primary visual element.

### Display typography

Use a strong grotesk / neo-grotesk / modern sans-serif.

Desired characteristics:

- bold
- confident
- geometric enough to feel contemporary
- highly legible
- suitable for very large sizes

Hero typography should be capable of occupying significant portions of the viewport.

### Body typography

Clean sans-serif.

Prioritize readability.

### Micro typography

A monospace or condensed face may be used sparingly for:

- metadata
- labels
- project status
- coordinates
- section numbers
- timestamps
- small visual annotations

Do not use monospace for all body content.

---

## Hero Composition

The hero should be dominated by:

ADAM SECADA

The name should be treated graphically rather than simply appearing as a normal heading.

A diagonal slash should intersect or divide the composition.

Conceptual direction:

ADAM
    /
SECADA

The exact arrangement may vary by viewport.

The slash is a visual motif, not literal punctuation.

It may be created using CSS rather than text.

Supporting copy should remain highly readable.

---

## Diagonal Motif

The diagonal slash from the reference image may become a recurring identity element.

Possible uses:

- hero composition
- section transitions
- project card detail
- hover treatment
- footer signature

Use restraint.

The motif becomes weaker if it appears everywhere.

---

## Geometry

Allowed decorative geometry includes:

- thin rules
- outlined rectangles
- small corner markers
- lines extending beyond content
- cropped shapes
- diagonal lines

Geometry should create composition rather than decoration for decoration's sake.

Prefer thin strokes and strong spacing.

---

## Technical Metadata

Small amounts of technical metadata may appear throughout the site.

Example:

STATUS    BUILDING
FOCUS     AI / SYSTEMS
MODE      EXPERIMENTAL

Metadata exists primarily as a visual device.

Use only where it reinforces real information.

Do not fill the site with meaningless hexadecimal values, binary strings, fake version numbers, or pretend terminal output.

---

## Layout

Use a mobile-first layout system.

### Mobile

Mobile should feel intentionally designed rather than like a collapsed desktop page.

Characteristics:

- large typography
- strong vertical rhythm
- edge-aware composition
- generous breathing room
- full-width sections
- controlled asymmetry

### Desktop

Desktop may become more experimental.

Use additional horizontal space for:

- offset typography
- vertical labels
- metadata columns
- asymmetric project arrangements
- extended rules
- geometric details

Avoid centering everything inside identical cards.

---

## Spacing

Negative space is a major part of the design.

Sections should have substantial breathing room.

Do not attempt to fill every viewport with content.

Large gaps may be intentional.

Spacing should create rhythm between intense typographic moments.

---

## Navigation

Navigation should be simple.

Expected items:

ABOUT
WORK
WRITING
CONTACT

Links navigate to anchors on the same page.

Desktop navigation may remain visible at the top.

Mobile navigation should remain minimal.

Avoid a complex drawer system unless space requires it.

---

## Sections

Sections should not all share the exact same layout.

The design system should create consistency while allowing variation.

For example:

- Hero: typographic poster
- About: restrained editorial layout
- Work: more visual and modular
- Writing: text-forward
- Contact: bold final statement

Avoid repeating identical cards vertically.

---

## Projects

Support two levels of project presentation.

### Featured projects

May include:

- large title
- screenshot or artwork
- short description
- status
- technology or category
- external link

### Smaller experiments

May appear as:

- text rows
- compact lists
- numbered entries
- minimal link groups

Do not force every project into the same card component.

---

## Images

There is no portrait of Adam in the initial design.

Images should primarily relate to projects, artifacts, screenshots, or work.

Allow images to be:

- cropped
- oversized
- partially off-grid
- framed by geometric rules

Do not apply heavy visual effects simply to make screenshots appear futuristic.

---

## Motion

Use subtle motion only.

Good:

- opacity transitions
- small transforms
- rule expansion
- subtle hover movement
- smooth anchor navigation

Avoid:

- scroll hijacking
- aggressive parallax
- constant movement
- particle effects
- animated backgrounds
- heavy glitch effects
- custom cursor gimmicks

Motion should support polish, not announce itself.

Respect reduced motion preferences.

---

## Borders and Cards

Avoid the standard modern SaaS pattern of placing every piece of information inside a rounded rectangle.

Rounded cards should be uncommon or absent.

Prefer:

- typography
- spacing
- rules
- alignment
- thin outlined geometry

when separating information.

---

## Corners

Default toward sharp or minimally rounded corners.

The overall visual language is graphic rather than soft.

---

## Anti-Patterns

Do not produce:

- generic Tailwind landing page
- dashboard aesthetics
- glowing purple SaaS UI
- gradients everywhere
- glassmorphism
- fake terminals
- hacker clichés
- matrix effects
- excessive binary
- random code
- giant animated blobs
- unnecessary 3D graphics
- rounded cards everywhere
- generic stock photography
- profile headshot hero
- animated typing-effect introductions

When uncertain, remove visual elements rather than adding more.

---

## Design Test

When evaluating a design choice, ask:

> Would this still look interesting if every animation stopped?

If the answer is no, improve the underlying typography and composition first.