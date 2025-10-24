import type { HTMLAttributes } from 'react'

/**
 * PageLayoutRoot - main container for page layout
 * Manages layout between header and content regions
 * Compound pattern: HeaderRegion, ContentRegion
 */
export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Add horizontal margin (left and right) to the page layout
   * @default false
   */
  hasMargin?: boolean
}

/**
 * PageLayoutHeaderRegion - header region of the page
 */
export interface PageLayoutHeaderRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Background color of the header region
   * - 'white': White background
   * - 'gray': Gray background
   * @default 'white'
   */
  backgroundColor?: 'white' | 'gray'
}

/**
 * PageLayoutContentRegion - content region of the page
 */
export interface PageLayoutContentRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Background color of the content region
   * - 'white': White background
   * - 'gray': Gray background
   * @default 'white'
   */
  backgroundColor?: 'white' | 'gray'
}
