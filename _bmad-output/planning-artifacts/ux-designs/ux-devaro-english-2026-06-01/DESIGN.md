---
name: Devaro English
description: Responsive English-school landing page with casual street-editorial poster identity.
status: draft
updated: 2026-06-17
sources:
  - docs/visual-source-of-truth.png
  - docs/visual-source-of-truth-2.png
  - docs/img.png
  - _bmad-output/project-context.md
  - src/App.vue
  - src/assets/main.css
  - src/components/layout/SiteHeader.vue
  - src/components/sections/HeroSection.vue
  - src/components/sections/StatsBand.vue
  - src/components/sections/ProgramsSection.vue
  - src/components/sections/LessonFlowSection.vue
  - src/components/sections/TeachersSection.vue
  - src/components/sections/PricingSection.vue
  - src/components/sections/SocialProofSection.vue
  - src/components/sections/ContactSection.vue
  - src/components/ui/
  - src/data/siteContent.ts
  - public/hero-teacher-sticker.png
  - public/stickers/
colors:
  paper-base: '#F7F4ED'
  paper-warm: '#FBF8F1'
  paper-raised: '#FFFEFB'
  paper-muted: '#F1EEE7'
  ink-primary: '#172E28'
  ink-muted: '#59645F'
  primary-green: '#23724F'
  primary-green-hover: '#2B805B'
  deep-green: '#123B31'
  accent-pink: '#D65E84'
  accent-pink-soft: '#F4C9D6'
  accent-tertiary: '#A14F34'
  white: '#FFFFFF'
  grid-dark: '#101C19'
  tape: '#D9D6CF'
  focus-on-paper: '#172E28'
  focus-on-color: '#FFFFFF'
typography:
  h1:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: '1440: 76px; 1024: 68px; 768: 56px; 390: 40px'
    fontWeight: '700'
    lineHeight: '1440: 0.96; 1024: 0.98; 768: 1.00; 390: 1.04'
    letterSpacing: '0'
    textTransform: 'uppercase'
  h2:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: '1440: 48px; 1024: 44px; 768: 38px; 390: 31px'
    fontWeight: '700'
    lineHeight: '1440: 1.00; 1024: 1.02; 768: 1.05; 390: 1.08'
    letterSpacing: '0'
    textTransform: 'uppercase'
  h3:
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
    fontSize: '1440: 24px; 1024: 23px; 768: 22px; 390: 20px'
    fontWeight: '800'
    lineHeight: '1.18'
    letterSpacing: '0'
  body:
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
    fontSize: '1440: 18px; 1024: 17px; 768: 17px; 390: 16px'
    fontWeight: '400'
    lineHeight: '1.58'
    letterSpacing: '0'
  body-small:
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
    fontSize: '14px'
    fontWeight: '600'
    lineHeight: '1.45'
    letterSpacing: '0'
  label:
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
    fontSize: '13px'
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: '0'
  nav:
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'
    fontSize: '15px'
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: '0'
rounded:
  none: '0'
  xs: '0'
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
  margin-1440: '80px'
  margin-1024: '48px'
  margin-768: '32px'
  margin-390: '20px'
  gutter-1440: '24px'
  gutter-1024: '24px'
  gutter-768: '20px'
  gutter-390: '16px'
  section-y-desktop: '88px'
  section-y-tablet: '72px'
  section-y-mobile: '64px'
  card-gap-desktop: '24px'
  card-gap-mobile: '16px'
