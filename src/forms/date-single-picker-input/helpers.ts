/**
 * Default date formatter for DateSinglePickerInput
 * Formats ISO date string (YYYY-MM-DD) to locale string (e.g., Jul 29, 2025)
 */
export function defaultDateFormatter(date: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
