import { forwardRef, type MouseEvent } from 'react'
import type { MenuContentProps, MenuItemProps } from './types'

import { Button } from '@/primitive/button'
import { Icon } from '@/primitive/icon'
import { cn } from '@/utils'
import { useMenuProvider } from './context'
import { CheckIcon } from 'lucide-react'

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
  ({ children, disabled, onClick, active, ...props }, ref) => {
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
          className={cn('justify-start w-full gap-2')}
          disabled={disabled}
          onClick={handleOnClick}
        >
          {children}
          {active && (
            <Icon
              as={CheckIcon}
              color='inherit'
              className='ml-auto'
              size='sm'
            />
          )}
        </Button>
      </li>
    )
  }
)
