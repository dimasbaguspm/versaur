# Component Documentation System

How component documentation pages are structured in Versaur.

## Overview

Each component's documentation data lives **inside its framework package** (`packages/react/src/components/<name>/preview.tsx`), not in the docs app. The docs app provides reusable layout components that consume this data.

## preview.tsx structure

The `preview.tsx` file in each component directory bundles everything the docs need:

### Sections array

Each section pairs a live preview component with its code string:

```tsx
export interface ButtonSection {
  key: string;         // URL-friendly identifier
  title: string;       // Section heading
  preview: ComponentType; // Live demo component
  code: string;        // Code snippet for display
  language: string;    // Syntax highlighting language
}

export const buttonSections: ButtonSection[] = [
  { key: "variants", title: "Variants", preview: VariantsPreview, code: `...`, language: "tsx" },
  // ...
];
```

### Props metadata

API reference data for the PropsTable:

```tsx
export interface ButtonPropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const buttonProps: ButtonPropDefinition[] = [
  { name: "variant", type: "'primary' | 'secondary' | 'danger'", default: "'primary'", description: "..." },
  // ...
];
```

### Installation

```tsx
export const buttonInstallation = {
  code: `npm install @versaur/react @versaur/core`,
  language: "bash" as const,
};
```

### Convenience preview

A `ButtonPreview` component is also exported for non-docs consumers that just want to render all demos:

```tsx
export function ButtonPreview() { /* renders all sections */ }
```

## Doc page structure

Doc pages live in `apps/docs/src/previews/pages/` and render inside an iframe (via `PreviewFrame`). Each page imports data from the component package and uses shared layout components:

```
<name>-doc-page.tsx
  ├── For each section:
  │   ├── <h3>{title}</h3>
  │   ├── <section.preview />        (live demo)
  │   └── <ComponentPreview />       (collapsible code panel)
  ├── <h2>API Reference</h2>
  │   └── <PropsTable props={...} /> (data-driven table)
  └── <h2>Installation</h2>
      └── <ComponentPreview />       (install commands)
```

## Shared docs components

| Component | File | Purpose |
|-----------|------|---------|
| `ComponentPreview` | `apps/docs/src/components/component-preview.tsx` | Collapsible code panel with Shiki syntax highlighting, copy button, and framework switching |
| `PropsTable` | `apps/docs/src/components/props-table.tsx` | Renders API reference table from prop definitions array |
| `FrameworkSwitcher` | `apps/docs/src/components/framework-switcher.tsx` | Toggles between React/Vue/Angular code examples (rendered outside the iframe) |
| `PreviewFrame` | `apps/docs/src/preview/preview-frame.tsx` | iframe wrapper with auto-resizing via ResizeObserver + postMessage |

## Adding documentation for a new component

1. Create `preview.tsx` in `packages/react/src/components/<name>/` with:
   - Section preview components (small, focused demos)
   - `<name>Sections` array pairing previews with code strings
   - `<name>Props` array with API reference data
   - `<name>Installation` object
   - `<Name>Preview` convenience component

2. Export everything from `packages/react/src/components/<name>/index.ts`

3. Create `apps/docs/src/previews/pages/<name>-doc-page.tsx`:
   - Import sections, props, installation from the component package
   - Map sections to heading + preview + ComponentPreview
   - Add PropsTable for API reference
   - Add installation ComponentPreview

4. Register in `apps/docs/src/previews/registry.ts`

5. Create route at `apps/docs/src/routes/docs/components/<name>.tsx` with FrameworkSwitcher + PreviewFrame
