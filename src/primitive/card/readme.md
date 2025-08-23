# Card

A clickable container component for displaying structured information with a consistent layout. Card
provides a simple props-based API that handles avatar, title, subtitle, badge, and supplementary
information placement automatically.

## Features

- **Simple Props-Based API**: Clean and intuitive interface with dedicated props for each element
- **Always Clickable**: All cards are interactive by default with hover effects
- **Structured Layout**: Consistent placement of avatar, title, subtitle, badge, and supplementary
  info
- **Multiple Sizes**: Configurable padding sizes from xs to xl
- **Shape Options**: Rounded or square border radius
- **Built on Tile**: Leverages the existing Tile component for consistent styling
- **Accessibility Ready**: Semantic HTML structure with proper interaction states

## Usage

### Basic Card

```tsx
import { Card, Avatar, Badge } from '@versaur/ui'

function BasicCard() {
  return (
    <Card
      title='John Doe'
      subtitle='Software Engineer • San Francisco'
      onClick={() => console.log('Card clicked!')}
    />
  )
}
```

### Account Card Example

Recreating the original example with the new API:

```tsx
import { Card, Avatar, Badge } from '@versaur/ui'

function AccountCard({ account, onClick }) {
  return (
    <Card
      avatar={<Avatar shape='rounded'>{nameToInitials(account.name)}</Avatar>}
      title={account.name}
      subtitle={getSubtitle()}
      badge={
        <Badge color='secondary' shape='square'>
          {capitalize(account.type)}
        </Badge>
      }
      supplementaryInfo={
        <span className='text-green-600 font-medium'>{formatAmount(account.amount)}</span>
      }
      onClick={onClick}
    />
  )
}
```

### Card with All Props

```tsx
function FullCard() {
  return (
    <Card
      size='lg'
      shape='rounded'
      avatar={<Avatar shape='rounded'>JD</Avatar>}
      title='John Doe'
      subtitle='Software Engineer'
      badge={<Badge color='secondary'>Available</Badge>}
      supplementaryInfo='$2,847.32'
      onClick={handleClick}
      className='max-w-md'
    />
  )
}
```

### Simple Card

For minimal layouts with just title:

```tsx
function SimpleCard() {
  return <Card title='Simple Card Title' onClick={handleClick} />
}
```

## Props

| Prop                | Type        | Default     | Description                                                  |
| ------------------- | ----------- | ----------- | ------------------------------------------------------------ |
| `title` \*          | `ReactNode` | -           | Main title text (required)                                   |
| `subtitle`          | `ReactNode` | -           | Subtitle or description text                                 |
| `avatar`            | `ReactNode` | -           | Avatar element to display on the left side                   |
| `badge`             | `ReactNode` | -           | Badge element to display in the bottom section               |
| `supplementaryInfo` | `ReactNode` | -           | Info to display on the right side (amounts, status)          |
| `size`              | `string`    | `'md'`      | Size variant: `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` |
| `shape`             | `string`    | `'rounded'` | Shape variant: `'rounded'` \| `'square'`                     |
| `className`         | `string`    | -           | Additional CSS classes                                       |
| `onClick`           | `function`  | -           | Click handler (all cards are clickable)                      |
| `...props`          | -           | -           | All other HTML div attributes                                |

\*Required prop

## Layout Structure

The Card component automatically arranges elements in this structure:

```
┌─────────────────────────────────────┐
│ [Avatar] [Title]                    │
│          [Subtitle]                 │
│                                     │
│          [Badge]    [Supplementary] │
└─────────────────────────────────────┘
```

- **Avatar**: Optional, displayed on the left side
- **Title**: Required, main heading text
- **Subtitle**: Optional, secondary text below title
- **Badge**: Optional, status or category indicator
- **Supplementary Info**: Optional, additional information (usually on the right)

## Styling

### Sizes

- **xs**: `p-2` - Extra small padding
- **sm**: `p-3` - Small padding
- **md**: `p-4` - Medium padding (default)
- **lg**: `p-6` - Large padding
- **xl**: `p-8` - Extra large padding

### Shapes

- **rounded**: `rounded-lg` - Rounded corners (default)
- **square**: `rounded-none` - Sharp corners

### Interactive States

All cards include:

- `cursor-pointer` - Indicates clickable state
- `hover:bg-gray-50` - Subtle background change on hover
- `transition-colors` - Smooth hover transitions

## Accessibility

The Card component is built with accessibility in mind:

- Uses semantic HTML structure (div with appropriate attributes)
- Supports keyboard navigation and focus states
- Click handlers work with both mouse and keyboard
- ARIA attributes can be added via props
- Compatible with screen readers

## Design System Integration

Card is built on top of existing Versaur components:

- **Tile**: Foundation component providing the base styling and layout
- **Text**: For title and subtitle typography (internal usage)
- **Avatar**: For profile pictures and user representations (passed as prop)
- **Badge**: For status indicators and labels (passed as prop)

This ensures visual consistency across the entire design system while providing a specialized card
interface.

## Migration from Compound Pattern

If you're migrating from the old compound pattern:

```tsx
// Old compound pattern ❌
<Card clickable onClick={handleClick}>
  <Card.Header>
    <Text as="h3">John Doe</Text>
    <Badge>Status</Badge>
  </Card.Header>
  <Card.Body>
    <div className="flex items-start gap-4">
      <Avatar>JD</Avatar>
      <div>...</div>
    </div>
  </Card.Body>
</Card>

// New props-based API ✅
<Card
  title="John Doe"
  subtitle="Software Engineer"
  avatar={<Avatar>JD</Avatar>}
  badge={<Badge>Status</Badge>}
  onClick={handleClick}
/>
```
