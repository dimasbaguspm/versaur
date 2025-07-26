# ChipInput

A flexible, accessible multi-select chip input component for Versaur UI, supporting custom check icons, shape, and size variants.

## Features
- Multiple selection (checkbox pattern)
- Customizable color variants (primary, secondary, etc.)
- Shape and size control at the group level (circle/rounded, sm/md/lg)
- Optional and customizable check icon per option
- Fully accessible and keyboard navigable
- Mobile-first, responsive design

## Usage

```tsx
import { ChipInput } from 'versaur/forms/chip-input'

function Example() {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipInput
      name="fruits"
      value={value}
      onChange={setValue}
      variant="primary" // color variant
      shape="circle"    // 'circle' (default) or 'rounded'
      size="sm"         // 'sm' (default), 'md', or 'lg'
      label="Select fruits"
      helperText="Choose your favorite fruits"
    >
      <ChipInput.Option value="apple">Apple</ChipInput.Option>
      <ChipInput.Option value="banana">Banana</ChipInput.Option>
      <ChipInput.Option value="cherry">Cherry</ChipInput.Option>
    </ChipInput>
  )
}
```

### Custom Check Icon

```tsx
import { Star } from 'lucide-react'

<ChipInput name="custom" value={value} onChange={setValue}>
  <ChipInput.Option value="star" check={<Star size={16} className="text-warning" />}>Star</ChipInput.Option>
  <ChipInput.Option value="circle" defaultCheck>Circle</ChipInput.Option>
  <ChipInput.Option value="none">No Check</ChipInput.Option>
</ChipInput>
```

## Props

### `<ChipInput />`
- `name` (string, required): Name for the input group
- `value` (string[], required): Selected values
- `onChange` (function, required): Callback for value changes
- `variant` (string): Color variant (primary, secondary, etc.)
- `shape` ('circle' | 'rounded'): Chip shape (default: 'circle')
- `size` ('sm' | 'md' | 'lg'): Chip size (default: 'sm')
- `label` (ReactNode): Optional label above the group
- `helperText` (ReactNode): Optional helper text below the group
- `error` (ReactNode): Error message for invalid state

### `<ChipInput.Option />`
- `value` (string, required): Value for this option
- `children` (ReactNode, required): Option label
- `check` (ReactNode): Custom check icon (overrides default)
- `defaultCheck` (boolean): Show default check icon if true

## Accessibility
- Uses native checkbox semantics for group and options
- Keyboard and screen reader accessible
- Meets WCAG 2.1 AA color and interaction standards

## Testing
- See `__tests__/chip-input.test.tsx` for full test coverage and usage with Storybook stories

---
For more details, see the Versaur UI documentation.

