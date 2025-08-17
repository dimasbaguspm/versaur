# NoResults Component

A flexible empty state component that displays when no content is available. Perfect for search
results, filtered lists, or any empty data scenarios.

## Features

- Semantic HTML structure with proper headings and ARIA labels
- Customizable icon, title, subtitle, and action elements
- Responsive design with mobile-first approach
- Full accessibility support (WCAG 2.1 AA compliant)
- TypeScript support with strict typing

## Usage

```tsx
import { NoResults } from '@versaur/primitive'
import { SearchIcon } from 'lucide-react'
import { Button } from '@versaur/primitive'

;<NoResults
  icon={SearchIcon}
  title='No results found'
  subtitle="We couldn't find any items matching your search criteria."
  action={<Button variant='neutral'>Clear Search</Button>}
/>
```

## Props

- **icon** (required): Icon component to display (typically from lucide-react)
- **title** (required): Main heading text for the empty state
- **subtitle** (optional): Secondary descriptive text (string or ReactNode)
- **action** (optional): Action element to render below the content (typically a Button)

## Accessibility

- Uses semantic `<section>` element with `role="status"`
- Proper heading hierarchy with `<h2>` for title
- Icon marked as decorative with `aria-hidden="true"`
- Action wrapped in accessible group with descriptive label
