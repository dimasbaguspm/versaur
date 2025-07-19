# PageLayout

A responsive layout container for Versaur UI, providing consistent breakpoints for desktop, tablet, and mobile. Use the `type` prop to control the layout's max width and padding.

## Usage

```tsx
import { PageLayout } from '@/components/page-layout'

<PageLayout type="desktop">
  {/* content */}
</PageLayout>
```

## Props

- `type`: 'desktop' | 'tablet' | 'mobile' (default: 'desktop')
- `children`: React.ReactNode
- `className`: string (optional)

## Storybook
See the Layout/PageLayout group for live examples.
