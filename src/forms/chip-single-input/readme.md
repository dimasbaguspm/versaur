
# ChipSingleInput

Single-select chip group for forms, using radio input pattern. Follows Versaur UI conventions for accessibility, theming, and composition.

## Features
- Single selection (radio pattern)
- Customizable color variants, shape, and size
- Optional custom check icon per option
- Accessible, keyboard navigable, mobile-first
- Compound pattern with context for shared state

## Usage
```tsx
import { ChipSingleInput } from 'versaur/forms/chip-single-input'

function Example() {
  const [value, setValue] = useState<string>('apple')
  return (
    <ChipSingleInput
      name="fruit"
      value={value}
      onChange={setValue}
      variant="primary"
      label="Select a fruit"
      helperText="Choose one"
    >
      <ChipSingleInput.Option value="apple">Apple</ChipSingleInput.Option>
      <ChipSingleInput.Option value="banana">Banana</ChipSingleInput.Option>
      <ChipSingleInput.Option value="cherry">Cherry</ChipSingleInput.Option>
    </ChipSingleInput>
  )
}
```

## Props
### `<ChipSingleInput />`
- `name` (string, required): Name for the radio group
- `value` (string, required): Selected value
- `onChange` (function, required): Callback for value changes
- `variant` (string): Color variant (primary, secondary, etc.)
- `shape` ('circle' | 'rounded'): Chip shape (default: 'circle')
- `size` ('sm' | 'md' | 'lg'): Chip size (default: 'sm')
- `label` (ReactNode): Optional label above the group
- `helperText` (ReactNode): Optional helper below the group
- `error` (ReactNode): Error message for invalid state

### `<ChipSingleInput.Option />`
- `value` (string, required): Option value
- `children` (ReactNode, required): Option label
- `check` (ReactNode): Custom check icon
- `defaultCheck` (boolean): Show default check icon

## Accessibility
- Uses radio input for native accessibility
- Keyboard navigation and ARIA attributes included

## Theming
- All variants, shapes, and sizes use Versaur design system and Tailwind
