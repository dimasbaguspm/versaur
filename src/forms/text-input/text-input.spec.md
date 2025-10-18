# TextInput Component Specification

## Overview

The **TextInput** component is a simple, accessible text input that directly aligns with the native
HTML `<input>` element. It follows the **Regular Pattern** as it enhances a single HTML element with
proper ARIA attributes, error handling, and helper text while maintaining browser-standard behavior.

## Component Pattern

**Regular Pattern** - This component directly maps to the native `<input type="text">` HTML element,
providing a familiar developer experience with enhanced styling and accessibility features.

## Features

- ✅ **Browser-Standard Behavior**: Aligns with native input element
- ✅ **Full Accessibility**: ARIA attributes, proper label association, error messaging
- ✅ **Helper Text Support**: Additional guidance below the input
- ✅ **Error State Management**: Built-in error message display with ARIA live region
- ✅ **Icon Support**: Left and right content slots for icons or text
- ✅ **Required Field Indicator**: Visual asterisk for required fields
- ✅ **Read-Only Support**: Display reference data while maintaining form submission
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### Props

Extends all native `InputHTMLAttributes<HTMLInputElement>` properties (except `size`).

| Prop           | Type        | Default | Description                                     |
| -------------- | ----------- | ------- | ----------------------------------------------- |
| `label`        | `ReactNode` | -       | Label text to display above the input           |
| `leftContent`  | `ReactNode` | -       | Optional content to display inside (left side)  |
| `rightContent` | `ReactNode` | -       | Optional content to display inside (right side) |
| `helperText`   | `ReactNode` | -       | Helper text to display below the input          |
| `error`        | `ReactNode` | -       | Error message for invalid state                 |
| `disabled`     | `boolean`   | `false` | Whether the input is disabled                   |
| `readOnly`     | `boolean`   | `false` | Whether the input is read-only                  |
| `required`     | `boolean`   | `false` | Whether the input is required                   |
| `id`           | `string`    | auto    | Custom ID (auto-generated if not provided)      |
| `type`         | `string`    | `text`  | HTML input type attribute                       |
| `placeholder`  | `string`    | -       | Placeholder text                                |
| `className`    | `string`    | -       | Additional CSS classes for the container        |

### Visual Style

The TextInput uses the **primary** variant with Versaur's coral color (`--color-primary`) for focus
states and borders, ensuring consistency with the brand identity.

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

- Opacity: 50%
- Background: `bg-gray-50`
- Pointer events: Disabled

### States

#### Normal

- Default interactive state
- Primary-colored border and focus ring
- Responds to hover, focus, active states

#### Error

- Shows error message below input with red text
- Border and focus ring change to danger color
- Error message has `role="alert"` and `aria-live="polite"`
- Input has `aria-invalid="true"`
- Error message is linked via `aria-errormessage` and `aria-describedby`
- Helper text is hidden when error is present

#### Disabled

- Reduced opacity (50%)
- Gray background
- Pointer events disabled
- Standard `disabled` attribute set
- Input cannot be focused or edited

#### Read-Only

- Gray border and background to indicate non-editable state
- Input can be focused but not edited
- Standard `readOnly` attribute set
- No focus ring to indicate non-editable nature
- Default cursor instead of text cursor
- Value can be selected and copied
- Use when displaying reference data or computed values

#### Required

- Visual asterisk (\*) displayed next to label in danger color
- `required` attribute set on input
- Asterisk has `aria-label="required"` for screen readers

## Accessibility

The TextInput component follows WCAG 2.1 AA standards and implements proper ARIA attributes:

### Label Association

- Every input has a properly associated `<label>` using `htmlFor` and `id`
- ID is auto-generated using React's `useId()` if not provided
- Custom IDs are supported and properly linked

### ARIA Attributes

| Attribute           | Usage                                              |
| ------------------- | -------------------------------------------------- |
| `aria-invalid`      | Set to `true` when error is present                |
| `aria-describedby`  | Links to helper text or error message ID           |
| `aria-errormessage` | Links to error message ID when in error state      |
| `aria-hidden`       | Set on decorative left/right content (icons)       |
| `aria-live`         | Set to `polite` on error message for announcements |
| `aria-label`        | Set on required indicator for screen reader users  |

### Error Messaging

- Error messages use `role="alert"` for immediate announcement
- Error messages have `aria-live="polite"` for dynamic updates
- Error ID is linked via both `aria-describedby` and `aria-errormessage`
- Helper text is hidden when error is present to avoid confusion

### Helper Text

- Helper text is linked to input via `aria-describedby`
- Unique ID generated for each helper text element
- Hidden when error message is displayed

### Icon Content

- Left and right content slots have `aria-hidden="true"`
- Prevents screen readers from announcing decorative icons
- Icons should be purely visual; use labels for semantic meaning

## Usage Examples

### Basic Input

```tsx
<TextInput label='Full Name' placeholder='Enter your full name' />
```

### With Helper Text

```tsx
<TextInput
  label='Email Address'
  type='email'
  placeholder='you@example.com'
  helperText='We will never share your email with anyone else'
/>
```

### With Left Icon

```tsx
<TextInput
  label='Username'
  leftContent={<UserIcon size={16} />}
  placeholder='Enter username'
  helperText='Your unique username for login'
/>
```

### With Error

```tsx
<TextInput
  label='Email Address'
  error='Please enter a valid email address'
  placeholder='you@example.com'
  defaultValue='invalid-email'
/>
```

### Required Field

```tsx
<TextInput
  label='Company Name'
  placeholder='Acme Inc.'
  required
  helperText='This field is required'
/>
```

### Disabled

