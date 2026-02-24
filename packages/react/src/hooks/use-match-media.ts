import { useEffect, useState } from "react"

/**
 * Base hook for evaluating media queries
 * Internal use only - use breakpoint-specific hooks instead
 *
 * @param mediaQuery - CSS media query string (e.g., "(min-width: 640px)")
 * @returns true if media query matches, false otherwise
 *
 * @internal
 */
export function useMatchMedia(mediaQuery: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial value
    const mediaQueryList = window.matchMedia(mediaQuery)
    setMatches(mediaQueryList.matches)

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mediaQueryList.addEventListener("change", handleChange)

    return () => {
      mediaQueryList.removeEventListener("change", handleChange)
    }
  }, [mediaQuery])

  return matches
}
