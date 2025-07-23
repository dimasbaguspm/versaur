# LoadingIndicator

A modern, accessible loading indicator for Versaur UI, supporting spinner and bar types, color
variants, and responsive sizing. Follows Versaur and Material guidelines.

## Features

- **Type variants:** `spinner` (circular, desktop) and `bar` (linear, mobile/progress)
- **Color variants:** All Versaur system colors (primary, secondary, tertiary, ghost, neutral,
  success, info, warning, danger)
- **Sizes:** `sm`, `md`, `lg`
- **Accessible:** Uses `aria-label` and correct roles
- **Atomic subcomponents:** `SpinnerAtom`, `BarAtom` for custom composition
- **Tree-shakable:** Only import what you need

## Usage

```tsx
import { LoadingIndicator } from '@/components/loading-indicator'

// Spinner (default)
<LoadingIndicator type="spinner" color="primary" size="md" ariaLabel="Loading spinner" />

// Bar
<LoadingIndicator type="bar" color="success" size="md" ariaLabel="Loading bar" />
```

## Props

See `types.ts` for full prop documentation.

- `type`: `'spinner' | 'bar'` (default: `'spinner'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `color`: Versaur color system
- `ariaLabel`: Accessible label for screen readers

## Storybook

See `loading-indicator.stories.tsx` for grouped stories by type and color.

## Testing

- Colocated tests in `__tests__/loading-indicator.test.tsx`
- Uses Storybook stories for rendering
- Asserts accessibility and snapshot output

## Customization

- Use atomic subcomponents for advanced composition:
  - `SpinnerAtom` for spinner
  - `BarAtom` for bar
- Extend color and size variants via `helpers.ts`

## Guidelines

- Follows Versaur regular pattern for simple, browser-aligned components
- Responsive, mobile-first design
- WCAG 2.1 AA accessibility

---

For more details, see the [Versaur README](../../README.md).
