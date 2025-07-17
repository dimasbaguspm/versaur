import React from 'react'
import type { IconProps } from './types'
import { iconVariants } from './helpers'

/**
 * Icon component for Versaur UI
 * Wraps Lucide icons and enforces consistent size and color
 * @example <Icon color="primary" size="md"><LucideIcon /></Icon>
 */
export const Icon: React.FC<IconProps> = ({
  color = 'primary',
  size = 'md',
  children,
  ...rest
}) => {
  return (
    <span
      className={iconVariants({ color, size, className: rest.className })}
      aria-hidden={'true'}
      {...rest}
    >
      {children}
    </span>
  )
}
