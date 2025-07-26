import { type FC } from 'react'
import { ButtonIcon } from '@/primitive/button-icon'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Text } from '../text'
import { useCalendarContext } from './context'
import { cn } from '@/utils'

/**
 * CalendarHeader atom for Calendar component
 */
export const CalendarHeader: FC = () => {
  const { value, year, month, setMonth } = useCalendarContext()

  return (
    <div className='flex items-center justify-between px-4 pt-4 pb-2'>
      <Text fontSize='base' fontWeight='semibold' className='ml-2'>
        {value
          ? value instanceof Date
            ? value.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
              })
            : Array.isArray(value) && value[0]
              ? value[0].toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                })
              : `${year} ${new Date(year, month).toLocaleString(undefined, { month: 'long' })}`
          : `${year} ${new Date(year, month).toLocaleString(undefined, { month: 'long' })}`}
      </Text>
      <div className='flex gap-2'>
        <ButtonIcon
          as={ChevronLeft}
          variant='ghost'
          size='sm'
          aria-label='Previous month'
          onClick={() => setMonth(month === 0 ? 11 : month - 1)}
        />
        <ButtonIcon
          as={ChevronRight}
          variant='ghost'
          size='sm'
          aria-label='Next month'
          onClick={() => setMonth(month === 11 ? 0 : month + 1)}
        />
      </div>
    </div>
  )
}

/**
 * CalendarWeekdays atom for Calendar component
 */
export const CalendarWeekdays: React.FC = () => (
  <div className='grid grid-cols-7 px-4 text-ghost-500 mb-3'>
    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
      <Text fontSize='xs' key={d} color='ghost' align='center'>
        {d}
      </Text>
    ))}
  </div>
)

/**
 * CalendarDaysSingle atom: handles single date selection only
 */
const CalendarDaysSingle: FC = () => {
  const ctx = useCalendarContext()
  const { year, month, value, onChange, setMonth, setYear } = ctx
  // Memoize calculations for performance
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate()
  const getFirstDayOfWeek = (year: number, month: number) =>
    new Date(year, month, 1).getDay()
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonth = month - 1 < 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const prevMonthDays = getDaysInMonth(year, prevMonth)
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year
  const days = []
  // Previous month's trailing days
  for (let i = 0; i < firstDay; i++) {
    const day = prevMonthDays - firstDay + i + 1
    days.push(
      <ButtonIcon
        as={() => (
          <Text as='span' fontSize='sm' color='tertiary'>
            {day}
          </Text>
        )}
        size='sm'
        aria-label='Previous month day'
        variant='ghost'
        key={'prev-' + i}
        onClick={() => {
          onChange?.(new Date(prevYear, prevMonth, day))
          setMonth(prevMonth)
          setYear(prevYear)
        }}
      />
    )
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected =
      value instanceof Date &&
      value.getFullYear() === year &&
      value.getMonth() === month &&
      value.getDate() === d
    days.push(
      <ButtonIcon
        as={() => (
          <Text
            as='span'
            fontSize='sm'
            color={isSelected ? 'inherit' : 'ghost'}
            className={isSelected ? 'bg-primary text-white rounded-full' : ''}
          >
            {d}
          </Text>
        )}
        key={d}
        variant={isSelected ? 'primary' : 'ghost'}
        size='sm'
        aria-label={`Select ${year}-${month + 1}-${d}`}
        aria-current={isSelected ? 'date' : undefined}
        onClick={() => {
          onChange?.(new Date(year, month, d))
        }}
      />
    )
  }
  // Next month's leading days
  const totalCells = firstDay + daysInMonth
  for (let i = 0; i < (totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)); i++) {
    days.push(
      <ButtonIcon
        as={() => (
          <Text as='span' fontSize='sm' color='tertiary'>
            {i + 1}
          </Text>
        )}
        size='sm'
        aria-label='Next month day'
        variant='ghost'
        key={'next-' + i}
        onClick={() => {
          onChange?.(new Date(nextYear, nextMonth, i + 1))
          setMonth(nextMonth)
          setYear(nextYear)
        }}
      />
    )
  }
  return <div className='grid grid-cols-7 gap-2 px-4 pb-4'>{days}</div>
}

/**
 * CalendarDaysRange atom: handles range date selection only
 */
