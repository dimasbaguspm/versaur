# PageHeader Component Specification

## Overview

The `PageHeader` component provides a flexible layout system for page headers that can include
breadcrumbs, titles, subtitles, badges, action buttons, and bottom navigation tabs. It is designed
to work in tandem with `PageContent` for consistent page structure.

## Purpose

- **Unified Header Structure**: Provides consistent header layout across the application
- **Flexible Composition**: Supports simplified prop-based API for common use cases
- **Responsive Design**: Adapts to mobile and desktop viewports with appropriate stacking
- **Visual Consistency**: Matches PageContent's size and backgroundColor options for seamless
  pairing

## Component Structure

The component uses a **two-div wrapper structure** with individual section padding:

1. **Outer Wrapper**: Handles background color and extends full viewport width
2. **Inner Container**: Controls max-width only (no horizontal padding)
3. **Section-Level Padding**: Individual sections (breadcrumbs, top) apply their own horizontal
   padding based on the parent's size

This structure ensures:

- Visual consistency when PageHeader is paired with PageContent
- Bottom sections (like tabs) can extend edge-to-edge for better mobile scrolling UX
- Each section controls its own spacing independently

### Padding Architecture

- **Parent Container** (`pageHeaderInnerVariants`): No horizontal padding, only max-width
  constraints
- **Breadcrumbs Section**: Applies padding based on size (px-6 for wide, px-4 for narrow, px-0 for
  fluid)
- **Top Section**: Applies padding based on size (px-6 for wide, px-4 for narrow, px-0 for fluid)
- **Bottom Section** (tabs): No padding, allowing edge-to-edge scrolling on mobile devices

## Props API

### `size`

Controls the maximum width of the container and horizontal padding for individual sections.

- **Type**: `'fluid' | 'wide' | 'narrow'`
- **Default**: `'fluid'`
- **Options**:
  - `fluid`: Full viewport width, no max-width constraint, no section padding
  - `wide`: Desktop-optimized container (max-w-7xl), sections use px-6 padding
  - `narrow`: Mobile-optimized container (max-w-3xl), sections use px-4 padding

**Important**:

- Should match the `size` of the paired `PageContent` component for visual alignment
- Tabs in the bottom section remain edge-to-edge regardless of size for optimal mobile scrolling

### `backgroundColor`

Controls the background color of the outer wrapper.

- **Type**: `'white' | 'gray'`
- **Default**: `'white'`
- **Options**:
  - `white`: White background (bg-white)
  - `gray`: Neutral gray background (bg-neutral)

**Important**: Should match the `backgroundColor` of the paired `PageContent` component for seamless
integration.

### Simplified API Props

These props provide a convenient way to build common header layouts without using compound
components.

#### `title`

The main page title.

- **Type**: `ReactNode`
- **Required**: Yes
- **Renders as**: `<h1>` with responsive font sizing

#### `subtitle`

Optional subtitle or description text.

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Renders as**: `<p>` with smaller font size and line clamping

#### `breadcrumbs`

Navigation breadcrumbs component.

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Typical Usage**: `<Breadcrumbs>` component

#### `badges`

Status badges or labels.

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Typical Usage**: One or more `<Badge>` components

#### `actions`

Desktop action buttons (hidden on mobile).

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Typical Usage**: `<Button>` or `<ButtonGroup>` components
- **Responsive**: Hidden below `md` breakpoint

#### `mobileActions`

Mobile action buttons (hidden on desktop).

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Typical Usage**: `<ButtonIcon>` components for compact mobile layout
- **Responsive**: Hidden at `md` breakpoint and above

#### `tabs`

Bottom navigation tabs or filters.

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Typical Usage**: `<Tabs>` component

### Additional Props

The component extends `HTMLAttributes<HTMLElement>`, so all standard header attributes (e.g., `id`,
`data-*`, `aria-*`) are supported and applied to the **outer wrapper**.

## Behavior

### Semantic Structure

- Uses `<header>` element with `role="banner"` for accessibility
- Title rendered as `<h1>` for proper document outline
- Subtitle rendered as `<p>` for semantic clarity

### Responsive Design

#### Desktop (md and above)

- Horizontal layout with actions on the right
- Full action buttons with text labels
- Title and actions side-by-side

#### Mobile

- Vertical stacking of elements
- Compact icon-only action buttons
- Mobile actions appear inline with title
- Desktop actions hidden

### Layout Regions

1. **Breadcrumbs Section**: Optional, appears first above main content
   - Includes horizontal padding based on parent size
2. **Top Section**: Contains content area and actions
   - Includes horizontal padding based on parent size
   - **Content Area**: Title, subtitle, and badges
   - **Actions Area**: Desktop action buttons (right-aligned)
3. **Bottom Section**: Optional, for tabs or filters
   - **No horizontal padding** - extends edge-to-edge for optimal scrolling on mobile
   - Ideal for horizontal navigation tabs that need to scroll

### Visual Hierarchy

