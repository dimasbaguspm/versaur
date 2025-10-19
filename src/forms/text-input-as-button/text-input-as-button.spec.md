# TextInputAsButton Component Specification

## Overview

The **TextInputAsButton** component is a button that mimics the visual style of the TextInput
component. It is designed for scenarios where you need a text-input-like appearance but want to
trigger custom interactions (e.g., opening a modal, date picker, file selector) rather than direct
text input. It follows the **Regular Pattern** as it enhances the native `<button>` element with
TextInput styling and includes an optional hidden input for form submission.

## Component Pattern

**Regular Pattern** - This component directly maps to the native `<button>` HTML element, providing
a familiar developer experience with TextInput styling and accessibility features while maintaining
button behavior.

## Features

- ✅ **TextInput Visual Style**: Matches TextInput appearance for consistent UI
- ✅ **Button Behavior**: Uses native button element for proper click handling
- ✅ **Multiple Value Types**: Supports string, number, boolean, array, and object values
- ✅ **Separate Display Value**: Display user-friendly text while storing technical values (FK
  pattern)
- ✅ **Automatic Serialization**: Arrays and objects are automatically JSON-stringified for form
  submission
- ✅ **Hidden Input Support**: Optional hidden input for form submission with name/value
- ✅ **Full Accessibility**: ARIA attributes, proper label association, error messaging
- ✅ **Helper Text Support**: Additional guidance below the button
- ✅ **Error State Management**: Built-in error message display with ARIA live region
- ✅ **Icon Support**: Left and right content slots for icons or text
- ✅ **Required Field Indicator**: Visual asterisk for required fields
- ✅ **Placeholder Support**: Shows placeholder text when no value is present
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## Use Cases

- **Date/Time Pickers**: Trigger a date or time picker modal (value: ISO string, displayValue:
  formatted date)
- **Custom Select**: Open a custom dropdown or modal selection (value: ID, displayValue: name)
- **File Upload**: Trigger file input dialog with custom UI (value: file path/data, displayValue:
  filename)
- **Location Picker**: Open a map or location selection modal (value: coordinates object,
  displayValue: address)
- **Color Picker**: Trigger a color selection interface (value: hex/RGB object, displayValue: color
  name)
- **Multi-step Forms**: Navigate to a detail view while maintaining form context
- **Modal Triggers**: Any scenario requiring a text-input-like trigger for a modal
- **Foreign Key Relationships**: Display user-friendly text while storing database IDs (value: FK
  ID, displayValue: entity name)
- **Multi-Select**: Store array of selected IDs while showing count or names (value: ID array,
  displayValue: formatted list)
- **Complex Data**: Store structured data like coordinates, ranges, or settings (value: object,
  displayValue: summary)

## API Reference

### Props

Extends all native `ButtonHTMLAttributes<HTMLButtonElement>` properties (except `value`).

| Prop           | Type                                                            | Default | Description                                                           |
| -------------- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------- |
| `label`        | `ReactNode`                                                     | -       | Label text to display above the button                                |
| `leftContent`  | `ReactNode`                                                     | -       | Optional content to display inside (left side)                        |
| `rightContent` | `ReactNode`                                                     | -       | Optional content to display inside (right side)                       |
| `helperText`   | `ReactNode`                                                     | -       | Helper text to display below the button                               |
| `error`        | `ReactNode`                                                     | -       | Error message for invalid state                                       |
| `value`        | `string \| number \| boolean \| string[] \| number[] \| object` | -       | Actual value for form submission (can be any serializable type)       |
| `displayValue` | `string`                                                        | -       | Display text in button UI (useful for FK/ID with human-readable text) |
| `placeholder`  | `string`                                                        | `''`    | Placeholder text when no value is present                             |
| `name`         | `string`                                                        | -       | Name attribute for the hidden input (enables form submission)         |
| `disabled`     | `boolean`                                                       | `false` | Whether the button is disabled                                        |
| `required`     | `boolean`                                                       | `false` | Whether the field is required                                         |
| `id`           | `string`                                                        | auto    | Custom ID (auto-generated if not provided)                            |
| `onClick`      | `function`                                                      | -       | Click handler for the button                                          |
| `className`    | `string`                                                        | -       | Additional CSS classes for the container                              |

### Value Handling

The component supports multiple value types to accommodate various use cases:

#### Value Types

