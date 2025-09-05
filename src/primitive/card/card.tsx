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
const CardRoot = forwardRef<HTMLButtonElement | HTMLDivElement, CardProps>(
  (
    {
      size = 'md',
      shape = 'rounded',
      avatar,
      title,
      subtitle,
      badge,
      supplementaryInfo,
      bordered = false,
      as: Component = 'button',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        // @ts-expect-error - ref type depends on `as` prop
        ref={ref}
        className={cn(
          cardVariants({ size, shape, bordered, as: Component }),
          className
        )}
        {...props}
      >
        <div className='flex items-start gap-3 sm:gap-4 w-full'>
          {avatar && <div className='flex-shrink-0'>{avatar}</div>}

          <div className='w-full min-w-0'>
            <div className='mb-2'>
              <div className='flex items-start justify-between gap-2'>
                <div className='flex-1 min-w-0'>
                  <Text
                    as='h3'
                    fontSize='base'
                    fontWeight='semibold'
                    className='break-words leading-tight'
                  >
                    {title}
                  </Text>
                  {subtitle && (
                    <div className='mt-1'>
                      {typeof subtitle === 'string' ? (
                        <Text as='p' fontSize='sm' color='gray'>
                          {subtitle}
                        </Text>
                      ) : (
                        <div className='min-w-0 overflow-hidden'>
                          {subtitle}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center'>
              {badge && (
                <div className='order-1 sm:order-none overflow-hidden'>
                  {badge}
                </div>
              )}

              {supplementaryInfo && (
                <div className='flex-shrink-0 order-2 sm:order-none sm:ml-auto'>
                  {typeof supplementaryInfo === 'string' ? (
                    <Text
                      as='p'
                      fontSize='sm'
                      color='gray'
                      className='truncate'
                      align='right'
                    >
                      {supplementaryInfo}
                    </Text>
                  ) : (
                    <div className='overflow-hidden'>{supplementaryInfo}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Component>
    )
  }
)

export const Card = Object.assign(CardRoot, {
  List: CardList,
  ListItem: CardListItem,
})
