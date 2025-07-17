import type { HTMLAttributes, ReactNode } from 'react'

/**
 * IconProps defines the props for the Icon component
 * @property color - Color variant based on Versaur color system
 * @property size - Size of the icon (xs, sm, md, lg, xl)
 * @property children - The icon element (usually from lucide-react)
 * Extends HTMLAttributes<HTMLSpanElement> for native span props
 */
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'neutral'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}
