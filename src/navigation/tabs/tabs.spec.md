# Tabs Component Specification

## Overview

The Tabs component provides a semantic, accessible navigation pattern following WCAG 2.1 AA
standards and browser-native HTML structure. It uses the compound pattern with context for state
management.

## Design Philosophy

- **Semantic HTML First**: Uses `nav > ul > li > a` structure for proper navigation semantics
- **Primary Color Only**: Simplified to use only the primary color for consistency
- **Underline Style**: Single, consistent underline variant for all use cases
- **Browser Standards**: Aligns with native HTML behavior and accessibility patterns
- **Focus Ring Visibility**: Proper overflow handling ensures focus rings are never cropped

## Component Structure

### Compound Pattern

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
  <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
  <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
</Tabs>
```

### HTML Output

````html
```html
<nav class="relative" aria-label="Tabs">
  <div class="relative overflow-hidden">
    <ul
      role="tablist"
      class="flex flex-row w-full border-b border-border overflow-x-auto overflow-y-visible whitespace-nowrap py-1"
    >
      <li role="presentation">
        <a
          role="tab"
          id="tabs-trigger-tab1"
          aria-selected="true"
          aria-controls="tabs-content-tab1"
          aria-current="page"
          href="#tab1"
          class="..."
        >
          Tab 1
        </a>
      </li>
      <li role="presentation">
        <a
          role="tab"
          id="tabs-trigger-tab2"
          aria-selected="false"
          aria-controls="tabs-content-tab2"
          href="#tab2"
          class="..."
        >
          Tab 2
        </a>
      </li>
      <!-- ... more tabs -->
    </ul>
    <div
      aria-hidden="true"
      class="absolute bottom-0 h-0.5 rounded bg-primary transition-all duration-300"
      style="left: 0; width: 100px;"
    ></div>
  </div>
</nav>
````

````

## API Reference

### Tabs (Root)

The root component that wraps all tabs and manages shared state.

**Type**: `TabsRootProps extends HTMLAttributes<HTMLElement>`

| Property        | Type                    | Required | Default | Description                                |
| --------------- | ----------------------- | -------- | ------- | ------------------------------------------ |
| `value`         | `string`                | Yes      | -       | Currently active tab value (controlled)    |
| `onValueChange` | `(tab: string) => void` | Yes      | -       | Callback fired when tab changes            |
| `children`      | `ReactNode`             | Yes      | -       | Tab triggers (Tabs.Trigger components)     |
| `className`     | `string`                | No       | -       | Additional CSS classes for the nav element |

**Renders as**: `<nav>` element

### Tabs.Trigger

Individual tab link component.

**Type**: `TabsTriggerProps extends AnchorHTMLAttributes<HTMLAnchorElement>`

| Property    | Type                                               | Required | Default | Description                                   |
| ----------- | -------------------------------------------------- | -------- | ------- | --------------------------------------------- |
| `value`     | `string`                                           | Yes      | -       | Unique identifier for this tab                |
| `children`  | `ReactNode`                                        | Yes      | -       | Tab label content                             |
| `className` | `string`                                           | No       | -       | Additional CSS classes for the anchor element |
| `onClick`   | `(e: React.MouseEvent<HTMLAnchorElement>) => void` | No       | -       | Additional click handler                      |

**Renders as**: `<li role="presentation"><a role="tab">` structure

## Behavior

### State Management

- **Controlled Component**: Requires `value` and `onValueChange` props
- **Context Pattern**: State is shared via React Context to all Tabs.Trigger components
- **Single Active Tab**: Only one tab can be active at a time

### Tab Switching

1. User clicks a tab trigger
2. Click event is prevented (no page navigation)
3. `onValueChange` callback is fired with the new tab value
4. Parent component updates the `value` prop
5. Active tab styling updates automatically
6. Animated indicator moves to the new active tab

### Scroll Behavior

- **Horizontal Overflow**: Container scrolls horizontally when tabs exceed width
- **Auto-scroll**: Active tab automatically scrolls into view (smooth behavior)
- **Focus Preservation**: Focus rings remain visible with `overflow-y-visible`

### Indicator Animation

- **Smooth Transition**: 300ms ease transition on position and width changes
- **Instant Update**: Uses `requestAnimationFrame` for immediate visual feedback without delay
- **Position Calculation**: Calculates position using `offsetLeft - scrollLeft` to account for horizontal scrolling
- **Scroll Sync**: Listens to scroll events to keep indicator aligned with visible tabs
- **Clipped Display**: Wrapper has `overflow-hidden` to prevent indicator from extending beyond container
- **Responsive**: Automatically adjusts when container is resized or scrolled

