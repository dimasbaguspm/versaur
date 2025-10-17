# ButtonAnchor Component Specification

## Overview

The **ButtonAnchor** component is an accessible navigation link styled as a button that directly
aligns with the native HTML `<a>` element. It follows the **Regular Pattern** as it enhances a
single HTML element with button-styled variants while maintaining browser-standard anchor behavior.

## Component Pattern

**Regular Pattern** - This component directly maps to the native `<a>` HTML element, providing a
familiar developer experience with enhanced button styling and accessibility features for navigation
actions.

## Features

- ✅ **3 Semantic Variants**: Primary, ghost, and outline
- ✅ **3 Size Options**: Small (sm), medium (md), large (lg)
- ✅ **Disabled State**: Prevents navigation with proper accessibility attributes
- ✅ **Full Accessibility**: ARIA attributes, keyboard navigation, focus management
- ✅ **Browser-Standard Behavior**: Aligns with native anchor element
- ✅ **Type Safety**: Fully typed with TypeScript
- ✅ **Responsive Design**: Scales appropriately across viewports

## API Reference

### Props

Extends all native `AnchorHTMLAttributes<HTMLAnchorElement>` properties (except `href` which is
required).

| Prop        | Type                                | Default     | Required | Description                                  |
| ----------- | ----------------------------------- | ----------- | -------- | -------------------------------------------- |
| `variant`   | `'primary' \| 'ghost' \| 'outline'` | `'primary'` | No       | Visual style variant                         |
| `size`      | `'sm' \| 'md' \| 'lg'`              | `'md'`      | No       | Size of the button anchor                    |
| `disabled`  | `boolean`                           | `false`     | No       | Whether the anchor is disabled               |
| `href`      | `string`                            | -           | **Yes**  | URL the anchor points to                     |
| `className` | `string`                            | -           | No       | Additional CSS classes                       |
| `children`  | `ReactNode`                         | -           | No       | Button anchor content                        |
| `target`    | `string`                            | -           | No       | Where to open the linked document            |
| `rel`       | `string`                            | -           | No       | Relationship between current and linked docs |

### Variants

#### Primary

- **Purpose**: Main call-to-action navigation links
- **Visual**: Coral background (`bg-primary`), white text
- **Hover**: Slightly darker background, elevated shadow
- **Focus**: Primary-light ring with offset
- **Use Cases**: Primary navigation, main action links, important CTAs

#### Ghost

- **Purpose**: Subtle navigation with minimal visual weight
- **Visual**: White background, foreground text
- **Hover**: Ghost-soft background
- **Focus**: Ghost-light ring with offset
- **Use Cases**: Cancel navigation, tertiary actions, text-like links

#### Outline

- **Purpose**: Secondary navigation or alternative choices
- **Visual**: White background with border, foreground text
- **Hover**: Accent-soft background
- **Focus**: Accent-soft ring with offset
- **Use Cases**: Secondary navigation, alternative options, learn more links

### Sizes

| Size | Height      | Padding     | Min Width      | Text Size | Use Case                             |
| ---- | ----------- | ----------- | -------------- | --------- | ------------------------------------ |
| `sm` | 28px (h-7)  | 12px (px-3) | 36px (2.25rem) | sm        | Compact interfaces, tight spaces     |
| `md` | 36px (h-9)  | 16px (px-4) | 40px (2.5rem)  | sm        | Standard/default for most use cases  |
| `lg` | 40px (h-10) | 32px (px-8) | 44px (2.75rem) | lg        | Prominent primary actions, hero CTAs |

### States

#### Normal

- Default interactive state
- Full opacity, pointer cursor
- Responds to hover, focus, active
- Navigation occurs on click

#### Disabled

- Prevents navigation (href is removed)
- Reduced opacity (50%)
- Pointer events disabled
- `aria-disabled` attribute set to true
- `tabindex` set to -1 (removes from tab order)
- Non-interactive, visually dimmed

