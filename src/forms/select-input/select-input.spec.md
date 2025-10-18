# SelectInput Component Specification

## Overview

The **SelectInput** component is a simple, accessible select dropdown that directly aligns with the
native HTML `<select>` element. It follows the **Regular Pattern** combined with **Compound
Pattern** (for SelectInput.Option) as it enhances a single HTML element with proper ARIA attributes,
error handling, and helper text while maintaining browser-standard behavior.

## Component Pattern

**Regular Pattern with Compound Pattern** - This component directly maps to the native `<select>`
HTML element, providing a familiar developer experience with enhanced styling and accessibility
features. The compound pattern is used for the `SelectInput.Option` sub-component to provide type
safety and consistent API.

## Features

- ✅ **Browser-Standard Behavior**: Aligns with native select element
- ✅ **Full Accessibility**: ARIA attributes, proper label association, error messaging
- ✅ **Helper Text Support**: Additional guidance below the select
- ✅ **Error State Management**: Built-in error message display with ARIA live region
- ✅ **Required Field Indicator**: Visual asterisk for required fields
- ✅ **Read-Only Support**: Display reference data while maintaining form submission
- ✅ **Compound Pattern**: Type-safe SelectInput.Option component
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports
- ✅ **Native Placeholder**: Uses disabled hidden option for placeholder

## API Reference

### SelectInput Props

Extends all native `SelectHTMLAttributes<HTMLSelectElement>` properties (except `size`).

| Prop          | Type        | Default | Description                                |
| ------------- | ----------- | ------- | ------------------------------------------ |
| `label`       | `ReactNode` | -       | Label text to display above the select     |
| `helperText`  | `ReactNode` | -       | Helper text to display below the select    |
| `error`       | `ReactNode` | -       | Error message for invalid state            |
| `disabled`    | `boolean`   | `false` | Whether the select is disabled             |
| `readOnly`    | `boolean`   | `false` | Whether the select is read-only            |
| `required`    | `boolean`   | `false` | Whether the select is required             |
| `id`          | `string`    | auto    | Custom ID (auto-generated if not provided) |
| `placeholder` | `string`    | -       | Placeholder text (creates hidden option)   |
| `className`   | `string`    | -       | Additional CSS classes for the container   |

### SelectInput.Option Props

Extends all native `OptionHTMLAttributes<HTMLOptionElement>` properties.

| Prop       | Type        | Required | Description                |
| ---------- | ----------- | -------- | -------------------------- |
| `value`    | `string`    | ✅ Yes   | Option value               |
| `children` | `ReactNode` | ✅ Yes   | Option label/content       |
| `disabled` | `boolean`   | No       | Whether option is disabled |

### SelectInput.OptionGroup Props

Extends all native `OptgroupHTMLAttributes<HTMLOptGroupElement>` properties.

| Prop       | Type        | Required | Description                           |
| ---------- | ----------- | -------- | ------------------------------------- |
| `label`    | `string`    | ✅ Yes   | Group label                           |
| `children` | `ReactNode` | ✅ Yes   | Options within the group              |
| `disabled` | `boolean`   | No       | Whether all options in group disabled |

### Visual Style

The SelectInput uses the **primary** variant with Versaur's coral color (`--color-primary`) for
focus states and borders, ensuring consistency with the brand identity.

**Default State:**

- Border: `border-primary/30` (soft primary border)
- Background: `bg-white`
- Text: `text-foreground`
- Focus: Primary border with `ring-primary/20`

**Error State:**

- Border: `border-danger` (strong danger border)
- Background: `bg-danger/5` (subtle danger background)
- Text: `text-foreground`
- Focus: Danger border with `ring-danger/20`

**Read-Only State:**

- Border: `border-gray-300` (neutral gray border)
- Background: `bg-gray-50` (subtle gray background)
- Text: `text-foreground`
- Cursor: `cursor-default`
- Focus: No focus ring (`focus:ring-0`)

**Disabled State:**

- Background: `bg-gray-50`
- Pointer events: Disabled

### States

#### Normal

- Default interactive state
- Primary-colored border and focus ring
- Responds to hover, focus, active states

#### Error

- Shows error message below select with red text
- Border and focus ring change to danger color
- Error message has `role="alert"` and `aria-live="polite"`
- Select has `aria-invalid="true"`
- Error message is linked via `aria-errormessage` and `aria-describedby`
- Helper text is hidden when error is present

#### Disabled

- Gray background
- Pointer events disabled
- Visual indication of unavailability

#### Read-Only

- Gray background with subtle styling
- Disabled interaction but maintains form value
- Select is technically disabled to prevent changes
- Visual indication distinct from disabled state

#### Required

- Asterisk (\*) appears next to label in red
- Native HTML `required` attribute applied
- Standard browser validation triggers

## Usage Examples

### Basic Usage

```tsx
<SelectInput label='Country' placeholder='Select a country'>
  <SelectInput.Option value='us'>United States</SelectInput.Option>
  <SelectInput.Option value='ca'>Canada</SelectInput.Option>
  <SelectInput.Option value='uk'>United Kingdom</SelectInput.Option>
</SelectInput>
```

### With Helper Text

```tsx
<SelectInput
  label='Department'
  helperText='Select your primary department'
  placeholder='Choose department...'
>
  <SelectInput.Option value='engineering'>Engineering</SelectInput.Option>
  <SelectInput.Option value='design'>Design</SelectInput.Option>
  <SelectInput.Option value='marketing'>Marketing</SelectInput.Option>
</SelectInput>
```

