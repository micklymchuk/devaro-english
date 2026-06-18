---
name: Devaro English
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
  - src/components/motion/
  - src/data/siteContent.ts
  - src/types/site.ts
  - public/
---

# Devaro English - Experience Spine

## Foundation

Single-surface responsive web landing page implemented in Vue 3, Tailwind CSS 4, `@iconoir/vue`, and local motion/decorative components. `DESIGN.md` is the visual identity reference and owns all color, typography, shape, spacing, card, and decorative rules. This spine owns information architecture, behavior, responsive section contracts, state handling, accessibility, and content constraints.

This is an update of an existing working project, not a greenfield design. Preserve the current bilingual Ukrainian/English behavior, section order, anchors, CTA destinations, teacher/profile content, pricing placeholders, contact channels, content data structures, and static contact form behavior unless a later implementation task explicitly approves a change.

Inspection performed for this update:

- `_bmad-output/project-context.md` was read. No `AGENTS.md` was found under the repository parent during the 2026-06-17 scan.
- Existing `DESIGN.md`, `EXPERIENCE.md`, and `.decision-log.md` were read.
- Current landing-page components, shared UI primitives, motion components, `src/assets/main.css`, `src/data/siteContent.ts`, `src/types/site.ts`, public assets, and rendered responsive screenshots at 1440px, 1024px, 768px, and 390px were inspected.
- The repository path requested by the user, `docs/design/devaro-landing-reference.png`, was not present. The available visual references are `docs/visual-source-of-truth.png` and `docs/visual-source-of-truth-2.png`.

The reference images control visual direction: casual street-editorial composition, cream/dark-green/pink palette, poster typography, sticker labels, torn-paper/collage details, calmer mid-page rhythm, restrained decoration, and responsive translation from desktop to mobile. They do not control production copy or data. The second reference is especially useful for mobile hierarchy, card preview rhythm, horizontal process timeline, richer footer structure, and simplified hero composition.

## Information Architecture

| Surface | Reached from | Purpose | Current / future status |
|---|---|---|---|
| Header | Page open / sticky navigation | Brand, nav anchors, locale, social entry points | Existing component. Keep sticky and aligned to the page container. |
| Hero | Page open | State the school promise and route to contact/trial action | Existing component. Highest expressive collage density. |
| Statistics | Scroll after hero | Fast trust/confidence band | Existing component. Preserve repository stats. |
| Programs | Header / scroll | Present learner paths | Existing component. Keep scan-friendly cards. |
| How it works | Scroll | Explain manager consultation, teacher match, plan, and Zoom lessons | Existing component named `LessonFlowSection`. |
| Teachers | Header / scroll | Show teacher/profile options | Existing component. Preserve profile data/images. |
| Pricing | Header / scroll | Show lesson packages or placeholders | Existing component. Preserve current placeholder status. |
| Social proof / Instagram | Scroll | Build warmth and trust | Existing component. Do not imply a live feed unless implemented. |
| Contact form | Header, CTAs / scroll | Collect intent and expose direct channels | Existing component. Form stays static until functional scope changes. |
| Footer | Bottom of page | Quiet close with brand, copyright, anchors, and social links | Not currently implemented in `App.vue`; document as intended future section using existing content only. |

Preserve anchors already used by the app: `#top`, `#programs`, `#teachers`, `#prices`, `#contact`. Do not add new routes, modals, checkout, a real level-test flow, or live social-feed behavior as part of this design update.

## Voice and Tone

Microcopy remains warm, practical, and direct. It should support Ukrainian learners, parents, teens, children, and adult students without becoming childish or overly corporate. Brand voice lives in `DESIGN.md`; this section governs content behavior.

| Do | Don't |
|---|---|
| Preserve the repository's real Ukrainian/English content and structure. | Copy generated placeholder phrases from the reference image. |
| Make uncertainty-reducing copy explicit, especially in How it works and Contact. | Add fake guarantees, invented success rates, or unverifiable testimonials. |
| Keep CTAs honest about their destination. | Label a CTA as a real test, checkout, or submission if it only routes to Contact. |
| Keep labels concise and body copy useful. | Put long explanations inside display headings. |
| Keep both locales structurally parallel in `siteContent`. | Add fields to one locale only. |

Production content that must not be taken literally from the generated reference image:

