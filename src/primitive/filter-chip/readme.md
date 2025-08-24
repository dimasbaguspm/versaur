# FilterChip

A versatile, accessible filter chip component with support for semantic variants, outline styles,
and optional remove functionality.

## Features

- **Variants**: Multiple color variants following the Versaur color system
- **Sizes**: Three sizes (sm, md, lg) for different contexts
- **Removable**: Optional cross icon for removing the chip
- **Accessibility**: Full keyboard navigation and ARIA support
- **Responsive**: Mobile-first responsive design

## Usage

### Basic Usage

```tsx
import { FilterChip } from '@/primitive/filter-chip'

// Simple chip
<FilterChip label="Category" />

// Removable chip
<FilterChip
  label="Tag"
  onRemove={() => console.log('Remove clicked')}
/>
```

### Variants

The component supports multiple variants based on the Versaur color system:

```tsx
// Core variants
<FilterChip label="Primary" variant="primary" />
<FilterChip label="Primary Outline" variant="primary-outline" />
<FilterChip label="Secondary" variant="secondary" />
<FilterChip label="Secondary Outline" variant="secondary-outline" />

// Semantic variants
<FilterChip label="Success" variant="success" />
<FilterChip label="Warning" variant="warning" />
<FilterChip label="Danger" variant="danger" />
<FilterChip label="Info" variant="info" />
```

### Sizes

```tsx
<FilterChip label="Small" size="sm" />
<FilterChip label="Medium" size="md" />
<FilterChip label="Large" size="lg" />
```

### Removable Chips

When `onRemove` is provided, the chip displays a cross icon and becomes removable:

```tsx
<FilterChip label='Removable Tag' onRemove={() => handleRemove()} />
```

### Disabled State

```tsx
<FilterChip label="Disabled" disabled />
<FilterChip label="Disabled Removable" disabled onRemove={handleRemove} />
```

## Props

| Prop        | Type                   | Default             | Description                             |
| ----------- | ---------------------- | ------------------- | --------------------------------------- |
| `label`     | `string`               | -                   | The text content of the chip (required) |
| `variant`   | `FilterChipVariant`    | `'neutral-outline'` | Visual style variant                    |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`              | Size of the chip                        |
| `disabled`  | `boolean`              | `false`             | Whether the chip is disabled            |
| `onRemove`  | `() => void`           | -                   | Callback when remove icon is clicked    |
| `className` | `string`               | -                   | Additional CSS classes                  |

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels and attributes
- Focus management for remove functionality
- Screen reader friendly

## Examples

### Filter List

```tsx
const [filters, setFilters] = useState([
  { id: 1, label: 'JavaScript', variant: 'primary' },
  { id: 2, label: 'React', variant: 'secondary' },
  { id: 3, label: 'TypeScript', variant: 'tertiary' },
])

const removeFilter = (id: number) => {
  setFilters(prev => prev.filter(filter => filter.id !== id))
}

return (
  <div className='flex flex-wrap gap-2'>
    {filters.map(filter => (
      <FilterChip
        key={filter.id}
        label={filter.label}
        variant={filter.variant}
        onRemove={() => removeFilter(filter.id)}
      />
    ))}
  </div>
)
```

### Category Tags

```tsx
const categories = ['Design', 'Development', 'Marketing', 'Sales']

return (
  <div className='flex flex-wrap gap-2'>
    {categories.map(category => (
      <FilterChip
        key={category}
        label={category}
        variant='neutral-outline'
        onClick={() => handleCategoryClick(category)}
      />
    ))}
  </div>
)
```
