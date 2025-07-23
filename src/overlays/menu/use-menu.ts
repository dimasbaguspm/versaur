import { useEffect } from 'react'

export function useMenuOutsideClick(
  isOpen: boolean,
  contentRef: React.RefObject<HTMLDivElement | null>,
  triggerRef: React.RefObject<HTMLButtonElement | null>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    if (!isOpen) return
    function handleClick(e: MouseEvent) {
      if (
        !contentRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        onOutsideClick()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen, onOutsideClick, contentRef, triggerRef])
}

export function useMenuFocusFirstItem(
  isOpen: boolean,
  contentRef: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const items = contentRef.current.querySelectorAll('[role="menuitem"]')
      if (items.length) (items[0] as HTMLElement).focus()
    }
  }, [isOpen, contentRef])
}

export function useMenuKeyboardNavigation(
  isOpen: boolean,
  contentRef: React.RefObject<HTMLDivElement | null>,
  triggerRef: React.RefObject<HTMLButtonElement | null>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    if (!isOpen || !contentRef.current) return
    const menu = contentRef.current
    function handleKeyDown(e: KeyboardEvent) {
      const items = Array.from(
        menu.querySelectorAll('[role="menuitem"]')
      ) as HTMLElement[]
      const active = document.activeElement as HTMLElement
      const idx = items.indexOf(active)
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (items.length) items[(idx + 1) % items.length].focus()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (items.length) items[(idx - 1 + items.length) % items.length].focus()
      } else if (e.key === 'Home') {
        e.preventDefault()
        if (items.length) items[0].focus()
      } else if (e.key === 'End') {
        e.preventDefault()
        if (items.length) items[items.length - 1].focus()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onOutsideClick()
        triggerRef.current?.focus()
      }
      // Tab is handled natively
    }
    menu.addEventListener('keydown', handleKeyDown)
    return () => menu.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onOutsideClick, contentRef, triggerRef])
}
