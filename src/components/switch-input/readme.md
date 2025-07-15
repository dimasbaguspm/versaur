# SwitchInput

A modern, accessible switch component for boolean toggles, following Versaur and Material 3
guidelines.

## Features

- Controlled/uncontrolled
- Color, size, label placement variants
- Robust animation
- Accessible (WCAG 2.1 AA)
- Mobile-first
- Supports no-label usage
- All color variants supported and demonstrated in Storybook

## Usage

```tsx
<SwitchInput label='Enable notifications' color='primary' size='md' />
<SwitchInput color='success' size='lg' /> // No label
```

## Storybook

- See `ColorVariations` story for all color variants
- See `NoLabel` story for switch without label

## Testing

- See `__tests__/switch-input.test.tsx` for unit and accessibility tests
- Snapshot, uncontrolled, controlled, disabled, and color variant tests included
