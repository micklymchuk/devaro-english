---
title: 'Role-Based Font Family Tokens'
type: 'chore'
created: '2026-06-18'
status: 'done'
route: 'one-shot'
---

# Role-Based Font Family Tokens

## Intent

**Problem:** The font source of truth still used generic primary/secondary names, which made it harder to test font choices by design role.

**Approach:** Replace the generic font variables with body, UI, heading, and logo font-family roles, then route base styles and UI/display surfaces through those role-specific variables.

## Suggested Review Order

**Font Roles**

- Font source now exposes the four role variables.
  [`fonts.css:4`](../../src/assets/fonts.css#L4)

- Tailwind font aliases mirror the role names.
  [`main.css:4`](../../src/assets/main.css#L4)

**Base Mapping**

- Body copy uses the body font role.
  [`main.css:68`](../../src/assets/main.css#L68)

- Native controls use the UI font role.
  [`main.css:81`](../../src/assets/main.css#L81)

- Page headings use the heading font role.
  [`main.css:89`](../../src/assets/main.css#L89)

- Utility classes expose all roles for component-level use.
  [`main.css:192`](../../src/assets/main.css#L192)

**Component Usage**

- Logo text uses the logo font role.
  [`SiteHeader.vue:22`](../../src/components/layout/SiteHeader.vue#L22)

- Navigation uses the UI font role.
  [`SiteHeader.vue:25`](../../src/components/layout/SiteHeader.vue#L25)

- Button primitives use the UI font role.
  [`BaseButton.vue:17`](../../src/components/ui/BaseButton.vue#L17)

- Form labels use the UI font role.
  [`BaseInput.vue:19`](../../src/components/ui/BaseInput.vue#L19)

- Stat numbers use the heading font role.
  [`StatsBand.vue:27`](../../src/components/sections/StatsBand.vue#L27)