- Temporary teacher profile names, roles, tags, or descriptions.
- Prices, package counts, or recommendation labels.
- Invented statistics, including any fourth stat or "1000+" style claim not present in repository data.
- AI-generated testimonials or parent/student quotes.
- Internal notes such as "replace later" phrased as public production copy, unless the repository already intentionally marks content as mock.
- Social proof images, Instagram feed behavior, or real contact URLs.
- Level-test behavior or test copy that implies a separate working flow.
- Mobile hamburger menus, carousel dots/arrows, extra package badges, and extra footer/contact links unless real behavior and content are implemented.

## Component Patterns

Behavioral specs live here. Visual specs reference `DESIGN.md` tokens.

| Component | Use | Behavioral rules |
|---|---|---|
| `site-shell` | Whole page | One responsive page. No route changes. Inner content follows `{spacing.container-max}` and the grid in `DESIGN.md`. |
| `header-navigation` | Header | Anchor links smooth-scroll to existing sections. Desktop nav visible when it fits. Tablet/mobile may hide nav links and keep brand + locale. |
| `language-toggle` | Header | Switches all visible content in place. Preserve `aria-pressed`, accessible names, and `<html lang>`. |
| `menu-trigger` | Mobile header, if added | Allowed only if it opens a real accessible menu with existing anchors. Do not render an inert hamburger icon. |
| `social-icon-button` | Header/footer | Uses `@iconoir/vue`. Link to existing contact behavior unless real social URLs are supplied. |
| `primary-button` | Hero/contact/pricing if real | Routes to existing destination. Hero primary is visually dominant. |
| `secondary-button` | Hero/direct channels | Supports the primary action without equal visual weight. |
| `section-heading` | All sections | Sticker label + concise H2 + optional support copy. Long details move to body text. |
| `hero-visual` | Hero | Teacher cutout is primary. Floating proof/test cards are secondary and may be removed or consolidated if hierarchy suffers. |
| `stats-band` | Stats | Preserve count-up behavior and reduced-motion safety. Never invent stats from the reference. |
| `program-card` | Programs | Informational only. Hover/focus may add a restrained offset; all choice content visible by default. |
| `process-step` | How it works | Number + H3 title + body description. Informational, not clickable. |
| `teacher-card` | Teachers | Preserve photo/name/role/text. No stickers over faces. No halftone filter on real portraits. |
| `pricing-card` | Pricing | Three-package comparison. One featured card allowed. No purchase behavior unless implemented. |
| `card-rail` | Optional mobile/tablet card-heavy sections | Optional future pattern inspired by `visual-source-of-truth-2.png`. Must be keyboard-operable, screen-reader labeled, swipe/tap accessible, and must not hide required content from non-JS/reduced-motion users. |
| `testimonial-card` | Social proof | Quote content stays static and truthful to repository content. Decorative quote mark is non-interactive. |
| `contact-form` | Contact | Persistent labels and controlled input values. Button remains non-submitting while `type="button"` is used. |
| `footer` | Footer | Reuse existing nav/social content. No new legal/contact links without data. |
| `decorative-sticker` | Selected sections | Non-interactive, `aria-hidden="true"` or empty alt, `pointer-events: none`, hidden before collision. |
| `grid-fragment` / `torn-paper` / `tape` | Selected sections | Decorative only. Must not affect reading order, focus order, pointer targets, or text zoom. |

## State Patterns

| State | Surface | Treatment |
|---|---|---|
| Default | Whole page | Warm paper background, dark-green structure, restrained pink accent. |
| Hero first view | Hero | H1, support copy, and primary CTA win hierarchy. Decoration supports but does not compete. |
| Navigation hover | Header/footer | Green underline only; no filled hover background. |
| Interactive focus | Whole page | Use `{components.focus-on-paper}` or `{components.focus-on-color}` from `DESIGN.md`. Printed shadows are not focus indicators. |
| Button hover/press | Buttons | Small printed-offset shift or color deepening. No aggressive motion. |
| Program card hover/focus | Programs | Optional subtle lift or pink offset. Content stays readable and stable. |
| Locale switched | Whole page | Replace copy in place, preserve scroll context, update document language. |
| Form focus | Contact | Square focus outline with AA contrast; no layout shift. |
| Contact static state | Contact | Direct channels remain visible as practical fallback. Do not show fake success. |
| Reduced motion | Whole page | Disable reveal, parallax, floating, and count-up animation while preserving content. |
| Missing decorative asset | Any | Content layout still works; hide the broken decorative object. |
| Narrow viewport collision risk | Tablet/mobile | Remove decoration before shrinking type, spacing, or controls below spec. |
| Card rail active, if implemented | Programs/Teachers/Pricing/Social proof | Arrow/dot controls indicate position and are real controls with labels. Static screenshots may show rails, but implementation must remain accessible. |