components:
  page-frame:
    background: '{colors.paper-base}'
    max-width: '{spacing.container-max}'
    grid: '12 columns desktop, 8 tablet, 4 mobile'
  sticker-label:
    background: '{colors.accent-pink}'
    foreground: '{colors.ink-primary}'
    padding: '5px 8px'
    radius: '{rounded.none}'
    rotation: '-2deg to 2deg only'
  primary-button:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    border: '2px solid {colors.primary-green}'
    min-height: '58px desktop; 54px mobile'
    padding: '0 24px desktop; 0 20px mobile'
    backing: '4px printed offset rgba(23, 46, 40, 0.22)'
    radius: '{rounded.none}'
  secondary-button:
    background: '{colors.paper-raised}'
    foreground: '{colors.primary-green}'
    border: '2px solid {colors.ink-primary}'
    min-height: '54px'
    padding: '0 22px desktop; 0 18px mobile'
    backing: '3px printed offset rgba(23, 46, 40, 0.16)'
    radius: '{rounded.none}'
  paper-card:
    background: '{colors.paper-warm}'
    border: '1px solid rgba(23, 46, 40, 0.12)'
    backing: 'pink printed offset only for selected emphasis'
    radius: '{rounded.none}'
    padding: '32px desktop; 24px tablet; 20px mobile'
  featured-card:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    backing: '4px pink or dark printed offset'
    radius: '{rounded.none}'
  timeline-step:
    number-background: '{colors.primary-green}'
    connector: '1px dashed rgba(23, 46, 40, 0.35)'
    title: '{typography.h3}'
    body: '{typography.body-small}'
  card-rail-control:
    background: '{colors.paper-raised}'
    foreground: '{colors.ink-primary}'
    border: '1px solid rgba(23, 46, 40, 0.24)'
    target: '44px minimum'
  decorative-sticker:
    treatment: 'Cutout or printed object with white paper edge, subtle halftone/grain, green/pink accents, no text'
  grid-fragment:
    treatment: 'Small dark-green grid-paper/torn-paper fragment, max one dominant instance per section'
  contact-form:
    input-background: '{colors.paper-raised}'
    input-border: '1px solid rgba(23, 46, 40, 0.22)'
    focus: '3px solid {colors.focus-on-paper} with 3px offset'
    radius: '{rounded.none}'
  focus-on-paper:
    outline: '3px solid {colors.focus-on-paper}'
    offset: '3px'
  focus-on-color:
    outline: '3px solid {colors.focus-on-color}'
    offset: '3px'
---

## Brand & Style

Devaro English should feel like a controlled street-editorial poster for a friendly online English school: cream paper, dark-green ink, confident condensed headlines, pink sticker labels, cutout photography, torn-paper edges, fine-line icons, doodle marks, and handmade offsets. The page is expressive, youthful, and approachable, but it is still a conversion landing page with clear reading order and obvious actions.

The supplied visual references are the source of truth for mood, composition, hierarchy, palette, sticker labels, torn-paper/collage details, card treatment, section rhythm, and responsive translation. They are not a source of production copy, teacher data, statistics, pricing, testimonial truth, or form behavior. The expected repository path `docs/design/devaro-landing-reference.png` was not present during this update; the available visual references are `docs/visual-source-of-truth.png` and `docs/visual-source-of-truth-2.png`.

The second reference (`docs/visual-source-of-truth-2.png`) adds an explicit desktop + mobile comparison. Lift its responsive discipline: the hero simplifies on mobile, the teacher image remains emotionally central, the stats band becomes a compact torn-paper confidence block, card-heavy sections may become narrow rails or stacked previews, the process can become a clean timeline, and the footer can be a real closing surface. Do not copy its extra claims, alternate package prices, "25 000+"-style stats, menu affordances, or carousel behavior unless those are approved as product changes.

The direction is an update to the existing working Vue site. Preserve the current section model, bilingual content source, links, data structures, teacher/profile content, pricing placeholders, and static contact behavior unless a later implementation task explicitly changes them.

Visual principles:

| Principle | Rule |
|---|---|
| Casual, not chaotic | Every major section may have a small handmade moment, but layout and hierarchy stay controlled. |
| Editorial, not corporate | Avoid generic SaaS cards, glossy gradients, pill-heavy UI, and overly polished luxury minimalism. |
| Handmade, not childish | Use rotation, paper edges, tape, underlines, and doodles. Do not add a graffiti or handwritten font. |
| Expressive first screen, calmer middle | Hero carries the most collage energy. Programs, process, teachers, pricing, and form become progressively calmer. |
| Content is real, decoration is optional | If decoration conflicts with content, remove the decoration first. |
| Desktop and mobile are designed peers | Mobile is not a cropped desktop canvas; simplify composition and preserve the same hierarchy. |

