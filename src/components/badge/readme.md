# Badge Component

A versatile badge component for presenting or highlighting values with various styles and configurations. Supports different variants, shapes, colors, and icon positioning with automatic icon-only detection.

## Features

- **Variants**: Default (soft background) and outline styles
- **Colors**: Full Versaur color palette (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
- **Shapes**: Square (rounded corners) and fully rounded (pill)
- **Icon Support**: Left, right, or icon-only badges (automatically detected)
- **Auto-detection**: When no text content is provided and an icon is present, automatically becomes icon-only
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA support

## Usage

### Basic Badge

```tsx
import { Badge } from '@versaur/ui'

<Badge>New</Badge>
<Badge color="success">Active</Badge>
<Badge variant="outline" color="warning">Pending</Badge>
```

### With Icons

```tsx
import { CheckIcon, StarIcon } from 'lucide-react'

<Badge iconLeft={<CheckIcon />} color="success">Verified</Badge>
<Badge iconRight={<StarIcon />} color="warning">Premium</Badge>

// Icon-only badges (auto-detected when no children provided)
<Badge iconLeft={<CheckIcon />} color="success" shape="rounded" />
<Badge iconRight={<StarIcon />} color="warning" />
```

### Different Shapes

```tsx
<Badge shape="square">Square</Badge>
<Badge shape="rounded">Rounded</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline'` | `'default'` | Visual style variant |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'neutral' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | Color variant |
| `shape` | `'rounded' \| 'square'` | `'square'` | Shape of the badge |
| `iconLeft` | `ReactNode` | - | Icon to display on the left |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge |
| `iconRight` | `ReactNode` | - | Icon to display on the right |
| `children` | `ReactNode` | - | Content to display (when empty + icon present = icon-only) |
### Different Sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge size="sm" iconLeft={<CheckIcon />}>Small Icon</Badge>
<Badge size="md" iconLeft={<CheckIcon />}>Medium Icon</Badge>
<Badge size="lg" iconLeft={<CheckIcon />}>Large Icon</Badge>
<Badge size="sm" iconLeft={<CheckIcon />} />
<Badge size="md" iconLeft={<CheckIcon />} />
<Badge size="lg" iconLeft={<CheckIcon />} />
```

## Icon-Only Mode

When `children` is empty/undefined and an icon is provided via `iconLeft` or `iconRight`, the badge automatically becomes icon-only. This provides a more intuitive API without needing explicit boolean props.

```tsx
// These automatically become icon-only
<Badge iconLeft={<CheckIcon />} />
<Badge iconRight={<StarIcon />} />

// This has both icon and text
<Badge iconLeft={<CheckIcon />}>Verified</Badge>
```

## Examples

### Status Indicators

```tsx
<Badge iconLeft={<CheckIcon />} color="success">Active</Badge>
<Badge iconLeft={<AlertCircleIcon />} color="warning">Pending</Badge>
<Badge iconLeft={<XIcon />} color="danger">Inactive</Badge>
```

### Notification Badges

```tsx
<Badge color="danger" shape="rounded">3</Badge>
<Badge color="primary" shape="rounded">99+</Badge>
<Badge iconLeft={<CheckIcon />} shape="rounded" /> {/* Auto icon-only */}
```

### Feature Highlights

```tsx
<Badge color="primary" shape="rounded">New</Badge>
<Badge iconLeft={<StarIcon />} color="warning">Premium</Badge>
<Badge variant="outline" color="info">Beta</Badge>
```
