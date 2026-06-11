---
name: Devaro English
description: Responsive English-school landing page with refined editorial poster identity.
status: draft
updated: 2026-06-11
sources:
  - docs/img.png
  - _bmad-output/project-context.md
  - src/App.vue
  - src/assets/main.css
  - src/components/layout/SiteHeader.vue
  - src/components/sections/HeroSection.vue
  - src/components/sections/ProgramsSection.vue
  - src/components/sections/LessonFlowSection.vue
  - src/components/sections/TeachersSection.vue
  - src/components/sections/PricingSection.vue
  - src/components/sections/SocialProofSection.vue
  - src/components/sections/ContactSection.vue
  - src/components/ui/BaseButton.vue
  - src/components/ui/BaseCard.vue
  - src/components/ui/SectionHeading.vue
  - src/data/siteContent.ts
  - public/hero-teacher-sticker.png
  - public/stickers/
  - imports/site-template-style-reference.jpg
colors:
  paper-base: '#F7F4ED'
  paper-raised: '#FFFEFB'
  paper-muted: '#F1EEE7'
  ink-primary: '#172E28'
  ink-muted: '#59645F'
  primary-green: '#23724F'
  primary-green-hover: '#2B805B'
  accent-pink: '#D65E84'
  accent-tertiary: '#A14F34'
  white: '#FFFFFF'
  grid-dark: '#101C19'
  focus-on-paper: '#172E28'
  focus-on-color: '#FFFFFF'
typography:
  h1:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: '1440: 84px; 1024: 72px; 768: 60px; 390: 44px'
    fontWeight: '700'
    lineHeight: '0.96'
    letterSpacing: '0'
    textTransform: 'uppercase'
  h2:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: '1440: 56px; 1024: 48px; 768: 40px; 390: 34px'
    fontWeight: '700'
    lineHeight: '1.02'
    letterSpacing: '0'
    textTransform: 'uppercase'
  h3:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '1440: 24px; 1024: 23px; 768: 22px; 390: 20px'
    fontWeight: '900'
    lineHeight: '1.18'
    letterSpacing: '0'
  body:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '1440: 18px; 1024: 17px; 768: 17px; 390: 16px'
    fontWeight: '400'
    lineHeight: '1.58'
    letterSpacing: '0'
  small:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '14px'
    fontWeight: '800'
    lineHeight: '1.35'
    letterSpacing: '0'
  label:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '14px'
    fontWeight: '900'
    lineHeight: '1.2'
    letterSpacing: '0'
rounded:
  none: '0'
  sm: '0'
  md: '0'
  lg: '0'
  full: '9999px'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '5': '24px'
  '6': '32px'
  '7': '48px'
  '8': '64px'
  '9': '80px'
  '10': '104px'
  container-max: '1280px'
  container-margin-1440: '80px'
  container-margin-1024: '48px'
  container-margin-768: '32px'
  container-margin-390: '20px'
  grid-gutter-1440: '24px'
  grid-gutter-1024: '24px'
  grid-gutter-768: '20px'
  grid-gutter-390: '16px'
components:
  page-frame:
    background: '{colors.paper-base}'
    max-width: '{spacing.container-max}'
    grid: '12 columns with breakpoint gutters'
  primary-button:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    border: '2px solid {colors.primary-green}'
    min-height: '58px desktop; 54px mobile'
    padding: '0 24px desktop; 0 20px mobile'
    backing: '4px offset rgba(23, 46, 40, 0.22)'
    radius: '{rounded.none}'
  secondary-button:
    background: '{colors.paper-raised}'
    foreground: '{colors.primary-green}'
    border: '2px solid {colors.ink-primary}'
    min-height: '54px'
    padding: '0 22px desktop; 0 18px mobile'
    backing: '3px offset rgba(23, 46, 40, 0.16)'
    radius: '{rounded.none}'
  header-navigation:
    background: '{colors.paper-raised}'
    shadow: '3px bottom offset {colors.accent-pink}, used once per header only'
    link-size: '16px desktop'
    link-target: '44px minimum'
    hover: 'Underline only in {colors.primary-green}'
  language-toggle:
    background: '{colors.paper-raised}'
    active-background: '{colors.primary-green}'
    active-foreground: '{colors.white}'
    target: '44px minimum'
    radius: '{rounded.none}'
  section-heading:
    eyebrow: '{typography.small}; compact printed label'
    title: '{typography.h2}'
    title-width: '8 columns desktop; full width below 1024px'
  paper-card:
    background: '{colors.paper-base}'
    backing: '4px offset {colors.accent-pink} at selected emphasis only'
    border: 'none'
    radius: '{rounded.none}'
    padding: '32px desktop; 24px tablet; 20px mobile'
  quiet-card:
    background: '{colors.paper-raised}'
    backing: 'none'
    border: '1px solid rgba(23, 46, 40, 0.10)'
    radius: '{rounded.none}'
  program-card:
    background: '{colors.paper-base}'
    icon-background: '{colors.primary-green}'
    title: '{typography.h3}'
    body: '{typography.body}'
    backing: 'pink offset on hover/focus or selected cards only'
  text-badge:
    background: '{colors.accent-pink}'
    foreground: '{colors.ink-primary}'
    padding: '5px 8px'
    radius: '{rounded.none}'
  green-text-badge:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    padding: '5px 8px'
    radius: '{rounded.none}'
  decorative-sticker:
    treatment: 'One approved editorial collage cutout family: halftone grain, white cut-paper outline, limited green/pink ink accents'
  grid-fragment:
    treatment: 'Small {colors.grid-dark} grid-paper fragment; one dominant fragment per section maximum'
  torn-paper-boundary:
    treatment: 'Irregular cut-paper contour used sparingly outside text and control safe zones'
  contact-form:
    label: '{colors.ink-primary}'
    input-background: '{colors.paper-raised}'
    input-border: '1px solid rgba(23, 46, 40, 0.22)'
    focus: '3px solid {colors.focus-on-paper} with 3px offset'
    radius: '{rounded.none}'
  interactive-focus-on-paper:
    outline: '3px solid {colors.focus-on-paper}'
    offset: '3px'
  interactive-focus-on-color:
    outline: '3px solid {colors.focus-on-color}'
    offset: '3px'
