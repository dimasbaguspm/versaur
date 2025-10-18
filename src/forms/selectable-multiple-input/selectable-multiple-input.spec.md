# SelectableMultipleInput Component Specification

## Overview

The **SelectableMultipleInput** component is a checkbox input with custom content and an optional
checkbox indicator. It follows the **Regular Pattern** as it directly enhances the native HTML
checkbox input element with custom rendering capabilities. The component supports both static
content and dynamic rendering through function-as-children, allowing content to change based on the
checked state.

## Component Pattern

**Regular Pattern** - This component directly enhances the native `<input type="checkbox">` HTML
element, providing a familiar developer experience with proper checkbox semantics and accessibility
features while offering flexible content rendering.

## Features

- ✅ **Browser-Standard Behavior**: Aligns with native checkbox input element
- ✅ **Flexible Content Rendering**: Supports ReactNode or function-as-children
- ✅ **Dynamic Content**: Children can be a function receiving checked state
- ✅ **Configurable Checkbox Placement**: Position checkbox at top, center, or bottom
- ✅ **Optional Checkbox Display**: Can hide checkbox for fully custom rendering
- ✅ **Full Accessibility**: Proper ARIA roles, label association, and keyboard navigation
- ✅ **Primary Color Indicator**: Uses Versaur's primary coral color for checked state
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Mobile-first approach with proper touch targets

## API Reference

### Props

Extends all native `InputHTMLAttributes<HTMLInputElement>` properties (except `type` and
`children`).

| Prop                | Type                                             | Default      | Description                                            |
| ------------------- | ------------------------------------------------ | ------------ | ------------------------------------------------------ |
| `value`             | `string`                                         | -            | The value of the checkbox input                        |
| `children`          | `ReactNode \| ((checked: boolean) => ReactNode)` | - (required) | Content to display or function receiving checked state |
| `checked`           | `boolean`                                        | -            | Whether the input is checked (controlled)              |
| `checkboxPlacement` | `'top' \| 'center' \| 'bottom'`                  | `'center'`   | The placement of the checkbox relative to content      |
| `hideCheckbox`      | `boolean`                                        | `false`      | Whether to hide the checkbox indicator                 |
| `disabled`          | `boolean`                                        | `false`      | Whether the input is disabled                          |
| `id`                | `string`                                         | auto         | Custom ID (auto-generated if not provided)             |
| `className`         | `string`                                         | -            | Additional CSS classes for the label container         |

### Visual Style

The SelectableMultipleInput uses the **primary** variant with Versaur's coral color
(`--color-primary`) for the checkbox indicator when checked.

**Container:**

- Display: `flex` with configurable alignment
- Gap: `gap-3` (12px between checkbox and content)
- Padding: `p-4` (16px)
- Border: `border-b border-border` (bottom border)
- Hover: `hover:bg-neutral-light`
- Cursor: `cursor-pointer`

**Checkbox Indicator (when visible):**

- Size: `h-6 w-6` (24px × 24px)
- Border: `border border-primary/40` (soft primary border when unchecked)
- Border Radius: `rounded` (4px)
- Background (unchecked): `bg-white`
- Background (checked): `bg-primary`
- Border (checked): `border-primary`
- Checkmark: CSS-based checkmark using `::after` pseudo-element
- Checkmark dimensions: `w-[6px] h-[12px]` (scaled for larger size)
- Checkmark style: White border forming checkmark shape (45° rotated)
- Transition: `transition-all duration-200`
- Focus ring: `focus:ring-2 focus:ring-primary/20 focus:ring-offset-2`
- Active: `active:scale-95` (subtle scale on click)

**Content:**

- Text: `text-base text-foreground`
- Flex: `flex-1 min-w-0` (takes remaining space, allows truncation)

**Disabled State:**

- Opacity: 50%
- Cursor: `cursor-not-allowed`
- Checkbox: Same opacity reduction

### States

#### Normal

- Default interactive state
- Shows checkbox with white background and border
- Content rendered normally
- Hover applies light background

#### Checked

- `checked` is `true`
- Checkbox has primary background with white checkmark
- Function-as-children receives `true` as argument
- `aria-checked="true"`

#### Unchecked

- `checked` is `false`
- Checkbox shows empty with white background
- Function-as-children receives `false` as argument
- `aria-checked="false"`

#### Disabled

- Cannot be selected or interacted with
- Reduced opacity (50%)
- `cursor-not-allowed` on hover
- Input has `disabled` attribute
- Tab index is -1 (not focusable)

#### Hidden Checkbox

- `hideCheckbox` is `true`
- Checkbox indicator not rendered
- Only content is displayed
- User manages visual checked state through children

## Checkbox Placement

The `checkboxPlacement` prop controls the vertical alignment of the checkbox relative to the
content:

- **`top`**: `items-start` - Checkbox aligns to the top of the content
- **`center`**: `items-center` - Checkbox vertically centered (default)
- **`bottom`**: `items-end` - Checkbox aligns to the bottom of the content

This is particularly useful for multi-line content or when content has varying heights.

## Function-as-Children Pattern

The component supports rendering content dynamically based on the checked state:

