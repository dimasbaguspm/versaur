/**
 * Helpers for PriceInput component - Rupiah currency formatting and validation
 */

/**
 * Validates if the input string follows valid Rupiah currency format
 * Valid formats:
 * - "10000" (simple digits)
 * - "10.000" (thousands separator)
 * - "10.000,00" (thousands separator with decimal)
 * - "10.000.000,59" (multiple thousands separators with decimal)
 * - "0,59" (zero with decimal)
 * - "10.000," (trailing comma while typing)
 *
 * Invalid formats:
 * - "10...1" (multiple consecutive dots)
 * - "10,1,1" (multiple commas)
 * - "10,,1" (consecutive commas)
 * - "10.000.00" (decimal should use comma, not dot)
 * - ",59" (cannot start with comma)
 * - ".59" (cannot start with dot)
 * - "," (cannot be just comma)
 * - "." (cannot be just dot)
 */
export function isValidRupiahFormat(
  input: string,
  allowNegative: boolean = false
): boolean {
  if (input === '') return true
  if (input === '-' && allowNegative) return true

  // Remove leading minus for negative values
  const cleanInput =
    allowNegative && input.startsWith('-') ? input.slice(1) : input
  if (allowNegative && input.startsWith('-') && cleanInput === '') return true

  // Don't allow starting with separators
  if (cleanInput.startsWith('.') || cleanInput.startsWith(',')) return false

  // Check basic format: digits, dots for thousands, comma for decimal
  if (!/^[\d.,]+$/.test(cleanInput)) return false

  // Split by comma to separate integer and decimal parts
  const parts = cleanInput.split(',')

  // Should have at most 1 comma (decimal separator)
  if (parts.length > 2) return false

  const integerPart = parts[0]
  const decimalPart = parts[1]

  // Validate integer part - don't allow empty (prevents ",59" format)
  if (integerPart === '' || !isValidRupiahIntegerPart(integerPart)) return false

  // Validate decimal part (if exists) - allow empty for intermediate typing like "1000,"
  if (
    decimalPart !== undefined &&
    decimalPart !== '' &&
    !isValidRupiahDecimalPart(decimalPart)
  )
    return false

  return true
}

/**
 * Validates the integer part of Rupiah currency
 * Should follow pattern: digits with dots as thousands separators OR pure digits (not empty)
 * Valid: "0", "10", "10000", "10.000", "1.000.000"
 * Also allows intermediate states: "10.", "10.0", "1.000.", "1.000.0" (while typing)
 * Invalid: "", ".000", "10..000", "10.0000" (more than 3 digits in segment)
 */
function isValidRupiahIntegerPart(part: string): boolean {
  if (part === '') return false // Don't allow empty integer parts

  // If no dots, just validate it's all digits (any length)
  if (!part.includes('.')) {
    return /^\d+$/.test(part)
  }

  // Split by dots (thousands separators)
  const segments = part.split('.')

  // First segment can be 1-3 digits
  if (segments[0] === '' || !/^\d{1,3}$/.test(segments[0])) return false

  // Remaining segments must be exactly 3 digits (except for the last segment which can be incomplete while typing)
  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i]

    // Last segment can be incomplete (0-3 digits) while typing - allow empty for intermediate states like "1.000."
    if (i === segments.length - 1) {
      if (segment !== '' && !/^\d{1,3}$/.test(segment)) return false
    } else {
      // Middle segments must be exactly 3 digits
      if (!/^\d{3}$/.test(segment)) return false
    }
  }

  return true
}

/**
 * Validates the decimal part of Rupiah currency
 * Should be exactly 1 or 2 digits, or empty during intermediate typing
 * Valid: "0", "00", "5", "59", "" (while typing)
 * Invalid: "000", "5a"
 */
function isValidRupiahDecimalPart(part: string): boolean {
  return /^\d{1,2}$/.test(part)
}

/**
 * Sanitizes input by removing invalid characters while preserving valid format
 * This function is more permissive during typing to provide better UX
 */
export function sanitizeRupiahInput(
  input: string,
  allowNegative: boolean = false
): string {
  if (input === '') return ''

  // Handle negative values
  const isNegative = input.startsWith('-')
  if (isNegative && !allowNegative)
    return sanitizeRupiahInput(input.slice(1), false)
  if (isNegative && input.length === 1) return '-'

  const cleanInput = isNegative ? input.slice(1) : input

  // Remove all non-digit, non-dot, non-comma characters
  let sanitized = cleanInput.replace(/[^\d.,]/g, '')

  // Handle multiple commas - keep only the last one
  const commaIndex = sanitized.lastIndexOf(',')
  if (commaIndex !== -1) {
    const beforeComma = sanitized.slice(0, commaIndex).replace(/,/g, '')
    const afterComma = sanitized.slice(commaIndex + 1).replace(/,/g, '')
    sanitized = beforeComma + ',' + afterComma
  }

  // Handle consecutive dots - remove extra dots
  sanitized = sanitized.replace(/\.{2,}/g, '.')

  return (isNegative ? '-' : '') + sanitized
}

/**
 * Converts various Rupiah input formats to a standardized numeric value
 * "10.000,50" -> 10000.50
 * "10000" -> 10000
 * "10.000" -> 10000
 */
export function parseRupiahToNumber(input: string): number {
  if (input === '' || input === '-') return 0

  const isNegative = input.startsWith('-')
  const cleanInput = isNegative ? input.slice(1) : input

  // Replace dots with nothing (remove thousands separators)
  // Replace comma with dot (decimal separator)
  const standardized = cleanInput.replace(/\./g, '').replace(',', '.')

  const parsed = parseFloat(standardized) || 0
  return isNegative ? -parsed : parsed
}

/**
 * Formats a number to Rupiah display format
 * 10000.50 -> "10.000,50"
 * 10000 -> "10.000"
 */
export function formatNumberToRupiah(value: number): string {
  if (value === 0) return ''

  const isNegative = value < 0
  const absValue = Math.abs(value)

  const [integerPart, decimalPart] = absValue.toString().split('.')

  // Add thousands separators to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Combine with decimal part if it exists
  const formatted = decimalPart
    ? `${formattedInteger},${decimalPart}`
    : formattedInteger

  return (isNegative ? '-' : '') + formatted
}
