---
name: Devaro English
status: final
updated: 2026-06-01
sources: []
---

# Devaro English - Experience Spine

## Foundation

Single-surface responsive web landing page implemented in Vue and Tailwind CSS. Preserve the existing information architecture, bilingual Ukrainian/English locale behavior, content, and site logic. `DESIGN.md` is the visual identity reference; this spine owns behavior and experience.

## Information Architecture

| Surface | Reached from | Purpose |
|---|---|---|
| Header | Page open / sticky navigation | Brand, section navigation, locale selection, social entry points |
| Hero | Page open | Explain the school and route visitors to contact or testing |
| Stats | Scroll | Summarize school highlights |
| Programs | Header / scroll | Present learning paths |
| Lesson flow | Scroll | Explain the matching and lesson process |
| Teachers | Header / scroll | Present teacher profiles |
| Pricing | Header / scroll | Present lesson packages |
| Social proof | Scroll | Build trust through school positioning and testimonial |
| Contact | Header, CTA buttons / scroll | Collect a contact request and expose direct channels |

Preserve the existing section order and anchors. Decorative collage treatments must not create extra navigation layers or alter surface purpose.

Composition reference: [`mockups/home-selective-collage.html`](mockups/home-selective-collage.html). Sticker-family reference: [`mockups/stickers/review.html`](mockups/stickers/review.html). The spines win on conflict.

Current behavior provenance: the existing Vue landing page and `.decision-log.md`. This styling-only redesign preserves existing interaction logic. The contact submit control has no submission lifecycle yet, and the hero testing CTA currently routes to Contact.

## Voice and Tone

Preserve the existing Ukrainian and English copy. The redesign changes presentation, not message. Microcopy should remain direct, warm, and understandable to students and parents. Avoid corporate language and avoid children-only language.

## Component Patterns

| Component | Use | Behavioral rules |
|---|---|---|
| `header-navigation` | Header | Anchor links retain smooth scroll. Hover adds underline only. At `< lg`, preserve current behavior: hide the anchor-link group without adding a menu; locale selection remains visible and all sections remain reachable by scrolling. |
| `language-toggle` | Header | Switches complete visible content in place. Buttons expose full accessible names (`Українська`, `English`) and selected state; update `<html lang="uk">` / `<html lang="en">`. |
| `primary-button` | Hero, contact, conversion prompts | Routes to the existing contact destination. Visual press treatment may shift the offset shadow; action semantics remain unchanged. |
| `secondary-button` | Hero and secondary conversion prompts | Routes to the existing contact destination. Remains visually subordinate to `primary-button`. |
| `text-badge` | Hero and selected section headings | Both pink and green visual variants are decorative emphasis only. Never behaves like a control. |
| `paper-card` | Programs, pricing, social proof, contact | Groups existing content. No new click behavior unless already present. |
| `teacher-card` | Teachers | Displays existing photo, name, role, and description. No portrait replacement or filtering. |
| `decorative-sticker` | Selected sections | Non-interactive, `aria-hidden="true"`, empty `alt=""` when rendered as `<img>`, and `pointer-events: none`. Placement must not obscure copy, controls, or teacher imagery. |
| `torn-paper-boundary` | Hero and selected section boundaries | Decorative only, `aria-hidden="true"`, and `pointer-events: none`. Must not interfere with pointer targets or reading order. |
| `grid-fragment` | Hero and selected section boundaries | Decorative only, `aria-hidden="true"`, and `pointer-events: none`. Reduce or hide responsively before it crowds content. |
| `contact-form` | Contact | Preserve current static fields and non-submitting control. Keep persistent labels. Styling changes only; submission lifecycle is a separate functional scope. Direct contact channels remain available. |

## State Patterns

| State | Surface | Treatment |
|---|---|---|
| Default | All | Warm paper canvas, readable hierarchy, selective collage accents. |
| Navigation hover | Header | Green underline only; no background fill. |
| Interactive focus | Whole page | Every link, button, locale control, channel link, and field receives the DESIGN.md focus outline. Do not rely on hover, color-only change, or backing shadow. |
| Button hover / press | CTA buttons | Restrained tactile shift through offset shadow and translation. Do not animate aggressively. |
| Locale switched | Whole page | Replace visible copy in place while preserving scroll context; expose selected locale and update document `lang`. |
| Form focus | Contact | Clearly visible square-edged focus treatment with AA contrast. |
| Contact static | Contact | Current scope has no submit lifecycle. Form control remains non-submitting; direct contact channels provide the usable fallback. |
| Reduced motion | Whole page | Disable floating, reveal, and parallax motion while retaining complete content. |