## Colors

The palette is cream paper, dark green, and pink. Green is the structural brand color; pink is a sticker/highlighter accent. The UI must not become a pink-bordered grid or a one-note beige page.

- **Paper Base (`{colors.paper-base}`)** is the main background.
- **Paper Warm (`{colors.paper-warm}`)** is for quiet cards and calmer section surfaces.
- **Paper Raised (`{colors.paper-raised}`)** is for header, form fields, high-readability panels, and surfaces that need separation.
- **Ink Primary (`{colors.ink-primary}`)** is the main text and printed-edge color.
- **Ink Muted (`{colors.ink-muted}`)** supports body copy and secondary descriptions only.
- **Primary Green (`{colors.primary-green}`)** is used for primary actions, the stats band, featured pricing, language active state, compact icon blocks, and selected large collage patches.
- **Deep Green (`{colors.deep-green}`)** can be used for torn-paper fragments, footer, and darker editorial patches.
- **Accent Pink (`{colors.accent-pink}`)** is used for sticker labels, underline strokes, small arrows/doodles, occasional offsets, and one featured CTA accent if needed.
- **Tape (`{colors.tape}`)** appears only as small tape strips over cards/forms/images.

Allowed high-contrast pairings: `{colors.ink-primary}` on paper, `{colors.ink-muted}` on paper for secondary copy, `{colors.white}` on `{colors.primary-green}`, `{colors.white}` on `{colors.deep-green}`, and `{colors.ink-primary}` on `{colors.accent-pink}`. Do not place white body text on pink.

## Typography

Use exactly two font families:

| Role | Family | Available weights | Usage |
|---|---|---|---|
| Condensed display | `Oswald` | 600, 700 | H1 and selected H2 only. Ukrainian Cyrillic must render correctly. |
| Friendly sans | `Inter` | 400, 600, 700, 800, 900 | Body, nav, buttons, cards, labels, forms, prices, stats, footer, and H3. Ukrainian Cyrillic must render correctly. |

No third graffiti, marker, or handwritten font. Sticker personality comes from shape, rotation, borders, underline strokes, tape, torn edges, and placement.

Type scale:

| Token | 1440px | 1024px | 768px | 390px | Rules |
|---|---:|---:|---:|---:|---|
| `{typography.h1}` | 76px / 0.96 | 68px / 0.98 | 56px / 1.00 | 40px / 1.04 | Hero only, uppercase, max 6-7 visual lines on mobile. |
| `{typography.h2}` | 48px / 1.00 | 44px / 1.02 | 38px / 1.05 | 31px / 1.08 | Section titles only. Avoid making every section equally loud. |
| `{typography.h3}` | 24px / 1.18 | 23px / 1.18 | 22px / 1.18 | 20px / 1.18 | Card titles, process steps, teacher names, pricing package names. |
| `{typography.body}` | 18px / 1.58 | 17px / 1.58 | 17px / 1.58 | 16px / 1.58 | Support copy and descriptions. |
| `{typography.body-small}` | 14px / 1.45 | 14px / 1.45 | 14px / 1.45 | 14px / 1.45 | Meta, helper copy, compact labels. |
| `{typography.label}` | 13px / 1.15 | 13px / 1.15 | 13px / 1.15 | 13px / 1.15 | Sticker labels, eyebrow labels, form labels. |

Letter spacing is always `0`. Do not scale font size with viewport width. Use breakpoint tokens, and wrap long Ukrainian words before they collide with controls or adjacent content.

Uppercase rules:

- H1 and H2 are uppercase display.
- Sticker labels may be sentence case or uppercase depending on source copy, but stay small.
- H3, body, nav, buttons, form labels, footer text, prices, and captions use Inter and should not be forced into condensed display.

## Layout & Spacing

Use one centered responsive content system instead of copying the reference as a fixed canvas.