```tsx
<SelectableMultipleInput value='option1' checked={isChecked}>
  {checked => (
    <div>
      <p>{checked ? '✓ Selected' : 'Not selected'}</p>
    </div>
  )}
</SelectableMultipleInput>
```

This pattern allows for:

- Dynamic styling based on checked state
- Conditional content rendering
- Custom visual indicators
- Full control over content appearance

## Accessibility

### ARIA Attributes

- **`role="checkbox"`**: Identifies the element as a checkbox
- **`aria-checked`**: Reflects the current checked state (true/false)
- **`aria-label`**: Set to "Select {value}" for screen readers
- **`aria-hidden`**: Applied to checkbox indicator (presentational)
- **`id`**: Auto-generated or custom, associates label with input
- **`tabIndex`**: 0 for focusable, -1 when disabled

### Keyboard Support

- **Space/Enter**: Toggle the checkbox option
- **Tab**: Navigate to/from the checkbox option

### Screen Reader Support

- Announces the checkbox role and current state
- Reads the aria-label based on the value
- Announces state changes when toggled
- Content is accessible as part of the label

### Focus Management

- Visible focus ring on keyboard navigation
- Label element receives focus (interactive container)
- Focus follows browser-standard behavior
- Disabled inputs are not focusable (tabindex="-1")

## Usage Examples

### Basic Usage

```tsx
import { SelectableMultipleInput } from '@/forms/selectable-multiple-input'

const [selected, setSelected] = useState<string[]>([])

<SelectableMultipleInput
  value='option1'
  checked={selected.includes('option1')}
  onChange={e => {
    setSelected(sel =>
      e.target.checked ? [...sel, 'option1'] : sel.filter(v => v !== 'option1')
    )
  }}
>
  First Option
</SelectableMultipleInput>
```

### Dynamic Content with Function

```tsx
<SelectableMultipleInput
  value='premium'
  checked={selected.includes('premium')}
  onChange={e => {
    setSelected(sel => (e.target.checked ? [...sel, 'premium'] : sel.filter(v => v !== 'premium')))
  }}
>
  {checked => (
    <div>
      <p className='font-medium'>Premium Plan</p>
      <p className='text-sm'>{checked ? '✓ Currently active' : 'Upgrade to premium'}</p>
    </div>
  )}
</SelectableMultipleInput>
```

### Custom Placement

```tsx
<SelectableMultipleInput
  value='option1'
  checked={selected.includes('option1')}
  onChange={e => {
    setSelected(sel => (e.target.checked ? [...sel, 'option1'] : sel.filter(v => v !== 'option1')))
  }}
  checkboxPlacement='top'
>
  <div>
    <p className='font-medium'>Multi-line Option</p>
    <p className='text-sm'>This has multiple lines of content</p>
  </div>
</SelectableMultipleInput>
```

### Hidden Checkbox with Custom Styling

```tsx
<SelectableMultipleInput
  value='custom'
  checked={selected.includes('custom')}
  onChange={e => {
    setSelected(sel => (e.target.checked ? [...sel, 'custom'] : sel.filter(v => v !== 'custom')))
  }}
  hideCheckbox
>
  {checked => (
    <div className={checked ? 'bg-primary-soft border-2 border-primary' : 'bg-neutral-light'}>
      <p>{checked ? '✓ ' : ''}Custom Styled Option</p>
    </div>
  )}
</SelectableMultipleInput>
```

### Disabled State

```tsx
<SelectableMultipleInput value='disabled' checked={false} disabled>
  Disabled Option
</SelectableMultipleInput>
```

## Implementation Notes

### Controlled Component

The component is **controlled**, meaning the parent component must manage the `checked` state and
provide an `onChange` handler. This ensures predictable behavior when managing multiple selections.

### Multiple Selection Usage

When using multiple SelectableMultipleInput components together, each maintains its own checked
state. The parent component typically manages an array of selected values:

```tsx
const [selected, setSelected] = useState<string[]>(['option1'])

<>
  <SelectableMultipleInput
    value='option1'
    checked={selected.includes('option1')}
    onChange={e => {
      setSelected(sel =>
        e.target.checked
          ? [...sel, 'option1']
          : sel.filter(v => v !== 'option1')
      )
    }}
  >
    Option 1
  </SelectableMultipleInput>
  <SelectableMultipleInput
    value='option2'
    checked={selected.includes('option2')}
    onChange={e => {
      setSelected(sel =>
        e.target.checked
          ? [...sel, 'option2']
          : sel.filter(v => v !== 'option2')
      )
    }}
  >
    Option 2
  </SelectableMultipleInput>
</>
```

### Screen-Reader Only Input

The actual checkbox input is hidden using the `sr-only` utility class but remains accessible to
screen readers and keyboard navigation, ensuring full accessibility while providing custom visual
presentation.

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports all standard checkbox input features
- ✅ Graceful degradation with semantic HTML

## Related Components

- **SelectableSingleInput**: For single selection with radio buttons
- **CheckboxInput**: For traditional checkbox styling
- **SwitchInput**: For boolean toggle controls
- **RadioInput**: For traditional radio button styling
- **SelectInput**: For dropdown selection
