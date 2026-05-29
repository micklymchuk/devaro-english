---
title: 'Devaro English Conversion Site'
type: 'feature'
created: '2026-05-28'
status: 'done'
route: 'one-shot'
---

# Devaro English Conversion Site

## Intent

**Problem:** The project still showed the default Vue starter screen, while the product brief calls for a warm bilingual conversion website for a small online English school serving Ukrainian learners.

**Approach:** Replace the starter screen with a responsive Vue single-page site for Devaro English, then refactor it into typed content data, reusable section components, Tailwind CSS styling, and shared UI primitives for buttons, cards, inputs, contact links, headings, and language switching.

## Suggested Review Order

1. [src/data/siteContent.ts](../../src/data/siteContent.ts) -- Review bilingual copy, mocked teachers, mocked pricing, image sources, and content shape.
2. [src/App.vue](../../src/App.vue) -- Confirm the app-level composition stays small and only wires locale state to sections.
3. [src/components/ui/BaseButton.vue](../../src/components/ui/BaseButton.vue) -- Review the reusable CTA primitive and variants.
4. [src/components/ui/BaseInput.vue](../../src/components/ui/BaseInput.vue) -- Review the reusable form input primitive.
5. [src/components/sections/HeroSection.vue](../../src/components/sections/HeroSection.vue) -- Review the primary conversion path and above-the-fold content.
6. [src/components/sections/ContactSection.vue](../../src/components/sections/ContactSection.vue) -- Review the manager/contact CTA structure and primitive usage.
7. [src/assets/main.css](../../src/assets/main.css) -- Review Tailwind import, theme tokens, and base styles.
8. [vite.config.ts](../../vite.config.ts) -- Confirm Tailwind's Vite plugin is registered.
9. [index.html](../../index.html) -- Confirm the browser title now matches the school brand.
10. [brief.md](../planning-artifacts/briefs/brief-devaro-english-2026-05-28/brief.md) -- Check the product scope and assumptions that guided the implementation.

## Verification

**Commands:**
- `npm run build` -- expected: Vue type-check and Vite production build complete successfully.

**Review notes:**
- Local review caught that the first implementation exposed a language toggle while the Ukrainian locale still used English copy. The Ukrainian copy and navigation anchors were patched before completion.
- Follow-up refactor split the low-quality single-file component into typed content data, section components, a shared section heading component, layout header, and global CSS.
- Second follow-up added Tailwind CSS v4 through `@tailwindcss/vite`, replaced the custom CSS-heavy structure with Tailwind utilities, and extracted reusable UI primitives for buttons, cards, inputs, language toggle, contact links, and headings.
- Premium design pass upgraded the visual system with a dark editorial hero, stronger typography, elevated cards, refined CTAs, richer pricing emphasis, premium teacher cards, and a high-contrast contact section while keeping the reusable component structure intact.
- Advanced reference-led pass moved the hero closer to a polished education landing page: rounded green-framed canvas, local 3D teacher mascot asset, floating proof/badge/test cards, social-style header actions, and bilingual hero microcopy.
- Consistency correction replaced the mismatched dark/corporate lower sections with the same light rounded-panel system as the hero, reduced oversized hero typography/asset overflow, and swapped in a non-checkerboard mascot asset.
