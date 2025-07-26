import React from 'react'
import { cn } from '@/utils/cn'
import type { CalendarProps } from './types'
import {
  CalendarHeader,
  CalendarWeekdays,
  CalendarDays,
} from './calendar.atoms'
import { CalendarContext } from './context'
import { useCalendar } from './use-calendar'

/**
 * Calendar component (Compound Pattern)
 * Implements a month view date picker following Material 3 specs and Versaur standards
 */

export const CalendarRoot: React.FC<CalendarProps> = ({
  value,
  onChange,
  className,
  type = 'single',
  ...props
}) => {
  // For demo: use current month/year
  const today = new Date()
  const calendar = useCalendar({
    value,
    onChange,
    type,
    initialYear: today.getFullYear(),
    initialMonth: today.getMonth(),
  })

  return (
    <CalendarContext.Provider
      value={{
        year: calendar.year,
        month: calendar.month,
        value: calendar.value,
        type,
        setMonth: calendar.setMonth,
        setYear: calendar.setYear,
        onChange: calendar.onChange,
      }}
    >
      <div className={cn('select-none', className)} {...props}>
        <CalendarHeader />
        <CalendarWeekdays />
        <CalendarDays />
      </div>
    </CalendarContext.Provider>
  )
}

export const Calendar = Object.assign(CalendarRoot, {})