const CalendarDaysRange: FC = () => {
  const { year, month, value, onChange, setMonth, setYear } =
    useCalendarContext()

  // Memoize calculations for performance
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate()
  const getFirstDayOfWeek = (year: number, month: number) =>
    new Date(year, month, 1).getDay()
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonth = month - 1 < 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const prevMonthDays = getDaysInMonth(year, prevMonth)
  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year
  const days = []

  // Range selection helpers (normalize start/end for correct range regardless of order)
  const getRange = () => {
    if (!Array.isArray(value)) return [null, null] as const
    const [a, b] = value
    if (!a && !b) return [null, null] as const
    if (a && b) {
      return a <= b ? ([a, b] as const) : ([b, a] as const)
    }
    return [a, b] as const
  }
  const [rangeStartDate, rangeEndDate] = getRange()
  const isInRange = (d: number) => {
    if (!rangeStartDate || !rangeEndDate) return false
    const date = new Date(year, month, d)
    return date >= rangeStartDate && date <= rangeEndDate
  }
  const isRangeStart = (d: number) => {
    if (!rangeStartDate) return false
    return (
      rangeStartDate.getFullYear() === year &&
      rangeStartDate.getMonth() === month &&
      rangeStartDate.getDate() === d
    )
  }
  const isRangeEnd = (d: number) => {
    if (!rangeEndDate) return false
    return (
      rangeEndDate.getFullYear() === year &&
      rangeEndDate.getMonth() === month &&
      rangeEndDate.getDate() === d
    )
  }

  // Previous month's trailing days
  for (let i = 0; i < firstDay; i++) {
    const day = prevMonthDays - firstDay + i + 1
    days.push(
      <ButtonIcon
        as={() => (
          <Text as='span' fontSize='sm' color='tertiary'>
            {day}
          </Text>
        )}
        size='sm'
        aria-label='Previous month day'
        variant='ghost'
        key={'prev-' + i}
        onClick={() => {
          onChange?.([null, null])
          setMonth(prevMonth)
          setYear(prevYear)
        }}
      />
    )
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const inRange = isInRange(d)
    const rangeStart = isRangeStart(d)
    const rangeEnd = isRangeEnd(d)

    days.push(
      <ButtonIcon
        as={() => (
          <Text
            as='span'
            fontSize='sm'
            color={inRange || rangeStart || rangeEnd ? 'inherit' : 'ghost'}
            className={cn(
              inRange && ' bg-primary text-white',
              rangeStart && 'rounded-l-full bg-primary text-white',
              rangeEnd && 'rounded-r-full bg-primary text-white'
            )}
          >
            {d}
          </Text>
        )}
        key={d}
        variant={rangeStart || rangeEnd || inRange ? 'primary' : 'ghost'}
        size='sm'
        aria-label={`Select ${year}-${month + 1}-${d}`}
        aria-current={rangeStart || rangeEnd ? 'date' : undefined}
        onClick={() => {
          if (!Array.isArray(value) || !value[0] || (value[0] && value[1])) {
            // Start new range
            onChange?.([new Date(year, month, d), null])
          } else if (value[0] && !value[1]) {
            // Set end date (normalize order)
            const start = value[0]
            const end = new Date(year, month, d)
            if (start.getTime() === end.getTime()) {
              // If same day, treat as single day range
              onChange?.([start, end])
            } else {
              onChange?.(start < end ? [start, end] : [end, start])
            }
          }
        }}
      />
    )
  }

  // Next month's leading days
  const totalCells = firstDay + daysInMonth
  for (let i = 0; i < (totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)); i++) {
    days.push(
      <ButtonIcon
        as={() => (
          <Text as='span' fontSize='sm' color='tertiary'>
            {i + 1}
          </Text>
        )}
        size='sm'
        aria-label='Next month day'
        variant='ghost'
        key={'next-' + i}
        onClick={() => {
          onChange?.([null, null])
          setMonth(nextMonth)
          setYear(nextYear)
        }}
      />
    )
  }
  return <div className='grid grid-cols-7 gap-2 px-4 pb-4'>{days}</div>
}

/**
 * CalendarDays atom: delegates to single or range atom based on context
 */
export const CalendarDays: FC = () => {
  const { type } = useCalendarContext()
  if (type === 'range') return <CalendarDaysRange />
  return <CalendarDaysSingle />
}