## Visual Specifications

### Typography

- **Font**: Medium weight
- **Text Size**:
  - Small: `text-sm`
  - Medium: `text-sm`
  - Large: `text-lg`

### Spacing

- **Gap**: 8px (gap-2) between icon and text
- **Border Radius**: 6px (rounded-md)
- **Focus Ring**: 2px width with 2px offset

### Animations

- **Transition**: All properties, 200ms duration
- **Active Scale**: 0.98 (subtle press effect)
- **Hover Shadow**: Elevation change on primary variant
- **No Underline**: Text decoration removed for button appearance

### Accessibility

#### ARIA Attributes

- `aria-disabled`: Set when `disabled` is true
- `role`: Set to "link" when disabled for proper semantics
- `tabindex`: Set to -1 when disabled to remove from tab order

#### Keyboard Support

- **Enter**: Activates the link (native browser behavior)
- **Tab**: Moves focus to/from the link (skipped when disabled)
- **Focus Visible**: Clear 2px ring indicator with offset

#### Screen Reader Support

- Proper link semantics via native `<a>` element
- State changes announced via ARIA attributes
- Text content is accessible by default
- When disabled, announced as "disabled link"

#### Disabled State Handling

Unlike buttons, anchors don't have a native disabled state. This component implements disabled
behavior by:

1. Removing the `href` attribute (prevents navigation)
2. Adding `aria-disabled="true"` (announces state to screen readers)
3. Setting `tabindex="-1"` (removes from keyboard navigation)
4. Preventing click events via `onClick` handler
5. Applying disabled visual styles

### Color System

Uses CSS custom properties from the Versaur design system:

| Variant | Background        | Text                 | Hover BG                        | Focus Ring              | Border           |
| ------- | ----------------- | -------------------- | ------------------------------- | ----------------------- | ---------------- |
| Primary | `--color-primary` | white                | `--color-primary` (90% opacity) | `--color-primary-light` | -                |
| Ghost   | white             | `--color-foreground` | `--color-ghost-soft`            | `--color-ghost-light`   | -                |
| Outline | white             | `--color-foreground` | `--color-accent-soft`           | `--color-accent-soft`   | `--color-border` |

## Usage Examples

### Basic Usage

```tsx
import { ButtonAnchor } from '@versaur/primitive/button'

// Primary link (default)
<ButtonAnchor href="/dashboard">Go to Dashboard</ButtonAnchor>

// With variant
<ButtonAnchor variant="ghost" href="/cancel">Cancel</ButtonAnchor>

// With size
<ButtonAnchor size="lg" href="/get-started">Get Started</ButtonAnchor>

// Disabled
<ButtonAnchor disabled href="/unavailable">Unavailable</ButtonAnchor>

// External link with proper attributes
<ButtonAnchor href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</ButtonAnchor>
```

### Navigation Actions

```tsx
// Cancel and proceed pattern
<div className='flex gap-3'>
  <ButtonAnchor variant='outline' href='/back'>
    Go Back
  </ButtonAnchor>
  <ButtonAnchor variant='primary' href='/next'>
    Continue
  </ButtonAnchor>
</div>
```

### Call-to-Action

```tsx
// Hero section CTA
<div className='flex gap-4'>
  <ButtonAnchor variant='primary' size='lg' href='/signup'>
    Sign Up Free
  </ButtonAnchor>
  <ButtonAnchor variant='outline' size='lg' href='/learn-more'>
    Learn More
  </ButtonAnchor>
</div>
```

### Card Actions

```tsx
// Navigation within cards
<div className='rounded-lg border p-6'>
  <h3 className='mb-2 text-lg font-semibold'>Feature Title</h3>
  <p className='mb-4 text-gray-600'>Feature description goes here.</p>
  <ButtonAnchor variant='primary' href='/features/detail'>
    View Details
  </ButtonAnchor>
</div>
```

### Conditional Disabled State

