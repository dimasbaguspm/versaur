# AppLayout Component Specification

## Overview

`AppLayout` is a high-level compound layout component that provides a structured shell for
application-level UI. It uses CSS Grid with named grid areas to define regions for organizing the
major sections of an application interface.

The layout is constrained to viewport height (`h-screen`) with overflow hidden at the root level,
ensuring scrolling is scoped only to the main region rather than the entire document.

## Component Type

**Compound Pattern** - Uses the compound component pattern for flexible composition. Each region
component positions itself using CSS `grid-area`, making the layout declarative and predictable.

## Scrolling Behavior

**Only the MainRegion is scrollable, and scrolling is scoped to that region only.** The layout uses:

- Root container: `h-screen` + `overflow-hidden` to prevent document-level scrolling
- Main region: `overflow-y-auto` + `min-h-0` to enable scrolling within the grid area

This ensures:

- Top navigation stays visible and accessible (sticky)
- Sidebars remain persistent and visible in their fixed positions
- Only the main content area scrolls within its grid area
- No document-level scrolling occurs
- Content inside sidebars can implement their own scroll containers if needed

## Regions

The `AppLayout` component provides five distinct regions:

### 1. TopRegion

- **Purpose**: Application header, navigation bar
- **Position**: Top of the viewport, spans full width
- **Behavior**: Sticky positioning (`sticky top-0`)
- **Semantic**: Rendered as `<div>` (contains header elements)
- **Grid Area**: `top`
- **Z-index**: `z-30` (above other regions)
- **Scrollable**: No

### 2. SideLeftRegion

- **Purpose**: Left sidebar navigation, filters, or secondary menu
- **Position**: Left column, between top and bottom regions
- **Behavior**: Fixed in position (does not scroll with main content)
- **Semantic**: Rendered as `<aside>`
- **Grid Area**: `left`
- **Z-index**: `z-20`
- **Styling**: Right border separator
- **Scrollable**: No (content inside can add its own scroll container if needed)

### 3. SideRightRegion

- **Purpose**: Right sidebar for auxiliary content, activity feed, or contextual info
- **Position**: Right column, between top and bottom regions
- **Behavior**: Fixed in position (does not scroll with main content)
- **Semantic**: Rendered as `<aside>`
- **Grid Area**: `right`
- **Z-index**: `z-20`
- **Styling**: Left border separator
- **Scrollable**: No (content inside can add its own scroll container if needed)

### 4. BottomRegion

- **Purpose**: Application footer, bottom navigation, or global actions
- **Position**: Bottom of the viewport, spans full width
- **Behavior**: Fixed at bottom
- **Semantic**: Rendered as `<div>` (contains footer elements)
- **Grid Area**: `bottom`
- **Z-index**: `z-30`
- **Styling**: Top border separator
- **Scrollable**: No

### 5. MainRegion

- **Purpose**: Primary application content
- **Position**: Center column, between top and bottom, takes remaining space
- **Behavior**: **Scrollable** - the only region that scrolls
- **Semantic**: Rendered as `<main>`
- **Grid Area**: `main`
- **Styling**: `overflow-y-auto h-full`
- **Scrollable**: **Yes** - this is the primary scroll container

## Grid Layout Structure

The component uses a 3-column, 3-row CSS Grid with named grid areas:

```
Grid Template Areas:
┌─────────────────────────────────────────┐
│        top     top     top              │
├──────────┬────────────────┬─────────────┤
│          │                │             │
│  left    │     main       │    right    │
│          │  (scrollable)  │             │
│  (fixed) │  (scoped)      │  (fixed)    │
├──────────┴────────────────┴─────────────┤
│      bottom  bottom  bottom             │
└─────────────────────────────────────────┘
```

**Root Container:**

- Height: `h-screen` (viewport height)
- Overflow: `overflow-hidden` (prevents document scrolling)
- Rows: `grid-rows-[auto_1fr_auto]` - top/bottom auto-sized, middle fills space
- Columns: `grid-cols-[auto_1fr_auto]` - sidebars auto-sized, center fills space
- Template Areas: `"top top top" "left main right" "bottom bottom bottom"`

**Region Positioning:**

Each region component uses `grid-area` to position itself:

- TopRegion: `grid-area: top` - sticky at top
- SideLeftRegion: `grid-area: left` - fixed, no scroll
- MainRegion: `grid-area: main` - **scrollable with `overflow-y-auto` and `min-h-0`**
- SideRightRegion: `grid-area: right` - fixed, no scroll
- BottomRegion: `grid-area: bottom` - fixed at bottom

**Critical CSS Properties:**

- Root: `h-screen overflow-hidden` prevents document-level scroll
- Main: `min-h-0` allows overflow to work properly within CSS Grid (overrides implicit
  `min-height: auto`)

## Props

### AppLayoutProps

Base props for the root layout container.

```typescript
export type AppLayoutProps = HTMLAttributes<HTMLDivElement>
```

### Region Props

All regions extend `HTMLAttributes<HTMLDivElement>` with an optional `className` prop:

- `AppLayoutTopRegionProps`
- `AppLayoutSideLeftRegionProps`
- `AppLayoutSideRightRegionProps`
- `AppLayoutBottomRegionProps`
- `AppLayoutMainRegionProps`

## Usage Examples

### Full Layout

```tsx
<AppLayout>
  <AppLayout.TopRegion>
    <TopBar>...</TopBar>
  </AppLayout.TopRegion>
  <AppLayout.SideLeftRegion>
    <SideBar>...</SideBar>
  </AppLayout.SideLeftRegion>
  <AppLayout.MainRegion>
    <PageContent>...</PageContent>
  </AppLayout.MainRegion>
  <AppLayout.SideRightRegion>
    <ActivityPanel>...</ActivityPanel>
  </AppLayout.SideRightRegion>
  <AppLayout.BottomRegion>
    <BottomBar>...</BottomBar>
  </AppLayout.BottomRegion>
</AppLayout>
```

