# Skeleton

A flexible loading placeholder component for Versaur UI, following the design system and codebase standards.

## Features
- Supports shape (`rectangle`, `rounded`, `circle`, `square`)
- Supports size (`sm`, `md`, `lg`, `xl`)
- Custom height via `height` prop
- Always full width (`w-full`)
- Accessible and mobile-first
- Consistent shimmer animation (no color variants)

## Usage
```tsx
import { Skeleton } from '@/components/skeleton'

// Default
<Skeleton />

// Shape and size
<Skeleton shape="circle" size="lg" style={{ width: 48, height: 48 }} />

// Custom height
<Skeleton height={64} style={{ width: 180 }} />
```

## Props
| Prop    | Type                                    | Default   | Description                       |
|---------|-----------------------------------------|-----------|-----------------------------------|
| shape   | 'rectangle' \| 'rounded' \| 'circle' \| 'square' | 'rounded' | The shape of the skeleton        |
| size    | 'sm' \| 'md' \| 'lg' \| 'xl' \| string         | 'md'      | The size (height) of the skeleton|
| height  | number \| string                        | -         | Custom height (overrides size)    |
| className | string                                | -         | Additional class names            |
| style   | React.CSSProperties                    | -         | Inline styles                     |

## Accessibility
- Uses `aria-hidden="true"` and `role="presentation"` for assistive tech
- No color variants for maximum contrast and clarity

## Testing
- Unit tests colocated in `__tests__/skeleton.test.tsx`
- Snapshot and accessibility assertions

## Storybook
- Stories in `skeleton.stories.tsx` demonstrate all variations

---
For more, see the [Versaur UI documentation](../../README.md).
