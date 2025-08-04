# Menu Component

Accessible, animated menu for Versaur UI. Follows Material Design menu principles. Now uses a simple API similar to Tooltip.

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

## Features

- Accessible, ARIA roles
- Focus management
- Animated open/close (slide/fade)
- Strictly typed props
- Tailwind styling
- Easy to extend for submenus
