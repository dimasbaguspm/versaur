# Menu Component Specification

## Overview

The Menu component is a fully accessible dropdown menu overlay for Versaur UI. It leverages the
browser's native Popover API (via the Popover utility component) for intelligent positioning and
scroll handling, following Material Design principles with compound component architecture using the
Context pattern.

## Component Pattern

**Pattern Type**: Compound + Context  
**Reasoning**: Menu requires multiple related sub-components (Menu.Content, Menu.Item) with shared
state for managing open/close behavior and preserve mode.

## Architecture

### File Structure

```
menu/
├── menu.tsx              # Root component with compound pattern
├── menu.atoms.tsx        # Sub-components (MenuContent, MenuItem)
├── context.ts            # Context for shared state
├── helpers.ts            # Utility functions and variants
├── types.ts              # TypeScript interfaces
├── index.ts              # Public API exports
├── readme.md             # User documentation
├── menu.stories.tsx      # Storybook stories
└── __tests__/
    └── menu.test.tsx     # Component tests
```

## Public API

### Exports

```typescript
export { Menu } from './menu'
export type { MenuProps, MenuSize } from './types'
```

### Component Structure

```typescript
Menu (Root Component)
├── Menu.Content (MenuContent)
└── Menu.Item (MenuItem)
```

## Component Specifications

### 1. Menu (Root)

Main component that manages menu state and delegates positioning to Popover.

#### Props Interface

```typescript
interface MenuProps {
  isOpen: boolean // Required: Controlled open state
  onClose: () => void // Required: Handler for closing the menu
  size?: 'sm' | 'md' // Optional: Menu size variant
  content: ReactNode // Required: Menu content (Menu.Content/Menu.Item)
  children: ReactNode // Required: Trigger element
  placement?: PopoverPlacement // Optional: Preferred placement ('top' | 'right' | 'bottom' | 'left')
  gap?: number // Optional: Gap between trigger and menu in pixels
  preserve?: boolean // Optional: Keep menu open after item click
}
```

#### Default Values

- `size`: `'md'`
- `placement`: `'bottom'`
- `gap`: `4`
- `preserve`: `false`

#### Behavior

1. **Controlled Component**: Menu is fully controlled via `isOpen` and `onClose` props
2. **Popover Integration**: Uses browser Popover API in controlled mode for positioning and
   visibility
3. **Automatic Positioning**: Popover handles intelligent placement based on available space
4. **Scroll Handling**: Popover automatically tracks scrolling and repositions
5. **Trigger Control**: Trigger element must handle its own onClick to control menu state (no
   automatic `popovertarget` attributes)

#### ARIA Attributes

The Popover component provides basic structure:

```typescript
// Menu container (via Popover):
{
  popover: 'auto',
  id: menuId
}

// Trigger element (consumer responsibility):
{
  // Consumer must add onClick handler to toggle isOpen state
  // Example: onClick={() => setIsOpen(!isOpen)}
}
```

**Note**: In controlled mode, the trigger does NOT receive `popovertarget` attributes. The consumer
is responsible for managing the open/close state through the trigger's event handlers.

````

### 2. Menu.Content (MenuContent)

Container component for menu items, renders as semantic `<ul>` element.

#### Props Interface

```typescript
interface MenuContentProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}
````

#### Styling

- Flexbox layout with vertical orientation
- `gap-1` spacing between items
- Extends all standard `<ul>` HTML attributes

#### Example

```tsx
<Menu.Content>
  <Menu.Item>Profile</Menu.Item>
  <Menu.Item>Settings</Menu.Item>
</Menu.Content>
```

### 3. Menu.Item (MenuItem)

Individual menu item component, renders as `<li>` with Button inside.

#### Props Interface

```typescript
interface MenuItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  children: ReactNode
  disabled?: boolean
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
  active?: boolean
}
```

#### Behavior

1. **Auto-Close**: Clicking an item closes the menu (unless `preserve` is true)
2. **Active State**: Shows check icon when `active={true}`
3. **Disabled State**: Prevents interaction when `disabled={true}`
4. **Button Integration**: Uses Versaur `Button` component with `variant='ghost'`

#### Styling

- Full width button with left alignment
- `gap-2` spacing between content and icon
- Check icon positioned at `ml-auto` (right side)
- Inherits color from parent context

## Context Pattern

### MenuContext

Provides shared state to MenuItem components.

```typescript
interface MenuContextModel {
  preserve: boolean // Whether to keep menu open after item click
  onClose: VoidFunction // Function to close the menu
}
```

### Usage

```typescript
// Provider (in Menu root)
<MenuProvider value={{ onClose, preserve: Boolean(preserve) }}>
  {children}
