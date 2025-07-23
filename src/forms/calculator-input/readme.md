# CalculatorInput

A calculator input field that opens a modal calculator for numeric entry. Follows the same pattern as TimePickerInput, wrapping the Calculator component in a Modal for accessible, mobile-friendly numeric input.

## Usage

```tsx
import { CalculatorInput } from '@/components/calculator-input'

<CalculatorInput value={amount} onChange={setAmount} placeholder="Enter amount" />
```

- Uses the Modal compound pattern for the calculator popup
- Fully type-safe, accessible, and mobile-friendly
- See `TimePickerInput` for a similar pattern
