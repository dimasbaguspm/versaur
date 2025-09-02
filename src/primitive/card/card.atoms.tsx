import { forwardRef } from 'react'
import type { CardListItemProps, CardListProps } from './types'

export const CardList = forwardRef<HTMLUListElement, CardListProps>(
  ({ children }, ref) => {
    return (
      <ul
        ref={ref}
        className='flex items-center min-w-0 overflow-hidden w-full'
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
        className="flex items-center min-w-0 flex-shrink after:content-[''] after:inline-block after:mx-2 after:w-1 after:h-1 after:rounded-full after:bg-ghost last:after:hidden after:flex-shrink-0"
      >
        <span className='truncate min-w-0'>{children}</span>
      </li>
    )
  }
)