</MenuProvider>

// Consumer (in MenuItem)
const { preserve, onClose } = useMenuProvider()
```

## Styling System

### Variants (CVA)

```typescript
menuVariants = cva(
  'z-70 min-w-56 bg-background rounded-lg border border-border transition-all duration-200 ease-out will-change-transform shadow-lg',
  {
    variants: {
      size: {
        sm: 'py-1.5 px-1',
        md: 'py-2 px-1',
      },
      open: {
        true: 'opacity-100 scale-100',
        false: 'opacity-0 pointer-events-none scale-95',
      },
    },
    defaultVariants: {
      size: 'md',
      open: false,
    },
  }
)
```

### Animation

- **Open**: `opacity-100 scale-100`
- **Closed**: `opacity-0 scale-95 pointer-events-none`
- **Duration**: `200ms`
- **Easing**: `ease-out`
- **Transform**: Uses `will-change-transform` for performance

### Elevation

- **Z-Index**: `z-70`
- **Shadow**: `shadow-lg`

## Positioning System

### Popover Integration

Menu delegates all positioning logic to the Popover utility component, which:

1. **Uses Native Popover API**: Leverages browser's built-in popover functionality
2. **Intelligent Placement**: Automatically positions based on available viewport space
3. **Scroll Tracking**: Monitors scroll events and repositions accordingly
4. **Viewport Constraints**: Ensures menu stays within visible viewport bounds
5. **Performance Optimized**: Uses `requestAnimationFrame` for smooth updates

### Placement Options

Popover supports four placement directions:

- `'top'`: Menu appears above the trigger
- `'right'`: Menu appears to the right of the trigger
- `'bottom'`: Menu appears below the trigger (default)
- `'left'`: Menu appears to the left of the trigger

The Popover component automatically adjusts position if there's insufficient space in the preferred
direction.

## Usage Examples

### Basic Menu (Controlled)

```tsx
const [isOpen, setIsOpen] = useState(false)

<Menu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={
    <Menu.Content>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item disabled>Logout</Menu.Item>
    </Menu.Content>
  }
>
  <button onClick={() => setIsOpen(!isOpen)}>Open Menu</button>
</Menu>
```

**Important**: The trigger button must handle its own onClick to toggle the `isOpen` state. The Menu
component uses controlled mode with Popover, so it does NOT automatically add `popovertarget`
attributes.

### With Icons and Active State

```tsx
<Menu.Content>
  <Menu.Item active>
    <Icon as={CheckIcon} />
    Selected Item
  </Menu.Item>
  <Menu.Item>
    <Icon as={UserIcon} />
    Profile
  </Menu.Item>
</Menu.Content>
```

### Preserve Mode (Keep Open on Click)

```tsx
<Menu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  preserve={true}
  content={
    <Menu.Content>
      <Menu.Item onClick={() => console.log('stays open')}>Filter Option</Menu.Item>
    </Menu.Content>
  }
>
  <button>Filters</button>
</Menu>
```

### Specific Placement

```tsx
<Menu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  placement='top'
  content={<Menu.Content>...</Menu.Content>}
>
  <button>Always Top</button>
</Menu>
```

### Custom Gap

```tsx
<Menu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  gap={8}
  content={<Menu.Content>...</Menu.Content>}
>
  <button>Menu with 8px Gap</button>
</Menu>
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ Keyboard navigation support (via Button component and Popover API)
- ✅ Focus management (handled by browser Popover API)
- ✅ Screen reader support with semantic HTML
- ✅ Proper semantic HTML (`<ul>`, `<li>`)
- ✅ Popover API provides built-in accessibility features
- ✅ Disabled state handling

### Keyboard Interactions

| Key               | Action                                 |
| ----------------- | -------------------------------------- |
| `Enter` / `Space` | Activate trigger button                |
| `Enter` / `Space` | Select menu item                       |
| `Escape`          | Close menu (via Popover API)           |
| `Tab`             | Navigate away (closes via Popover API) |

### Focus Management

