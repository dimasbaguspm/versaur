
# ChipMultipleInput

Multi-select chip group for forms, using checkbox input pattern. Follows Versaur UI conventions for accessibility, theming, and composition.

## Features
- Multiple selection (checkbox pattern)
- Customizable color variants, shape, and size
- Optional custom check icon per option
- Accessible, keyboard navigable, mobile-first
- Compound pattern with context for shared state

## Usage
```tsx
import { ChipMultipleInput } from 'versaur/forms/chip-multiple-input'

function Example() {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipMultipleInput
      name="fruits"
      value={value}
      onChange={setValue}
      variant="primary"
      label="Select fruits"
      helperText="Choose one or more"
    >
      <ChipMultipleInput.Option value="apple">Apple</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="banana">Banana</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="cherry">Cherry</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}
```

## Props
### `<ChipMultipleInput />`
- `name` (string, required): Name for the checkbox group
- `value` (string[], required): Selected values
- `onChange` (function, required): Callback for value changes
- `variant` (string): Color variant (primary, secondary, etc.)
- `shape` ('circle' | 'rounded'): Chip shape (default: 'circle')
- `size` ('sm' | 'md' | 'lg'): Chip size (default: 'sm')
- `label` (ReactNode): Optional label above the group
- `helperText` (ReactNode): Optional helper below the group
- `error` (ReactNode): Error message for invalid state

### `<ChipMultipleInput.Option />`
- `value` (string, required): Option value
- `children` (ReactNode, required): Option label
- `check` (ReactNode): Custom check icon
- `defaultCheck` (boolean): Show default check icon

## Accessibility
- Uses checkbox input for native accessibility
- Keyboard navigation and ARIA attributes included

## Theming
- All variants, shapes, and sizes use Versaur design system and Tailwind