## Interaction Primitives

- Click/tap header and footer anchors to scroll to existing sections.
- Click/tap locale controls to switch language in place.
- Click/tap CTAs to reach the existing contact destination unless real alternative behavior is added later.
- Click/tap direct contact channels according to current behavior.
- Decorative stickers, torn edges, paper sheets, grid fields, arrows, doodles, tape, and dot fields are never interactive.
- Preserve reduced-motion handling in `RevealOnScroll`, count-up, parallax/decorative movement, and interactive paint effects.
- Avoid hover-only information. Users must be able to choose a program, teacher, or package without hovering.
- Avoid overlays, modal stacks, carousels, accordions, drawers, command palettes, checkout, or fake test-taking flows unless later approved. If a mobile rail or menu is approved, it must be real behavior with keyboard, touch, and screen-reader support.

## Accessibility Floor

- Meet WCAG 2.2 AA for text, controls, focus indicators, and text reflow.
- Preserve semantic heading hierarchy: one H1, section H2s, card/step H3s.
- DOM reading order must match visual order at 1440px, 1024px, 768px, and 390px.
- All links, buttons, locale controls, social buttons, channel links, and inputs remain keyboard reachable.
- Minimum pointer target: 44px for nav links, buttons, language controls, social buttons, channel links, and form controls.
- Decorative assets use `aria-hidden="true"` or empty alt text and `pointer-events: none`.
- Teacher photos keep meaningful alt text.
- Reduced-motion users receive complete content without reveal/parallax/floating animation.
- Verify Ukrainian strings at 390px and 200% text zoom. Long headings and CTA labels must wrap without clipping or horizontal scroll.
- Do not use color alone for active, hover, focus, selected, or featured states.
- Fine-line icons and doodles must maintain visible contrast and should not be the only label for a section or action.

## Responsive & Platform

Responsive web only. No native-app assumptions.

| Viewport | Header | Hero | Cards / grids | Decoration |
|---|---|---|---|---|
| 1440px | Brand, nav, locale, social visible in `{spacing.container-max}` | Two-column 12-grid; copy about 5-6 columns, visual 6-7 columns | Programs 3 + 2; teachers/pricing 3 columns; contact/social can be 2 columns | Hero can use 2-3 accents; other sections max 1-2. |
| 1024px | Full nav only if it fits without crowding; otherwise hide nav links | Two-column allowed only if H1/CTA remain clear | Programs 2 + 2 + 1; teacher/pricing may stay 3 if readable or drop to 2 | Remove extra stickers before reducing content. |
| 768px | Brand + locale primary; social optional | Stacked hero; visual below copy | Programs 2 columns; most sections stack; contact form below copy | Keep at most one decorative object per section. |
| 390px | Brand + locale; no cramped nav | Single-column; CTAs stack or wrap cleanly; H1 max 6-7 visual lines | All card groups 1 column; 64px section rhythm | Usually sticker label only. No off-canvas decoration or horizontal scroll. |

`visual-source-of-truth-2.png` shows mobile card rails for programs, teachers, pricing, and stories. Treat that as an optional pattern, not a requirement. The default implementation may stack cards; if rail behavior is chosen later, each rail must expose all content without relying on hover or decoration-only controls.

## Section Specifications

### 1. Header

- **Layout:** Sticky paper header inside the outer page frame, aligned to the same container as content.
- **Hierarchy:** Brand lockup first, nav anchors second, locale/social controls third.
- **Spacing:** 12-16px vertical padding; 24-32px desktop gaps; 44px minimum targets.
- **Typography:** Inter nav at `{typography.nav}`. Brand can be bold Inter with green accent.
- **Cards/controls:** Language toggle is a compact square segmented control; social buttons are square icon buttons.
- **Decoration:** Single pink bottom offset or hairline only. Do not stack multiple header shadows.
- **Responsive:** Hide nav links before they wrap; keep brand and locale visible at 390px. A hamburger/menu icon is acceptable only when it opens an accessible list of existing anchors.
- **Hover/focus:** Nav hover uses underline. Focus uses `DESIGN.md` focus tokens.
- **Content constraints:** Use existing nav labels and anchors only.

