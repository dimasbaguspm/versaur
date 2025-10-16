# ButtonIcon Component Specification

## Overview

The **ButtonIcon** component is an icon-only button that directly aligns with the native HTML
`<button>` element. It follows the **Regular Pattern** as it enhances a single HTML element with
styled variants while maintaining browser-standard behavior. ButtonIcon is optimized for compact
interfaces where space is limited, such as toolbars, action bars, and icon-heavy UIs.

## Component Pattern

**Regular Pattern** - This component directly maps to the native `<button>` HTML element, providing
a familiar developer experience with enhanced styling and accessibility features specifically
designed for icon-only buttons.

## Features

- ✅ **4 Semantic Variants**: Primary, ghost, outline, and destructive
- ✅ **3 Size Options**: Small (sm), medium (md), large (lg)
- ✅ **3 Shape Options**: Rounded, square, circle
- ✅ **Busy/Loading State**: Built-in spinner indicator with auto-disable
- ✅ **Required Accessibility**: Mandatory aria-label for screen readers
- ✅ **Full Accessibility**: ARIA attributes, keyboard navigation, focus management
- ✅ **Browser-Standard Behavior**: Aligns with native button element
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### Props

Extends all native `ButtonHTMLAttributes<HTMLButtonElement>` properties (except `type` and `color`).

| Prop         | Type                                                 | Default     | Description                                                  |
| ------------ | ---------------------------------------------------- | ----------- | ------------------------------------------------------------ |
| `as`         | `IconProps['as']`                                    | -           | Icon component to render (required, e.g., from lucide-react) |
| `variant`    | `'primary' \| 'ghost' \| 'outline' \| 'destructive'` | `'primary'` | Visual style variant                                         |
| `size`       | `'sm' \| 'md' \| 'lg'`                               | `'md'`      | Size of the button                                           |
| `shape`      | `'rounded' \| 'square' \| 'circle'`                  | `'rounded'` | Shape of the button                                          |
| `disabled`   | `boolean`                                            | `false`     | Whether the button is disabled                               |
| `busy`       | `boolean`                                            | `false`     | Whether the button is in a loading/busy state                |
| `aria-label` | `string`                                             | -           | Accessible label for screen readers (required)               |
| `className`  | `string`                                             | -           | Additional CSS classes                                       |

### Variants

#### Primary

- **Purpose**: Main call-to-action icon buttons
- **Visual**: Coral background (`bg-primary`), white icon
- **Hover**: Slightly darker background, elevated shadow
- **Focus**: Primary-light ring with offset
- **Use Cases**: Primary actions, add items, create new, main toolbar actions

#### Ghost

- **Purpose**: Subtle actions with minimal visual weight
- **Visual**: White background, foreground-colored icon
- **Hover**: Ghost-soft background
- **Focus**: Ghost-light ring with offset
- **Use Cases**: Secondary toolbar actions, subtle controls, non-primary interactions

#### Outline

- **Purpose**: Secondary actions or alternative choices
- **Visual**: White background with border, foreground-colored icon
- **Hover**: Accent-soft background
- **Focus**: Accent-soft ring with offset
- **Use Cases**: Secondary actions, alternative options, bordered toolbars

#### Destructive

- **Purpose**: Dangerous or irreversible actions
- **Visual**: Danger background, white icon
- **Hover**: Slightly darker background, elevated shadow
- **Focus**: Danger-soft ring with offset
- **Use Cases**: Delete, remove, trash, permanent destructive actions

### Sizes

| Size | Dimensions           | Use Case                                                    |
| ---- | -------------------- | ----------------------------------------------------------- |
| `sm` | 28×28px (h-7, w-7)   | Compact toolbars, dense interfaces, mobile-first designs    |
| `md` | 36×36px (h-9, w-9)   | Standard toolbar buttons, default for most use cases        |
| `lg` | 40×40px (h-10, w-10) | Prominent actions, touch-friendly interfaces, hero sections |

**Note**: All sizes maintain a 1:1 aspect ratio (square) and use the same icon size internally
('sm') for consistency.

### Shapes

| Shape     | Border Radius      | Use Case                                           |
| --------- | ------------------ | -------------------------------------------------- |
| `rounded` | 6px (rounded-md)   | General purpose, standard interfaces (default)     |
| `square`  | 2px (rounded-sm)   | Grid layouts, table actions, minimal designs       |
| `circle`  | 50% (rounded-full) | Profile actions, floating buttons, avatar controls |

