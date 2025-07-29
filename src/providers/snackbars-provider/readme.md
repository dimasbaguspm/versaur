# Snackbars Provider

This provider manages a queue of snackbars and exposes a `showSnack` function via context and the `useSnackbars` hook.

## Usage

Wrap your app with the provider:

```tsx
import { SnackbarsProvider } from '@/providers/snackbars-provider'

<SnackbarsProvider>
  <App />
</SnackbarsProvider>
```

Show a snackbar from anywhere in the tree:

```tsx
import { useSnackbars } from '@/providers/snackbars-provider'

const { showSnack } = useSnackbars()
showSnack('success', 'Profile updated!')
```

- Placement: full width bottom for mobile, bottom left for desktop/tablet (Material 3 guidelines)
- Supports color variants: success, info, warning, danger
- Only one snackbar is shown at a time (queue-based)
- Custom action and duration supported
