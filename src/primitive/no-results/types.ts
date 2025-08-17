import type { ReactNode, HTMLAttributes, ComponentType } from 'react'

/**
 * NoResultsProps defines the props for the NoResults component
 * @property icon - Icon component to display (typically from lucide-react)
 * @property title - Main heading text for the no results state
 * @property subtitle - Secondary descriptive text
 * @property action - Optional action element (typically a Button)
 */
export interface NoResultsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Icon to display at the top of the no results state
   * Should be a Lucide icon component
   */
  icon: ComponentType

  /**
   * Main heading text that describes the empty state
   */
  title: string

  /**
   * Secondary descriptive text that provides more context
   * Can be a string or ReactNode for more complex content
   */
  subtitle?: string | ReactNode

  /**
   * Optional action element to render below the content
   * Typically a Button component for user interaction
   */
  action?: ReactNode

  /*
   * Flag to indicate if the component should have a gray background
   * This can be used to visually differentiate the no results state
   * from other content areas
   * @default false
   */
  hasGrayBackground?: boolean
}
