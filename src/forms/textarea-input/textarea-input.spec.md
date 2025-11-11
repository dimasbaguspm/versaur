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

| Prop           | Type                      | Default | Description                                              |
| -------------- | ------------------------- | ------- | -------------------------------------------------------- |
| `label`        | `ReactNode`               | -       | Label text displayed above the textarea                  |
| `helperText`   | `ReactNode`               | -       | Helper text displayed below the textarea                 |
| `error`        | `ReactNode`               | -       | Error message for validation states                      |
| `value`        | `string`                  | -       | Current value (controlled mode) - plain text or HTML     |
| `defaultValue` | `string`                  | -       | Initial value (uncontrolled mode) - plain text or HTML   |
| `onChange`     | `(value: string) => void` | -       | Callback fired when content changes                      |
| `disabled`     | `boolean`                 | `false` | Disables the textarea (sets contentEditable to false)    |
| `readOnly`     | `boolean`                 | `false` | Makes textarea read-only (sets contentEditable to false) |
| `placeholder`  | `string`                  | -       | Placeholder text shown when empty                        |
| `name`         | `string`                  | -       | Name attribute for form identification                   |
| `row`          | `number`                  | `3`     | Number of rows (min/max height as `row * 1.5 + 1` rem)   |
| `required`     | `boolean`                 | `false` | Marks the field as required with asterisk indicator      |
| `className`    | `string`                  | -       | Additional CSS classes for the container                 |

### Rich Text Formatting Props

| Prop             | Type           | Default | Description                                           |
| ---------------- | -------------- | ------- | ----------------------------------------------------- |
| `showToolbar`    | `boolean`      | `false` | Whether to show the formatting toolbar                |
| `allowedFormats` | `FormatType[]` | all     | Array of allowed formatting options (filters toolbar) |

### FormatType

Available formatting options:

```typescript
type FormatType =
  | 'bold' // Bold text
  | 'italic' // Italic text
  | 'underline' // Underlined text
  | 'strikethrough' // Strikethrough text
  | 'h1' // Heading 1
  | 'h2' // Heading 2
  | 'h3' // Heading 3
  | 'orderedList' // Numbered list
  | 'unorderedList' // Bulleted list
  | 'link' // Hyperlink
```

### FormatState

State object indicating which formats are currently active:

```typescript
interface FormatState {
  bold: boolean
  italic: boolean
  underline: boolean
  strikethrough: boolean
  h1: boolean
  h2: boolean
  h3: boolean
  orderedList: boolean
  unorderedList: boolean
  link: boolean
}
```

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

#### Plain Text Mode (default)

When `showToolbar={false}`:

- Strips formatting to ensure plain text only
- Uses modern Selection API for inserting text (no deprecated execCommand)
- Prevents paste when disabled or readOnly
- Extracted to `handlePlainTextPaste` helper function in helpers.ts

#### Rich Text Mode

When `showToolbar={true}`:

- Preserves HTML formatting from clipboard
- Content is stored as HTML string
- Use with FormattedText component for display

### Rich Text Formatting

When `showToolbar={true}`, a formatting toolbar appears above the textarea:

#### Toolbar Features

- **Text Formatting**: Bold, Italic, Underline, Strikethrough
- **Headings**: H1, H2, H3
- **Lists**: Ordered (numbered), Unordered (bulleted)
- **Links**: Create/edit hyperlinks with URL and text

#### Formatting Behavior

1. **Toggle Formats**: Click toolbar button to apply/remove format
2. **Active State**: Toolbar buttons highlight when format is active at cursor position
3. **Selection-based**: Most formats apply to current selection or cursor position
4. **Link Creation**:
   - With selection: Prompts for URL, converts selected text to link
   - Without selection: Prompts for URL and link text, inserts new link

#### Link Insertion

The link button has special behavior:

- **With selected text**: Converts selection to link using provided URL
- **Without selection**: Prompts for both URL and link text, then inserts anchor element
- **Link attributes**: Automatically adds `target="_blank"` and `rel="noopener noreferrer"`

#### Content Format

- **Plain text mode**: `textContent` (string)
- **Rich text mode**: `innerHTML` (HTML string)
- Store HTML from `onChange` callback
- Display with `FormattedText` component

```tsx
// Rich text editing
const [htmlContent, setHtmlContent] = useState('')

<TextAreaInput
  label="Content"
  showToolbar
  value={htmlContent}
  onChange={setHtmlContent}
/>

// Display formatted content
import { FormattedText } from '@dimasbaguspm/versaur/primitive'
import DOMPurify from 'dompurify'

<FormattedText content={DOMPurify.sanitize(htmlContent)} />
```

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
- **Min/Max Height**: Calculated as `row * 1.5 + 1` rem (default: 3 rows = 5.5rem)
  - Accounts for line height (1.5) and padding (1rem)
  - Sets both `minHeight` and `maxHeight` for scrollable behavior
- **Overflow**: `overflow-y-auto` for vertical scrolling when content exceeds max height
- **Padding**: 3px (horizontal) × 2px (vertical)
- **Text Behavior**: `whitespace-pre-wrap`, `break-words`