---

## Brand & Style

Devaro English keeps its bold editorial poster identity: warm paper, dark-green structure, pink collage accents, square printed blocks, and teacher/sticker imagery. The refinement is discipline. The page should feel more professional because hierarchy, spacing, and decoration are controlled, not because the identity is replaced with generic SaaS styling.

Use collage as punctuation. The primary reading experience is a clean landing page with strong type, clear conversion actions, and generous negative space. Poster energy appears in the hero, selected badges, a few offset cards, and a small number of sticker/grid/torn-paper moments. Do not make every section equally loud.

The existing reference image remains inspiration only: [`imports/site-template-style-reference.jpg`](imports/site-template-style-reference.jpg). The approved sticker family remains available in [`mockups/stickers/`](mockups/stickers/). This DESIGN.md wins if the implementation, mockups, or imports disagree.

## Colors

- **Paper Base (`{colors.paper-base}`)** is the page canvas and quiet card surface.
- **Paper Raised (`{colors.paper-raised}`)** creates readable paper layers for header, form, and selected cards.
- **Ink (`{colors.ink-primary}`)** is the primary text color and the dark printed-ink anchor.
- **Muted Ink (`{colors.ink-muted}`)** is body-support text only; never use it for critical labels or CTAs.
- **Primary Green (`{colors.primary-green}`)** is the structural brand color: primary CTA, active language state, key icon blocks, stats band, and selected labels.
- **Accent Pink (`{colors.accent-pink}`)** is a supporting collage accent. Use it less than green. Prefer underline marks, tiny labels, and occasional card offsets. Do not repeat pink borders around every section or card.
- **Grid Dark (`{colors.grid-dark}`)** is for rare grid-paper fragments only.

Allowed text pairings: `{colors.white}` on `{colors.primary-green}`, `{colors.white}` on `{colors.ink-primary}`, `{colors.ink-primary}` on `{colors.paper-base}`, `{colors.ink-muted}` on `{colors.paper-base}`, and `{colors.ink-primary}` on `{colors.accent-pink}`. Never place white text on `{colors.accent-pink}`.

## Typography

Use a clear five-role system: H1, H2, H3, body, and small/label text.

- **H1 (`{typography.h1}`)** appears only in the hero. It keeps the condensed uppercase poster voice but gets enough line height to read in Ukrainian and English.
- **H2 (`{typography.h2}`)** is for section titles only. Use fewer words in headings where possible; long explanatory clauses move into body text.
- **H3 (`{typography.h3}`)** uses Inter, not condensed uppercase. Program cards, teacher names, pricing names, and process-step titles use H3 so the page stops shouting at every level.
- **Body (`{typography.body}`)** carries explanations, card descriptions, and section support copy.
- **Small/Label (`{typography.small}` / `{typography.label}`)** handles badges, nav labels, meta, and form labels.

Do not use condensed uppercase for paragraphs, card descriptions, form labels, navigation links, or process-step descriptions. Do not scale typography continuously with viewport width; use the breakpoint sizes named in the tokens. Keep letter spacing at `0`.

## Layout & Spacing

Use one consistent centered container and one 12-column grid. The implementation may keep the outer paper page frame, but content inside each section should align to `{spacing.container-max}` with the breakpoint margins and gutters in frontmatter.

