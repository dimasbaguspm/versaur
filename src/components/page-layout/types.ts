/**
 * Props for the PageLayout component
 */
export interface PageLayoutProps {
  /**
   * The layout type to use for breakpoint consistency
   * - 'desktop': For large screens (default)
   * - 'tablet': For medium screens
   * - 'mobile': For small screens
   */
  type?: 'desktop' | 'tablet' | 'mobile'
  /**
   * Content to render inside the layout
   */
  children: React.ReactNode
  /**
   * Additional class names to apply to the root element
   */
  className?: string
}
