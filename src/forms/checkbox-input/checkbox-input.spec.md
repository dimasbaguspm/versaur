# CheckboxInput Component Specification

## Overview

The **CheckboxInput** component is a compound component that provides checkbox inputs with primary
variant styling. It uses fieldset/legend structure for proper semantic HTML and accessibility. The
component follows the **Compound Pattern** with **Context Pattern** for managing shared state
between the parent and checkbox options.

## Component Pattern

**Compound Pattern with Context** - This component provides flexible composition with multiple
related sub-components (CheckboxInput.Option) that need to share state (disabled) through context.
The fieldset/legend structure provides proper semantic HTML for grouping form controls.

## Features

- ✅ **Fieldset/Legend Structure**: Proper semantic HTML for grouping related checkboxes
- ✅ **Primary Variant Only**: Uses Versaur's coral color for consistent brand identity
- ✅ **Full Accessibility**: ARIA attributes, proper label association, fieldset semantics
- ✅ **Helper Text Support**: Additional guidance below the checkbox group
- ✅ **Error State Management**: Error text display without affecting checkbox styling
- ✅ **Required Field Indicator**: Visual asterisk for required fields
- ✅ **Disabled Support**: Fieldset-level disabled state cascades to all options
- ✅ **Flexible Layout**: Vertical (default) or horizontal layout options
- ✅ **Option Descriptions**: Optional descriptive text for each checkbox option
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### CheckboxInput (Root Component)

Extends all native `FieldsetHTMLAttributes<HTMLFieldSetElement>` properties.

| Prop         | Type                         | Default      | Description                                       |
| ------------ | ---------------------------- | ------------ | ------------------------------------------------- |
| `label`      | `ReactNode`                  | -            | Label text to display above checkbox group        |
| `helperText` | `ReactNode`                  | -            | Helper text to display below the checkbox group   |
| `error`      | `ReactNode`                  | -            | Error message for invalid state                   |
| `direction`  | `'horizontal' \| 'vertical'` | `'vertical'` | Direction of checkbox layout                      |
| `disabled`   | `boolean`                    | `false`      | Whether the entire checkbox group is disabled     |
| `required`   | `boolean`                    | `false`      | Whether the checkbox group is required            |
| `children`   | `ReactNode`                  | -            | CheckboxInput.Option components                   |
| `className`  | `string`                     | -            | Additional CSS classes for the fieldset container |

### CheckboxInput.Option

Extends all native `InputHTMLAttributes<HTMLInputElement>` properties (except `type`).

| Prop          | Type        | Default | Description                                |
| ------------- | ----------- | ------- | ------------------------------------------ |
| `children`    | `ReactNode` | -       | The option label content                   |
| `description` | `ReactNode` | -       | Description text below the option label    |
| `disabled`    | `boolean`   | `false` | Whether this specific option is disabled   |
| `value`       | `string`    | -       | The value of the checkbox                  |
| `id`          | `string`    | auto    | Custom ID (auto-generated if not provided) |
| `className`   | `string`    | -       | Additional CSS classes for the checkbox    |

### Visual Style

The CheckboxInput uses the **primary** variant with Versaur's coral color (`--color-primary`) for
consistent brand identity across the application.

**Default State:**

- Border: `border-primary/40` (soft primary border)
- Background: `bg-white`
- Checked: `checked:bg-primary checked:border-primary`
- Focus: `focus:ring-primary/20`
- Size: `h-4 w-4` (medium, default)
- Checkmark: Custom white checkmark using ::after pseudo-element

**Error State:**

- Checkbox styling: **Unchanged** (remains primary variant)
- Error text: Red text below the checkbox group with `role="alert"`
- Error text color: `text-danger`
- Helper text is hidden when error is present

**Disabled State:**

- Fieldset: `disabled` attribute on fieldset element
- Opacity: 50% for all child checkboxes and labels
- Background: Maintains white background
- Cursor: `cursor-not-allowed`

**Required State:**

- Asterisk: Red asterisk after the legend label
- Asterisk color: `text-danger`
- Asterisk ARIA: `aria-label="required"`

### States

#### Normal

- Default interactive state
- Primary-colored border and focus ring
- White checkmark appears when checked
- Responds to hover, focus, active states

#### Error

- Shows error message below checkbox group with red text
- Error message has `role="alert"` for screen readers
- **Checkbox styling is NOT affected** - checkboxes maintain primary styling
- Only the error text is styled with danger color
- Helper text is hidden when error is present

#### Disabled

- Fieldset `disabled` attribute disables all child checkboxes
- Reduced opacity (50%) for all checkboxes and labels
- Cursor changes to `cursor-not-allowed`
- Individual options can also be disabled independently

#### Required

- Red asterisk (\*) appears after the legend label
- Asterisk has `aria-label="required"` for accessibility
- Follows the same pattern as TextInput component

### Layout Directions

#### Vertical (Default)

- Options stacked vertically with `space-y-2`
- Best for forms and longer option lists
- Default layout direction

#### Horizontal

