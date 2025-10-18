# Drawer Component Specification

## Overview

The Drawer is a controlled sliding overlay component that provides additional space for content. It
uses the **Compound Pattern with Context** for state management and composition flexibility. The
component uses semantic HTML elements (`<header>`, `<main>`, `<footer>`) and implements
comprehensive ARIA attributes for accessibility.

## Architecture

### Component Pattern

**Compound Pattern with Context**

- Parent component (`DrawerRoot`) manages state and provides context
- Sub-components (`Header`, `Body`, `Footer`, `Tab`, `Title`, `CloseButton`) consume context
- Flexible composition while maintaining coordinated behavior
- Shared ARIA IDs for proper labeling relationships

### File Structure

```
drawer/
  drawer.tsx              # Main compound component with DrawerRoot
  drawer.atoms.tsx        # Sub-components (Header, Body, Footer, etc.)
  context.ts             # Context provider and hook
  types.ts               # TypeScript interfaces and types
  helpers.ts             # CVA variants and styling utilities
  drawer.stories.tsx     # Storybook stories
  drawer.spec.md         # This specification document
  __tests__/
    drawer.test.tsx           # Integration tests
    drawer.atoms.test.tsx     # Unit tests for sub-components
```

## Component API

### Drawer (Root)

Main component that provides the drawer container and manages state.

#### Props

```typescript
interface DrawerProps {
  // Required props
  isOpen: boolean                    // Whether the drawer is open
  onClose: () => void                // Callback when drawer should close
  children: ReactNode                // Drawer content

  // Optional positioning & sizing
  position?: 'left' | 'right'        // Slide position (default: 'right')
  size?: 'sm' | 'md' | 'lg' | 'xl' | '3/4' | 'full'  // Width (default: 'md')

  // Optional styling
  transitionType?: 'slide' | 'fade'  // Animation type (default: 'slide')

  // Optional behavior
  disableOverlayClickToClose?: boolean  // Disable closing on overlay click
  disableEscapeKeyDown?: boolean     // Disable closing on Escape key

  // Portal configuration
  container?: HTMLElement            // Portal container element

  // Standard HTML div props
  className?: string
  ...rest: ComponentPropsWithoutRef<'div'>
}
```

#### Size Specifications

| Size   | Width | Use Case                               |
| ------ | ----- | -------------------------------------- |
| `sm`   | 320px | Compact forms, quick actions           |
| `md`   | 384px | Standard forms, settings               |
| `lg`   | 448px | Detailed content, longer forms         |
| `xl`   | 512px | Rich content, complex layouts          |
| `3/4`  | 75vw  | Dashboards, editing interfaces         |
| `full` | 100vw | Full-screen experiences, presentations |

### Drawer.Header

Header section using semantic `<header>` element.

#### Props

```typescript
interface DrawerHeaderProps extends ComponentPropsWithoutRef<'header'> {
  children: ReactNode
  hasTab?: boolean // Adjusts padding when tabs are present
}
```

### Drawer.Title

Title element that automatically connects to ARIA labeling.

#### Props

```typescript
type DrawerTitleProps = TextProps // Inherits from Text component
```

#### Behavior

- Automatically receives `id` from context for `aria-labelledby`
- Rendered as `<h3>` with `fontSize='lg'` by default
- Can be customized using Text component props

### Drawer.CloseButton

Close button with proper ARIA labeling.

#### Props

```typescript
type DrawerCloseButtonProps = Partial<ButtonIconProps>
```

#### Behavior

- Always has `aria-label="Close drawer"`
- Uses `XIcon` from lucide-react
- Calls `onClose` from context when clicked
- Default variant: `ghost`, size: `sm`

### Drawer.Tab

Container for tabbed navigation within the header.

#### Props

```typescript
interface DrawerHeaderTabProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
```

#### Usage

```tsx
<Drawer.Header hasTab>
  <Drawer.Title>Title</Drawer.Title>
  <Drawer.CloseButton />
</Drawer.Header>
<Drawer.Tab>
  <Tabs>...</Tabs>
</Drawer.Tab>
```

### Drawer.Body

Main content area using semantic `<main>` element.

#### Props

```typescript
interface DrawerBodyProps extends ComponentPropsWithoutRef<'main'> {
  children: ReactNode
}
```

#### Behavior

- Automatically receives `id` from context for `aria-describedby`
- Scrollable when content exceeds viewport
- Padding: `px-6 py-4`

### Drawer.Footer

Footer section using semantic `<footer>` element.

#### Props

```typescript
interface DrawerFooterProps extends ComponentPropsWithoutRef<'footer'> {
  children: ReactNode
}
```

#### Behavior

- Border top for visual separation
- Padding: `px-6 py-4`
- Typically contains action buttons

## Accessibility

### ARIA Attributes

The Drawer implements comprehensive ARIA attributes automatically:

| Attribute            | Element | Value/Purpose                         |
| -------------------- | ------- | ------------------------------------- |
| `role="dialog"`      | Root    | Identifies as dialog                  |
| `aria-modal="true"`  | Root    | Indicates modal behavior              |
| `aria-labelledby`    | Root    | References Title ID                   |
| `aria-describedby`   | Root    | References Body ID                    |
| `aria-hidden`        | Root    | `false` when open, `true` when closed |
| `aria-hidden="true"` | Overlay | Hides overlay from screen readers     |
| `aria-label`         | Close   | "Close drawer" for close button       |
| `id`                 | Title   | Auto-generated for aria-labelledby    |
| `id`                 | Body    | Auto-generated for aria-describedby   |

### Keyboard Navigation

| Key         | Action                     |
| ----------- | -------------------------- |
| `Escape`    | Closes drawer (if enabled) |
| `Tab`       | Moves focus within drawer  |
| `Shift+Tab` | Moves focus backward       |