### With Error State

```tsx
<SelectInput label='Plan' error='Please select a plan to continue' placeholder='Choose a plan...'>
  <SelectInput.Option value='free'>Free Plan</SelectInput.Option>
  <SelectInput.Option value='basic'>Basic Plan</SelectInput.Option>
  <SelectInput.Option value='pro'>Pro Plan</SelectInput.Option>
</SelectInput>
```

### Required Field

```tsx
<SelectInput
  label='Experience Level'
  required
  helperText='This field is required'
  placeholder='Select experience...'
>
  <SelectInput.Option value='junior'>Junior (0-2 years)</SelectInput.Option>
  <SelectInput.Option value='mid'>Mid-level (2-5 years)</SelectInput.Option>
  <SelectInput.Option value='senior'>Senior (5-10 years)</SelectInput.Option>
</SelectInput>
```

### Read-Only

```tsx
<SelectInput
  label='Account Type'
  readOnly
  defaultValue='premium'
  helperText='This field is read-only and displays reference information'
>
  <SelectInput.Option value='free'>Free</SelectInput.Option>
  <SelectInput.Option value='basic'>Basic</SelectInput.Option>
  <SelectInput.Option value='premium'>Premium</SelectInput.Option>
</SelectInput>
```

### With Option Groups

```tsx
<SelectInput
  label='Vehicle'
  placeholder='Choose your vehicle...'
  helperText='Options are grouped by category'
>
  <SelectInput.OptionGroup label='Cars'>
    <SelectInput.Option value='sedan'>Sedan</SelectInput.Option>
    <SelectInput.Option value='suv'>SUV</SelectInput.Option>
  </SelectInput.OptionGroup>
  <SelectInput.OptionGroup label='Motorcycles'>
    <SelectInput.Option value='sport'>Sport Bike</SelectInput.Option>
    <SelectInput.Option value='cruiser'>Cruiser</SelectInput.Option>
  </SelectInput.OptionGroup>
</SelectInput>
```

### Controlled Component

```tsx
const [value, setValue] = useState('')

<SelectInput
  label="Country"
  value={value}
  onChange={(e) => setValue(e.target.value)}
>
  <SelectInput.Option value="us">United States</SelectInput.Option>
  <SelectInput.Option value="ca">Canada</SelectInput.Option>
</SelectInput>
```

## Accessibility

### ARIA Attributes

- `aria-invalid`: Set to `true` when error is present
- `aria-describedby`: Links to helper text or error message
- `aria-errormessage`: Links to error message when present
- `aria-live="polite"`: Error messages announced to screen readers
- `role="alert"`: Error container has alert role

### Keyboard Support

All keyboard interactions are handled natively by the browser:

- `Space` / `Enter`: Opens dropdown
- `Arrow Up/Down`: Navigate options
- `Home` / `End`: Jump to first/last option
- `Escape`: Close dropdown
- `Tab`: Move focus to next element

### Screen Reader Support

- Label properly associated with select via `htmlFor` and `id`
- Helper text and error messages announced via `aria-describedby`
- Required fields indicated with aria-label on asterisk
- State changes (error, disabled) announced automatically

## Form Integration

### Native HTML Forms

```tsx
<form onSubmit={handleSubmit}>
  <SelectInput name='country' label='Country' required>
    <SelectInput.Option value='us'>United States</SelectInput.Option>
    <SelectInput.Option value='ca'>Canada</SelectInput.Option>
  </SelectInput>
  <button type='submit'>Submit</button>
</form>
```

### Validation

The component supports both native HTML validation and custom validation:

```tsx
// Native validation
<SelectInput required name="country" label="Country">
  <SelectInput.Option value="us">United States</SelectInput.Option>
</SelectInput>

// Custom validation with error prop
<SelectInput
  label="Country"
  error={errors.country?.message}
>
  <SelectInput.Option value="us">United States</SelectInput.Option>
</SelectInput>
```

## Design Considerations

### Primary Color Only

Unlike buttons or other components, SelectInput uses only the **primary** variant (coral) to
maintain consistency across all form inputs in the Versaur design system. This ensures:

- Predictable, consistent form appearance
- Clear visual hierarchy within forms
- Reduced cognitive load for users
- Alignment with browser standards

### Read-Only vs Disabled

**Read-Only:**

- Used to display reference data that's part of the form
- Value is submitted with the form
- Has distinct gray styling
- Cursor indicates non-editable state

**Disabled:**

- Used when option is not available
- Value is NOT submitted with the form
- Clear visual indication of unavailability
- Cursor indicates disabled state

### Placeholder Behavior

The placeholder is implemented using a native disabled and hidden `<option>` element:

```tsx
<option value='' disabled hidden>
  {placeholder}
</option>
```

This ensures:

- Standard browser behavior
- Proper form validation (empty value)
- Accessibility support

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All features use standard HTML and CSS, ensuring broad compatibility.

## Performance

- Minimal JavaScript - leverages native select behavior
- No external dependencies beyond React
- Tree-shakable with proper imports
- Optimized re-renders with React.memo patterns

## Testing

See `__tests__/select-input.test.tsx` for comprehensive test coverage including:

- Rendering with label and options
- Helper text display
- Error state handling
- Required field indicator
- Read-only state
- Disabled state
- ARIA attributes
- Keyboard interactions
- Form integration
