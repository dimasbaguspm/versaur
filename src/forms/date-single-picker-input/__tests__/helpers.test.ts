import { defaultDateFormatter } from '../helpers'

describe('defaultDateFormatter', () => {
  it('formats valid ISO date string to locale string', () => {
    // July 29, 2025
    expect(defaultDateFormatter('2025-07-29')).toMatch(
      /Jul 29, 2025|2025 Jul 29|29 Jul 2025|2025, Jul 29|Jul 29, 2025/
    )
  })

  it('returns empty string for empty input', () => {
    expect(defaultDateFormatter('')).toBe('')
  })

  it('returns input for invalid date string', () => {
    expect(defaultDateFormatter('not-a-date')).toBe('not-a-date')
  })

  it('handles leap year date', () => {
    expect(defaultDateFormatter('2024-02-29')).toMatch(
      /Feb 29, 2024|2024 Feb 29|29 Feb 2024|2024, Feb 29|Feb 29, 2024/
    )
  })

  it('handles single digit month and day', () => {
    expect(defaultDateFormatter('2025-1-2')).toMatch(
      /Jan 2, 2025|2025 Jan 2|2 Jan 2025|2025, Jan 2|Jan 2, 2025/
    )
  })
})
