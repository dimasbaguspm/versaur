# ChipMultipleInput Component Specification

## Overview

`ChipMultipleInput` is a multiple-select chip group component that uses the checkbox input pattern
for form inputs. It follows the **Compound Pattern with Context** for coordinated state management
between parent and sub-components. The component uses semantic HTML with `<fieldset>` and `<legend>`
elements for proper form grouping and accessibility.

## Component Pattern

**Type:** Compound Pattern with Context  
**Use Case:** Form input requiring multiple selection from multiple options with flexible visual
presentation

### Why Compound + Context Pattern?

- Sub-components (`Option`) need access to shared state (selected values, size, readOnly, disabled)
- Parent component manages selection state across all options
- Checkbox input coordination requires synchronized name attributes and selection logic
- Provides flexible composition while maintaining semantic relationships

## Features

- **Multiple selection**: Checkbox input pattern (multiple options can be selected)
- **Semantic HTML**: Uses `<fieldset>` and `<legend>` for proper form grouping
- **Controlled component**: Fully controlled via `value` and `onChange` props
- **Size variations**: Supports `sm`, `md` (default), and `lg` sizes matching button component
- **ReadOnly state**: Non-interactive visual presentation of selected state
- **Text truncation**: Optional `maxWidth` prop enables text truncation for long labels
- **Icon support**: Supports icon-only chips or chips with icons and text
- **Accessibility**: Native checkbox input with proper ARIA attributes and keyboard navigation
- **Primary variant**: Single color scheme using primary color (coral) for consistency
- **Circle shape**: Rounded-full design (default and only shape)

## API

### `<ChipMultipleInput />`

Root component that provides context and renders the chip group container using semantic
`<fieldset>` element.

#### Props

| Prop         | Type                      | Default | Description                                                  |
| ------------ | ------------------------- | ------- | ------------------------------------------------------------ |
| `name`       | `string`                  | -       | **Required.** Name attribute for the checkbox group          |
| `value`      | `string[]`                | `[]`    | Current selected values array (controlled)                   |
| `onChange`   | `(value: string[]) => {}` | -       | Callback when selection changes                              |
| `size`       | `'sm' \| 'md' \| 'lg'`    | `'md'`  | Size of all chip options                                     |
| `label`      | `ReactNode`               | -       | Label text displayed as `<legend>` element                   |
| `required`   | `boolean`                 | `false` | Shows asterisk (\*) in legend to indicate required field     |
| `helperText` | `ReactNode`               | -       | Helper text displayed below the chip group                   |
| `error`      | `ReactNode`               | -       | Error message for invalid state (displays with alert role)   |
| `disabled`   | `boolean`                 | `false` | Disables all chip options (uses fieldset disabled attribute) |
| `readOnly`   | `boolean`                 | `false` | Makes chip group read-only (visible but not interactive)     |
| `maxWidth`   | `string`                  | -       | Maximum width for individual chips (enables text truncation) |
| `className`  | `string`                  | -       | Additional CSS classes for the fieldset container            |
| ...rest      | `FieldsetHTMLAttributes`  | -       | Standard fieldset attributes (excluding onChange)            |

### `<ChipMultipleInput.Option />`

Individual chip option sub-component rendered as a checkbox input with label.

#### Props

| Prop        | Type                  | Default | Description                                         |
| ----------- | --------------------- | ------- | --------------------------------------------------- |
| `value`     | `string`              | -       | **Required.** Value for this option                 |
| `children`  | `ReactNode`           | -       | **Required.** Label content (text, icons, or both)  |
| `disabled`  | `boolean`             | -       | Override disabled state for individual option       |
| `className` | `string`              | -       | Additional CSS classes for the chip label           |
| `id`        | `string`              | -       | Custom ID (auto-generated if not provided)          |
| ...rest     | `InputHTMLAttributes` | -       | Standard input attributes (excluding type and name) |

## Usage Examples

### Basic Usage

