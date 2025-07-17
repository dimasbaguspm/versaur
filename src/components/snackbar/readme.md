# Snackbar

A modern, accessible feedback component for brief messages and actions, following Versaur UI and
Material guidelines.

## Features

- Semantic color variants: `success`, `info`, `warning`, `danger`
- Strong visual prominence with accent bar and subtle background
- Action support (e.g., Undo button)
- Accessible: `role="status"`, `aria-live="polite"`, keyboard focusable close button
- Tree-shakable, TypeScript-typed, and mobile-friendly

## Usage

```tsx
import { Snackbar } from '@/components/snackbar'

<Snackbar>
  Message sent successfully
</Snackbar>

<Snackbar color="danger" onClose={() => {}}>
  Something went wrong
</Snackbar>

<Snackbar
  color="success"
  action={<button onClick={undo}>Undo</button>}
  onClose={closeSnackbar}
>
  File uploaded
</Snackbar>
```

## Props

| Name     | Type                                                      | Default   | Description                            |
| -------- | --------------------------------------------------------- | --------- | -------------------------------------- |
| children | ReactNode                                                 | —         | Snackbar message text                  |
| color    | 'success' \| 'info' \| 'warning' \| 'danger' \| 'neutral' | 'success' | Semantic color variant                 |
| action   | ReactNode                                                 | —         | Optional action element (e.g., button) |
| onClose  | () => void                                                | —         | Called when close button is clicked    |
| ...props | HTMLDivAttributes                                         | —         | Spread to root div                     |

## Variants

- **Success**: Green accent, for positive feedback
- **Info**: Blue accent, for neutral information
- **Warning**: Orange accent, for caution
- **Danger**: Red accent, for errors
- **Neutral**: Subtle gray, for general feedback

## Accessibility

- Uses `role="status"` and `aria-live="polite"` for screen readers
- Close button is keyboard accessible and labeled
- Color contrast meets WCAG 2.1 AA

## Testing

- Snapshot and interaction tests colocated in `__tests__/snackbar.test.tsx`
- Stories in `snackbar.stories.tsx` for all variants and actions

---

For more, see the [Versaur UI documentation](../../README.md).
