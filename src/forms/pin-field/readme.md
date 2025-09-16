# PinField Component

A PIN field component that accepts exactly 6 digits with automatic focus management, validation, and
accessibility features.

## Features

- **6-digit input**: Exactly 6 individual input fields for PIN entry
- **Numeric only**: Automatically validates and accepts only numeric characters (0-9)
- **Auto-focus management**: Automatically moves focus between inputs as user types
- **Keyboard navigation**: Support for arrow keys and backspace navigation
- **Paste support**: Handles pasting of 6-digit codes with automatic distribution
- **Security mode**: Optional secure mode that masks input with dots
- **Accessibility**: Full ARIA support and keyboard navigation
- **Form integration**: Works seamlessly with HTML forms
- **Auto-submit**: Optional auto-submission when PIN is complete

## Usage

### Basic PIN Field

```tsx
import { PinField } from '@versaur/ui'

function App() {
  return <PinField label='Enter PIN' helperText='Enter your 6-digit PIN code' />
}
```

### Controlled PIN Field

```tsx
import { PinField } from '@versaur/ui'
import { useState } from 'react'

function App() {
  const [pin, setPin] = useState('')

  return (
    <PinField
      label='Enter PIN'
      value={pin}
      onChange={setPin}
      onComplete={value => {
        console.log('PIN completed:', value)
      }}
    />
  )
}
```

### Secure PIN Field

```tsx
import { PinField } from '@versaur/ui'

function App() {
  return <PinField label='Secure PIN' secure helperText='PIN will be hidden for security' />
}
```

### Form Integration

```tsx
import { PinField } from '@versaur/ui'

function App() {
  return (
    <form onSubmit={handleSubmit}>
      <PinField label='PIN' name='pin' required autoSubmit />
    </form>
  )
}
```

## API Reference

### Props

- `variant`: Visual style variant (primary, secondary, etc.)
- `label`: Label text to display above the PIN field
- `helperText`: Helper text to display below the PIN field
- `error`: Error message for invalid state
- `disabled`: Whether the component is disabled
- `value`: Current value of the PIN field (controlled)
- `defaultValue`: Default value for uncontrolled usage
- `onChange`: Callback fired when the PIN value changes
- `onComplete`: Callback fired when all 6 digits are entered
- `autoSubmit`: Whether to automatically submit when complete
- `secure`: Whether to show PIN values as dots for security
- `required`: Whether the PIN field is required
- `name`: Name attribute for form submission
- `id`: ID for the PIN field group
- `className`: Custom className for styling

## Accessibility

The PinField component follows WCAG 2.1 AA guidelines:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Error state announcements

## Keyboard Interactions

- **Arrow Keys**: Navigate between PIN inputs
- **Backspace**: Delete current digit and move to previous input
- **Tab**: Move focus out of the PIN field
- **Numbers (0-9)**: Enter digits and auto-advance
- **Paste**: Distribute pasted content across inputs
