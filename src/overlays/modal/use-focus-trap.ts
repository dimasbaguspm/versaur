import { useEffect } from 'react'

/**
 * Focuses the first focusable element inside the given ref when active is true
 * @param ref - The ref to the container element
 * @param active - Whether to activate the focus trap
 */
export function useFocusTrap(
  ref: React.RefObject<HTMLElement | null>,
  active: boolean
) {
  useEffect(() => {
    if (active && ref.current) {
      const focusable = ref.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length) focusable[0].focus()
    }
  }, [active, ref])
}
