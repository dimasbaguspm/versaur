import { createContext, useContext } from 'react'
import type { CalendarType, CalendarValue } from './types'

export interface CalendarContextValue {
  year: number
  month: number
  value: CalendarValue | undefined
  type: CalendarType
  setMonth: (month: number) => void
  setYear: (year: number) => void
  onChange: (value: CalendarValue) => void
}

export const CalendarContext = createContext<CalendarContextValue | null>(null)

export function useCalendarContext() {
  const ctx = useContext(CalendarContext)
  if (!ctx)
    throw new Error(
      'useCalendarContext must be used within CalendarContext.Provider'
    )
  return ctx
}
