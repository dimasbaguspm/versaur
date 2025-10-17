# FilterChip Component Specification

## Overview

The `FilterChip` component is a simple, removable chip element designed for filtering interfaces. It
provides a consistent neutral outline style with multiple size options and full accessibility
support.

## Design Philosophy

The FilterChip follows Versaur's principle of simplicity and consistency:

- **Fixed styling**: Uses only neutral-outline variant for consistent filtering UI
- **Browser alignment**: Extends native `<button>` element behavior
- **Accessibility-first**: Full keyboard navigation and ARIA support
- **Mobile-first responsive**: Designed with responsive considerations

## Component Pattern

This component follows the **Regular Pattern** (see Copilot Instructions):

- Simple component that aligns with standard HTML `<button>` element
- Props-based API without complex composition
- Familiar developer experience through browser standards

## API

### Props

The `FilterChip` extends all standard `ButtonHTMLAttributes<HTMLButtonElement>` and accepts the
following props:

#### `size`

- **Type**: `'sm' | 'md' | 'lg'`
- **Default**: `'md'`
- **Description**: Size of the chip
  - `sm`: 28px height (`h-7`), compact for dense layouts
  - `md`: 32px height (`h-8`), standard for most use cases
  - `lg`: 36px height (`h-9`), prominent for important filters

#### `disabled`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the chip is disabled. When true, the chip becomes non-interactive and
  visually dimmed

#### `children`

- **Type**: `string`
- **Required**: Yes
- **Description**: The text content of the chip that will be displayed

#### `className`

- **Type**: `string`
- **Optional**: Yes
- **Description**: Additional CSS classes to apply to the button element

### Other Props

All other standard `ButtonHTMLAttributes<HTMLButtonElement>` are supported, including:

- `onClick`: Click handler for the chip
- `onKeyDown`: Keyboard event handler
- `aria-*`: ARIA attributes for enhanced accessibility
- `id`, `name`, etc.

## Visual Design

### Style

The FilterChip uses a single, fixed visual style:

- **Border**: `border-border` color with subtle outline
- **Background**: White (`bg-white`)
- **Text**: Foreground color (`text-foreground`)
- **Hover**: Neutral background (`hover:bg-neutral`)
- **Focus**: Visible focus ring with `focus-visible:ring-foreground-light`

### Layout

```
┌─────────────────────────┐
│  [Text]  [X Icon]      │
└─────────────────────────┘
```

- Text: Flex-shrink-0 to prevent wrapping
- Icon: Always visible X icon for removal
- Gap: 1.5 spacing units (`gap-1.5`)
- Padding: Varies by size (3-5 spacing units)
- Border radius: Full rounded (`rounded-full`)

### Icon

- Uses `XIcon` from `lucide-react` (via Icon component)
- Size adapts based on chip size:
  - `sm` and `md` chips: small icon (`sm`)
  - `lg` chips: medium icon (`md`)
- Color: Inherits from parent (`color='inherit'`)

## Behavior

### Interactive States

1. **Default**:

   - Cursor pointer, neutral outline style
   - Shows hover state on mouse over

2. **Hover**:

   - Background changes to `bg-neutral`
   - Smooth transition (200ms)

3. **Focus**:

   - Visible focus ring (2px)
   - Ring color: `focus-visible:ring-foreground-light`
   - Ring offset: 2px with white background

4. **Disabled**:
   - Opacity reduced to 50%
   - Pointer events disabled
   - `inert` attribute applied
   - Click handlers not triggered

### Keyboard Navigation

- **Tab**: Focus the chip
- **Enter/Space**: Trigger click action (when enabled)
- **Escape**: Can be handled by parent component

## Accessibility

### ARIA Attributes

- `role="button"`: Implicit from button element
- `aria-label`: Automatically set to `"{children}, removable"`
- `aria-disabled`: Set to `"true"` when disabled
- `inert`: Applied when disabled to remove from tab order and prevent interaction

### Keyboard Support

- Fully keyboard navigable via native button behavior
- Focus visible indicators for keyboard users
- No custom keyboard handling required (uses browser defaults)

### Screen Reader Support

- Announces the chip content and "removable" status
- Disabled state is properly announced
- Button role ensures correct semantic meaning

## Usage Examples

### Basic Usage

```tsx
<FilterChip>Category</FilterChip>
```

### Different Sizes

```tsx
<FilterChip size="sm">Small</FilterChip>
<FilterChip size="md">Medium</FilterChip>
<FilterChip size="lg">Large</FilterChip>
```

### With Click Handler

```tsx
<FilterChip onClick={() => removeFilter('category')}>Category: Books</FilterChip>
```

### Disabled State

```tsx
<FilterChip disabled>Protected Filter</FilterChip>
```

### Multiple Filters

```tsx
<div className='flex flex-wrap gap-2'>
  <FilterChip onClick={() => removeFilter('category')}>Category: Books</FilterChip>
  <FilterChip onClick={() => removeFilter('status')}>Status: Active</FilterChip>
  <FilterChip onClick={() => removeFilter('date')}>Date: Today</FilterChip>
</div>
```

## Implementation Details

### File Structure

```
filter-chip/
  filter-chip.tsx          # Main component
  types.ts                 # TypeScript types
  helpers.ts               # CVA variants
  index.ts                 # Barrel export
  filter-chip.stories.tsx  # Storybook stories
  readme.md                # Usage documentation
  filter-chip.spec.md      # This specification
  __tests__/
    filter-chip.test.tsx   # Unit tests
    __snapshots__/         # Jest snapshots
```

### Dependencies

- `react`: Core React library
- `class-variance-authority`: For variant management
- `lucide-react`: For X icon
- `@/utils/cn`: Utility for class name merging
- `@/primitive/icon`: Icon wrapper component

### CSS Classes (from CVA)

Base classes (always applied):

```
inline-flex items-center gap-1.5 rounded-full font-medium
transition-all duration-200 focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-offset-2
disabled:opacity-50 disabled:pointer-events-none select-none
cursor-pointer text-sm leading-none border border-border
text-foreground bg-white hover:bg-neutral
focus-visible:ring-foreground-light
focus-visible:ring-offset-white
```

Size-specific classes:

- `sm`: `h-7 px-3 text-xs`
- `md`: `h-8 px-4 text-sm`
- `lg`: `h-9 px-5 text-sm`

## Testing

### Unit Tests

The component includes comprehensive unit tests covering:

1. Basic rendering
2. Neutral-outline style application
3. Size variants
4. Disabled state
5. Icon visibility
6. Click handling
7. Accessibility attributes
8. Ref forwarding
9. Custom className application
10. Story rendering (Default, Sizes, MultipleFilters, Disabled)

### Testing Guidelines

When testing FilterChip:

- Use `composeStories` from `@storybook/react` for story-based tests
- Verify ARIA attributes are correctly set
- Test keyboard interaction via native button behavior
- Ensure disabled state prevents interaction
- Validate snapshot consistency

## Browser Support

The FilterChip component supports:

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Uses standard button element for maximum compatibility

## Performance Considerations

- Lightweight component with minimal overhead
- CVA ensures efficient class name generation
- No runtime style calculations
- Optimized for tree-shaking

## Future Considerations

While the component currently has a fixed style, future enhancements could include:

- Theme customization via CSS variables
- Additional size variants if needed
- Optional badge/count display
- Animation on removal (to be handled by parent)

However, these would be carefully considered to maintain simplicity and consistency.

## Version History

- **v1.0.0**: Initial release with single neutral-outline variant
  - Simplified from multi-variant version
  - Fixed styling for consistency
  - Full accessibility support
  - Three size options (sm, md, lg)