```tsx
const [isAvailable, setIsAvailable] = useState(false)

<ButtonAnchor
  variant='primary'
  disabled={!isAvailable}
  href='/protected-page'
>
  {isAvailable ? 'Access Page' : 'Not Available'}
</ButtonAnchor>
```

## Design Guidelines

### When to Use ButtonAnchor

Use ButtonAnchor when you need:

- Navigation that looks like a button (e.g., CTAs, primary actions)
- Links that should visually stand out like buttons
- Navigation that benefits from button styling
- SEO-friendly links with button appearance

### When NOT to Use ButtonAnchor

Don't use ButtonAnchor when:

- You need form submission (use `Button` with `type="submit"`)
- You need loading/busy states (use `Button` with `busy` prop)
- You need destructive actions (use `Button` with `variant="destructive"`)
- The action doesn't navigate (use regular `Button`)

### Button vs ButtonAnchor Decision Tree

```
Does it navigate to a URL?
├─ Yes → Use ButtonAnchor
└─ No → Use Button

Does it submit a form?
├─ Yes → Use Button with type="submit"
└─ No → Consider the action type

Is it a destructive action?
├─ Yes → Use Button with variant="destructive"
└─ No → Use ButtonAnchor for navigation or Button for other actions
```

## Differences from Button Component

| Feature            | Button                                         | ButtonAnchor                              |
| ------------------ | ---------------------------------------------- | ----------------------------------------- |
| **HTML Element**   | `<button>`                                     | `<a>`                                     |
| **Primary Use**    | Actions, form submission                       | Navigation                                |
| **Variants**       | primary, ghost, outline, destructive           | primary, ghost, outline                   |
| **Busy State**     | ✅ Supported with spinner                      | ❌ Not supported                          |
| **Destructive**    | ✅ Supported                                   | ❌ Not supported                          |
| **Disabled State** | Native `disabled` attribute                    | Custom implementation with `aria-*`       |
| **Type Attribute** | button, submit, reset                          | N/A                                       |
| **Href Attribute** | N/A                                            | Required for navigation                   |
| **Form Context**   | Can submit forms                               | Cannot submit forms                       |
| **SEO**            | Not crawled as navigation                      | Crawled as navigation link                |
| **Right-Click**    | No context menu                                | Shows link context menu (copy link etc.)  |
| **Accessibility**  | Native button semantics                        | Native link semantics with button styles  |
| **Best For**       | Actions, submissions, state changes            | Navigation, page transitions, CTAs        |
| **Tab Order**      | Follows DOM order, always included when active | Follows DOM order, excluded when disabled |

## Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation of visual effects
- Full keyboard support across all browsers

## Performance

- Lightweight component with minimal overhead
- CSS-only animations (no JavaScript)
- Tree-shakable with proper imports
- No external dependencies beyond React and CVA

## Best Practices

1. **Always provide href**: Even if disabled initially, provide a meaningful href
2. **Use proper rel attributes**: For external links, use `rel="noopener noreferrer"`
3. **Indicate external links**: Consider adding visual indicators for external/download links
4. **Don't fake navigation**: If it doesn't navigate, use a Button instead
5. **Provide clear labels**: Use descriptive text, not "click here"
6. **Consider SEO**: ButtonAnchor links are crawled by search engines
7. **Test keyboard navigation**: Ensure tab order makes sense in your layout
8. **Respect disabled state**: Don't remove disabled styling with custom classes

## Testing

When testing ButtonAnchor components:

- Verify href is present when enabled
- Verify href is removed when disabled
- Check aria-disabled attribute on disabled state
- Ensure tabindex=-1 on disabled state
- Test keyboard navigation (Tab, Enter)
- Verify click events are prevented when disabled
- Test with screen readers
- Validate focus indicators are visible

## Related Components

- **Button**: For actions and form submissions
- **Anchor**: For regular text links without button styling
- **ButtonIcon**: For icon-only buttons
- **ButtonMenu**: For dropdown menu buttons
