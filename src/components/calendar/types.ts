/**
 * CalendarProps defines the props for the Calendar component
 * @property value - The selected date
 * @property onChange - Callback when a date is selected
 * @property className - Custom class for the calendar container
 */
export interface CalendarProps {
  /**
   * The selected date
   */
  value?: Date
  /**
   * Callback when a date is selected
   */
  onChange?: (date: Date) => void
  /**
   * Custom class for the calendar container
   */
  className?: string
}
