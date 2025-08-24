### AttributeList Component

```tsx
import { AttributeList } from '@versaur/primitive/attribute'

export default function UserDetails() {
  return (
    <AttributeList columns={4}>
      <AttributeList.Item span={4} title='Bio'>
        Full-stack developer with 8+ years of experience
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Name'>
        John Doe
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Email'>
        john.doe@example.com
      </AttributeList.Item>
    </AttributeList>
  )
}
```

## Features

- **Flexible Grid Layout**: AttributeList supports 1-12 columns with customizable spans
- **Semantic HTML**: Uses proper heading and paragraph elements
- **Responsive**: Mobile-first design with grid-based layout
- **Accessible**: Proper semantic markup for screen readers
- **Composable**: AttributeList uses compound pattern for flexible composition

## Props

### Attribute

- `title` (string, required) - The attribute title displayed as an h4 element
- `children` (ReactNode, required) - The attribute content displayed as a p element

### AttributeList

- `columns` (number, optional, default: 4) - Number of grid columns
- `children` (ReactNode, required) - AttributeList.Item elements

### AttributeList.Item

- `title` (string, required) - The attribute title displayed as an h4 element
- `span` (number, optional, default: 1) - Number of grid columns to span
- `children` (ReactNode, required) - The attribute content displayed as a p element

## Examples

### Different Column Layouts

```tsx
// 2-column layout
<AttributeList columns={2}>
  <AttributeList.Item title="Name">John Doe</AttributeList.Item>
  <AttributeList.Item title="Email">john@example.com</AttributeList.Item>
</AttributeList>

// 6-column layout with different spans
<AttributeList columns={6}>
  <AttributeList.Item span={3} title="First Name">John</AttributeList.Item>
  <AttributeList.Item span={3} title="Last Name">Doe</AttributeList.Item>
  <AttributeList.Item span={6} title="Address">123 Main St, City</AttributeList.Item>
</AttributeList>
```