- **String**: Direct text value (e.g., `"2025-01-15"`)
- **Number**: Numeric values, IDs, quantities (e.g., `12345`)
- **Boolean**: True/false values (e.g., `true`)
- **String Array**: Multiple string values (e.g., `["tag1", "tag2"]`)
- **Number Array**: Multiple numeric values (e.g., `[1, 2, 3]`)
- **Object**: Complex data structures (e.g., `{ lat: 40.7128, lng: -74.006 }`)

#### Value Serialization

When a `name` prop is provided, a hidden input is rendered for form submission:

- **String/Number**: Converted to string as-is
- **Boolean**: Converted to `"true"` or `"false"`
- **Array/Object**: Serialized using `JSON.stringify()`

#### Display Value Logic

The button displays text according to this simple priority:

1. **`displayValue`** (if provided and not empty): Always uses this for display
2. **`placeholder`**: Shown when displayValue is not provided or is empty

**Important**: The `value` prop is NEVER displayed to the user. It is only used for form submission
in the hidden input. You must always provide `displayValue` to show something meaningful to the
user.

#### Foreign Key Pattern

A common use case is storing a foreign key ID while displaying a human-readable name:

```tsx
<TextInputAsButton
  name='userId'
  value={12345} // ID stored in hidden input
  displayValue='John Doe' // Name shown to user
  label='Assigned User'
/>
```

### Visual Style

The TextInputAsButton uses the same visual style as TextInput with the **primary** variant, ensuring
visual consistency across the form components.

**Default State:**

- Border: `border-primary/30` (soft primary border)
- Background: `bg-white`
- Text: `text-foreground` (or `text-gray-400` for placeholder)
- Focus: Primary border with `ring-primary/20`
- Hover: `border-primary/50`
- Text Alignment: `text-left` (matches input behavior)

**Error State:**

- Border: `border-danger` (strong danger border)
- Background: `bg-danger/5` (subtle danger background)
- Text: `text-foreground`
- Focus: Danger border with `ring-danger/20`

**Disabled State:**

- Opacity: 50% (inherited from button)
- Background: `bg-gray-50`
- Pointer events: Disabled

### States

#### Normal

- Default interactive state
- Primary-colored border and focus ring
- Responds to hover, focus, active states
- Shows hover effect (`hover:border-primary/50`)

#### With Value

- Displays the `value` prop in `text-foreground` color
- Full text visibility with left alignment

#### Placeholder

- When no `value` is provided, shows `placeholder`
- Placeholder text is styled with `text-gray-400`
- Visually distinct from actual value

#### Error

- Shows error message below button with red text
- Border and focus ring change to danger color
- Error message has `role="alert"` and `aria-live="polite"`
- Button has `aria-invalid="true"`
- Error message is linked via `aria-errormessage` and `aria-describedby`
- Helper text is hidden when error is present

#### Disabled

- Reduced opacity (50%)
- Gray background
- Pointer events disabled
- Non-interactive

## Accessibility

### ARIA Attributes

The component uses proper ARIA attributes following WAI-ARIA best practices:

- **`aria-invalid`**: Only present and set to `"true"` when error exists (omitted when no error)
- **`aria-describedby`**: Links to helper text ID or error message ID (only when present)
- **`aria-errormessage`**: Only present when error exists, links to error message ID
- **`aria-required`**: Only present and set to `"true"` when required prop is true (omitted
  otherwise)
- **`role="alert"`**: Error messages use alert role with `aria-live="polite"` for announcements
- **`aria-hidden="true"`**: Applied to icon containers to prevent redundant announcements

### Proper ARIA Implementation

```html
<!-- Default state (no error, not required) -->
<button id="button-id" type="button">Click to select</button>

<!-- With helper text -->
<button id="button-id" type="button" aria-describedby="button-id-helper">Click to select</button>
<div id="button-id-helper">Helper text here</div>

<!-- With error -->
<button
  id="button-id"
  type="button"
  aria-invalid="true"
  aria-describedby="button-id-error"
  aria-errormessage="button-id-error"
>
  Click to select
</button>
<div id="button-id-error" role="alert" aria-live="polite">Error message here</div>

<!-- Required field -->
<button id="button-id" type="button" aria-required="true">Click to select</button>
```

### Keyboard Navigation

- **Tab**: Focus the button
- **Enter/Space**: Activate the button (trigger onClick)
- Standard button keyboard behavior

### Screen Reader Support

- Label is properly associated with button via `htmlFor`/`id`
- Required indicator (`*`) has `aria-label="required"` for screen reader announcement
- Error and helper text are announced via `aria-describedby`
- Icons have `aria-hidden="true"` to prevent redundant announcements
- Error messages are announced immediately via `role="alert"` and `aria-live="polite"`

