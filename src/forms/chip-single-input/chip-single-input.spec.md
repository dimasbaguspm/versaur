# ChipSingleInput Component Specification

## Overview

`ChipSingleInput` is a single-select chip group component that uses the radio input pattern for form
inputs. It follows the **Compound Pattern with Context** for coordinated state management between
parent and sub-components. The component uses semantic HTML with `<fieldset>` and `<legend>`
elements for proper form grouping and accessibility.

## Component Pattern

**Type:** Compound Pattern with Context  
**Use Case:** Form input requiring single selection from multiple options with flexible visual
presentation

### Why Compound + Context Pattern?

- Sub-components (`Option`) need access to shared state (selected value, size, readOnly, disabled)
- Parent component manages selection state across all options
- Radio input coordination requires synchronized name attributes and selection logic
- Provides flexible composition while maintaining semantic relationships

## Features

- **Single selection**: Radio input pattern (only one option can be selected)
- **Semantic HTML**: Uses `<fieldset>` and `<legend>` for proper form grouping
- **Controlled component**: Fully controlled via `value` and `onChange` props
- **Size variations**: Supports `sm`, `md` (default), and `lg` sizes matching button component
- **ReadOnly state**: Non-interactive visual presentation of selected state
- **Text truncation**: Optional `maxWidth` prop enables text truncation for long labels
- **Icon support**: Supports icon-only chips or chips with icons and text
- **Accessibility**: Native radio input with proper ARIA attributes and keyboard navigation
- **Primary variant**: Single color scheme using primary color (coral) for consistency
- **Circle shape**: Rounded-full design (default and only shape)

## API

### `<ChipSingleInput />`

Root component that provides context and renders the chip group container using semantic
`<fieldset>` element.

#### Props

| Prop         | Type                     | Default | Description                                                  |
| ------------ | ------------------------ | ------- | ------------------------------------------------------------ |
| `name`       | `string`                 | -       | **Required.** Name attribute for the radio group             |
| `value`      | `string`                 | -       | Current selected value (controlled)                          |
| `onChange`   | `(value: string) => {}`  | -       | Callback when selection changes                              |
| `size`       | `'sm' \| 'md' \| 'lg'`   | `'md'`  | Size of all chip options                                     |
| `label`      | `ReactNode`              | -       | Label text displayed as `<legend>` element                   |
| `required`   | `boolean`                | `false` | Shows asterisk (\*) in legend to indicate required field     |
| `helperText` | `ReactNode`              | -       | Helper text displayed below the chip group                   |
| `error`      | `ReactNode`              | -       | Error message for invalid state (displays with alert role)   |
| `disabled`   | `boolean`                | `false` | Disables all chip options (uses fieldset disabled attribute) |
| `readOnly`   | `boolean`                | `false` | Makes chip group read-only (visible but not interactive)     |
| `maxWidth`   | `string`                 | -       | Maximum width for individual chips (enables text truncation) |
| `className`  | `string`                 | -       | Additional CSS classes for the fieldset container            |
| ...rest      | `FieldsetHTMLAttributes` | -       | Standard fieldset attributes (excluding onChange)            |
| `error`      | `ReactNode`              | -       | Error message for invalid state (displays with alert role)   |
| `disabled`   | `boolean`                | `false` | Disables all chip options                                    |
| `readOnly`   | `boolean`                | `false` | Makes chip group read-only (visible but not interactive)     |
| `maxWidth`   | `string`                 | -       | Maximum width for individual chips (enables text truncation) |
| `className`  | `string`                 | -       | Additional CSS classes for the container                     |
| ...rest      | `HTMLAttributes`         | -       | Standard div attributes (excluding conflicting input props)  |

### `<ChipSingleInput.Option />`

Individual chip option sub-component rendered as a radio input with label.

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
import { ChipSingleInput } from 'versaur/forms/chip-single-input'

function Example() {
  const [value, setValue] = useState<string>('cherry')

  return (
    <ChipSingleInput name='fruits' value={value} onChange={setValue} label='Select a fruit'>
      <ChipSingleInput.Option value='apple'>Apple</ChipSingleInput.Option>
      <ChipSingleInput.Option value='banana'>Banana</ChipSingleInput.Option>
      <ChipSingleInput.Option value='cherry'>Cherry</ChipSingleInput.Option>
    </ChipSingleInput>
  )
}
```

### Size Variations

```tsx
<ChipSingleInput name='small' value={value} onChange={setValue} size='sm'>
  <ChipSingleInput.Option value='a'>Small</ChipSingleInput.Option>
</ChipSingleInput>

<ChipSingleInput name='medium' value={value} onChange={setValue} size='md'>
  <ChipSingleInput.Option value='b'>Medium</ChipSingleInput.Option>
</ChipSingleInput>

<ChipSingleInput name='large' value={value} onChange={setValue} size='lg'>
  <ChipSingleInput.Option value='c'>Large</ChipSingleInput.Option>
</ChipSingleInput>
```

### ReadOnly State

```tsx
<ChipSingleInput
  name='readonly-example'
  value='selected'
  onChange={setValue}
  readOnly
  label='Read-only selection'
>
  <ChipSingleInput.Option value='selected'>Selected</ChipSingleInput.Option>
  <ChipSingleInput.Option value='other'>Other</ChipSingleInput.Option>
