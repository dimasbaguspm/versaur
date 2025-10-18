# SwitchInput Component Specification

## Overview

The **SwitchInput** component is a controlled switch component for boolean toggles that directly
aligns with the native HTML checkbox input element using `role="switch"`. It follows the **Regular
Pattern** as it enhances a single HTML element with proper ARIA attributes and switch-specific
behavior while maintaining browser-standard functionality.

## Component Pattern

**Regular Pattern** - This component directly enhances the native `<input type="checkbox">` HTML
element with `role="switch"`, providing a familiar developer experience with proper switch semantics
and accessibility features.

## Features

- ✅ **Browser-Standard Behavior**: Aligns with native checkbox input element with switch role
- ✅ **Controlled Component**: Uses `value` and `onChange` props for state management
- ✅ **Full Accessibility**: ARIA switch role, proper aria-checked, and label association
- ✅ **Required Field Indicator**: Visual asterisk for required fields
- ✅ **Inline Label**: Consistent inline layout with proper spacing
- ✅ **Primary Color**: Uses Versaur's primary coral color for visual identity
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### Props

Extends all native `InputHTMLAttributes<HTMLInputElement>` properties (except `type`, `value`,
`onChange`, and `size`).

| Prop        | Type                       | Default | Description                                   |
| ----------- | -------------------------- | ------- | --------------------------------------------- |
| `value`     | `boolean`                  | -       | Controlled value state (checked or unchecked) |
| `onChange`  | `(value: boolean) => void` | -       | Callback when value changes                   |
| `label`     | `string`                   | -       | Label text displayed inline with the switch   |
| `required`  | `boolean`                  | `false` | Whether the field is required                 |
| `disabled`  | `boolean`                  | `false` | Whether the switch is disabled                |
| `id`        | `string`                   | auto    | Custom ID (auto-generated if not provided)    |
| `ariaLabel` | `string`                   | -       | aria-label for accessibility when no label    |
| `className` | `string`                   | -       | Additional CSS classes for the container      |

### Visual Style

The SwitchInput uses the **primary** variant with Versaur's coral color (`--color-primary`) for the
checked state, ensuring consistency with the brand identity.

**Track (Unchecked):**

- Background: `bg-white`
- Border: `border-border` (neutral border)
- Width: `w-10` (40px)
- Height: `h-5` (20px)

**Track (Checked):**

- Background: `bg-primary` (Versaur coral)
- Border: `border-transparent`

**Thumb (Unchecked):**

- Background: `bg-neutral` (gray)
- Size: `h-4 w-4` (16px × 16px)
- Position: `left-0.5` (2px from left)

**Thumb (Checked):**

- Background: `bg-white`
- Size: `h-4 w-4` (16px × 16px)
- Position: `translate-x-full left-1.5` (slides to right)
- Transition: `duration-200` (smooth animation)

**Disabled State:**

- Opacity: 50%
- Cursor: `cursor-not-allowed`
- Label: Gray text with reduced opacity

### States

#### Normal

- Default interactive state
- Toggles between checked and unchecked on click
- Primary-colored track when checked
- Smooth transition animation

#### Checked

- `value` is `true`
- Track has primary background color
- Thumb slides to the right with white background
- `aria-checked="true"`

#### Unchecked

- `value` is `false`
- Track has white background with border
- Thumb positioned on the left with neutral color
- `aria-checked="false"`

#### Disabled

- Cannot be toggled
- Reduced opacity (50%)
- Label text is grayed out
- `cursor-not-allowed` on hover
- Input has `disabled` attribute

#### Required

- Shows red asterisk (\*) next to label
- Asterisk has `aria-label="required"` for screen readers
- Form validation will require the switch to be checked

## Accessibility

### ARIA Attributes

- **`role="switch"`**: Identifies the input as a switch control
- **`aria-checked`**: Reflects the current checked state (true/false)
- **`aria-label`**: Used when no visible label is provided
- **`id`**: Auto-generated or custom, associates label with input
- **`required`**: Native HTML attribute for form validation

