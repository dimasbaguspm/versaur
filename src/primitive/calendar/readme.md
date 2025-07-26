
# Calendar Component (Versaur UI)

A modern, accessible, and highly composable calendar component for date picking, supporting both single and range selection modes. Built with TypeScript, React 19, and Tailwind v4, following Versaur's strict compound/context pattern and atomization principles.

## Features

- **Single and Range Selection:**
  - `type="single"` (default): Select a single date.
  - `type="range"`: Select a start and end date, with robust normalization (selecting end before start is supported).
- **Compound Pattern:**
  - Atoms: `CalendarHeader`, `CalendarWeekdays`, `CalendarDays` (delegates to `CalendarDaysSingle` or `CalendarDaysRange`)
  - Context-driven state and logic, no prop drilling.
- **Accessibility:**
  - Full ARIA support for all interactive elements.
  - Keyboard and screen reader friendly.
- **Performance:**
  - Optimized date calculations and rendering.
  - Minimal re-renders via context and memoization.
- **Customizable:**
  - Theming via Tailwind and CSS variables.
  - Easily extendable for custom layouts or additional features.

## Usage

```tsx
import { Calendar } from '@/primitive/calendar'

// Single date selection
<Calendar value={date} onChange={setDate} />

// Range selection
<Calendar type="range" value={range} onChange={setRange} />
```

## API

### Props

| Prop        | Type                              | Default   | Description                                 |
|-------------|-----------------------------------|-----------|---------------------------------------------|
| `value`     | `Date \| [Date \| null, Date \| null]` | —         | Selected date or date range                 |
| `onChange`  | `(value: CalendarValue) => void`  | —         | Callback when selection changes             |
| `type`      | `'single' \| 'range'`             | `'single'`| Selection mode                              |
| `initialYear` | `number`                        | current   | Initial year to display                     |
| `initialMonth` | `number`                       | current   | Initial month to display (0-11)             |

### Atoms (Subcomponents)

- `CalendarHeader`: Month/year display and navigation
- `CalendarWeekdays`: Weekday labels
- `CalendarDays`: Renders days grid, delegates to `CalendarDaysSingle` or `CalendarDaysRange` based on context

### Selection Logic

- **Single:**
  - Clicking a day selects it and calls `onChange(date)`
- **Range:**
  - First click sets start, second click sets end (order normalized automatically)
  - Selecting end before start is supported and normalized
  - Clicking outside the range resets selection

## Testing

- Unit tests cover all atoms, single/range logic, and edge cases (see `__tests__/calendar.atoms.test.tsx`)
- Storybook stories for both single and range modes
- Accessibility and snapshot tests included

## Example

```tsx
const [date, setDate] = useState<Date | undefined>(new Date())
<Calendar value={date} onChange={setDate} />

const [range, setRange] = useState<[Date | null, Date | null]>([null, null])
<Calendar type="range" value={range} onChange={setRange} />
```

## Conventions

- Follows Versaur UI's strict compound/context and atomization patterns
- All logic is colocated and context-driven for maintainability
- TypeScript strict mode and full test coverage

---

For more details, see the main Versaur UI documentation and Storybook.
