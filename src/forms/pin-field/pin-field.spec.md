# PinField Component Specification

## Overview

`PinField` is a fully controlled React component for entering numeric PIN codes with automatic focus
management. It ensures only numeric input and provides proper accessibility support, making it ideal
for authentication flows, verification processes, and secure data entry.

## API

### Props

| Prop         | Type                      | Default        | Required | Description                                         |
| ------------ | ------------------------- | -------------- | -------- | --------------------------------------------------- |
| `value`      | `string`                  | -              | ✅       | Current value of the PIN field (controlled)         |
| `onChange`   | `(value: string) => void` | -              | ✅       | Callback fired when the PIN value changes           |
| `label`      | `ReactNode`               | -              | ❌       | Label text to display above the pin field           |
| `helperText` | `ReactNode`               | -              | ❌       | Helper text to display below the pin field          |
| `error`      | `ReactNode`               | -              | ❌       | Error message for invalid state                     |
| `disabled`   | `boolean`                 | `false`        | ❌       | Whether the component is disabled                   |
| `onComplete` | `(value: string) => void` | -              | ❌       | Callback fired when all digits are entered          |
| `digits`     | `number`                  | `6`            | ❌       | Number of digits for the PIN                        |
| `required`   | `boolean`                 | `false`        | ❌       | Whether the pin field is required                   |
| `secure`     | `boolean`                 | `false`        | ❌       | Whether to show the pin values as dots for security |
| `className`  | `string`                  | -              | ❌       | Additional CSS classes                              |
| `id`         | `string`                  | auto-generated | ❌       | ID attribute for the field                          |
| `name`       | `string`                  | -              | ❌       | Name attribute for form submission                  |

## Features

### 1. Fully Controlled Component

- The component is **always controlled** via the `value` and `onChange` props
- No internal state management for the PIN value
- Parent component has full control over the value

### 2. Numeric Input Only

- Only accepts numeric digits (0-9)
- Uses `inputMode="numeric"` for optimal mobile keyboard
- Uses `pattern="[0-9]*"` for browser validation
- Automatically filters out non-numeric characters

### 3. Automatic Focus Management

- Automatically focuses the next input when a digit is entered
- Backspace moves to previous input when current is empty
- Arrow keys navigate between inputs
- Focus moves intelligently during paste operations

### 4. Paste Support

- Full paste support for entire PIN codes
- Automatically formats pasted content to numeric-only
- Handles pasted strings longer than the digit count
- Focuses the appropriate input after paste

### 5. Configurable Digit Length

- Default 6 digits but configurable via `digits` prop
- Can be set to any reasonable length (e.g., 4, 6, 8)
- All logic adapts to the configured digit count

### 6. Security Mode

- Optional `secure` prop shows dots (•) instead of numbers
- Maintains the same interaction patterns as non-secure mode
- Useful for password/PIN entry scenarios

### 7. Error Handling

- Displays error messages below the field
- Error state changes input styling
- Uses coral red (danger) color for error indication
- Proper ARIA attributes for accessibility

### 8. Form Integration

- Hidden input with `name` prop for form submission
- Works seamlessly with native form submission
- Supports `required` attribute for validation
- Proper form field semantics

### 9. Accessibility

- Proper ARIA labels and descriptions
- `role="group"` for the input container
- `aria-invalid` on error state
- `aria-disabled` when disabled
- Required fields show asterisk (\*) with `aria-label="required"` for screen readers
- Screen reader friendly with proper announcements
- Keyboard navigation support

## Behavior

### Input Behavior

1. Typing a digit fills the current input and moves to next
2. Backspace on empty input moves to previous and clears it
3. Backspace on filled input clears it
4. Arrow Left/Right navigate between inputs
5. Paste operation fills multiple inputs at once
6. Selecting an input selects its content

### Value Management

- Value is always a string of digits
- Empty positions are represented as empty strings
- Trailing empty strings are removed from the value
- Maximum length is enforced by `digits` prop

### Completion Callback

