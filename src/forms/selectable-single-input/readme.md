# SelectableSingleInput

A radio input component with a custom label (ReactNode) and a checked icon, following Versaur's code style and accessibility best practices.

## Features
- Custom label (any ReactNode)
- Shows a checkmark icon when selected
- Strictly typed props
- Accessible: proper ARIA roles, keyboard navigation, and semantic tags
- Mobile-first, Tailwind v4 styling

## Usage
```tsx
import { SelectableSingleInput } from '@/forms/selectable-single-input'

<SelectableSingleInput
  value="option1"
  label={<span>Option 1</span>}
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>
```

## Props
See `types.ts` for full prop documentation.
