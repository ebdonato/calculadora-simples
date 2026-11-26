# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Portuguese-speaking users who know or are learning RPN (Reverse Polish Notation) calculators, doing quick everyday calculations — mostly at a keyboard on desktop, also by touch on mobile.

## Product Purpose

A super-simple RPN calculator PWA: enter numbers onto a visible stack, apply operators, get results. Success means fast, reliable computation where the stack state is always legible, the session survives a reload or install, and the tool stays out of the way.

## Positioning

RPN + personal flair: a strict, visible-stack RPN engine combined with personal, lively touches a neighboring calculator would not ship — customizable gradient backgrounds, an operation history with copy-to-clipboard, and a personal authorship identity. The README's own phrase for the spirit of the thing is "estilo R$1,99" (deliberately dead simple).

## Operating Context

- Keyboard-first desktop use (documented shortcut table in `README.md`: digits, `.`/`,`, Enter, `+ - * / ^`, Backspace, S to swap, Delete/Esc to clear) alongside touch input on mobile.
- Runs as an installable PWA; stack, in-progress entry, and history persist in Quasar LocalStorage and are restored on mount.
- UI language is Brazilian Portuguese throughout.

## Capabilities and Constraints

- RPN stack with four visible display lines; in-progress entry (`preStack`) is committed with Enter (Enter with no entry duplicates the top of stack).
- Operations: `+`, `-`, `*`, `/`, power (`x^y`); swap top two stack entries; backspace (digit or stack entry); clear stack (history preserved separately); clear history.
- Operation history (last 50 entries) with copy-to-clipboard on history rows and on each stack line.
- Settings: light/dark text theme, gradient direction (horizontal/vertical/diagonal/none), history visibility toggle.
- All user-facing copy is Brazilian Portuguese — a binding constraint confirmed for future work.
- PWA + offline persistence is a binding constraint: stack/history must survive reloads and work installed.
- No test suite, no lint/typecheck commands; verification is manual via `npm run dev`.
- `README.md` contains a stale "Não funcionar ainda, apenas leiaute" line — the calculator is fully implemented; documentation lags the code.
- Operations are computed via `eval()` over constrained expressions — keep expressions restricted to numbers and the known operators.

## Brand Commitments

- Name: **Calculadora RPN Super Simples** (`productName` in `package.json`), repo `calculadora-simples`.
- Personal authorship is part of the identity: @ebdonato credit in the README, the `eu.jpg` avatar button in the header, and theme color `#13505b` (icon generation).
- Personal flair (gradients, history, copy flows) is confirmed product identity, not decoration to strip in later work.

## Evidence on Hand

- `README.md` — feature description and keyboard shortcut table (contains the stale layout-only line noted above).
- `src/pages/Index.vue` — the full calculator: stack logic, keyboard handling, history, persistence.
- `src/assets/uiGradients.js` + `src/assets/defaultGradient.js` — curated gradient palette backing the personalization feature.
- `public/icon.png` and generated `public/icons/` — icon assets.
- Absences future work must not fabricate: no DESIGN.md, no testimonials/users/metrics, no tests, no accessibility audit or stated standard.

## Product Principles

1. The visible RPN stack is the interface — never replace stack entry with hidden algebraic input.
2. Personal flair is product: gradients, history, and copy flows are the differentiator, not expendable decoration.
3. Portuguese (pt-BR) voice and personal authorship ship in everything that ships.
4. Offline reliability and state persistence are part of the promise — the calculator remembers where you were.
5. Every action stays reachable by keyboard as well as touch; the documented shortcut table is a contract.

## Accessibility & Inclusion

Every control already carries an `aria-label` (plus tooltips) in `src/pages/Index.vue` — an asset to preserve. No formal accessibility standard or audit has been established for this product; record future requirements here rather than inventing them.