```tsx
import { ChipMultipleInput } from 'versaur/forms/chip-multiple-input'

function Example() {
  const [value, setValue] = useState<string[]>(['apple', 'cherry'])

  return (
    <ChipMultipleInput name='fruits' value={value} onChange={setValue} label='Select fruits'>
      <ChipMultipleInput.Option value='apple'>Apple</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='banana'>Banana</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='cherry'>Cherry</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}
```

### Size Variations

```tsx
<ChipMultipleInput name='small' value={value} onChange={setValue} size='sm'>
  <ChipMultipleInput.Option value='a'>Small</ChipMultipleInput.Option>
</ChipMultipleInput>

<ChipMultipleInput name='medium' value={value} onChange={setValue} size='md'>
  <ChipMultipleInput.Option value='b'>Medium</ChipMultipleInput.Option>
</ChipMultipleInput>

<ChipMultipleInput name='large' value={value} onChange={setValue} size='lg'>
  <ChipMultipleInput.Option value='c'>Large</ChipMultipleInput.Option>
</ChipMultipleInput>
```

### ReadOnly State

```tsx
<ChipMultipleInput
  name='readonly-example'
  value={['selected1', 'selected2']}
  onChange={setValue}
  readOnly
  label='Read-only selection'
>
  <ChipMultipleInput.Option value='selected1'>Selected 1</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='selected2'>Selected 2</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='other'>Other</ChipMultipleInput.Option>
</ChipMultipleInput>
```

### Icon-Only Chips

```tsx
import { Star, Heart, Sparkles } from 'lucide-react'
import { Icon } from 'versaur/primitive'
;<ChipMultipleInput name='icons' value={value} onChange={setValue}>
  <ChipMultipleInput.Option value='star' aria-label='Star'>
    <Icon as={Star} color='inherit' size='sm' />
  </ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='heart' aria-label='Heart'>
    <Icon as={Heart} color='inherit' size='sm' />
  </ChipMultipleInput.Option>
</ChipMultipleInput>
```

### Text Truncation

```tsx
<ChipMultipleInput name='truncate' value={value} onChange={setValue} maxWidth='120px'>
  <ChipMultipleInput.Option value='short'>Short</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='long'>
    Very Long Text That Will Truncate
  </ChipMultipleInput.Option>
</ChipMultipleInput>
```

### With Error State

```tsx
<ChipMultipleInput
  name='required'
  value={value}
  onChange={setValue}
  label='Required selection'
  required
  error={value.length === 0 ? 'Please select at least one option' : undefined}
>
  <ChipMultipleInput.Option value='option1'>Option 1</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='option2'>Option 2</ChipMultipleInput.Option>
</ChipMultipleInput>
```

### With Helper Text

```tsx
<ChipMultipleInput
  name='helper'
  value={value}
  onChange={setValue}
  label='Preferences'
  helperText='Choose all options that apply to you'
>
  <ChipMultipleInput.Option value='beginner'>Beginner</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='intermediate'>Intermediate</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value='advanced'>Advanced</ChipMultipleInput.Option>
</ChipMultipleInput>
```

## Styling

### Design Tokens

The component uses the following design system tokens:

