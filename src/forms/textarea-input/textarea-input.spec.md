# TextAreaInput Component Specification

## Overview

The `TextAreaInput` component provides a robust multi-line text input field using a
`contentEditable` div element instead of the standard HTML `<textarea>`. This approach offers better
control, consistent cross-browser behavior, and more flexibility for advanced text editing features.

## Architecture

### Implementation Approach

- **Element Type**: `contentEditable` div
- **Pattern**: Regular Pattern (aligns with standard form input behavior)
- **Styling**: Primary variant by default (Versaur coral color)
- **State Management**: Supports both controlled and uncontrolled modes

### Why contentEditable?

1. **Better Control**: More granular control over content, formatting, and behavior
2. **Cross-browser Consistency**: Avoids mobile browser limitations (e.g., Chrome mobile
   field-sizing issues)
3. **Flexibility**: Easier to extend with rich text features in the future
4. **Natural Auto-resize**: Content naturally expands without complex CSS tricks

## Props API

### Core Props

| Prop           | Type                      | Default | Description                                               |
| -------------- | ------------------------- | ------- | --------------------------------------------------------- |
| `label`        | `ReactNode`               | -       | Label text displayed above the textarea                   |
| `helperText`   | `ReactNode`               | -       | Helper text displayed below the textarea                  |
| `error`        | `ReactNode`               | -       | Error message for validation states                       |
| `value`        | `string`                  | -       | Current value (controlled mode)                           |
| `defaultValue` | `string`                  | -       | Initial value (uncontrolled mode)                         |
| `onChange`     | `(value: string) => void` | -       | Callback fired when content changes                       |
| `disabled`     | `boolean`                 | `false` | Disables the textarea (sets contentEditable to false)     |
| `readOnly`     | `boolean`                 | `false` | Makes textarea read-only (sets contentEditable to false)  |
| `placeholder`  | `string`                  | -       | Placeholder text shown when empty                         |
| `name`         | `string`                  | -       | Name attribute for form identification                    |
| `row`          | `number`                  | `3`     | Number of rows (height calculated as `row * 1.5 + 1` rem) |
| `required`     | `boolean`                 | `false` | Marks the field as required with asterisk indicator       |
| `className`    | `string`                  | -       | Additional CSS classes for the container                  |

### HTML Attributes

Extends `HTMLAttributes<HTMLDivElement>` with exclusions:

- Excludes: `onChange`, `children`, `defaultValue` (redefined with specific types)
- Includes: `id`, `onBlur`, `onFocus`, `onKeyDown`, `style`, ARIA attributes, etc.

## Behavior

### Controlled vs Uncontrolled

```tsx
// Uncontrolled (uses internal state)
<TextAreaInput defaultValue="Initial content" />

// Controlled (parent manages state)
const [value, setValue] = useState('')
<TextAreaInput value={value} onChange={setValue} />
```

### States

1. **Normal**: Default interactive state
2. **Disabled**: `contentEditable={false}`, prevents all interactions, shows disabled styling
3. **ReadOnly**: `contentEditable={false}`, allows selection/copy but not editing
4. **Error**: Shows error message, applies danger styling, sets `aria-invalid={true}`

### Placeholder

Implemented using CSS pseudo-elements:

```css
empty:before:content-[attr(data-placeholder)]
empty:before:text-gray-400
```

### Paste Handling

- Strips formatting to ensure plain text only
- Uses modern Selection API for inserting text (no deprecated execCommand)
- Prevents paste when disabled or readOnly
- Extracted to `handlePlainTextPaste` helper function in helpers.ts

## Styling

### State-Based Variants

The component uses a `state` variant system for cleaner, more maintainable styling:

- **default**: Primary (coral) border with focus ring
- **error**: Danger border and background with error focus ring
- **disabled**: Gray background, reduced opacity, no pointer events
- **readOnly**: Gray background, no focus ring, cursor default

State is determined by the `getTextAreaState` helper function based on props.

### Default Styling

- **Variant**: Primary (coral) by default
- **Border**: `border-primary/30` with focus state `border-primary`
- **Focus Ring**: `ring-primary/20` with 2px ring
- **Min Height**: Calculated as `row * 1.5 + 1` rem (default: 3 rows = 5.5rem)
  - Accounts for line height (1.5) and padding (1rem)
- **Padding**: 3px (horizontal) × 2px (vertical)
- **Text Behavior**: `whitespace-pre-wrap`, `break-words`

