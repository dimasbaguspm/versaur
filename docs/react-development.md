# `@versaur/react` Development Guide

## 1. Overview

`@versaur/react` is a thin React wrapper around `@versaur/core`. Its sole job is converting component props into HTML data-attributes and ARIA attributes so that `@versaur/core`'s CSS modules can style them.

Key relationships:

- **`@versaur/core`** owns all CSS, design tokens, and generated types. It is the single source of truth for styling and data-attribute contracts.
- **`@versaur/react`** has zero CSS of its own. It imports scoped class-name mappings and pre-built CSS from core, converts props to `data-*` attributes via the `useDataAttrs` hook, and sets ARIA attributes directly.
- **`@versaur/tooling`** parses CSS data-attribute selectors from core and generates TypeScript types that both packages consume.

## 2. File naming

All files use **kebab-case**. No PascalCase or camelCase filenames.

| Convention          | Example              |
| ------------------- | -------------------- |
| Component file      | `button.tsx`         |
| Types file          | `button.types.ts`    |
| Hook file           | `use-data-attrs.ts`  |
| Component directory | `components/button/` |
| Preview file        | `preview.tsx`        |
| Barrel file         | `index.ts`           |

## 3. Directory layout

```
packages/react/src/
├── index.ts                          # Root barrel — re-exports all public components + hooks
├── hooks/
│   └── use-data-attrs.ts             # Shared hook: props → data-* attributes
└── components/
    └── <name>/                       # One directory per component
        ├── <name>.tsx                # Component implementation
        ├── <name>.types.ts           # Props interface
        ├── preview.tsx               # Docs: sections, props metadata, installation
        └── index.ts                  # Barrel + namespace merging
```

Each component gets its own directory. The directory name matches the component name in kebab-case (`button/`, `dialog/`, `text-input/`).

## 4. Component patterns

### Regular pattern

For simple, single-element components (Button, Badge, Tag, etc.):

- Single `forwardRef` component in `<name>.tsx`
- Named `_Button` internally (underscore prefix indicates the unwrapped internal component)
- Exported as `Button` via namespace merging in `index.ts`
- One `.tsx` file, one `.types.ts` file

```tsx
// button.tsx
import { forwardRef } from "react"
import { buttonStyles } from "@versaur/core"
import "@versaur/core/button.css"
import { useDataAttrs } from "../../hooks/use-data-attrs"
import type { ButtonProps } from "./button.types"

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "medium", loading = false, disabled = false, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ variant, size, loading, disabled: disabled || loading })

    return (
      <button
        ref={ref}
        className={buttonStyles.button}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

_Button.displayName = "Button"
```

> **Disabled/loading click prevention:** Wrappers intercept `onClick` to prevent interaction when `disabled` or `loading` is true. This is necessary because the CSS disabled state uses `cursor: not-allowed` without `pointer-events: none`, so clicks still reach the element. The wrapper's `handleClick` guards against this:
>
> ```tsx
> const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
>   if (disabled || loading) {
>     e.preventDefault()
>     return
>   }
>   onClick?.(e)
> }
> ```

### Compound pattern

For multi-part components (Dialog, Select, Accordion, etc.):

- Root + sub-components: `Dialog.Root`, `Dialog.Trigger`, `Dialog.Content`
- Each part is a separate `forwardRef` in the same `<name>.tsx` file — or split into `<name>-trigger.tsx`, `<name>-content.tsx` etc. if a single file becomes too large
- `index.ts` uses namespace merging to attach sub-components

```tsx
// dialog.tsx
import { forwardRef } from "react"
import { dialogStyles } from "@versaur/core"
import "@versaur/core/dialog.css"
import { useDataAttrs } from "../../hooks/use-data-attrs"
import type { DialogRootProps, DialogTriggerProps, DialogContentProps } from "./dialog.types"

export const _DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>(({ open = false, children, ...rest }, ref) => {
  const dataAttrs = useDataAttrs({ open })
  return (
    <div ref={ref} className={dialogStyles.root} {...dataAttrs} {...rest}>
      {children}
    </div>
  )
})
_DialogRoot.displayName = "Dialog.Root"

export const _DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className={dialogStyles.trigger} {...rest}>
      {children}
    </button>
  )
})
_DialogTrigger.displayName = "Dialog.Trigger"

export const _DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} className={dialogStyles.content} {...rest}>
      {children}
    </div>
  )
})
_DialogContent.displayName = "Dialog.Content"
```

