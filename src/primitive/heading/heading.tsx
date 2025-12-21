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
      as = 'h3',
      color = 'black',
      transform = 'none',
      decoration = 'none',
      hasMargin = false,
      align = 'left',
      clamp = 'none',
      ellipsis = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const HeadingTag = as
    const ellipsisClass = ellipsis
      ? clamp === 'none'
        ? 'truncate'
        : 'overflow-hidden'
      : ''

    return (
      <HeadingTag
        ref={ref}
        className={cn(
          headingVariants({
            color,
            transform,
            decoration,
            hasMargin,
            align,
            clamp,
            as: HeadingTag,
          }),
          ellipsisClass,
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
