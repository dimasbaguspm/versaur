import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { headingVariants } from './helpers'
import type { HeadingProps } from './types'

/**
 * Heading component for Versaur UI
 * Provides semantic heading typography (h1-h6), color, underline, capitalization, and margin support
 * @example <Heading level={1} color="primary" hasUnderline isCapitalize hasMargin>Main Title</Heading>
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 3,
      color = 'black',
      hasUnderline = false,
      isCapitalize = false,
      hasMargin = false,
      align = 'left',
      italic = false,
      clamp = 'none',
      ellipsis = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the HTML tag based on level
    const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

    return (
      <HeadingTag
        ref={ref}
        className={cn(
          headingVariants({
            color,
            hasUnderline,
            isCapitalize,
            hasMargin,
            align,
            italic,
            clamp,
            ellipsis,
            level,
          }),
          className
        )}
        {...props}
      >
        {children}
      </HeadingTag>
    )
  }
)

Heading.displayName = 'Heading'