### States

#### Normal

- Default interactive state
- Full opacity, pointer cursor
- Responds to hover, focus, active
- Icon displays normally

#### Busy

- Shows animated loading spinner (replaces icon)
- Auto-disables interaction (`disabled` and `inert` set to true)
- `aria-busy` attribute set to true
- Spinner color adapts to button variant (white for primary/destructive, inherit for ghost/outline)
- Continuous spin animation

#### Disabled

- Reduced opacity (50%)
- Pointer events disabled
- `aria-disabled` and `inert` attributes set
- Non-interactive, visually dimmed
- Original icon still visible (not replaced)

## Visual Specifications

### Typography

- **Font**: Medium weight
- **Icon Size**: Always 'sm' regardless of button size for consistency

### Spacing

- **No Internal Padding**: Icon fills the button centered
- **Border Radius**: Varies by shape (rounded-md, rounded-sm, rounded-full)
- **Focus Ring**: 2px width with 2px offset

### Animations

- **Transition**: All properties, 200ms duration
- **Active Scale**: 0.98 (subtle press effect)
- **Hover Shadow**: Elevation change on primary/destructive variants
- **Spinner**: Continuous rotation animation (animate-spin)

### Accessibility

#### ARIA Attributes

- `aria-label`: Required for all icon-only buttons (TypeScript enforced)
- `aria-disabled`: Set when `disabled` or `busy` is true
- `aria-busy`: Set when `busy` is true
- `inert`: Set when `disabled` or `busy` is true

#### Keyboard Support

- **Enter/Space**: Activates the button (native browser behavior)
- **Tab**: Moves focus to/from the button
- **Focus Visible**: Clear 2px ring indicator with offset

#### Screen Reader Support

- Proper button semantics via native `<button>` element
- Required `aria-label` ensures icon-only buttons are understandable
- State changes announced via ARIA attributes
- No visible text content, aria-label provides context

### Color System

Uses CSS custom properties from the Versaur design system:

| Variant     | Background        | Icon Color           | Hover BG                | Focus Ring              | Border           |
| ----------- | ----------------- | -------------------- | ----------------------- | ----------------------- | ---------------- |
| Primary     | `--color-primary` | white                | `--color-primary` (90%) | `--color-primary-light` | -                |
| Ghost       | white             | `--color-foreground` | `--color-ghost-soft`    | `--color-ghost-light`   | -                |
| Outline     | white             | `--color-foreground` | `--color-accent-soft`   | `--color-accent-soft`   | `--color-border` |
| Destructive | `--color-danger`  | white                | `--color-danger` (90%)  | `--color-danger-soft`   | -                |

## Usage Examples

### Basic Usage

```tsx
import { ButtonIcon } from '@versaur/primitive/button-icon'
import { Plus, Heart, Settings, Trash2 } from 'lucide-react'

// Primary button (default)
<ButtonIcon as={Plus} aria-label="Add item" />

// With variant
<ButtonIcon as={Heart} variant="ghost" aria-label="Like" />

// With size
<ButtonIcon as={Settings} size="lg" aria-label="Settings" />

// With shape
<ButtonIcon as={Plus} shape="circle" aria-label="Add" />

// Disabled
<ButtonIcon as={Settings} disabled aria-label="Settings disabled" />

// Loading state
<ButtonIcon as={Plus} busy aria-label="Loading" />
```

### Toolbar Example

```tsx
// Icon toolbar with separator
<div className='flex items-center gap-1 p-2 bg-gray-50 rounded-md'>
  <ButtonIcon as={Plus} variant='ghost' size='sm' aria-label='Add item' />
  <ButtonIcon as={Heart} variant='ghost' size='sm' aria-label='Like' />
  <ButtonIcon as={Settings} variant='ghost' size='sm' aria-label='Settings' />
  <div className='w-px h-4 bg-gray-300 mx-1' />
  <ButtonIcon as={Trash2} variant='ghost' size='sm' aria-label='Delete' />
</div>
```

### All Variants

```tsx
<div className='flex gap-4'>
  <ButtonIcon as={Plus} variant='primary' aria-label='Primary action' />
  <ButtonIcon as={Heart} variant='ghost' aria-label='Ghost action' />
  <ButtonIcon as={Settings} variant='outline' aria-label='Outline action' />
  <ButtonIcon as={Trash2} variant='destructive' aria-label='Delete action' />
</div>
```

