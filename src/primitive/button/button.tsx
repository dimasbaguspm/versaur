import React from 'react'
import { cn } from '@/utils/cn'
import type { ButtonProps } from './types'
import { buttonVariants } from './helpers'
import { Icon } from '../icon'
import { LoaderCircleIcon } from 'lucide-react'

/**
 * Button component following browser-standard button behavior
 * Supports 4 variants: primary, ghost, outline, and destructive
 * Provides 3 sizes: sm, md (default), lg
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
      busy,
      children,
      ...props
    },
    ref
  ) {
    // Map button sizes to icon sizes
    const iconSize = size === 'sm' ? 'sm' : size === 'lg' ? 'md' : 'sm'

    // Determine icon color based on variant
    const getIconColor = () => {
      if (variant === 'primary' || variant === 'destructive') {
        return 'white'
      }
      if (variant === 'outline' || variant === 'ghost') {
        return 'inherit'
      }
      return 'inherit'
    }

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || busy}
        aria-disabled={disabled || busy}
        inert={disabled || busy ? true : undefined}
        aria-busy={busy ? true : undefined}
        {...props}
      >
        {busy && (
          <Icon
            as={LoaderCircleIcon}
            size={iconSize}
            color={getIconColor()}
            className='animate-spin'
          />
        )}
        {children}
      </button>
    )
  }
)
