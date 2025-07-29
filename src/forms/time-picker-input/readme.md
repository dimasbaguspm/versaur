# TimePickerInput

A design-system-aligned time input for Versaur UI. It uses a styled `TextInput` with `type='time'` and an optional clock icon, providing a consistent UI and native browser picker support.

## Features
- Styled `TextInput` for display, with optional icon
- Native time picker support (mobile & desktop)
- Fully controlled (accepts `value` and `onChange`)
- Accessibility: all standard input props supported

## Usage
```tsx
import { TimePickerInput } from '@/forms/time-picker-input'

function Example() {
  const [value, setValue] = useState('09:00')
  return (
    <TimePickerInput
      label="Select time"
      value={value}
      onChange={setValue}
    />
  )
}
```

## Props
| Name        | Type                       | Description                                      |
|-------------|----------------------------|--------------------------------------------------|
| value       | `string`                   | Time value in `HH:MM` (24-hour) format           |
| onChange    | `(value: string) => void`  | Called when the time value changes               |
| label       | `ReactNode`                | Input label                                      |
| ...rest     | `TextInputProps`           | All other TextInput props                        |

## Accessibility
- Uses native `<input type='time'>` for best browser and assistive tech support.
- All ARIA and label props are passed through to the input.

## Implementation Notes
- No overlay or hidden input is used; the native input is styled directly.
- The value is always in `HH:MM` (24-hour) format.