- Focus management handled by browser Popover API
- Menu items are keyboard navigable via Button component
- Escape key automatically closes popover

## Performance Optimizations

1. **Browser Popover API**: Native browser support for optimal performance
2. **Throttled Scroll Updates**: Popover uses `requestAnimationFrame` for smooth positioning
3. **Will-Change Transform**: Hints browser for transform optimizations
4. **Passive Event Listeners**: Scroll listeners use `{ passive: true }` flag
5. **Minimal Re-renders**: Controlled component pattern reduces unnecessary updates

## Browser Support

- Requires native Popover API support (Chrome 114+, Edge 114+, Safari 17+)
- Falls back gracefully in unsupported browsers (menu may not position correctly)
- CSS custom properties required
- Modern JavaScript features (ES2020+)

## Testing Strategy

### Test Coverage

1. **Snapshot Tests**: Verify rendered output matches expected structure
2. **Interaction Tests**: Test opening, closing, item clicks
3. **Accessibility Tests**: Verify semantic HTML and disabled states
4. **State Tests**: Test preserve mode, disabled items, active items
5. **Popover Integration**: Test that Popover API attributes are correctly applied

### Example Tests

```tsx
// Renders correctly
it('renders basic menu correctly', () => {
  const { asFragment } = render(<Basic />)
  expect(asFragment()).toMatchSnapshot()
})

// Handles disabled state
it('disables menu item', () => {
  render(<Basic />)
  expect(screen.getByText('Logout')).toBeDisabled()
})

// Opens menu
it('opens menu on trigger click', () => {
  render(<Basic />)
  const trigger = screen.getByLabelText('Open menu')
  fireEvent.click(trigger)
  expect(screen.getByText('Profile')).toBeVisible()
})
```

## Migration Guide

### From Previous Implementation

If migrating from the previous custom positioning implementation:

#### Breaking Changes

1. **Props Renamed**:
   - `onOutsideClick` → `onClose`
   - `container` prop removed (Popover handles viewport constraints)
2. **Placement Values Changed**:

   - `'auto'` removed (Popover automatically adjusts)
   - `'bottom-start'` → `'bottom'`
   - `'bottom-end'` → `'bottom'`
   - `'top-start'` → `'top'`
   - `'top-end'` → `'top'`
   - Added: `'left'` and `'right'`

3. **Behavior Changes**:
   - Menu content always rendered in DOM (hidden via Popover API)
   - Uses native browser Popover API instead of custom positioning
   - No more container constraints prop (viewport-based only)

#### Migration Steps

```tsx
// Before
<Menu
  isOpen={isOpen}
  onOutsideClick={() => setIsOpen(false)}
  placement="bottom-start"
  container={containerRef.current}
  content={<Menu.Content>...</Menu.Content>}
>
  <button>Menu</button>
</Menu>

// After
<Menu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  placement="bottom"
  content={<Menu.Content>...</Menu.Content>}
>
  <button>Menu</button>
</Menu>
```

## Design Tokens

### Colors

Uses Versaur design system tokens:

- `--color-background`: Menu background
- `--color-border`: Menu border
- `--color-foreground`: Text color (via Button)
- `--color-ghost`: Ghost button variant
- Semantic colors for icons (primary, danger, etc.)

### Spacing

- Menu padding: `sm: py-1.5 px-1`, `md: py-2 px-1`
- Item gap: `gap-1` (4px)
- Button gap: `gap-2` (8px)
- Default placement offset: `4px` from trigger (configurable via `gap` prop)

### Sizing

- Minimum width: `min-w-56` (224px)
- Max width: `max-w-sm` (inherited from Popover)
- Z-index: `z-70` (700)

## Future Enhancements

### Potential Improvements

1. **Submenu Support**: Nested menus with hover/click interactions
2. **Arrow Key Navigation**: Navigate between menu items with keyboard
3. **Search/Filter**: Built-in search for large menus
4. **Group Headers**: Semantic grouping with headers and separators
5. **Checkbox/Radio Items**: Selection menu items with state
6. **Virtual Scrolling**: For very large menus with many items

### Backwards Compatibility

All future enhancements will maintain backwards compatibility with the current API through optional
props and feature detection.

## References

- [Popover API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Material Design: Menus](https://material.io/components/menus)
- [WAI-ARIA: Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)
- Versaur Design System Documentation
- [Popover Utility Specification](../../utils/popover/popover.spec.md)
