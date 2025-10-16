import React from 'react'
import { cn } from '@/utils/cn'
import { buttonIconVariants, getIconColorFromVariant } from './helpers'
import { Icon } from '@/primitive/icon'
import type { ButtonIconProps } from './types'
import { LoaderCircleIcon } from 'lucide-react'

/**
 * ButtonIcon component - icon-only button following browser-standard button behavior
 * Supports 4 variants: primary, ghost, outline, and destructive
 * Provides 3 sizes: sm, md (default), lg
 * Provides 3 shapes: rounded (default), square, circle
 */
export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIcon(
    {
      className,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      disabled = false,
      busy,
      as: IconComponent,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) {
    // Determine icon color based on variant
    const iconColor = getIconColorFromVariant(variant)

    return (
      <button
        ref={ref}
        type='button'
        className={cn(
          buttonIconVariants({
            variant,
            size,
            shape,
          }),
          className
        )}
        disabled={disabled || busy}
        aria-disabled={disabled || busy}
        aria-label={ariaLabel}
        inert={disabled || busy ? true : undefined}
        aria-busy={busy ? true : undefined}
        {...props}
      >
        {busy ? (
          <Icon
            as={LoaderCircleIcon}
            size='sm'
            color={iconColor}
            className='animate-spin'
          />
        ) : (
          <Icon as={IconComponent} size='sm' color={iconColor} />
        )}
      </button>
    )
  }
)
