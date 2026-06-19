---
title: 'Update Fonts and Teacher Image'
type: 'chore'
created: '2026-06-18'
status: 'done'
route: 'one-shot'
---

# Update Fonts and Teacher Image

## Intent

**Problem:** The Fluyo School logo and headings needed updated display fonts, the shared collage heading class needed to consume the heading token directly, and the first teacher profile needed to use the provided Diana image.

**Approach:** Add Rubik Doodle Shadow to the Google Fonts request, assign it through the existing logo and heading font roles, keep the collage heading class bound to the heading role, and point the first teacher profile at the converted Diana public asset.

## Suggested Review Order

**Font Source**

- Google Fonts request now includes Rubik Doodle Shadow.
  [`fonts.css:1`](../../src/assets/fonts.css#L1)

- Logo role uses Rubik Doodle Shadow.
  [`fonts.css:8`](../../src/assets/fonts.css#L8)

- Heading role uses Rubik Doodle Shadow with Oswald as fallback.
  [`fonts.css:7`](../../src/assets/fonts.css#L7)

- Shared collage heading class now consumes the heading role directly.
  [`main.css:175`](../../src/assets/main.css#L175)

**Logo Usage**

- Header logo keeps the logo role and uses display-font sizing.
  [`SiteHeader.vue:22`](../../src/components/layout/SiteHeader.vue#L22)

**Teacher Image**

- First teacher image points at the converted Diana asset.
  [`siteContent.ts:5`](../../src/data/siteContent.ts#L5)

- Ukrainian teacher profile uses Diana content.
  [`siteContent.ts:89`](../../src/data/siteContent.ts#L89)

- English teacher profile uses Diana content.
  [`siteContent.ts:206`](../../src/data/siteContent.ts#L206)