Breakpoint layout contract:

| Viewport | Container | Grid | Section rhythm |
|---|---:|---|---|
| 1440px | 1280px max, 80px side margin | 12 columns, 24px gutters | Hero and major sections use 80-104px vertical spacing |
| 1024px | 928px content width, 48px side margin | 12 columns, 24px gutters | Two-column sections may remain if content is not crowded |
| 768px | 704px content width, 32px side margin | 8-column practical layout inside the same system | Complex layouts stack; card grids become 2 columns |
| 390px | 350px content width, 20px side margin | 4-column practical layout | Single-column, 64px major section spacing |

Programs use a 3 + 2 grid on desktop: three cards in the first row and two cards in the second row, aligned to the same 12-column system. At 1024px use a 2 + 2 + 1 rhythm. At 768px use two columns. At 390px use one column.

Section headings align consistently: eyebrow at the left column start; H2 spans up to 8 columns on desktop and full width on tablet/mobile. Avoid per-section custom grids unless the surface has a genuine content need.

## Elevation & Depth

Depth comes from paper layering and printed offsets. Use `{components.paper-card.backing}` selectively, not as the default treatment for every card. A page full of pink offsets makes the accent stop working.

Primary controls may keep a dark printed shadow. Quiet content cards should use paper tone, spacing, and typography before shadows. Avoid glassmorphism, gradients, blur-heavy panels, and generic soft-card shadows.

## Shapes

Square edges remain the rule. Rounded buttons, rounded cards, and pill navigation conflict with the printed poster identity. Softness should come from torn-paper contours, sticker outlines, small rotations, and layered paper.

Circular shapes are allowed only for avatar imagery or icon anatomy. Do not use pill badges for general metadata.

## Components

- **`page-frame`** — A warm paper page with consistent side margins. The current `max-w-[1840px]` shell may remain as an outer frame, but inner content aligns to `{components.page-frame.max-width}`.
- **`header-navigation`** — Larger and calmer than the current version. Brand lockup, nav links, language toggle, and social buttons align to the same container. Keep underline-only hover. Use the pink bottom offset once on the header, not repeated as a dominant page motif.
- **`primary-button`** — The dominant conversion object. Use larger height and padding than the current button. In the hero, the primary CTA should visually outweigh the secondary CTA through fill, size, and placement.
- **`secondary-button`** — Supports the primary action. Same square language, slightly smaller visual weight, no competing color fill.
- **`section-heading`** — Consistent across sections. H2 is concise; explanatory copy belongs below in body text.
- **`program-card`** — Three cards on desktop row one, two on row two. Use Inter H3 titles, readable body text, consistent icon blocks, and measured accents. Do not use five cramped cards in one row.
- **`process-step`** — Number block, H3 step title, and body description. Descriptions are required in the experience contract and will need a content/type update during implementation.
- **`paper-card` / `quiet-card`** — Use pink offset only where emphasis is useful. Default cards should be quieter so the accent remains intentional.
- **`teacher-card`** — Preserve existing photos and profile content. Do not apply halftone filters to teacher photos. Use quieter card styling than programs/pricing so teacher portraits remain the focus.
- **`pricing-card`** — Keep three-card comparison, but avoid making every card equally loud. One featured card may use green fill; others should be paper-based.
- **`decorative-sticker`** — Use one consistent approved asset family. Hero may show no more than two secondary decorative objects total, excluding the teacher image and paper sheet. Other sections get at most one decorative sticker or one grid fragment, not both by default.
- **`contact-form`** — Persistent labels, square inputs, clear focus, and a dominant primary submit-style button. This redesign does not add submission behavior.
- **`interactive-focus` state** — Every link, button, language control, channel link, and field uses `{components.interactive-focus-on-paper}` or `{components.interactive-focus-on-color}`. Decorative shadows are not focus indicators.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Preserve cream, dark green, and pink as the identity palette | Introduce gradients, glassmorphism, beige-only palettes, or generic SaaS blue |
| Use one 12-column grid and consistent containers | Let each section invent its own width and grid |
| Keep H1/H2 condensed and uppercase | Use condensed uppercase for every card and label |
| Make the hero primary CTA clearly dominant | Give primary and secondary CTAs equal visual weight |
| Limit the hero to two secondary decorative objects | Stack dots, grids, multiple stickers, proof cards, and test cards as equal competitors |
| Use pink as an occasional accent | Repeat pink borders or offsets on every surface |
| Keep the approved sticker family visually consistent | Mix unrelated illustration, emoji, stock, and sticker styles |
| Use 3 + 2 program card layout on desktop | Force five program cards into one row |
| Shorten headings and move detail into body text | Use long manager/process headings as display type |
| Preserve all current behavior unless explicitly changed | Add menus, modals, carousels, or fake test flows during visual redesign |