- **Primary color**: `--color-primary` (#e07a5f - coral)
- **Primary hover**: `--color-primary-soft` (#fff8f6)
- **Primary border**: `--color-primary-bold` (#a95a3a)
- **Border**: `--color-border` (#e0e0e0)
- **Text**: `--color-foreground` (#2d3748)
- **Error**: `--color-danger` (#e06650)

### Size Specifications

Sizes match the button component for consistency:

| Size | Height | Padding (horizontal) | Text Size | Min Width |
| ---- | ------ | -------------------- | --------- | --------- |
| `sm` | `28px` | `12px`               | `14px`    | `36px`    |
| `md` | `36px` | `16px`               | `14px`    | `40px`    |
| `lg` | `40px` | `32px`               | `18px`    | `44px`    |

### Visual States

- **Default**: White background, border, primary hover
- **Selected**: Primary background, primary border, white text
- **Hover**: Primary soft background, primary bold border
- **Focus**: Primary light border
- **Disabled**: 50% opacity, not-allowed cursor
- **ReadOnly**: Default cursor, no pointer events

## Accessibility

### Semantic HTML

- Uses `<fieldset>` element to group related checkbox inputs
- Uses `<legend>` element for the group label (proper form semantics)
- Native `<input type="checkbox">` elements for accessibility
- Each option has a unique `id` and associated `<label>`

### ARIA Attributes

- Fieldset's `disabled` attribute properly disables all checkbox inputs
- Error messages use `role="alert"` for screen reader announcements
- Icon-only chips require `aria-label` on the Option component
- Checkbox group relationship is implicit through fieldset structure

### Keyboard Navigation

- **Tab**: Navigate between chip options
- **Space/Enter**: Toggle focused chip
- Fieldset disabled state prevents all keyboard interaction

### Screen Reader Support

- Legend announces the group label before options
- Label announces: "[Option text], checkbox, [checked/not checked]"
- Required asterisk is announced with aria-label="required"
- Error messages are announced when present
- Helper text provides additional context

## Context API

### ChipMultipleInputContext

```typescript
interface ChipMultipleInputContextValue {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  name: string
  value?: string[]
  maxWidth?: string
  onChange?: (value: string[]) => void
}
```

### Usage in Custom Components

```tsx
import { useChipMultipleInputContext } from './context'

function CustomOption() {
  const context = useChipMultipleInputContext()
  // Access shared state: context.value, context.size, etc.
}
```

## Testing

### Key Test Scenarios

1. **Selection behavior**: Multiple options can be selected simultaneously
2. **Deselection**: Clicking selected chips removes them from selection
3. **Size variations**: Renders correct size classes
4. **ReadOnly state**: Prevents interaction while showing selected state
5. **Disabled state**: Prevents interaction and shows disabled styling
6. **Error display**: Shows error message with alert role
7. **Icon support**: Renders icon-only and icon+text chips
8. **Text truncation**: Applies maxWidth and truncates long text
9. **Accessibility**: Proper ARIA attributes and keyboard navigation

### Example Test

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ChipMultipleInput } from './chip-multiple-input'

test('allows multiple selection', () => {
  const onChange = vi.fn()
  render(
    <ChipMultipleInput name='test' value={[]} onChange={onChange}>
      <ChipMultipleInput.Option value='a'>A</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='b'>B</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )

  fireEvent.click(screen.getByLabelText('A'))
  expect(onChange).toHaveBeenCalledWith(['a'])

  fireEvent.click(screen.getByLabelText('B'))
  expect(onChange).toHaveBeenCalledWith(['a', 'b'])
})
```

## Implementation Notes

### Why Use Fieldset and Legend?

1. **Semantic HTML**: Fieldset and legend are the standard, semantic way to group checkbox inputs
2. **Accessibility**: Screen readers announce the legend before each option, providing context
3. **Browser alignment**: Native disabled state cascades to all inputs within fieldset
4. **Standards compliance**: Follows HTML5 form best practices and WCAG guidelines

### Why Remove Shape and Variant?

1. **Consistency**: Single shape (circle) and variant (primary) reduces API surface and maintains
   design consistency
2. **Browser alignment**: Checkbox inputs have standard visual representation
3. **Simplicity**: Fewer props make the component easier to use and maintain
4. **Design system**: Aligns with Versaur's principle of clarity and simplicity

### Why Add ReadOnly?

ReadOnly state is useful for:

- Displaying selections in review/confirmation screens
- Progressive disclosure workflows
- Non-editable form sections

### Size Alignment with Button

Chip sizes match button sizes for visual harmony when used together in forms and UI compositions.

### Checkbox vs Radio

The key difference between `ChipMultipleInput` and `ChipSingleInput`:

- **ChipMultipleInput**: Uses `<input type="checkbox">` for multiple selection
- **ChipSingleInput**: Uses `<input type="radio">` for single selection
- Both share the same visual design and API structure for consistency

## Related Components

- **Button**: Shares size specifications
- **CheckboxInput**: Alternative form input for checkbox selection
- **ChipSingleInput**: Single selection variant using radio buttons
- **SelectableMultipleInput**: Alternative multiple selection input

## Browser Support

Supports all modern browsers with native checkbox input support:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)
