# SelectInput

A styled select dropdown component that follows browser standards and provides a professional appearance with Versaur's harmonious color palette.

## Features

- **Semantic Variants**: Support for all Versaur color variants (primary, secondary, tertiary, ghost, neutral) and semantic states (success, info, warning, danger)
- **Outline Variants**: Each variant includes an outline version for subtle styling
- **Accessibility**: Full ARIA support with proper labeling and error states
- **Error Handling**: Built-in error state with validation messages
- **Helper Text**: Optional helper text for additional guidance
- **Placeholder Support**: Optional placeholder text for better UX
- **Disabled State**: Proper disabled styling and behavior
- **Custom Dropdown Arrow**: Consistent arrow styling across browsers
- **Form Integration**: Works seamlessly with forms and validation libraries

## Usage

```tsx
import { SelectInput } from '@versaur/ui'

// Basic usage
<SelectInput
  label="Choose your country"
  placeholder="Select a country..."
>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</SelectInput>

// With helper text
<SelectInput
  label="Select your plan"
  helperText="You can change this later in settings"
  placeholder="Choose a plan..."
>
  <option value="free">Free Plan</option>
  <option value="pro">Pro Plan</option>
</SelectInput>

// Error state
<SelectInput
  label="Required field"
  error="Please select an option"
  placeholder="Make a selection..."
>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</SelectInput>

// With option groups
<SelectInput
  label="Select a vehicle"
  placeholder="Choose your vehicle..."
>
  <optgroup label="Cars">
    <option value="sedan">Sedan</option>
    <option value="suv">SUV</option>
  </optgroup>
  <optgroup label="Motorcycles">
    <option value="sport">Sport Bike</option>
    <option value="cruiser">Cruiser</option>
  </optgroup>
</SelectInput>
```

## Props

The component extends all standard HTML `select` attributes and adds the following:

- `variant`: Visual style variant (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger, plus outline versions)
- `label`: Required label text displayed above the select
- `helperText`: Optional helper text displayed below the select
- `error`: Error message that overrides helper text and sets error styling
- `placeholder`: Optional placeholder text for the default option

## Accessibility

- Proper ARIA attributes (`aria-invalid`, `aria-disabled`)
- Semantic HTML with label association
- Error messages use `role="alert"` for screen reader announcements
- Focus management and keyboard navigation follow browser standards
