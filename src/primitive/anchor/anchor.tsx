import { forwardRef } from 'react'
import type { AnchorProps } from './types'
import { anchorVariants } from './helpers'
import { cn } from '@/utils/cn'

/**
 * Anchor primitive component for rendering links
 * Supports fontSize and fontWeight, and covers pseudo selectors (:hover, :visited)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      children,
      className,
      color = 'primary',
      fontSize = 'base',
      fontWeight = 'medium',
      quiet = false,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={cn(
          anchorVariants({ color, fontSize, fontWeight, quiet }),
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
