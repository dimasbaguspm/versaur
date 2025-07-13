import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { alertIconVariants } from './helpers'
import type { AlertIconProps } from './types'

/**
 * Alert.Icon component for displaying icons within alerts
 * User-controlled icon content with proper sizing and positioning
 */
export const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(alertIconVariants(), className)} {...props}>
        {children}
      </div>
    )
  }
)
