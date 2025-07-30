# Image Component

A modern, accessible React image component for Versaur UI, aligned with standard HTML `<img>` semantics and supporting a skeleton loading state.

## Features
- Fully type-safe, extends all standard `<img>` attributes
- Optional skeleton loader for improved perceived performance
- Consistent with Versaur's design system and accessibility standards
- Tree-shakable, colocated with tests and stories

## Usage
```tsx
import { Image } from '@/primitive/image'

<Image
  src="https://placehold.co/200x120/png"
  alt="Example"
  width={200}
  height={120}
  withSkeleton
  className="rounded-md"
/>
```

## Props
See `types.ts` for full prop documentation.

## Testing
- Snapshot and accessibility tested with Vitest/RTL
- Stories use realistic image URLs and loading scenarios
