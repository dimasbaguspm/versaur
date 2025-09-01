import { forwardRef, type MouseEvent } from 'react'
import type { MenuContentProps, MenuItemProps } from './types'

import { Button } from '@/primitive/button'
import { cn } from '@/utils'
import { useMenuProvider } from './context'

export const MenuContent = forwardRef<HTMLUListElement, MenuContentProps>(
  ({ children }, ref) => {
    return (
      <ul ref={ref} className='flex flex-col gap-1'>
        {children}
      </ul>
    )
  }
)

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, disabled, onClick, ...props }, ref) => {
    const { preserve, onClose } = useMenuProvider()

    const handleOnClick = (ev: MouseEvent<HTMLButtonElement>) => {
      onClick?.(ev)

      if (!preserve) {
        onClose()
      }
    }
    return (
      <li ref={ref} {...props}>
        <Button
          variant='ghost'
          className={cn('block text-left w-full')}
          disabled={disabled}
          onClick={handleOnClick}
        >
          {children}
        </Button>
      </li>
    )
  }
)
