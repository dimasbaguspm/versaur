import React from 'react'
import { cn } from '@/utils/cn'
import type { ButtonAnchorProps } from './types'
import { buttonAnchorVariants } from './helpers'

/**
 * ButtonAnchor component styled as a button but rendered as an anchor
 * Supports 3 variants: primary, ghost, and outline
 * Provides 3 sizes: sm, md (default), lg
 * Useful for navigation actions that should look like buttons
 */
export const ButtonAnchor = React.forwardRef<
  HTMLAnchorElement,
  ButtonAnchorProps
>(function ButtonAnchor(
  {
    className,
    variant = 'primary',
    size = 'md',
    disabled = false,
    children,
    href,
    onClick,
    ...props
  },
  ref
) {
  // Handle disabled state for anchor element
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  return (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      className={cn(buttonAnchorVariants({ variant, size }), className)}
      aria-disabled={disabled ? true : undefined}
      tabIndex={disabled ? -1 : undefined}
      role={disabled ? 'link' : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
})
