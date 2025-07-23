# TextAreaInput

A versatile textarea component that supports auto-resizing, configurable rows, and all Versaur color variants for multi-line text input.

## Features

- **Auto-resizing**: Use `fieldSizing="content"` for automatic height adjustment based on content
- **Configurable rows**: Set minimum and maximum rows for consistent sizing
- **Smart resize behavior**: Manual resize handle for fixed mode, no resize for auto mode
- **Full variant support**: All Versaur color variants (primary, secondary, tertiary, ghost, neutral) and semantic variants (success, info, warning, danger)
- **Outline variants**: Subtle styling options for each color
- **Error states**: Built-in error message display with proper ARIA attributes
- **Helper text**: Optional guidance text below the input
- **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA attributes

## Usage

```tsx
import { TextAreaInput } from '@/components/textarea-input'

// Basic usage
<TextAreaInput
  label="Description"
  placeholder="Enter your description..."
/>

// Auto-resizing textarea
<TextAreaInput
  label="Comments"
  fieldSizing="content"
  placeholder="Type your comments..."
/>

// Custom row configuration
<TextAreaInput
  label="Notes"
  minRows={4}
  maxRows={8}
  placeholder="Enter detailed notes..."
/>

// With error state
<TextAreaInput
  label="Message"
  error="This field is required"
  placeholder="Enter your message..."
/>

// With helper text
<TextAreaInput
  label="Feedback"
  helperText="Please provide detailed feedback to help us improve"
  placeholder="Share your thoughts..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | - | **Required.** Label text displayed above the textarea |
| `variant` | `TextAreaVariant` | `'primary'` | Visual style variant from Versaur design system |
| `fieldSizing` | `'content' \| 'fixed'` | `'fixed'` | Enable auto-resizing with CSS field-sizing property |
| `minRows` | `number` | `3` | Minimum number of rows for the textarea |
| `maxRows` | `number` | `5` | Maximum number of rows (only applies when fieldSizing is 'fixed') |
| `helperText` | `ReactNode` | - | Helper text displayed below the textarea |
| `error` | `ReactNode` | - | Error message for validation states |
| `disabled` | `boolean` | `false` | Disable the textarea |
| `className` | `string` | - | Additional CSS classes for the container |

Extends all standard HTML `textarea` attributes.

## Variants

### Core Variants
- `primary` - Coral accent (main actions)
- `secondary` - Sage accent (secondary actions)
- `tertiary` - Mist accent (subtle backgrounds)
- `ghost` - Slate accent (minimal styling)
- `neutral` - Light gray (neutral contexts)

### Semantic Variants
- `success` - Green accent (positive feedback)
- `info` - Blue accent (informational)
- `warning` - Orange accent (caution)
- `danger` - Red accent (errors)

### Outline Variants
Add `-outline` suffix to any variant for border-only styling (e.g., `primary-outline`).

## Field Sizing & Resize Behavior

The `fieldSizing` prop controls how the textarea behaves:

- **`fixed` (default)**: 
  - Static height based on `minRows`
  - Can be manually resized with resize handle (resize-y)
  - Respects `maxRows` for maximum height constraint
  
- **`content`**: 
  - Automatically grows/shrinks based on content
  - No manual resize handle (resize-none)
  - Ignores `maxRows` setting for unlimited growth

## Row Configuration

- **`minRows`**: Starting number of visible rows (default: 3)
- **`maxRows`**: Maximum rows when manually resizing in fixed mode (default: 5)

When `fieldSizing="content"`, the textarea starts at `minRows` and grows automatically with content.

## Accessibility

- Proper label association with `htmlFor` and `id`
- ARIA attributes (`aria-invalid`, `aria-disabled`)
- Error messages with `role="alert"`
- Focus management and keyboard navigation
- Meets WCAG 2.1 AA contrast requirements

## Examples

### Contact Form
```tsx
<TextAreaInput
  label="Message"
  placeholder="Tell us about your project..."
  minRows={4}
  maxRows={8}
  helperText="Please provide as much detail as possible"
/>
```

### Auto-resizing Comment Box
```tsx
<TextAreaInput
  label="Comments"
  fieldSizing="content"
  minRows={2}
  placeholder="Share your thoughts..."
  helperText="This field will auto-resize as you type"
/>
```

### Error State
```tsx
<TextAreaInput
  label="Description"
  error="Description must be at least 10 characters long"
  placeholder="Enter description..."
  minRows={3}
  maxRows={6}
/>
```
