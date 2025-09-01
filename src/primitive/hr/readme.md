# Hr Component

A simple horizontal line separator component for creating visual divisions in content.

## Usage

```tsx
import { Hr } from '@versaur/primitive'

// Basic usage
<Hr />

// With bottom margin
<Hr hasMargin />

// With custom styling
<Hr className="my-8 opacity-50" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasMargin` | `boolean` | `false` | Whether to include bottom margin (mb-4) |
| `className` | `string` | - | Additional CSS classes |

## Features

- 1px height horizontal line
- Uses `bg-border` color from the design system
- Optional bottom margin (`mb-4`)
- Fully accessible as standard HTML `<hr>` element
- Supports all standard HTMLHRElement props
