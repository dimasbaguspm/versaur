import { forwardRef } from 'react'
import { cn } from '@/utils'
import { cardVariants } from './helpers'
import type { CardProps } from './types'
import { Text } from '../text'
import { Tile } from '../tile'

/**
 * Card component - A clickable container component for displaying structured information
 *
 * Features:
 * - All cards are clickable by default with hover effects
 * - Structured layout with avatar, title, subtitle, badge, and supplementary info
 * - Multiple color variants with soft backgrounds
 * - Configurable padding sizes and shapes
 * - Built with accessibility in mind
 *
 * @example
 * ```tsx
 * <Card
 *   title="John Doe"
 *   subtitle="Software Engineer"
 *   avatar={<Avatar shape="rounded">JD</Avatar>}
 *   badge={<BadgeGroup><Badge color="secondary">Available</Badge></BadgeGroup>}
 *   supplementaryInfo="$2,847.32"
 *   onClick={handleClick}
 * />
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      size = 'md',
      shape = 'rounded',
      avatar,
      title,
      subtitle,
      badge,
      supplementaryInfo,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Tile
        ref={ref}
        className={cn(cardVariants({ size, shape }), className)}
        {...props}
      >
        <div className='flex items-start gap-4'>
          {avatar && <div className='flex-shrink-0'>{avatar}</div>}

          <div className='w-full'>
            <div className={cn('mb-4', !badge && !supplementaryInfo && 'mb-0')}>
              {title && (
                <Text as='h3' fontSize='base' fontWeight='semibold'>
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text as='p' fontSize='xs' color='gray'>
                  {subtitle}
                </Text>
              )}
            </div>

            {(badge || supplementaryInfo) && (
              <div className='flex justify-between items-center'>
                {badge}
                {supplementaryInfo && supplementaryInfo}
              </div>
            )}
          </div>
        </div>
      </Tile>
    )
  }
)
