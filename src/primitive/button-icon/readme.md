# ButtonIcon

A visually consistent, accessible, and flexible icon-only button component for Versaur UI, following the latest design and API conventions.

## Features
- Renders a single icon as a button, using the `as` prop for icon component injection
- Supports all Versaur color system variants, shapes, and sizes
- Icon color is automatically derived from the button's variant (can be overridden)
- Strictly typed props, mobile-first, and fully accessible (requires `aria-label`)
- Tree-shakable and optimized for modern React/TypeScript workflows

## Usage

```tsx
import { ButtonIcon } from '@/components/button-icon'
import { Plus } from 'lucide-react'

<ButtonIcon as={Plus} aria-label="Add item" />
<ButtonIcon as={Plus} variant="secondary-outline" size="lg" shape="circle" aria-label="Add" />
```

## Props

| Prop         | Type                                                                 | Default   | Description                                                                                 |
|--------------|----------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------|
| `as`         | `React.ElementType`                                                  | —         | Icon component to render (e.g., from lucide-react)                                          |
| `variant`    | See below                                                            | `primary` | Visual style variant (color system, outline, ghost, etc.)                                   |
| `size`       | `'xs' | 'sm' | 'md' | 'lg' | 'xl'`                                    | `md`      | Size of the button and icon                                                                 |
| `shape`      | `'rounded' | 'square' | 'circle'`                                    | `rounded` | Shape of the button                                                                         |
| `disabled`   | `boolean`                                                            | `false`   | Disables the button                                                                         |
| `aria-label` | `string`                                                             | —         | Accessible label for screen readers (required)                                              |
| ...          | All standard `<button>` props except `type` and `color`              |           |                                                                                             |

### Variants
- `primary`, `primary-outline`, `primary-ghost`
- `secondary`, `secondary-outline`, `secondary-ghost`
- `tertiary`, `tertiary-outline`, `tertiary-ghost`
- `ghost`, `ghost-outline`
- `neutral`, `neutral-outline`, `neutral-ghost`
- `success`, `success-outline`, `success-ghost`
- `info`, `info-outline`, `info-ghost`
- `warning`, `warning-outline`, `warning-ghost`
- `danger`, `danger-outline`, `danger-ghost`
- `outline`, `destructive`

## Icon Color Logic
- The icon color is automatically derived from the button's `variant` using a utility function.
- You can override the icon color by passing a `color` prop to the `Icon` component via the `as` prop if needed.

## Accessibility
- Always provide a descriptive `aria-label` for screen readers.
- Fully keyboard accessible and focus-visible by default.

## Example

```tsx
<ButtonIcon as={Plus} variant="success-ghost" size="sm" shape="circle" aria-label="Add to favorites" />
```

## Testing
- Unit tests and stories are colocated in the component directory.
- Snapshot and accessibility tests are included.

---
For more details, see the [component source](./button-icon.tsx) and [stories](./button-icon.stories.tsx).
