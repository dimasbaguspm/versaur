# PageLayout Component Specification

## Overview

`PageLayout` is a compound layout component that provides structured layout management for
page-level UI between header and content regions. It uses CSS Grid with named grid areas to define
regions for organizing the page structure.

The layout manages the relationship between `PageHeader` and `PageContent` components, taking
responsibility for background color management from those components.

## Component Type

**Compound Pattern** - Uses the compound component pattern for flexible composition. Each region
component positions itself using CSS `grid-area`, making the layout declarative and predictable.

## Scrolling Behavior

**Only the ContentRegion is scrollable, and scrolling is scoped to that region only.** The layout
uses:

- Root container: `h-full` with grid layout
- Content region: `overflow-y-auto` + `min-h-0` to enable scrolling within the grid area

This ensures:

- Page header stays visible and accessible
- Only the main content area scrolls within its grid area
- Content remains within proper boundaries

## Regions

The `PageLayout` component provides two distinct regions:

### 1. HeaderRegion

- **Purpose**: Page header area (contains PageHeader component)
- **Position**: Top of the layout, full width
- **Behavior**: Fixed in position (does not scroll)
- **Semantic**: Rendered as `<div>`
- **Grid Area**: `header`
- **Scrollable**: No
- **Props**:
  - `backgroundColor`: `'white' | 'gray'` (default: `'white'`)

### 2. ContentRegion

- **Purpose**: Main page content area (contains PageContent component)
- **Position**: Below header, takes remaining space
- **Behavior**: **Scrollable** - the content scroll container
- **Semantic**: Rendered as `<div>`
- **Grid Area**: `content`
- **Scrollable**: **Yes** - this is the content scroll container
- **Props**:
  - `backgroundColor`: `'white' | 'gray'` (default: `'white'`)

## Grid Layout Structure

The component uses a 1-column, 2-row CSS Grid with named grid areas:

```
Grid Template Areas:
┌─────────────────────────────┐
│         header              │
├─────────────────────────────┤
│                             │
│        content              │
│      (scrollable)           │
│                             │
└─────────────────────────────┘

Grid Configuration:
- Rows: auto 1fr (header auto-sizes, content takes remaining space)
- Areas: "header" / "content"
```

## Props

### PageLayoutProps

| Prop        | Type      | Default | Description                                           |
| ----------- | --------- | ------- | ----------------------------------------------------- |
| `hasMargin` | `boolean` | `false` | Add horizontal margin (left and right) to page layout |
| `className` | `string`  | -       | Additional CSS classes for customization              |
| `children`  | `node`    | -       | Child components (HeaderRegion, ContentRegion)        |

### PageLayoutHeaderRegionProps

| Prop              | Type                | Default   | Description                              |
| ----------------- | ------------------- | --------- | ---------------------------------------- |
| `backgroundColor` | `'white' \| 'gray'` | `'white'` | Background color of the header region    |
| `className`       | `string`            | -         | Additional CSS classes for customization |
| `children`        | `node`              | -         | Child components (typically PageHeader)  |

### PageLayoutContentRegionProps

| Prop              | Type                | Default   | Description                              |
| ----------------- | ------------------- | --------- | ---------------------------------------- |
| `backgroundColor` | `'white' \| 'gray'` | `'white'` | Background color of the content region   |
| `className`       | `string`            | -         | Additional CSS classes for customization |
| `children`        | `node`              | -         | Child components (typically PageContent) |

## Usage Examples

### Basic Usage

```tsx
<PageLayout>
  <PageLayout.HeaderRegion>
    <PageHeader title='Page Title' subtitle='Description' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

### With Margins

```tsx
<PageLayout hasMargin>
  <PageLayout.HeaderRegion>
    <PageHeader title='Page Title' subtitle='Description' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

### Different Background Colors

