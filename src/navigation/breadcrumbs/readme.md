# Breadcrumbs

Breadcrumbs provide a navigation hierarchy for users to understand their current location within an application. Built for Versaur UI, this component follows the compound pattern and is fully accessible.

## Usage

```tsx
import { Breadcrumbs } from '@/components/breadcrumbs'

<Breadcrumbs>
  <Breadcrumbs.Item href="/" icon={<HomeIcon />}>Home</Breadcrumbs.Item>
  <Breadcrumbs.Separator />
  <Breadcrumbs.Item href="/applicant">Applicant</Breadcrumbs.Item>
  <Breadcrumbs.Separator />
  <Breadcrumbs.Item href="/applicant/123">Details</Breadcrumbs.Item>
</Breadcrumbs>
```

- Supports icons, ARIA, and keyboard navigation
- Last item is marked as current page (consumer should place separators manually)
- Customizable via Tailwind and className

## API

### `<Breadcrumbs>`
- `children`: Breadcrumbs.Item and Breadcrumbs.Separator elements
- `aria-label`: Optional, defaults to "Breadcrumb"
- `className`: Optional

### `<Breadcrumbs.Item>`
- `href`: Link destination
- `icon`: Optional ReactNode before label
- `isCurrent`: Set automatically for last item (consumer should set if needed)
- `color`: Semantic color (primary, secondary, etc.)
- All anchor props supported
-### `<Breadcrumbs.Separator>`
- Renders a separator between breadcrumb items (e.g., `/`).
- Not visible to screen readers (aria-hidden)

## Accessibility
- Uses `<nav aria-label="Breadcrumb">` and `<ol>`
- Last item has `aria-current="page"`
- Separators are hidden from screen readers
