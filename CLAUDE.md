# Versaur Design System

Framework-agnostic design system using CSS modules + data-attribute state machines at the core, with thin framework wrappers. React is shipped; Vue and Angular are planned.

## Monorepo structure

```
packages/core     — @versaur/core: CSS modules, design tokens, no JS runtime
packages/react    — @versaur/react: React wrappers (peer dep on React 18/19)
packages/tooling  — @versaur/tooling: PostCSS type extraction (private, dev-only)
apps/docs         — Astro static site with React islands, framework switcher
```

Package manager: **pnpm** (workspace protocol `workspace:*` for internal deps).

## Commands

```sh
pnpm dev              # Start docs dev server (Astro)
pnpm generate:types   # Generate TS types from CSS modules (via @versaur/tooling)
pnpm build:packages   # Build core + react
pnpm build:docs       # Build docs site
pnpm build            # Generate types + build everything
pnpm release          # Build packages + changeset publish
```

## Architecture

### Core (`@versaur/core`)

- Pure CSS — no JavaScript runtime. Exports CSS modules and a JS module that re-exports the generated class name mappings (e.g. `buttonStyles.button`).
- **Design tokens** live in `packages/core/src/tokens/` as CSS custom properties: `colors.css`, `spacing.css`, `typography.css`, `effects.css`.
- **Data-attribute selectors** drive all state styling. CSS targets `[data-variant="primary"]`, `[data-size="small"]`, `[data-loading]`, `[data-disabled]`, etc. — no class toggling for state.
- CSS module scoping pattern: `versaur-[name]-[local]` (set in `packages/core/vite.config.ts`).
- The build strips `.module` from output CSS filenames so consumers don't re-process them.

### Framework wrappers (e.g. `@versaur/react`)

- Thin layers that convert component props into `data-*` attributes via the `useDataAttrs` hook (`packages/react/src/hooks/use-data-attrs.ts`).
- Wrappers import the scoped class names from core (`buttonStyles`) and the pre-built CSS (`@versaur/core/button.css`).
- ARIA attributes (`aria-pressed`, `aria-busy`, `aria-disabled`) are set directly from props.
- Components use `forwardRef` for ref forwarding.

### Docs (`apps/docs`)

- Astro site with `@astrojs/react` integration for interactive islands.
- Framework switcher lets users toggle code examples between frameworks.
- Component pages live in `apps/docs/src/pages/docs/components/`.
- Code blocks use Shiki for syntax highlighting.
- **Source-first dev resolution**: Vite is configured with `resolve.conditions: ['source']`. Each package declares a `"source"` condition in its `package.json` exports pointing to source files. This means the docs dev server resolves all `@versaur/*` imports from source — no manual aliases needed. Adding new components or subpath exports requires zero alias maintenance.

## Type generation

CSS is the single source of truth for data-attribute types. A PostCSS script in `@versaur/tooling` parses `[data-*]` selectors from CSS modules and generates TypeScript types.

```
button.module.css ──parse──▶ generate-types.ts ──▶ button.types.generated.ts
                                                    button.module.css.d.ts
```

- Run `pnpm generate:types` after changing CSS data-attribute selectors.
- Run `pnpm generate:types --check` in CI to verify files are fresh.
- Generated files (`*.types.generated.ts`, `*.module.css.d.ts`) are committed to git.
- React components import types from `@versaur/core` and use namespace merging (`Button.Variant`, `Button.Props`).

## Component file structure

Each component follows this layout in both core and framework packages:

```
packages/core/src/components/button/
  button.module.css            — All styling via data-attribute selectors
  button.module.css.d.ts       — GENERATED: TypeScript declarations for CSS module
  button.types.generated.ts    — GENERATED: Data-attribute types & namespace
  index.ts                     — Re-exports

packages/react/src/components/button/
  button.tsx              — React component (forwardRef, useDataAttrs)
  button.types.ts         — Props interface (imports types from @versaur/core)
  examples.ts             — Code snippets for docs (per-framework)
  preview.tsx             — Live preview component for docs
  index.ts                — Re-exports + namespace declaration merging
```

## Adding a new component

1. **Core**: Create `packages/core/src/components/<name>/<name>.module.css` with data-attribute selectors. Add an `index.ts`. Export from `packages/core/src/index.ts`. Add an export entry in `packages/core/package.json`.
2. **Generate types**: Run `pnpm generate:types` — this creates the `.types.generated.ts` and `.module.css.d.ts` files automatically.
3. **React wrapper**: Create the component in `packages/react/src/components/<name>/` following the button pattern — types file (importing from `@versaur/core`), component using `useDataAttrs`, examples, preview, and index with namespace merging. Export from `packages/react/src/index.ts` and add to `packages/react/package.json` exports.
4. **Docs**: Add a page at `apps/docs/src/pages/docs/components/<name>.astro` with preview and code examples.

## Key files

| File | Purpose |
|------|---------|
| `packages/core/vite.config.ts` | CSS module scoping config (`versaur-[name]-[local]`) |
| `packages/core/src/tokens/` | Design tokens (CSS custom properties) |
| `packages/react/src/hooks/use-data-attrs.ts` | Core hook: props to data-attributes |
| `packages/react/src/components/button/button.tsx` | Reference component implementation |
| `apps/docs/src/components/FrameworkSwitcher.tsx` | Framework toggle for docs |
| `apps/docs/src/components/CodeBlock.tsx` | Shiki-powered code blocks |
| `packages/tooling/src/generate-types.ts` | PostCSS type extraction entry point |
| `packages/tooling/src/css-parser.ts` | CSS data-attribute selector parser |
| `packages/tooling/src/codegen.ts` | TypeScript codegen from parsed CSS |
