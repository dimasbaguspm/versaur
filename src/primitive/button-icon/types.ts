import type { ButtonHTMLAttributes } from 'react'
import type { IconProps } from '@/primitive/icon'

/**
 * ButtonIconProps defines the props for the ButtonIcon component
 * @property as - Icon component to render inside the button (e.g., from lucide-react)
 * @property variant - Visual style variant (primary, ghost, outline, destructive)
 * @property shape - Shape type of the button (rounded, square, circle)
 * @property size - Size of the button (sm, md, lg)
 * @property disabled - Whether the button is disabled
 * @property busy - Whether the button is in a loading/busy state
 * @property aria-label - Accessible label for screen readers (required for icon-only buttons)
 */
export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color'>,
    Pick<IconProps, 'as'> {
  /**
   * Icon component to render inside the button (e.g., from lucide-react)
   */
  as: IconProps['as']

  /**
   * Visual style variant
   * - primary: Main action button with coral background (default)
   * - ghost: Subtle, minimal visual weight for secondary actions
   * - outline: Bordered lightweight alternative for secondary actions
   * - destructive: For dangerous or irreversible actions (delete, remove, etc.)
   */
  variant?: 'primary' | 'ghost' | 'outline' | 'destructive'

  /**
   * Size of the button and icon
   * - sm: 28px height/width, compact for space-constrained interfaces
   * - md: 36px height/width, standard for most use cases (default)
   * - lg: 40px height/width, prominent for primary actions
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Shape type of the button
   * - rounded: Standard rounded corners (default)
   * - square: Perfect square with minimal rounded corners
   * - circle: Circular shape
   */
  shape?: 'rounded' | 'square' | 'circle'

  /**
   * Whether the button is disabled
   * When true, the button becomes non-interactive and visually dimmed
   */
  disabled?: boolean

  /**
   * Whether the button is in a loading/busy state
   * Can be used to show loading indicators or disable interaction during async operations
   */
  busy?: boolean

  /**
   * Accessible label for screen readers
   * Required for icon-only buttons to ensure accessibility
   */
  'aria-label': string
}
