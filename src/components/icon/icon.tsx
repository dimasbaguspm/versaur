import React from 'react'
import type { IconProps } from './types'
import { iconVariants } from './helpers'

/**
 * Icon component for Versaur UI
 * Renders a single icon component (e.g., from lucide-react) with enforced size and color
 * @example <Icon as={Circle} color="primary" size="md" />
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { as: IconComponent, color = 'primary', size = 'md', className, ...rest },
  ref
) {
  return (
    <IconComponent
      // @ts-expect-error - Lucide icons don't have className prop, but we use it for styling
      ref={ref}
      className={iconVariants({ color, size, className })}
      {...rest}
    />
  )
})
