import React from 'react'
import { cn } from '@/utils/cn'
import type { FilterChipProps } from './types'
import { filterChipVariants } from './helpers'
import { Icon } from '../icon'
import { XIcon } from 'lucide-react'

export const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
  function FilterChip(
    { className, size = 'md', disabled = false, children, ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type='button'
        className={cn(filterChipVariants({ size }), className)}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={`${children}, removable`}
        inert={disabled ? true : undefined}
        {...props}
      >
        <span className='flex-shrink-0'>{children}</span>

        <Icon as={XIcon} color='inherit' size={size === 'lg' ? 'md' : 'sm'} />
      </button>
    )
  }
)
