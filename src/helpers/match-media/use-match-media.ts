import { useEffect, useState } from 'react'

/**
 * Base hook to detect if a media query matches
 * Uses the native matchMedia API for optimal performance
 *
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 *
 * @example
 * ```tsx
 * const isMobile = useMatchMedia(BREAKPOINT_MOBILE)
 * const isDesktop = useMatchMedia(BREAKPOINT_DESKTOP)
 * const prefersDark = useMatchMedia('(prefers-color-scheme: dark)')
 * ```
 */
export function useMatchMedia(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Modern browsers support addEventListener on MediaQueryList
    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}
