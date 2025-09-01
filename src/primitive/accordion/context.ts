import { createContext, useContext } from 'react'
import type { AccordionContextValue } from './types'

/**
 * Context for managing accordion state
 */
export const AccordionContext = createContext<AccordionContextValue | null>(
  null
)

/**
 * Hook to access accordion context
 * @throws Error if used outside of Accordion component
 */
export const useAccordionContext = (): AccordionContextValue => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error(
      'Accordion compound components must be used within Accordion'
    )
  }
  return context
}
