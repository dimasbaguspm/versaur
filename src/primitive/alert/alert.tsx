import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { alertVariants } from './helpers'
import { AlertIcon } from './alert.atoms'
import type { AlertProps } from './types'

/**
 * Alert component for displaying inline notifications and status messages
 *
 * Features:
 * - Inline placement for contextual information
 * - Variant support: default (soft colors) and outline styles
 * - Complete color system integration (primary, secondary, tertiary, ghost, neutral, semantic colors)
 * - Flexible icon support via icon prop or Alert.Icon sub-component
 * - Simple content support: plain text or structured with Alert.Title
 * - Accessible design following WCAG 2.1 AA standards
 *
 * Common use cases:
 * - "Record not available" messages
 * - Form validation feedback
 * - Status notifications
 * - Informational content
 */
const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'default',
      color = 'neutral',
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role='alert'
        className={cn(alertVariants({ variant, color }), className)}
        {...props}
      >
        {icon && <AlertIcon>{icon}</AlertIcon>}
        <div className='flex-1'>{children}</div>
      </div>
    )
  }
)

/**
 * Alert compound component with sub-components
 *
 * @example
 * ```tsx
 * // Simple usage with icon prop
 * <Alert color="danger" icon={<XCircleIcon />}>
 *   Record Not Available - The requested record could not be found.
 * </Alert>
 *
 * // Even simpler with just text
 * <Alert color="info" icon={<InfoIcon />}>
 *   Information message
 * </Alert>
 *
 * // Advanced usage with Alert.Icon sub-component (for complex layouts)
 * <Alert color="warning">
 *   <Alert.Icon>
 *     <AlertTriangleIcon />
 *   </Alert.Icon>
 *   <div>
 *     <h4>Warning</h4>
 *     <p>Please review your input.</p>
 *   </div>
 * </Alert>
 * ```
 */
export const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
})