## Accessibility

### WCAG 2.1 AA Compliance

- **Role Attributes**: Proper `role="tablist"`, `role="tab"`, `role="presentation"`
- **ARIA Labels**: `aria-label="Tabs"` on nav, `aria-selected` on tabs
- **ARIA Controls**: `aria-controls` links tab to content panel
- **ARIA Hidden**: Indicator marked as `aria-hidden="true"`

### Keyboard Navigation

- **Tab Key**: All tabs are accessible via Tab key (natural anchor behavior)
- **Click/Enter**: Activates the focused tab
- **Arrow Keys**: Use browser's natural link navigation
- **Focus Management**: All tabs are in the natural tab order (no tabIndex manipulation)
- **Active Indication**: Active tab marked with `aria-current="page"` for screen readers

### Focus Indicators

- **Visible Rings**: `focus-visible:ring-2` with primary color
- **No Cropping**: Container uses `overflow-y-visible` and `pb-px` to prevent cropping
- **High Contrast**: Primary color ring meets 3:1 contrast ratio
- **Z-Index**: Focused tab elevated with `z-10` to ensure ring visibility

### Screen Reader Support

- **Semantic Structure**: nav > ul > li > a is recognized by all screen readers
- **Navigation Landmark**: `<nav>` element creates a navigation landmark
- **List Context**: Screen readers announce number of tabs in list
- **Selection State**: `aria-selected` announces active/inactive state
- **Link Context**: Anchor elements are naturally navigable

## Styling

### Variants

**Note**: This component only supports a single variant:

- **Color**: Primary (no color prop)
- **Style**: Underline (no variant prop)

### Classes

#### Wrapper (div)

- `relative`: Positioning context for absolute indicator
- `overflow-hidden`: Clips indicator to prevent overflow beyond container width

#### Container (ul[role="tablist"])

- `flex flex-row w-full`: Horizontal layout, full width
- `border-b border-border`: Bottom border for underline effect
- `overflow-x-auto overflow-y-visible`: Horizontal scroll, visible focus rings
- `whitespace-nowrap`: Prevents text wrapping
- `py-1`: Vertical padding (4px top/bottom) to prevent focus ring cropping with offset

#### Tab Trigger (a[role="tab"])

- `inline-flex items-center justify-center`: Flexbox alignment
- `px-4 py-2`: Comfortable padding
- `text-sm font-normal`: Base typography (changes to `font-medium` when active)
- `text-foreground`: Default text color
- `text-primary`: Active tab color
- `hover:text-primary`: Hover state for inactive tabs
- `border-b-2 border-transparent`: Border space for alignment
- `transition-all duration-200`: Smooth color transitions
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`:
  Focus styles
- `focus-visible:z-10`: Ensure ring is above other elements
- `disabled:opacity-50 disabled:pointer-events-none`: Disabled state

#### Indicator

- `absolute bottom-0`: Positioned at bottom of container
- `h-0.5 rounded`: 2px height, rounded ends
- `bg-primary`: Primary color
- `transition-all duration-300`: Smooth position/width animation
- `pointer-events-none`: Doesn't interfere with clicks

### Responsive Design

- **Mobile-First**: Container scrolls horizontally on small screens
- **Container Queries**: Not applicable (linear horizontal layout)
- **Touch-Friendly**: 16px minimum tap target (met by py-2 + text-sm)

## Usage Examples

### Basic Usage

```tsx
import { useState } from 'react'
import { Tabs } from '@versaur/ui'

function MyTabs() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.Trigger value='home'>Home</Tabs.Trigger>
        <Tabs.Trigger value='about'>About</Tabs.Trigger>
        <Tabs.Trigger value='contact'>Contact</Tabs.Trigger>
      </Tabs>
      <div className='mt-4'>
        {activeTab === 'home' && <div>Home content</div>}
        {activeTab === 'about' && <div>About content</div>}
        {activeTab === 'contact' && <div>Contact content</div>}
      </div>
    </>
  )
}
````

### With Content Panels

```tsx
function TabsWithPanels() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.Trigger value='profile'>Profile</Tabs.Trigger>
        <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
        <Tabs.Trigger value='notifications'>Notifications</Tabs.Trigger>
      </Tabs>

      <div
        role='tabpanel'
        id='tabs-content-profile'
        aria-labelledby='tabs-trigger-profile'
        hidden={activeTab !== 'profile'}
        className='p-4'
      >
        Profile content
      </div>

      <div
        role='tabpanel'
        id='tabs-content-settings'
        aria-labelledby='tabs-trigger-settings'
        hidden={activeTab !== 'settings'}
        className='p-4'
      >
        Settings content
      </div>

      <div
        role='tabpanel'
        id='tabs-content-notifications'
        aria-labelledby='tabs-trigger-notifications'
        hidden={activeTab !== 'notifications'}
        className='p-4'
      >
        Notifications content
      </div>
    </div>
  )
}
```

