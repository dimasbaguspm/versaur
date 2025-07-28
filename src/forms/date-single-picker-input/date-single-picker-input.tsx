/**
 * DateSinglePickerInput renders a visually accessible text input and a hidden date input
 * Clicking the visible input triggers the browser date picker
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
  { value = '', onChange, label, formatter, ...rest },
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

  // Show the browser date picker when the visible input is clicked
  const handleTextClick = () => {
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
    <>
      <TextInput
        type='text'
        value={displayValue}
        label={label}
        readOnly
        tabIndex={0}
        aria-hidden='true'
        onClick={handleTextClick}
        leftContent={<Icon as={Calendar} color='inherit' size='sm' />}
        data-testid='date-single-picker-visible-input'
        {...rest}
      />
      <input
        ref={setRef}
        type='date'
        value={value}
        onChange={handleDateChange}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          width: 0,
          height: 0,
        }}
        tabIndex={-1}
        aria-label={typeof label === 'string' ? label : undefined}
      />
    </>
  )
})