```tsx
<TextInput
  label='Account ID'
  disabled
  defaultValue='ACC-12345'
  helperText='This field cannot be edited'
/>
```

### Read-Only

```tsx
<TextInput
  label='Transaction ID'
  readOnly
  defaultValue='TXN-98765-ABCD'
  helperText='This field is read-only and displays reference information'
/>
```

### Password with Toggle

```tsx
<TextInput
  label='Password'
  type='password'
  rightContent={<EyeIcon size={16} />}
  placeholder='Enter password'
  helperText='Must be at least 8 characters'
/>
```

### Search Input

```tsx
<TextInput
  label='Search'
  leftContent={<SearchIcon size={16} />}
  rightContent={<span className='text-xs'>⌘K</span>}
  placeholder='Search for anything...'
/>
```

## Design Tokens

### Spacing

- Label margin bottom: `mb-2` (8px)
- Error/Helper text margin top: `mt-1` (4px)
- Input height: `h-9` (36px)
- Horizontal padding (no icons): `px-3` (12px)
- Horizontal padding (with left icon): `pl-9` (36px)
- Horizontal padding (with right icon): `pr-9` (36px)
- Icon position (left): `left-2.5` (10px)
- Icon position (right): `right-2.5` (10px)

### Typography

- Label: `text-sm font-medium` (14px, medium weight)
- Input text: Default foreground color
- Helper text: `text-sm text-gray-600` (14px, gray)
- Error text: `text-sm text-danger` (14px, danger color)

### Colors

- Primary border: `border-primary/30` (30% opacity)
- Primary focus ring: `ring-primary/20` (20% opacity)
- Danger border: `border-danger`
- Danger background: `bg-danger/5` (5% opacity)
- Danger focus ring: `ring-danger/20` (20% opacity)
- Disabled background: `bg-gray-50`
- Icon color: `text-gray-500`

### Border & Radius

- Border width: `border` (1px)
- Border radius: `rounded-md` (6px)
- Focus ring width: `ring-2` (2px)
- Focus ring offset: `ring-offset-2` (2px)

## Browser Compatibility

The TextInput component uses standard HTML input elements and modern CSS features supported by all
modern browsers:

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+

CSS features used:

- CSS Custom Properties (widely supported)
- Flexbox (widely supported)
- Focus-visible (polyfilled via Tailwind)

## Best Practices

### When to Use

- Single-line text entry
- Email, URL, password, search inputs
- Any scenario requiring native keyboard support
- Form fields requiring validation

### When Not to Use

- Multi-line text entry (use TextareaInput instead)
- Date selection (use DatePicker instead)
- Dropdown selection (use SelectInput instead)
- Numeric input with steppers (use NumberInput if available)

### Accessibility Best Practices

1. **Always provide a label**: Never use placeholder as a label replacement
2. **Use appropriate input types**: `email`, `tel`, `url`, etc. for better mobile keyboards
3. **Provide helpful error messages**: Be specific about what's wrong and how to fix it
4. **Use helper text wisely**: Provide guidance before errors occur
5. **Mark required fields**: Use the `required` prop for visual and semantic indication
6. **Choose between disabled and readOnly appropriately**:
   - Use `disabled` when the field should not be submitted with the form
   - Use `readOnly` when the field should be submitted but not editable
7. **Test with keyboard only**: Ensure all interactions work without a mouse
8. **Test with screen readers**: Verify ARIA attributes are announced correctly

### Disabled vs Read-Only

Understanding the difference between `disabled` and `readOnly` is important for proper form
behavior:

| Aspect               | Disabled                                   | Read-Only                           |
| -------------------- | ------------------------------------------ | ----------------------------------- |
| **User Interaction** | Cannot focus or interact                   | Can focus, select, and copy text    |
| **Form Submission**  | Value is NOT included in form data         | Value IS included in form data      |
| **Visual Style**     | Grayed out with reduced opacity            | Gray background with normal opacity |
| **Focus Ring**       | Cannot receive focus                       | Can receive focus (no ring shown)   |
| **Cursor**           | Default cursor                             | Default cursor                      |
| **Use Case**         | Field is not applicable in current context | Display reference or computed data  |
| **Example**          | Shipping address when pickup is selected   | Order ID, transaction reference     |

### Form Integration

TextInput works seamlessly with native HTML forms:

```tsx
<form onSubmit={handleSubmit}>
  <TextInput label='Email' type='email' name='email' required />
  <button type='submit'>Submit</button>
</form>
```

The component supports all native form attributes:

- `name` - for form data
- `value` / `defaultValue` - for controlled/uncontrolled inputs
- `onChange` / `onBlur` / `onFocus` - for event handling
- `required` / `pattern` / `minLength` / `maxLength` - for validation

## Testing

The component is thoroughly tested with:

- Snapshot testing for HTML output
- Accessibility attribute testing
- Label association testing
- Error state handling
- Helper text visibility logic
- Icon rendering and aria-hidden
- Required field indicator
- Disabled state behavior

See `__tests__/text-input.test.tsx` and `__tests__/text-input.atoms.test.tsx` for complete test
coverage.

## Related Components

- **TextareaInput**: Multi-line text input
- **EmailInput**: Specialized email input with validation
- **SearchInput**: Input optimized for search functionality
- **PasswordInput**: Password input with visibility toggle
- **SelectInput**: Dropdown selection
- **DatePickerInput**: Date selection

## Changelog

### Current Version

- Initial implementation with Regular Pattern
- Primary variant only (simplified from multiple variants)
- Comprehensive ARIA attribute support
- Helper text and error message handling
- Icon support (left and right content)
- Required field indicator
- Read-only state support for displaying reference data
- Auto-generated IDs with override option
