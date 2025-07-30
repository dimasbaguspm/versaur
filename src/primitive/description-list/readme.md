# DescriptionList

A semantic, accessible, and flexible description list component for Versaur UI, supporting grid layout, custom column span, and styled terms/details.

## Features
- Renders a semantic `<dl>` with terms (`<dt>`) and descriptions (`<dd>`) using a compound component API
- Grid-based layout with 12 columns for advanced alignment
- Each item can span 1–12 columns (default: 4)
- Terms and details are always strings for clarity and accessibility
- Details support color prop for semantic styling
- Mobile-first, accessible, and themeable with Tailwind and Versaur color system

## Usage
```tsx
import { DescriptionList } from '@/primitive/description-list'

<DescriptionList>
  <DescriptionList.Item>
    <DescriptionList.Term>Name</DescriptionList.Term>
    <DescriptionList.Details>Jane Doe</DescriptionList.Details>
  </DescriptionList.Item>
  <DescriptionList.Item span={6}>
    <DescriptionList.Term>Email</DescriptionList.Term>
    <DescriptionList.Details color="primary">jane@example.com</DescriptionList.Details>
  </DescriptionList.Item>
</DescriptionList>
```

## API

### `<DescriptionList>`
- **Props:**
  - `children`: Only accepts `DescriptionList.Item` elements
  - All standard `<dl>` props
  - Always uses `grid-cols-12` for layout (not user-configurable)

### `<DescriptionList.Item>`
- **Props:**
  - `span` (number, optional): Number of columns to span (1–12, default: 4)
  - `children`: One `DescriptionList.Term` and one `DescriptionList.Details`

### `<DescriptionList.Term>`
- **Props:**
  - `children` (string, required): The term/label

### `<DescriptionList.Details>`
- **Props:**
  - `children` (string, required): The value/description
  - `color` (string, optional): Semantic color (e.g., 'primary', 'secondary', 'tertiary', etc.)

## Example
```tsx
<DescriptionList>
  <DescriptionList.Item span={6}>
    <DescriptionList.Term>Project</DescriptionList.Term>
    <DescriptionList.Details color="primary">Versaur UI</DescriptionList.Details>
  </DescriptionList.Item>
  <DescriptionList.Item span={3}>
    <DescriptionList.Term>Status</DescriptionList.Term>
    <DescriptionList.Details color="success">Active</DescriptionList.Details>
  </DescriptionList.Item>
  <DescriptionList.Item span={3}>
    <DescriptionList.Term>Contributors</DescriptionList.Term>
    <DescriptionList.Details>5</DescriptionList.Details>
  </DescriptionList.Item>
</DescriptionList>
```

## Accessibility
- Uses semantic HTML (`<dl>`, `<dt>`, `<dd>`) for screen reader support
- Requires string children for terms and details for clarity
- Fully keyboard accessible

## See Also
- See `types.ts` for full prop documentation.
- See Storybook for live examples and visual documentation.
