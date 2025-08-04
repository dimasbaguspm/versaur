
# SideBar (Versaur UI)

A modern, accessible sidebar navigation component for React, built with TypeScript and Tailwind CSS. Supports compound composition, scrollable content, and icon integration.

## Usage

```tsx
import { SideBar } from 'versaur/src/layouts/side-bar'
import { Icon } from '@/primitive'
import { Home, Settings, Folder } from 'lucide-react'

<SideBar>
  <SideBar.Item href='/home' icon={<Icon as={Home} size='sm' />}>Home</SideBar.Item>
  <SideBar.Item selected href='/settings' icon={<Icon as={Settings} size='sm' />}>Settings</SideBar.Item>
  <SideBar.Group label='Projects'>
    <SideBar.Item href='/folder/abc' icon={<Icon as={Folder} size='sm' />}>abc</SideBar.Item>
    <SideBar.Item href='/folder/def' icon={<Icon as={Folder} size='sm' />}>def</SideBar.Item>
    <SideBar.Item href='/folder/xyz' icon={<Icon as={Folder} size='sm' />}>xyz</SideBar.Item>
  </SideBar.Group>
</SideBar>
```

## Features
- Compound pattern: `SideBar`, `SideBar.Item`, `SideBar.Group`
- Scrollable container with custom scrollbar
- Polymorphic item: renders `<a>` or `<button>` as needed
- Icon support via `icon` prop
- Accessible: semantic tags, ARIA labels, keyboard navigation
- Fully type-safe and tested

## Testing
- Uses Vitest and React Testing Library
- Storybook stories are used for test rendering
- Snapshot and accessibility assertions included

## Storybook
- See `side-bar.stories.tsx` for interactive examples and documentation

## API
- `SideBar`: root navigation container
- `SideBar.Item`: single navigation/action item
- `SideBar.Group`: labeled group of items

## Styling
- Uses Tailwind CSS and `cva` for variants
- Customizable via Tailwind and design tokens

## Accessibility
- Meets WCAG 2.1 AA standards
- Keyboard and screen reader friendly

---
For more details, see the main Versaur UI documentation.
