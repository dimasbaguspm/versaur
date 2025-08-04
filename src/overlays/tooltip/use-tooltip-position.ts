/**
 * useTooltipPosition
 * Determines best tooltip position (bottom/top/left/right) based on available space
 * @param ref - ref to the trigger element
 * @param open - whether tooltip is open
 * @param preferred - preferred position ('auto' or explicit)
 * @returns position: 'top' | 'bottom' | 'left' | 'right'
 */
import { useEffect, useRef, useState, type RefObject } from 'react'
import type { TooltipPosition } from './types'

type TooltipPositionRef = {
  position: TooltipPosition
  ref: RefObject<HTMLDivElement | null>
}

export function useTooltipPositionRef(
  preferred: TooltipPosition = 'auto'
): TooltipPositionRef {
  const ref = useRef<HTMLDivElement | null>(null)

  const [position, setPosition] = useState<TooltipPosition>('bottom')

  useEffect(() => {
    if (!open || preferred !== 'auto' || !ref.current) {
      setPosition(preferred === 'auto' ? 'bottom' : preferred)
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight
    const space = {
      top: rect.top,
      bottom: vh - rect.bottom,
      left: rect.left,
      right: vw - rect.right,
    }
    // Prefer bottom, fallback to top, then right, then left
    if (space.bottom > 64) setPosition('bottom')
    else if (space.top > 64) setPosition('top')
    else if (space.right > 128) setPosition('right')
    else setPosition('left')
  }, [preferred, ref])

  return { position, ref }
}
