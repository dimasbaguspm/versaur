import React from 'react'
import { cn } from '@/utils/cn'
import { buttonIconVariants, getIconColorFromVariant } from './helpers'
import { Icon } from '@/primitive/icon'
import type { ButtonIconProps } from './types'

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIcon(
    {
      className,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      disabled = false,
      as: IconComponent,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) {
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
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        inert={disabled ? true : undefined}
        {...props}
      >
        <Icon
          as={IconComponent}
          size='sm'
          color={getIconColorFromVariant(variant)}
        />
      </button>
    )
  }
)