## Interaction Primitives

- Click or tap anchor links to smooth-scroll to existing sections.
- Click or tap locale controls to switch content in place.
- Click or tap CTAs to reach the existing contact destination.
- Decorative stickers, torn-paper edges, and grid fragments are never interactive.
- Preserve reduced-motion handling for floating and reveal effects.
- Under `prefers-reduced-motion: reduce`, use `scroll-behavior: auto` and remove nonessential button translation.
- Avoid new overlays, carousels, modal flows, or hover-only information.

## Accessibility Floor

- Meet WCAG 2.2 AA for text, controls, and focus indicators.
- Keep semantic heading hierarchy and existing section landmarks.
- Mark decorative stickers and collage layers as hidden from assistive technology.
- Maintain keyboard access for navigation, locale selection, buttons, contact channels, and form inputs.
- Preserve visible focus indicators on square-edged controls.
- Use at least `24x24px` CSS pointer targets; target `44x44px` for primary controls, locale controls, and direct contact channels.
- Honor `prefers-reduced-motion`; content must remain complete without parallax or reveal animation.
- Confirm Ukrainian and English strings remain readable in condensed headings; use the readable body face everywhere else.

## Responsive & Platform

| Breakpoint | Behavior |
|---|---|
| Desktop | Preserve the wide landing-page composition. Allow selected stickers and grid fragments around negative space. |
| Tablet | Stack complex two-column areas when needed. At `< lg`, hide the header anchor-link group as the current site does. Reduce sticker count before reducing content spacing. |
| Mobile | Single-column content. Keep locale selection visible, keep torn-paper boundaries simple, and use only a few stickers where they do not overlap text or CTAs. |

Responsive rule: decorative density decreases with viewport size. Content and conversion controls always win over decoration. Verify at `320px` CSS width, 200% text zoom, and reflow without horizontal scrolling or covered controls.

## Inspiration & Anti-patterns

- **Lifted from supplied banner:** torn-paper layers, photocopy-style sticker cutouts, dark grid fragments, green structure, pink accents, bold condensed type, and compact printed labels.
- **Rejected from supplied banner:** copying the poster's composition or words, applying poster density to every section, and using text badges with excessive padding.
- **Rejected from first preview:** corporate header chrome, filled navigation hover backgrounds, mixed rounded and sharp component styles, rounded UI controls, and outlined secondary cards.

## Key Flows

### Flow 1 - Find a suitable program (Oksana, parent of a teenager, reviewing options after work)

1. Oksana opens the landing page in Ukrainian.
2. The hero explains individual online lessons and offers a clear trial-lesson CTA.
3. She uses the header link to reach Programs.
4. She reads the existing learning-path cards without decorative elements interrupting scanning.
5. She continues to Teachers and Pricing.
6. **Climax:** Oksana reaches Contact and selects an existing direct contact channel. The visible form remains a static styling surface until submission logic is added in a separate functional scope.

Failure path: if Oksana expects form submission, the current static control does not send data; direct contact channels remain visible as the usable fallback. If motion is reduced or unsupported, all sections and actions remain visible and usable without animation.

### Flow 2 - Review the school in English (Andrii, adult learner comparing lesson options on mobile)

1. Andrii opens the site on a phone.
2. He switches the locale from Ukrainian to English using the header control.
3. The visible content changes in place without losing his current context.
4. He scrolls through the single-column Programs, Lesson flow, Teachers, and Pricing sections.
5. Decorative density remains low enough that text and CTAs are unobstructed.
6. **Climax:** Andrii taps the existing contact CTA and reaches the Contact section with English copy.

Failure path: on a narrow screen, stickers are reduced or hidden before any content, navigation, or CTA becomes crowded.

### Flow 3 - Follow the current testing prompt (Iryna, new learner unsure of her level)

1. Iryna reads the testing prompt in the hero.
2. She activates the existing testing CTA.
3. The current site routes her to Contact rather than a separate test surface.
4. **Climax:** Iryna reaches the direct contact channels and can ask the manager how to start.

Failure path: no separate level-test flow exists in the current scope. Do not imply that the redesign adds one.