### Dynamic Tabs

```tsx
function DynamicTabs() {
  const [activeTab, setActiveTab] = useState('1')
  const tabs = [
    { id: '1', label: 'First', content: 'First tab content' },
    { id: '2', label: 'Second', content: 'Second tab content' },
    { id: '3', label: 'Third', content: 'Third tab content' },
  ]

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {tabs.map(tab => (
          <Tabs.Trigger key={tab.id} value={tab.id}>
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs>
      <div className='mt-4'>{tabs.find(t => t.id === activeTab)?.content}</div>
    </>
  )
}
```

### With Router Integration

```tsx
import { useSearchParams } from 'react-router-dom'

function RouterTabs() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') || 'overview'

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab })
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
      <Tabs.Trigger value='details'>Details</Tabs.Trigger>
      <Tabs.Trigger value='history'>History</Tabs.Trigger>
    </Tabs>
  )
}
```

### Constrained Width Container

```tsx
function ConstrainedTabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className='max-w-md'>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
        <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
        <Tabs.Trigger value='tab3'>Tab 3</Tabs.Trigger>
        <Tabs.Trigger value='tab4'>Tab 4</Tabs.Trigger>
        <Tabs.Trigger value='tab5'>Tab 5</Tabs.Trigger>
        <Tabs.Trigger value='tab6'>Tab 6</Tabs.Trigger>
      </Tabs>
    </div>
  )
}
// Tabs will automatically scroll horizontally
```

## Testing

### Unit Test Coverage

- ✅ Semantic HTML structure (nav > ul > li > a)
- ✅ Tab switching on click
- ✅ Controlled state management
- ✅ ARIA attributes (role, aria-selected, tabIndex)
- ✅ Indicator rendering and positioning
- ✅ Primary color styling
- ✅ Focus ring visibility (overflow-y-visible)
- ✅ Snapshot testing

### Accessibility Testing

- ✅ Screen reader compatibility (NVDA, JAWS, VoiceOver)
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Color contrast (WCAG AA)
- ✅ Touch target size (minimum 44x44px)

### Browser Testing

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Implementation Details

### Context Pattern

The Tabs component uses React Context to share state between root and triggers:

```tsx
interface TabsContextValue {
  activeTab: string
  setActiveTab: (tab: string) => void
}
```

This allows:

- Triggers to access active state without prop drilling
- Simple API for consumers
- Type-safe context usage with custom hook

### Hook: useTabIndicator

The `useTabIndicator` hook manages indicator positioning:

```tsx
export function useTabIndicator(value: string, containerRef: React.RefObject<HTMLUListElement>) {
  // Returns { left: number, width: number }
}
```

**Features**:

- Uses `useLayoutEffect` to prevent flicker
- Calculates position using `offsetLeft - scrollLeft` for scroll-aware positioning
- Listens to scroll events to keep indicator synced during horizontal scroll
- Uses `requestAnimationFrame` for immediate positioning without artificial delays
- Auto-scrolls active tab into view with smooth behavior
- Cleans up event listeners and animation frames on unmount

### Performance Considerations

- **Layout Effect**: Positioning calculated before paint to avoid flicker
- **Minimal Re-renders**: Only triggers re-render on tab change
- **CSS Transitions**: Smooth animations handled by CSS, not JS
- **Scroll Throttling**: Browser handles scroll events efficiently

## Migration Guide

### From Previous Version

**Breaking Changes**:

1. Removed `color` prop (now always primary)
2. Removed `variant` prop (now always underline)
3. Changed from `<button>` to `<a>` for semantic HTML
4. Tab triggers now render `<li><a>` instead of `<button>`

**Before**:

```tsx
<Tabs value={tab} onValueChange={setTab} color='secondary' variant='filled'>
  <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
</Tabs>
```

**After**:

```tsx
<Tabs value={tab} onValueChange={setTab}>
  <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
</Tabs>
```

### CSS Class Changes

- Container now uses `<ul>` instead of `<div>`
- Triggers now use `<a>` instead of `<button>`
- Removed filled variant classes
- Simplified color classes to primary only

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Legacy**: Gracefully degrades in older browsers (no focus-visible)

## References

- [WAI-ARIA Authoring Practices: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Material Design: Tabs](https://m3.material.io/components/tabs/guidelines)
- [MDN: HTML nav element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [MDN: ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [WCAG 2.1 AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
