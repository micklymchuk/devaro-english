---
title: 'Setup Font Source of Truth'
type: 'chore'
created: '2026-06-18'
status: 'done'
route: 'one-shot'
---

# Setup Font Source of Truth

## Intent

**Problem:** The site font pairing was split between a Google Fonts import and hardcoded `font-family` declarations, making font experiments harder than necessary.

**Approach:** Move the Google Fonts import and role-based font variables into one dedicated file, then route base typography, Tailwind aliases, and display-only component text through those variables.

## Suggested Review Order

**Font Source**

- Single edit point for changing the active font pair.
  [`fonts.css:1`](../../src/assets/fonts.css#L1)

- Role-based family tokens are the source of truth.
  [`fonts.css:4`](../../src/assets/fonts.css#L4)

**CSS Wiring**

- Main stylesheet imports the font source before Tailwind.
  [`main.css:1`](../../src/assets/main.css#L1)

- Tailwind font aliases point at the same CSS variables.
  [`main.css:4`](../../src/assets/main.css#L4)

- Body text uses the body font variable.
  [`main.css:66`](../../src/assets/main.css#L66)

- Headings and utility classes use role-specific font variables.
  [`main.css:84`](../../src/assets/main.css#L84)

**Display Usage**

- Logo uses the logo font explicitly.
  [`SiteHeader.vue:22`](../../src/components/layout/SiteHeader.vue#L22)

- Stat numbers use the heading display font without affecting labels.
  [`StatsBand.vue:27`](../../src/components/sections/StatsBand.vue#L27)
