import type { ReactNode } from 'react'

/**
 * AccordionProps defines the props for the Accordion component
 * @property title - Title content to display in the accordion header
 * @property subtitle - Optional subtitle content (e.g., actions, secondary info)
 * @property isDefaultOpen - Whether the accordion is open by default
 * @property disabled - Whether the accordion is disabled
 * @property children - Content to show when accordion is expanded
 * Extends HTMLAttributes<HTMLDivElement> for native div props
 */
export type AccordionProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> & {
  /**
   * Title content to display in the accordion header
   */
  title: ReactNode
  /**
   * Optional subtitle content (e.g., actions, secondary info)
   */
  subtitle?: ReactNode
  /**
   * Whether the accordion is open by default
   */
  isDefaultOpen?: boolean
  /**
   * Whether the accordion is disabled
   */
  disabled?: boolean
  /**
   * Content to show when accordion is expanded
   */
  children?: ReactNode
}

/**
 * AccordionTitleProps defines the props for the Accordion.Title component
 * @property children - Title content
 * Extends HTMLAttributes<HTMLHeadingElement> for native heading props
 */
export type AccordionTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /**
   * Title content
   */
  children: ReactNode
}

/**
 * AccordionContentProps defines the props for the Accordion.Content component
 * @property children - Content to display when expanded
 * Extends HTMLAttributes<HTMLDivElement> for native div props
 */
export type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Content to display when expanded
   */
  children: ReactNode
}

/**
 * AccordionContextValue defines the context value for Accordion state management
 */
export type AccordionContextValue = {
  /**
   * Whether the accordion is currently open
   */
  isOpen: boolean
  /**
   * Function to toggle the accordion state
   */
  toggle: () => void
  /**
   * Whether the accordion is disabled
   */
  disabled: boolean
}
