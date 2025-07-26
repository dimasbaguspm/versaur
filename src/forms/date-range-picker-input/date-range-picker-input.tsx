import React from 'react'
import type { DateRangePickerInputProps } from './types'
import { dateRangePickerInputVariants, formatDateRange } from './helpers'
import { Calendar } from '@/primitive/calendar'
import { cn } from '@/utils/cn'
import { useDateRangePicker } from './use-date-range-picker'
import { Modal } from '@/overlays'

/**
 * DateRangePickerInput component for Versaur UI
 *
 * Styled like TextInput, but acts as a button to pick a date range
 * Clicking opens a docked Calendar below the input (type='range')
 * Strictly typed, accessible, and visually consistent with TextInput
 */
export const DateRangePickerInput = React.forwardRef<
  HTMLButtonElement,
  DateRangePickerInputProps
>(
  (
    {
      value,
      onChange,
      label,
      leftContent,
      rightContent,
      helperText,
      error,
      variant = 'primary',
      disabled,
      placeholder = 'Select date range',
      id,
      ...props
    },
    ref
  ) => {
    // Controlled: value and onChange are required
    if (value === undefined || typeof onChange !== 'function') {
      throw new Error(
        'DateRangePickerInput is a controlled component: value and onChange are required.'
      )
    }
    const { open, setOpen, inputId, buttonRef, handleKeyDown } =
      useDateRangePicker({ id })

    const hasError = Boolean(error)

    // Button content
    const displayValue = formatDateRange(value) || placeholder

    return (
      <div className='relative w-full'>
        {label && (
          <label
            htmlFor={inputId}
            className='block text-sm font-medium text-foreground mb-2'
          >
            {label}
          </label>
        )}
        <div className='relative'>
          {leftContent && (
            <span className='absolute left-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'>
              {leftContent}
            </span>
          )}
          <button
            ref={el => {
              buttonRef.current = el
              if (typeof ref === 'function') ref(el)
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLButtonElement | null>
                ).current = el
            }}
            id={inputId}
            type='button'
            aria-haspopup='dialog'
            aria-expanded={open}
            aria-disabled={disabled}
            aria-invalid={hasError}
            disabled={disabled}
            className={cn(
              dateRangePickerInputVariants({
                variant: hasError ? 'danger' : variant,
              }),
              leftContent ? 'pl-9' : 'pl-3',
              rightContent ? 'pr-9' : 'pr-3',
              'h-10 flex items-center justify-between cursor-pointer w-full relative',
              'text-left'
            )}
            onClick={() => setOpen(v => !v)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            {...props}
          >
            {displayValue}
            {rightContent && (
              <span className='absolute right-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'>
                {rightContent}
              </span>
            )}
          </button>
          {hasError && (
            <div className='mt-1 text-sm text-danger' role='alert'>
              {error}
            </div>
          )}
          {helperText && (
            <div className='mt-1 text-sm text-muted-foreground'>
              {helperText}
            </div>
          )}
        </div>

        <Modal isOpen={open} onOpenChange={setOpen} placement='top' size='md'>
          <Calendar
            value={[
              value?.[0] ? new Date(value[0]) : null,
              value?.[1] ? new Date(value[1]) : null,
            ]}
            type='range'
            onChange={date => {
              const typedDate = date as [Date | null, Date | null]

              const isoRange: [string | null, string | null] = [
                typedDate?.[0] instanceof Date &&
                !isNaN(typedDate?.[0].getTime())
                  ? typedDate?.[0]!.toISOString()
                  : null,
                typedDate?.[1] instanceof Date &&
                !isNaN(typedDate?.[1].getTime())
                  ? typedDate[1]!.toISOString()
                  : null,
              ]

              onChange(isoRange)
            }}
          />
        </Modal>
      </div>
    )
  }
)
