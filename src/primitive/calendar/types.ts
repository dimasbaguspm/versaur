/**
 * CalendarProps defines the props for the Calendar component
 * @property value - The selected date
 * @property onChange - Callback when a date is selected
 * @property className - Custom class for the calendar container
 */
/**
 * Calendar selection type
 * - 'single': single date selection
 * - 'range': date range selection (start and end)
 */
export type CalendarType = 'single' | 'range'

/**
 * Calendar value type
 * - Date for single
 * - [Date | null, Date | null] for range
 */
export type CalendarValue = Date | [Date | null, Date | null]

/**
 * CalendarProps defines the props for the Calendar component
 * @property value - The selected date or range
 * @property onChange - Callback when a date or range is selected
 * @property className - Custom class for the calendar container
 * @property type - Selection type: 'single' or 'range'
 */
export interface CalendarProps {
  /**
   * The selected date or range
   */
  value?: CalendarValue
  /**
   * Callback when a date or range is selected
   */
  onChange?: (value: CalendarValue) => void
  /**
   * Custom class for the calendar container
   */
  className?: string
  /**
   * Selection type: 'single' or 'range'
   */
  type?: CalendarType
}

/**
 * Props for CalendarHeader atom
 */
export interface CalendarHeaderProps {
  value?: CalendarValue
  year: number
  month: number
  onPrevMonth: () => void
  onNextMonth: () => void
  className?: string
}
