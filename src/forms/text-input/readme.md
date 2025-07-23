# TextInput Component

The TextInput component provides a styled, accessible input field for forms and interactive UIs. It supports Versaur's harmonious color system, error and disabled states, helper text, and is designed to closely align with native HTML input behavior.

## Features

- **Complete variant support** for all Versaur palette colors and styles
- **Content placement** (left and right) for icons, buttons, or any React nodes
- **Helper text** with smart error state handling
- **Error states** with automatic danger styling and background tinting
- **Accessible design** following WCAG 2.1 AA standards
- **Default primary variant** using Versaur's coral brand color

## Usage

### Basic TextInput

```tsx
import { TextInput } from '@versaur/components'

<TextInput label="Your Name" placeholder="Enter your name" />
```

### With Variants

```tsx
<TextInput label="Primary Input" variant="primary" placeholder="Primary coral input" />
<TextInput label="Secondary Input" variant="secondary" placeholder="Secondary sage input" />
<TextInput label="Error Input" variant="danger" placeholder="Danger input" />
```

### With Helper Text

```tsx
<TextInput 
  label="Email Address"
  placeholder="Email address" 
  helperText="We'll never share your email with anyone else"
/>
```

### Error State

```tsx
<TextInput 
  label="Email Address"
  error="This field is required and must be a valid email" 
  placeholder="Email"
  helperText="This helper text is hidden when there's an error"
/>
```

### Disabled State

```tsx
<TextInput label="Disabled Field" disabled placeholder="Disabled input" />
```

### With Labels

```tsx
<TextInput 
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

<TextInput 
  label="Username"
  id="custom-id"
  placeholder="Choose a username"
/>
```

### With Content

```tsx
import { UserIcon, EyeIcon } from 'lucide-react'

<TextInput label="Username" leftContent={<UserIcon size={16} />} placeholder="Username" />
<TextInput label="Password" rightContent={<EyeIcon size={16} />} placeholder="Password" type="password" />
```

### Outline Variants

```tsx
<TextInput label="Info Input" variant="info-outline" placeholder="Info outline input" />
<TextInput label="Success Input" variant="success-outline" placeholder="Success outline input" />
```

## Props

| Prop           | Type                                                                 | Default     | Description                                 |
|----------------|----------------------------------------------------------------------|-------------|---------------------------------------------|
| `variant`      | `'primary' \| 'primary-outline' \| 'secondary' \| 'secondary-outline' \| 'tertiary' \| 'tertiary-outline' \| 'ghost' \| 'ghost-outline' \| 'neutral' \| 'neutral-outline' \| 'success' \| 'success-outline' \| 'info' \| 'info-outline' \| 'warning' \| 'warning-outline' \| 'danger' \| 'danger-outline'` | `'primary'` | Visual style variant                        |
| `label`        | `ReactNode`                                                          | **Required** | Label text to display above the input      |
| `leftContent`  | `ReactNode`                                                          | -           | Content to display inside the input (left) |
| `rightContent` | `ReactNode`                                                          | -           | Content to display inside the input (right)|
| `helperText`   | `ReactNode`                                                          | -           | Helper text shown below input               |
| `error`        | `ReactNode`                                                          | -           | Error message for invalid state             |
| `id`           | `string`                                                             | `useId()`   | Input ID (automatically generated if not provided) |
| `className`    | `string`                                                             | -           | Additional CSS classes                      |
| `error`        | `ReactNode`                                                          | -           | Error message for invalid state             |
| `className`    | `string`                                                             | -           | Additional CSS classes                      |
| ...            | All standard HTML input props                                        | -           | Native input attributes                     |

## Color System Integration

The TextInput component uses Versaur's harmonious color palette:

- **Primary (Coral)**: Default brand color for main inputs
- **Secondary (Sage)**: Calming secondary interactions  
- **Tertiary (Mist)**: Professional subtle elements
- **Ghost (Slate)**: Minimal, reliable styling
- **Neutral**: Clean, unobtrusive inputs
- **Success**: Positive feedback states
- **Info**: Information and neutral alerts
- **Warning**: Caution and attention states
- **Danger**: Error states with background tinting

## Error Handling

When the `error` prop is provided:
- Input automatically switches to danger variant with background tinting
- Helper text is hidden and replaced with error message
- Error message uses `role="alert"` for accessibility
- Focus ring and border colors change to danger theme

## Accessibility

- Uses semantic `aria-invalid`, `aria-disabled`, and native `disabled` attributes
- Error messages use `role="alert"` for screen readers
- Labels are properly associated with inputs using `htmlFor` and `id` attributes
- Automatic ID generation with `useId()` when no custom ID is provided
- Meets WCAG 2.1 AA contrast standards
- Proper focus management with visible focus indicators

## Best Practices

1. **Use appropriate variants**: Match the input variant to the context and importance
2. **Provide helpful text**: Use `helperText` to guide users
3. **Handle errors gracefully**: Use the `error` prop for validation feedback
4. **Choose meaningful content**: Icons and elements in `leftContent`/`rightContent` should reinforce the input's purpose
5. **Disable when needed**: Use the `disabled` prop for non-editable fields
6. **Integrate with forms**: Component works seamlessly with native form elements
