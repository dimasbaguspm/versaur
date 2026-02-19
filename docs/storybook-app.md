# Storybook App (`apps/react-doc`)

The documentation site for Versaur React components built with Storybook.

## Architecture

### Source-first resolution

The Storybook dev server resolves all `@versaur/*` imports directly from package source files, not compiled output:

```ts
// vite.config.ts (or storybook config)
resolve: {
  conditions: ["source"],
},
```

Each package declares a `"source"` export condition in its `package.json`:

```json
"./primitive": {
  "source": "./src/components/primitive/index.ts",
  "types": "./dist/components/primitive/index.d.ts",
  "import": "./dist/components/primitive/index.js"
}
```

This means: no manual Vite aliases, no rebuilding packages during docs development. Changes in package source are reflected immediately with hot module replacement.

## File structure

```
apps/react-doc/
├── package.json
├── vite.config.ts                  # Vite config for Storybook
├── .storybook/
│   ├── main.ts                     # Storybook configuration
│   └── preview.ts                  # Global decorators and parameters
└── src/
    └── stories/                    # Component stories
        ├── button.stories.tsx
        ├── badge.stories.tsx
        ├── avatar.stories.tsx
        └── ...
```

## Storybook configuration

### Main configuration (`.storybook/main.ts`)

Configures:
- Story file patterns (`../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`)
- Addons (essentials, interactions, links, etc.)
- Framework (react-vite)
- Documentation settings

### Preview configuration (`.storybook/preview.ts`)

Configures:
- Global CSS imports (design tokens from `@versaur/core/tokens`)
- Global decorators
- Default parameters (layout, controls)
- Theme customization

The tokens CSS is imported at the top to make all Versaur CSS custom properties available globally:

```ts
import "@versaur/core/tokens";
```

## Component categories

Stories are organized by component category:

```
Primitive/
├── Button
├── Badge
├── Text
├── Heading
├── Avatar
└── ...

Forms/
├── TextInput
├── Select
├── Checkbox
├── Radio
└── ...

Blocks/
├── Card
├── Modal
├── Dialog
├── Sidebar
└── ...

Utils/
├── Loader
├── Icon
└── ...
```

## Development workflow

```sh
# Start Storybook dev server
pnpm dev

# Build static Storybook site
pnpm --filter react-doc build

# Or from root
pnpm build:docs
```

## Adding a new component story

1. Create `src/stories/<name>.stories.tsx`
2. Import component from `@versaur/react/<category>`
3. Define story metadata with category prefix (e.g., `Primitive/Button`)
4. Export story variants demonstrating different states
5. Configure interactive controls via `argTypes`

See [component-documentation.md](./component-documentation.md) for detailed story structure.

## Storybook features used

- **Interactive controls**: Real-time prop manipulation
- **Auto-generated docs**: API documentation from TypeScript types
- **Multiple story variants**: Each export creates a new example
- **Viewport addon**: Responsive preview at different sizes
- **Accessibility addon**: a11y testing and validation
- **Actions addon**: Event logging for interaction testing
- **Source code**: View component source directly in Storybook

## Hot module replacement

Thanks to source-first resolution, changes to component source files in `packages/react/src/` are immediately reflected in Storybook without rebuilding the package. This provides a fast development feedback loop.

## Production build

The static Storybook build can be deployed to any static hosting service:

```sh
pnpm build:docs
# Output: apps/react-doc/storybook-static/
```
