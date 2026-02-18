# Docs App (`apps/docs`)

The documentation site for Versaur. It is a Vite + React + TanStack Router SPA that acts as a framework-agnostic wrapper around the component packages.

Currently it consumes `@versaur/react`, but the architecture is designed to support Vue, Angular, or any future framework wrapper via the framework switcher and per-framework code examples.

## Architecture

### Dual-entry-point build

The app has two separate React apps built in a single Vite build:

| Entry     | HTML           | Mount point     | Purpose                                           |
| --------- | -------------- | --------------- | ------------------------------------------------- |
| Main docs | `index.html`   | `#root`         | SPA with routing, navigation, framework switcher  |
| Preview   | `preview.html` | `#preview-root` | Isolated iframe renderer for live component demos |

Configured in `vite.config.ts`:

```ts
build: {
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, "index.html"),
      preview: path.resolve(__dirname, "preview.html"),
    },
  },
},
```

### Source-first resolution

The docs dev server resolves all `@versaur/*` imports directly from package source files, not compiled output:

```ts
// vite.config.ts
resolve: {
  conditions: ["source"],
},
```

Each package declares a `"source"` export condition in its `package.json`:

```json
"./button": {
  "source": "./src/components/button/index.ts",
  "types": "./dist/button.d.ts",
  "import": "./dist/button.js"
}
```

This means: no manual Vite aliases, no rebuilding packages during docs development. Changes in package source are reflected immediately.

## Iframe preview system

Component previews render inside an iframe to provide style isolation and avoid CSS conflicts between the docs shell and the component being previewed.

### How it works

```
Route (button.tsx)
  ├── FrameworkSwitcher        ← lives in parent (outside iframe)
  └── PreviewFrame             ← creates <iframe src="/preview.html?component=button&id=preview-0">
        │
        └── preview.html
              └── PreviewRenderer
                    ├── reads ?component=button from URL
                    ├── looks up previewRegistry["button"] → ButtonDocPage
                    └── renders ButtonDocPage inside a ResizeObserver-tracked div
```

### Height auto-sizing

The iframe automatically resizes to fit its content:

1. `PreviewRenderer` (child) wraps content in a `ref`-tracked `<div>`
2. A `ResizeObserver` monitors the div's height
3. On resize, it posts a message to the parent: `{ type: "versaur-preview-resize", id, height }`
4. `PreviewFrame` (parent) listens for these messages and updates the iframe's `style.height`

The iframe body has `overflow: hidden` (in `preview.css`) so scrolling is handled entirely by the parent page.

### Preview registry

```ts
// apps/docs/src/previews/registry.ts
export const previewRegistry: Record<string, ComponentType> = {
  button: ButtonDocPage,
};
```

Maps component name strings (from the URL query param) to React components. Add new entries here when adding component documentation.

## Framework switching

The `FrameworkSwitcher` component renders tabs for React, Vue (TBA), and Angular (TBA). It lives **outside the iframe** in the parent route.

Framework selection is persisted via:

- `localStorage` (key: `versaur_framework`) for cross-session persistence
- URL query param (`?framework=react`) for shareability
- `window.history.replaceState` to update the URL without navigation

The `useFrameworkSelection` hook provides the current selection to any component. Inside the iframe, `ComponentPreview` uses this hook to display the correct code example for the selected framework.

### How framework examples work

Each doc page wraps component data into a per-framework examples object:

```tsx
function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" }, // placeholder
    angular: { code: "", language: "angular" }, // placeholder
  };
}
```

When Vue/Angular wrappers are built, their `preview.tsx` files will export their own sections with framework-specific code strings. The doc page will then populate `vue` and `angular` with real code.

## Syntax highlighting

Code blocks are syntax-highlighted using [Shiki](https://shiki.style/). The `useShikiHighlighter` hook:

- Lazy-loads Shiki on first use
- Caches the highlighter as a module-level singleton (shared across all `ComponentPreview` instances)
- Supports `tsx`, `vue`, `bash`, `typescript` languages
- Uses the `github-dark` theme

## File structure

```
apps/docs/
├── index.html                           # Main docs entry
├── preview.html                         # Preview iframe entry
├── package.json
├── vite.config.ts                       # Dual builds, source resolution
├── tsconfig.json
└── src/
    ├── main.tsx                         # Docs app root (TanStack Router)
    ├── routeTree.gen.ts                 # AUTO-GENERATED route tree
    ├── styles/
    │   └── global.css                   # Layout, typography, token usage
    ├── routes/                          # File-based routes
    │   ├── __root.tsx                   # Root layout wrapper
    │   ├── index.tsx                    # Home page (/)
    │   └── docs/components/
    │       └── button.tsx               # Button docs (/docs/components/button)
    ├── preview/                         # Iframe preview system
    │   ├── preview-app.tsx              # Iframe React app root
    │   ├── preview-frame.tsx            # Parent-side iframe + postMessage listener
    │   ├── preview-renderer.tsx         # Child-side registry lookup + ResizeObserver
    │   └── preview.css                  # Iframe-specific styles
    ├── previews/                        # Component doc pages (rendered in iframe)
    │   ├── registry.ts                  # Component name → doc page mapping
    │   └── pages/
    │       └── button-doc-page.tsx      # Button documentation
    ├── components/                      # Shared UI components
    │   ├── framework-switcher.tsx       # Framework tab selector
    │   ├── component-preview.tsx        # Collapsible code block
    │   ├── component-preview.module.css # Code block styles
    │   └── props-table.tsx              # API reference table
    ├── hooks/
    │   ├── use-framework-selection.ts   # Framework persistence (localStorage + URL)
    │   └── use-shiki-highlighter.ts     # Shiki singleton + lazy loading
    └── utils/
        └── clipboard.ts                 # Copy-to-clipboard helper
```

## Adding a new component page

1. Create the doc page in `src/previews/pages/<name>-doc-page.tsx` — import sections, props, and installation from the component package
2. Register it in `src/previews/registry.ts`
3. Create a route at `src/routes/docs/components/<name>.tsx` with `FrameworkSwitcher` + `PreviewFrame`

See [component-documentation.md](./component-documentation.md) for how the component package side is structured.

## Supporting a new framework

When adding Vue (or another framework) wrapper:

1. Build the wrapper package (`packages/vue`) with the same `preview.tsx` pattern — sections array with code strings in Vue syntax
2. In each doc page's `makeExamples`, import the Vue sections and populate the `vue` key with real code
3. Enable the framework in `framework-switcher.tsx` by setting `enabled: true`
4. Add the language to `use-shiki-highlighter.ts` if not already supported
