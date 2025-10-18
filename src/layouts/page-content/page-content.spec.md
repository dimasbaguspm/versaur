# PageContent Component Specification

## Overview

The `PageContent` component serves as a parent wrapper for main content in the body region or below
the page header. It provides a flexible container system with configurable sizing, column templates,
and background colors.

## Purpose

- **Centralized Layout Control**: Provides consistent layout constraints across the application
- **Responsive Design**: Handles different viewport sizes with fluid, wide, and narrow options
- **Template Flexibility**: Supports single and multi-column layouts
- **Visual Hierarchy**: Offers background color options for visual contrast

## Component Structure

The component uses a **two-div wrapper structure**:

1. **Outer Wrapper**: Handles background color and extends full viewport width
2. **Inner Container**: Controls max-width, padding, and column template layout

This structure ensures that background colors extend edge-to-edge while content remains properly
constrained.

## Props API

### `size`

Controls the maximum width and padding of the inner container.

- **Type**: `'fluid' | 'wide' | 'narrow'`
- **Default**: `'fluid'`
- **Options**:
  - `fluid`: Full viewport width, no padding (max-w-full, px-0)
  - `wide`: Desktop-optimized container (max-w-7xl, px-6, pb-10)
  - `narrow`: Mobile-optimized container (max-w-3xl, px-4, pb-10)

**Use Cases**:

- `fluid`: Full-width dashboards, image galleries, maps
- `wide`: Standard application content, multi-column layouts
- `narrow`: Reading-focused content, forms, articles

### `template`

Defines the column layout structure of the inner container.

- **Type**:
  `'single-column' | 'two-column' | 'two-column-asymmetric-left' | 'two-column-asymmetric-right'`
- **Default**: `'single-column'`
- **Options**:
  - `single-column`: Single centered column (grid-cols-1)
  - `two-column`: Two equal columns (grid-cols-1 md:grid-cols-2)
  - `two-column-asymmetric-left`: Left column wider, 2:1 ratio (grid-cols-1 md:grid-cols-3)
  - `two-column-asymmetric-right`: Right column wider, 1:2 ratio (grid-cols-1 md:grid-cols-3)

**Responsive Behavior**:

- All multi-column templates stack to single column on mobile (`md:` breakpoint)
- Gap between columns: `gap-6` (1.5rem / 24px)

**Use Cases**:

- `single-column`: Standard content pages
- `two-column`: Side-by-side comparisons, feature grids
- `two-column-asymmetric-left`: Main content with sidebar (content-focused)
- `two-column-asymmetric-right`: Sidebar with main content (sidebar-focused)

### `backgroundColor`

Controls the background color of the outer wrapper.

- **Type**: `'white' | 'gray'`
- **Default**: `'white'`
- **Options**:
  - `white`: White background (bg-white)
  - `gray`: Neutral gray background (bg-neutral)

**Use Cases**:

- `white`: Default app background, clean look
- `gray`: Visual contrast, section separation, dashboard backgrounds

### `className`

Additional CSS classes applied to the **inner container**.

- **Type**: `string`
- **Default**: `undefined`

### `children`

Content to render inside the layout.

- **Type**: `React.ReactNode`
- **Required**: Yes

### Additional Props

The component extends `React.HTMLAttributes<HTMLDivElement>`, so all standard div attributes (e.g.,
`id`, `data-*`, `aria-*`) are supported and applied to the **outer wrapper**.

## Behavior

### Positioning

- Always centered horizontally via `mx-auto`
- Full width of its parent container
- Relative positioning for descendant absolute positioning

### Responsive Design

- **Mobile-first approach**: Single column templates on mobile, expanding at `md` breakpoint
- **Fluid by default**: No constraints unless specified
- **Centered containers**: Wide and narrow sizes are horizontally centered

### Visual Hierarchy

- Background color extends full viewport width
- Content respects size constraints
- Maintains visual consistency across pages

## Usage Examples

### Basic Single Column Layout

```tsx
<PageContent>
  <h1>Page Content</h1>
  <p>Your content here...</p>
</PageContent>
```

### Wide Container with Two Columns

```tsx
<PageContent size='wide' template='two-column'>
  <div>Column 1</div>
  <div>Column 2</div>
</PageContent>
```

### Content-Focused Layout with Sidebar

```tsx
<PageContent size='wide' template='two-column-asymmetric-left'>
  <div className='md:col-span-2'>{/* Main content (wider) */}</div>
  <div>{/* Sidebar */}</div>
</PageContent>
```

### Gray Background for Visual Contrast

```tsx
<PageContent size='wide' backgroundColor='gray'>
  <div className='rounded-lg bg-white p-6'>{/* Content on contrasting background */}</div>
</PageContent>
```

## Accessibility

- Semantic HTML structure (div elements)
- No built-in ARIA roles (allows flexibility for content)
- Supports all standard ARIA attributes via props spread
- Responsive design ensures content is accessible on all devices

## Styling Customization

### Via className

```tsx
<PageContent className='pt-8 gap-8'>{/* Adds top padding and larger gap */}</PageContent>
```

### Tailwind Class Override Priority

Classes passed via `className` are merged with cva variants using `cn()` utility, allowing
overrides.

## Implementation Details

### Component Pattern

- **Regular Pattern**: Simple wrapper component without compound parts
- **Forwardable Ref**: Supports ref forwarding to outer div
- **Type Safety**: Fully typed with TypeScript

### CSS Architecture

- **CVA (Class Variance Authority)**: For variant management
- **Tailwind CSS v4**: For utility classes
- **Two-layer system**: Separate variants for outer and inner divs

### File Structure

```
page-layout/
  ├── page-layout.tsx          # Main component
  ├── types.ts                 # TypeScript interfaces
  ├── helpers.ts               # CVA variant definitions
  ├── page-layout.stories.tsx  # Storybook stories
  ├── page-layout.spec.md      # This specification
  ├── index.ts                 # Barrel export
  └── __tests__/
      └── page-layout.test.tsx # Unit tests
```

## Browser Compatibility

- All modern browsers supporting CSS Grid
- Graceful degradation for older browsers (single column fallback)
- No JavaScript dependencies beyond React

## Performance Considerations

- Minimal re-renders (no internal state)
- Tree-shakable exports
- Optimized class concatenation via `cn()` utility
- No runtime CSS generation

## Design System Alignment

- Uses Versaur color tokens (`bg-white`, `bg-neutral`)
- Follows standard spacing scale (`px-4`, `px-6`, `pb-10`, `gap-6`)
- Aligns with breakpoint system (`md:` prefix)
- Maintains professional, clean aesthetic

## Related Components

- **PageHeader**: Often used above PageContent
- **PageContent**: May be used within PageContent for additional structure
- **Card**: Common child component for content sections
- **SideBar**: Works well with asymmetric column templates
