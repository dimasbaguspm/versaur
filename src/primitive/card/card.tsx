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
        <div className='flex items-start gap-4'>
          {avatar && <div className='flex-shrink-0'>{avatar}</div>}

          <div className='w-full'>
            <div className='mb-2'>
              {title && (
                <Text as='h3' fontSize='base' fontWeight='semibold'>
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text as='p' fontSize='sm' color='gray'>
                  {subtitle}
                </Text>
              )}
            </div>

            {badge && (
              <div className='flex justify-start items-center'>{badge}</div>
            )}
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col items-end gap-2',
            actions ? 'justify-between' : 'justify-end'
          )}
        >
          {actions && <div>{actions}</div>}
          <div>
            {typeof supplementaryInfo === 'string' ? (
              <Text as='p' fontSize='sm' color='gray'>
                {supplementaryInfo}
              </Text>
            ) : (
              supplementaryInfo
            )}
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
