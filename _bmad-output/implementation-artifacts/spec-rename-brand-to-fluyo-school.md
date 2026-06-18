---
title: 'Rename Brand to Fluyo School'
type: 'chore'
created: '2026-06-18'
status: 'done'
route: 'one-shot'
---

# Rename Brand to Fluyo School

## Intent

**Problem:** The app and project artifacts needed to use the Fluyo School brand consistently across visible UI, metadata, and project context.

**Approach:** Replace old brand references with Fluyo School, rename tracked brand-slug files and artifact directories, and preserve generic English-learning copy where it describes the subject rather than the brand.

## Suggested Review Order

**Runtime Brand**

- Header is the main visual brand entry point.
  [`SiteHeader.vue:21`](../../src/components/layout/SiteHeader.vue#L21)

- Bilingual copy keeps brand references aligned across locales.
  [`siteContent.ts:30`](../../src/data/siteContent.ts#L30)

- Contact prompts now direct learners to Fluyo School.
  [`siteContent.ts:127`](../../src/data/siteContent.ts#L127)

- Teacher image alt text uses the new school name.
  [`TeachersSection.vue:28`](../../src/components/sections/TeachersSection.vue#L28)

**Metadata**

- Browser title matches the new public brand.
  [`index.html:7`](../../index.html#L7)

- Package metadata uses the new npm-safe slug.
  [`package.json:2`](../../package.json#L2)

**Project Context**

- Durable BMad override prevents installer-managed config drift.
  [`config.toml:9`](../../_bmad/custom/config.toml#L9)

- Agent context now names the current school brand.
  [`project-context.md:2`](../project-context.md#L2)

- Historical UX context links follow the renamed artifact directory.
  [`spec-selective-collage-redesign.md:8`](spec-selective-collage-redesign.md#L8)
