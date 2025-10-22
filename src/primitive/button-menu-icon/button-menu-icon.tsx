import { Menu } from '@/overlays/menu'
import { ButtonIcon } from '../button-icon'
import { forwardRef, useEffect, useState, type MouseEvent } from 'react'
import type { ButtonMenuIconProps } from './types'
import { EllipsisVerticalIcon } from 'lucide-react'

const ButtonMenuIconRoot = forwardRef<HTMLButtonElement, ButtonMenuIconProps>(
  (props, ref) => {
    const {
      as: Icon = EllipsisVerticalIcon,
      children,
      onOpenChange,
      onClick,
      placement,
      preserve,
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
        onClose={handleOnClose}
        placement={placement}
        preserve={preserve}
        content={<Menu.Content>{children}</Menu.Content>}
      >
        <ButtonIcon ref={ref} as={Icon} onClick={handleToggle} {...rest} />
      </Menu>
    )
  }
)

export const ButtonMenuIcon = Object.assign(ButtonMenuIconRoot, {
  Item: Menu.Item,
})
