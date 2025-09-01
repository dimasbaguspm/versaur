# Menu Component

Accessible, animated menu for Versaur UI. Follows Material Design menu principles. Now uses a simple
API similar to Tooltip.

## Usage

````markdown
# Menu Component

Accessible, animated menu for Versaur UI. Follows Material Design menu principles with smart
positioning to prevent overlaps.

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
````

## Features

- Accessible, ARIA roles
- Focus management
- Animated open/close (slide/fade)
- Strictly typed props
- Tailwind styling
- Easy to extend for submenus
