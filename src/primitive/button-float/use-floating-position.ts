import { useEffect, useRef, useState, useCallback } from 'react'
import type { RefCallback, CSSProperties } from 'react'

/**
 * useFloatingPositionSticky
 * Determines the correct positioning and style for a floating element that should always be visible
 * at the bottom right of a scrollable container, even if the container is taller than the viewport.
 *
 * Returns:
 *   - containerRef: attach to the container div
 *   - style: CSSProperties for the button (position, bottom, right, transform)
 *   - positionClass: string for Tailwind/utility classes
 */
export function useFloatingPosition(
  side: 'right' | 'left',
  offset: string = '1rem'
): [RefCallback<HTMLDivElement>, CSSProperties, string] {
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<CSSProperties>({})
  const [positionClass, setPositionClass] = useState(
    'absolute bottom-4 right-4'
  )

  // Core position calculation
  const updatePosition = useCallback(() => {
    const container = nodeRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const isTallerThanViewport = rect.height > window.innerHeight
    let pos: CSSProperties = {}
    let cls = ''
    if (isTallerThanViewport) {
      pos = {
        position: 'absolute',
        bottom: offset,
        zIndex: 50,
        transform: `translateY(${container.scrollTop}px)`,
      }
      cls = `absolute bottom-4 ${side}-4`
    } else {
      pos = {
        position: 'absolute',
        bottom: offset,
        zIndex: 50,
      }
      cls = `absolute bottom-4 ${side}-4`
    }
    setStyle(pos)
    setPositionClass(cls)
  }, [side, offset])

  // Update on mount, scroll, resize
  useEffect(() => {
    updatePosition()
    const container = nodeRef.current
    if (container) {
      container.addEventListener('scroll', updatePosition)
    }
    window.addEventListener('resize', updatePosition)
    return () => {
      if (container) {
        container.removeEventListener('scroll', updatePosition)
      }
      window.removeEventListener('resize', updatePosition)
    }
  }, [updatePosition])

  // Ensure update when side/offset change and node is present
  useEffect(() => {
    if (nodeRef.current) {
      updatePosition()
    }
  }, [side, offset, updatePosition])

  // Callback ref to assign node and update position immediately
  const containerRef = useCallback(
    (node: HTMLDivElement | null) => {
      nodeRef.current = node
      if (node) {
        updatePosition()
      }
    },
    [updatePosition]
  )

  return [containerRef, style, positionClass]
}
