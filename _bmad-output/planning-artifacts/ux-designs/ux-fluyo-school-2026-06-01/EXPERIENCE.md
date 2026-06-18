---
name: Fluyo School
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
  - src/components/ui/
  - src/data/siteContent.ts
  - public/
  - imports/site-template-style-reference.jpg
---

# Fluyo School - Experience Spine

## Foundation

Single-surface responsive web landing page implemented in Vue, Tailwind CSS, `@iconoir/vue`, and motion-aware local components. `DESIGN.md` is the visual identity reference; this spine owns information architecture, behavior, responsive layout, states, accessibility, and content implications.

Preserve the current bilingual Ukrainian/English behavior, section order, anchors, CTA destinations, teacher/profile content, pricing placeholders, contact channels, and static contact-form behavior unless a change is explicitly listed here. The redesign goal is refinement: cleaner hierarchy, more consistent grid use, better readability, larger conversion controls, reduced decoration, and intentional layouts at 1440px, 1024px, 768px, and 390px.

Requested screenshot input `docs/current-landing.png` was not found in the repository during this update. `docs/img.png` was present and inspected as the current landing screenshot. Findings are based on that screenshot, the current Vue implementation, current assets, existing UX spines, project context, and prior mock/reference artifacts.

## Information Architecture

| Surface | Reached from | Purpose | Redesign direction |
|---|---|---|---|
| Header | Page open / sticky navigation | Brand, section navigation, locale selection, social entry points | Keep sticky. Increase nav/control scale. Align to the same container as page content. |
| Hero | Page open | Explain the school and route visitors to contact/testing | Simplify decorative density, establish the single strongest H1 and dominant primary CTA. |
| Stats | Scroll | Summarize school highlights | Keep as a short confidence band; align content to grid and avoid extra poster noise. |
| Programs | Header / scroll | Present five learning paths | Redesign as 3 + 2 desktop grid with readable H3/body hierarchy. |
| Lesson flow | Scroll | Explain consultation, teacher match, plan, and Zoom lessons | Shorten the long heading and add step descriptions. |
| Teachers | Header / scroll | Present teacher profiles | Preserve profiles/photos; clean card rhythm and reduce competing accents. |
| Pricing | Header / scroll | Present lesson packages | Preserve placeholder warning meaning; show one featured package without making all cards loud. |
| Social proof | Scroll | Build trust through school positioning and testimonial | Keep quote/testimonial but reduce oversized decorative repetition. |
| Contact | Header, CTA buttons / scroll | Collect a contact request and expose direct channels | Keep direct channels visible; contact form remains static until separate functional work. |

Preserve existing anchors: `#top`, `#programs`, `#teachers`, `#prices`, `#contact`. Do not add new navigation layers, modals, carousels, drawers, or fake test-taking flows in this redesign.

Composition references remain secondary: [`mockups/home-selective-collage.html`](mockups/home-selective-collage.html) and [`mockups/stickers/review.html`](mockups/stickers/review.html). `DESIGN.md` and `EXPERIENCE.md` win on conflict.

## Voice and Tone

Microcopy should remain warm, direct, and useful for Ukrainian learners, parents, teens, children, and adult students. Keep the bilingual content structurally parallel.

Preserve existing copy unless one of these changes is needed for the redesign:

| Area | Allowed change | Reason |
|---|---|---|
| Hero | May keep copy unchanged | Current title and support text explain the offer clearly. |
| Programs | Keep item titles/text unchanged | Content is already concise enough once the layout changes. |
| Lesson flow heading | Shorten the current long heading | It currently behaves like a paragraph set as a display headline. |
| Lesson flow steps | Add descriptions under each step | Required to make the process section understandable and less poster-like. |
| Teacher heading | May shorten if needed | Current text says profiles are mock content; preserve the meaning without overloading H2. |
| Pricing heading | May remain explicit that prices are mock | Avoid implying real prices are verified. |
| Testing CTA | Keep routed to Contact | No actual test flow exists. Do not imply one. |

Suggested content direction for `lessonFlow` during implementation: change `steps: string[]` to structured items with `title` and `description`, in both `uk` and `en`.

## Component Patterns