```tsx
// index.ts (compound)
import { _DialogRoot, _DialogTrigger, _DialogContent } from "./dialog"
import type { DialogRootProps, DialogTriggerProps, DialogContentProps } from "./dialog.types"

declare namespace Dialog {
  export type RootProps = DialogRootProps
  export type TriggerProps = DialogTriggerProps
  export type ContentProps = DialogContentProps
}

const Dialog = Object.assign(_DialogRoot, {
  Root: _DialogRoot,
  Trigger: _DialogTrigger,
  Content: _DialogContent,
})

export { Dialog }
export type { DialogRootProps, DialogTriggerProps, DialogContentProps }
```

## 5. Namespace merging

TypeScript namespace merging allows attaching types and sub-components to the exported constant. The pattern:

```tsx
// index.ts
import { _Button } from "./button"
import type { Button as CoreButton } from "@versaur/core"
import type { ButtonProps } from "./button.types"

// 1. Declare the namespace with the same name as the const
declare namespace Button {
  export type Variant = CoreButton.Variant
  export type Size = CoreButton.Size
  export type DataAttrs = CoreButton.DataAttrs
  export type Props = ButtonProps
}

// 2. Assign the internal component to the public name
const Button = _Button

// 3. Export the merged result
export { Button }
```

This gives consumers access to:

- `Button` — the component itself
- `Button.Props` — the props type
- `Button.Variant` — the variant union type (`"primary" | "secondary" | "danger"`)
- `Button.Size` — the size union type (`"small" | "medium" | "large"`)
- `Button.DataAttrs` — the data-attribute interface

For compound components, sub-components are attached via `Object.assign` (see section 4).

## 6. CSS modules — imported from core

The React package does **not** own any CSS. All styling lives in `@versaur/core`.

Two imports are needed per component:

```tsx
// 1. Class-name mappings (JS object with scoped class names)
import { buttonStyles } from "@versaur/core"

// 2. Pre-built CSS side-effect (passes through to consumer's bundler)
import "@versaur/core/button.css"
```

- The class-name import (`buttonStyles`) provides the scoped class names to apply via `className`.
- The CSS side-effect import ensures styles are bundled when the consumer imports the component. Since `@versaur/core` is externalized in the Vite build, this import passes through to the consumer's bundler.
- **Design tokens** (`@versaur/core/tokens`) are the consumer's responsibility to import in their app root.

## 7. Data-attribute styling

The `useDataAttrs` hook is the bridge between React props and CSS data-attribute selectors.

```tsx
const dataAttrs = useDataAttrs({ variant, size, loading, disabled })
// → { "data-variant": "primary", "data-size": "medium", "data-loading": "", "data-disabled": "" }
```

Rules:

| Prop type            | Data attribute              | CSS selector               |
| -------------------- | --------------------------- | -------------------------- |
| `string` / `number`  | `data-variant="primary"`    | `[data-variant="primary"]` |
| `boolean` (`true`)   | `data-loading=""` (present) | `[data-loading]`           |
| `boolean` (`false`)  | omitted                     | —                          |
| `undefined` / `null` | omitted                     | —                          |

ARIA attributes are **not** handled by `useDataAttrs`. Set them directly on the element:

```tsx
<button
  aria-pressed={pressed ? "true" : undefined}
  aria-busy={loading ? "true" : undefined}
  aria-disabled={disabled || loading ? "true" : undefined}
  {...dataAttrs}
  {...rest}
>
```

## 8. `preview.tsx` structure

Each component includes a `preview.tsx` that bundles all documentation data in one file. This is consumed by the docs app.

### Sections array

```tsx
export interface ButtonSection {
  key: string // URL-safe identifier (e.g. "variants")
  title: string // Display heading (e.g. "Variants")
  preview: ComponentType // Live React component
  code: string // Code string for syntax highlighting
  language: string // Syntax language (e.g. "tsx")
}

export const buttonSections: ButtonSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`,
    language: "tsx",
  },
  // ...
]
```

### Props metadata

```tsx
export const buttonProps = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'danger'",
    default: "'primary'",
    description: "Visual variant of the button",
  },
  // ...
]
```

### Installation

```tsx
export const buttonInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core`,
  language: "bash" as const,
}
```

### Convenience preview component

```tsx
export function ButtonPreview() {
  return (
    <>
      {buttonSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  )
}
```

