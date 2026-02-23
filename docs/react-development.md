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
├── hooks/
│   └── use-data-attrs.ts             # Shared hook: props → data-* attributes
└── components/
    ├── primitive/                    # Basic building blocks
    │   ├── index.ts                  # Exports all primitive components
    │   └── <name>/                   # One directory per component
    │       ├── <name>.tsx            # Component implementation
    │       ├── <name>.types.ts       # Props interface
    │       ├── <name>.stories.tsx    # Storybook stories (colocated)
    │       └── index.ts              # Barrel + namespace merging
    ├── forms/                        # Form controls
    ├── blocks/                       # Composite components
    └── utils/                        # Utility components
```

Each component gets its own directory within its category. The directory name matches the component name in kebab-case (`button/`, `text-input/`, etc.).

## 4. Component patterns

### Regular pattern

For simple, single-element components (Button, Badge, Tag, etc.):

- Single `forwardRef` component in `<name>.tsx`
- Named `Button` directly (no underscore prefix)
- Exported with namespace merging in `index.ts`
- One `.tsx` file, one `.types.ts` file

```tsx
// button.tsx
import { forwardRef } from "react"
import { buttonStyles } from "@versaur/core/primitive"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { ButtonProps } from "./button.types"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "medium", loading = false, disabled = false, children, onClick, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ variant, size, loading, disabled: disabled || loading })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={buttonStyles.button}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...dataAttrs}
        {...rest}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
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
import type { Button as CoreButton } from "@versaur/core/primitive"
import { Button } from "./button"
import type { ButtonProps } from "./button.types"

// Declaration merging: namespace + const = Button.Props, Button.Variant, etc.
declare namespace Button {
  export type Variant = CoreButton.Variant
  export type Size = CoreButton.Size
  export type DataAttrs = CoreButton.DataAttrs
  export type Props = ButtonProps
}

export { Button }
export type { ButtonProps }
export type { ButtonVariant, ButtonSize } from "@versaur/core/primitive"
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
import { buttonStyles } from "@versaur/core/primitive"

// Note: CSS is bundled automatically via Vite build, no explicit import needed
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

## 8. Storybook documentation

Component documentation is handled via Storybook stories colocated with components: `packages/react/src/components/<category>/<name>/<name>.stories.tsx`. Each story file:

- Imports the component using relative paths: `from "../index"` for same-category imports, `from "../../<other-category>/index"` for cross-category imports
- Imports icons and Storybook types from absolute paths: `@versaur/icons`, `@storybook/react`
- Defines a story metadata object with title, component, and argTypes
- Exports story variants demonstrating different states
- Provides interactive controls for real-time prop manipulation

See [component-documentation.md](./component-documentation.md) for detailed story structure and examples.

## 9. Categorical exports

Components are exported by category (`@versaur/react/primitive`, `@versaur/react/forms`, etc.) for better organization. Three places must be kept in sync:

### 1. `package.json` — `exports` field

```json
{
  "exports": {
    "./primitive": {
      "types": "./dist/components/primitive/index.d.ts",
      "import": "./dist/components/primitive/index.js"
    },
    "./forms": {
      "types": "./dist/components/forms/index.d.ts",
      "import": "./dist/components/forms/index.js"
    },
    "./blocks": {
      "types": "./dist/components/blocks/index.d.ts",
      "import": "./dist/components/blocks/index.js"
    },
    "./utils": {
      "types": "./dist/components/utils/index.d.ts",
      "import": "./dist/components/utils/index.js"
    }
  }
}
```

The `source` condition enables dev-server resolution from source files (see "Source-first dev resolution" in CLAUDE.md).

### 2. `vite.config.ts` — `build.lib.entry`

```ts
build: {
  lib: {
    entry: {
      primitive: resolve(__dirname, "src/components/primitive/index.ts"),
      forms: resolve(__dirname, "src/components/forms/index.ts"),
      blocks: resolve(__dirname, "src/components/blocks/index.ts"),
      utils: resolve(__dirname, "src/components/utils/index.ts"),
    },
    formats: ["es"],
  },
}
```

### Category barrels

Each category `index.ts` (`src/components/<category>/index.ts`) re-exports all components in that category:

```tsx
// primitive/index.ts
export { Button } from "./button"
export type { ButtonProps, ButtonVariant, ButtonSize } from "./button"

export { Badge } from "./badge"
export type { BadgeProps, BadgeVariant, BadgeSize } from "./badge"

// ... more primitive components
```

## 10. Adding a new component — checklist

### Core package

- [ ] Determine the appropriate category: `primitive`, `forms`, `blocks`, or `utils`
- [ ] Create `packages/core/src/components/<category>/<name>/<name>.module.css` with data-attribute selectors
- [ ] Create `packages/core/src/components/<category>/<name>/index.ts` that exports styles and types
- [ ] Export from `packages/core/src/components/<category>/index.ts`
- [ ] Run `pnpm generate:types` to create `<name>.types.generated.ts` and `<name>.module.css.d.ts`

### React package

- [ ] Create `packages/react/src/components/<category>/<name>/<name>.tsx` — choose Regular or Compound pattern (section 4)
- [ ] Create `packages/react/src/components/<category>/<name>/<name>.types.ts` — import types from `@versaur/core/<category>`
- [ ] Create `packages/react/src/components/<category>/<name>/index.ts` — namespace merging, re-exports
- [ ] Export from `packages/react/src/components/<category>/index.ts`

### Storybook

- [ ] Create `packages/react/src/components/<category>/<name>/<name>.stories.tsx` with story metadata and variants
- [ ] Use relative imports for same-category components: `from "../index"`
- [ ] Use relative imports for cross-category components: `from "../../<other-category>/index"`

### Verify

- [ ] `pnpm generate:types` completes without errors
- [ ] `pnpm build:packages` builds cleanly
- [ ] `pnpm build:docs` builds Storybook cleanly
- [ ] `pnpm dev` — new component story appears in Storybook

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
