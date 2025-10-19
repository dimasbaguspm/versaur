# DateSinglePickerInput Specification

## Overview

`DateSinglePickerInput` is a date picker component that wraps a native HTML `<input type="date">`
for optimal accessibility and browser support. It displays a button-styled input (using
`TextInputAsButton`) that triggers the browser's native date picker when clicked.

## Component Pattern

**Regular Pattern** - This component follows the Regular Pattern as it directly enhances a single
HTML element (`<input type="date">`) and aligns with browser standards.

## Architecture

The component consists of two main elements:

1. **Visible Button Input**: A `TextInputAsButton` component that displays the formatted date value
   and triggers the picker
2. **Hidden Date Input**: A native `<input type="date">` that provides the actual date picking
   functionality

### Implementation Details

- The visible button triggers the native date picker via `showPicker()` or `focus()` fallback
- The hidden date input is screen-reader accessible but visually hidden
- The forwarded ref is attached to the hidden date input for programmatic access
- Uses `TextInputAsButton` for consistent styling and proper button semantics

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

Extends all `TextInputAsButtonProps` except `value`, `onClick`, and `onChange`:

- `helperText` - Helper text displayed below the button
- `error` - Error message (triggers error state)
- `disabled` - Disables the button and date input
- `required` - Marks the field as required
- `className` - Additional CSS classes
- `leftContent` - Custom left content (defaults to Calendar icon)
- `rightContent` - Optional right content

## Behavior

### Date Picker Activation

The date picker is triggered by:

- Clicking the visible button
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
- **Screen Readers**: The button is fully accessible and announces the current date value
- **Keyboard**: The native date input is fully keyboard accessible
- **Focus Management**: Button click triggers the native date picker seamlessly
- **Semantic HTML**: Uses proper button element for interactive control

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

- Uses `TextInputAsButton` for consistent button-styled input appearance
- Calendar icon from `lucide-react` (left content)
- Follows Versaur color palette and spacing
- Supports all `TextInputAsButton` states (error, disabled, etc.)

## Future Enhancements

Potential improvements:

- Range selection mode (two date inputs)
- Custom date picker overlay for more control
- Time component integration
- Localization support for date formats
- Date validation utilities
