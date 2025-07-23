import { useEffect } from 'react'

/**
 * Calls handler when Escape key is pressed and active is true
 * @param active - Whether to listen for Escape key
 * @param handler - Function to call on Escape
 */
export function useEscapeClose(active: boolean, handler: () => void) {
  useEffect(() => {
    if (!active) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, handler])
}
