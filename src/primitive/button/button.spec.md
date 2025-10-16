# Button Component Specification

## Overview

The **Button** component is a simple, accessible button that directly aligns with the native HTML
`<button>` element. It follows the **Regular Pattern** as it enhances a single HTML element with
styled variants while maintaining browser-standard behavior.

## Component Pattern

**Regular Pattern** - This component directly maps to the native `<button>` HTML element, providing
a familiar developer experience with enhanced styling and accessibility features.

## Features

- ✅ **4 Semantic Variants**: Primary, ghost, outline, and destructive
- ✅ **3 Size Options**: Small (sm), medium (md), large (lg)
- ✅ **Busy/Loading State**: Built-in spinner indicator with auto-disable
- ✅ **Full Accessibility**: ARIA attributes, keyboard navigation, focus management
- ✅ **Browser-Standard Behavior**: Aligns with native button element
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### Props

Extends all native `ButtonHTMLAttributes<HTMLButtonElement>` properties.

| Prop        | Type                                                 | Default     | Description                                   |
| ----------- | ---------------------------------------------------- | ----------- | --------------------------------------------- |
| `variant`   | `'primary' \| 'ghost' \| 'outline' \| 'destructive'` | `'primary'` | Visual style variant                          |
| `size`      | `'sm' \| 'md' \| 'lg'`                               | `'md'`      | Size of the button                            |
| `disabled`  | `boolean`                                            | `false`     | Whether the button is disabled                |
| `busy`      | `boolean`                                            | `false`     | Whether the button is in a loading/busy state |
| `type`      | `'button' \| 'submit' \| 'reset'`                    | `'button'`  | Button type attribute                         |
| `className` | `string`                                             | -           | Additional CSS classes                        |
| `children`  | `ReactNode`                                          | -           | Button content                                |

### Variants

#### Primary

- **Purpose**: Main call-to-action buttons
- **Visual**: Coral background (`bg-primary`), white text
- **Hover**: Slightly darker background, elevated shadow
- **Focus**: Primary-light ring with offset
- **Use Cases**: Submit forms, confirm actions, primary navigation

#### Ghost

- **Purpose**: Subtle actions with minimal visual weight
- **Visual**: White background, foreground text
- **Hover**: Ghost-soft background
- **Focus**: Ghost-light ring with offset
- **Use Cases**: Cancel buttons, tertiary actions, text-like buttons

#### Outline

- **Purpose**: Secondary actions or alternative choices
- **Visual**: White background with border, foreground text
- **Hover**: Accent-soft background
- **Focus**: Accent-soft ring with offset
- **Use Cases**: Secondary actions, cancel operations, alternative options

#### Destructive

- **Purpose**: Dangerous or irreversible actions
- **Visual**: Danger background, white text
- **Hover**: Slightly darker background, elevated shadow
- **Focus**: Danger-soft ring with offset
- **Use Cases**: Delete, remove, permanent actions requiring caution

### Sizes

| Size | Height      | Padding     | Min Width      | Text Size | Icon Size | Use Case                             |
| ---- | ----------- | ----------- | -------------- | --------- | --------- | ------------------------------------ |
| `sm` | 28px (h-7)  | 12px (px-3) | 36px (2.25rem) | sm        | sm        | Compact interfaces, tight spaces     |
| `md` | 36px (h-9)  | 16px (px-4) | 40px (2.5rem)  | sm        | sm        | Standard/default for most use cases  |
| `lg` | 40px (h-10) | 32px (px-8) | 44px (2.75rem) | lg        | md        | Prominent primary actions, hero CTAs |

### States

#### Normal

- Default interactive state
- Full opacity, pointer cursor
- Responds to hover, focus, active

#### Busy

- Shows animated loading spinner
- Auto-disables interaction (`disabled` and `inert` set to true)
- `aria-busy` attribute set to true
- Spinner icon adapts to button size and variant color

#### Disabled

- Reduced opacity (50%)
- Pointer events disabled
- `aria-disabled` and `inert` attributes set
- Non-interactive, visually dimmed

## Visual Specifications

### Typography

- **Font**: Medium weight
- **Text Size**:
  - Small: `text-sm`
  - Medium: `text-sm`
  - Large: `text-lg`

### Spacing

- **Gap**: 8px (gap-2) between icon and text
- **Border Radius**: 6px (rounded-md)
- **Focus Ring**: 2px width with 2px offset

### Animations

- **Transition**: All properties, 200ms duration
- **Active Scale**: 0.98 (subtle press effect)
- **Hover Shadow**: Elevation change on primary/destructive variants
- **Spinner**: Continuous rotation animation

### Accessibility

#### ARIA Attributes

- `aria-disabled`: Set when `disabled` or `busy` is true
- `aria-busy`: Set when `busy` is true
- `inert`: Set when `disabled` or `busy` is true

#### Keyboard Support

- **Enter/Space**: Activates the button (native browser behavior)
- **Tab**: Moves focus to/from the button
- **Focus Visible**: Clear 2px ring indicator with offset

#### Screen Reader Support

- Proper button semantics via native `<button>` element
- State changes announced via ARIA attributes
- Text content is accessible by default

