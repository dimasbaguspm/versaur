# Versaur Design System

Framework-agnostic design system using CSS modules + data-attribute state machines at the core, with thin framework wrappers. React is shipped; Vue and Angular are planned.

## Monorepo structure

```
packages/core     — @versaur/core: CSS modules, design tokens, no JS runtime
packages/react    — @versaur/react: React wrappers (peer dep on React 18/19)
packages/icons    — @versaur/icons: SVG icon library (peer dep on React 18/19)
packages/tooling  — @versaur/tooling: PostCSS type extraction (private, dev-only)
apps/react-doc    — Storybook for React component documentation
```

Package manager: **pnpm** (workspace protocol `workspace:*` for internal deps).

## Commands

```sh
pnpm dev              # Start Storybook dev server for react-doc
pnpm generate:types   # Generate TS types from CSS modules (via @versaur/tooling)
pnpm build:packages   # Build core + react + icons
pnpm build:docs       # Build Storybook static site
pnpm build            # Generate types + build everything
pnpm release          # Build packages + changeset publish
```

## Architecture

### Core (`@versaur/core`)

- Pure CSS — no JavaScript runtime. Exports CSS modules and a JS module that re-exports the generated class name mappings (e.g. `buttonStyles.button`).
- **Design tokens** live in `packages/core/src/tokens/` as CSS custom properties: `colors.css`, `spacing.css`, `typography.css`, `effects.css`.
- **Data-attribute selectors** drive all state styling. CSS targets `[data-variant="primary"]`, `[data-size="small"]`, `[data-loading]`, `[data-disabled]`, etc. — no class toggling for state.
- **Component tokens** use a three-layer pattern: global semantic tokens (`--color-primary`) are wrapped in component override tokens (`--vers-comp-button-primary-bg`) which set private tokens (`--_bg`). This allows consumers to customize individual components without affecting the global design system.
- **Per-variant focus ring**: Each variant overrides `--_focus-ring-color` with its own base color so focus rings visually match the variant.
- **Disabled state**: CSS uses `cursor: not-allowed` without `pointer-events: none`. Click prevention is handled by framework wrappers in JS.
- CSS module scoping pattern: `versaur-[name]-[local]` (set in `packages/core/vite.config.ts`).
- The build strips `.module` from output CSS filenames so consumers don't re-process them.

### Framework wrappers (e.g. `@versaur/react`)

- Thin layers that convert component props into `data-*` attributes via the `useDataAttrs` hook (`packages/react/src/hooks/use-data-attrs.ts`).
- Wrappers import the scoped class names from core (`buttonStyles`) and auto-import the pre-built CSS (`import "@versaur/core/button.css"`) as a side-effect, so consumers get styles automatically.
- **Class name merging**: All components use the `cx` utility (`packages/react/src/utils/cx.ts`) to merge component base classes with user-supplied `className` props. This prevents silent style overwrites and allows consumers to extend component styling.
- ARIA attributes (`aria-pressed`, `aria-busy`, `aria-disabled`) are set directly from props.
- Components use `forwardRef` for ref forwarding.

### Docs (`apps/react-doc`)

- Storybook-based documentation for React components.
- Component stories live in `apps/react-doc/src/stories/*.stories.tsx`.
- Uses Storybook's built-in component documentation and interactive playground features.
- **Source-first dev resolution**: Vite is configured with `resolve.conditions: ['source']`. Each package declares a `"source"` condition in its `package.json` exports pointing to source files. This means Storybook resolves all `@versaur/*` imports from source — no manual aliases needed. Adding new components or subpath exports requires zero alias maintenance.

## Class name merging

All React components use the `cx` utility to merge component base classes with user-supplied `className` props:

```tsx
// cx utility filters falsy values and joins strings with spaces
className={cx(baseStyles.button, userClassName)}

// This allows:
<Button className="custom-margin">Click me</Button>
// Renders with both 'versaur-button-button' and 'custom-margin'
```

**Pattern in all React components:**

