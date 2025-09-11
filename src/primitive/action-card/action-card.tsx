import { forwardRef } from 'react'
import { cn } from '@/utils'
import {
  actionCardVariants,
  iconContainerVariants,
  arrowVariants,
} from './helpers'
import type { ActionCardProps } from './types'
import { Text } from '../text'
import { Icon } from '../icon'
import { ChevronRight } from 'lucide-react'
import { ActionCardGroup } from './action-card.atoms'

/**
 * ActionCard component - A clickable action item with icon, title, badge, and navigation
 *
 * Features:
 * - Interactive action cards with hover effects
 * - Icon container with gradient background that changes on hover
 * - Support for title, subtitle, and badges
 * - Optional chevron arrow for navigation indication
 * - Can be grouped together for list-like interfaces
 * - Configurable sizes and accessibility support
 *
 * @example
 * ```tsx
 * <ActionCard
 *   icon={<WalletIcon />}
 *   title="Account Groups"
 *   subtitle="Create and manage groups for your accounts"
 *   badge={<Badge color="success">Popular</Badge>}
 *   onClick={handleClick}
 * />
 * ```
 */
const ActionCardRoot = forwardRef<
  HTMLButtonElement | HTMLDivElement,
  ActionCardProps
>(
  (
    {
      size = 'md',
      icon,
      title,
      subtitle,
      badge,
      showArrow = true,
      as: Component = 'button',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        // @ts-expect-error TypeScript may complain about ref types for different elements
        ref={ref}
        className={cn(actionCardVariants({ size, as: Component }), className)}
        {...props}
      >
        {/* Main content area */}
        <div className='flex items-center gap-4 flex-1'>
          {/* Icon container */}
          {icon && (
            <div className={cn(iconContainerVariants({ size }))}>{icon}</div>
          )}

          {/* Text content */}
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-1'>
              <Text
                as='span'
                fontSize={size === 'sm' ? 'sm' : 'base'}
                fontWeight='semibold'
                color='ghost'
                className='text-left leading-normal'
              >
                {title}
              </Text>

              {/* Badge area */}
              {badge && (
                <div
                  className='flex flex-wrap items-center flex-row justify-start gap-3'
                  role='group'
                >
                  {badge}
                </div>
              )}
            </div>

            {/* Subtitle */}
            {subtitle && (
              <Text
                as='p'
                fontSize='sm'
                color='gray'
                className='text-left leading-normal'
              >
                {subtitle}
              </Text>
            )}
          </div>
        </div>

        {/* Arrow indicator */}
        {showArrow && (
          <div className='flex items-center gap-3'>
            <Icon
              as={ChevronRight}
              className={cn(arrowVariants({ size }))}
              color='ghost'
              aria-hidden='true'
            />
          </div>
        )}
      </Component>
    )
  }
)

export const ActionCard = Object.assign(ActionCardRoot, {
  Group: ActionCardGroup,
})