### Keyboard Support

- **Space**: Toggle the switch state
- **Enter**: Submit the form (if inside a form)
- **Tab**: Navigate to/from the switch

### Screen Reader Support

- Announces the switch role and current state
- Reads the label or aria-label
- Announces "required" when the required attribute is present
- Announces state changes when toggled

### Focus Management

- Visible focus indicator on keyboard navigation
- Focus follows browser-standard behavior
- Input element receives focus, not the visual track/thumb

## Usage Examples

### Basic Usage

```tsx
import { useState } from 'react'
import { SwitchInput } from '@versaur/forms'

function Example() {
  const [enabled, setEnabled] = useState(false)

  return <SwitchInput label='Enable notifications' value={enabled} onChange={setEnabled} />
}
```

### Required Field

```tsx
<SwitchInput label='Accept terms and conditions' value={accepted} onChange={setAccepted} required />
```

### Without Label

```tsx
<SwitchInput ariaLabel='Toggle dark mode' value={darkMode} onChange={setDarkMode} />
```

### Disabled State

```tsx
<SwitchInput label='Notifications' value={true} onChange={() => {}} disabled />
```

### Form Integration

```tsx
function SettingsForm() {
  const [settings, setSettings] = useState({
    notifications: false,
    marketing: false,
    updates: true,
  })

  return (
    <form>
      <SwitchInput
        label='Push notifications'
        value={settings.notifications}
        onChange={val => setSettings({ ...settings, notifications: val })}
      />
      <SwitchInput
        label='Marketing emails'
        value={settings.marketing}
        onChange={val => setSettings({ ...settings, marketing: val })}
        required
      />
      <SwitchInput
        label='Product updates'
        value={settings.updates}
        onChange={val => setSettings({ ...settings, updates: val })}
      />
    </form>
  )
}
```

## Implementation Notes

### Controlled Component

The SwitchInput is a **controlled component**, meaning:

- State is managed by the parent component
- `value` prop determines the current state
- `onChange` callback is called when user toggles the switch
- The component does not manage its own internal state

### HTML Structure

```html
<div class="inline-flex items-center gap-2">
  <span class="relative inline-flex items-center">
    <input type="checkbox" role="switch" aria-checked="false" />
    <span class="...track..." aria-hidden="true" />
    <span class="...thumb..." aria-hidden="true" />
  </span>
  <label>
    Label text
    <span aria-label="required">*</span>
  </label>
</div>
```

### Label Placement

- **Always Inline**: The label is always placed inline (to the right) of the switch
- Consistent layout across all use cases
- Proper spacing with `gap-2` between switch and label
- Label can be clicked to toggle the switch

### Why Regular Pattern?

The SwitchInput follows the **Regular Pattern** because:

1. **Native Element**: Built on top of `<input type="checkbox">` with `role="switch"`
2. **Browser Standards**: Leverages native browser behavior for forms and validation
3. **Familiar API**: Uses standard HTML props like `disabled`, `required`, `id`
4. **Simple State**: Single boolean value controlled via `value` and `onChange`
5. **Accessibility**: Relies on native browser accessibility features

## Browser Support

- Modern browsers with CSS custom properties support
- Tailwind CSS v4 required
- React 19+ recommended

## Testing

See `__tests__/switch-input.test.tsx` for comprehensive test coverage including:

- Snapshot testing
- Controlled state toggling
- ARIA role and aria-checked attributes
- Disabled state
- Required field asterisk
- No-label with aria-label
- Multiple switches with independent states

## Design Principles

1. **Simplicity**: Fixed primary color and medium size for consistency
2. **Accessibility First**: Proper ARIA attributes and keyboard support
3. **Browser Alignment**: Follows native HTML input patterns
4. **Controlled State**: Predictable, controlled component behavior
5. **Visual Clarity**: Clear on/off states with smooth animations
