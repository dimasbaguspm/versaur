import { useMatchMedia } from './use-match-media'

/**
 * Props for MatchMedia component
 */
interface MatchMediaProps {
  /** CSS media query string to match against */
  query: string
  /** Content to render when query matches */
  children: React.ReactNode
}

/**
 * Component that conditionally renders children based on a media query
 *
 * @example
 * ```tsx
 * <MatchMedia query="(min-width: 1024px)">
 *   <DesktopContent />
 * </MatchMedia>
 *
 * <MatchMedia query="(prefers-color-scheme: dark)">
 *   <DarkModeUI />
 * </MatchMedia>
 * ```
 */
export function MatchMedia({ query, children }: MatchMediaProps) {
  const matches = useMatchMedia(query)
  return matches ? <>{children}</> : null
}
