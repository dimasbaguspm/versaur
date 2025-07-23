# SegmentSingleInput

A segmented radio input component that provides tab-like visual design for single selection within forms. Based on the radio input pattern but with enhanced styling for segment appearance.

## Features

- **Tab-like Design**: Visual segments that connect seamlessly like browser tabs
- **Radio Functionality**: Built on standard HTML radio inputs for accessibility
- **Single Selection**: Only one option can be selected at a time
- **Versaur Color System**: Supports all brand variants and semantic colors
- **Form Integration**: Works with form libraries and validation
- **Responsive**: Mobile-first design with touch-friendly targets
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation

## Usage

```tsx
import { SegmentSingleInput } from '@versaur/ui'

// Basic usage
<SegmentSingleInput name="transaction-type" defaultValue="expense">
  <SegmentSingleInput.Option value="expense">
    💸 Expense
  </SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="income">
    📈 Income
  </SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="transfer">
    🔄 Transfer
  </SegmentSingleInput.Option>
</SegmentSingleInput>

// With labels and helper text
<SegmentSingleInput 
  name="payment-method"
  label="Payment Method"
  helperText="Choose your preferred payment method"
  defaultValue="card"
>
  <SegmentSingleInput.Option value="cash">Cash</SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="card">Card</SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="bank">Bank Transfer</SegmentSingleInput.Option>
</SegmentSingleInput>

// Controlled component
const [paymentMethod, setPaymentMethod] = useState('card')

<SegmentSingleInput 
  name="payment-method"
  value={paymentMethod}
  onChange={setPaymentMethod}
>
  <SegmentSingleInput.Option value="cash">Cash</SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="card">Card</SegmentSingleInput.Option>
  <SegmentSingleInput.Option value="bank">Bank Transfer</SegmentSingleInput.Option>
</SegmentSingleInput>
```

## Props

### SegmentSingleInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | **Required.** The name attribute for the radio group |
| `variant` | `string` | `'primary'` | Color variant (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger) |
| `size` | `string` | `'md'` | Size variant (sm, md, lg) |
| `label` | `ReactNode` | - | Label text to display above the segment group |
| `helperText` | `ReactNode` | - | Helper text to display below the segment group |
| `error` | `ReactNode` | - | Error message for invalid state |
| `defaultValue` | `string` | - | Default selected value (uncontrolled) |
| `value` | `string` | - | Current selected value (controlled) |
| `onChange` | `(value: string) => void` | - | Callback when value changes |
| `disabled` | `boolean` | `false` | Disable the entire segment group |

### SegmentSingleInput.Option

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | **Required.** The value for this segment option |
| `children` | `ReactNode` | - | **Required.** The option label content |
| `disabled` | `boolean` | `false` | Disable this specific option |

## Variants

### Color Variants
- `primary` (Coral) - Main actions, CTAs
- `secondary` (Sage) - Secondary actions
- `tertiary` (Mist) - Subtle backgrounds
- `ghost` (Slate) - Minimal styling
- `neutral` (Light Gray) - Neutral surfaces
- `success` - Positive feedback
- `info` - Information
- `warning` - Caution
- `danger` - Errors, destructive actions

Each variant also supports an `-outline` version for different styling needs.

### Sizes
- `sm` - Compact segments for dense layouts
- `md` - Standard size for most use cases
- `lg` - Larger segments for emphasis

## Accessibility

- Uses semantic radio input elements for screen reader compatibility
- Supports keyboard navigation (Tab, Arrow keys, Space/Enter)
- Provides proper ARIA labels and descriptions
- Maintains focus management and announces state changes
- Error messages are properly associated with `role="alert"`

## Browser Support

Works in all modern browsers that support CSS Grid and Flexbox. Tested with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
