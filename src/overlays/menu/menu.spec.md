# Menu Component Specification

## Overview

The Menu component is a fully accessible, animated dropdown menu overlay for Versaur UI. It follows
Material Design principles with intelligent positioning, scroll handling, and compound component
architecture using the Context pattern.

## Component Pattern

**Pattern Type**: Compound + Context  
**Reasoning**: Menu requires multiple related sub-components (MenuContent, MenuItem) with shared
state for managing open/close behavior and preserve mode.

## Architecture

### File Structure

```
menu/
├── menu.tsx              # Root component with compound pattern
├── menu.atoms.tsx        # Sub-components (MenuContent, MenuItem)
├── context.ts            # Context for shared state
├── use-menu.ts           # Custom hooks (positioning, outside click)
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

Main component that manages menu state, positioning, and rendering.

#### Props Interface

```typescript
interface MenuProps {
  isOpen: boolean // Required: Controlled open state
  onOutsideClick: () => void // Required: Handler for outside clicks
  size?: 'sm' | 'md' // Optional: Menu size variant
  content: ReactNode // Required: Menu content (MenuContent/MenuItem)
  children: ReactNode // Required: Trigger element
  placement?: MenuPlacement // Optional: Preferred placement
  container?: HTMLElement | RefObject | null // Optional: Container boundaries
  preserve?: boolean // Optional: Keep menu open after item click
}

type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'auto'
```

#### Default Values

- `size`: `'md'`
- `placement`: `'auto'`
- `container`: `null` (uses viewport)
- `preserve`: `false`

#### Behavior

1. **Controlled Component**: Menu is fully controlled via `isOpen` prop
2. **Positioning Modes**:
   - **Viewport Mode** (no container): Uses `position: absolute`, tracks viewport scrolling
   - **Container Mode** (with container): Uses `position: fixed`, respects container boundaries
3. **Auto Placement**: When `placement='auto'`, intelligently positions based on available space
4. **Scroll Handling**:
   - Tracks all scrollable ancestors
   - Repositions on scroll (throttled with `requestAnimationFrame`)
   - Hides when trigger scrolls out of view
5. **Portal Rendering**: Fixed positioned menus render via `OverlayPortal`
6. **Measurement Strategy**: Hidden menu rendered for dimension calculation before showing

#### ARIA Attributes

```typescript
// Trigger element receives:
{
  'aria-haspopup': 'menu',
  'aria-expanded': isOpen,
  'aria-controls': menuId
}

// Menu container:
{
  role: 'menu',
  'aria-hidden': !isVisible
}
```

### 2. Menu.Content (MenuContent)

Container component for menu items, renders as semantic `<ul>` element.

#### Props Interface

```typescript
interface MenuContentProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}
```

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
<MenuProvider value={{ onClose: onOutsideClick, preserve: Boolean(preserve) }}>
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

## Positioning Algorithm

### Overview

The positioning system uses a multi-step algorithm to ensure the menu is always visible and properly
constrained.

### Steps

1. **Visibility Check**

   - Verify trigger is visible within scrollable containers
   - Verify trigger is within viewport
   - Hide menu if trigger is not visible

2. **Measurement Phase**

   - Get trigger dimensions and position
   - Resolve container element (if provided)
   - Measure content dimensions (temporarily hidden)

3. **Space Calculation**

   - Calculate available space in all directions relative to container/viewport
   - `spaceBelow`, `spaceAbove`, `spaceRight`, `spaceLeft`

4. **Placement Determination**

   - If `placement='auto'`:
     - Evaluate all 4 placement options with priorities
     - Choose placement that fits completely
     - Fallback to best available space if none fit
   - Otherwise use specified placement

5. **Position Calculation**

   - **Container Mode** (fixed): Calculate coordinates relative to viewport
   - **Viewport Mode** (absolute): Calculate coordinates relative to trigger

6. **Constraint Application**

   - **Container Mode**: Apply container boundaries, calculate max height
   - **Viewport Mode**: Apply basic viewport overflow prevention

7. **Render**
   - Apply calculated position styles
   - Render in portal (fixed) or inline (absolute)

### Helper Functions

| Function                      | Purpose                                                |
| ----------------------------- | ------------------------------------------------------ |
| `getScrollableAncestors()`    | Find all scrollable parent elements                    |
| `isTriggerVisible()`          | Check if trigger is visible in containers and viewport |
| `calculateBestPlacement()`    | Determine optimal placement based on available space   |
| `calculateFixedPosition()`    | Calculate fixed positioning coordinates                |
| `calculateAbsolutePosition()` | Calculate absolute positioning coordinates             |
| `applyContainerConstraints()` | Apply container boundary constraints and max height    |
| `applyViewportConstraints()`  | Apply viewport overflow prevention                     |
| `resolveContainer()`          | Resolve container from HTMLElement or RefObject        |
| `getContainerBounds()`        | Get container boundary coordinates                     |
| `calculateAvailableSpace()`   | Calculate space around trigger                         |
| `measureContentDimensions()`  | Safely measure content size                            |

## Custom Hooks

### useMenuOutsideClick

Handles click outside detection to close the menu.

```typescript
function useMenuOutsideClick(
  isOpen: boolean,
  contentRef: RefObject<HTMLDivElement | null>,
  triggerRef: RefObject<HTMLButtonElement | null>,
  onOutsideClick: () => void
): void
```

**Behavior**:

- Adds mousedown listener when menu is open
- Checks if click target is outside both menu and trigger
- Calls `onOutsideClick` if outside click detected
- Cleans up listener when menu closes

### useMenuPosition

Manages menu positioning, scroll tracking, and visibility.

```typescript
function useMenuPosition(
  isOpen: boolean,
  triggerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
  placement: MenuPlacement,
  container: HTMLElement | RefObject<HTMLElement | null> | null
): MenuPosition
```

**Returns**:

```typescript
interface MenuPosition {
  top?: number
  bottom?: number
  left?: number
  right?: number
  maxHeight?: number
  maxWidth?: number
  position?: 'absolute' | 'fixed'
  isReady?: boolean
}
```

**Features**:

- Initial position calculation
- Scroll event listeners (throttled with `requestAnimationFrame`)
- Resize event listeners
- Automatic repositioning
- Visibility tracking
- Content measurement

## Usage Examples

### Basic Menu

```tsx
const [isOpen, setIsOpen] = useState(false)

