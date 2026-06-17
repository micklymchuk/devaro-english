---
title: 'Manager Process Responsive Polish'
type: 'feature'
created: '2026-06-17'
status: 'done'
baseline_commit: '46bdc2f7cb4064ae45f94168397df02ebe7674c0'
context:
  - '{project-root}/_bmad-output/project-context.md'
---

<frozen-after-approval reason="human-owned intent - do not modify unless human renegotiates">

## Intent

**Problem:** The manager/process section is still a terse four-label list, and it does not hold visual balance with the surrounding header, hero, statistics, and programs sections across responsive breakpoints.

**Approach:** Keep the existing landing-page architecture, but enrich the typed lesson-flow content with step explanations, shorten the visual heading presentation without changing meaning, rebalance the left heading and right process list, add a post-process CTA, and make spacing/alignment feel consistent with adjacent sections.

## Boundaries & Constraints

**Always:** Keep bilingual Ukrainian and English content structurally parallel. Keep marketing copy in `src/data/siteContent.ts` and typed in `src/types/site.ts`. Preserve the current Vue section composition, CTA anchors, locale behavior, reduced-motion safeguards, and collage/paper visual language. Verify the landing page at 1440px, 1024px, 768px, and 390px.

**Ask First:** Any new dependency, route, modal, backend behavior, form submission behavior, or replacement of the established visual direction.

**Never:** Do not hardcode bilingual marketing copy inside `LessonFlowSection.vue`. Do not replace existing architecture or alter unrelated lower sections except for spacing/alignment needed to make the requested sections work together.

</frozen-after-approval>

## Code Map

- `src/types/site.ts` -- defines `SiteCopy`, including `lessonFlow` shape.
- `src/data/siteContent.ts` -- stores bilingual lesson-flow heading, step labels, descriptions, and CTA copy.
- `src/components/sections/LessonFlowSection.vue` -- renders the manager/process section.
- `src/assets/main.css` -- shared section spacing, headings, and paper utilities if needed for alignment polish.
- `src/components/sections/HeroSection.vue`, `StatsBand.vue`, `ProgramsSection.vue`, `SiteHeader.vue` -- adjacent areas to verify together during responsive inspection.

## Tasks & Acceptance

**Execution:**
- [x] `src/types/site.ts` -- replace lesson-flow string steps with typed objects and add CTA fields so copy remains data-driven.
- [x] `src/data/siteContent.ts` -- add readable explanations for all four steps in both locales, shorten the visual heading while preserving meaning, and add CTA copy.
- [x] `src/components/sections/LessonFlowSection.vue` -- rebalance the heading/list layout, render labels plus explanations, and add a clear CTA after the process.
- [x] Responsive polish -- inspect header, hero, statistics, programs, and process together at 1440px, 1024px, 768px, and 390px; fix visual collisions, imbalance, spacing drift, or text overflow found during inspection.

**Acceptance Criteria:**
- Given the Ukrainian or English page, when the process section renders, then each of the four steps has a readable explanation and the section has a clear CTA after the list.
- Given desktop widths, when scanning from programs into process, then the left heading column and right process list feel balanced rather than one side dominating.
- Given tablet and mobile widths, when the same sections stack, then spacing is consistent, text remains readable, and no header, hero, stats, programs, or process content overlaps or overflows.
- Given the project verification commands run, when lint/type-check/build are available, then they complete or any missing command is reported explicitly.

## Verification

**Commands:**
- `npm run lint` -- expected: succeeds if the project defines the command; otherwise report that no lint script exists.
- `npm run type-check` -- expected: Vue type-check succeeds.
- `npm run build` -- expected: Vue type-check and Vite production build succeed.

**Manual checks:**
- Playwright screenshots/inspection at 1440px, 1024px, 768px, and 390px for header, hero, statistics, programs, and process sections together.

## Suggested Review Order

**Process Rendering**

- Start here to see the new balanced section structure and CTA placement.
  [`LessonFlowSection.vue:12`](../../src/components/sections/LessonFlowSection.vue#L12)

- Check how step labels and readable descriptions render from typed data.
  [`LessonFlowSection.vue:22`](../../src/components/sections/LessonFlowSection.vue#L22)

- Review the post-process CTA and responsive button sizing.
  [`LessonFlowSection.vue:41`](../../src/components/sections/LessonFlowSection.vue#L41)

**Content Contract**

- Verify Ukrainian copy keeps the shortened heading and four explained steps.
  [`siteContent.ts:59`](../../src/data/siteContent.ts#L59)

- Verify English copy stays structurally parallel to Ukrainian.
  [`siteContent.ts:175`](../../src/data/siteContent.ts#L175)

- Confirm the lesson-flow schema now requires step descriptions and CTA fields.
  [`site.ts:18`](../../src/types/site.ts#L18)
