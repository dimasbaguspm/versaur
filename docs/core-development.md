# `@versaur/core` Development Guide

## 1. Overview

`@versaur/core` is the foundational package of the Versaur design system. It is a **pure CSS package with zero JavaScript runtime** — it exports CSS modules, design tokens, and the generated class-name mappings that framework wrappers consume.

Three categories of consumer depend on core:

```
┌─────────────────────────────────────────────────────────────┐
│                      @versaur/core                          │
│  CSS modules · Design tokens · Generated types              │
└─────┬──────────────┬──────────────────┬─────────────────────┘
      │              │                  │
      ▼              ▼                  ▼
 Framework       @versaur/tooling    End-user apps
 wrappers        (CSS parsing →      (tokens CSS
 (@versaur/react  type generation)    imported in
  /vue/angular)                       app root)
```

How each consumer uses core:

- **Framework wrappers** import scoped class-name mappings (`buttonStyles`) and pre-built CSS (`import "@versaur/core/button.css"`) as a side-effect. They also import generated types for type safety.
- **`@versaur/tooling`** parses CSS data-attribute selectors from core's `.module.css` files and generates TypeScript types that both core and wrappers consume.
- **End-user apps** import the design tokens CSS (`@versaur/core/tokens`) in their app root to set CSS custom properties globally.

For the React wrapper layer, see [react-development.md](./react-development.md).

## 2. File naming

All files use **kebab-case**. No PascalCase or camelCase filenames.

| Convention                 | Example                     |
| -------------------------- | --------------------------- |
| CSS module                 | `button.module.css`         |
| Generated types            | `button.types.generated.ts` |
| Generated CSS declarations | `button.module.css.d.ts`    |
| Token file                 | `colors.css`                |
| Barrel file                | `index.ts`                  |
| Token aggregator           | `index.css`                 |

## 3. Directory layout

```
packages/core/src/
├── index.ts                              # Root barrel — re-exports all components + tokens
├── tokens/
│   ├── index.css                         # Aggregator: imports all token files + base resets
│   ├── colors.css                        # Primitive + semantic color tokens, dark mode overrides
│   ├── spacing.css                       # 4px-based spacing scale
│   ├── typography.css                    # Font families, sizes, weights, line heights
│   └── effects.css                       # Radius, shadows, focus ring, transitions
└── components/
    └── <name>/
        ├── <name>.module.css             # All styling via data-attribute selectors
        ├── <name>.module.css.d.ts        # GENERATED: TypeScript declarations for CSS module
        ├── <name>.types.generated.ts     # GENERATED: Data-attribute types & namespace
        └── index.ts                      # Barrel: exports styles + re-exports types
```

## 4. Token architecture

Design tokens use a **three-layer model**:

```
Primitive tokens  →  Semantic tokens  →  Component-level tokens (future)
(raw values)         (purpose-driven)     (per-component indirection)
```

### Primitive tokens

Raw color scales, spacing values, and typographic constants. These **never change** between color modes.

```css
/* colors.css — primitive */
--color-blue-50: #eff6ff;
--color-blue-500: #3b82f6;
--color-blue-900: #1e3a8a;
```

### Semantic tokens

Purpose-driven tokens that reference primitives. These **do change** between light and dark mode via `@media (prefers-color-scheme: dark)`.

```css
/* colors.css — semantic (light mode) */
--color-primary: var(--color-blue-600);
--color-primary-hover: var(--color-blue-700);
--color-text-primary: var(--color-gray-900);
--color-background: #ffffff;
```

```css
/* colors.css — semantic (dark mode override) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: var(--color-blue-500);
    --color-primary-hover: var(--color-blue-400);
    --color-text-primary: var(--color-gray-50);
    --color-background: var(--color-gray-900);
  }
}
```

### Component-level tokens

Components use a three-layer indirection pattern so consumers can customize individual components without affecting the global design system:

```
Global token → Component override token → Private token
--color-primary → --vers-comp-button-primary-bg → --_bg
```