### All Sizes

```tsx
<div className='flex items-center gap-4'>
  <ButtonIcon as={Plus} size='sm' aria-label='Small' />
  <ButtonIcon as={Plus} size='md' aria-label='Medium' />
  <ButtonIcon as={Plus} size='lg' aria-label='Large' />
</div>
```

### All Shapes

```tsx
<div className='flex items-center gap-4'>
  <ButtonIcon as={Plus} shape='rounded' aria-label='Rounded' />
  <ButtonIcon as={Plus} shape='square' aria-label='Square' />
  <ButtonIcon as={Plus} shape='circle' aria-label='Circle' />
</div>
```

### State Examples

```tsx
// Normal, busy, and disabled states
<div className='flex gap-4'>
  <ButtonIcon as={Plus} variant='primary' aria-label='Normal' />
  <ButtonIcon as={Plus} variant='primary' busy aria-label='Loading' />
  <ButtonIcon as={Plus} variant='primary' disabled aria-label='Disabled' />
</div>
```

### Async Operations

```tsx
const [isLoading, setIsLoading] = useState(false)

const handleAction = async () => {
  setIsLoading(true)
  await performAction()
  setIsLoading(false)
}

;<ButtonIcon
  as={Plus}
  busy={isLoading}
  onClick={handleAction}
  aria-label={isLoading ? 'Loading...' : 'Add item'}
/>
```

### Circular Icon Buttons

```tsx
// Perfect for profile actions, floating buttons
<div className='flex gap-4'>
  <ButtonIcon as={Plus} shape='circle' variant='primary' aria-label='Add' />
  <ButtonIcon as={Heart} shape='circle' variant='ghost' aria-label='Like' />
  <ButtonIcon as={Settings} shape='circle' variant='outline' aria-label='Settings' />
  <ButtonIcon as={Trash2} shape='circle' variant='destructive' aria-label='Delete' />
</div>
```

### Size and Shape Combinations

```tsx
// Small circle for compact UI
<ButtonIcon as={Plus} size="sm" shape="circle" aria-label="Add" />

// Large rounded for prominent actions
<ButtonIcon as={Settings} size="lg" shape="rounded" aria-label="Settings" />

// Medium square for grid layouts
<ButtonIcon as={Heart} size="md" shape="square" aria-label="Like" />
```

## Design Decisions

### Why Regular Pattern?

The ButtonIcon component uses the Regular Pattern because:

1. **Browser Alignment**: Directly maps to native `<button>` element
2. **Simplicity**: Single component with props-based API
3. **Accessibility**: Leverages native button accessibility features
4. **Familiarity**: Developers expect button-like behavior
5. **Form Integration**: Works seamlessly with HTML forms (though less common for icon buttons)

### Icon-Only Design

- **Mandatory aria-label**: TypeScript enforces accessibility
- **No text content**: Clean, compact visual design
- **Icon replacement**: Spinner replaces icon during busy state
- **Consistent sizing**: Icon size stays 'sm' regardless of button size for visual harmony

### Shape Flexibility

- **Three shapes**: Rounded (default), square, circle
- **Design versatility**: Adapts to different interface styles
- **Semantic meaning**: Circle often implies profile/user actions

### Type Safety

- **Strict props**: All props strictly typed via `ButtonIconProps` interface
- **Icon component**: Type-safe icon passing via `as` prop
- **Required aria-label**: TypeScript enforces accessibility requirement

## Testing Considerations

### Unit Tests

- Render each variant correctly
- Render each size correctly
- Render each shape correctly
- Handle disabled state properly
- Handle busy state with spinner (icon replacement)
- Apply custom className
- Forward ref correctly
- Snapshot test for HTML output
- Verify aria-label is present

### Accessibility Tests

- Has proper button role
- aria-label is required and present
- Keyboard navigation works
- Focus visible indicator appears
- ARIA attributes are correct (aria-disabled, aria-busy, inert)
- Screen reader announcements for states

### Integration Tests

- Click handlers execute
- Icon components render correctly
- Size and shape combinations work
- Variant and size combinations work
- Busy state prevents interaction

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
- **Icon Loading**: Lazy-loadable via dynamic imports

## Dependencies

- `react` (peer dependency)
- `class-variance-authority` - for variant management
- `lucide-react` - for loading icon (only in busy state)
- `@/utils/cn` - for className merging
- `@/primitive/icon` - internal Icon component for rendering

