import { forwardRef, useEffect, useState } from 'react'
import { buttonFloatVariants } from './helpers'
import type { ButtonFloatProps } from './types'
import { cn } from '@/utils/cn'
import { useFloatingPosition } from '@/hooks/use-floating-position'
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
      ...props
    },
    ref
  ) {
    const [containerRef, customStyle, positionClass] = useFloatingPosition(
      side,
      offset
    )
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    return (
      <div ref={containerRef}>
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
      </div>
    )
  }
)
