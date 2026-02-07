# Versaur Design System

Modern, framework-agnostic UI component library built with the data-attribute state machine pattern.

## Overview

Versaur is a universal design system that provides:

- 🎨 **Framework-agnostic CSS core** using CSS Modules
- ⚡ **Data-attribute state machine pattern** for clean component APIs
- 🌲 **Tree-shakeable** component library
- 📋 **Registry-based distribution** (shadcn-style code copying)
- ♿ **Built-in accessibility** features
- 🌗 **Dark mode** support out of the box

## Architecture

### Monorepo Structure

```
versaur/
├── packages/
│   ├── core/          # CSS Modules + Design Tokens (framework-agnostic)
│   ├── react/         # React wrapper components
│   ├── vue/           # Vue wrapper (planned)
│   └── angular/       # Angular wrapper (planned)
└── apps/
    └── docs/          # Vite + React documentation site
```

### Key Innovation: Data-Attribute State Machine

Instead of complex className concatenation, component states are managed through HTML data attributes:

```tsx
// Component API (clean props)
<Button variant="primary" size="large" loading />

// Rendered HTML (data attributes)
<button data-variant="primary" data-size="large" data-loading>

// CSS Styling (attribute selectors)
.button[data-variant="primary"] { /* styles */ }
.button[data-loading] { /* loading spinner */ }
```

**Benefits:**
- Single source of truth for component state
- Easier debugging (inspect HTML attributes)
- Framework-agnostic pattern
- Better CSS specificity control

## Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build:packages

# Start development server
pnpm dev
```

Visit http://localhost:3000 to see the documentation site.

### Using Components

#### NPM Installation

```bash
npm install @versaur/react @versaur/core
# or
pnpm add @versaur/react @versaur/core
```

```tsx
import { Button } from '@versaur/react';
import '@versaur/core/tokens';
import '@versaur/core/button.css';  // Import component styles

function App() {
  return (
    <Button variant="primary" size="large">
      Click me
    </Button>
  );
}
```

**Note:** You need to import both the design tokens and component-specific CSS for styling to work.

#### Registry (Code Copying)

Fetch component source code directly:

```bash
curl http://localhost:3000/api/registry?item=button
```

Copy the code into your project for full customization.

## Available Components

### Button

A versatile button component with multiple variants, sizes, and states.

**Variants:**
- `primary` - Primary action button (blue)
- `secondary` - Secondary action button (gray)
- `danger` - Destructive action button (red)

**Sizes:**
- `small` - 2rem height
- `medium` - 2.5rem height (default)
- `large` - 3rem height

**States:**
- `loading` - Shows spinner, disables interaction
- `disabled` - Grayed out, non-interactive
- `pressed` - Toggle/pressed state

**Example:**

```tsx
<Button variant="primary" size="large">
  Primary Large
</Button>

<Button variant="danger" loading>
  Deleting...
</Button>

<Button disabled>
  Disabled
</Button>
```

## Design Tokens

All visual styling is built on CSS custom properties:

### Colors
- Primitive scales: blue, gray, red, green (50-900)
- Semantic tokens: primary, secondary, danger
- Automatic dark mode support

### Spacing
- 8px base scale (0.25rem to 4rem)
- Consistent vertical rhythm

### Typography
- Font families (sans, mono)
- Size scale (xs to 2xl)
- Line heights and weights

### Effects
- Border radius variants
- Shadow scale
- Focus ring definitions
- Transition timings

## Development

### Project Scripts

```bash
# Development
pnpm dev                  # Start docs dev server
pnpm build               # Build everything (packages + docs)
pnpm build:packages      # Build only packages
pnpm build:docs          # Build only docs

# Production
pnpm start               # Start docs production server

# Versioning
pnpm changeset           # Create a changeset
pnpm version             # Version packages
pnpm release             # Build and publish packages

# Cleanup
pnpm clean               # Remove all build artifacts
```

### Adding New Components

1. **Create CSS in `packages/core/src/components/`**
   ```css
   /* component.module.css */
   .component { /* base styles */ }
   .component[data-variant="primary"] { /* variant */ }
   ```

2. **Create React wrapper in `packages/react/src/components/`**
   ```tsx
   import { useDataAttrs } from '../../hooks/use-data-attrs';
   import { componentStyles } from '@versaur/core';

   export function Component({ variant, ...props }) {
     const dataAttrs = useDataAttrs({ variant });
     return <div className={componentStyles.component} {...dataAttrs} {...props} />;
   }
   ```

3. **Add docs**: Create a route at `apps/docs/src/routes/docs/components/<name>.tsx`, a doc page at `apps/docs/src/previews/pages/<name>-doc-page.tsx`, and register it in `apps/docs/src/previews/registry.ts`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern evergreen browsers

## License

MIT

## Roadmap

### Immediate Next Steps
- Icon component integration
- Input component
- Card layout component
- CLI tool for component copying

### Medium Term
- Vue wrapper package
- Angular wrapper package
- Additional color schemes
- Animation system

### Long Term
- Form components (Select, Checkbox, Radio)
- Complex components (Modal, Dropdown, Tabs)
- Layout system (Grid, Stack, Container)
- Component playground with live editing

## Contributing

This is currently a portfolio/demonstration project. Feedback and suggestions are welcome via issues.

## Credits

Built by [Your Name] as a modern design system demonstration.

Inspired by:
- shadcn/ui (registry distribution model)
- Radix UI (accessibility patterns)
- Tailwind CSS (design token system)
