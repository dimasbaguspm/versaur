/**
 * Atoms for DateSinglePickerInput
 * - DateSinglePickerTrigger: styled button for input
 * - DateSinglePickerDock: docked calendar container
 */

import { Modal } from '@/overlays/modal'
import { Button } from '@/primitive/button'
import type { DateSinglePickerModalFooterProps } from './types'

import React from 'react'
import { cn } from '@/utils/cn'
import { dateSinglePickerInputVariants } from './helpers'
import type { DateSinglePickerInputProps } from './types'

export interface DateSinglePickerTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  hasError?: boolean
  variant?: DateSinglePickerInputProps['variant']
  value?: Date
  placeholder?: string
  formatDate?: (date?: Date) => string
}

export const DateSinglePickerTrigger = React.forwardRef<
  HTMLButtonElement,
  DateSinglePickerTriggerProps
>(
  (
    {
      leftContent,
      rightContent,
      hasError,
      variant = 'primary',
      value,
      placeholder = 'Select date',
      formatDate,
      className,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type='button'
      aria-invalid={hasError}
      className={cn(
        dateSinglePickerInputVariants({
          variant: hasError ? 'danger' : variant,
        }),
        leftContent ? 'pl-9' : 'pl-3',
        rightContent ? 'pr-9' : 'pr-3',
        'h-10 flex items-center justify-between cursor-pointer w-full relative',
        'text-left',
        className
      )}
      {...props}
    >
      {leftContent && (
        <span
          className='absolute left-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
          data-testid='left-content'
        >
          {leftContent}
        </span>
      )}
      <span
        className={cn(
          'flex-1',
          leftContent ? 'ml-2' : '',
          rightContent ? 'mr-2' : ''
        )}
      >
        {formatDate ? formatDate(value) : placeholder}
      </span>
      {rightContent && (
        <span
          className='absolute right-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
          data-testid='right-content'
        >
          {rightContent}
        </span>
      )}
    </button>
  )
)
DateSinglePickerTrigger.displayName = 'DateSinglePickerTrigger'

export const DateSinglePickerModalFooter = ({
  onCancel,
  onConfirm,
  confirmDisabled,
}: DateSinglePickerModalFooterProps) => (
  <Modal.Footer>
    <Button variant='ghost' onClick={onCancel} type='button'>
      Cancel
    </Button>
    <Button
      variant='primary'
      onClick={onConfirm}
      type='button'
      disabled={confirmDisabled}
    >
      Confirm
    </Button>
  </Modal.Footer>
)
