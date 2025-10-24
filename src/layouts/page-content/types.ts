/**
 * Props for the PageContent component
 */
export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size determines the max-width and padding
   * - 'fluid': No padding, full viewport width
   * - 'wide': Container for desktop screens (centered)
   * - 'narrow': Container for mobile screens (centered)
   */
  size?: 'fluid' | 'wide' | 'narrow'
  /**
   * Template defines the column layout structure
   * - 'single-column': Single centered column
   * - 'two-column': Two equal columns
   * - 'two-column-asymmetric-left': Two columns with left column wider
   * - 'two-column-asymmetric-right': Two columns with right column wider
   */
  template?:
    | 'single-column'
    | 'two-column'
    | 'two-column-asymmetric-left'
    | 'two-column-asymmetric-right'
  /**
   * Content to render inside the layout
   */
  children: React.ReactNode
  /**
   * Additional class names to apply to the root element
   */
  className?: string
}
