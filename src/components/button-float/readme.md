# ButtonFloat

Floating Action Button (FAB) for Versaur UI, following Material 3 guidelines and Versaur code standards.

## Features
- Fixed to bottom right or left of the viewport
- Always circular, with smooth scale/opacity entrance animation
- Elevation and shadow transitions on hover/focus/active
- Supports all Versaur button variants and sizes
- Icon-only by default (wrap icon with Versaur `Icon` component)
- Accessible: requires `aria-label` if only icon is present
- Mobile-first, responsive, and customizable offset

## Usage

```tsx
import { ButtonFloat } from '@/components/button-float'
import { Icon } from '@/components/icon'
import { Plus } from 'lucide-react'

<ButtonFloat aria-label="Add" variant="primary">
  <Icon>
    <Plus />
  </Icon>
</ButtonFloat>
```

## Props

| Name        | Type     | Default   | Description                                      |
|-------------|----------|-----------|--------------------------------------------------|
| `variant`   | string   | 'primary' | Visual style variant (see Button variants)        |
| `size`      | string   | 'md'      | Size of the button: 'sm', 'md', 'lg'             |
| `side`      | string   | 'right'   | Which side to float: 'right' or 'left'           |
| `offset`    | string   | '1rem'    | Offset from edge of viewport or parent container |
| —           | —        | —         | ButtonFloat will always float at the bottom right/left of its parent container. If the container is taller than the viewport, the button will remain visible at the bottom right/left of the container's visible area as you scroll. |
| `children`  | ReactNode| —         | Icon (wrapped in Versaur `Icon` component)       |
| `aria-label`| string   | —         | Required for icon-only buttons                   |

## Accessibility
- Always provide `aria-label` for icon-only FABs
- Focus ring and contrast meet WCAG 2.1 AA

## Animation & Visuals
- Entrance: scale/opacity/translate (Material 3 FAB)
- Interaction: scale and shadow transitions
- Always `rounded-full` and shadowed

## Testing
- Unit tests colocated in `__tests__/button-float.test.tsx`
- Uses Storybook stories for test coverage
- Snapshot test included

## Storybook
- See `button-float.stories.tsx` for interactive examples
- All icons must be wrapped with Versaur `Icon` component

---
For more, see the Versaur UI documentation and design system guidelines.
