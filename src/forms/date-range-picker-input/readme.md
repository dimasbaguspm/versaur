# DateRangePickerInput

A Versaur form component for selecting a date range, styled and accessible, using the Calendar primitive with range support.

## Usage

```tsx
import { DateRangePickerInput } from '@/forms/date-range-picker-input'

<DateRangePickerInput
  value={["2025-07-26", "2025-07-30"]}
  onChange={setValue}
  label="Date range"
/>
```

- Value is a tuple of ISO 8601 date strings or nulls: `[start, end]`
- Uses the Calendar primitive (should support type='range')
- Follows Versaur UI and accessibility standards