Naming convention:

- Sections array: `<name>Sections` (e.g. `buttonSections`)
- Props metadata: `<name>Props` (e.g. `buttonProps`)
- Installation: `<name>Installation` (e.g. `buttonInstallation`)
- Convenience component: `<Name>Preview` (e.g. `ButtonPreview`)
- Section interface: `<Name>Section` (e.g. `ButtonSection`)

## 9. Subpath imports & exports

Each component gets a subpath export (e.g. `@versaur/react/button`) to allow tree-shaking and targeted imports. Three places must be kept in sync:

### 1. `package.json` — `exports` field

```json
{
  "exports": {
    ".": {
      "source": "./src/index.ts",
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./button": {
      "source": "./src/components/button/index.ts",
      "types": "./dist/button.d.ts",
      "import": "./dist/button.js"
    }
  }
}
```

The `source` condition enables dev-server resolution from source files (see "Source-first dev resolution" in CLAUDE.md).

### 2. `package.json` — `typesVersions` field

For older TypeScript module resolution strategies that don't read `exports`:

```json
{
  "typesVersions": {
    "*": {
      "button": ["./dist/button.d.ts"]
    }
  }
}
```

### 3. `vite.config.ts` — `build.lib.entry`

```ts
build: {
  lib: {
    entry: {
      index: resolve(__dirname, "src/index.ts"),
      button: resolve(__dirname, "src/components/button/index.ts"),
    },
    formats: ["es"],
  },
}
```

### Root barrel

The root `@versaur/react` entry (`src/index.ts`) re-exports the component and key types but **not** the preview data:

```tsx
export { useDataAttrs } from "./hooks/use-data-attrs"
export { Button } from "./components/button"
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/button"
```

Preview data (`buttonSections`, `buttonProps`, etc.) is only available via the component subpath or by importing directly from the preview file.

## 10. Adding a new component — checklist

### Core package

- [ ] Create `packages/core/src/components/<name>/<name>.module.css` with data-attribute selectors
- [ ] Create `packages/core/src/components/<name>/index.ts` that exports styles and types
- [ ] Export from `packages/core/src/index.ts`
- [ ] Add subpath export entry in `packages/core/package.json`
- [ ] Run `pnpm generate:types` to create `<name>.types.generated.ts` and `<name>.module.css.d.ts`

### React package

- [ ] Create `packages/react/src/components/<name>/<name>.tsx` — choose Regular or Compound pattern (section 4)
- [ ] Create `packages/react/src/components/<name>/<name>.types.ts` — import types from `@versaur/core`
- [ ] Create `packages/react/src/components/<name>/preview.tsx` — sections, props metadata, installation
- [ ] Create `packages/react/src/components/<name>/index.ts` — namespace merging, re-exports
- [ ] Export from `packages/react/src/index.ts`
- [ ] Add subpath export in `packages/react/package.json` (`exports` + `typesVersions`)
- [ ] Add entry in `packages/react/vite.config.ts` (`build.lib.entry`)

### Docs app

- [ ] Add route at `apps/docs/src/routes/docs/components/<name>.tsx`
- [ ] Add doc page at `apps/docs/src/previews/pages/<name>-doc-page.tsx`
- [ ] Register in `apps/docs/src/previews/registry.ts`

### Verify

- [ ] `pnpm generate:types` completes without errors
- [ ] `pnpm build:packages` builds cleanly
- [ ] `pnpm dev` — new component page renders correctly

## 11. Code style rules

- **`forwardRef`** on all components — every component must support ref forwarding.
- **Default prop values** in destructuring, not `defaultProps`:
  ```tsx
  ({ variant = "primary", size = "medium", ...rest }, ref) => { ... }
  ```
- **Props interface extends native HTML attributes**, omitting any that are overridden:
  ```tsx
  export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    disabled?: boolean // Re-declared with our semantics
  }
  ```
- **JSDoc on prop fields** — every prop should have a JSDoc comment with `@default` where applicable.
- **`displayName`** set on every `forwardRef` component:
  ```tsx
  _Button.displayName = "Button"
  ```
  For compound components, use dot notation: `"Dialog.Root"`, `"Dialog.Trigger"`.
- **No default exports** — always use named exports.
- **Internal prefix** — component implementations use `_` prefix (`_Button`, `_DialogRoot`) to distinguish from the namespace-merged public export.