- Background extends full viewport width
- Content respects max-width constraints based on size
- Individual sections control their own horizontal padding
- Bottom section (tabs) remains edge-to-edge for better mobile UX

## Pairing with PageContent

For visual consistency, PageHeader should be paired with PageContent using matching `size` and
`backgroundColor` props:

### Example: Fluid Layout (Full Width)

```tsx
<>
  <PageHeader
    size='fluid'
    backgroundColor='white'
    title='Dashboard'
    subtitle='Overview of your projects'
  />
  <PageContent size='fluid' backgroundColor='white'>
    {/* Page content */}
  </PageContent>
</>
```

### Example: Wide Layout (Container)

```tsx
<>
  <PageHeader
    size='wide'
    backgroundColor='gray'
    title='User Management'
    subtitle='Manage users and permissions'
    breadcrumbs={<Breadcrumbs>{/* ... */}</Breadcrumbs>}
  />
  <PageContent size='wide' backgroundColor='gray'>
    {/* Page content */}
  </PageContent>
</>
```

### Example: Narrow Layout (Focused Content)

```tsx
<>
  <PageHeader
    size='narrow'
    backgroundColor='white'
    title='Account Settings'
    subtitle='Manage your preferences'
  />
  <PageContent size='narrow' backgroundColor='white'>
    {/* Page content */}
  </PageContent>
</>
```

## Usage Examples

### Minimal Header

```tsx
<PageHeader title='Dashboard' subtitle='Welcome back, John' />
```

### With Breadcrumbs and Actions

```tsx
<PageHeader
  title='Projects'
  breadcrumbs={
    <Breadcrumbs>
      <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Separator />
      <Breadcrumbs.Item>Projects</Breadcrumbs.Item>
    </Breadcrumbs>
  }
  actions={
    <ButtonGroup>
      <Button variant='primary'>New Project</Button>
    </ButtonGroup>
  }
  mobileActions={<ButtonIcon as={PlusIcon} variant='primary' />}
/>
```

### Full-Featured with Tabs

```tsx
<PageHeader
  size='wide'
  backgroundColor='gray'
  title='User Management'
  subtitle='Manage user accounts and permissions'
  breadcrumbs={<Breadcrumbs>{/* ... */}</Breadcrumbs>}
  badges={
    <>
      <Badge>Active</Badge>
      <Badge color='neutral'>Admin</Badge>
    </>
  }
  actions={
    <ButtonGroup>
      <Button variant='outline'>Export</Button>
      <Button variant='primary'>Add User</Button>
    </ButtonGroup>
  }
  mobileActions={
    <ButtonGroup>
      <ButtonIcon as={DownloadIcon} variant='outline' />
      <ButtonIcon as={PlusIcon} variant='primary' />
    </ButtonGroup>
  }
  tabs={
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <Tabs.Trigger value='all'>All Users</Tabs.Trigger>
      <Tabs.Trigger value='active'>Active</Tabs.Trigger>
    </Tabs>
  }
/>
```

## Best Practices

1. **Match with PageContent**: Always use matching `size` and `backgroundColor` props when pairing
   with PageContent
2. **Mobile Actions**: Provide both `actions` and `mobileActions` for optimal mobile experience
3. **Breadcrumbs**: Include breadcrumbs for better navigation context on nested pages
4. **Badges**: Use sparingly for important status indicators only
5. **Tabs**: Reserve bottom section for primary navigation or filtering, not secondary actions
6. **Edge-to-Edge Tabs**: Tabs in the bottom section automatically extend edge-to-edge on all screen
   sizes for optimal horizontal scrolling UX
7. **Accessibility**: Ensure action buttons have proper labels and ARIA attributes

## Tabs and Mobile UX

The bottom section (typically used for tabs) is designed with mobile-first horizontal scrolling in
mind:

- **No Horizontal Padding**: The bottom section has no horizontal padding, allowing tabs to extend
  to the viewport edges
- **Optimal Scrolling**: Edge-to-edge layout provides maximum scroll area and better thumb reach on
  mobile devices
- **Consistent Behavior**: This edge-to-edge behavior applies to all size variants (fluid, wide,
  narrow)
- **Desktop Alignment**: While tabs extend edge-to-edge, individual tab items maintain their own
  spacing and alignment

This design pattern is common in mobile applications where horizontal scrollable elements benefit
from using the full viewport width.

## Accessibility

- Uses semantic `<header>` element with `role="banner"`
- Title is `<h1>` for proper document structure
- Action buttons should have descriptive labels or `aria-label`
- Mobile icon buttons require `aria-label` for screen readers
- Tab navigation follows ARIA best practices (handled by Tabs component)

## Related Components

- **PageContent**: Main content wrapper that should match PageHeader's size and backgroundColor
- **Breadcrumbs**: Navigation breadcrumbs component
- **Tabs**: Bottom navigation tabs
- **Button**: Action buttons
- **ButtonIcon**: Compact icon buttons for mobile
- **ButtonGroup**: Groups multiple action buttons
- **Badge**: Status indicators
