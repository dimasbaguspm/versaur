# TimePickerModalInput

A modal-based time picker input for Versaur UI, following Material 3 guidelines (no clock UI, just hour, minute, and AM/PM segment selection).

## Features
- Modal dialog for time selection
- Two numeric inputs (hour, minute)
- AM/PM segment selection
- Integrates with Versaur Modal, TextInput, and Button
- Strictly typed props, accessible, and mobile-friendly

## Usage
```tsx
import { TimePickerModalInput } from '@/components/time-picker-modal-input'

function Example() {
  const [time, setTime] = useState('02:30 PM')
  return (
    <TimePickerModalInput
      value={time}
      onChange={setTime}
      label="Select time"
      helperText="Choose a time for your meeting"
    />
  )
}
```

## Props
See `types.ts` for full prop documentation.
