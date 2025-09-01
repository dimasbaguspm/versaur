# Menu Component

Accessible, animated menu for Versaur UI with advanced scroll handling and intelligent positioning.
Follows Material Design menu principles with enhanced support for scrollable containers and viewport
scrolling.

## Features

- **Smart scroll handling**: Automatically adapts position when containers or viewport scroll
- **Intelligent positioning**: Prevents overlaps and repositions based on available space
- **Scrollable container support**: Works seamlessly within scrollable elements
- **Viewport tracking**: Hides menu when trigger scrolls out of view
- **Performance optimized**: Uses throttled scroll listeners and requestAnimationFrame
- **Accessibility focused**: Proper ARIA attributes and keyboard navigation

## Usage

```tsx
import { useState } from 'react'
import { Menu, MenuContent, MenuItem } from '@/components/menu'

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu
      isOpen={isOpen}
      onOutsideClick={() => setIsOpen(false)}
      size='md'
      placement='auto'
      content={
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </MenuContent>
      }
    >
      <button onClick={() => setIsOpen(o => !o)}>Open Menu</button>
    </Menu>
  )
}
```

## Scroll Handling

The menu automatically handles scrollable containers and viewport scrolling with two distinct modes:

### 1. Viewport Mode (default)

When no `container` prop is provided, the menu uses viewport-based positioning:

```tsx
<div className="h-screen">
  {/* Page content that requires scrolling */}
  <Menu isOpen={isOpen} onOutsideClick={close} content={...}>
    <button>Menu on scrollable page</button>
  </Menu>
</div>
```

**Behavior:**

- Uses `position: absolute` relative to trigger element
- Auto placement calculates space relative to **viewport**
- **Tracks viewport scrolling** and repositions accordingly
- **Hides when trigger scrolls out of viewport**
- Optimal for full-page menus and simple scenarios

### 2. Container Mode

When a `container` prop is provided, the menu uses container-constrained positioning:

```tsx
<div ref={containerRef} className="overflow-y-auto h-64">
  {/* Long list of items */}
  <Menu
    isOpen={isOpen}
    onOutsideClick={close}
    container={containerRef.current}
    content={...}
  >
    <button>Menu in scrollable container</button>
  </Menu>
</div>
```

**Behavior:**

- Uses `position: fixed` for better scroll handling
- Auto placement calculates space relative to **container boundaries**
- **Tracks container and viewport scrolling**
- **Hides when trigger scrolls out of container or viewport**
- **Respects container boundaries** for positioning
- Ideal for dropdowns within modals, sidebars, or constrained areas

### Performance Features

Both modes include:

- **Throttled scroll updates** using `requestAnimationFrame`
- **Automatic cleanup** of scroll listeners
- **Efficient visibility detection** for nested scrollable elements
- **Smart position recalculation** only when needed

## Positioning

The menu supports intelligent positioning to prevent overlaps:

```tsx
// Auto placement - menu chooses best position
<Menu placement='auto' />

// Specific placements
<Menu placement='bottom-start' />
<Menu placement='bottom-end' />
<Menu placement='top-start' />
<Menu placement='top-end' />

// Respect container boundaries
<Menu container={containerRef.current} />
```

## Features

- Smart positioning that respects container boundaries
- Auto placement that chooses optimal position
- Accessible, ARIA roles
- Focus management
- Animated open/close (scale/fade)
- Strictly typed props
- Tailwind styling
- Easy to extend for submenus

```

## Features

- Accessible, ARIA roles
- Focus management
- Animated open/close (slide/fade)
- Strictly typed props
- Tailwind styling
- Easy to extend for submenus
```
