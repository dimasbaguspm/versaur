import React from 'react'
import type { LoadingIndicatorProps } from './types'
import { SpinnerAtom, BarAtom } from './loading-indicator.atoms'

/**
 * LoadingIndicator displays a visual loading state using spinner or bar type
 * Follows Versaur design system and Material guidelines for loading indicators
 */
export const LoadingIndicator = React.forwardRef<
  HTMLDivElement,
  LoadingIndicatorProps
>(
  (
    {
      type = 'spinner',
      size = 'md',
      color = 'primary',
      ariaLabel = 'Loading',
      className,
      ...props
    },
    ref
  ) => {
    if (type === 'bar') {
      return (
        <BarAtom
          ref={ref}
          color={color}
          size={size}
          ariaLabel={ariaLabel}
          className={className}
          {...props}
        />
      )
    }
    // Spinner type
    return (
      <SpinnerAtom
        ref={ref}
        color={color}
        size={size}
        ariaLabel={ariaLabel}
        className={className}
        {...props}
      />
    )
  }
)
LoadingIndicator.displayName = 'LoadingIndicator'
