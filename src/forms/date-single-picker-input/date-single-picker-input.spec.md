# DateSinglePickerInput Specification

## Overview

`DateSinglePickerInput` is a date picker component that wraps a native HTML `<input type="date">`
for optimal accessibility and browser support. It displays a formatted text input that triggers the
browser's native date picker when clicked or focused.

## Component Pattern

**Regular Pattern** - This component follows the Regular Pattern as it directly enhances a single
HTML element (`<input type="date">`) and aligns with browser standards.

## Architecture

The component consists of two main elements:

1. **Visible Text Input**: A `TextInput` component that displays the formatted date value
2. **Hidden Date Input**: A native `<input type="date">` that provides the actual date picking
   functionality

### Implementation Details

- The visible text input is wrapped in a clickable/focusable `<div>` that triggers the date picker
- The hidden date input is screen-reader accessible but visually hidden
- The forwarded ref is attached to the hidden date input for programmatic access
- The visible input does not use `readOnly` or custom `tabIndex` to avoid conflicts with the wrapper

## Props

### Core Props

| Prop        | Type                        | Required | Description                                         |
| ----------- | --------------------------- | -------- | --------------------------------------------------- |
| `value`     | `string`                    | Yes      | The date value in ISO format (YYYY-MM-DD)           |
| `onChange`  | `(value: string) => void`   | Yes      | Callback when the date value changes                |
| `label`     | `string \| React.ReactNode` | No       | Label displayed above the input                     |
| `formatter` | `(value: string) => string` | No       | Custom formatter for displaying the date            |
| `min`       | `string`                    | No       | Minimum date allowed (ISO format, HTML5 validation) |
| `max`       | `string`                    | No       | Maximum date allowed (ISO format, HTML5 validation) |

### Inherited Props

Extends all `TextInputProps` except `type`, `value`, and `onChange`:

- `helperText` - Helper text displayed below the input
- `error` - Error message (triggers error state)
- `disabled` - Disables the input
- `required` - Marks the field as required
- `className` - Additional CSS classes

## Behavior

### Date Picker Activation

The date picker is triggered by:

- Clicking anywhere on the wrapper div
- Focusing on the wrapper div
- Uses `showPicker()` API when available, falls back to `focus()`

### Value Formatting

- **Input**: ISO date string (YYYY-MM-DD)
- **Display**: Formatted using `formatter` prop or default formatter
- **Default Format**: Locale-specific short date (e.g., "Jul 29, 2025")

### Validation

- Uses native HTML5 validation with `min` and `max` attributes
- Browser automatically prevents selection of dates outside the range
- Additional validation can be implemented via `error` prop

## Accessibility

- **ARIA**: The hidden date input has proper `aria-label` derived from the `label` prop
- **Screen Readers**: The visible input is marked with `aria-hidden="true"` to prevent duplication
- **Keyboard**: The native date input is fully keyboard accessible
- **Focus Management**: The wrapper handles focus to trigger the date picker seamlessly

## Usage Examples

### Basic Usage

```tsx
import { DateSinglePickerInput } from '@dimasbaguspm/versaur/forms'

function MyForm() {
  const [date, setDate] = useState('2025-07-29')

  return (
    <DateSinglePickerInput
      value={date}
      onChange={setDate}
      label='Date of Birth'
      helperText='Select your birth date'
    />
  )
}
```

### With Min/Max Validation

```tsx
<DateSinglePickerInput
  value={date}
  onChange={setDate}
  label='Appointment Date'
  helperText='Select a date within the next 30 days'
  min='2025-08-01'
  max='2025-08-31'
/>
```

### With Custom Formatter

```tsx
<DateSinglePickerInput
  value={date}
  onChange={setDate}
  label='Event Date'
  formatter={date => {
    if (!date) return ''
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }}
/>
```

### With Error State

```tsx
<DateSinglePickerInput
  value={date}
  onChange={setDate}
  label='Required Date'
  error={date === '' ? 'Date is required' : undefined}
  required
/>
```

## Browser Compatibility

- Modern browsers support `<input type="date">` natively
- The `showPicker()` API is supported in most modern browsers
- Fallback to `focus()` for older browsers
- Date formatting uses `Intl.DateTimeFormat` (widely supported)

## Testing

Tests should verify:

- Date value changes are propagated correctly
- Min/max validation works with native HTML5
- Custom formatter displays the correct formatted value
- Error states are displayed appropriately
- The wrapper triggers the date picker on click/focus
- Accessibility attributes are correctly set
- Snapshot matches expected HTML structure

## Design System Integration

- Uses `TextInput` for consistent styling
- Calendar icon from `lucide-react` (left content)
- Follows Versaur color palette and spacing
- Supports all `TextInput` states (error, disabled, etc.)

## Future Enhancements

Potential improvements:

- Range selection mode (two date inputs)
- Custom date picker overlay for more control
- Time component integration
- Localization support for date formats
- Date validation utilities
