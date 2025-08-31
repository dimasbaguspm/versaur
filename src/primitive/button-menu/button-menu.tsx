import { Menu } from '@/overlays'
import { ButtonIcon } from '../button-icon'
import { forwardRef, useEffect, useState, type MouseEvent } from 'react'
import type { ButtonMenuProps } from './types'
import { EllipsisVerticalIcon } from 'lucide-react'

const ButtonMenuRoot = forwardRef<HTMLButtonElement, ButtonMenuProps>(
  (props, ref) => {
    const {
      as: Icon = EllipsisVerticalIcon,
      content,
      onOpenChange,
      onClick,
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
      setIsOpen(o => !o)
      onClick?.(ev)
    }

    return (
      <Menu
        isOpen={isOpen}
        onOutsideClick={handleOnClose}
        size='md'
        content={<Menu.Content>{content}</Menu.Content>}
      >
        <ButtonIcon ref={ref} as={Icon} onClick={handleToggle} {...rest} />
      </Menu>
    )
  }
)

export const ButtonMenu = Object.assign(ButtonMenuRoot, {
  Item: Menu.Item,
})