## Form Integration

### Hidden Input

When a `name` prop is provided, the component renders a hidden read-only input for form submission:

```tsx
<input type='hidden' name={name} value={value} readOnly />
```

This allows the button's value to be submitted with forms, making it compatible with traditional
form workflows. The `readOnly` attribute prevents DOM warnings about controlled inputs without
onChange handlers, as the value is managed by the button's onClick handler.

### Example Usage with Form

```tsx
<form onSubmit={handleSubmit}>
  <TextInputAsButton
    label='Select Date'
    name='appointmentDate'
    value='2025-01-15'
    placeholder='Click to select'
    onClick={() => openDatePicker()}
  />
  <button type='submit'>Submit</button>
</form>
```

When the form is submitted, the hidden input will include `appointmentDate=2025-01-15` in the form
data.

## Comparison with TextInput

| Feature                 | TextInput                   | TextInputAsButton           |
| ----------------------- | --------------------------- | --------------------------- |
| Base Element            | `<input>`                   | `<button>`                  |
| Direct Text Entry       | ✅ Yes                      | ❌ No                       |
| Click to Trigger Action | ❌ No                       | ✅ Yes                      |
| Visual Style            | Primary input style         | Identical to TextInput      |
| Form Submission         | Native input `name`/`value` | Hidden input `name`/`value` |
| Placeholder             | Native `placeholder`        | Custom placeholder display  |
| Read-Only               | ✅ Supported                | N/A (use disabled instead)  |

## Examples

### Date Picker Trigger (String Value)

```tsx
<TextInputAsButton
  label='Appointment Date'
  name='appointmentDate'
  leftContent={<Calendar size={16} />}
  placeholder='Select a date'
  value='2025-01-15'
  displayValue='January 15, 2025'
  onClick={openDatePicker}
/>
```

### Foreign Key Relationship (Number Value)

```tsx
<TextInputAsButton
  label='Assigned User'
  name='userId'
  value={12345}
  displayValue='John Doe'
  leftContent={<User size={16} />}
  onClick={openUserSelector}
  helperText='Select the user responsible for this task'
/>
```

### Multi-Select Tags (Array Value)

```tsx
<TextInputAsButton
  label='Tags'
  name='tags'
  value={['react', 'typescript', 'tailwind']}
  displayValue='React, TypeScript, Tailwind (3 selected)'
  rightContent={<ChevronDown size={16} />}
  onClick={openTagSelector}
/>
```

### Location Picker (Object Value)

```tsx
<TextInputAsButton
  label='Location'
  name='location'
  value={{ lat: 40.7128, lng: -74.006 }}
  displayValue='New York City, NY'
  onClick={openMapPicker}
  helperText='Coordinates stored as JSON'
/>
```

### Boolean Value

```tsx
<TextInputAsButton
  label='Status'
  name='isActive'
  value={true}
  displayValue='Active'
  onClick={toggleStatus}
/>
```

### Without Display Value (Shows Placeholder)

```tsx
<TextInputAsButton
  label='Select Option'
  name='option'
  value={{ id: 123, type: 'premium' }}
  placeholder='Click to select an option'
  onClick={openSelector}
  helperText='Value is stored but placeholder is shown'
/>
```

## Testing Considerations

- Verify button renders with proper `type="button"` attribute
- Ensure hidden input has `readOnly` attribute when `name` prop is provided
- Check ARIA attributes are only present when applicable (not with default/false values)
- Validate `aria-invalid` is only present when error exists
- Validate `aria-required` is only present when required is true
- Validate `aria-describedby` links correctly to helper text or error message
- Verify error state shows error message and hides helper text
- Test keyboard navigation (Tab, Enter, Space)
- Verify placeholder styling (`text-gray-400`) vs value styling
- Check disabled state prevents interaction
- Ensure error message has `role="alert"` and `aria-live="polite"`
- Test value serialization for different types (string, number, boolean, array, object)
- Verify `displayValue` is always shown when provided (never shows `value` directly)
- Verify placeholder is shown when `displayValue` is not provided or empty
- Verify JSON serialization of objects and arrays in hidden input
- Test that `value` is stored correctly in hidden input but never displayed

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript for click interactions

## Migration from Custom Solutions

If you have custom "input-styled buttons" or "picker triggers", consider migrating to
TextInputAsButton for:

- Consistent styling with other form inputs
- Built-in accessibility features
- Form integration via hidden input
- Error and validation support
- Standard keyboard navigation