See [section 6](#6-component-level-token-pattern) for the full pattern and naming convention.

## 5. Token categories

All tokens are defined as CSS custom properties in `:root`. Naming convention: `--<category>-<name>` (no custom prefix).

### Colors (`colors.css`)

**Primitive scales** — 4 color scales, each with 10 stops (50–900):

| Scale | Example range                            |
| ----- | ---------------------------------------- |
| Blue  | `--color-blue-50` … `--color-blue-900`   |
| Gray  | `--color-gray-50` … `--color-gray-900`   |
| Red   | `--color-red-50` … `--color-red-900`     |
| Green | `--color-green-50` … `--color-green-900` |

**Semantic tokens** — ~20 tokens organized by purpose:

| Group     | Tokens                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------- |
| Primary   | `--color-primary`, `--color-primary-hover`, `--color-primary-active`, `--color-primary-text`         |
| Secondary | `--color-secondary`, `--color-secondary-hover`, `--color-secondary-active`, `--color-secondary-text` |
| Danger    | `--color-danger`, `--color-danger-hover`, `--color-danger-active`, `--color-danger-text`             |
| Text      | `--color-text-primary`, `--color-text-secondary`, `--color-text-disabled`                            |
| Border    | `--color-border`, `--color-border-focus`                                                             |
| Surface   | `--color-background`, `--color-surface`                                                              |

All semantic tokens have dark mode overrides via `@media (prefers-color-scheme: dark)`.

### Spacing (`spacing.css`)

4px (`0.25rem`) base unit, non-linear progression:

| Token          | Value            |
| -------------- | ---------------- |
| `--spacing-0`  | `0`              |
| `--spacing-1`  | `0.25rem` (4px)  |
| `--spacing-2`  | `0.5rem` (8px)   |
| `--spacing-3`  | `0.75rem` (12px) |
| `--spacing-4`  | `1rem` (16px)    |
| `--spacing-5`  | `1.25rem` (20px) |
| `--spacing-6`  | `1.5rem` (24px)  |
| `--spacing-8`  | `2rem` (32px)    |
| `--spacing-10` | `2.5rem` (40px)  |
| `--spacing-12` | `3rem` (48px)    |
| `--spacing-16` | `4rem` (64px)    |

### Typography (`typography.css`)

| Category          | Tokens                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Font families (2) | `--font-sans` (system stack), `--font-mono` (monospace stack)                                                          |
| Font sizes (6)    | `--font-size-xs` (12px) … `--font-size-2xl` (24px)                                                                     |
| Line heights (3)  | `--line-height-tight` (1.25), `--line-height-normal` (1.5), `--line-height-relaxed` (1.75)                             |
| Font weights (4)  | `--font-weight-normal` (400), `--font-weight-medium` (500), `--font-weight-semibold` (600), `--font-weight-bold` (700) |

### Effects (`effects.css`)

| Category          | Tokens                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Border radius (7) | `--radius-none` (0) … `--radius-full` (9999px)                                                                                 |
| Shadows (5)       | `--shadow-sm`, `--shadow-base`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`                                                    |
| Focus ring (3)    | `--focus-ring-width` (2px), `--focus-ring-offset` (2px), `--focus-ring-color` (references `--color-border-focus`)              |
| Transitions (3)   | `--transition-fast` (150ms), `--transition-base` (200ms), `--transition-slow` (300ms) — all use `cubic-bezier(0.4, 0, 0.2, 1)` |

## 6. Component-level token pattern

Components use a **three-layer indirection** pattern for CSS custom properties. This allows consumers to customize individual components without affecting the global design system.

### Three-layer flow

```
Global semantic token → Component override token → Private token
--color-primary       → --vers-comp-button-primary-bg → --_bg
```

1. **Private tokens** (`--_bg`, `--_color`, `--_border-color`, etc.) — scoped to the component's base class. All property declarations reference these. The `--_` prefix makes them component-local by convention.
2. **Component override tokens** (`--vers-comp-button-*`) — the public API for consumers. Each private token defaults to its override token via `var(--vers-comp-button-*, <fallback>)`.
3. **Global semantic tokens** (`--color-primary`, `--spacing-4`, etc.) — the fallback values when no override is set.

### How it works in practice

The base class declares private tokens with the override → fallback chain:

```css
.button {
  --_bg: var(--vers-comp-button-bg, var(--color-primary));
  --_color: var(--vers-comp-button-color, #ffffff);
  --_border-color: var(--vers-comp-button-border-color, var(--color-primary));

  background-color: var(--_bg);
  color: var(--_color);
  border: 1px solid var(--_border-color);
}
```

Each variant overrides the private tokens with variant-specific override tokens:

```css
.button[data-variant="secondary"] {
  --_bg: var(--vers-comp-button-secondary-bg, var(--color-secondary));
  --_color: var(--vers-comp-button-secondary-color, #ffffff);
  --_border-color: var(--vers-comp-button-secondary-border-color, transparent);
}
```

### Consumer override

Consumers can customize a single component without affecting the global design system by setting component override tokens:

```css
/* Only changes button — no effect on other components */
.my-custom-button {
  --vers-comp-button-primary-bg: #8b5cf6;
  --vers-comp-button-primary-hover-bg: #7c3aed;
}
```

### Naming convention

Component override tokens follow the pattern `--vers-comp-<component>-<variant?>-<state?>-<property>`:

| Token                                         | Purpose                          |
| --------------------------------------------- | -------------------------------- |
| `--vers-comp-button-bg`                       | Default background               |
| `--vers-comp-button-primary-bg`               | Primary variant background       |
| `--vers-comp-button-primary-hover-bg`         | Primary variant hover background |
| `--vers-comp-button-sm-height`                | Small size height                |
| `--vers-comp-button-focus-ring-color`         | Default focus ring color         |
| `--vers-comp-button-primary-focus-ring-color` | Primary variant focus ring color |

## 7. Component CSS module pattern

Each component has a single `.module.css` file. All visual states are driven by **data-attribute selectors** — no class toggling for state.

### Data-attribute types

| Type              | CSS selector               | Example           |
| ----------------- | -------------------------- | ----------------- |
| Enumerated        | `[data-variant="primary"]` | Variants, sizes   |
| Boolean (present) | `[data-loading]`           | Loading, disabled |
| ARIA-driven       | `[aria-pressed="true"]`    | Pressed state     |

### Base class

The base class sets layout, typography, sizing defaults, transitions, and resets:

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);

  /* Sizing — private tokens default to medium */
  --_height: var(--vers-comp-button-height, 2.5rem);
  --_px: var(--vers-comp-button-padding-x, var(--spacing-4));
  --_font-size: var(--vers-comp-button-font-size, var(--font-size-sm));
  --_gap: var(--vers-comp-button-gap, var(--spacing-2));

  height: var(--_height);
  padding: 0 var(--_px);
  font-size: var(--_font-size);
  gap: var(--_gap);

  /* Color — private tokens default to primary */
  --_bg: var(--vers-comp-button-bg, var(--color-primary));
  --_color: var(--vers-comp-button-color, #ffffff);
  --_border-color: var(--vers-comp-button-border-color, var(--color-primary));

  /* Focus ring */
  --_focus-ring-width: var(--vers-comp-button-focus-ring-width, var(--focus-ring-width));
  --_focus-ring-offset: var(--vers-comp-button-focus-ring-offset, var(--focus-ring-offset));
  --_focus-ring-color: var(--vers-comp-button-focus-ring-color, var(--focus-ring-color));

  background-color: var(--_bg);
  color: var(--_color);
  border: 1px solid var(--_border-color);
  border-radius: var(--_radius);
  cursor: pointer;

  transition-property: background-color, border-color, color, box-shadow;
  transition-duration: var(--transition-base);

  outline: none;
}
```

### Enumerated variants

Each variant overrides private tokens with variant-specific values via the three-layer token pattern:

```css
.button[data-variant="primary"] {
  --_bg: var(--vers-comp-button-primary-bg, var(--color-primary));
  --_color: var(--vers-comp-button-primary-color, #ffffff);
  --_border-color: var(--vers-comp-button-primary-border-color, transparent);
  --_focus-ring-color: var(--vers-comp-button-primary-focus-ring-color, var(--color-primary));
}
```

### Hover / active guards

Interactive states **must** exclude disabled and loading states:

```css
.button[data-variant="primary"]:hover:not([data-disabled]):not([data-loading]) {
  --_bg: var(--vers-comp-button-primary-hover-bg, var(--color-primary-hover));
  --_border-color: var(--vers-comp-button-primary-hover-border-color, transparent);
}

.button[data-variant="primary"]:active:not([data-disabled]):not([data-loading]) {
  --_bg: var(--vers-comp-button-primary-active-bg, var(--color-primary-active));
  --_border-color: var(--vers-comp-button-primary-active-border-color, transparent);
}
```

### ARIA-driven styling

Pressed state is driven by `aria-pressed`, set by the framework wrapper:

```css
.button[data-variant="primary"][aria-pressed="true"] {
  background-color: var(--color-primary-active);
  border-color: var(--color-primary-active);
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.1);
}
```

### Boolean states

Disabled and loading are boolean data-attributes (present/absent):

```css
.button[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.button[data-loading] {
  position: relative;
  pointer-events: none;
}
```

> **Note:** The disabled state intentionally omits `pointer-events: none` so that `cursor: not-allowed` is visible to the user. Click prevention is handled by the framework wrapper (JS), not CSS. The loading state uses `pointer-events: none` since the cursor style is not relevant during loading.

### Focus ring

All interactive components use `:focus-visible` with private token variables:

```css
.button:focus-visible {
  outline: var(--_focus-ring-width) solid var(--_focus-ring-color);
  outline-offset: var(--_focus-ring-offset);
}
```

#### Per-variant focus ring colors

Each variant overrides `--_focus-ring-color` with its own base color so focus rings visually match the variant:

```css
.button[data-variant="primary"] {
  --_focus-ring-color: var(--vers-comp-button-primary-focus-ring-color, var(--color-primary));
}
.button[data-variant="secondary"] {
  --_focus-ring-color: var(--vers-comp-button-secondary-focus-ring-color, var(--color-secondary));
}
.button[data-variant="danger"] {
  --_focus-ring-color: var(--vers-comp-button-danger-focus-ring-color, var(--color-danger));
}
```

This ensures the focus ring color always matches the visual weight of the variant, improving accessibility cues.

## 8. CSS module scoping

### Scoping pattern

CSS module class names use a deterministic (non-hashed) scoping pattern:

```
versaur-[name]-[local]
```

Where `[name]` is the CSS module filename (without `.module.css`) and `[local]` is the original class name.

**Example**: `.button` in `button.module.css` → `versaur-button-button`

This is configured in `packages/core/vite.config.ts`:

```ts
css: {
  modules: {
    generateScopedName: 'versaur-[name]-[local]',
  },
},
```

### Build output

The build strips `.module` from output CSS filenames so consumers don't re-process them as CSS modules:

```ts
assetFileNames: (assetInfo) => {
  if (assetInfo.name?.endsWith('.css')) {
    return assetInfo.name.replace('.module.css', '.css');
  }
  return 'assets/[name]-[hash][extname]';
},
```

This means `button.module.css` becomes `button.css` in dist, and consumers import `@versaur/core/button.css`.

## 9. Build pipeline

Core uses Vite in library mode, outputting ES modules only.

### Full `vite.config.ts`

```ts
import { defineConfig } from "vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return assetInfo.name.replace(".module.css", ".css")
          }
          return "assets/[name]-[hash][extname]"
        },
      },
    },
  },
})
```

### Key build options

| Option                       | Effect                                                 |
| ---------------------------- | ------------------------------------------------------ |
| `formats: ['es']`            | ES modules only — no CommonJS                          |
| `cssCodeSplit: true`         | Separate CSS file per component (enables tree-shaking) |
| `preserveModules: true`      | Output mirrors `src/` directory structure              |
| `preserveModulesRoot: 'src'` | Strip `src/` prefix from output paths                  |
| `assetFileNames`             | Strips `.module` from CSS filenames                    |
| `vite-plugin-dts`            | Generates `.d.ts` declarations alongside JS output     |

### Source-first dev resolution

Each package declares a `"source"` condition in its `package.json` exports. When the docs dev server runs, Vite resolves `@versaur/core` imports directly from source files — no build step needed during development. This is configured via `resolve.conditions: ['source']` in the docs app's Vite config.

## 10. Type generation

CSS is the **single source of truth** for data-attribute types. A PostCSS script in `@versaur/tooling` parses `[data-*]` selectors from CSS modules and generates TypeScript types.

### Pipeline

```
button.module.css  ──parse──▶  generate-types.ts  ──▶  button.types.generated.ts
                                                        button.module.css.d.ts
```

1. **Parser** (`css-parser.ts`): walks CSS rules, extracts `[data-*]` selectors, classifies each as enumerated (`data-variant="primary"`) or boolean (`data-loading`).
2. **Codegen** (`codegen.ts`): generates union types per enumerated attribute, a `DataAttrs` interface, and a namespace with re-exports.

### Generated output — `button.types.generated.ts`

```ts
// AUTO-GENERATED by @versaur/tooling — DO NOT EDIT
// Source: button.module.css

export type ButtonSize = "large" | "medium" | "small"
export type ButtonVariant = "danger" | "primary" | "secondary"

export interface ButtonDataAttrs {
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  loading?: boolean
}

export namespace Button {
  export type Size = ButtonSize
  export type Variant = ButtonVariant
  export type DataAttrs = ButtonDataAttrs
}
```

### Generated output — `button.module.css.d.ts`

```ts
// AUTO-GENERATED by @versaur/tooling — DO NOT EDIT
declare const styles: {
  readonly button: string
}
export default styles
```

### Commands

| Command                       | Purpose                                    |
| ----------------------------- | ------------------------------------------ |
| `pnpm generate:types`         | Parse CSS and regenerate all type files    |
| `pnpm generate:types --check` | Verify generated files are up to date (CI) |

Generated files (`*.types.generated.ts`, `*.module.css.d.ts`) are committed to git and auto-discovered via glob.

## 11. Subpath exports

The `package.json` `exports` field defines 5 subpath patterns:

| Subpath          | Resolves to (source)                        | Purpose                                              |
| ---------------- | ------------------------------------------- | ---------------------------------------------------- |
| `.`              | `./src/index.ts`                            | Root barrel — all exports                            |
| `./tokens`       | `./src/tokens/index.css`                    | Design tokens CSS (imported in app root)             |
| `./<name>.css`   | `./src/components/<name>/<name>.module.css` | Component CSS (side-effect import)                   |
| `./components/*` | `./src/components/*/index.ts`               | Component TS (wildcard, class-name mappings + types) |
| `./styles/*`     | `./src/components/*/*.module.css`           | Raw CSS module (wildcard)                            |

When adding a new component, only `./<name>.css` needs a manual entry in `package.json`:

```json
"./<name>.css": {
  "source": "./src/components/<name>/<name>.module.css",
  "import": "./dist/components/<name>/<name>.module.css"
}
```

The wildcard patterns (`./components/*`, `./styles/*`) automatically cover new components.

## 12. Adding a new component — core-side checklist

- [ ] Create `packages/core/src/components/<name>/<name>.module.css` with:
  - Base class using design tokens
  - Enumerated data-attribute selectors (`[data-variant="..."]`, `[data-size="..."]`)
  - Boolean data-attribute selectors (`[data-disabled]`, `[data-loading]`)
  - Hover/active guards: `:hover:not([data-disabled]):not([data-loading])`
  - Focus ring: `:focus-visible` with `--focus-ring-*` tokens
- [ ] Create `packages/core/src/components/<name>/index.ts` barrel:
  ```ts
  export { default as <name>Styles } from './<name>.module.css';
  export * from './<name>.types.generated';
  export type { <Name> } from './<name>.types.generated';
  ```
- [ ] Export from root `packages/core/src/index.ts`:
  ```ts
  export * from "./components/<name>"
  ```
- [ ] Add `./<name>.css` entry in `packages/core/package.json` exports
- [ ] Run `pnpm generate:types` — creates `<name>.types.generated.ts` and `<name>.module.css.d.ts`
- [ ] Verify: `pnpm generate:types --check` passes
- [ ] Verify: `pnpm build:packages` completes without errors

## 13. Adding new tokens — checklist

- [ ] Add to the appropriate existing category file (`colors.css`, `spacing.css`, `typography.css`, `effects.css`)
  - If creating a new category: create `<category>.css` in `packages/core/src/tokens/`
- [ ] If new file: add `@import './<category>.css';` in `tokens/index.css`
- [ ] For color tokens that need dark mode support:
  - Add the semantic token in `:root { ... }`
  - Add the dark mode override in `@media (prefers-color-scheme: dark) { :root { ... } }`
- [ ] Verify in browser — tokens are plain CSS custom properties and do not require type generation
