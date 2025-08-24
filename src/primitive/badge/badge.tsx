import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { badgeVariants } from './helpers'
import type { BadgeProps } from './types'

/**
 * Badge component for presenting or highlighting values with various styles and configurations
 *
 * Follows the Regular Pattern - a simple styled wrapper that aligns with standard HTML behavior.
 * Supports variants (default/outline), sizes, shapes, colors, and icon positioning.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 *
 * // With variants and colors
 * <Badge variant="outline" color="success">Verified</Badge>
 *
 * // With icons
 * <Badge iconLeft={<CheckIcon />} color="success">Completed</Badge>
 * <Badge iconRight={<ArrowIcon />}>Continue</Badge>
 *
 * // Icon only
 * <Badge iconOnly iconLeft={<StarIcon />} shape="rounded" />
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      shape = 'square',
      color = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Auto-detect icon-only mode: when no children and an icon is provided
    const hasChildren =
      children !== undefined && children !== null && children !== ''
    const hasIcon = Boolean(iconLeft || iconRight)
    const isIconOnly = !hasChildren && hasIcon

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            color,
            shape,
            size,
            iconOnly: isIconOnly,
          }),
          className
        )}
        {...props}
      >
        {isIconOnly ? (
          // Icon-only mode: display only the icon
          iconLeft || iconRight
        ) : (
          // Normal mode: display icon(s) and text
          <>
            {iconLeft}
            {children}
            {iconRight}
          </>
        )}
      </span>
    )
  }
)
