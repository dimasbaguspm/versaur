import { forwardRef } from 'react'
import type { CardListItemProps, CardListProps } from './types'

export const CardList = forwardRef<HTMLUListElement, CardListProps>(
  ({ children }, ref) => {
    return (
      <ul ref={ref} className='inline-flex items-center'>
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
        className="flex items-center after:content-[''] after:inline-block after:mx-2 after:w-1 after:h-1 after:rounded-full after:bg-ghost last:after:hidden"
      >
        {children}
      </li>
    )
  }
)
