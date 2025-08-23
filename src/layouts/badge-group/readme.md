# ButtonGroup

A flexible layout component for managing button positioning, alignment, and fluid behavior within
the Versaur design system.

## Overview

ButtonGroup provides precise control over button arrangements with support for different
orientations, alignments, spacing, and responsive behavior. It's designed to wrap Button components
and manage their layout effectively.

## Features

- **Alignment Control**: Position buttons with start, center, end, between, around, or evenly
  spacing
- **Orientation**: Support for horizontal and vertical layouts
- **Fluid Behavior**: Make buttons expand to fill available space
- **Gap Management**: Control spacing between buttons with predefined sizes (xs, sm, md, lg, xl)
- **Accessibility**: Proper ARIA roles and semantic HTML structure
- **Responsive**: Works seamlessly across different screen sizes

## Basic Usage

```tsx
import { ButtonGroup } from '@/layouts/button-group'
import { Button } from '@/primitive/button'

// Default horizontal layout
<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="ghost">Cancel</Button>
</ButtonGroup>

// Center-aligned buttons
<ButtonGroup alignment="center">
  <Button variant="primary">Confirm</Button>
  <Button variant="secondary">Maybe Later</Button>
  <Button variant="ghost">Cancel</Button>
</ButtonGroup>

// Vertical layout
<ButtonGroup orientation="vertical">
  <Button variant="primary">Create New</Button>
  <Button variant="secondary">Import</Button>
  <Button variant="ghost">Cancel</Button>
</ButtonGroup>
```

## Props

| Prop          | Type                                                                | Default        | Description                                           |
| ------------- | ------------------------------------------------------------------- | -------------- | ----------------------------------------------------- |
| `alignment`   | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'`      | Alignment of buttons within the group                 |
| `fluid`       | `boolean`                                                           | `false`        | Whether buttons should expand to fill available space |
| `orientation` | `'horizontal' \| 'vertical'`                                        | `'horizontal'` | Layout direction of the button group                  |
| `gap`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                              | `'md'`         | Size of the gap between buttons                       |
| `className`   | `string`                                                            | -              | Additional CSS classes                                |
| `children`    | `ReactNode`                                                         | -              | Button components to be arranged                      |

## Examples

### Navigation Actions

Perfect for form navigation and multi-step processes:

```tsx
<ButtonGroup alignment='between'>
  <Button variant='ghost'>← Previous</Button>
  <Button variant='primary'>Next →</Button>
</ButtonGroup>
```

### Form Actions

Common pattern for form submission controls:

```tsx
<ButtonGroup alignment='end' gap='sm'>
  <Button variant='ghost' size='sm'>
    Reset
  </Button>
  <Button variant='secondary' size='sm'>
    Save as Draft
  </Button>
  <Button variant='primary' size='sm'>
    Submit
  </Button>
</ButtonGroup>
```

### Fluid Layout

Buttons that expand to fill available space:

```tsx
<ButtonGroup fluid>
  <Button variant='primary'>Save</Button>
  <Button variant='secondary'>Save as Draft</Button>
  <Button variant='ghost'>Cancel</Button>
</ButtonGroup>
```

### Vertical Menu

Perfect for sidebars and vertical navigation:

```tsx
<ButtonGroup orientation='vertical' gap='sm'>
  <Button variant='ghost' className='justify-start'>
    Edit Profile
  </Button>
  <Button variant='ghost' className='justify-start'>
    Settings
  </Button>
  <Button variant='ghost' className='justify-start'>
    Help & Support
  </Button>
  <Button variant='danger-outline' className='justify-start'>
    Sign Out
  </Button>
</ButtonGroup>
```

## Accessibility

- Uses semantic HTML with proper `role="group"` attribute
- Maintains focus order and keyboard navigation
- Works with screen readers and assistive technologies
- Supports all standard button accessibility features

## Design Guidelines

- Use `alignment="between"` for navigation actions (Previous/Next)
- Use `alignment="end"` for form actions (Cancel/Save)
- Use `alignment="center"` for modal confirmations
- Use `orientation="vertical"` for sidebar menus and mobile layouts
- Use `fluid` for mobile interfaces where buttons should span full width
- Match gap size with your design system spacing (typically `md` for most cases)

## Best Practices

1. **Button Hierarchy**: Place primary actions last (rightmost in horizontal, bottom in vertical)
2. **Spacing**: Use consistent gap sizes throughout your application
3. **Mobile First**: Consider using vertical orientation or fluid layout for mobile screens
4. **Accessibility**: Ensure proper tab order and focus management
5. **Content**: Keep button labels concise and action-oriented
