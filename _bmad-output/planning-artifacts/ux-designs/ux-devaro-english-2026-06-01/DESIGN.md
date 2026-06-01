---
name: Devaro English
description: Responsive English-school landing page with clean selective collage styling.
status: final
updated: 2026-06-01
sources: []
colors:
  paper-base: '#F7F4ED'
  paper-raised: '#FFFEFB'
  ink-primary: '#172E28'
  ink-muted: '#59645F'
  primary-green: '#23724F'
  accent-pink: '#EE72DF'
  white: '#FFFFFF'
  grid-dark: '#101C19'
  focus-on-paper: '#172E28'
  focus-on-color: '#FFFFFF'
typography:
  display:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: 'clamp(3.75rem, 7vw, 7rem)'
    fontWeight: '700'
    lineHeight: '0.88'
    letterSpacing: '-0.035em'
  heading:
    fontFamily: 'Oswald, Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
    fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)'
    fontWeight: '700'
    lineHeight: '0.94'
    letterSpacing: '-0.02em'
  body:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: '400'
    lineHeight: '1.55'
  label:
    fontFamily: 'Inter, Arial, sans-serif'
    fontSize: '0.875rem'
    fontWeight: '900'
    lineHeight: '1.2'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '5': '24px'
  '6': '32px'
  '7': '48px'
  '8': '64px'
components:
  primary-button:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    border: '2px solid {colors.primary-green}'
    backing: '4px offset {colors.ink-primary} at low opacity'
    radius: '0'
  secondary-button:
    background: '{colors.paper-raised}'
    foreground: '{colors.primary-green}'
    border: '2px solid {colors.ink-primary}'
    backing: '4px offset {colors.ink-primary} at low opacity'
    radius: '0'
  paper-card:
    background: '{colors.paper-base}'
    backing: '5px offset {colors.accent-pink}'
    border: 'none'
    radius: '0'
  text-badge:
    background: '{colors.accent-pink}'
    foreground: '{colors.ink-primary}'
    padding: '5px 8px'
    radius: '0'
  green-text-badge:
    background: '{colors.primary-green}'
    foreground: '{colors.white}'
    padding: '5px 8px'
    radius: '0'
  header-navigation:
    hover: 'Underline only in {colors.primary-green}'
    background: 'none'
  language-toggle:
    background: '{colors.paper-raised}'
    radius: '0'
  teacher-card:
    treatment: 'Inherits {components.paper-card}; preserve existing teacher photo'
  decorative-sticker:
    treatment: 'Transparent editorial collage cutout with photocopy halftone grain and white cut-paper outline'
  torn-paper-boundary:
    treatment: 'Irregular cut-paper contour used outside text and control safe zones'
  grid-fragment:
    treatment: 'Small decorative {colors.grid-dark} grid-paper layer'
  contact-form:
    label: '{colors.ink-primary}'
    input-background: '{colors.paper-raised}'
    input-border: '1px solid {colors.ink-muted}'
    focus: '3px solid {colors.focus-on-paper} with 3px offset'
    radius: '0'
  interactive-focus-on-paper:
    outline: '3px solid {colors.focus-on-paper}'
    offset: '3px'
  interactive-focus-on-color:
    outline: '3px solid {colors.focus-on-color}'
    offset: '3px'
---

## Brand & Style

Devaro English is an approachable online English school for students, teens, children, and adults. Its interface should feel energetic and contemporary without becoming childish or corporate. The visual identity interprets an advertising-poster language through a clean conversion site: paper surfaces remain readable, while selective collage moments add personality.

The reference image is inspiration only: [`imports/site-template-style-reference.jpg`](imports/site-template-style-reference.jpg). It governs the collage vocabulary, not page composition or copy. This spine wins if the reference, preview mocks, or implementation disagree.

Use torn-paper section transitions, occasional black-grid fragments, sticker-like halftone cutouts, square printed blocks, and slight rotations. Keep most surfaces calm. Do not turn every section into a poster.

## Colors

- **Paper Base (`{colors.paper-base}`)** is the warm page canvas and quiet card surface.
- **Paper Raised (`{colors.paper-raised}`)** is used where a lighter paper layer improves hierarchy.
- **Primary Green (`{colors.primary-green}`)** is lighter than the original banner green. It carries primary actions, key labels, headings, and structural accents.
- **Ink (`{colors.ink-primary}`)** is the grounded near-black green for body text and strong contrast.
- **Accent Pink (`{colors.accent-pink}`)** is the collage accent. Use it for compact text badges, underline-like highlight marks, and solid offset backing layers behind paper cards.
- **Grid Dark (`{colors.grid-dark}`)** is reserved for occasional grid-paper fragments, never a dominant page background.

Keep load-bearing text combinations at WCAG AA contrast. White text is permitted on `{colors.primary-green}` and `{colors.ink-primary}`. Body copy uses `{colors.ink-primary}` or `{colors.ink-muted}` on paper surfaces.

