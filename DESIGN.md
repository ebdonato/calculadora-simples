---
name: Calculadora Super Simples
description: RPN calculator PWA — petrol-teal pill keys over a user-customizable gradient canvas, flat and honest.
colors:
  primary: "#0c7489"
  secondary: "#119da4"
  accent: "#13505b"
  surface-dark: "#000000"
  positive: "#21BA45"
  negative: "#C10015"
  info: "#31CCEC"
  warning: "#F2C037"
  text-on-dark: "#ffffff"
  text-on-light: "#000000"
typography:
  body:
    fontFamily: "Roboto, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  title:
    fontFamily: "Roboto, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.75rem"
    letterSpacing: "0.00937em"
  key-label:
    fontFamily: "Roboto, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: "1.715"
  caption:
    fontFamily: "Roboto, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.375rem"
rounded:
  pill: "28px"
  round: "50%"
  field: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
components:
  key-primary:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.key-label}"
    rounded: "{rounded.pill}"
    padding: "4px 16px"
  key-primary-light:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-light}"
    typography: "{typography.key-label}"
    rounded: "{rounded.pill}"
    padding: "4px 16px"
  header-icon:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.round}"
    padding: "8px"
  header-icon-light:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-light}"
    rounded: "{rounded.round}"
    padding: "8px"
  select-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "8px 12px"
---

# Design System: Calculadora Super Simples

## Overview

**Creative North Star: "The Honest Instrument"**

This is a measuring tool, not a showpiece. The calculator states its whole working state — a four-line visible stack — as large, plainly-labelled keys, and asks nothing else of the user. Every default favors legibility over polish: flat surfaces, one border weight, one type family, a single 400px column centered on the page. The personality arrives through a deliberate wink rather than through chrome: the entire canvas is a customizable gradient (the "estilo R$1,99" self-awareness of the README made visual), an avatar in the header opens an auto-closing "Desenvolvido por" dialog, and the palette is a teal family that reads as instrument-panel rather than brand-campaign.

Density is high and rhythm is mechanical: four keys per row, identical 8px gutters, no decorative spacing. The system is theme-aware — dark by default, with a user-facing "Cor do Texto" toggle — and the gradient background is the one surface that changes character, so foreground elements stay strictly neutral outline shapes that work over any color world the user picks. Confirmed anti-reference: corporate SaaS chrome (cards, elevated panels, gradient buttons) and skeuomorphic calculator textures (bevels, LCD panels, plastic keys).

**Key Characteristics:**
- Flat outline vocabulary: transparent fills, 1px `currentColor` borders, no shadows anywhere
- Fully-rounded pill keys (28px radius) in a strict 4-column grid
- A single centered 400px instrument column with an optional 220px history rail
- Teal brand family (Petrol Teal / Bright Lagoon / Shadowed Pine) as the default gradient world
- Roboto throughout; uppercase, medium-weight key labels
- The gradient canvas is user-owned — foreground UI must stay legible over any of it

## Colors

The palette is a tight teal family that exists mainly to be poured into the background gradient, plus black/white theme text and Quasar's semantic status colors.

### Primary
- **Deep Petrol Teal** (`{colors.primary}`): The brand color. Middle stop of the default gradient and the anchor Quasar uses for interactive components (focus, ripple, toggles). Read as "the instrument's own color."

### Secondary
- **Bright Lagoon** (`{colors.secondary}`): The lively end of the default gradient (bottom stop, vertical direction). Gives the canvas its lift; never used as a foreground color.

### Tertiary
- **Shadowed Pine** (`{colors.accent}`): The deep end of the default gradient (top stop). Also terminates the dark drawer gradient. Quietest of the three teals.

### Neutral
- **True Black** (`{colors.surface-dark}`): Base of the dark theme (the default) and end stop of the dark drawer gradient.
- **Theme Text** (`{colors.text-on-dark}` / `{colors.text-on-light}`): Text flips wholesale with the "Cor do Texto" setting — there is no muted text tier beyond Quasar's caption grey.
- **Status colors** (`{colors.positive}`, `{colors.negative}`, `{colors.info}`, `{colors.warning}`): Quasar semantic tokens, present for dialogs and form states; not decorative.