### 2. Hero

- **Layout:** Desktop two-column editorial split. Mobile single-column copy, CTAs, proof/support, then teacher visual, matching the simplified order in `visual-source-of-truth-2.png`.
- **Hierarchy:** Eyebrow sticker, H1, support text, primary CTA, secondary CTA, optional proof/test support, visual collage.
- **Spacing:** 64-88px top/bottom desktop; 48-64px mobile; CTA gap 12-16px.
- **Typography:** H1 uses `{typography.h1}` only here. Body uses `{typography.body}`.
- **Cards/controls:** Primary CTA must outweigh secondary. Proof/test card must not become a third primary CTA.
- **Decoration:** Teacher cutout plus paper sheet, one green grid/torn patch, and at most one doodle/sticker. Remove extras on tablet/mobile.
- **Responsive:** At 390px H1 wraps cleanly, CTAs stack, proof/support cards remain below the CTAs, and floating cards do not overlap the teacher.
- **Hover/focus:** CTA hover is printed-offset shift; focus is visible and independent of shadow.
- **Content constraints:** Preserve repository hero copy and CTA destinations. Do not imply a real level test unless implemented.

### 3. Statistics

- **Layout:** Full-width green band within the page frame; items divided evenly.
- **Hierarchy:** Large Inter stat value, short label, optional fine-line icon if real and readable.
- **Spacing:** 24-32px vertical padding desktop; 20-24px mobile.
- **Typography:** Values use heavy Inter, not Oswald. Labels use Inter small/body.
- **Cards/controls:** No cards or interactions; count-up is decorative enhancement only.
- **Decoration:** Torn top/bottom edge allowed. No extra stickers needed.
- **Responsive:** 3 or 4 columns desktop depending on repository data; 2-column compact grid on mobile is acceptable if labels remain readable, otherwise stack.
- **Hover/focus:** None. Band is informational.
- **Content constraints:** Preserve existing stats. Do not add "1000+" or any reference-image statistic without approval.

### 4. Programs

- **Layout:** Section heading above a card grid. Desktop 3 + 2 when preserving five programs; if a later approved content update changes to six programs, use a balanced six-card grid. 1024px 2 + 2 + 1, 768px 2 columns, 390px 1 column or approved accessible rail.
- **Hierarchy:** Sticker eyebrow, concise H2, optional support copy, then cards.
- **Spacing:** 72-88px section padding desktop, 64px mobile; 24px card gaps desktop, 16px mobile.
- **Typography:** H2 from `{typography.h2}`; card titles use `{typography.h3}`; descriptions use `{typography.body}`.
- **Cards/controls:** Informational cards. No click behavior unless a later approved scope adds filters, anchors, or accessible rail controls.
- **Decoration:** One sticker or fine-line doodle max. Card icons should be fine-line or compact green blocks, consistent across all cards.
- **Responsive:** Cards must not rely on fixed heights that clip Ukrainian text.
- **Hover/focus:** Optional subtle lift/offset; all text visible by default.
- **Content constraints:** Preserve program names and descriptions from `siteContent`.

### 5. How It Works

- **Layout:** Preferred desktop pattern is the second reference's horizontal timeline: concise heading/support followed by four compact connected steps. If content length is too long, use the existing split layout. Mobile stacks heading then steps or uses an approved single-card step rail.
- **Hierarchy:** Eyebrow, H2, short explanatory body, ordered step list, optional manager CTA.
- **Spacing:** 72-96px section padding desktop; 64px mobile. Timeline gaps 24-32px desktop; stacked step rows 16-24px.
- **Typography:** H2 is display but shorter than hero; step titles H3; descriptions body.
- **Cards/controls:** Step list is informational. CTA routes to Contact if present.
- **Decoration:** One arrow doodle or paper grid fragment only.
- **Responsive:** Number blocks and text align without forcing descriptions into narrow columns. A horizontal timeline must collapse before step text becomes cramped.
- **Hover/focus:** No hover state for non-clickable steps. CTA follows button rules.
- **Content constraints:** Current structured `steps: { label, text }[]` should stay bilingual and parallel.