| Component | Use | Behavioral rules |
|---|---|---|
| `site-shell` | Whole page | Keep one responsive page surface. No route changes. Inner content aligns to the 12-column grid in `DESIGN.md`. |
| `header-navigation` | Header | Anchor links retain smooth scroll. At desktop, links remain visible and larger than current. At `< lg`, preserve current behavior unless approved separately: hide anchor links, keep locale visible, and rely on scrolling. |
| `language-toggle` | Header | Switches all visible content in place. Preserve `aria-pressed`, full accessible names, and `<html lang>`. Minimum target follows `DESIGN.md`. |
| `social-icon-button` | Header / direct channels | Keep `@iconoir/vue`; do not introduce another icon set. Social icons route to existing contact behavior unless real URLs are supplied later. |
| `primary-button` | Hero, contact | Routes to existing contact destination. In hero it is the dominant CTA by size, fill, and order. |
| `secondary-button` | Hero secondary action | Routes to existing contact destination. Secondary action must not compete visually with primary. |
| `hero-visual` | Hero | Teacher image and paper sheet remain primary visual. Allow no more than two secondary decorative objects total in the hero: examples are one sticker and one grid fragment, or two stickers. |
| `hero-proof/test-card` | Hero | Current floating proof/video/testing blocks compete with the H1 and CTA. Consolidate or move them below the hero content if retained. Do not let them appear as equal CTAs. |
| `stats-band` | Stats | Preserve count-up behavior and reduced-motion safety. Align each stat to the grid; keep labels readable. |
| `section-heading` | All sections | Eyebrow + concise H2 + optional body support. Long explanations do not belong inside H2. |
| `program-card` | Programs | Five cards arranged 3 + 2 on desktop. Cards are scan-friendly, not cramped. No new click behavior. |
| `process-step` | Lesson flow | Number, short title, and one-sentence description. The whole step is informational, not clickable. |
| `teacher-card` | Teachers | Preserve image/name/role/text. Cards stack consistently and do not receive decorative stickers over portraits. |
| `pricing-card` | Pricing | Preserve three-package comparison. One package may be visually featured. No purchase/checkout behavior added. |
| `testimonial-card` | Social proof | Present quote/testimonial as trust content. Decorative quote mark can remain but must not dominate the section. |
| `contact-form` | Contact | Preserve static fields and non-submitting control. Keep persistent labels and direct contact channels. Submission lifecycle is separate functional scope. |
| `decorative-sticker` | Selected sections | Non-interactive, `aria-hidden="true"`, empty `alt=""`, and `pointer-events: none`. Use the approved family only. Hide before collision. |
| `grid-fragment` | Selected sections | Decorative only. One dominant grid fragment per section maximum, and never behind dense text. |
| `torn-paper-boundary` | Selected boundaries | Decorative only. Must not interfere with reading order, focus, pointer targets, or text zoom. |

## State Patterns

| State | Surface | Treatment |
|---|---|---|
| Default | All | Warm paper canvas, clean grid, restrained editorial accents. |
| Hero first view | Hero | H1, support copy, and primary CTA win the visual hierarchy. Decoration is secondary. |
| Navigation hover | Header | Green underline only; no filled hover background. |
| Interactive focus | Whole page | Every interactive target uses the visible focus treatment from `DESIGN.md`. |
| Button hover / press | CTA buttons | Small printed offset shift only. No aggressive motion. |
| Locale switched | Whole page | Replace copy in place while preserving scroll context and updating document language. |
| Program card hover | Programs | Optional subtle lift or offset emphasis. The card remains informational. |
| Form focus | Contact | Visible square focus treatment with AA contrast. |
| Contact static | Contact | Button remains non-submitting. Direct channels remain the practical fallback. |
| Reduced motion | Whole page | Disable reveal/parallax/floating while retaining all content and actions. |
| Missing decorative asset | Any | Layout still works without the asset; no broken visual dependency. |

## Interaction Primitives

- Click or tap header anchors to scroll to existing sections.
- Click or tap locale controls to switch language in place.
- Click or tap CTAs to reach the existing contact destination.
- Click or tap direct contact channels according to current behavior.
- Decorative stickers, grid fragments, torn edges, paper sheets, and dot fields are never interactive.
- Preserve reduced-motion handling for reveal, parallax, count-up, and decorative movement.
- Avoid hover-only information. Content needed to choose a program, teacher, or package must be visible by default.
- Avoid overlays, modal stacks, carousels, accordions, hamburger menus, or command surfaces unless a later approved scope adds them.

## Accessibility Floor