## Related Components

- **Button**: Text button with optional icons
- **ButtonMenu**: Button with dropdown menu
- **ButtonMenuIcon**: Icon button with dropdown menu (extends this component)
- **Icon**: Base icon component used internally

## Comparison with Button

| Feature      | Button                    | ButtonIcon              |
| ------------ | ------------------------- | ----------------------- |
| Text content | Required                  | None (icon only)        |
| Icon support | Optional                  | Required                |
| aria-label   | Optional                  | Required                |
| Sizes        | sm, md, lg                | sm, md, lg              |
| Shapes       | Fixed (rounded)           | rounded, square, circle |
| Busy state   | ✅                        | ✅                      |
| Use case     | General actions with text | Compact toolbar actions |

## Migration Guide

### From Native Button with Icon

```tsx
// Before
<button className="icon-btn" aria-label="Add">
  <PlusIcon />
</button>

// After
<ButtonIcon as={Plus} aria-label="Add" />
```

### From Other Libraries

```tsx
// Material-UI
<IconButton color="primary"><AddIcon /></IconButton>
// Versaur
<ButtonIcon as={Plus} variant="primary" aria-label="Add" />

// Ant Design
<Button type="primary" icon={<PlusOutlined />} />
// Versaur (icon only)
<ButtonIcon as={Plus} variant="primary" aria-label="Add" />
```

### From Button Component

```tsx
// Button with icon only
<Button variant="primary" size="md">
  <Plus />
</Button>

// Better: ButtonIcon for icon-only
<ButtonIcon as={Plus} variant="primary" size="md" aria-label="Add" />
```

## Common Patterns

### Toolbar Actions

```tsx
<div className='flex gap-1'>
  <ButtonIcon as={Bold} variant='ghost' size='sm' aria-label='Bold' />
  <ButtonIcon as={Italic} variant='ghost' size='sm' aria-label='Italic' />
  <ButtonIcon as={Underline} variant='ghost' size='sm' aria-label='Underline' />
</div>
```

### Card Actions

```tsx
<div className='absolute top-2 right-2 flex gap-2'>
  <ButtonIcon as={Heart} variant='ghost' aria-label='Like' />
  <ButtonIcon as={Share} variant='ghost' aria-label='Share' />
</div>
```

### Floating Action Button

```tsx
<ButtonIcon
  as={Plus}
  shape='circle'
  size='lg'
  className='fixed bottom-4 right-4 shadow-lg'
  aria-label='Add item'
/>
```

### Table Row Actions

```tsx
<div className='flex gap-1'>
  <ButtonIcon as={Edit} variant='ghost' size='sm' aria-label='Edit' />
  <ButtonIcon as={Trash2} variant='destructive' size='sm' aria-label='Delete' />
</div>
```

## Accessibility Best Practices

1. **Always provide meaningful aria-label**: Describe the action, not the icon

   ```tsx
   // Good
   <ButtonIcon as={Trash2} aria-label="Delete item" />

   // Bad
   <ButtonIcon as={Trash2} aria-label="Trash icon" />
   ```

2. **Update aria-label for state changes**:

   ```tsx
   <ButtonIcon
     as={Heart}
     aria-label={isLiked ? 'Unlike' : 'Like'}
     variant={isLiked ? 'primary' : 'ghost'}
   />
   ```

3. **Provide context for busy state**:

   ```tsx
   <ButtonIcon as={Plus} busy={isAdding} aria-label={isAdding ? 'Adding item...' : 'Add item'} />
   ```

4. **Use destructive variant for dangerous actions**:
   ```tsx
   <ButtonIcon as={Trash2} variant='destructive' aria-label='Delete permanently' />
   ```

## Future Enhancements

- [ ] Custom spinner component support
- [ ] Tooltip integration (auto-show aria-label on hover)
- [ ] Badge/notification dot support
- [ ] Pulse animation for notifications
- [ ] Keyboard shortcut hints (visual indicators)
- [ ] Touch feedback animation
- [ ] Icon animation on interaction
- [ ] Group/ButtonGroup integration

## Changelog

### v1.0.0

- Initial release with 4 variants (aligned with Button)
- 3 size options (sm, md, lg)
- 3 shape options (rounded, square, circle)
- Busy/loading state with spinner
- Required aria-label for accessibility
- Full TypeScript types
- Complete test coverage
- Storybook documentation
