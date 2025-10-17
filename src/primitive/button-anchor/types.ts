import type { AnchorHTMLAttributes } from 'react'

/**
 * ButtonAnchorProps defines the props for the ButtonAnchor component
 * @property variant - Visual style variant (primary, ghost, outline)
 * @property size - Size of the anchor button (sm, md, lg)
 * @property disabled - Whether the anchor is disabled (prevents navigation and applies disabled styles)
 * @property href - Required URL that the anchor links to
 */
export interface ButtonAnchorProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * Visual style variant
   * - primary: Main action button with coral background (default)
   * - ghost: Subtle, minimal visual weight for secondary actions
   * - outline: Bordered lightweight alternative for secondary actions
   */
  variant?: 'primary' | 'ghost' | 'outline'
  /**
   * Size of the anchor button
   * - sm: 28px height, compact for space-constrained interfaces
   * - md: 36px height, standard for most use cases (default)
   * - lg: 40px height, prominent for primary actions
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the anchor is disabled
   * When true, the anchor becomes non-interactive and visually dimmed
   * Prevents navigation by removing href and adding aria-disabled
   */
  disabled?: boolean
  /**
   * URL the anchor links to (required)
   * When disabled, this href will be temporarily removed but preserved for when enabled
   */
  href: string
}