1. Import `cx`: `import { cx } from "../../../utils/cx"`
2. Destructure `className`: `({ variant, disabled, className, ...rest })`
3. Apply to element: `className={cx(componentStyles.base, className)}`

This ensures user-supplied styles are preserved and don't silently overwrite component styles.

## Block Component Behaviors

### Dialog - Scroll Prevention

The Dialog component automatically prevents parent document scrolling when open to maintain focus:

- When dialog opens: Sets `document.documentElement.style.overflow = "hidden"`
- When dialog closes: Restores previous overflow behavior
- Cleanup on unmount ensures styles are cleaned up if component unmounts

This provides a seamless UX by keeping the dialog centered and preventing distraction from background content.

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

## Component organization

Components are organized into four categories in both core and React packages:

```
packages/core/src/components/
  ├── primitive/    — Basic building blocks (Button, Badge, Text, Heading, Avatar, etc.)
  ├── forms/        — Form controls (TextInput, Select, Checkbox, Radio, etc.)
  ├── blocks/       — Composite components (Card, Modal, Dialog, Sidebar, etc.)
  └── utils/        — Utility components

packages/react/src/components/
  ├── primitive/    — React wrappers for primitive components
  ├── forms/        — React wrappers for form components
  ├── blocks/       — React wrappers for block components
  └── utils/        — React wrappers for utility components
```

## Component file structure

Each component follows this layout:

```
packages/core/src/components/<category>/<name>/
  <name>.module.css            — All styling via data-attribute selectors
  <name>.module.css.d.ts       — GENERATED: TypeScript declarations for CSS module
  <name>.types.generated.ts    — GENERATED: Data-attribute types & namespace
  index.ts                     — Re-exports

packages/react/src/components/<category>/<name>/
  <name>.tsx              — React component (forwardRef, useDataAttrs)
  <name>.types.ts         — Props interface (imports types from @versaur/core)
  index.ts                — Re-exports + namespace declaration merging

apps/react-doc/src/stories/
  <name>.stories.tsx      — Storybook stories for component documentation
```

## Importing design tokens

Design tokens (CSS custom properties) are available via:

```ts
import "@versaur/core/tokens"
```

This includes all color, spacing, typography, and effects tokens. In apps, import this once in your root/entry file. In Storybook, it's imported in `.storybook/preview.ts`.

## Adding a new component

1. **Core**: Create `packages/core/src/components/<category>/<name>/<name>.module.css` with data-attribute selectors. Add an `index.ts`. Export from `packages/core/src/components/<category>/index.ts`.
2. **Generate types**: Run `pnpm generate:types` — this creates the `.types.generated.ts` and `.module.css.d.ts` files automatically.
3. **React wrapper**: Create the component in `packages/react/src/components/<category>/<name>/` following the button pattern — types file (importing from `@versaur/core/<category>`), component using `useDataAttrs`, and index with namespace merging. Export from `packages/react/src/components/<category>/index.ts`.
4. **Storybook**: Add a story file at `apps/react-doc/src/stories/<name>.stories.tsx` with component documentation and examples.

## Key files

| File                                                        | Purpose                                              |
| ----------------------------------------------------------- | ---------------------------------------------------- |
| `packages/core/vite.config.ts`                              | CSS module scoping config (`versaur-[name]-[local]`) |
| `packages/core/src/tokens/`                                 | Design tokens (CSS custom properties)                |
| `packages/react/src/utils/cx.ts`                            | Class name merging utility (filters + joins)         |
| `packages/react/src/hooks/use-data-attrs.ts`                | Core hook: props to data-attributes                  |
| `packages/react/src/components/primitive/button/button.tsx` | Reference component implementation                   |
| `packages/icons/src/index.ts`                               | Icon library registry and exports                    |
| `apps/react-doc/src/stories/*.stories.tsx`                  | Storybook component documentation                    |
| `packages/tooling/src/generate-types.ts`                    | PostCSS type extraction entry point                  |
| `packages/tooling/src/css-parser.ts`                        | CSS data-attribute selector parser                   |
| `packages/tooling/src/codegen.ts`                           | TypeScript codegen from parsed CSS                   |
