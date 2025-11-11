import type { HTMLAttributes } from 'react'

/**
 * Props for the FormattedText component
 */
export interface FormattedTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The HTML content to display (should be sanitized if from user input)
   */
  content: string
  /**
   * Whether to allow the content to be scrollable
   * @default false
   */
  scrollable?: boolean
  /**
   * Maximum height for scrollable content (in rem units)
   */
  maxHeight?: number
}
