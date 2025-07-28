import { useEffect } from 'react'

/**
 * usePriceInputSync synchronizes the local input value with the parent value
 * @param value - The parent value (string or number)
 * @param setRawValue - Setter for local raw value
 */
export function usePriceInputSync(
  value: string | number,
  setRawValue: (val: string) => void
) {
  useEffect(() => {
    // Only update rawValue if parent value changes (not on every keystroke)
    // If parent value is a number, format it for display
    if (typeof value === 'number' && !isNaN(value)) {
      setRawValue(`${value}`)
    } else if (value === '' || value === null || value === undefined) {
      setRawValue('')
    } else if (typeof value === 'string') {
      // If parent value is a string, use as is
      setRawValue(value)
    }
  }, [value, setRawValue])
}
