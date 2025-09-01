import React, { useRef, useId, cloneElement } from 'react'

import { cn } from '@/utils/cn'
import { OverlayPortal } from '@/utils/overlay-portal'
import { menuVariants } from './helpers'
import type { MenuProps } from './types'
import { useMenuOutsideClick, useMenuPosition } from './use-menu'
import { MenuContent, MenuItem } from './menu.atoms'
import { useEscapeClose } from '@/utils/use-escape-close'

const MenuRoot: React.FC<MenuProps> = ({
  isOpen,
  onOutsideClick,
  size = 'md',
  content,
  children,
  placement = 'bottom-start',
  container,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  useMenuOutsideClick(isOpen, contentRef, triggerRef, onOutsideClick)
  useEscapeClose(isOpen, onOutsideClick)

  const position = useMenuPosition(
    isOpen,
    triggerRef,
    contentRef,
    placement,
    container
  )

  const positionStyles: React.CSSProperties = {
    ...position,
    position: position.position || 'absolute',
    overflowY: position.maxHeight ? 'auto' : undefined,
    overflowX: position.maxWidth ? 'auto' : undefined,
  }

  // Only show menu when position is calculated and ready
  const shouldShowMenu = isOpen && position.isReady

  const menuContent = (
    <div
      id={menuId}
      ref={contentRef}
      className={cn(menuVariants({ size, open: shouldShowMenu }))}
      style={positionStyles}
      role='menu'
      aria-hidden={!shouldShowMenu}
    >
      {content}
    </div>
  )

  return (
    <div className='relative w-fit'>
      {cloneElement(children as React.ReactElement, {
        // @ts-expect-error: ref is valid for button or forwardRef components
        ref: triggerRef,
        'aria-haspopup': 'menu',
        'aria-expanded': isOpen,
        'aria-controls': menuId,
      })}
      {isOpen && (
        <>
          {/* Hidden menu for measurement when position is not ready */}
          {!position.isReady && (
            <div
              ref={contentRef}
              className={cn(menuVariants({ size, open: false }))}
              style={{
                position: 'absolute',
                visibility: 'hidden',
                opacity: 0,
                pointerEvents: 'none',
              }}
              role='menu'
              aria-hidden={true}
            >
              {content}
            </div>
          )}

          {/* Visible menu when position is ready */}
          {position.isReady && (
            <>
              {position.position === 'fixed' ? (
                <OverlayPortal>{menuContent}</OverlayPortal>
              ) : (
                menuContent
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Item: MenuItem,
})