### Gradient Canvas (signature)
- **Default world:** Shadowed Pine → Deep Petrol Teal → Bright Lagoon, applied as a `linear-gradient` over the whole layout (`to bottom` by default; Horizontal, Diagonal, and "Sem Gradiente" are user-selectable). With one color or "Sem Gradiente", the canvas falls back to a solid fill of the first color.
- **User swatches:** the Gradients page offers a curated list (uiGradients + "UFV 2001") rendered as gradient-filled buttons; picking one may prompt to flip the text theme based on an HSP luminance check of the first color.
- The PWA manifest `theme_color` is a legacy navy (`#1a2a6c`) outside this palette — a packaging leftover, not a design token; don't spread it into the UI.

### Named Rules
**The Gradient-Owner Rule.** The background is the user's, not the system's. Foreground elements never borrow gradient colors for fills or text; they stay neutral outlines so they remain legible over any swatch.

**The One-World Rule.** Only one gradient is active at a time, and the default teal family is the reference world. New surfaces are designed against the default gradient first.

## Typography

**Display Font:** none — the system has no display type
**Body Font:** Roboto (with `-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif`)
**Label/Mono Font:** none distinct — key labels are Roboto too; no tabular figures are set

**Character:** One workhorse grotesque doing everything, in the Material tradition. Hierarchy comes from size and case, not from family or decorative weight jumps — appropriate for a tool whose only job is showing numbers clearly.

### Hierarchy
- **Title** (400, 1rem / 1.75rem, +0.00937em): panel headings like "Histórico" (`text-subtitle1`).
- **Body** (400, 0.875rem / 1.5): the default everywhere — list items, drawer labels, dialogs, menu captions.
- **Key label** (500, 1.25rem, line-height 1.715): calculator key labels and stack values; the loudest text on the page, uppercased by the button component (operators like `x^y` opt out with `no-caps`).
- **Caption** (400, 0.75rem / 1.375rem): history expression lines (`caption` on `q-item-label`), the secondary row of drawer links.

### Named Rules
**The One Family Rule.** Roboto only. Introducing a second family — especially a mono "calculator font" — is off-brand for the honest instrument.

## Layout

- **Instrument column:** the page is a flex row centered both axes; the calculator occupies a single column capped at 400px (`.constrain`, `flex: 0 1 400px`), 16px page padding, stacked with 8px gutters (`q-gutter-sm`).
- **Keypad grid:** four equal-width columns (`col`) per row × six rows — four stack display rows on top, then five control rows. Gaps are 8px in both axes; every key stretches to fill its cell.
- **History rail:** a fixed 220px column to the right of the calculator, 70vh tall (capped at 566px), separated by a 16px margin, with an independently scrolling list.
- **Responsive:** below 719px the rail detaches — full width (max 400px), 300px tall, moved beneath the keypad with a 16px top margin. The header collapses to icon-only controls (menu, back, avatar) at all sizes.
- **Drawer:** a left slide-over holding settings; logo centered at top, collapsible link list, and a bottom-anchored form group (two selects, a toggle, and two full-width buttons) pinned with `absolute-bottom`.
- **Spacing rhythm:** 4px / 8px / 16px only (`q-gutter-xs`, `q-gutter-sm`, `q-pa-md`). No other spacing steps appear.

## Elevation & Depth

Flat, with the gradient doing the work of depth. Resting surfaces have no shadow at all: buttons are transparent with a 1px `currentColor` border, lists are separated by hairline rules, and the drawer/dialog overlays rely on Quasar's default scrim rather than on elevation tokens. The only perceived dimension comes from the background gradient itself — its direction and color spread establish a foreground/background relationship that static panels would otherwise have to fake.

### Shadow Vocabulary
- None at rest. Quasar's press feedback (`box-shadow` raise on `:active` of standard buttons) and overlay scrims are framework defaults, not project tokens.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` is ever added to a resting element. If something needs to feel above the canvas, it gets a border or the scrim, never a shadow.

## Shapes

