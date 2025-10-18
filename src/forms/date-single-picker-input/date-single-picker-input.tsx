/**
 * DateSinglePickerInput renders a visually accessible text input and a hidden date input
 * Clicking the wrapper triggers the browser date picker
 * The forwarded ref is attached to the hidden date input
 */
import React, { useRef } from 'react'
import type { DateSinglePickerInputProps } from './types'
import { TextInput } from '../text-input'
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
      <div
        onClick={handleTriggerPicker}
        className='cursor-pointer'
        role='presentation'
      >
        <TextInput
          inert
          type='text'
          value={displayValue}
          label={label}
          readOnly
          aria-hidden='true'
          leftContent={<Icon as={Calendar} color='inherit' size='sm' />}
          data-testid='date-single-picker-visible-input'
          {...rest}
        />
      </div>
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