### 6. Teachers

- **Layout:** Three-card desktop grid or card rail with visible adjacent cards. Two columns if needed at tablet, one column on mobile unless an accessible rail is approved.
- **Hierarchy:** Eyebrow, H2, optional support, teacher cards.
- **Spacing:** 24px card gap desktop, 16px mobile; card body 24-32px desktop.
- **Typography:** Names H3; roles/body in Inter. Do not use condensed uppercase for role paragraphs.
- **Cards/controls:** Photo 4:3, then text. Cards are informational unless real profile links are added.
- **Decoration:** No stickers over faces. Card accents must not compete with portrait.
- **Responsive:** Portraits crop safely at all widths.
- **Hover/focus:** If cards are not links, do not make them keyboard-focusable. If linked later, provide visible focus.
- **Content constraints:** Preserve current teacher data and mark mock status only where repository content already does.

### 7. Pricing

- **Layout:** Three-card comparison on desktop; stacked on mobile by default. An approved mobile pricing rail may feature the recommended package first, but all packages must remain reachable.
- **Hierarchy:** Eyebrow, H2, packages, optional CTA only if behavior is real.
- **Spacing:** Equal card heights per row, 24px gaps desktop, 16px mobile.
- **Typography:** Package names/counts/prices use Inter. Prices can be large but not display-condensed.
- **Cards/controls:** One featured package may use green fill. Others are paper-based.
- **Decoration:** Small pink recommendation sticker only when the highlighted package is intentional.
- **Responsive:** Preserve price readability and avoid cramped CTA rows.
- **Hover/focus:** Pricing cards without links have no interactive hover; buttons follow button rules.
- **Content constraints:** Preserve pricing placeholders. Do not copy generated reference prices as verified.

### 8. Social Proof / Instagram

- **Layout:** Text block, optional student-story card row/thumbnail strip, one quote/testimonial card, and optional Instagram CTA block if the destination is real.
- **Hierarchy:** Eyebrow, H2, support text, media/proof, quote.
- **Spacing:** 72-88px desktop, 64px mobile.
- **Typography:** H2 display; quote text uses heavy Inter, not oversized H1 styling.
- **Cards/controls:** Quote/story cards are quiet paper cards with one accent. Instagram button/link only if destination is real or existing contact fallback. Do not fake live feed refresh or swipe behavior.
- **Decoration:** Pink quote mark or small doodle, not both at high intensity.
- **Responsive:** At 390px, stack thumbnails and quote without horizontal scroll.
- **Hover/focus:** Real links get visible focus; static proof has no hover.
- **Content constraints:** Do not imply a live Instagram feed or real testimonial source unless supplied.

### 9. Contact Form

- **Layout:** Desktop two-column: explanation/channels left, form right. Mobile stacks copy, channels, form.
- **Hierarchy:** Eyebrow, H2, body text, direct channel links, form.
- **Spacing:** 24px between body and channels, 16px form gap, 24-32px form padding.
- **Typography:** H2 display; labels and inputs Inter.
- **Cards/controls:** Inputs have persistent labels. Button remains `type="button"` until submission behavior is implemented.
- **Decoration:** Optional tape above form or small globe sticker. Hide if it overlaps labels or button.
- **Responsive:** Form controls full width at 390px. Direct channels wrap with 44px targets.
- **Hover/focus:** Channel links and button use printed hover; inputs use square focus outline.
- **Content constraints:** Preserve fields and static behavior. Do not show success/error lifecycle without implementation.

### 10. Footer

- **Layout:** Deep-green full-width footer inside the page frame with container-aligned brand, short school description if real, nav, programs list if current content supports it, contact details if real, copyright, and social links.
- **Hierarchy:** Brand left/top, nav anchors middle, social links right/bottom depending on viewport.
- **Spacing:** 24-32px vertical padding desktop, 20-24px mobile.
- **Typography:** Inter small/body. No display typography.
- **Cards/controls:** No cards. Social buttons may be icon-only with accessible labels.
- **Decoration:** None or one tiny pink underline/accent. Footer should be calmer than every content section.
- **Responsive:** Stack brand, nav, and social links at 390px with readable tap targets.
- **Hover/focus:** Links underline on hover and use visible focus.
- **Content constraints:** Current implementation has no footer. When added, reuse existing content only and do not invent legal/contact links. `visual-source-of-truth-2.png` shows a fuller footer; copy its density and alignment, not its unsupported links.

