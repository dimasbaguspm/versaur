import React from 'react'
import { cn } from '@/utils/cn'
import type { ButtonProps } from './types'
import { buttonVariants } from './helpers'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
      children,
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled}
        aria-disabled={disabled}
        inert={disabled ? true : undefined}
        {...props}
      >
        {children}
      </button>
    )
  }
)
