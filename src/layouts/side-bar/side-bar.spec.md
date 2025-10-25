# SideBar Component Specification

## Overview

The SideBar component is a collapsible navigation sidebar for Versaur UI. It provides an accessible,
semantic navigation structure with support for hierarchical items, groups, and smooth
expand/collapse transitions.

## Component Pattern

**Compound Pattern with Context**: The SideBar uses a compound component pattern combined with React
Context to share collapse/expand state between the root component and its sub-components.

## Features

- **Collapsible State**: Uncontrolled expand/collapse with `defaultCollapsed` prop
- **2-Level Hierarchy**:
  - Level 1 items: Always visible, even when collapsed
  - Level 2 items: Nested items, hidden when collapsed
- **Enhanced Group Labels**: Groups can include icons and enhanced typography
- **Adaptive Icons**: Icons automatically scale larger when collapsed for better visibility
- **Toggle Button**: Built-in toggle button with chevron icons
- **Smooth Transitions**: All state changes are animated
- **Polymorphic Items**: Items can render as anchors or buttons
- **Scrollable**: Auto-scrolling for overflow content
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML

## API Reference

### SideBar (Root)

The root navigation container that manages collapse state.

```tsx
interface SideBarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  defaultCollapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
}
```

**Props:**

| Prop               | Type                           | Default | Description                                    |
| ------------------ | ------------------------------ | ------- | ---------------------------------------------- |
| `children`         | `ReactNode`                    | -       | Child components (SideBar.Item, SideBar.Group) |
| `defaultCollapsed` | `boolean`                      | `false` | Initial collapsed state                        |
| `onCollapseChange` | `(collapsed: boolean) => void` | -       | Callback when collapse state changes           |

**Dimensions:**

- Expanded: `w-56` (14rem / 224px)
- Collapsed: `w-16` (4rem / 64px)

### SideBar.Item

Individual navigation item, renders as `<a>` or `<button>`.

```tsx
type SideBarItemProps = SideBarItemBaseAsAnchor | SideBarItemBaseAsButton

interface SideBarItemBaseAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  icon?: ReactNode
  children: ReactNode
  onClick?: never
  href: string
  level?: 1 | 2
}

interface SideBarItemBaseAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: ReactNode
  children: ReactNode
  onClick?: () => void
  href?: never
  level?: 1 | 2
}
```

**Props:**

| Prop       | Type         | Default | Description                                               |
| ---------- | ------------ | ------- | --------------------------------------------------------- |
| `children` | `ReactNode`  | -       | Text label for the item                                   |
| `icon`     | `ReactNode`  | -       | Icon element (auto-sized based on collapsed state)        |
| `active`   | `boolean`    | `false` | Whether item is currently active/selected                 |
| `level`    | `1 \| 2`     | `1`     | Hierarchy level (1=always shown, 2=hidden when collapsed) |
| `href`     | `string`     | -       | URL (makes item render as anchor)                         |
| `onClick`  | `() => void` | -       | Click handler (makes item render as button)               |

**Behavior:**

- Level 1: Always visible, icons scale to larger size when collapsed
- Level 2: Hidden when collapsed, indented when expanded
- Collapsed state: Only icon shown, text hidden, tooltip added
- Expanded state: Icon + text shown

### SideBar.Group

Labeled group container for organizing related items.

```tsx
interface SideBarGroupProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode
  children: ReactNode
  icon?: ReactNode
}
```

**Props:**

| Prop       | Type        | Default | Description                                 |
| ---------- | ----------- | ------- | ------------------------------------------- |
| `label`    | `ReactNode` | -       | Group label text                            |
| `children` | `ReactNode` | -       | SideBar.Item components (typically level 2) |
| `icon`     | `ReactNode` | -       | Optional icon for the group label           |

**Behavior:**

- Collapsed state: Only icon shown (if provided)
- Expanded state: Icon + label shown, children visible
- Label styling: Uppercase, small, semibold, gray color

## Usage Examples

### Basic Sidebar

```tsx
import { SideBar } from 'versaur/layouts/side-bar'
import { Icon } from 'versaur/primitive'
import { Home, Settings } from 'lucide-react'

;<SideBar>
  <SideBar.Item href='/home' icon={<Icon as={Home} />}>
    Home
  </SideBar.Item>
  <SideBar.Item href='/settings' icon={<Icon as={Settings} />} active>
    Settings
  </SideBar.Item>
</SideBar>
```

### With Groups and 2-Level Items

```tsx
<SideBar defaultCollapsed={false}>
  {/* Level 1 items - always visible */}
  <SideBar.Item href='/dashboard' icon={<Icon as={Home} />} level={1}>
    Dashboard
  </SideBar.Item>

  {/* Group with level 2 items */}
  <SideBar.Group label='Projects' icon={<Icon as={Folder} />}>
    <SideBar.Item href='/projects/web' icon={<Icon as={FileCode} />} level={2}>
      Web App
    </SideBar.Item>
    <SideBar.Item href='/projects/mobile' icon={<Icon as={Smartphone} />} level={2}>
      Mobile App
    </SideBar.Item>
  </SideBar.Group>
</SideBar>
```

### Controlled Collapse Callback

```tsx
const [isCollapsed, setIsCollapsed] = useState(false)

<SideBar
  defaultCollapsed={false}
  onCollapseChange={(collapsed) => {
    setIsCollapsed(collapsed)
    console.log('Sidebar collapsed:', collapsed)
  }}
>
  {/* items */}
</SideBar>
```

### Button Items (Interactive)