### Rich Text Formatting Styles

When `showToolbar={true}`, applies `formattedContentStyles` from `@/primitive/formatted-text`:

- **Headings**: Appropriate sizes (h1: 2xl, h2: xl, h3: lg) and weights
- **Lists**: Proper indentation and list styling
- **Links**: Primary color with underline and hover effects
- **Text formatting**: Bold, italic, underline, strikethrough
- **Paragraphs**: Proper spacing with first/last child handling

These styles match the `FormattedText` component for visual consistency between editing and display
modes.

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

### Toolbar Accessibility

When `showToolbar={true}`:

- `role="toolbar"`: Identifies the formatting toolbar
- `aria-label="Text formatting toolbar"`: Describes toolbar purpose
- `aria-pressed`: Indicates active/inactive state of format buttons
- `aria-label` on each button: Describes formatting action (e.g., "Bold", "Insert Link")

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

### `getTextAreaState(readOnly?, hasError?)`

Determines the appropriate state variant based on component props. Priority order:

1. `readOnly` → returns 'readOnly'
2. `hasError` → returns 'error'
3. Otherwise → returns 'default'

### `handlePlainTextPaste(e, disabled?, readOnly?)`

Handles paste events to insert plain text only using modern Selection API:

- Prevents paste when disabled or readOnly
- Strips all formatting from pasted content
- Uses `window.getSelection()` and `Range` API (no deprecated execCommand)
- Positions cursor after inserted text
- Triggers input event to update component state
- Only used when `showToolbar={false}`

### `applyFormat(format, value?)`

Applies formatting to the current selection using `document.execCommand`:

- **Text formatting**: bold, italic, underline, strikethrough
- **Headings**: h1, h2, h3 (using formatBlock)
- **Lists**: orderedList, unorderedList
- **Links**: createLink with special handling for empty selections

Note: Uses `execCommand` (deprecated but still most reliable for contentEditable)

### `isFormatActive(format)`

Checks if a format is currently active at cursor position:

- Uses `queryCommandState` for most formats
- Uses normalized `queryCommandValue` for headings (handles `<h1>`, `h1` variations)
- Returns boolean indicating active state

### `getFormatState()`

Returns complete `FormatState` object with all format active states:

```typescript
{
  bold: boolean,
  italic: boolean,
  underline: boolean,
  strikethrough: boolean,
  h1: boolean,
  h2: boolean,
  h3: boolean,
  orderedList: boolean,
  unorderedList: boolean,
  link: boolean
}
```

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

1. **Rendering**: Label, placeholder, default value, toolbar (when enabled)
2. **User Input**: Typing, pasting, keyboard navigation
3. **States**: Disabled, readOnly, error
4. **Formatting**: Toolbar buttons, format state, HTML output
5. **Accessibility**: ARIA attributes, keyboard support, error announcements, toolbar accessibility
6. **Controlled/Uncontrolled**: Both modes work correctly

### Testing contentEditable

Use `textContent` for plain text mode:

```tsx
const textbox = screen.getByRole('textbox')
expect(textbox.textContent).toBe('Expected content')
```

Use `innerHTML` for rich text mode:

```tsx
const textbox = screen.getByRole('textbox')
expect(textbox.innerHTML).toContain('<strong>bold text</strong>')
```

### Testing Formatting

```tsx
// Test toolbar presence
const toolbar = screen.getByRole('toolbar')
expect(toolbar).toBeInTheDocument()

// Test format buttons
const boldButton = screen.getByLabelText('Bold')
expect(boldButton).toHaveAttribute('aria-pressed', 'false')

// Click and verify
await userEvent.click(boldButton)
expect(boldButton).toHaveAttribute('aria-pressed', 'true')
```

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
5. Add `showToolbar` prop for rich text editing
6. Update tests to check `textContent` or `innerHTML` instead of `value`

### Breaking Changes

- ❌ Removed: `variant` prop (defaults to primary)
- ❌ Removed: `fieldSizing`, `minRows`, `maxRows` props
- ❌ Changed: Element type from `<textarea>` to `<div contentEditable>`
- ❌ Changed: Ref type from `HTMLTextAreaElement` to `HTMLDivElement`
- ❌ Changed: Height now uses min/max-height for scrollable behavior
- ✅ Added: `readOnly` prop
- ✅ Added: `showToolbar` prop for rich text editing
- ✅ Added: `allowedFormats` prop to filter toolbar options
- ✅ Added: `onFormatChange` callback for format state changes
- ✅ Improved: Better cross-browser consistency

## Future Enhancements

Potential future additions:

- ~~Rich text formatting (bold, italic, etc.)~~ ✅ **Implemented**
- Additional formatting options (subscript, superscript, code)
- Markdown support with preview mode
- Mention/tag functionality with autocomplete
- Character/word count display
- Max length validation with visual feedback
- Syntax highlighting for code input
- Custom toolbar themes/layouts
- Image/file insertion support
- Table insertion and editing
- Undo/redo functionality
- Keyboard shortcuts for formatting
- Custom format button icons