### Minimal Layout (Top + Main)

```tsx
<AppLayout>
  <AppLayout.TopRegion>
    <header>My App</header>
  </AppLayout.TopRegion>
  <AppLayout.MainRegion>
    <div>Main content</div>
  </AppLayout.MainRegion>
</AppLayout>
```

### Sidebar Layout

```tsx
<AppLayout>
  <AppLayout.TopRegion>
    <TopBar />
  </AppLayout.TopRegion>
  <AppLayout.SideLeftRegion>
    <Navigation />
  </AppLayout.SideLeftRegion>
  <AppLayout.MainRegion>
    <Content />
  </AppLayout.MainRegion>
</AppLayout>
```

### Mobile Layout (Top + Main + Bottom)

```tsx
<AppLayout>
  <AppLayout.TopRegion>
    <MobileHeader />
  </AppLayout.TopRegion>
  <AppLayout.MainRegion>
    <Feed />
  </AppLayout.MainRegion>
  <AppLayout.BottomRegion>
    <BottomNavigation />
  </AppLayout.BottomRegion>
</AppLayout>
```

## Styling

### Default Styles

- **Root**: `min-h-screen w-full bg-background`
- **Sidebars**: White background with border separators
- **All regions**: Accept `className` for customization

### Customization

Each region can be customized via the `className` prop:

```tsx
<AppLayout.SideLeftRegion className='w-72 bg-neutral'>
  {/* Custom width and background */}
</AppLayout.SideLeftRegion>
```

## Accessibility

- **Semantic HTML**: Uses `<aside>` for sidebars, `<main>` for main content
- **Keyboard Navigation**: All regions are accessible via keyboard
- **Screen Readers**: Proper semantic structure for navigation

## Relationship with Other Layout Components

`AppLayout` is a **higher-order layout** component compared to:

- **PageHeader**: Used within regions (typically TopRegion or MainRegion)
- **PageContent**: Used within MainRegion for content structure
- **TopBar/SideBar/BottomBar**: Used within respective regions

**Hierarchy:**

```
AppLayout (app shell)
  ├─ TopRegion → TopBar (navigation)
  ├─ SideLeftRegion → SideBar (menu)
  ├─ MainRegion → PageHeader + PageContent (page structure)
  ├─ SideRightRegion → ActivityPanel (auxiliary)
  └─ BottomRegion → BottomBar (footer)
```

## Responsive Design

The component is designed to work with responsive patterns:

- Use container queries within regions for responsive behavior
- Sidebars can be conditionally rendered based on viewport size
- Mobile-first: Start with simple layouts, add sidebars for larger screens

**Example responsive pattern:**

```tsx
const [showSidebar, setShowSidebar] = useState(false)

<AppLayout>
  <AppLayout.TopRegion>
    <TopBar onMenuClick={() => setShowSidebar(!showSidebar)} />
  </AppLayout.TopRegion>
  {showSidebar && (
    <AppLayout.SideLeftRegion>
      <SideBar />
    </AppLayout.SideLeftRegion>
  )}
  <AppLayout.MainRegion>
    <Content />
  </AppLayout.MainRegion>
</AppLayout>
```

## Browser Support

Uses CSS Grid with modern browser support:

- Chrome/Edge 57+
- Firefox 52+
- Safari 10.1+

## Files

- `app-layout.tsx` - Main component and compound assignment
- `app-layout.atoms.tsx` - Sub-components (regions)
- `types.ts` - TypeScript interfaces
- `helpers.ts` - CVA style variants
- `app-layout.stories.tsx` - Storybook examples
- `__tests__/app-layout.test.tsx` - Unit tests
- `index.ts` - Barrel exports

## Testing

Tests cover:

- Snapshot testing for all story variants
- Region rendering and content
- Semantic HTML usage
- Accessibility attributes
- Optional region rendering

## Design Tokens

Uses Versaur design tokens:

- `--color-background` - Root background
- `--color-border` - Region separators
- Spacing and typography from theme

## Performance Considerations

- **Grid Layout**: CSS Grid is performant for layout
- **Sticky Positioning**: Top region uses sticky, which is GPU-accelerated
- **Scoped Scrolling**: Only main region scrolls, reducing repaints
- **No JavaScript**: Pure CSS layout, no JS overhead
- **Tree-shakable**: Regions imported individually if needed
- **Viewport-constrained**: `h-screen` ensures predictable layout performance

## Implementation Notes

**Why `min-h-0` on MainRegion?**

CSS Grid items have an implicit `min-height: auto`, which prevents overflow from working correctly.
By setting `min-h-0`, we allow the main region to shrink below its content height and enable
scrolling within the grid area.

**Why `h-screen overflow-hidden` on root?**

Without constraining the root container to viewport height and hiding overflow, the browser would
allow the entire document to scroll. By using `h-screen overflow-hidden`, we ensure scrolling is
scoped only to the main region, keeping sidebars and navigation fixed in view.

**Sidebar Scrolling:**

If you need scrolling within a sidebar (e.g., a long navigation menu), add `overflow-y-auto` to a
container inside the sidebar region:

```tsx
<AppLayout.SideLeftRegion>
  <div className='h-full overflow-y-auto'>
    <SideBar>{/* long content */}</SideBar>
  </div>
</AppLayout.SideLeftRegion>
```
