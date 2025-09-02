import { forwardRef } from 'react'
import { cn } from '@/utils'
import { cardVariants } from './helpers'
import type { CardProps } from './types'
import { Text } from '../text'
import { CardList, CardListItem } from './card.atoms'

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
const CardRoot = forwardRef<HTMLButtonElement, CardProps>(
  (
    {
      size = 'md',
      shape = 'rounded',
      avatar,
      title,
      subtitle,
      badge,
      actions,
      supplementaryInfo,
      bordered = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(cardVariants({ size, shape, bordered }), className)}
        {...props}
      >
        <div className='flex items-start gap-4 w-full'>
          {avatar && <div className='flex-shrink-0'>{avatar}</div>}

          <div className='w-full min-w-0'>
            <div className='mb-2'>
              <div className='flex justify-between'>
                <Text
                  as='h3'
                  fontSize='base'
                  fontWeight='semibold'
                  className='truncate'
                >
                  {title}
                </Text>
                {actions && <div>{actions}</div>}
              </div>

              {subtitle && (
                <div className={cn(actions && '-mt-3')}>
                  {typeof subtitle === 'string' ? (
                    <Text as='p' fontSize='sm' color='gray'>
                      {subtitle}
                    </Text>
                  ) : (
                    <div className='min-w-0 overflow-hidden'>
                      <Text
                        as='p'
                        fontSize='sm'
                        color='gray'
                        className='min-w-0'
                      >
                        {subtitle}
                      </Text>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className='flex justify-between items-center gap-2'>
              {badge && badge}
              {supplementaryInfo && typeof supplementaryInfo === 'string' ? (
                <Text as='p' fontSize='sm' color='gray'>
                  {supplementaryInfo}
                </Text>
              ) : (
                <div>{supplementaryInfo}</div>
              )}
            </div>
          </div>
        </div>
      </button>
    )
  }
)

export const Card = Object.assign(CardRoot, {
  List: CardList,
  ListItem: CardListItem,
})
