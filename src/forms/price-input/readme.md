# PriceInput

Versaur PriceInput is a specialized input component for Indonesian Rupiah (IDR) currency entry. It
enforces proper Rupiah formatting conventions with thousands separators (dots) and decimal
separators (commas), while providing real-time validation to prevent invalid input patterns.

## Features

- **Rupiah Format Validation**: Enforces Indonesian currency format (e.g., 10.000 or 10.000,50)
- **Real-time Input Sanitization**: Removes invalid characters and patterns while typing
- **Flexible Input Support**: Accepts various valid formats (10000, 10.000, 10.000,50)
- **Controlled Component**: Raw string value passed to `onChange` for external processing
- **Accessibility**: Full keyboard support with proper input patterns
- **Mobile Optimized**: Numeric input mode for mobile keyboards

## Valid Formats

- `10000` - Simple digits
- `10.000` - Thousands separator (dot)
- `10.000,50` - With decimal separator (comma)
- `1.000.000,99` - Multiple thousands separators

## Invalid Formats (Automatically Prevented)

- `10...1` - Multiple consecutive dots
- `10,1,1` - Multiple commas
- `10,,1` - Consecutive commas
- `10.000.00` - Decimal should use comma, not dot

## Usage

```tsx
import { PriceInput } from '@/forms/price-input'

const [price, setPrice] = useState('')

<PriceInput
  value={price}
  onChange={setPrice}
  label='Amount'
  helperText='Enter price in IDR format (e.g., 10.000 or 10.000,50)'
  error={error}
  allowNegative={false}
/>
```

## Helper Functions

The component includes utility functions for working with Rupiah values:

```tsx
import {
  parseRupiahToNumber,
  formatNumberToRupiah,
  isValidRupiahFormat,
} from '@/forms/price-input/helpers'

// Convert Rupiah string to number
const numericValue = parseRupiahToNumber('10.000,50') // 10000.5

// Format number to Rupiah display
const displayValue = formatNumberToRupiah(10000.5) // '10.000,50'

// Validate Rupiah format
const isValid = isValidRupiahFormat('10.000,50') // true
```
