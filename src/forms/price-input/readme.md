
# PriceInput

Versaur PriceInput is a styled input for IDR price entry. It allows digits, comma, dot, and minus as number separators, and passes the raw string value to `onChange`. No currency formatting or parsing is performed.

## Features
- Accepts digits, comma, dot, and minus (if `allowNegative`)
- Passes raw string value to `onChange`
- All standard input attributes supported
- Controlled usage only
- Mobile-friendly, accessible, and type-safe

## Usage
```tsx
import { PriceInput } from '@/forms/price-input'

const [price, setPrice] = useState('')

<PriceInput
  value={price}
  onChange={setPrice}
  label='Amount'
  helperText='Enter price in IDR (accepts digits, comma, dot, minus)'
  error={error}
  allowNegative
/>
```
