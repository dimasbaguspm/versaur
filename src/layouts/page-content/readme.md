# PageContent

A layout component that provides consistent horizontal spacing matching the PageHeader component, with additional vertical padding for proper content separation.

## Usage

```tsx
import { PageContent } from '@/layouts/page-content'

function MyPage() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <PageContent>
        <div className="space-y-6">
          <p>Your main page content goes here.</p>
          {/* More content */}
        </div>
      </PageContent>
    </>
  )
}
```

## Features

- **Consistent Spacing**: Horizontal padding matches PageHeader (px-4 sm:px-6)
- **Content Separation**: Additional vertical padding (py-6 sm:py-8) for proper content spacing
- **Mobile-First**: Responsive design that works across all screen sizes
- **Full Width**: Takes full width of its container
- **Accessible**: Semantic HTML structure

## Design System

PageContent is designed to be a sibling component to PageHeader, ensuring consistent horizontal alignment and proper vertical spacing throughout your application layout.

### Spacing Hierarchy

- **Horizontal**: Same as PageHeader (px-4 on mobile, px-6 on desktop)
- **Vertical**: More generous padding (py-6 on mobile, py-8 on desktop) for content breathing room

## Props

Extends all standard HTML div element props.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Content to be displayed inside the page content area |
| `className` | `string` | Additional CSS classes to apply |

## Examples

### Basic Usage
Simple content wrapper with consistent spacing.

### With Form Elements
Works great with forms and interactive elements.

### Minimal Content
Handles sparse content gracefully with proper spacing.
