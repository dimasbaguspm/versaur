import { forwardRef } from 'react'
import { cn } from '@/utils'
import type { ActionCardGroupProps } from './types'

/**
 * ActionCard.Group - Container component for grouping multiple ActionCards
 *
 * Provides a clean container with proper spacing and borders for multiple ActionCards.
 * ActionCards within a group are automatically spaced and can be configured with
 * consistent sizing.
 *
 * @example
 * ```tsx
 * <ActionCard.Group>
 *   <ActionCard icon={<WalletIcon />} title="Account Groups" badge={<Badge>Popular</Badge>} />
 *   <ActionCard icon={<TagsIcon />} title="Category Groups" />
 *   <ActionCard icon={<DatabaseIcon />} title="Backup & Restore" />
 * </ActionCard.Group>
 * ```
 */
export const ActionCardGroup = forwardRef<HTMLDivElement, ActionCardGroupProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-background border border-border rounded-lg overflow-hidden',
          'divide-y divide-border',
          className
        )}
        role='group'
      >
        {children}
      </div>
    )
  }
)
