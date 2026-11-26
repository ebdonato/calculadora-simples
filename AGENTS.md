# AGENTS.md

## Project

Quasar **v1** (Vue 2, webpack via `@quasar/app` v2) PWA — an RPN calculator. Not Quasar v2/Vue 3: lifecycle hooks are `beforeDestroy`, config is `quasar.conf.js`, and TypeScript is off (`supportTS: false`).

All calculator logic (stack, keyboard handling, persistence) lives in a single file: `src/pages/Index.vue`. There is no separate logic module, no Vuex usage, and no tests.

Stack conventions (easy to get wrong):

- `stack[0]` is the **top** of the stack — entries use `unshift`/`shift`.
- `preStack` is the in-progress entry as a **string** (`""` = empty, `"0"` = default).
- Both persist to Quasar LocalStorage (`preStack`, `stack`) via watchers; `mounted()` restores them.

## Commands

- `npm run dev` — dev server on port 8080 (local `quasar` binary exists; no global install needed)
- `npm run dev-pwa` / `npm run build-pwa` — PWA mode; build output is `dist/pwa`
- `npm run icongenie` — regenerates `public/icons/` from `./public/icon.png` (overwrites them)
- `npm run firebase-deploy` — Firebase hosting deploy; needs the `firebase` CLI installed globally (not a repo dependency)

There are **no** lint, typecheck, or test commands — don't invent them; verify changes manually with `npm run dev`.

## Deploy

- **GitHub Pages** — `.github/workflows/deploy-pages.yml` runs on push to **`master`** (not `main`): `npm ci` → `npx quasar build -m pwa` with `PUBLIC_PATH: /calculadora-simples/`, artifact `dist/pwa`.
- `quasar.conf.js` sets `publicPath: process.env.PUBLIC_PATH || '/'`. A local build without `PUBLIC_PATH` produces asset paths that break when served from a Pages subdirectory — set the env var to reproduce CI builds.
- **Firebase** — `firebase.json` serves `dist/pwa`; default project `calculadorasimples2020` (`.firebaserc`).

## Gotchas

- `operation()` computes results with `eval()` — keep expressions constrained to numbers and the known operators.
- Keyboard input is a `window` `keydown` listener in `Index.vue` (`handleKeydown`); the README table documents the keys. It deliberately skips modifier combos and form-field targets, and calls `preventDefault()` for handled keys — preserve that behavior when adding keys.
- The README's "Não funcionar ainda, apenas leiaute" is stale: the calculator is implemented.
- PWA uses Workbox `InjectManifest`; the custom service worker is `src-pwa/custom-service-worker.js`.
