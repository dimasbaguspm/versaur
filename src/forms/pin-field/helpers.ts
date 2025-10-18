/**
 * Base class for PIN input styling
 * Aligned with TextInput height (h-9) for consistency
 */
export const pinInputClassName =
  'w-9 h-9 text-center border border-primary/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-50 text-sm font-semibold text-foreground'

/**
 * Class for error state
 */
export const pinInputErrorClassName =
  'w-9 h-9 text-center border border-danger rounded-md bg-danger/5 transition-colors focus:outline-none focus:ring-2 focus:ring-danger/20 focus:border-danger disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-50 text-sm font-semibold text-foreground'

/**
 * Validates if a character is a digit (0-9)
 */
export const isDigit = (char: string): boolean => {
  return /^\d$/.test(char)
}

/**
 * Formats a value to ensure it only contains digits and limits to max length
 */
export const formatPinValue = (value: string, maxLength: number): string => {
  return value.replace(/\D/g, '').slice(0, maxLength)
}