### Error Styling

- **Border**: `border-danger`
- **Background**: `bg-danger/5`
- **Focus Ring**: `ring-danger/20`

### Disabled/ReadOnly Styling

- **Background**: `bg-gray-50`
- **Opacity**: `opacity-50` (disabled only)
- **Cursor**: `pointer-events-none` (disabled), `cursor-default` (readOnly)

## Accessibility

### ARIA Attributes

- `role="textbox"`: Identifies as text input
- `aria-multiline="true"`: Indicates multi-line support
- `aria-invalid={hasError}`: Signals validation state
- `aria-disabled={disabled}`: Announces disabled state
- `aria-readonly={readOnly}`: Announces read-only state
- `aria-required={required}`: Announces required state
- `aria-label`: Uses label text when label is a string

### Required Field Indicator

When `required={true}`:

- Red asterisk (\*) appears after the label
- Asterisk has `aria-label="required"` for screen readers
- `aria-required="true"` is set on the textbox element
- Follows the same pattern as TextInput component

### Keyboard Support

- **Standard Text Editing**: All standard shortcuts work (Ctrl+C, Ctrl+V, etc.)
- **Tab**: Moves focus to next/previous element
- **Enter**: Inserts new line
- **Disabled/ReadOnly**: Prevents keyboard input

### Error Announcements

Error messages use `role="alert"` to ensure screen readers announce them immediately when validation
fails.

## Helper Functions

The component uses helper functions from `helpers.ts` for cleaner, more maintainable code:

### `getTextAreaState(disabled?, readOnly?, hasError?)`

Determines the appropriate state variant based on component props. Priority order:

1. `disabled` → returns 'disabled'
2. `readOnly` → returns 'readOnly'
3. `hasError` → returns 'error'
4. Otherwise → returns 'default'

### `handlePlainTextPaste(e, disabled?, readOnly?)`

Handles paste events to insert plain text only using modern Selection API:

- Prevents paste when disabled or readOnly
- Strips all formatting from pasted content
- Uses `window.getSelection()` and `Range` API (no deprecated execCommand)
- Positions cursor after inserted text
- Triggers input event to update component state

### `textAreaInputVariants`

CVA-based variant system with state-specific styling:

- Uses single `state` variant instead of multiple boolean variants
- Includes all necessary styling (border, background, focus, cursor, etc.)
- More maintainable and easier to extend

## Form Integration

### Name Attribute

The `name` prop is stored in a `data-name` attribute on the contentEditable div. For full form
integration, you may need to use a hidden input or custom form handling:

```tsx
;<TextAreaInput name='message' value={message} onChange={setMessage} />
// In form submit:
formData.append('message', message)
```

## Browser Compatibility

- ✅ Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)
- ⚠️ contentEditable behavior may vary slightly in older browsers
- ⚠️ Placeholder pseudo-element requires modern CSS support

## Testing Considerations

### Key Test Scenarios

1. **Rendering**: Label, placeholder, default value
2. **User Input**: Typing, pasting, keyboard navigation
3. **States**: Disabled, readOnly, error
4. **Accessibility**: ARIA attributes, keyboard support, error announcements
5. **Controlled/Uncontrolled**: Both modes work correctly

### Testing contentEditable

Use `textContent` instead of `value`:

```tsx
const textbox = screen.getByRole('textbox')
expect(textbox.textContent).toBe('Expected content')
```

## Migration Notes

### From Standard Textarea

If migrating from a standard `<textarea>`:

1. Replace `<textarea>` with `<TextAreaInput>`
2. Remove `variant` prop (now defaults to primary)
3. Remove `fieldSizing`, `minRows`, `maxRows` props (no longer needed)
4. Add `readOnly` prop if you need read-only state
5. Update tests to check `textContent` instead of `value`

### Breaking Changes

- ❌ Removed: `variant` prop (defaults to primary)
- ❌ Removed: `fieldSizing`, `minRows`, `maxRows` props
- ❌ Changed: Element type from `<textarea>` to `<div contentEditable>`
- ❌ Changed: Ref type from `HTMLTextAreaElement` to `HTMLDivElement`
- ✅ Added: `readOnly` prop
- ✅ Improved: Better cross-browser consistency

## Future Enhancements

Potential future additions:

- Rich text formatting (bold, italic, etc.)
- Markdown support
- Mention/tag functionality
- Character/word count
- Max length validation with visual feedback
- Syntax highlighting for code input