- Meet WCAG 2.2 AA for text, controls, focus indicators, and text reflow.
- Preserve semantic heading hierarchy: one H1, section H2s, card/step H3s.
- Keep DOM reading order aligned with the visual order at every breakpoint.
- All links, buttons, locale controls, social buttons, channel links, and form inputs remain keyboard reachable.
- Minimum pointer target: 44px for primary controls, language toggle, social buttons, and channel links.
- Decorative assets use `aria-hidden="true"` or empty alt text and `pointer-events: none`.
- Teacher photos keep meaningful alt text.
- Reduced-motion users receive complete content without parallax, reveal, or floating effects.
- Verify Ukrainian strings at 390px and 200% text zoom; long words and CTA labels must wrap without overlap or clipping.
- Do not use color alone to communicate active, hover, or focus states.

## Responsive & Platform

Responsive web only. No native app assumptions.

| Viewport | Header | Hero | Programs | Other sections |
|---|---|---|---|---|
| 1440px | Full nav visible, 44px+ targets, aligned to 1280px container | Two-column 12-grid layout; copy spans about 6 columns, visual spans about 6; max two secondary decorative objects | 3 cards first row, 2 cards second row, centered/aligned to grid | Two-column sections allowed when content benefits; section headings align consistently |
| 1024px | Full nav can remain if spacing works; otherwise current hidden-nav behavior is acceptable | Two-column or stacked depending on text fit; CTA row remains prominent | 2 + 2 + 1 rhythm | Avoid crowded side-by-side layouts; hide extra decoration first |
| 768px | Nav links hidden per current behavior; locale visible | Stacked layout; hero visual below copy; only one decorative object if any | 2-column grid | Most sections stack; card widths remain consistent |
| 390px | Brand + locale only; social icons optional/hidden as current | Single-column; H1 readable; CTAs stack or wrap cleanly; no competing floating cards | 1-column grid | 64px section rhythm; no off-canvas decoration; no horizontal scroll |

Decorative density rule: remove decoration before reducing content spacing or font readability. At tablet and mobile sizes, preserve CTA visibility and text flow first.

## Inspiration & Anti-patterns

- **Keep from prior direction:** torn paper, selective collage accents, square printed blocks, dark-green structure, pink accent, approved sticker family, teacher mascot, and readable paper surfaces.
- **Refine away:** too many hero decorations, five-card program row, overuse of condensed uppercase, inconsistent section grids, tiny nav/CTA scale, repeated pink offsets, and mixed decorative styles.
- **Rejected:** generic SaaS cards, gradients, glassmorphism, rounded pill UI, dense poster treatment in every section, carousels, fake form submission, fake level-test flow, and decorative assets that cover content.

## Key Flows

### Flow 1 - Parent compares programs (Oksana, parent of a teenager, evening on laptop)

1. Oksana opens the Ukrainian landing page at 1440px.
2. The hero presents the school promise, readable support copy, and one dominant trial-lesson CTA.
3. Decorative elements support the poster feel without competing with the CTA.
4. She clicks `Програми`.
5. The Programs section shows five paths in a 3 + 2 grid, so each card has enough room for title and description.
6. She continues through Teachers and Pricing without re-learning a new grid each section.
7. **Climax:** At Contact, Oksana understands that the manager helps choose the teacher and format, then uses a direct channel or the static form surface.

Failure path: if she expects the form to submit, current functionality does not support that; direct channels remain visible as the usable fallback.

### Flow 2 - Adult learner reviews on mobile (Andrii, adult learner, phone at 390px)

1. Andrii opens the site on a phone.
2. The header keeps brand and language controls visible without cramped nav links.
3. He switches to English; content changes in place and document language updates.
4. The hero stacks cleanly; CTA labels wrap if needed without clipping.
5. Programs become one column and process steps show short titles with descriptions.
6. Decorative assets are hidden or reduced before they crowd content.
7. **Climax:** Andrii reaches Contact with the same offer and actions available as desktop, without horizontal scrolling or blocked controls.

Failure path: if reduced motion is enabled, all sections remain visible and usable without reveal/parallax animation.

### Flow 3 - New learner follows the process (Iryna, unsure of her level, tablet at 768px)

1. Iryna reads the hero and understands she can start with a trial lesson or manager contact.
2. She scrolls to the lesson-flow section.
3. The section has a concise heading and four described steps: consultation, teacher match, personal plan, Zoom lessons.
4. She understands what happens after contacting the school without needing a separate FAQ.
5. **Climax:** The process description lowers uncertainty enough for her to use the primary CTA or contact channels.

Failure path: the existing testing CTA still routes to Contact. Do not create or imply a level-test interface until approved as separate functionality.