Three radii, strictly role-bound: **pill** (`{rounded.pill}`, 28px — every calculator key, the "Cores" and "Voltar" buttons), **round** (`{rounded.round}`, 50% — the header icon buttons and avatar), and Quasar's small **field radius** (4px — the outlined `q-select`s, dialogs, and tooltips). Lists, drawer, and page containers are square-cornered. Borders are always 1px solid `currentColor` on interactive outlines; the history list uses Quasar's separator hairlines. No clipping tricks, no gradients on foreground elements, no nested radii.

## Components

Every interactive element inherits one character: a neutral outline shape that reads the current text theme and stays quiet over the gradient.

### Buttons
- **Shape:** pill radius (28px) for labelled buttons; 50% for round icon buttons
- **Calculator key (primary):** transparent fill, 1px `currentColor` border, uppercase 500-weight label at 1.25rem, padding 4px 16px, min-height ≈2.57em, sized `lg` (20px base font → 1.715em icons). Four per row, equal width. Operators carry a left icon (Line Awesome) and a 1000ms-delay tooltip; digits are label-only.
- **Stack display rows:** same key, but `align="between"` puts a `looks_*` depth icon on the left and the value on the right; the top row swaps its icon to `edit` while an entry is in progress. Clicking copies the value to the clipboard.
- **Hover / Focus:** Quasar defaults — a subtle `currentColor`-based overlay transition of `.3s cubic-bezier(.25,.8,.5,1)`, ripple on press, visible focus ring from the browser. No custom hover color is defined.
- **Flat variants:** header icon buttons (menu/back/avatar) and the version button are `flat` — no border, transparent, round; their color flips between white and black with the theme.

### History List
- **Style:** dense `q-list` with separator hairlines; each item shows a caption-weight expression line above a body-weight `= result` line, both ellipsized with the full text in a native title tooltip. Clicking an item copies the result.
- **States:** empty state is a single grey "Nenhuma operação" row; the clear-history icon button disables when empty.

### Navigation / Drawer
- **Style:** borderless slide-over tinted with the first gradient color; logo centered, a full-width flat collapse toggle, then icon+label link rows (Material icons, body title + caption). Settings sit at the bottom: two outlined `q-select`s ("Cor do Texto", "Gradiente"), a full-width `q-toggle` for history (hotkey `H`), an outline pill "Cores" button, and a flat right-aligned version button.

### Gradient Swatch Buttons (Gradients page)
- **Style:** full-bleed gradient chips (min-width 100px, 12-col/5-col responsive grid) whose label text flips between `#000` and `#FFF` based on the HSP luminance of the first color — the one place foreground color is derived from a gradient stop, and it is computed, never guessed.

### Signature Component: The Stack Display
The four stacked pill rows ARE the product. They are read-only buttons (copy-on-click), show depth-position icons (`looks_4` → `looks_one`), and carry the live in-progress entry. Treat them as display furniture that happens to be clickable — never replace them with a conventional single-line display field.

## Do's and Don'ts

### Do:
- **Do** keep every resting surface flat and outlined: transparent fill + 1px `currentColor` border (pill radius 28px for labelled controls).
- **Do** design against the default teal gradient first — the foreground must stay legible over Shadowed Pine → Deep Petrol Teal → Bright Lagoon and over any user swatch.
- **Do** keep the instrument column at 400px max with 8px gutters and the 4-column key grid; the 719px breakpoint is where the history rail moves below the keypad.
- **Do** keep text theme binary (white on dark, black on light) and let Quasar's caption grey be the only secondary tone.
- **Do** put a 1000ms tooltip and an `aria-label` on every icon-only control, matching the incumbent coverage.

### Don't:
- **Don't** add box-shadows, elevation cards, or beveled/skeuomorphic key treatments — the system is flat by decree.
- **Don't** add a second typeface or a "calculator-style" mono/display font.
- **Don't** fill foreground elements with gradient colors or brand teal; teal lives in the canvas, outlines live in the UI.
- **Don't** invent radii beyond the set — 28px pills, 50% rounds, 4px fields — or spacing steps outside 4px / 8px / 16px.
- **Don't** spread the manifest's legacy navy (`#1a2a6c`) into UI elements — it is packaging metadata, not part of the palette.
