# Drawer

A controlled sliding drawer overlay component that provides additional space for content. The Drawer follows the compound pattern with context for state management and supports multiple positioning options, sizes, and visual variants.

## Features

- **Controlled Component**: Requires `isOpen` and `onClose` for state management
- **Positioning**: Left or right slide-in positions
- **Multiple Sizes**: Small, medium, large, extra large, three-quarters, and full width
- **Glass Variant**: Backdrop blur effects with transparency on drawer content
- **Responsive Footer**: Automatic responsive behavior for footer buttons
- **Accessibility**: ARIA compliant with keyboard navigation
- **Overlay Control**: Configurable overlay click behavior
- **Compound Pattern**: Flexible composition with Header, Body, and Footer sections

## Usage

### Basic Usage

```tsx
import { useState } from 'react'
import { Drawer } from '@/components/drawer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        position="right" 
        size="md" 
        variant="default"
      >
        <Drawer.Header>
          <h2>Drawer Title</h2>
        </Drawer.Header>
        <Drawer.Body>
          <p>Drawer content goes here...</p>
        </Drawer.Body>
        <Drawer.Footer>
          <button>Save</button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
```


### Tabbed Content (Recommended)

For tabbed content inside a drawer, use the `Drawer.Tab` slot and the `Tabs` component for best accessibility and composition:

```tsx
import { useState } from 'react'
import { Drawer } from '@/components/drawer'
import { Tabs } from '@/navigation/tabs'

function TabbedDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState('details')

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Tab Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header hasTab>
          <h2>Tabbed Drawer</h2>
        </Drawer.Header>
        <Drawer.Tab>
          <Tabs value={tab} onValueChange={setTab}>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs>
        </Drawer.Tab>
        <Drawer.Body>
          {tab === 'details' && <div>Details content...</div>}
          {tab === 'settings' && <div>Settings content...</div>}
        </Drawer.Body>
      </Drawer>
    </>
  )
}
```

**Recommendation:** Always use the `Tabs` component inside `Drawer.Tab` for tabbed navigation. This ensures accessibility, keyboard navigation, and consistent styling.

### Glass Variant

```tsx
const [isOpen, setIsOpen] = useState(false)

<Drawer 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  variant="glass" 
  position="right" 
  size="lg"
>
  <Drawer.Header>
    <h2>Glass Effect</h2>
  </Drawer.Header>
  <Drawer.Body>
    <p>This drawer has a blur effect background on the content while the overlay remains dark for focus...</p>
  </Drawer.Body>
</Drawer>
```

## API Reference

### Drawer (Root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | **Required.** Whether the drawer is open |
| `onClose` | `() => void` | - | **Required.** Callback when drawer should close |
| `position` | `'left' \| 'right'` | `'right'` | Position where drawer slides in from |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '3/4' \| 'full'` | `'md'` | Size of the drawer |
| `variant` | `'default' \| 'glass'` | `'default'` | Visual variant - glass makes content transparent |
| `closeOnOverlayClick` | `boolean` | `true` | Whether clicking overlay closes drawer |
| `children` | `ReactNode` | - | Child components (Header, Body, Footer) |
### Drawer.Header

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Header content (titles, close buttons, etc.) |

### Drawer.Body

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Main drawer content (scrollable) |

### Drawer.Footer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Footer content (actions, buttons, etc.) |
| `responsiveFlex` | `boolean` | `true` | Enable responsive flex behavior for footer children |

### Responsive Footer Behavior

The `Drawer.Footer` includes intelligent responsive behavior by default:

- **Small screens**: Children stack vertically and expand to full width (`flex-grow`)
- **Large screens**: Children are horizontally aligned to the right and sized to content

This provides optimal button layout across different screen sizes while maintaining usability.

#### Custom Footer Layout

To disable responsive behavior and use custom layouts:

```tsx
<Drawer.Footer responsiveFlex={false}>
  <div className="flex justify-between w-full">
    <Button variant="ghost">Left Action</Button>
    <div className="flex gap-2">
      <Button variant="ghost">Cancel</Button>
      <Button>Save</Button>
    </div>
  </div>
</Drawer.Footer>
```

## Sizes

- **sm**: 320px (w-80) - Compact size for simple content
- **md**: 384px (w-96) - Default size for general use
- **lg**: 448px (w-[28rem]) - Larger size for detailed content
- **xl**: 512px (w-[32rem]) - Extra large for complex forms
- **3/4**: 75% of viewport width (w-[75vw]) - Ideal for dashboards and complex layouts
- **full**: 100% width (w-full) - Full screen experience

## Variants

- **default**: Solid white background with border
- **glass**: Translucent content background with backdrop blur effect. The overlay remains dark for focus, while the drawer content becomes glass-like for modern visual appeal.

## Accessibility

- Uses proper ARIA attributes (`role="dialog"`, `aria-modal="true"`)
- Supports keyboard navigation (Escape to close)
- Manages focus and scroll behavior
- Screen reader compatible
- Controlled component pattern ensures predictable state management

## Browser Support

Works in all modern browsers that support CSS backdrop-filter for the glass variant. Falls back gracefully in older browsers.
