import { useState, useCallback } from 'react'
import type { CalendarType, CalendarValue } from './types'

export interface UseCalendarProps {
  value?: CalendarValue
  type: CalendarType
  onChange?: (value: CalendarValue) => void
  initialYear: number
  initialMonth: number
}

export function useCalendar({
  value: controlledValue,
  type,
  onChange,
  initialYear,
  initialMonth,
}: UseCalendarProps) {
  const [month, setMonth] = useState(initialMonth)
  const [year, setYear] = useState(initialYear)
  const [rangeValue, setRangeValue] = useState<[Date | null, Date | null]>([
    null,
    null,
  ])

  // Determine value (controlled/uncontrolled)
  let value: CalendarValue | undefined = controlledValue
  if (type === 'range' && !controlledValue) value = rangeValue

  // Handlers for month navigation
  const handlePrevMonth = useCallback(() => {
    const newMonth = month === 0 ? 11 : month - 1
    const newYear = month === 0 ? year - 1 : year
    setMonth(newMonth)
    setYear(newYear)
    if (type === 'single') {
      onChange?.(new Date(newYear, newMonth, 1))
    }
  }, [month, year, type, onChange])

  const handleNextMonth = useCallback(() => {
    const newMonth = month === 11 ? 0 : month + 1
    const newYear = month === 11 ? year + 1 : year
    setMonth(newMonth)
    setYear(newYear)
    if (type === 'single') {
      onChange?.(new Date(newYear, newMonth, 1))
    }
  }, [month, year, type, onChange])

  // Handle day/range selection
  const handleChange = useCallback(
    (val: CalendarValue) => {
      if (type === 'single') {
        onChange?.(val)
      } else if (type === 'range') {
        setRangeValue(val as [Date | null, Date | null])
        onChange?.(val)
      }
    },
    [type, onChange]
  )

  return {
    year,
    month,
    value,
    setMonth,
    setYear,
    onChange: handleChange,
    handlePrevMonth,
    handleNextMonth,
  }
}
