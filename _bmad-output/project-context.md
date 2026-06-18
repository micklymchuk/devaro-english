---
project_name: 'fluyo-school'
user_name: 'king'
date: '2026-06-11'
sections_completed: ['technology_stack_versions', 'language_specific_rules', 'framework_specific_rules', 'testing_rules', 'code_quality_style_rules', 'development_workflow_rules', 'critical_dont_miss_rules']
existing_patterns_found: 9
status: 'complete'
rule_count: 64
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Source stack facts from `package.json`, `vite.config.ts`, and `tsconfig*.json`; do not infer versions from memory, templates, or "latest" defaults.
- Vue `^3.5.32` with Single File Components and `<script setup lang="ts">`; avoid Options API unless extending existing Options API code.
- Vite `^8.0.8` with ESM config in `vite.config.ts`; preserve the Vue plugin, Tailwind plugin, Vue DevTools plugin, and `@` alias to `src`.
- TypeScript `~6.0.0` is build-time strictness; app validation uses `vue-tsc --build`, not plain `tsc` or `tsc --noEmit`.
- Tailwind CSS `^4.3.0` is integrated through `@tailwindcss/vite`; tokens and custom CSS live in `src/assets/main.css`.
- Do not create legacy `tailwind.config.*` or Tailwind v3-style config unless the project explicitly adds one.
- Node must satisfy `^20.19.0 || >=22.12.0`; do not describe this as generic "Node 20+".
- Use `npm` commands because the repo has `package-lock.json`.
- UI icons use `@iconoir/vue`; do not add another icon library unless requested.
- Motion uses `motion-v` plus local composables; do not add GSAP, Framer alternatives, or another motion library unless requested.
- `vite-plugin-vue-devtools` is development tooling only; runtime app code must not depend on it.
- Browser/frontend code should stay ESM-based and avoid CommonJS or Node-only APIs.
- Do not upgrade Vue, Vite, TypeScript, Tailwind, Node engine constraints, or core tooling unless the task explicitly requests dependency work.
- Build verification is `npm run build`, which runs `vue-tsc --build` before `vite build`.

## Critical Implementation Rules

### Language-Specific Rules

- Keep all source code TypeScript-aware; Vue files should use `<script setup lang="ts">`.
- Respect `noUncheckedIndexedAccess`: guard indexed array/object reads or provide explicit fallbacks before use.
- Use `import type` for type-only imports from `vue`, `@/types/*`, and other modules.
- Use ESM syntax only; do not introduce `require`, `module.exports`, or CommonJS patterns.
- Use the `@/` alias for imports from `src` when consistent with nearby files.
- Preserve typed content contracts with `satisfies` when editing structured data like `siteContent`.
- Type DOM refs as nullable and check `.value` before DOM access.
- Prefer explicit small helper functions for runtime checks, as in `Object.hasOwn(siteContent, nextLocale)`.
- Do not loosen TypeScript settings or work around type errors with broad `any` unless the task explicitly requires it and the reason is documented.

### Framework-Specific Rules

- Keep `App.vue` as composition glue: locale state, content lookup, and section wiring only.
- Put page-level sections in `src/components/sections`, shared UI primitives in `src/components/ui`, motion/decorative pieces in `src/components/motion`, and reusable behavior in `src/composables`.
- Keep bilingual site copy in `src/data/siteContent.ts`; do not hardcode Ukrainian/English marketing copy inside section components unless it is component-only UI chrome.
- Keep content shape changes synchronized with `src/types/site.ts`.
- Pass typed content objects into sections via props; avoid reaching into `siteContent` from deep child components.
- Use local Vue state/computed values for this app; do not introduce Pinia/Vuex or global state unless a task clearly requires it.
- For DOM/browser effects, use lifecycle hooks and clean up listeners, animation frames, and media-query listeners in `onBeforeUnmount`.
- Motion and parallax behavior must respect `prefers-reduced-motion` and return still styles when reduced motion is active.
- Preserve existing `Base*` UI primitives and extend them before duplicating button, card, input, language toggle, social link, or heading behavior.

