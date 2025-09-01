# Heading Component

A flexible and accessible heading component for Versaur UI that renders semantic HTML headings
(h1-h6) with comprehensive styling options.

## Features

- **Semantic HTML**: Renders proper heading tags (h1-h6) based on the `level` prop
- **Color System**: Supports all Versaur color variants (primary, secondary, tertiary, ghost,
  neutral, success, info, warning, danger)
- **Typography Control**: Built-in typography styles with optional font size and weight overrides
- **Text Styling**: Underline, capitalization, italics, alignment options
- **Layout Control**: Optional margin bottom with `hasMargin` prop
- **Text Overflow**: Line clamping and ellipsis truncation support
- **Accessibility**: Follows semantic heading structure for screen readers

## Usage

### Basic Usage

```tsx
import { Heading } from '@versaur/ui'

// Simple h1 heading
<Heading level={1}>Main Title</Heading>

// h2 with primary color and margin
<Heading level={2} color="primary" hasMargin>
  Section Title
</Heading>

// h3 with multiple features
<Heading
  level={3}
  color="secondary"
  hasUnderline
  isCapitalize
  align="center"
>
  Styled Heading
</Heading>
```

### Typography Overrides

```tsx
// Override default font size and weight
<Heading level={4} fontSize="6xl" fontWeight="light">
  Custom Sized Heading
</Heading>

// Small h1 for special cases
<Heading level={1} fontSize="sm" fontWeight="normal">
  Compact Main Title
</Heading>
```

### Text Layout and Overflow

```tsx
// Centered heading with margin
<Heading level={2} align="center" hasMargin>
  Centered Title
</Heading>

// Truncated heading with ellipsis
<Heading level={3} ellipsis>
  This is a very long heading that will be truncated
</Heading>

// Multi-line heading with line clamping
<Heading level={4} clamp={2}>
  This is a long heading that will be clamped to exactly two lines
</Heading>
```

### Color Variants

```tsx
<Heading level={2} color="success">Success Heading</Heading>
<Heading level={2} color="warning">Warning Heading</Heading>
<Heading level={2} color="danger">Error Heading</Heading>
<Heading level={2} color="info">Info Heading</Heading>
```

## Props

| Prop           | Type                                         | Default     | Description                          |
| -------------- | -------------------------------------------- | ----------- | ------------------------------------ |
| `level`        | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                 | `1`         | Heading level (corresponds to h1-h6) |
| `color`        | `Color`                                      | `'ghost'`   | Color from Versaur color system      |
| `hasUnderline` | `boolean`                                    | `false`     | Add underline decoration             |
| `isCapitalize` | `boolean`                                    | `false`     | Capitalize text                      |
| `hasMargin`    | `boolean`                                    | `false`     | Add margin bottom (mb-4)             |
| `align`        | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'`    | Text alignment                       |
| `italic`       | `boolean`                                    | `false`     | Italic text                          |
| `clamp`        | `1 \| 2 \| 3 \| 4 \| 5 \| 'none'`            | `'none'`    | Line clamping                        |
| `ellipsis`     | `boolean`                                    | `false`     | Truncate with ellipsis               |
| `fontSize`     | `FontSize`                                   | `undefined` | Override default font size           |
| `fontWeight`   | `FontWeight`                                 | `undefined` | Override default font weight         |
| `className`    | `string`                                     | `undefined` | Additional CSS classes               |
| `children`     | `ReactNode`                                  | -           | Heading content                      |

## Default Typography Scale

| Level | Tag  | Font Weight     | Font Size   | Line Height       |
| ----- | ---- | --------------- | ----------- | ----------------- |
| 1     | `h1` | `font-bold`     | `text-4xl`  | `leading-loose`   |
| 2     | `h2` | `font-semibold` | `text-3xl`  | `leading-relaxed` |
| 3     | `h3` | `font-medium`   | `text-2xl`  | `leading-relaxed` |
| 4     | `h4` | `font-bold`     | `text-xl`   | `leading-normal`  |
| 5     | `h5` | `font-semibold` | `text-lg`   | `leading-normal`  |
| 6     | `h6` | `font-medium`   | `text-base` | `leading-normal`  |

## Accessibility

- Uses semantic HTML heading tags (h1-h6) for proper document structure
- Maintains logical heading hierarchy for screen readers
- Supports all standard HTML heading attributes
- Color contrast meets WCAG 2.1 AA standards

## Best Practices

1. **Heading Hierarchy**: Use heading levels sequentially (h1 → h2 → h3, etc.)
2. **Unique H1**: Only use one h1 per page for the main title
3. **Descriptive Content**: Make heading text descriptive and meaningful
4. **Consistent Spacing**: Use `hasMargin` consistently for layout spacing
5. **Color Meaning**: Use semantic colors (success, warning, danger) meaningfully