| Viewport | Container | Grid | Padding / gutters | Section rhythm |
|---|---:|---|---|---|
| 1440px | 1280px max | 12 columns | 80px outer margin, 24px gutters | 88-104px between major sections |
| 1024px | 928px practical width | 12 columns | 48px margin, 24px gutters | 72-88px |
| 768px | 704px practical width | 8 columns | 32px margin, 20px gutters | 72px |
| 390px | 350px practical width | 4 columns | 20px margin, 16px gutters | 64px |

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 104px. Use 24px as the normal card gap on desktop and 16px on mobile. Do not reduce content spacing to make decoration fit.

Cards and image ratios:

| Surface | Aspect / sizing rule |
|---|---|
| Hero teacher cutout | Object-contain; never crop the teacher. Keep the figure visibly connected to the paper collage. |
| Teacher photos | 4:3 on cards; crop faces respectfully and keep alt text meaningful. |
| Social/Instagram thumbnails | 4:3 or 1:1, consistent within the strip. If no real feed exists, use placeholders only as clearly non-live content. |
| Program cards | Minimum 240px desktop height, content-driven mobile height. |
| Pricing cards | Equal height within row; featured card may be taller by emphasis only if the row remains aligned. |
| Contact form | Stable label and input heights; no layout shift on focus. |
| Card rails | Optional mobile/tablet treatment only when all cards remain reachable, labeled, and keyboard/screen-reader accessible. |

Standard borders: 1px for quiet card/input outlines, 2px for buttons and direct-channel links, 3px focus outline. Printed offsets use 3-6px and must be consistent within a section.

## Elevation & Depth

Depth comes from paper layering, offset printed shadows, torn-paper fragments, and occasional tape, not blur-heavy shadows. Default cards should be quiet. Pink offsets are reserved for selected emphasis and should not appear on every card in a section.

Controls may keep a small dark printed offset. Cards may use either a 1px ink outline or one offset backing, not both at high intensity unless the section needs a deliberate poster beat.

Avoid glassmorphism, gradients, glossy shadows, neumorphism, and large blurred decorative shapes.

## Shapes

The core UI is square-edged: `{rounded.none}` for cards, buttons, inputs, labels, nav controls, and pricing panels. Softness comes from torn-paper silhouettes, cutout outlines, rotation, tape, and paper texture.

Allowed exceptions:

- Circular teacher/avatar crops if real testimonial/person metadata needs it.
- Circular icon anatomy inside an icon drawing.
- Tiny carousel dots or arrow controls only if a later real, accessible carousel/card rail is implemented.

Do not use pill badges for general metadata.

## Components

### Header

Paper raised header with brand left, nav centered on desktop, language/social controls right. Use Inter nav at `{typography.nav}` with 44px minimum targets. Hover is a green underline only. Focus uses `{components.focus-on-paper}` or `{components.focus-on-color}`. The pink bottom offset appears once and should be thinner than the current heavy stripe if it competes with the hero. A hamburger/menu icon is allowed on mobile only if it opens a real accessible menu; never show an inert menu glyph for decoration.

### Hero

Two-column editorial composition on desktop: copy and CTAs left, teacher cutout collage right. H1 is the only H1 and the strongest type moment on the page. Primary CTA uses `{components.primary-button}`; secondary CTA uses `{components.secondary-button}` and must not compete equally. Hero may use a paper sheet, one grid/torn-paper fragment, one proof/test card, and at most one small doodle or sticker. The second reference shows the mobile version correctly: copy and CTAs first, proof card next, teacher cutout lower on the screen, and decoration reduced. If the hero feels crowded, remove proof/decorative cards before shrinking the H1 or CTAs.

### Statistics Band

Dark-green confidence band with large Inter numerals and concise labels. Use fine-line icons only if they stay legible and do not create false stats. Torn top/bottom edges are appropriate here because the band is the main printed-paper divider. The band may support 3 or 4 items visually, but the implementation must preserve repository data unless a content update is approved.

### Program Cards

Quiet paper cards with fine-line icons or compact green icon blocks, H3 titles, body descriptions, and restrained hover/focus offsets. Desktop uses a 3 + 2 rhythm when preserving five repository programs, or equal-width rows if a later approved content update changes the count. 1024px uses 2 + 2 + 1; 768px uses 2 columns; 390px uses 1 column by default. A mobile peek/rail treatment like the second reference is optional only if it is accessible and does not hide required choice content. Pink may appear as a small edge, selected underline, or hover offset, not as a border around every card.

