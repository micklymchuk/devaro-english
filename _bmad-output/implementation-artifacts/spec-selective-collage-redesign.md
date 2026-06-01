---
title: 'Selective Collage Redesign'
type: 'feature'
created: '2026-06-01'
status: 'done'
baseline_commit: '47ef3e71c2e81aa1c2efeb8a989a93181cd23ed9'
context:
  - '{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-devaro-english-2026-06-01/DESIGN.md'
  - '{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-devaro-english-2026-06-01/EXPERIENCE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The current rounded education-site styling does not match the approved Devaro English visual direction. It needs a selective collage identity that feels energetic for students, teens, children, and adults without becoming childish or corporate.

**Approach:** Restyle the existing responsive Vue landing page using the finalized UX spine: warm paper surfaces, lighter green structure, pink offset layers, square printed blocks, condensed uppercase headings, torn-paper accents, dark grid fragments, and the approved decorative sticker family. Preserve content, section order, teacher photos, locale behavior, and existing interaction scope.

## Boundaries & Constraints

**Always:** Treat `DESIGN.md` and `EXPERIENCE.md` as the visual and behavioral contract. Keep Ukrainian and English copy unchanged. Keep existing teacher portraits unchanged. Use approved transparent stickers only as non-interactive decoration with empty alt text, `aria-hidden`, and `pointer-events: none`. Keep decoration behind content and reduce or hide it before mobile collisions. Use square edges for cards, controls, badges, and panels. Use green underline-only nav hover. Keep visible focus outlines and reduced-motion behavior.

**Ask First:** Any content rewrite; any new page, modal, menu, route, dependency, or contact submission behavior; replacing teacher imagery; changing existing CTA destinations.

**Never:** Copy the reference banner composition or words. Do not reintroduce rounded UI cards, pill controls, outlined content cards, white text on pink, halftone filters on teacher photos, dense decoration in every section, or logic changes outside locale document-language synchronization.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|---------------|----------------------------|----------------|
| Locale switch | User selects UA or EN | Visible copy switches in place and `<html lang>` becomes `uk` or `en` | Preserve current locale if no valid locale is emitted |
| Reduced motion | `prefers-reduced-motion: reduce` | Content remains visible; smooth scrolling, decorative movement, reveal displacement, and nonessential button translation are disabled | Decoration remains static or hidden |
| Narrow viewport | 320px viewport or 200% text zoom | Single-column content remains readable with no covered CTAs or horizontal overflow | Hide lower-priority stickers before content is crowded |

</frozen-after-approval>

## Code Map

- `src/assets/main.css` — theme tokens, font loading, paper/grid/torn-edge utilities, global focus and reduced-motion rules.
- `src/components/ui/*` — shared square-edged cards, buttons, inputs, channel links, headings, and locale controls.
- `src/components/sections/*` — section-level paper composition, sticker placement, and selective collage accents.
- `src/App.vue` and `index.html` — page frame and synchronized document language.
- `public/stickers/*` — approved transparent decorative sticker assets promoted from UX mockups.

## Tasks & Acceptance

**Execution:**
- [x] `public/stickers/*` and `src/components/motion/DecorativeStickerField.vue` — promote the five approved PNGs and add a reusable decorative sticker layer with responsive hiding and assistive-technology exclusion.
- [x] `src/assets/main.css` — implement approved palette, Oswald/Inter typography, paper layers, grid fragments, torn boundaries, square focus treatment, and reduced-motion safeguards.
- [x] `src/components/ui/*` and `src/components/layout/SiteHeader.vue` — align shared primitives and header navigation with square printed-block styling, pink paper backing, compact badges, accessible locale state, and underline-only nav hover.
- [x] `src/components/sections/*` and `src/App.vue` — apply selective collage composition across existing sections, place stickers only in safe zones, remove rounded panel language, and synchronize `<html lang>`.
- [x] `index.html` — set the initial document language to Ukrainian.

**Acceptance Criteria:**
- Given the landing page loads, when a visitor scans desktop and mobile layouts, then the existing content hierarchy remains intact while selective torn-paper, grid, and sticker accents match the finalized UX direction.
- Given cards and panels render, when inspected across sections, then paper cards are borderless and square-edged with solid pink offset backing where hierarchy calls for it.
- Given a keyboard user navigates the site, when focus reaches any interactive control, then a visible high-contrast square focus outline appears.
- Given the viewport narrows or text zoom increases, when decorations approach content, then lower-priority stickers hide before text or CTAs become obstructed.

## Design Notes

Use collage decoration sparingly: hero and section transitions carry most personality; lower sections remain readable paper surfaces. Approved sticker assets are megaphone, hand-marker, headphones, open-book, and globe. Existing Iconoir decoration may remain only where it supports rather than competes with the sticker system.

## Verification

**Commands:**
- `npm run build` — expected: Vue type-check and Vite production build succeed.

**Manual checks:**
- Inspect desktop and 320px layouts, keyboard focus, UA/EN switching, reduced motion, teacher portraits, CTA destinations, and sticker overlap.

## Suggested Review Order

**Visual system**

- Start with the shared palette, paper layering, focus, and reduced-motion rules.
  [`main.css:4`](../../src/assets/main.css#L4)

- Review the hero as the highest-density selective-collage composition.
  [`HeroSection.vue:16`](../../src/components/sections/HeroSection.vue#L16)

- Confirm lower sections reuse calm paper surfaces rather than poster density.
  [`ProgramsSection.vue:18`](../../src/components/sections/ProgramsSection.vue#L18)

**Decorative assets**

- Verify stickers render only above configured breakpoints and remain pointer-safe.
  [`DecorativeStickerField.vue:20`](../../src/components/motion/DecorativeStickerField.vue#L20)

- Inspect the promoted production sticker payload.
  [`megaphone.png`](../../public/stickers/megaphone.png)

**Interaction and accessibility**

- Confirm locale switching updates document language defensively.
  [`App.vue:18`](../../src/App.vue#L18)

- Check underline-only navigation hover and simplified square header treatment.
  [`SiteHeader.vue:18`](../../src/components/layout/SiteHeader.vue#L18)

- Review shared square buttons and colored-surface focus handling.
  [`BaseButton.vue:16`](../../src/components/ui/BaseButton.vue#L16)

- Confirm locale controls expose full accessible names and pressed state.
  [`LanguageToggle.vue:20`](../../src/components/ui/LanguageToggle.vue#L20)
