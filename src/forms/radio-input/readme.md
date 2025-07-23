# RadioInput

A radio button group component that provides single-selection functionality with Versaur's design system styling.

## Usage

```tsx
import { RadioInput } from '@versaur/components'

function App() {
  return (
    <RadioInput name="payment-method" label="Payment Method">
      <RadioInput.Option value="credit-card">
        Credit Card
      </RadioInput.Option>
      <RadioInput.Option value="paypal">
        PayPal
      </RadioInput.Option>
      <RadioInput.Option value="bank-transfer">
        Bank Transfer
      </RadioInput.Option>
    </RadioInput>
  )
}
```

## Features

- **Single Selection**: Uses radio inputs underneath for proper single-selection behavior
- **Design System Integration**: Supports all Versaur color variants and sizes
- **Accessibility**: Built with ARIA standards and keyboard navigation
- **Flexible Layout**: Horizontal and vertical direction options
- **Error States**: Built-in error handling and validation display
- **Descriptions**: Optional description text for each option

## Variants

- **Core**: `primary`, `secondary`, `tertiary`, `ghost`, `neutral`
- **Outline**: All core variants with `-outline` suffix
- **Semantic**: `success`, `info`, `warning`, `danger` (and their outline versions)

## Sizes

- `sm` - Small radio buttons and text
- `md` - Medium radio buttons and text (default)
- `lg` - Large radio buttons and text

## Props

### RadioInput

- `name` (required): Radio group name attribute
- `variant`: Visual style variant
- `size`: Size variant
- `label`: Label text displayed above the group
- `helperText`: Helper text displayed below the group
- `error`: Error message (displays in red)
- `direction`: Layout direction (`horizontal` | `vertical`)
- `disabled`: Disable all options

### RadioInput.Option

- `value` (required): Value for the radio option
- `children`: Option label content
- `description`: Optional description text
- Standard radio input props (`disabled`, `onChange`, etc.)

## Comparison with CheckboxInput

- **RadioInput**: Radio buttons for single selection
- **CheckboxInput**: Checkboxes for multiple selection
- **Shared**: Same design variants, sizes, and layout options
