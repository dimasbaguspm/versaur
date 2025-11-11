import React from 'react'
import { cn } from '@/utils/cn'
import { formattedTextVariants, formattedContentStyles } from './helpers'
import type { FormattedTextProps } from './types'

/**
 * FormattedText component for Versaur UI
 *
 * Displays rich HTML content with consistent formatting styles
 * Matches the styling used in TextAreaInput with toolbar formatting
 * Should be used with sanitized HTML content to prevent XSS attacks
 */
export const FormattedText = React.forwardRef<
  HTMLDivElement,
  FormattedTextProps
>(({ content, scrollable = false, maxHeight, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role='article'
      aria-label='Formatted text content'
      dangerouslySetInnerHTML={{ __html: content }}
      style={
        scrollable && maxHeight ? { maxHeight: `${maxHeight}rem` } : undefined
      }
      className={cn(
        formattedTextVariants({ scrollable }),
        ...formattedContentStyles,
        className
      )}
      {...props}
    />
  )
})

FormattedText.displayName = 'FormattedText'
