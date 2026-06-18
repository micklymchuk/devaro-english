# Accessibility Review - Fluyo School UX Contract

## Scope

Re-reviewed the revised `DESIGN.md`, `EXPERIENCE.md`, `.decision-log.md`, `imports/site-template-style-reference.jpg`, and linked promoted previews under `mockups/`. This is the final UX-contract accessibility review for the consumer-facing responsive landing page. The spines win on conflict with illustrative previews.

## Overall Verdict

The revised contract is accessibility-ready for implementation. The previous specification gaps are resolved: downstream implementation now has explicit focus styles, contrast restrictions, locale semantics, decorative-asset semantics, reduced-motion rules, target-size requirements, Cyrillic-capable font families, responsive collision rules, and an honest statement of the existing contact form limitation.

No unresolved accessibility contract defects remain. The residual items below are implementation verification checks, not requests for further UX-contract changes.

## Severity Summary

| Severity | Unresolved contract findings |
|---|---:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

## Resolved Contract Gaps

| Prior gap | Resolution |
|---|---|
| Focus treatment was not implementable | `DESIGN.md` now defines `focus-on-paper`, `focus-on-color`, 3px outlines, 3px offsets, and a component-wide focus rule. `EXPERIENCE.md` applies it to links, buttons, locale controls, channel links, and fields. |
| Mobile navigation behavior was unresolved | `EXPERIENCE.md` explicitly preserves the current `< lg` behavior: hide the anchor group, keep locale selection visible, and keep sections reachable by scrolling. |
| Contact-form lifecycle was underspecified | The spines now state the current functional reality: the visible form is static and non-submitting, while direct contact channels remain the usable conversion path. Adding submission logic is correctly separated from this styling redesign. |
| Locale semantics were missing | The toggle now requires full accessible names, selected state, and `<html lang="uk">` / `<html lang="en">` updates. |
| Touch targets were not committed | The accessibility floor now requires at least `24x24px` CSS targets and aims for `44x44px` on primary controls, locale controls, and direct contact channels. |
| Pink text pairing could be misused | The contrast matrix explicitly permits ink on pink and prohibits white on pink. |
| Display typography lacked a Cyrillic-capable production family | `DESIGN.md` now commits Oswald for display and Inter for body text, both with Cyrillic coverage, plus responsive Ukrainian heading verification. |
| Collage layers had no enforceable collision rule | Decorative layers now require `pointer-events: none`, safe-zone placement, responsive reduction or hiding, and checks at `320px`, 200% text zoom, and reflow. |
| Reduced-motion handling omitted smooth scroll and CTA translation | `EXPERIENCE.md` now requires `scroll-behavior: auto` and removal of nonessential button translation under reduced motion. |
| Decorative asset semantics were implied but not complete | Sticker, torn-paper, and grid-fragment rows now require `aria-hidden="true"` and `pointer-events: none`; decorative sticker images require empty `alt=""`. |

## Confirmed Contrast Contract

| Foreground | Background | Ratio | Result |
|---|---|---:|---|
| `{colors.white}` | `{colors.primary-green}` | 5.85:1 | Pass for normal text |
| `{colors.white}` | `{colors.ink-primary}` | 14.40:1 | Pass for normal text |
| `{colors.ink-primary}` | `{colors.paper-base}` | 13.11:1 | Pass for normal text |
| `{colors.ink-muted}` | `{colors.paper-base}` | 5.60:1 | Pass for normal text |
| `{colors.ink-primary}` | `{colors.accent-pink}` | 5.56:1 | Pass for normal text |
| `{colors.white}` | `{colors.accent-pink}` | 2.59:1 | Explicitly prohibited |

## Residual Implementation Verification

These are implementation checks. They do not indicate missing contract decisions.

1. Verify keyboard traversal in both locales: header links where present, locale controls, CTAs, contact channels, static fields, and the non-submitting contact control.
2. Verify every interactive element renders the specified 3px focus-visible outline with sufficient contrast in normal and forced-colors modes.
3. Verify locale buttons expose full accessible names and selected state, and update the document language after switching.
4. Verify decorative sticker images use empty `alt=""`; sticker, torn-paper, grid, and offset layers use `aria-hidden="true"` where appropriate and never intercept pointer events.
5. Verify `prefers-reduced-motion: reduce` disables floating, reveal, parallax, smooth scrolling, and nonessential CTA translation without withholding content.
6. Verify reflow at `320px` CSS width and 200% text zoom without horizontal scrolling, obscured CTAs, or collage collisions.
7. Verify Oswald and Inter load with Ukrainian Cyrillic glyphs and that tightly stacked headings remain readable at desktop and mobile widths.
8. Verify control targets meet the `24x24px` minimum and the `44x44px` design goal where required.
9. Verify social-icon controls have accessible names and direct contact channels remain usable independently of the static form.
10. Verify the static contact form does not falsely announce successful submission. Treat submission behavior as a separate functional improvement.

## Preview Note

The promoted HTML mock remains an illustrative visual-direction artifact, not production markup. It does not itself implement the committed focus, semantic, and reduced-motion rules. Production must follow the revised spines.
