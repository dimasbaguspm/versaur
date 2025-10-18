# PageHeader Component Specification

## Overview

The `PageHeader` component provides a flexible layout system for page headers that can include
breadcrumbs, titles, subtitles, badges, action buttons, and bottom navigation tabs. It is designed
to work in tandem with `PageContent` for consistent page structure.

## Purpose

- **Unified Header Structure**: Provides consistent header layout across the application
- **Flexible Composition**: Supports simplified prop-based API for common use cases
- **Responsive Design**: Adapts to mobile and desktop viewports with appropriate stacking
- **Visual Consistency**: Matches PageContent's size and backgroundColor options for seamless pairing

## Component Structure

The component uses a **two-div wrapper structure** matching PageContent:

1. **Outer Wrapper**: Handles background color and extends full viewport width
2. **Inner Container**: Controls max-width and padding, matching PageContent's size constraints

This structure ensures visual consistency when PageHeader is paired with PageContent on the same
page.

## Props API

### `size`

Controls the maximum width and padding of the inner container.

- **Type**: `'fluid' | 'wide' | 'narrow'`
- **Default**: `'fluid'`
- **Options**:
  - `fluid`: Full viewport width, no max-width constraint
  - `wide`: Desktop-optimized container (max-w-7xl)
  - `narrow`: Mobile-optimized container (max-w-3xl)

**Important**: Should match the `size` of the paired `PageContent` component for visual alignment.

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
2. **Top Section**: Contains content area and actions
   - **Content Area**: Title, subtitle, and badges
   - **Actions Area**: Desktop action buttons (right-aligned)
3. **Bottom Section**: Optional, for tabs or filters

### Visual Hierarchy

- Background extends full viewport width
- Content respects size constraints matching PageContent
- Proper spacing between sections (mb-4 for breadcrumbs, px-4/px-6 responsive padding)

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
6. **Accessibility**: Ensure action buttons have proper labels and ARIA attributes

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
