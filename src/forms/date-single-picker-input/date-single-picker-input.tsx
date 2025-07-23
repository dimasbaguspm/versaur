import React from 'react'

import type { DateSinglePickerInputProps } from './types'
import { DateSinglePickerTrigger } from './date-single-picker-input.atoms'
import { DateSinglePickerDocked } from './date-single-picker-input.docked'
import { DateSinglePickerModal } from './date-single-picker-input.modal'
import { useDateSinglePicker } from './use-date-single-picker'

/**
 * DateSinglePickerInput component for Versaur UI
 *
 * Styled like TextInput, but acts as a button to pick a single date
 * Clicking opens a docked Calendar below the input
 * Strictly typed, accessible, and visually consistent with TextInput
 */
export const DateSinglePickerInput = React.forwardRef<
  HTMLButtonElement,
  DateSinglePickerInputProps
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
      placeholder = 'Select date',
      id,
      type = 'docked',
      ...props
    },
    ref
  ) => {
    // Controlled: value and onChange are required
    if (value === undefined || typeof onChange !== 'function') {
      throw new Error(
        'DateSinglePickerInput is a controlled component: value and onChange are required.'
      )
    }
    const {
      open,
      setOpen,
      inputId,
      buttonRef,
      handleKeyDown,
      handleMenuClose,
    } = useDateSinglePicker({ id })

    const hasError = Boolean(error)

    // Use consumer's formatDate or fallback
    const defaultFormatDate = (date?: Date) =>
      date
        ? date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : typeof placeholder === 'string'
          ? placeholder
          : 'Select date'

    const getFormattedDate = (date?: Date) => {
      if (typeof props.formatDate === 'function') {
        return props.formatDate(date)
      }
      return defaultFormatDate(date)
    }

    // Event emitters
    const handleTriggerClick = () => setOpen(v => !v)
    const handleTriggerKeyDown = handleKeyDown
    const handleDateChange = (date: Date) => {
      onChange?.(date)
      buttonRef.current?.focus()
    }

    return (
      <div className='relative w-full'>
        <div className='relative'>
          {label && (
            <label
              htmlFor={inputId}
              className='block text-sm font-medium text-foreground mb-2'
            >
              {label}
            </label>
          )}
          <DateSinglePickerTrigger
            ref={el => {
              buttonRef.current = el
              if (typeof ref === 'function') ref(el)
              else if (ref) {
                ;(
                  ref as React.MutableRefObject<HTMLButtonElement | null>
                ).current = el
              }
            }}
            id={inputId}
            aria-haspopup='dialog'
            aria-expanded={open}
            aria-controls={open ? `${inputId}-calendar` : undefined}
            aria-invalid={hasError}
            aria-disabled={disabled}
            disabled={disabled}
            leftContent={leftContent}
            rightContent={rightContent}
            hasError={hasError}
            variant={variant}
            value={value}
            placeholder={
              typeof placeholder === 'string' ? placeholder : 'Select date'
            }
            formatDate={getFormattedDate}
            onClick={handleTriggerClick}
            onKeyDown={handleTriggerKeyDown}
            tabIndex={0}
            {...props}
          />
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

        {type === 'docked' ? (
          <DateSinglePickerDocked
            open={open}
            value={value}
            onChange={handleDateChange}
            inputId={inputId}
            handleMenuClose={handleMenuClose}
          />
        ) : (
          <DateSinglePickerModal
            open={open}
            setOpen={setOpen}
            value={value}
            onChange={handleDateChange}
            label={typeof label === 'string' ? label : undefined}
            buttonRef={buttonRef as React.RefObject<HTMLButtonElement>}
          />
        )}
      </div>
    )
  }
)
