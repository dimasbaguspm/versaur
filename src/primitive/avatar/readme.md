# Avatar Component

A flexible avatar component for displaying user profile images with automatic fallback support.

## Features

- **Automatic fallback**: Shows fallback content when images fail to load
- **Smart error handling**: Resets error state when image source changes
- **Multiple variants**: Based on the Versaur color system (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
- **Flexible sizing**: Five sizes from xs to xl
- **Shape options**: Circle, square, or rounded corners
- **Compound pattern**: Simple composition with `Avatar.Image`

## Usage

### Basic Avatar with Fallback

```tsx
<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="John Doe" />
  JD
</Avatar>
```

### Different Variants

```tsx
<Avatar variant="secondary">JS</Avatar>
<Avatar variant="success">✓</Avatar>
<Avatar variant="ghost">Admin</Avatar>
```

### Different Sizes

```tsx
<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar size="md">MD</Avatar>
<Avatar size="lg">LG</Avatar>
<Avatar size="xl">XL</Avatar>
```

### Different Shapes

```tsx
<Avatar shape="circle">C</Avatar>
<Avatar shape="rounded">R</Avatar>
<Avatar shape="square">S</Avatar>
```

### Avatar Group

```tsx
<div className="flex -space-x-2">
  <Avatar className="border-2 border-white">
    <Avatar.Image src="/user1.jpg" alt="User 1" />
    U1
  </Avatar>
  <Avatar variant="secondary" className="border-2 border-white">
    <Avatar.Image src="/user2.jpg" alt="User 2" />
    U2
  </Avatar>
  <Avatar variant="ghost" className="border-2 border-white">
    +3
  </Avatar>
</div>
```

## API

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'neutral' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the avatar |
| `shape` | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Shape of the avatar |
| `children` | `ReactNode` | - | Fallback content when image is not available |

### Avatar.Image Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alternative text for the image |
| `onError` | `(event) => void` | - | Error handler for failed image loads |

**Note**: The image shape is automatically inherited from the parent Avatar component through CSS overflow. The error state is automatically reset when the `src` prop changes, allowing new images to load properly.

## Accessibility

- Uses semantic HTML with proper `alt` attributes for images
- Supports keyboard navigation and screen readers
- Meets WCAG 2.1 AA contrast requirements for all color variants