- `onComplete` is called when all digits are filled
- Only fires when the exact number of digits is entered
- Useful for auto-submission or validation triggers

## Styling

### Input Styling

- Fixed primary color theme (coral)
- Border: `border-primary/30`
- Focus: `border-primary` with `ring-primary/20`
- Error: `border-danger` with `bg-danger/5`
- Size: 36px × 36px (w-9 h-9)
- Text: Center-aligned, semibold, foreground color
- Disabled: 50% opacity with pointer-events disabled

### Layout

- Inputs are centered with 8px gap (gap-2)
- Full width container (w-full)
- Label above with 8px margin (mb-2)
- Required asterisk in danger color (coral red) with 4px left margin
- Helper text/error below with 8px margin (mt-2)

## Mobile Considerations

### Numeric Keyboard

- Uses `inputMode="numeric"` for numeric keyboard on mobile
- Uses `pattern="[0-9]*"` for iOS numeric keyboard
- No alphabetic input possible

### Touch Interactions

- Input size (36px) meets minimum touch target size
- Adequate spacing (8px) prevents mis-taps
- Auto-focus works smoothly on mobile browsers

## Examples

### Basic Usage

```tsx
const [pin, setPin] = useState('')

<PinField
  label="Enter PIN"
  value={pin}
  onChange={setPin}
  helperText="Enter your 6-digit PIN code"
/>
```

### With Completion Handler

```tsx
const [pin, setPin] = useState('')

<PinField
  label="Enter PIN"
  value={pin}
  onChange={setPin}
  onComplete={(value) => {
    console.log('PIN completed:', value)
    // Auto-submit or validate
  }}
/>
```

### In a Form

```tsx
const [pin, setPin] = useState('')

<form onSubmit={handleSubmit}>
  <PinField
    label="Enter PIN"
    name="pin"
    value={pin}
    onChange={setPin}
    required
  />
  <button type="submit">Submit</button>
</form>
```

### Custom Digit Length

```tsx
const [pin, setPin] = useState('')

<PinField
  label="Enter 4-digit PIN"
  value={pin}
  onChange={setPin}
  digits={4}
/>
```

### Secure Mode

```tsx
const [pin, setPin] = useState('')

<PinField
  label="Enter Secure PIN"
  value={pin}
  onChange={setPin}
  secure
/>
```

### With Error

```tsx
const [pin, setPin] = useState('')
const [error, setError] = useState('')

<PinField
  label="Enter PIN"
  value={pin}
  onChange={(value) => {
    setPin(value)
    setError('')
  }}
  error={error}
/>
```

## Browser Compatibility

- Modern browsers with ES6+ support
- React 19+
- Mobile browsers with `inputMode` support
- iOS Safari with `pattern` attribute support

## Implementation Notes

### Component Pattern

- Uses **Regular Pattern** (not Compound)
- Direct component with props-based API
- No sub-components or context required

### Ref Forwarding

- Forwards ref to the container div
- Individual inputs managed via internal refs array

### Performance

- Uses `React.useCallback` for stable event handlers
- Minimal re-renders with proper dependency arrays
- No unnecessary state updates

### Testing

- Unit tests cover all interactions
- Accessibility testing included
- Form integration testing
- Paste behavior testing
- Keyboard navigation testing

## Migration from Previous Version

If upgrading from a previous version with `variant`, `defaultValue`, or `autoSubmit`:

1. **Remove `variant` prop**: The component now uses a fixed primary style
2. **Replace `defaultValue` with controlled state**: Use `value` and `onChange`
3. **Remove `autoSubmit`**: Implement form submission logic in `onComplete` callback
4. **Update uncontrolled usage**: Convert to controlled with `useState`

Example migration:

```tsx
// Before
<PinField
  variant="primary"
  defaultValue=""
  autoSubmit
/>

// After
const [pin, setPin] = useState('')
<PinField
  value={pin}
  onChange={setPin}
  onComplete={(value) => {
    // Handle completion (e.g., submit form)
  }}
/>
```