### How It Works

Calmer process section: concise H2/support copy plus numbered steps. The second reference's horizontal timeline is the preferred desktop pattern when space allows: four compact steps connected with dashed or hairline connectors. At tablet/mobile, collapse to a vertical list or accessible single-card step rail. Step numbers are dark-green circles or square blocks; titles use H3; descriptions use body. Add at most one arrow doodle or paper fragment. This section should lower uncertainty, not act like another hero.

### Teacher Cards

Preserve real/current teacher data and image URLs from `siteContent`. Cards use teacher photos as the focal point, 4:3 ratio, quiet paper body, H3 name, Inter role/meta, and optional small tags only if real data exists. The second reference supports a teacher-card rail visually, but do not add carousel behavior unless approved and accessible. Do not overlay stickers on faces or apply halftone filters to teacher portraits.

### Pricing Cards

Three-card comparison. One package can be featured with green fill and white text; non-featured cards stay paper-based. Prices use Inter, not condensed display. Desktop can use the second reference's centered featured-card emphasis with small pink stickers around it. Mobile may show the featured package first only if the ordering is intentional and content remains complete. CTA buttons should be present only if their destination and behavior are real. Pink recommendation labels are allowed only for a real highlighted package.

### Social Proof / Instagram

Use a mixed but calm layout: section text, 2-3 image/story cards if real or clearly placeholder, and one quote/testimonial card. The quote card can use a pink quote mark or small offset. The second reference's "student stories" card row and dark Instagram CTA block are useful composition references, but do not invent live Instagram feed behavior or testimonials.

### Contact Form

Two-column desktop: copy/channels left, paper form right. Inputs use persistent labels, square borders, and visible focus. The submit-style button stays visually primary but behavior remains whatever the app implements. Add tape detail above the form only if it does not cover labels or focus outlines.

### Footer

Deep-green footer with small brand text, copyright, existing nav anchors, existing social links, and real contact/legal links only when data exists. Use Inter small text. The second reference shows the right density: multi-column but calm, with enough contrast and no display typography. The footer should close the page quietly and must not introduce new claims, legal links, or contact methods without real content.

### Decorative System

Approved decorative language:

- Pink sticker labels.
- Small arrows and doodles in `{colors.accent-pink}`.
- Fine-line star/crown/spark doodles in `{colors.ink-primary}`.
- Torn-paper shapes in paper or dark green.
- Subtle grid-paper textures.
- Cutout photography with white sticker edges.
- Restrained rotations from -4deg to 4deg for labels/cards; up to 8deg for isolated stickers.
- Occasional tape details in `{colors.tape}`.

Limits:

- No more than 2-3 decorative accents in one major section.
- Decorative objects must be `aria-hidden`, non-interactive, and outside text/control safe zones.
- Pink remains an accent, not the default border treatment.
- Use consistent line thickness: 2px for doodles/icons, 1px for quiet dividers, 2px for buttons.
- Disable or simplify decoration below 768px; at 390px most sections should have only the sticker label.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Preserve cream, dark green, and pink as the identity palette | Introduce glossy gradients, generic SaaS blue, glass panels, or luxury-minimal styling |
| Use Oswald only for H1 and selected H2 | Add a third graffiti/handwritten font |
| Keep Inter for body, controls, cards, prices, forms, and footer | Set every label and card title in condensed uppercase |
| Make the hero expressive and the middle sections calmer | Give every section the same poster intensity |
| Use pink labels, small arrows, underlines, and occasional offsets | Put pink borders around every component |
| Preserve repository content and data structures | Copy generated placeholder teacher profiles, stats, prices, or testimonials from the reference image |
| Remove decoration first on tablet/mobile | Shrink readable content or allow overlap to keep decoration |
| Maintain visible focus and 44px targets | Treat printed shadows or hover motion as focus indicators |
| Use real links and real behavior only | Add fake level-test, checkout, carousel, form submission, or social-feed behavior |
| Use mobile rails only when they are accessible and approved | Copy carousel arrows/dots from the reference as inert decoration |
