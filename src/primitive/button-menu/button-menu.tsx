import { Menu } from '@/overlays/menu'
import { forwardRef, useEffect, useState, type MouseEvent } from 'react'
import type { ButtonMenuProps } from './types'
import { Button } from '../button/button'

const ButtonMenuRoot = forwardRef<HTMLButtonElement, ButtonMenuProps>(
  (props, ref) => {
    const {
      children,
      onOpenChange,
      onClick,
      placement,
      container,
      preserve,
      label,
      ...rest
    } = props ?? {}
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      onOpenChange?.(isOpen)
    }, [isOpen, onOpenChange])

    const handleOnClose = () => {
      setIsOpen(false)
    }

    const handleToggle = (ev: MouseEvent<HTMLButtonElement>) => {
      ev.stopPropagation()
      setIsOpen(o => !o)
      onClick?.(ev)
    }

    return (
      <Menu
        isOpen={isOpen}
        onOutsideClick={handleOnClose}
        placement={placement}
        container={container}
        preserve={preserve}
        content={<Menu.Content>{children}</Menu.Content>}
      >
        <Button ref={ref} onClick={handleToggle} {...rest}>
          {label}
        </Button>
      </Menu>
    )
  }
)

export const ButtonMenu = Object.assign(ButtonMenuRoot, {
  Item: Menu.Item,
})