## Reference Interpretation Notes

What to lift from `docs/visual-source-of-truth.png`:

- Cream canvas with dark-green structure and pink sticker accents.
- Hero composition: huge condensed promise, teacher cutout, paper sheet, green patch, proof/test support objects.
- Section rhythm: expressive hero, strong stat band, calmer card sections, editorial split for process/contact.
- Card treatment: square cards, light paper surfaces, selective pink edges/offsets, compact icons.
- Decorative language: sticker labels, arrows, torn paper, tape, grid texture, controlled rotations.

What to lift from `docs/visual-source-of-truth-2.png`:

- Desktop + mobile pairing as the clearest responsive reference.
- Simpler mobile hero order: label, H1, copy, CTAs, proof, teacher image.
- Torn green stat band with compact mobile grid.
- Fine-line icon program cards with a restrained pink underline/edge.
- Horizontal desktop process timeline with compact numbered steps.
- Teacher/pricing/story sections that can visually preview adjacent cards on mobile, if implemented accessibly.
- Richer deep-green footer with real navigation/contact structure.

What not to lift:

- Any generated text that contradicts `siteContent`.
- Temporary teacher names/profiles/prices/stats/testimonials.
- A fourth statistic or any unsupported claim.
- A real Instagram feed, real checkout, real form submission, or real test flow.
- Inert hamburger icons, fake carousel arrows/dots, unsupported legal links, or unsupported contact details.
- Pink around every card or excessive decoration in all sections.

## Inspiration & Anti-patterns

- **Keep:** street-editorial energy, cutout teacher imagery, square print blocks, dark-green confidence, pink label accents, torn-paper/collage texture, fine doodles, and a warmer learning-site tone.
- **Refine:** reduce overuse of condensed uppercase, reduce hero competition, calm the middle sections, make spacing consistent, make card icons more intentional, make mobile layouts feel intentionally designed, and make decoration breakpoint-aware.
- **Reject:** generic SaaS layout, glossy/luxury minimalism, childish classroom graphics, one-note beige, dominant purple/blue gradients, rounded pill systems, fake flows, and copied AI placeholder content.

## Key Flows

### Flow 1 - Parent compares programs (Oksana, parent of a teenager, evening on laptop)

1. Oksana opens the Ukrainian landing page at 1440px.
2. Header, hero, and primary CTA are immediately clear.
3. Decoration establishes the school personality without competing with the promise.
4. She clicks `Програми`.
5. Programs appear as spacious cards with readable learner paths and descriptions.
6. She scans Teachers, Pricing, and How it works without learning a new layout language each time.
7. **Climax:** At Contact, Oksana understands that a manager helps pick the teacher and format, then uses a direct channel or the visible form surface.

Failure path: if she expects the form to submit, current functionality does not support that. Direct channels remain visible as the practical fallback.

### Flow 2 - Adult learner reviews on mobile (Andrii, adult learner, phone at 390px)

1. Andrii opens the site on a phone.
2. Header keeps brand and language control visible without cramped nav.
3. He switches to English; content changes in place and document language updates.
4. Hero stacks cleanly; CTA labels wrap without clipping.
5. Programs and process steps become one column with full descriptions visible.
6. Decorative assets disappear before they crowd content.
7. **Climax:** Contact presents the same offer and actions as desktop without horizontal scrolling or blocked controls.

Failure path: if reduced motion is enabled, all sections remain visible and usable without reveal/parallax animation.

### Flow 3 - New learner follows the process (Iryna, unsure of her level, tablet at 768px)

1. Iryna reads the hero and understands she can start with contact or a trial lesson.
2. She scrolls to How it works.
3. The section has a concise heading and four described steps: consultation, teacher match, personal plan, Zoom lessons.
4. She understands what happens after contacting the school without needing a separate FAQ.
5. **Climax:** The process description lowers uncertainty enough for her to use the primary CTA or contact channels.

Failure path: any testing CTA still routes to Contact until a separate approved test interface exists.
