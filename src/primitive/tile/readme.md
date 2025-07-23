# Tile Component

A flexible box container component that provides a foundation for content layouts with various styling options.

## Features

- **Multiple Color Variants**: 10 semantic color variants with soft backgrounds
- **Configurable Padding**: 5 size options for different spacing needs  
- **Shape Options**: Rounded (default) or square corners
- **Accessibility**: Proper semantic HTML structure
- **TypeScript**: Fully typed with comprehensive prop interfaces

## Basic Usage

```tsx
import { Tile } from '@versaur/tile'

// Basic tile
<Tile>
  Content goes here
</Tile>

// With variant and size
<Tile variant="primary" size="lg">
  Primary tile with large padding
</Tile>

// Square corners
<Tile shape="square" variant="info">
  Info tile with square corners
</Tile>
```

## Props

| Prop      | Type                          | Default     | Description                    |
|-----------|-------------------------------|-------------|--------------------------------|
| variant   | 'white' \| 'neutral' \| ...   | 'white'     | Color variant for the tile     |
| size      | 'xs' \| 'sm' \| 'md' \| ...   | 'md'        | Padding size of the tile       |
| shape     | 'rounded' \| 'square'         | 'rounded'   | Border radius shape            |
| className | string                        | undefined   | Additional CSS classes         |

## Variants

### Color Variants
- `white` - Clean white background (default)
- `neutral` - Neutral gray background
- `primary` - Coral background for main actions
- `secondary` - Sage background for secondary actions  
- `tertiary` - Mist background for subtle elements
- `ghost` - Transparent background with border
- `success` - Green background for success states
- `info` - Blue background for informational content
- `warning` - Orange background for warnings
- `danger` - Red background for errors

### Size Variants
- `xs` - Extra small padding (8px)
- `sm` - Small padding (12px)
- `md` - Medium padding (16px) - default
- `lg` - Large padding (24px)
- `xl` - Extra large padding (32px)

### Shape Variants
- `rounded` - Rounded corners (default)
- `square` - Square corners

## Examples

### Information Card
```tsx
<Tile variant="info" size="lg" className="max-w-md">
  <h3 className="font-semibold text-lg mb-2">Information Panel</h3>
  <p className="text-sm mb-4">
    This tile component can be used to create beautiful information cards
    with soft backgrounds and proper spacing.
  </p>
  <div className="flex gap-2">
    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
      Tag 1
    </span>
    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
      Tag 2
    </span>
  </div>
</Tile>
```

### Dashboard Layout
```tsx
<div className="grid grid-cols-2 gap-4">
  <Tile variant="success" size="lg">
    <h4 className="font-semibold mb-2">Active Users</h4>
    <p className="text-2xl font-bold">1,234</p>
    <p className="text-sm opacity-75">+12% from last month</p>
  </Tile>
  
  <Tile variant="warning" size="lg">
    <h4 className="font-semibold mb-2">Pending Tasks</h4>
    <p className="text-2xl font-bold">56</p>
    <p className="text-sm opacity-75">Requires attention</p>
  </Tile>
</div>
```

## Accessibility

The Tile component follows accessibility best practices:

- Uses semantic HTML (`<div>`) 
- Supports all standard HTML attributes
- Proper color contrast ratios (WCAG 2.1 AA compliant)
- Screen reader compatible
- Keyboard navigation friendly when used with interactive content

## Pattern

This component follows the **Regular Pattern** as it enhances a basic HTML div element with styling variants while maintaining familiar behavior and a simple props-based API.