</ChipSingleInput>
```

### Icon-Only Chips

```tsx
import { Star, Heart, Sparkles } from 'lucide-react'
import { Icon } from 'versaur/primitive'
;<ChipSingleInput name='icons' value={value} onChange={setValue}>
  <ChipSingleInput.Option value='star' aria-label='Star'>
    <Icon as={Star} color='inherit' size='sm' />
  </ChipSingleInput.Option>
  <ChipSingleInput.Option value='heart' aria-label='Heart'>
    <Icon as={Heart} color='inherit' size='sm' />
  </ChipSingleInput.Option>
</ChipSingleInput>
```

### Text Truncation

```tsx
<ChipSingleInput name='truncate' value={value} onChange={setValue} maxWidth='120px'>
  <ChipSingleInput.Option value='short'>Short</ChipSingleInput.Option>
  <ChipSingleInput.Option value='long'>Very Long Text That Will Truncate</ChipSingleInput.Option>
</ChipSingleInput>
```

### With Error State

```tsx
<ChipSingleInput
  name='required'
  value={value}
  onChange={setValue}
  label='Required selection'
  required
  error={!value ? 'Please select an option' : undefined}
>
  <ChipSingleInput.Option value='option1'>Option 1</ChipSingleInput.Option>
  <ChipSingleInput.Option value='option2'>Option 2</ChipSingleInput.Option>
</ChipSingleInput>
```

### With Helper Text

```tsx
<ChipSingleInput
  name='helper'
  value={value}
  onChange={setValue}
  label='Preferences'
  helperText='Choose the option that best fits your needs'
>
  <ChipSingleInput.Option value='beginner'>Beginner</ChipSingleInput.Option>
  <ChipSingleInput.Option value='advanced'>Advanced</ChipSingleInput.Option>
</ChipSingleInput>
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

- Uses `<fieldset>` element to group related radio inputs
- Uses `<legend>` element for the group label (proper form semantics)
- Native `<input type="radio">` elements for accessibility
- Each option has a unique `id` and associated `<label>`

### ARIA Attributes

- Fieldset's `disabled` attribute properly disables all radio inputs
- Error messages use `role="alert"` for screen reader announcements
- Icon-only chips require `aria-label` on the Option component
- Radio group relationship is implicit through fieldset structure

### Keyboard Navigation

- **Tab**: Navigate between chip options
- **Space/Enter**: Select focused chip
- **Arrow keys**: Navigate within radio group (native browser behavior)
- Fieldset disabled state prevents all keyboard interaction

### Screen Reader Support

- Legend announces the group label before options
- Label announces: "[Option text], radio button, [checked/not checked]"
- Required asterisk is announced with aria-label="required"
- Error messages are announced when present
- Helper text provides additional context

## Context API

### ChipSingleInputContext

```typescript
interface ChipSingleInputContextValue {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  name: string
  value?: string
  maxWidth?: string
  onChange?: (value: string) => void
}
```

### Usage in Custom Components

```tsx
import { useChipSingleInputContext } from './context'

function CustomOption() {
  const context = useChipSingleInputContext()
  // Access shared state: context.value, context.size, etc.
}
```

## Testing

### Key Test Scenarios

1. **Selection behavior**: Only one option can be selected at a time
2. **Size variations**: Renders correct size classes
3. **ReadOnly state**: Prevents interaction while showing selected state
4. **Disabled state**: Prevents interaction and shows disabled styling
5. **Error display**: Shows error message with alert role
6. **Icon support**: Renders icon-only and icon+text chips
7. **Text truncation**: Applies maxWidth and truncates long text
8. **Accessibility**: Proper ARIA attributes and keyboard navigation

### Example Test

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ChipSingleInput } from './chip-single-input'

test('allows single selection', () => {
  const onChange = vi.fn()
  render(
    <ChipSingleInput name='test' value='' onChange={onChange}>
      <ChipSingleInput.Option value='a'>A</ChipSingleInput.Option>
      <ChipSingleInput.Option value='b'>B</ChipSingleInput.Option>
    </ChipSingleInput>
  )

  fireEvent.click(screen.getByLabelText('A'))
  expect(onChange).toHaveBeenCalledWith('a')

  fireEvent.click(screen.getByLabelText('B'))
  expect(onChange).toHaveBeenCalledWith('b')
})
```

## Implementation Notes

### Why Use Fieldset and Legend?

1. **Semantic HTML**: Fieldset and legend are the standard, semantic way to group radio inputs
2. **Accessibility**: Screen readers announce the legend before each option, providing context
3. **Browser alignment**: Native disabled state cascades to all inputs within fieldset
4. **Standards compliance**: Follows HTML5 form best practices and WCAG guidelines

### Why Remove Shape and Variant?

1. **Consistency**: Single shape (circle) and variant (primary) reduces API surface and maintains
   design consistency
2. **Browser alignment**: Radio inputs have standard circular visual representation
3. **Simplicity**: Fewer props make the component easier to use and maintain
4. **Design system**: Aligns with Versaur's principle of clarity and simplicity

### Why Add ReadOnly?

ReadOnly state is useful for:

- Displaying selections in review/confirmation screens
- Progressive disclosure workflows
- Non-editable form sections

### Size Alignment with Button

Chip sizes match button sizes for visual harmony when used together in forms and UI compositions.

## Related Components

- **Button**: Shares size specifications
- **RadioInput**: Alternative form input for radio selection
- **ChipMultipleInput**: Multiple selection variant using checkboxes
- **SelectInput**: Dropdown-based single selection

## Browser Support

Supports all modern browsers with native radio input support:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)
