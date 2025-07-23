# Icon Component


Versaur UI Icon renders a single icon component (e.g., from lucide-react) with consistent size and color according to the Versaur design system. It enforces API consistency and removes the need for children.

## Usage

```tsx
import { Icon } from '@/components/icon'
import { Circle } from 'lucide-react'

<Icon as={Circle} color="primary" size="md" />
```

## Props
- `as`: **Required.** The icon component to render (e.g., from `lucide-react`).
- `color`: Versaur color variant (`primary`, `secondary`, `tertiary`, `ghost`, `neutral`, `success`, `info`, `warning`, `danger`). Default: `primary`.
- `size`: Icon size (`xs`, `sm`, `md`, `lg`, `xl`). Default: `md`.
- Accepts all native `<svg>` props (e.g., `id`, `aria-label`, `title`).

## Examples

- **Basic:**
  ```tsx
  <Icon as={Circle} color="primary" size="md" />
  ```
- **All Sizes:**
  ```tsx
  <Icon as={Circle} size="xs" />
  <Icon as={Circle} size="sm" />
  <Icon as={Circle} size="md" />
  <Icon as={Circle} size="lg" />
  <Icon as={Circle} size="xl" />
  ```
- **All Colors:**
  ```tsx
  <Icon as={Circle} color="danger" />
  <Icon as={Circle} color="info" />
  // ...other colors
  ```
- **Native svg props:**
  ```tsx
  <Icon as={Circle} id="custom-id" aria-label="icon-label" />
  ```

## Accessibility
- Icons are rendered with `aria-hidden="true"` by default.
- Pass `aria-label` or `role` for accessible icons as needed.

## Testing
- Snapshot and accessibility tests are provided in `__tests__/icon.test.tsx`.

## Storybook
- See `icon.stories.tsx` for interactive examples and documentation.