### Focus Management

- Focus moves to drawer when opened (via `tabIndex={-1}` on dialog)
- Focus returns to trigger when closed (managed by consumer)
- Focus trap within drawer (via `useEscapeClose` hook)

### Screen Reader Support

- Semantic HTML provides clear content structure
- ARIA relationships ensure proper announcements
- Dialog role announces when drawer opens
- Title is announced via `aria-labelledby`
- Body content is associated via `aria-describedby`

## Transitions

### Slide Transition (Default)

Drawer slides in from the specified position.

```tsx
<Drawer transitionType='slide' position='right'>
  {/* Content */}
</Drawer>
```

**Animation:**

- Duration: `300ms`
- Easing: `ease-in-out`
- Transform: `translate-x-full` → `translate-x-0`

### Fade Transition

Drawer fades in/out in place.

```tsx
<Drawer transitionType='fade'>{/* Content */}</Drawer>
```

**Animation:**

- Duration: `300ms`
- Easing: `ease-in-out`
- Opacity: `0` → `1`

## Usage Examples

### Basic Usage

```tsx
import { useState } from 'react'
import { Drawer } from '@/overlays/drawer'
import { Button } from '@/primitive/button'

function Example() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Settings</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <p>Drawer content goes here</p>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
```

### With Tabs

```tsx
import { Drawer } from '@/overlays/drawer'
import { Tabs } from '@/navigation/tabs'

function TabbedDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState('general')

  return (
    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Drawer.Header hasTab>
        <Drawer.Title>Settings</Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Tab>
        <Tabs value={tab} onValueChange={setTab}>
          <Tabs.Trigger value='general'>General</Tabs.Trigger>
          <Tabs.Trigger value='privacy'>Privacy</Tabs.Trigger>
        </Tabs>
      </Drawer.Tab>
      <Drawer.Body>
        {tab === 'general' && <div>General settings</div>}
        {tab === 'privacy' && <div>Privacy settings</div>}
      </Drawer.Body>
    </Drawer>
  )
}
```

### Left Position

```tsx
<Drawer position='left' size='md' isOpen={isOpen} onClose={handleClose}>
  <Drawer.Header>
    <Drawer.Title>Navigation</Drawer.Title>
    <Drawer.CloseButton />
  </Drawer.Header>
  <Drawer.Body>{/* Navigation items */}</Drawer.Body>
</Drawer>
```

### Disable Close on Overlay Click

```tsx
<Drawer isOpen={isOpen} onClose={handleClose} disableOverlayClickToClose>
  {/* Content that requires explicit close action */}
</Drawer>
```

## Browser Support

### Required Features

- CSS `backdrop-filter` for blur effects (overlay)
- Portal rendering (React 18+)
- CSS custom properties for theming

### Graceful Degradation

- `backdrop-filter` fallback: Solid backgrounds
- No JavaScript: Drawer remains hidden

## Performance Considerations

### Rendering

- Drawer content is always in DOM (for ARIA attributes)
- Visibility controlled via CSS transforms and opacity
- Consider code splitting for heavy drawer content

### Portal

- Renders outside main React tree via `OverlayPortal`
- Avoids z-index stacking context issues
- Optional custom container for testing/isolation

### Animation

- Hardware-accelerated transforms (`translate`)
- Optimized for 60fps
- Smooth transitions on modern devices

## Testing

### Unit Tests

Located in `__tests__/drawer.atoms.test.tsx`:

- Component rendering
- Semantic HTML elements
- ARIA attributes
- Variant classes
- Context integration

### Integration Tests

Located in `__tests__/drawer.test.tsx`:

- User interactions (open, close, overlay click)
- Keyboard navigation (Escape key)
- ARIA relationships
- Accessibility features
- Story compositions

### Testing Best Practices

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './drawer.stories'

const { Default } = composeStories(stories)

test('opens and closes drawer', () => {
  render(<Default />)

  // Open drawer
  fireEvent.click(screen.getByText('Open Drawer'))
  const dialog = screen.getByRole('dialog')
  expect(dialog).toHaveAttribute('aria-hidden', 'false')

  // Close drawer
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(dialog).toHaveAttribute('aria-hidden', 'true')
})
```

## Design Decisions

### Why Compound Pattern?

- Flexible composition for different layouts
- Clear semantic relationships
- Shared state via context
- Tree-shakable exports

### Why Semantic HTML?

- Better accessibility by default
- Clear content structure for screen readers
- SEO benefits when server-rendered
- Aligns with browser standards

### Why Portal?

- Avoids z-index stacking issues
- Renders at document root level
- Consistent layering across app
- Easier styling and positioning

## Migration Guide

### From Previous Version

If upgrading from a previous drawer implementation:

1. **Update element types**: Components now use semantic elements

   ```tsx
   // Before: div elements
   // After: header, main, footer elements
   ```

2. **ARIA attributes**: Now automatic, remove manual IDs

   ```tsx
   // Before: <header id="drawer-title">
   // After: <Drawer.Title> (ID auto-generated)
   ```

3. **Update tests**: Check for semantic elements

   ```tsx
   // Before: getByTestId('drawer-header')
   // After: container.querySelector('header')
   ```

4. **Stories**: Update story names if using removed stories
   ```tsx
   // Removed: ThreeQuartersWidth, FullWidth, Fade (slide only)
   // Use size props: size="3/4", size="full"
   ```

## Related Components

- **Modal**: Center-positioned dialog overlay
- **BottomSheet**: Mobile-optimized bottom drawer
- **Tooltip**: Small contextual overlay
- **Menu**: Dropdown menu overlay

## References

- [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [MDN: `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [React Portal Documentation](https://react.dev/reference/react-dom/createPortal)