<Menu
  isOpen={isOpen}
  onOutsideClick={() => setIsOpen(false)}
  content={
    <Menu.Content>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item disabled>Logout</Menu.Item>
    </Menu.Content>
  }
>
  <button onClick={() => setIsOpen(!isOpen)}>
    Open Menu
  </button>
</Menu>
```

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
  onOutsideClick={() => setIsOpen(false)}
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

### With Container Constraints

```tsx
const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="overflow-auto h-96">
  <Menu
    isOpen={isOpen}
    onOutsideClick={() => setIsOpen(false)}
    container={containerRef.current}
    placement="auto"
    content={<Menu.Content>...</Menu.Content>}
  >
    <button>Menu in Scrollable Container</button>
  </Menu>
</div>
```

### Specific Placement

```tsx
<Menu
  isOpen={isOpen}
  onOutsideClick={() => setIsOpen(false)}
  placement='bottom-end'
  content={<Menu.Content>...</Menu.Content>}
>
  <button>Always Bottom-End</button>
</Menu>
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ Keyboard navigation support (via Button component)
- ✅ Focus management
- ✅ Screen reader support with ARIA attributes
- ✅ Proper semantic HTML (`<ul>`, `<li>`)
- ✅ Role attributes (`role="menu"`)
- ✅ State communication (`aria-expanded`, `aria-hidden`)
- ✅ Disabled state handling

### Keyboard Interactions

| Key               | Action                                   |
| ----------------- | ---------------------------------------- |
| `Enter` / `Space` | Activate trigger button                  |
| `Enter` / `Space` | Select menu item                         |
| `Escape`          | Close menu (handled by consumer)         |
| `Tab`             | Navigate away (closes via outside click) |

### Focus Management

- Focus remains on trigger when menu opens
- Menu items are keyboard navigable via Button component
- Focus returns to trigger when menu closes

## Performance Optimizations

1. **Throttled Scroll Updates**: Uses `requestAnimationFrame` to prevent excessive recalculations
2. **Conditional Rendering**: Hidden menu only rendered when position not ready
3. **Portal Usage**: Fixed positioned menus use portal for optimal rendering
4. **Will-Change Transform**: Hints browser for transform optimizations
5. **Passive Event Listeners**: Scroll listeners use `{ passive: true }` flag

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS custom properties support
- Requires Intersection Observer API (for scroll detection)
- Fallback to absolute positioning if fixed is not supported

## Testing Strategy

### Test Coverage

1. **Snapshot Tests**: Verify rendered output matches expected structure
2. **Interaction Tests**: Test opening, closing, item clicks, outside clicks
3. **Scroll Tests**: Verify positioning updates on scroll
4. **Accessibility Tests**: Verify ARIA attributes and keyboard navigation
5. **State Tests**: Test preserve mode, disabled items, active items

### Example Tests

```tsx
// Renders correctly
it('renders basic menu correctly', () => {
  const { asFragment } = render(<Basic />)
  expect(asFragment()).toMatchSnapshot()
})

// Handles outside click
it('closes menu when clicking outside', () => {
  render(<Basic />)
  fireEvent.click(trigger)
  expect(menuItem).toBeInTheDocument()
  fireEvent.mouseDown(document.body)
  expect(menuItem).not.toBeInTheDocument()
})

// Handles disabled state
it('disables menu item', () => {
  render(<Basic />)
  expect(screen.getByText('Logout')).toBeDisabled()
})
```

## Migration Guide

### From Previous Implementation

If migrating from a previous menu implementation:

1. **Props Renamed**:

   - `onClose` → `onOutsideClick`
   - No changes to other props

2. **Compound Pattern**:

   - Replace `<MenuContent>` with `<Menu.Content>`
   - Replace `<MenuItem>` with `<Menu.Item>`

3. **Context Pattern**:
   - MenuItem now uses context internally
   - No changes needed in consumer code

### Breaking Changes

None - Public API remains stable.

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
- Placement offset: `4px` from trigger
- Container padding: `8px` safety margin

### Sizing

- Minimum width: `min-w-56` (224px)
- Max height: Calculated based on container/viewport
- Z-index: `z-70` (700)

## Future Enhancements

### Potential Improvements

1. **Submenu Support**: Nested menus
2. **Keyboard Navigation**: Arrow key navigation between items
3. **Search/Filter**: Built-in search for large menus
4. **Group Headers**: Semantic grouping with headers
5. **Checkbox/Radio Items**: Selection menu items
6. **Animation Customization**: Configurable animation styles
7. **Virtual Scrolling**: For very large menus

### Backwards Compatibility

All future enhancements will maintain backwards compatibility with the current API through optional
props and feature detection.

## References

- [Material Design: Menus](https://material.io/components/menus)
- [WAI-ARIA: Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)
- [MDN: ARIA Menu Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)
- Versaur Design System Documentation