Allowed text pairings: `{colors.white}` on `{colors.primary-green}` (`5.85:1`), `{colors.white}` on `{colors.ink-primary}` (`14.40:1`), `{colors.ink-primary}` on `{colors.paper-base}` (`13.11:1`), `{colors.ink-muted}` on `{colors.paper-base}` (`5.60:1`), and `{colors.ink-primary}` on `{colors.accent-pink}` (`5.56:1`). Never place white text on `{colors.accent-pink}` (`2.59:1`).

## Typography

Major headings use `{typography.display}` or `{typography.heading}`: **Oswald**, condensed, bold, uppercase, and tightly stacked. This gives the site poster energy without forcing collage treatments onto every component. Load Oswald from Google Fonts or self-hosted files from the same family; it supports Cyrillic and Cyrillic Extended subsets.

Body text, navigation, form labels, and card copy use **Inter** through `{typography.body}` and `{typography.label}`. Load Inter from Google Fonts or self-hosted files from the same family; it supports Cyrillic and Cyrillic Extended subsets. Avoid condensed type for paragraphs, inputs, and navigation links. Verify representative Ukrainian headings at desktop and mobile widths; loosen line height where glyph collisions appear.

## Layout & Spacing

Preserve the existing responsive landing-page structure and content order. Use the existing wide centered page frame and single-column mobile stacking.

Spacing follows the 4px-based scale in frontmatter. Allow generous section spacing; collage accents must not crowd conversion content. Torn-paper treatments belong at selected hero or section boundaries. Sticker placement must preserve reading order, CTA visibility, and responsive layout integrity. Decorative layers use `pointer-events: none`, stay behind interactive content, and remain outside text and control safe zones. Reduce or hide them before collision at narrow widths or under 200% text zoom.

## Elevation & Depth

Depth comes from paper layering, not generic soft shadows. Paper cards use a solid pink offset backing via `{components.paper-card.backing}`. Featured blocks may use the same pink offset backing at a slightly larger offset. Interactive controls may use restrained dark offset shadows to communicate tactility.

## Shapes

Square edges are the default. Rounded cards and rounded buttons conflict with the printed collage language. Softness comes from torn-paper silhouettes, white sticker outlines, offset backing layers, and restrained rotation on accent pieces.

Pill shapes are not part of the visual language. Use circles only where the subject itself requires one, such as avatar imagery or icon anatomy.

## Components

- **`header-navigation`** — Clean and light. No boxed or business-like chrome. Links use readable sans-serif labels. Hover adds a `{colors.primary-green}` underline only; never a background fill.
- **`language-toggle`** — Compact square-edged control. Keep bilingual behavior unchanged.
- **`primary-button`** — `{components.primary-button}`. Square printed block with a restrained offset shadow. Use for the main conversion action.
- **`secondary-button`** — `{components.secondary-button}`. White paper block with dark border and a restrained offset shadow.
- **`text-badge`** — `{components.text-badge}` or `{components.green-text-badge}`. Both variants are decorative. Keep padding tight. Use slight rotations selectively.
- **`paper-card`** — `{components.paper-card}`. Borderless paper surface with solid pink offset backing. Do not use outlined cards.
- **`teacher-card`** — Keep existing teacher photos, names, roles, and copy. Style the container as a paper card; do not turn portraits into halftone graphics.
- **`contact-form`** — `{components.contact-form}`. Persistent visible labels, square paper inputs, and a clear focus outline. This redesign does not invent a submission lifecycle where none exists.
- **`decorative-sticker`** — `{components.decorative-sticker}`. Use the approved family selectively: [megaphone](mockups/stickers/megaphone.png), [hand holding a marker](mockups/stickers/hand-marker.png), [headphones](mockups/stickers/headphones.png), [open book](mockups/stickers/open-book.png), and [globe](mockups/stickers/globe.png). These are independent decorative elements, similar in purpose to the current floating icons. Asset review: [`mockups/stickers/review.html`](mockups/stickers/review.html).
- **`torn-paper-boundary`** — Use irregular cut-paper contours for selected backgrounds or section transitions. Keep tears away from text and controls.
- **`grid-fragment`** — Use as a small collage layer near hero art or section decoration, not behind dense copy.
- **`interactive-focus` state** — All links, buttons, locale controls, channel links, and fields inherit the `{components.interactive-focus-on-paper}` or `{components.interactive-focus-on-color}` token primitive according to surface. Do not rely on backing shadows or color change alone.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Interpret collage styling for the existing site | Copy the reference banner layout or words |
| Use clean surfaces with selective torn-paper and sticker moments | Apply dense poster treatments to every section |
| Keep printed blocks square-edged | Add rounded cards, rounded buttons, or pill navigation |
| Use solid pink offset backing behind paper cards | Frame content cards with rigid outlines |
| Keep teacher photos unchanged | Apply halftone filters to teacher portraits |
| Use decorative stickers independently of content cards | Replace teacher imagery with stickers |
| Use green underline-only nav hover | Add filled hover backgrounds to navigation |