### Testing Rules

- There is currently no Vitest/Jest/Playwright/Cypress setup for the frontend app; do not invent test commands in task summaries.
- Use `npm run build` as the required verification gate for implementation changes.
- When adding tests is explicitly requested, add the test runner/config deliberately and document the new command in `package.json`.
- Keep future tests close to the code pattern they verify; prefer component/composable tests for reusable behavior and browser/e2e tests only for user flows that need rendering.
- Do not treat `_bmad/scripts/tests` as the frontend test suite; those tests belong to BMad tooling, not the Vue app.

### Code Quality & Style Rules

- Follow existing filename conventions: PascalCase for Vue components, `use*.ts` for composables, and `Base*` for reusable UI primitives.
- Prefer small focused components over expanding section files with repeated button/card/input/header logic.
- Use semantic Tailwind theme utilities from `src/assets/main.css`; avoid scattering new one-off hex colors through templates.
- Add or rename theme tokens in `src/assets/main.css` when introducing reusable colors, surfaces, shadows, or typography decisions.
- Preserve the current editorial/collage visual system: paper surfaces, printed shadows, bold uppercase headings, stickers, and restrained semantic color roles.
- Do not add visible instructional text about how the interface works unless it is real user-facing product copy.
- Keep comments sparse; add them only around non-obvious browser, motion, or cleanup logic.
- Keep reusable interactive behavior in UI primitives such as `BaseButton`, `InteractivePaint`, `SocialIconButton`, and `LanguageToggle` instead of duplicating it in each section.
- Maintain accessible basics already present in the app: meaningful image alt text, `aria-label` for decorative/preview regions when needed, and visible focus states.

### Development Workflow Rules

- Use `npm install`, `npm run dev`, and `npm run build`; do not switch examples to pnpm/yarn/bun.
- Run `npm run build` before calling implementation complete when code changes affect the Vue app.
- Do not claim frontend tests passed unless a frontend test runner is added and actually run.
- There are no repo-defined branch naming, commit message, PR, CI, or deployment rules; do not invent them in generated docs or summaries.
- Treat `_bmad-output/implementation-artifacts` and `_bmad-output/planning-artifacts` as project context, not runtime source.
- Keep implementation changes in `src`, config files, public assets, or package files as appropriate; avoid editing BMad tooling unless the task is explicitly about BMad.
- Before changing dependencies or scripts, check `package.json`, `package-lock.json`, and Vite/TypeScript config together so commands and lockfile stay consistent.

### Critical Don't-Miss Rules

- This is a branded bilingual Fluyo School conversion site, not a generic Vue starter; preserve the school-specific content model and visual direction.
- Ukrainian (`uk`) and English (`en`) content must stay structurally parallel in `siteContent`; when adding a field to one locale, add it to the other and update `SiteCopy`.
- Do not scatter marketing copy inside components; components should render typed content passed from `siteContent`.
- Do not replace the current collage/editorial visual language with generic SaaS cards, gradients, or starter-template styling.
- Long Ukrainian text can be wider/taller than English; check responsive wrapping when changing headings, buttons, nav items, cards, or form labels.
- Keep `document.documentElement.lang` synchronized with the active locale when changing locale behavior.
- Do not break reduced-motion behavior in `useScrollParallax`, `useResponsiveParallax`, `RevealOnScroll`, `InteractivePaint`, or decorative motion components.
- Do not add unguarded DOM/window access outside client lifecycle code.
- When touching arrays or keyed content, account for `noUncheckedIndexedAccess` and missing keys.
- Preserve public asset paths such as `/hero-teacher-sticker.png` and `/stickers/*` unless replacing the assets deliberately.
- Do not present mock teachers, prices, or social proof as verified real business data without user confirmation.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code.
- Follow all rules exactly as documented.
- When in doubt, prefer the more restrictive option.
- Update this file if new project patterns emerge.

**For Humans:**

- Keep this file lean and focused on agent needs.
- Update when the technology stack or implementation patterns change.
- Review periodically for outdated rules.
- Remove rules that become obvious over time.

Last Updated: 2026-06-11
