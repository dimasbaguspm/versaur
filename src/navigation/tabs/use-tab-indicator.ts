import React, { useLayoutEffect, useState } from 'react'

/**
 * useTabIndicatorAndFocus
 * Handles indicator position and focusing the active tab in a tablist
 * @param value - active tab value
 * @param containerRef - ref to the tablist container
 * @param children - tablist children (for effect dependency)
 * @returns { left: number, width: number }
 */
export function useTabIndicatorAndFocus(
  value: string,
  containerRef: React.RefObject<HTMLDivElement | null>,
  children: React.ReactNode
) {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  })

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const activeBtn = containerRef.current.querySelector<HTMLButtonElement>(
      `#tabs-trigger-${value}`
    )
    if (activeBtn) {
      const { offsetLeft, offsetWidth } = activeBtn
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [value, children, containerRef])

  return indicatorStyle
}
