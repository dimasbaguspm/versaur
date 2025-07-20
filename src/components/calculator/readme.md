# Calculator Component

A compact, accessible calculator for Versaur UI, designed for use in modals and closely aligned with text-input styling. Supports basic arithmetic, keyboard input, and mobile-friendly layout.

## Features
- Basic arithmetic operations (+, -, *, /)
- Responsive, compact layout
- Keyboard and button input (numbers, operators, Enter, Backspace, Escape, C)
- Always-visible "Done" button for submitting value
- Accessible and screen reader friendly
- Designed to match text-input and modal usage

## Usage
```tsx
import { Calculator } from '@/components/calculator'

<Calculator initialValue="123" onChange={val => console.log(val)} />
```

### Keyboard Interaction
- Numbers, operators, Enter/=/Backspace/Escape/C all work as expected
- "Done" button is not triggered by keyboard, only by click/tap

### Accessibility
- All buttons and input have appropriate aria-labels
- Input is focused on mount for fast keyboard entry
- Fully navigable and operable by keyboard and screen reader

## API
- `initialValue` (string | number): Initial value for the calculator
- `onChange` (function): Called with the value when calculated or Done is pressed
- `disabled` (boolean): Disables all input and buttons
- `className` (string): Custom class for the root
- `aria-label` (string): Custom aria-label for the calculator region
