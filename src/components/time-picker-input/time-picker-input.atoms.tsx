import React from 'react'
import { cn } from '@/utils/cn'
import { timeSegmentButtonVariants } from './helpers'

export interface TimeFieldProps {
  value: string
  onChange: (val: string) => void
  label: string
  'aria-label'?: string
  disabled?: boolean
}

export const TimeField: React.FC<TimeFieldProps> = ({
  value,
  onChange,
  label,
  'aria-label': ariaLabel,
  disabled,
}) => (
  <input
    type='text'
    inputMode='numeric'
    pattern='[0-9]*'
    maxLength={2}
    value={value}
    onChange={e => onChange(e.target.value)}
    className={
      'w-12 h-12 text-center text-2xl border-b-2 border-primary bg-transparent focus:outline-none focus:border-primary'
    }
    aria-label={ariaLabel || label}
    disabled={disabled}
    autoComplete='off'
  />
)

export interface AmPmSegmentProps {
  value: 'AM' | 'PM'
  onChange: (val: 'AM' | 'PM') => void
  disabled?: boolean
}

export const AmPmSegment: React.FC<AmPmSegmentProps> = ({
  value,
  onChange,
  disabled,
}) => (
  <div className='flex flex-col gap-1 ml-4'>
    {(['AM', 'PM'] as const).map(p => (
      <button
        key={p}
        type='button'
        className={cn(
          timeSegmentButtonVariants({
            active: value === p,
            size: 'sm',
          })
        )}
        aria-pressed={value === p}
        onClick={() => onChange(p)}
        disabled={disabled}
      >
        {p}
      </button>
    ))}
  </div>
)
