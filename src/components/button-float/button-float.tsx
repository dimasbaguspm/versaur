import { forwardRef, useEffect, useState } from 'react'
import { buttonFloatVariants } from './helpers'
import type { ButtonFloatProps } from './types'
import { cn } from '@/utils/cn'

/**
 * ButtonFloat is a floating action button that stays fixed to the bottom right or left of the viewport.
 * It supports all Button variants, sizes, and accessibility features.
 *
 * @see ButtonFloatProps for prop details
 */
export const ButtonFloat = forwardRef<HTMLButtonElement, ButtonFloatProps>(
  function ButtonFloat(
    {
      className,
      variant = 'primary',
      size = 'md',
      side = 'right',
      offset = '1rem',
      style,
      ...props
    },
    ref
  ) {
    const positionClass =
      side === 'right' ? 'fixed bottom-4 right-4' : 'fixed bottom-4 left-4'

    // Allow offset customization
    const customStyle = {
      ...(style || {}),
      bottom: offset,
      position: 'fixed',
      zIndex: 50,
    } as const

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        className={cn(
          buttonFloatVariants({ variant, size }),
          positionClass,
          mounted && 'animate-fab-in',
          className
        )}
        style={customStyle}
        {...props}
      />
    )
  }
)