```tsx
<PageLayout>
  <PageLayout.HeaderRegion backgroundColor='gray'>
    <PageHeader title='Dashboard' subtitle='Monitor your metrics' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion backgroundColor='white'>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

### Gray Content Background

```tsx
<PageLayout hasMargin>
  <PageLayout.HeaderRegion backgroundColor='white'>
    <PageHeader title='Settings' subtitle='Manage preferences' />
  </PageLayout.HeaderRegion>
  <PageLayout.ContentRegion backgroundColor='gray'>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

## Relationship with Other Components

### PageHeader

`PageLayout.HeaderRegion` is designed to contain the `PageHeader` component. The `backgroundColor`
prop should be set on the `HeaderRegion` instead of on `PageHeader` directly.

**Before (without PageLayout):**

```tsx
<PageHeader backgroundColor='gray' title='Page Title' />
```

**After (with PageLayout):**

```tsx
<PageLayout>
  <PageLayout.HeaderRegion backgroundColor='gray'>
    <PageHeader title='Page Title' />
  </PageLayout.HeaderRegion>
</PageLayout>
```

### PageContent

`PageLayout.ContentRegion` is designed to contain the `PageContent` component. The `backgroundColor`
prop should be set on the `ContentRegion` instead of on `PageContent` directly.

**Before (without PageLayout):**

```tsx
<PageContent backgroundColor='gray' size='wide'>
  {/* content */}
</PageContent>
```

**After (with PageLayout):**

```tsx
<PageLayout>
  <PageLayout.ContentRegion backgroundColor='gray'>
    <PageContent size='wide'>{/* content */}</PageContent>
  </PageLayout.ContentRegion>
</PageLayout>
```

## Margin Behavior

The `hasMargin` prop applies responsive horizontal margins to the entire page layout:

- Mobile (`mx-4`): 1rem (16px) on each side
- Tablet (`sm:mx-6`): 1.5rem (24px) on each side
- Desktop (`lg:mx-8`): 2rem (32px) on each side

This is useful for pages that need consistent spacing from the viewport edges across all
breakpoints.

## Accessibility

- Uses semantic HTML with proper grid structure
- Grid areas provide clear layout hierarchy
- Scrollable content region is keyboard accessible
- Focus management works naturally within scrollable content
- ARIA landmarks can be applied to child components (PageHeader, PageContent)

## Styling & Customization

### Root Container Styles

- Grid layout with auto-sizing header and flexible content
- Optional horizontal margins via `hasMargin` prop
- Full height (`h-full`) to utilize available space

### Region Styles

Each region can be customized via:

- `backgroundColor` prop for semantic color variants
- `className` prop for additional custom styling
- Grid area positioning ensures predictable layout behavior

## Use Cases

1. **Standard Page Layout**: Header + scrollable content
2. **Dashboard Pages**: Gray header with white content cards
3. **Settings Pages**: White header with gray content sections
4. **Article/Blog Pages**: Narrow layout with margins for focused reading
5. **Full-Width Pages**: Fluid layout without margins for maximum space utilization

## Best Practices

1. **Background Colors**: Use the region's `backgroundColor` prop instead of setting it on child
   components
2. **Margins**: Apply `hasMargin` at the root level for consistent spacing
3. **Content Sizing**: Control content width through PageContent's `size` prop
4. **Scrolling**: Let ContentRegion handle scrolling, don't add overflow to child components
5. **Composition**: Always use both HeaderRegion and ContentRegion for complete layout structure

## Integration with AppLayout

`PageLayout` is typically used inside `AppLayout.MainRegion` to structure individual page content:

```tsx
<AppLayout>
  <AppLayout.TopRegion>
    <TopBar>{/* ... */}</TopBar>
  </AppLayout.TopRegion>

  <AppLayout.MainRegion>
    <PageLayout hasMargin>
      <PageLayout.HeaderRegion backgroundColor='gray'>
        <PageHeader title='Dashboard' />
      </PageLayout.HeaderRegion>
      <PageLayout.ContentRegion backgroundColor='white'>
        <PageContent size='wide'>{/* page content */}</PageContent>
      </PageLayout.ContentRegion>
    </PageLayout>
  </AppLayout.MainRegion>
</AppLayout>
```
