import { useLayoutEffect, useState } from 'react'

/**
 * useTabIndicator
 * Calculates position and width for the animated underline indicator
 * Also scrolls active tab into view for better UX
 *
 * @param value - Currently active tab value
 * @param containerRef - Reference to the ul[role="tablist"] element
 * @returns Object with left offset and width for the indicator
 */
export function useTabIndicator(
  value: string,
  containerRef: React.RefObject<HTMLUListElement | null>
) {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  })

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Find the active tab trigger (anchor element)
    const activeLink = container.querySelector<HTMLAnchorElement>(
      `a#tabs-trigger-${value}`
    )

    if (!activeLink) return

    // Get the list item (parent of anchor)
    const listItem = activeLink.parentElement as HTMLLIElement | null
    if (!listItem) return

    // Calculate indicator position accounting for scroll
    const updateIndicator = () => {
      // The indicator is positioned absolute relative to the wrapper div
      // We need to calculate position based on:
      // 1. The list item's position in the flow (offsetLeft)
      // 2. Minus the container's scroll position (scrollLeft)
      // This keeps the indicator aligned with the visible tab
      const left = listItem.offsetLeft - container.scrollLeft
      const width = listItem.offsetWidth

      setIndicatorStyle({ left, width })
    }

    // Initial position update
    updateIndicator()

    // Listen to scroll events to keep indicator in sync
    const handleScroll = () => {
      updateIndicator()
    }

    container.addEventListener('scroll', handleScroll, { passive: true })

    // Scroll active tab into view after a brief moment to allow initial render
    const scrollTimer = requestAnimationFrame(() => {
      activeLink.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    })

    return () => {
      cancelAnimationFrame(scrollTimer)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [value, containerRef])

  return indicatorStyle
}
