/**
 * DateSinglePickerInput renders a button-styled input that triggers a native date picker
 * Uses TextInputAsButton for consistent styling with other form inputs
 * The forwarded ref is attached to the hidden date input
 */
import React, { useRef } from 'react'
import type { DateSinglePickerInputProps } from './types'
import { TextInputAsButton } from '../text-input-as-button'
import { Icon } from '@/primitive/icon'
import { Calendar } from 'lucide-react'
import { defaultDateFormatter } from './helpers'

export const DateSinglePickerInput = React.forwardRef<
  HTMLInputElement,
  DateSinglePickerInputProps
>(function DateSinglePickerInput(
  { value = '', onChange, label, formatter, min, max, ...rest },
  ref
) {
  const dateInputRef = useRef<HTMLInputElement>(null)

  // Combine forwardedRef and dateInputRef
  const setRef = (el: HTMLInputElement | null) => {
    dateInputRef.current = el
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref && typeof ref === 'object') {
      ;(ref as React.MutableRefObject<HTMLInputElement | null>).current = el
    }
  }

  // Show the browser date picker when the wrapper is clicked or focused
  const handleTriggerPicker = () => {
    if (dateInputRef.current) {
      if (typeof dateInputRef.current.showPicker === 'function') {
        dateInputRef.current.showPicker()
      } else {
        dateInputRef.current.focus()
      }
    }
  }

  // Sync value changes from the hidden date input
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const displayValue = (formatter ?? defaultDateFormatter)(value)

  return (
    <div className='relative'>
      <TextInputAsButton
        onClick={handleTriggerPicker}
        value={value}
        displayValue={displayValue}
        label={label}
        leftContent={<Icon as={Calendar} color='inherit' size='sm' />}
        data-testid='date-single-picker-visible-input'
        {...rest}
      />
      <input
        ref={setRef}
        type='date'
        value={value}
        onChange={handleDateChange}
        min={min}
        max={max}
        className='sr-only absolute opacity-0 h-0 w-0 pointer-events-none'
        tabIndex={-1}
        aria-label={typeof label === 'string' ? label : undefined}
      />
    </div>
  )
})