```tsx
<SideBar>
  <SideBar.Item onClick={() => alert('Clicked!')} icon={<Icon as={Bell} />}>
    Notifications
  </SideBar.Item>
</SideBar>
```

## Styling & Theming

The SideBar uses CVA (class-variance-authority) for variant management and Tailwind CSS for styling.

### CSS Classes

**Root Container:**

- Base: `bg-background border-r border-border flex flex-col my-2 transition-all duration-300`
- Collapsed: `w-16`
- Expanded: `w-56`

**Items:**

- Base:
  `flex items-center gap-2 rounded-md hover:text-primary focus:outline-none transition-all duration-200`
- Collapsed: `px-3 py-3 justify-center`
- Expanded: `px-4 py-2`
- Active: `bg-primary/10 text-primary`
- Level 2 (expanded): `pl-8`
- Level 2 (collapsed): `hidden`

**Icons:**

- Collapsed: `w-5 h-5` (20px)
- Expanded: `w-4 h-4` (16px)

**Group Labels:**

- Base: `uppercase tracking-wider`
- Font: `xs`, `semibold`
- Color: `gray`

### Color Tokens

Uses design system tokens from `assets/styles.css`:

- Background: `var(--color-background)`
- Border: `var(--color-border)`
- Primary: `var(--color-primary)`
- Text: `var(--color-ghost)`, `var(--color-foreground)`

## Accessibility

### ARIA Attributes

- Root `<nav>` has `aria-label="Sidebar"`
- Toggle button has dynamic `aria-label` (Expand/Collapse sidebar)
- Collapsed items have `title` attribute with full text

### Keyboard Navigation

- All items are keyboard focusable
- Tab/Shift+Tab: Navigate between items
- Enter/Space: Activate focused item
- Escape: (Inherited from browser link/button behavior)

### Screen Reader Support

- Semantic HTML: `<nav>`, `<ul>`, `<li>`, `<a>`, `<button>`
- Text alternatives via `title` when collapsed
- Clear focus indicators

### WCAG 2.1 AA Compliance

- ✅ Sufficient color contrast (4.5:1 for text, 3:1 for interactive)
- ✅ Focus indicators visible and clear
- ✅ Interactive elements have accessible names
- ✅ Keyboard navigable
- ✅ Responsive and adaptable layout

## State Management

The SideBar uses **uncontrolled state** with an optional callback:

```tsx
const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

const toggleCollapsed = () => {
  const newState = !isCollapsed
  setIsCollapsed(newState)
  onCollapseChange?.(newState)
}
```

State is shared via React Context to all sub-components.

## Context API

```tsx
interface SideBarContextValue {
  isCollapsed: boolean
  toggleCollapsed: () => void
}

const SideBarContext = createContext<SideBarContextValue | null>(null)

// Hook for accessing context (internal use)
const useSideBarContext = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('SideBar compound components must be used within SideBar')
  }
  return context
}
```

## Testing

### Unit Tests

Located in `__tests__/side-bar.test.tsx`. Tests include:

- Rendering and snapshot matching
- Collapsed/expanded state toggling
- Level 1 vs Level 2 item visibility
- Accessibility structure (nav, lists, ARIA)
- Icon size changes
- Group label visibility

### Storybook Stories

Located in `side-bar.stories.tsx`. Stories demonstrate:

- Default expanded state
- Default collapsed state
- Mixed level 1 and level 2 items
- Groups with icons
- Interactive toggle
- Long scrollable content

### Test Approach

Uses Vitest + React Testing Library with `composeStories`:

```tsx
import { composeStories } from '@storybook/react'
import * as stories from '../side-bar.stories'

const { Default, Collapsed } = composeStories(stories)

it('renders correctly', () => {
  const { asFragment } = render(<Default />)
  expect(asFragment()).toMatchSnapshot()
})
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- Transition/animation support recommended

## Performance Considerations

- Smooth transitions (300ms duration)
- Minimal re-renders via React Context
- Icons cloned only when state changes
- Scrollbar only appears when needed
- Tree-shakable exports

## Migration Guide

### From v1 to v2 (Collapsible)

**Before:**

```tsx
<SideBar>
  <SideBar.Item icon={...}>Item</SideBar.Item>
</SideBar>
```

**After:**

```tsx
// No breaking changes - works the same
// New: Add defaultCollapsed for collapsed initial state
<SideBar defaultCollapsed={false}>
  <SideBar.Item icon={...} level={1}>Item</SideBar.Item>
</SideBar>
```

**New Features:**

- Add `defaultCollapsed` prop to start collapsed
- Add `level` prop to items (1 or 2) for hierarchy
- Add `icon` prop to groups
- Use `onCollapseChange` for collapse events

## File Structure

```
side-bar/
├── context.ts              # Context and hook for state sharing
├── helpers.ts              # CVA variants and style classes
├── index.ts                # Barrel exports
├── side-bar.atoms.tsx      # SideBar.Item and SideBar.Group
├── side-bar.spec.md        # This specification
├── side-bar.stories.tsx    # Storybook stories
├── side-bar.tsx            # Root component
├── types.ts                # TypeScript interfaces
└── __tests__/
    └── side-bar.test.tsx   # Unit tests
```

## Dependencies

- React 19+
- TypeScript
- Tailwind CSS v4
- class-variance-authority (CVA)
- lucide-react (icons in stories/examples)

## Related Components

- `Icon` - Used for rendering icons
- `Text` - Used for text labels and group headings
- `Button` - Similar polymorphic pattern
- `Drawer` - Similar collapsible behavior

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Navigation Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/navigation/)
- [Compound Component Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks)

---

**Last Updated:** October 25, 2025  
**Component Version:** 2.0.0  
**Versaur UI Library**