- Options displayed in a flex row with `gap-4`
- Uses `flex-wrap` to wrap to multiple rows if needed
- Best for compact displays or short option lists

## Usage Examples

### Basic Usage

```tsx
<CheckboxInput label='Choose your preferences'>
  <CheckboxInput.Option value='newsletter'>Newsletter subscription</CheckboxInput.Option>
  <CheckboxInput.Option value='marketing'>Marketing emails</CheckboxInput.Option>
  <CheckboxInput.Option value='updates'>Product updates</CheckboxInput.Option>
</CheckboxInput>
```

### With Required Indicator

```tsx
<CheckboxInput label='Privacy settings' required>
  <CheckboxInput.Option value='analytics'>Analytics tracking</CheckboxInput.Option>
  <CheckboxInput.Option value='marketing'>Marketing communications</CheckboxInput.Option>
</CheckboxInput>
```

### With Descriptions

```tsx
<CheckboxInput label='Privacy settings'>
  <CheckboxInput.Option
    value='analytics'
    description='Help us improve by sharing anonymous usage data'
  >
    Analytics tracking
  </CheckboxInput.Option>
  <CheckboxInput.Option
    value='essential'
    description='Required for core functionality and security'
    defaultChecked
    disabled
  >
    Essential cookies
  </CheckboxInput.Option>
</CheckboxInput>
```

### With Error State

```tsx
<CheckboxInput label='Terms and conditions' required error='You must accept the terms to continue'>
  <CheckboxInput.Option value='terms'>I accept the terms and conditions</CheckboxInput.Option>
  <CheckboxInput.Option value='privacy'>I accept the privacy policy</CheckboxInput.Option>
</CheckboxInput>
```

### Horizontal Layout

```tsx
<CheckboxInput label='Skills' direction='horizontal'>
  <CheckboxInput.Option value='react'>React</CheckboxInput.Option>
  <CheckboxInput.Option value='typescript'>TypeScript</CheckboxInput.Option>
  <CheckboxInput.Option value='nodejs'>Node.js</CheckboxInput.Option>
</CheckboxInput>
```

### Disabled State

```tsx
<CheckboxInput
  label='Disabled options'
  disabled
  helperText='These options are currently unavailable'
>
  <CheckboxInput.Option value='option1'>Disabled option 1</CheckboxInput.Option>
  <CheckboxInput.Option value='option2'>Disabled option 2</CheckboxInput.Option>
</CheckboxInput>
```

## Accessibility

### ARIA Attributes

- **Fieldset**: Uses native `<fieldset>` element for grouping
- **Legend**: Uses native `<legend>` element for the label
- **Disabled**: Fieldset `disabled` attribute cascades to all children
- **Error**: Error message has `role="alert"` for screen readers
- **Required**: Asterisk has `aria-label="required"`

### Keyboard Navigation

- **Tab**: Navigate between checkbox options
- **Space**: Toggle checkbox state when focused
- **Shift + Tab**: Navigate backwards

### Screen Reader Support

- Screen readers announce the legend as the group label
- Each checkbox is properly associated with its label via `for`/`id`
- Error messages are announced via `role="alert"`
- Required indicator is announced via `aria-label="required"`
- Descriptions are read after the checkbox label

## Design System Integration

### Color Palette

The component uses Versaur's primary color (coral) for all checkbox states:

- **Primary**: `#e07a5f` - Main checkbox color
- **Primary/40**: Soft border for unchecked state
- **Danger**: `#e06650` - Required asterisk and error text
- **Gray-600**: `#6b7280` - Helper text and descriptions

### Typography

- **Legend**: `text-sm font-medium` - Bold label text
- **Checkbox Label**: `text-sm` - Standard label text
- **Description**: `text-xs` - Smaller descriptive text
- **Helper/Error Text**: `text-sm` - Standard size for messages

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Native fieldset/legend support
- CSS custom properties support required
- ::after pseudo-element support required

## Implementation Notes

### Custom Checkmark

The component uses a custom checkmark implemented with `::after` pseudo-element instead of relying
on browser defaults:

- More consistent cross-browser appearance
- Better control over checkmark size and position
- White checkmark on primary background when checked
- Smooth opacity transition

### Fieldset/Legend Structure

Using fieldset/legend provides:

- Proper semantic HTML for grouped form controls
- Built-in disabled state that cascades to all children
- Better screen reader support and accessibility
- Standard browser behavior for form groups

### Context Pattern

The component uses React Context to share state between the root component and options:

- `disabled` state cascades from fieldset to all options
- Individual options can override with their own disabled prop
- Simplifies API by avoiding prop drilling

## Testing Considerations

- Test fieldset/legend structure and semantics
- Verify disabled state cascades from fieldset to options
- Test required indicator appears with asterisk
- Verify error state only affects error text, not checkbox styling
- Test keyboard navigation and focus management
- Verify ARIA attributes are properly applied
- Test horizontal and vertical layout modes
- Verify checkbox options can be checked/unchecked
- Test individual option disabled state
