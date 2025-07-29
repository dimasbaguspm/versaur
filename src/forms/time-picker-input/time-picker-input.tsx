import { forwardRef } from 'react'
import type { TimePickerInputProps } from './types'
import { TextInput } from '@/forms/text-input'
import { Icon } from '@/primitive/icon'
import { Clock } from 'lucide-react'

/**
 * TimePickerInput component for Versaur UI
 *
 * Renders a visually accessible text input
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
 */
export const TimePickerInput = forwardRef<
  HTMLInputElement,
  TimePickerInputProps
>(function TimePickerInput(rest, ref) {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    rest?.onChange?.(e.target.value)
  }

  return (
    <TextInput
      type='time'
      tabIndex={0}
      aria-hidden='true'
      leftContent={<Icon as={Clock} color='inherit' size='sm' />}
      ref={ref}
      {...rest}
      onChange={handleTimeChange}
    />
  )
})
