# Calendar

A modern, accessible calendar component for date picking, following Material 3 specs and Versaur UI
standards.

## Usage

```tsx
import { Calendar } from '@/components/calendar'

const [selectedDate, setSelectedDate] = useState<Date | undefined>()

<Calendar value={selectedDate} onChange={setSelectedDate} />
```

## Features

- Month view with weekday headers
- Selectable days (current, previous, next month trailing days)
- Navigation between months (chevron buttons)
- Clicking trailing days navigates and selects the correct month/day
- Displays selected date in header
- Accessible and keyboard-friendly
- Styled with Tailwind v4 and Versaur color system
- Uses `ButtonIcon` for all interactive day and navigation actions

## API

### Props

- `value: Date | undefined` — The currently selected date
- `onChange: (date: Date) => void` — Callback when a date is selected

## Accessibility

- All interactive elements have ARIA labels
- Keyboard and screen reader friendly
- Focus ring and color contrast meet WCAG 2.1 AA

## Testing

- Unit tests cover rendering, date selection, and navigation
- Storybook provides interactive documentation and visual regression
