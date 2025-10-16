import React, { useRef, useId, cloneElement } from 'react'

import { cn } from '@/utils/cn'
import { OverlayPortal } from '@/utils/overlay-portal'
import { menuVariants } from './helpers'
import type { MenuProps } from './types'
import { useMenuOutsideClick, useMenuPosition } from './use-menu'
import { MenuContent, MenuItem } from './menu.atoms'
import { MenuProvider } from './context'

/**
 * Build inline styles for menu positioning
 */
function buildPositionStyles(position: {
  top?: number
  bottom?: number
  left?: number
  right?: number
  maxHeight?: number
  maxWidth?: number
  position?: 'absolute' | 'fixed'
}): React.CSSProperties {
  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    maxHeight: position.maxHeight,
    maxWidth: position.maxWidth,
    position: position.position || 'absolute',
    overflowY: position.maxHeight ? 'auto' : undefined,
    overflowX: position.maxWidth ? 'auto' : undefined,
  }
}

/**
 * Render menu content element
 */
function renderMenuContent(
  menuId: string,
  contentRef: React.RefObject<HTMLDivElement | null>,
  size: 'sm' | 'md',
  isVisible: boolean,
  positionStyles: React.CSSProperties,
  content: React.ReactNode
) {
  return (
    <div
      id={menuId}
      ref={contentRef}
      className={cn(menuVariants({ size, open: isVisible }))}
      style={positionStyles}
      role='menu'
      aria-hidden={!isVisible}
    >
      {content}
    </div>
  )
}

const MenuRoot: React.FC<MenuProps> = ({
  isOpen,
  onOutsideClick,
  size = 'md',
  content,
  children,
  placement = 'auto',
  container,
  preserve,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  useMenuOutsideClick(isOpen, contentRef, triggerRef, onOutsideClick)

  const position = useMenuPosition(
    isOpen,
    triggerRef,
    contentRef,
    placement,
    container || null
  )

  const shouldShowMenu = isOpen && position.isReady
  const positionStyles = buildPositionStyles(position)

  // Hidden menu for measurement (when position not ready)
  const hiddenMenu =
    !position.isReady &&
    renderMenuContent(
      menuId,
      contentRef,
      size,
      false,
      {
        position: 'absolute',
        visibility: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
      },
      content
    )

  // Visible menu (when position is ready)
  const visibleMenu =
    position.isReady &&
    renderMenuContent(
      menuId,
      contentRef,
      size,
      Boolean(shouldShowMenu),
      positionStyles,
      content
    )

  // Wrap in portal if using fixed positioning
  const menuElement =
    position.position === 'fixed' && visibleMenu ? (
      <OverlayPortal>{visibleMenu}</OverlayPortal>
    ) : (
      visibleMenu
    )

  return (
    <MenuProvider
      value={{ onClose: onOutsideClick, preserve: Boolean(preserve) }}
    >
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
            {hiddenMenu}
            {menuElement}
          </>
        )}
      </div>
    </MenuProvider>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Item: MenuItem,
})
