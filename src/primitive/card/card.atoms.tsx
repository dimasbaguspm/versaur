import { forwardRef } from 'react'
import type { CardListItemProps, CardListProps } from './types'
import { Text } from '../text'

export const CardList = forwardRef<HTMLUListElement, CardListProps>(
  ({ children }, ref) => {
    return (
      <ul
        ref={ref}
        className='flex flex-wrap items-center min-w-0 overflow-hidden w-full gap-x-0'
      >
        {children}
      </ul>
    )
  }
)

export const CardListItem = forwardRef<HTMLLIElement, CardListItemProps>(
  ({ children }, ref) => {
    return (
      <li
        ref={ref}
        className="flex items-center min-w-0 flex-shrink-0 after:content-[''] after:inline-block after:mx-1.5 sm:after:mx-2 after:w-1 after:h-1 after:rounded-full after:bg-ghost last:after:hidden after:flex-shrink-0"
      >
        <Text as='span' fontSize='sm' color='gray' ellipsis clamp={1}>
          {children}
        </Text>
      </li>
    )
  }
)
