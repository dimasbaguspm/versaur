# Icon Component

Versaur UI Icon is a wrapper for Lucide icons and other ReactNode icons, enforcing consistent size and color according to the Versaur design system.

## Usage
```tsx
import { Icon } from '@/components/icon'
import { Circle } from 'lucide-react'

<Icon color="primary" size="md">
  <Circle />
</Icon>
```

## Props
- `color`: Versaur color variant (`primary`, `secondary`, `tertiary`, `ghost`, `neutral`, `success`, `info`, `warning`, `danger`). Default: `primary`.
- `size`: Icon size (`xs`, `sm`, `md`, `lg`, `xl`). Default: `md`.
- Accepts all native `<span>` props (e.g., `id`, `aria-label`, `title`).
- `children`: The icon element (usually from `lucide-react`).

## Examples
- **Basic:**
  ```tsx
  <Icon color="primary" size="md"><Circle /></Icon>
  ```
- **All Sizes:**
  ```tsx
  <Icon size="xs"><Circle /></Icon>
  <Icon size="sm"><Circle /></Icon>
  <Icon size="md"><Circle /></Icon>
  <Icon size="lg"><Circle /></Icon>
  <Icon size="xl"><Circle /></Icon>
  ```
- **All Colors:**
  ```tsx
  <Icon color="danger"><Circle /></Icon>
  <Icon color="info"><Circle /></Icon>
  // ...other colors
  ```
- **Native span props:**
  ```tsx
  <Icon id="custom-id" aria-label="icon-label"><Circle /></Icon>
  ```

## Accessibility
- Icons are rendered with `aria-hidden="true"` by default.
- Pass `aria-label` or `role` for accessible icons as needed.

## Testing
- Snapshot and accessibility tests are provided in `__tests__/icon.test.tsx`.

## Storybook
- See `icon.stories.tsx` for interactive examples and documentation.
