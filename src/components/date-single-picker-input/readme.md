
# DateSinglePickerInput

A modern, accessible single date picker input for Versaur UI, styled to match TextInput but acts as a button that opens a docked or modal Calendar for date selection.

## Features
- Styled like TextInput, but is a button showing the selected date or placeholder
- Supports both docked (Menu) and modal (Dialog) calendar selection
- Compound pattern: trigger, docked, and modal atoms for maintainability and tree-shaking
- Fully accessible: keyboard navigation, ARIA attributes, focus management
- Supports left/right content, error, helperText, and all variants
- Mobile-first, responsive, and consistent with Versaur design system
- Strictly typed props and JSDoc documentation
- Customizable date formatting via `formatDate` prop
- Uses Tailwind v4 and React 19 hooks

## Usage
```tsx
import { DateSinglePickerInput } from '@/components/date-single-picker-input'

<DateSinglePickerInput
  label='Date of Birth'
  value={date}
  onChange={setDate}
  placeholder='Select date'
  helperText='Pick your birth date'
  type='docked' // or 'modal'
  formatDate={date => date ? date.toLocaleDateString('en-GB') : 'Select date'}
  leftContent={<IconCalendar />}
  rightContent={<IconChevronDown />}
  error={error}
  variant='primary'
  disabled={false}
/>
```

## Props
- See `types.ts` for full prop types and documentation
- Key props:
  - `type`: 'docked' | 'modal' (calendar display type)
  - `formatDate`: custom date formatter function
  - `label`, `leftContent`, `rightContent`, `helperText`, `error`, `variant`, `disabled`, `placeholder`, `value`, `onChange`

## Accessibility
- Keyboard: ArrowDown, Enter, Space open calendar; Escape closes
- ARIA: Proper roles, aria-expanded, aria-controls, aria-invalid, aria-disabled
- Focus returns to input after date selection
- WCAG 2.1 AA color and contrast standards

## Latest Updates
- Refactored to compound pattern: trigger, docked, and modal atoms
- Added `formatDate` prop for consumer flexibility
- Event handlers are named functions for code similarity
- Storybook stories and tests for both docked and modal types
- Strict type safety and prop documentation
- All tests pass and follow Versaur guidelines

## Storybook & Testing
- See `date-single-picker-input.stories.tsx`, `date-single-picker-input.docked.stories.tsx`, and `date-single-picker-input.modal.stories.tsx` for interactive examples and documentation
- Unit tests colocated in `__tests__/` using Vitest and React Testing Library
- Tests use `composeStories` from Storybook for consistency
