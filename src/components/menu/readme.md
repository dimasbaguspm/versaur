# Menu Component

Compound + Context pattern menu for Versaur UI. Follows Material Design menu principles.

## Usage

```tsx
import { useState } from 'react'
import { Menu } from '@/components/menu'

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu isOpen={isOpen} onOutsideClick={() => setIsOpen(false)}>
      <Menu.Trigger onClick={() => setIsOpen(o => !o)}>Open Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
```

## Features

- Accessible, ARIA roles
- Focus management
- Viewport-based positioning (basic)
- Strictly typed props
- Tailwind styling
- Easy to extend for submenus
