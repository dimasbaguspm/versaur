import { textInputVariants } from '../text-input/helpers'
import type { DateRangeValue } from './types'

export const dateRangePickerInputVariants = textInputVariants

/**
 * Returns a formatted string for the date range, or empty string if not set
 */
export function formatDateRange(value: DateRangeValue): string {
  if (!value || !value[0] || !value[1]) return 'Select date range'

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return `${formatDate(new Date(value[0]))} to ${formatDate(new Date(value[1]))}`
}