### Color System

Uses CSS custom properties from the Versaur design system:

| Variant     | Background        | Text                 | Hover BG                        | Focus Ring              | Border           |
| ----------- | ----------------- | -------------------- | ------------------------------- | ----------------------- | ---------------- |
| Primary     | `--color-primary` | white                | `--color-primary` (90% opacity) | `--color-primary-light` | -                |
| Ghost       | white             | `--color-foreground` | `--color-ghost-soft`            | `--color-ghost-light`   | -                |
| Outline     | white             | `--color-foreground` | `--color-accent-soft`           | `--color-accent-soft`   | `--color-border` |
| Destructive | `--color-danger`  | white                | `--color-danger` (90% opacity)  | `--color-danger-soft`   | -                |

## Usage Examples

### Basic Usage

```tsx
import { Button } from '@versaur/primitive/button'

// Primary button (default)
<Button>Click me</Button>

// With variant
<Button variant="ghost">Cancel</Button>

// With size
<Button size="lg">Large Button</Button>

// Disabled
<Button disabled>Disabled</Button>

// Loading state
<Button busy>Loading...</Button>
```

### Form Actions

```tsx
// Cancel and submit pattern
<div className='flex gap-3'>
  <Button variant='outline'>Cancel</Button>
  <Button variant='primary' type='submit'>
    Submit
  </Button>
</div>
```

### Async Operations

```tsx
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async () => {
  setIsSubmitting(true)
  await submitForm()
  setIsSubmitting(false)
}

;<Button busy={isSubmitting} onClick={handleSubmit}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>
```

### Destructive Actions

```tsx
// Dangerous operation
<div className='flex gap-3'>
  <Button variant='outline'>Cancel</Button>
  <Button variant='destructive' onClick={handleDelete}>
    Delete Account
  </Button>
</div>
```

### All Variants

```tsx
<div className='flex gap-4'>
  <Button variant='primary'>Primary</Button>
  <Button variant='ghost'>Ghost</Button>
  <Button variant='outline'>Outline</Button>
  <Button variant='destructive'>Destructive</Button>
</div>
```

### All Sizes

```tsx
<div className='flex items-center gap-4'>
  <Button size='sm'>Small</Button>
  <Button size='md'>Medium</Button>
  <Button size='lg'>Large</Button>
</div>
```

## Design Decisions

### Why Regular Pattern?

The Button component uses the Regular Pattern because:

1. **Browser Alignment**: Directly maps to native `<button>` element
2. **Simplicity**: Single component with props-based API
3. **Accessibility**: Leverages native button accessibility features
4. **Familiarity**: Developers expect button-like behavior
5. **Form Integration**: Works seamlessly with HTML forms

### Icon Integration

- Icon size automatically adapts to button size
- Icon color adapts to button variant (white for primary/destructive, inherit for ghost/outline)
- Icons appear before text content with 8px gap
- Loading spinner uses `lucide-react` `LoaderCircleIcon` with spin animation

### Type Safety

- All props are strictly typed via `ButtonProps` interface
- Extends native `ButtonHTMLAttributes` for full HTML button support
- TypeScript ensures variant and size values are valid

## Testing Considerations

### Unit Tests

- Render each variant correctly
- Render each size correctly
- Handle disabled state properly
- Handle busy state with spinner
- Apply custom className
- Forward ref correctly
- Snapshot test for HTML output

### Accessibility Tests

- Has proper button role
- Keyboard navigation works
- Focus visible indicator appears
- ARIA attributes are correct
- Screen reader announcements

### Integration Tests

- Form submission works
- Click handlers execute
- Type="submit" submits forms
- Type="button" prevents form submission

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Bundle Size**: Minimal (single component + CVA variants)
- **Tree Shaking**: Fully supported via named exports
- **Re-renders**: Optimized with React.forwardRef
- **Animations**: CSS-based, GPU-accelerated

## Dependencies

- `react` (peer dependency)
- `class-variance-authority` - for variant management
- `lucide-react` - for loading icon (only in busy state)
- `@/utils/cn` - for className merging

## Related Components

- **ButtonIcon**: Icon-only button variant
- **ButtonMenu**: Button with dropdown menu
- **ButtonMenuIcon**: Icon-only button with menu
- **ButtonGroup**: Layout for multiple related buttons

## Migration Guide

### From Native Button

```tsx
// Before
<button className="btn btn-primary">Click</button>

// After
<Button variant="primary">Click</Button>
```

### From Other Libraries

```tsx
// Material-UI
<MuiButton variant="contained" color="primary">Click</MuiButton>
// Versaur
<Button variant="primary">Click</Button>

// Ant Design
<AntButton type="primary">Click</AntButton>
// Versaur
<Button variant="primary">Click</Button>
```

## Future Enhancements

- [ ] Icon placement (left/right)
- [ ] Full width option
- [ ] Compact density variant
- [ ] Loading text customization
- [ ] Custom spinner component support
- [ ] Button group integration
- [ ] Keyboard shortcut hints

## Changelog

### v1.0.0

- Initial release with 4 variants
- 3 size options
- Busy/loading state
- Full accessibility support
- TypeScript types
