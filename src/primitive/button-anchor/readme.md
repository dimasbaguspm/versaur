# ButtonAnchor

A navigation link component styled as a button that directly aligns with the native HTML `<a>`
element.

## Usage

```tsx
import { ButtonAnchor } from '@versaur/primitive/button-anchor'

// Primary link
<ButtonAnchor href="/dashboard">Go to Dashboard</ButtonAnchor>

// With variant
<ButtonAnchor variant="ghost" href="/cancel">Cancel</ButtonAnchor>

// With size
<ButtonAnchor size="lg" href="/get-started">Get Started</ButtonAnchor>

// Disabled
<ButtonAnchor disabled href="/unavailable">Unavailable</ButtonAnchor>

// External link
<ButtonAnchor href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</ButtonAnchor>
```

## Props

| Prop        | Type                                | Default     | Description                    |
| ----------- | ----------------------------------- | ----------- | ------------------------------ |
| `variant`   | `'primary' \| 'ghost' \| 'outline'` | `'primary'` | Visual style variant           |
| `size`      | `'sm' \| 'md' \| 'lg'`              | `'md'`      | Size of the button anchor      |
| `disabled`  | `boolean`                           | `false`     | Whether the anchor is disabled |
| `href`      | `string`                            | -           | URL the anchor points to       |
| `className` | `string`                            | -           | Additional CSS classes         |
| `children`  | `ReactNode`                         | -           | Button anchor content          |

## Variants

- **Primary**: Main call-to-action navigation links (coral background)
- **Ghost**: Subtle navigation with minimal visual weight
- **Outline**: Secondary navigation or alternative choices

## Sizes

- **sm**: 28px height, compact for space-constrained interfaces
- **md**: 36px height, standard for most use cases (default)
- **lg**: 40px height, prominent for primary actions

## Accessibility

- Full keyboard navigation support
- ARIA attributes for disabled state
- Focus indicators with visible ring
- Screen reader friendly
- Removed from tab order when disabled

## When to Use

Use ButtonAnchor when you need:

- Navigation that looks like a button (e.g., CTAs, primary actions)
- Links that should visually stand out like buttons
- SEO-friendly links with button appearance

## When NOT to Use

Don't use ButtonAnchor when:

- You need form submission (use `Button` with `type="submit"`)
- You need loading/busy states (use `Button` with `busy` prop)
- You need destructive actions (use `Button` with `variant="destructive"`)
- The action doesn't navigate (use regular `Button`)

See [button-anchor.spec.md](./button-anchor.spec.md) for complete specification.
