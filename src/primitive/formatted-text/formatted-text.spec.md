# FormattedText Component Specification

## Overview

The `FormattedText` component displays rich HTML content with consistent, professional formatting
styles. It serves as a companion to the `TextAreaInput` component with toolbar, ensuring that
content created with formatted text editing displays identically when rendered in read-only mode.

## Architecture

### Implementation Approach

- **Element Type**: `div` with `dangerouslySetInnerHTML`
- **Pattern**: Regular Pattern (simple display component)
- **Styling**: Shared formatting styles from `formattedContentStyles`
- **Security**: Requires sanitized HTML input to prevent XSS attacks

### Design Philosophy

1. **Visual Consistency**: Matches TextAreaInput formatting exactly
2. **Shared Styling**: Uses `formattedContentStyles` array shared with TextAreaInput
3. **Maintainability**: Single source of truth for formatting styles
4. **Accessibility**: Semantic HTML with proper ARIA attributes

## Props API

### Core Props

| Prop         | Type      | Default      | Description                                                |
| ------------ | --------- | ------------ | ---------------------------------------------------------- |
| `content`    | `string`  | **required** | HTML content to display (must be sanitized)                |
| `scrollable` | `boolean` | `false`      | Whether content should be scrollable with overflow         |
| `maxHeight`  | `number`  | -            | Maximum height in rem units (only applies when scrollable) |
| `className`  | `string`  | -            | Additional CSS classes                                     |

### HTML Attributes

Extends `HTMLAttributes<HTMLDivElement>` with exclusions:

- Excludes: `children`, `defaultValue` (content prop is used instead)
- Includes: `id`, `style`, `onClick`, ARIA attributes, etc.

## Behavior

### Content Rendering

- Uses `dangerouslySetInnerHTML` to render HTML
- No processing or transformation of HTML content
- Assumes content is already sanitized

### Scrollable Mode

When `scrollable={true}`:

- Applies `overflow-y-auto` for vertical scrolling
- If `maxHeight` is provided, sets `max-height` style in rem
- Content scrolls when it exceeds the max height

```tsx
// Non-scrollable (content expands naturally)
<FormattedText content={htmlContent} />

// Scrollable with max height
<FormattedText content={htmlContent} scrollable maxHeight={15} />
```

## Security

### XSS Prevention

⚠️ **CRITICAL**: This component uses `dangerouslySetInnerHTML` and is vulnerable to XSS attacks if
used with unsanitized user-generated content.

**Best Practices:**

1. **Always Sanitize**: Use a library like DOMPurify for user-generated content
2. **Trust Source**: Only use with content from trusted sources or sanitized content
3. **Content Security Policy**: Implement CSP headers to mitigate XSS risks

**Example with DOMPurify:**

```tsx
import DOMPurify from 'dompurify'

const sanitizedContent = DOMPurify.sanitize(userGeneratedHTML, {
  ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'strong', 'em', 'u', 's', 'a', 'ul', 'ol', 'li'],
  ALLOWED_ATTR: ['href', 'target', 'rel']
})

<FormattedText content={sanitizedContent} />
```

## Styling

### Shared Formatting Styles

The component uses `formattedContentStyles` from `helpers.ts`, which is shared with TextAreaInput:

#### Headings

- **h1**: `text-2xl`, `leading-loose`, `font-bold`, `my-2`
- **h2**: `text-2xl`, `leading-relaxed`, `font-semibold`, `my-2`
- **h3**: `text-2xl`, `leading-relaxed`, `font-medium`, `my-1.5`
- **h4**: `text-xl`, `leading-normal`, `font-bold`, `my-1.5`
- **h5**: `text-lg`, `leading-normal`, `font-semibold`, `my-1.5`
- **h6**: `text-base`, `leading-normal`, `font-medium`, `my-1`

#### Lists

- **ul**: `list-disc`, `ml-6`, `my-2`, `text-base`, `leading-normal`
- **ol**: `list-decimal`, `ml-6`, `my-2`, `text-base`, `leading-normal`
- **li**: `my-0.5`, `text-base`, `leading-normal`

#### Links

- **a**: `text-primary`, `underline`, `cursor-pointer`, `hover:text-primary-bold`

#### Text Formatting

- **strong**: `font-bold`
- **em**: `italic`
- **u**: `underline`
- **s**: `line-through`

#### Paragraphs

- **p**: `text-base`, `leading-normal`, `text-ghost`, `my-2`
- **p:first-child**: `mt-0`
- **p:last-child**: `mb-0`

### Base Styling

- `block w-full`: Full width block element
- `text-ghost text-base leading-normal`: Matches Text defaults for readable body copy
- `break-words`: Prevents overflow with long words

### Scrollable Styling

When `scrollable={true}`:

- `overflow-y-auto`: Vertical scrolling
- `max-height`: Set via inline style (in rem)

## Accessibility

### ARIA Attributes

- `role="article"`: Identifies content as article region
- `aria-label="Formatted text content"`: Describes the content region

### Semantic HTML

The component relies on semantic HTML within the content:

- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<strong>` for important text, `<em>` for emphasis
- Use semantic list elements (`<ul>`, `<ol>`, `<li>`)
- Ensure links have meaningful text and proper attributes

### Link Accessibility

Links in content should include:

- `target="_blank"`: Opens in new tab (when appropriate)
- `rel="noopener noreferrer"`: Security for external links
- Meaningful link text (avoid "click here")

## Helper Functions

### `formattedContentStyles`

Array of Tailwind classes for formatting rich text content:

```typescript
export const formattedContentStyles = [
  // Headings
  '[&_h1]:text-2xl',
  '[&_h1]:font-bold',
  '[&_h1]:my-2',
  // ... (see full list in helpers.ts)
] as const
```

**Shared Usage:**

- `FormattedText`: Applies to display content
- `TextAreaInput` (with toolbar): Applies to editable content
- Ensures identical visual output

### `formattedTextVariants`

CVA-based variant system:

```typescript
formattedTextVariants({
  scrollable: true | false,
})
```

## Integration with TextAreaInput

### Workflow

1. User creates/edits content in `TextAreaInput` with `showToolbar={true}`
2. Content is stored as HTML string (value from `onChange`)
3. Content is sanitized (e.g., with DOMPurify)
4. Content is displayed using `FormattedText`

### Example

```tsx
// Edit mode
const [content, setContent] = useState('')

<TextAreaInput
  label="Message"
  showToolbar
  value={content}
  onChange={setContent}
/>

// Display mode
import DOMPurify from 'dompurify'

const sanitizedContent = DOMPurify.sanitize(content)

<FormattedText content={sanitizedContent} />
```

## Browser Compatibility

- ✅ All modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)
- ✅ No special browser features required
- ✅ CSS arbitrary variants require Tailwind CSS

## Testing Considerations

### Key Test Scenarios

1. **Rendering**: HTML content renders correctly
2. **Formatting**: Headings, lists, links styled correctly
3. **Scrollable**: Overflow behavior with max height
4. **Accessibility**: ARIA attributes, semantic HTML
5. **Security**: Does not execute scripts (XSS prevention)
6. **Custom Styling**: className prop applies correctly

### Testing HTML Content

```tsx
render(<FormattedText content='<h1>Title</h1><p>Content</p>' />)

expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Title')
expect(screen.getByRole('article')).toBeInTheDocument()
```

### Testing Styles

```tsx
const { container } = render(<FormattedText content={content} />)

const heading = container.querySelector('h1')
expect(heading).toHaveClass('text-2xl', 'font-bold')
```

## Use Cases

### 1. Display Formatted Content

```tsx
<FormattedText content={article.htmlContent} />
```

### 2. Comments/Messages

```tsx
const sanitizedComment = DOMPurify.sanitize(comment.content)
<FormattedText content={sanitizedComment} />
```

### 3. Blog Posts with Preview

```tsx
<FormattedText content={post.excerpt} scrollable maxHeight={10} className='border rounded-md p-4' />
```

### 4. Email/Notification Content

```tsx
<FormattedText content={notification.formattedBody} />
```

## Limitations

### Content Limitations

- No built-in sanitization (must sanitize before passing)
- No content transformation or processing
- No validation of HTML structure

### Styling Limitations

- Only supports predefined formatting styles
- Cannot customize per-instance formatting (use className for container)
- Styles apply globally to all matching elements

### Functional Limitations

- Read-only display only (no editing)
- No content interactions (copy, select handled by browser)
- No built-in content length limits

## Best Practices

### Content Sanitization

```tsx
// ✅ Good: Sanitize user content
const safe = DOMPurify.sanitize(userContent, {
  ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'strong', 'em', 'a', 'ul', 'ol', 'li'],
  ALLOWED_ATTR: ['href', 'target', 'rel']
})
<FormattedText content={safe} />

// ❌ Bad: Raw user content
<FormattedText content={userContent} />
```

### Performance

```tsx
// ✅ Good: Memoize sanitized content
const sanitizedContent = useMemo(
  () => DOMPurify.sanitize(rawContent),
  [rawContent]
)
<FormattedText content={sanitizedContent} />

// ❌ Bad: Sanitize on every render
<FormattedText content={DOMPurify.sanitize(rawContent)} />
```

### Accessibility

```tsx
// ✅ Good: Proper heading hierarchy
<FormattedText content="<h2>Section</h2><h3>Subsection</h3>" />

// ❌ Bad: Skipping levels
<FormattedText content="<h1>Title</h1><h3>Subsection</h3>" />
```

## Migration Notes

### From Custom HTML Rendering

If migrating from custom HTML rendering:

1. Extract HTML rendering to use `FormattedText`
2. Add sanitization if displaying user content
3. Replace custom formatting styles with shared `formattedContentStyles`
4. Update tests to use `FormattedText` component

### Compatibility

- ✅ Drop-in replacement for read-only HTML display
- ✅ Works with existing HTML content
- ✅ No breaking changes to content format

## Future Enhancements

Potential future additions:

- Content truncation with "Read more" link
- Built-in sanitization option
- Custom formatting style variants
- Code syntax highlighting support
- Table support
- Image support with lazy loading
- Export to plain text utility
- Content search/highlight functionality
