import React from 'react'
import { cn } from '@/utils/cn'
import { segmentGroupVariants } from './helpers'
import {
  SegmentMultipleInputContext,
  type SegmentMultipleInputContextValue,
} from './context'
import { SegmentOption } from './segment-multiple-input.atoms'
import type { SegmentMultipleInputProps } from './types'

/**
 * SegmentMultipleInput component for Versaur UI
 *
 * Provides a segmented checkbox input with tab-like visual design
 * Perfect for form components that need clear visual grouping with multiple selection
 * Uses checkbox input pattern with enhanced styling for segment appearance
 */
const SegmentMultipleInputRoot = React.forwardRef<
  HTMLDivElement,
  SegmentMultipleInputProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      label,
      helperText,
      error,
      className,
      disabled,
      name,
      value = [],
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error)

    const contextValue = {
      variant,
      size,
      disabled,
      error: hasError,
      name,
      value,
      onChange,
    } satisfies SegmentMultipleInputContextValue

    // Count children to determine positions
    const childrenArray = React.Children.toArray(children)
    const childrenWithPositions = childrenArray.map((child, index) => {
      if (React.isValidElement(child)) {
        let position: 'first' | 'middle' | 'last' | 'single'

        if (childrenArray.length === 1) {
          position = 'single'
        } else if (index === 0) {
          position = 'first'
        } else if (index === childrenArray.length - 1) {
          position = 'last'
        } else {
          position = 'middle'
        }

        return React.cloneElement(
          child as React.ReactElement<{ position?: string }>,
          { position }
        )
      }
      return child
    })

    return (
      <SegmentMultipleInputContext.Provider value={contextValue}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {label && (
            <div className='block text-sm font-medium text-foreground mb-3'>
              {label}
            </div>
          )}
          <div
            className={segmentGroupVariants({
              variant: hasError ? 'danger' : variant,
              size,
              error: hasError,
            })}
          >
            {childrenWithPositions}
          </div>
          {hasError && (
            <div className='mt-2 text-sm text-danger' role='alert'>
              {error}
            </div>
          )}
          {!hasError && helperText && (
            <div className='mt-2 text-sm text-gray-600'>{helperText}</div>
          )}
        </div>
      </SegmentMultipleInputContext.Provider>
    )
  }
)

export const SegmentMultipleInput = Object.assign(SegmentMultipleInputRoot, {
  Option: SegmentOption,
})
