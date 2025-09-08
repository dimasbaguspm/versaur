import type { HTMLAttributes } from 'react'

/**
 * Props for the Brand component
 */
export interface BrandProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The app name to display (predefined, default: 'spenicle')
   */
  name: 'spenicle' | 'hub'
  /**
   * The size of the brand icon and text
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'square' | 'rounded' | 'circle'
}

export type BrandAtomProps = Pick<BrandProps, 'shape' | 'size' | 'name'>
