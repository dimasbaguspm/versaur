import { accordionStyles } from "@versaur/core/blocks"
import { ChevronDownIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { AccordionRootProps, AccordionSummaryProps } from "./accordion.types"

/**
 * Private context for managing open state
 */
interface AccordionContextType {
  isOpen: boolean
  toggle: () => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion.Summary must be used within an Accordion component")
  }
  return context
}

/**
 * Accordion Root Component
 *
 * A controlled/uncontrolled accordion using native <details> and <summary> elements.
 * Supports optional `open` prop for controlled mode.
 *
 * @example
 * ```tsx
 * <Accordion summary={<Accordion.Summary>Click to expand</Accordion.Summary>} defaultOpen>
 *   Content here
 * </Accordion>
 * ```
 */
function AccordionRootInternal(
  { summary, open: controlledOpen, onOpenChange, children, className, ...rest }: AccordionRootProps,
  ref: any,
) {
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? false)
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // Subscribe to controlled open prop changes
  useEffect(() => {
    if (controlledOpen !== undefined) {
      setInternalOpen(controlledOpen)
    }
  }, [controlledOpen])

  // Sync internal state to native details element
  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = internalOpen
    }
  }, [internalOpen])

  const toggle = () => {
    const newOpen = !internalOpen
    setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  const dataAttrs = useDataAttrs({ open: internalOpen ? "" : undefined })

  return (
    <AccordionContext.Provider value={{ isOpen: internalOpen, toggle }}>
      <details
        ref={ref || detailsRef}
        className={cx(accordionStyles.item, className)}
        open={internalOpen}
        {...dataAttrs}
        {...rest}
      >
        {summary}
        <div className={accordionStyles.content}>{children}</div>
      </details>
    </AccordionContext.Provider>
  )
}

export const AccordionRoot = forwardRef<HTMLDetailsElement, AccordionRootProps>(AccordionRootInternal)
AccordionRoot.displayName = "Accordion"

/**
 * Accordion Summary - The clickable trigger for the accordion
 *
 * Wraps the native <summary> element with a chevron icon and click prevention.
 * Supports right-aligned content and text line clamping.
 */
export const AccordionSummary = forwardRef<HTMLElement, AccordionSummaryProps>(
  ({ children, right, clamp = 2, className, ...rest }, ref) => {
    const { isOpen, toggle } = useAccordionContext()
    const rightRef = useRef<HTMLSpanElement>(null)

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      // Don't toggle if click originated from the right section
      if (rightRef.current && rightRef.current.contains(e.target as Node)) {
        return
      }
      toggle()
    }

    return (
      <summary
        ref={ref}
        className={cx(accordionStyles.trigger, className)}
        onClick={handleClick}
        role="button"
        aria-expanded={isOpen}
        {...rest}
      >
        <span className={accordionStyles.label} style={{ "--_clamp": clamp } as React.CSSProperties}>
          {children}
        </span>
        {right && <span ref={rightRef} className={accordionStyles.right}>{right}</span>}
        <span className={accordionStyles.chevron}>
          <ChevronDownIcon width={20} height={20} />
        </span>
      </summary>
    )
  },
)
AccordionSummary.displayName = "Accordion.Summary"

/**
 * Accordion Component - Compound component with Summary sub-component
 */
export interface AccordionComponent extends React.ForwardRefExoticComponent<
  AccordionRootProps & React.RefAttributes<HTMLDetailsElement>
> {
  Summary: typeof AccordionSummary
}

export const Accordion = Object.assign(AccordionRoot, {
  Summary: AccordionSummary,
}) as AccordionComponent
