# CheckboxInput

A compound checkbox input component with customizable styling and accessibility features. Built with the Versaur design system and follows browser standards for familiar behavior.

## Features

- **Custom Styling**: Uses `::after` pseudo-elements for checkmark instead of browser defaults
- **Compound Pattern**: Flexible composition with `CheckboxInput.Option` sub-components
- **Accessibility**: Full ARIA support and keyboard navigation
- **Variant System**: Complete support for Versaur color variants and outline styles
- **Responsive Sizes**: Small, medium, and large size options
- **Layout Options**: Vertical and horizontal layouts
- **Error Handling**: Built-in error states and validation feedback

## Basic Usage

```tsx
import { CheckboxInput } from '@versaur/ui'

function MyForm() {
  return (
    <CheckboxInput label="Choose your preferences">
      <CheckboxInput.Option value="newsletter">
        Newsletter subscription
      </CheckboxInput.Option>
      <CheckboxInput.Option value="marketing">
        Marketing emails
      </CheckboxInput.Option>
      <CheckboxInput.Option value="updates">
        Product updates
      </CheckboxInput.Option>
    </CheckboxInput>
  )
}
```

## With Descriptions

```tsx
<CheckboxInput label="Privacy settings">
  <CheckboxInput.Option
    value="analytics"
    description="Help us improve by sharing anonymous usage data"
  >
    Analytics tracking
  </CheckboxInput.Option>
  <CheckboxInput.Option
    value="marketing"
    description="Receive personalized offers and recommendations"
  >
    Marketing communications
  </CheckboxInput.Option>
</CheckboxInput>
```

## Variants and Sizes

```tsx
<CheckboxInput variant="success" size="lg">
  <CheckboxInput.Option value="terms">
    I accept the terms and conditions
  </CheckboxInput.Option>
</CheckboxInput>
```

## Props

### CheckboxInput Props

- `variant`: Visual style variant (primary, secondary, success, etc.)
- `size`: Size variant (sm, md, lg)
- `label`: Label text for the checkbox group
- `helperText`: Helper text below the group
- `error`: Error message for validation
- `direction`: Layout direction (vertical, horizontal)
- `disabled`: Disable all options

### CheckboxInput.Option Props

- `children`: The option label content
- `description`: Optional description text
- `value`: The option value
- Standard HTML input props (onChange, checked, etc.)
