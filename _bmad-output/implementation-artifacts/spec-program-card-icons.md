---
title: 'Program Card Icons'
type: 'chore'
created: '2026-06-19'
status: 'done'
route: 'one-shot'
---

# Program Card Icons

## Intent

**Problem:** Program cards used generated two-letter text badges from each program title, which felt rough and did not communicate the card category visually.

**Approach:** Replace generated text badges with a fixed Iconoir icon map inside the programs section, keep the bilingual content model unchanged, and provide Iconoir context once at the app root.

## Suggested Review Order

**Program Cards**

- Program cards map each existing item index to a stable Iconoir component.
  [`ProgramsSection.vue:18`](../../src/components/sections/ProgramsSection.vue#L18)

- The old two-letter title slice is replaced by a decorative icon component.
  [`ProgramsSection.vue:49`](../../src/components/sections/ProgramsSection.vue#L49)

**Icon Context**

- The app root now wraps the page in `IconoirProvider` so Iconoir icons render without provider warnings.
  [`App.vue:29`](../../src/App.vue#L29)
