import React, { useState } from 'react'
import { ButtonIcon } from '@/components/button-icon'
import type { CalendarProps } from './types'
import { cn } from '@/utils/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Calendar component (Compound Pattern)
 * Implements a month view date picker following Material 3 specs and Versaur standards
 */
export const CalendarRoot: React.FC<CalendarProps> = ({
  value,
  onChange,
  className,
  ...props
}) => {
  // For demo: use current month/year
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())

  // Helper to get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Helper to get first day of week (0=Sun)
  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // Render header
  const renderHeader = () => (
    <div className='flex items-center justify-between px-4 pt-4 pb-2'>
      <span className='font-semibold text-lg'>
        {value
          ? value.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : `${year} ${new Date(year, month).toLocaleString(undefined, { month: 'long' })}`}
      </span>
      <div className='flex gap-2'>
        <ButtonIcon
          variant='ghost'
          size='sm'
          aria-label='Previous month'
          onClick={() => {
            const newMonth = month === 0 ? 11 : month - 1
            const newYear = month === 0 ? year - 1 : year
            setMonth(newMonth)
            setYear(newYear)
            onChange?.(new Date(newYear, newMonth, 1))
          }}
        >
          <ChevronLeft className='h-4 w-4' />
        </ButtonIcon>
        <ButtonIcon
          variant='ghost'
          size='sm'
          aria-label='Next month'
          onClick={() => {
            const newMonth = month === 11 ? 0 : month + 1
            const newYear = month === 11 ? year + 1 : year
            setMonth(newMonth)
            setYear(newYear)
            onChange?.(new Date(newYear, newMonth, 1))
          }}
        >
          <ChevronRight className='h-4 w-4' />
        </ButtonIcon>
      </div>
    </div>
  )

  // Render weekday labels
  const renderWeekdays = () => (
    <div className='grid grid-cols-7 px-4 text-xs text-slate-500 mb-1'>
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
        <div key={d} className='flex items-center justify-center h-6'>
          {d}
        </div>
      ))}
    </div>
  )

  // Render days grid
  const renderDays = () => {
    const days = []
    const firstDay = getFirstDayOfWeek(year, month)
    const daysInMonth = getDaysInMonth(year, month)
    const prevMonthDays = getDaysInMonth(year, month - 1 < 0 ? 11 : month - 1)

    // Previous month's trailing days
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <ButtonIcon
          size='sm'
          aria-label='Previous month day'
          variant='ghost'
          key={'prev-' + i}
          className='text-slate-300'
          onClick={() => {
            // Calculate previous month/year
            const prevMonth = month === 0 ? 11 : month - 1
            const prevYear = month === 0 ? year - 1 : year
            const day = prevMonthDays - firstDay + i + 1
            onChange?.(new Date(prevYear, prevMonth, day))
            setMonth(prevMonth)
            setYear(prevYear)
          }}
        >
          {prevMonthDays - firstDay + i + 1}
        </ButtonIcon>
      )
    }
    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const isSelected =
        value &&
        value.getFullYear() === year &&
        value.getMonth() === month &&
        value.getDate() === d

      days.push(
        <ButtonIcon
          key={d}
          variant={isSelected ? 'primary' : 'ghost'}
          size='sm'
          aria-label={`Select ${year}-${month + 1}-${d}`}
          aria-current={isSelected ? 'date' : undefined}
          onClick={() => onChange?.(new Date(year, month, d))}
        >
          {d}
        </ButtonIcon>
      )
    }
    // Next month's leading days
    const totalCells = firstDay + daysInMonth
    for (
      let i = 0;
      i < (totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7));
      i++
    ) {
      days.push(
        <ButtonIcon
          size='sm'
          aria-label='Next month day'
          variant='ghost'
          key={'next-' + i}
          className='text-slate-300'
          onClick={() => {
            // Calculate next month/year
            const nextMonth = month === 11 ? 0 : month + 1
            const nextYear = month === 11 ? year + 1 : year
            const day = i + 1
            onChange?.(new Date(nextYear, nextMonth, day))
            setMonth(nextMonth)
            setYear(nextYear)
          }}
        >
          {i + 1}
        </ButtonIcon>
      )
    }
    return <div className='grid grid-cols-7 gap-2 px-4 pb-4'>{days}</div>
  }

  return (
    <div className={cn('select-none', className)} {...props}>
      {renderHeader()}
      {renderWeekdays()}
      {renderDays()}
    </div>
  )
}

export const Calendar = Object.assign(CalendarRoot, {})
