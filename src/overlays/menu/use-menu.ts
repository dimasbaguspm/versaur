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
