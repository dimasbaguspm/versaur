# ChipInput

A compound, controlled input component for selecting multiple options using a checkbox pattern. Follows Versaur's design system and accessibility standards.

## Features
- Multiple selection using checkboxes
- Compound pattern: `<ChipInput>` with `<ChipInput.Option>`
- Strictly typed props
- Mobile-first, responsive, and accessible
- Supports variants, sizes, error, and disabled states
- Tree-shakable subpath exports

## Usage
```tsx
import { ChipInput } from '@/components/chip-input'

const [value, setValue] = useState<string[]>([])

<ChipInput
  name='fruits'
  value={value}
  onChange={setValue}
  aria-label='Select fruits'
>
  <ChipInput.Option value='apple'>Apple</ChipInput.Option>
  <ChipInput.Option value='banana'>Banana</ChipInput.Option>
  <ChipInput.Option value='cherry'>Cherry</ChipInput.Option>
</ChipInput>
```

## Props
### ChipInput
- `name: string` — Form field name
- `value: string[]` — Controlled selected values
- `onChange: (value: string[]) => void` — Change handler
- `variant?: string` — Visual variant (primary, secondary, etc.)
- `size?: string` — Size (xs, sm, md, lg, xl)
- `disabled?: boolean` — Disable all options
- `error?: boolean` — Error state
- `children: ReactNode` — Option atoms

### ChipInput.Option
- `value: string` — Option value
- `children: ReactNode` — Option label
- `disabled?: boolean` — Disable this option
- `id?: string` — Custom id
- `className?: string` — Custom classes

## Accessibility
- Uses native `<input type='checkbox'>` for each option
- Keyboard and screen reader accessible
- Follows WCAG 2.1 AA standards

## Variants & Sizes
- Supports all Versaur color and size variants via `variant` and `size` props

## Testing
- See `__tests__/chip-input.test.tsx` for React Testing Library tests
- Stories in `chip-input.stories.tsx` for interactive docs

## Storybook
- Group stories show basic, disabled, error, and variant usage

## Contribution
- Add new variants in `helpers.ts`
- Extend option props in `types.ts`
- Follow compound/context pattern for consistency
