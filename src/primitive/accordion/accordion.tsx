import { forwardRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { AccordionContext } from './context'
import { accordionVariants, accordionHeaderVariants } from './helpers'
import {
  AccordionTitle,
  AccordionContent,
  AccordionIcon,
} from './accordion.atoms'
import type { AccordionProps } from './types'

/**
 * Accordion component for Versaur UI
 *
 * A collapsible content container that follows the Compound Pattern with Context.
 * Provides expandable/collapsible sections with smooth animations and proper accessibility.
 *
 * Features:
 * - Compound pattern for flexible composition
 * - Internal state management for expand/collapse
 * - Smooth animations with CSS transitions
 * - Full accessibility support with ARIA attributes
 * - Customizable title and subtitle areas
 * - Integration with existing Versaur components
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Accordion title={<Accordion.Title>Basic Title</Accordion.Title>}>
 *   <p>This is the accordion content</p>
 * </Accordion>
 *
 * // With subtitle and custom icon
 * <Accordion
 *   title={<Accordion.Title>Settings</Accordion.Title>}
 *   subtitle={<Button variant="ghost" size="sm">Clear</Button>}
 *   isDefaultOpen={true}
 * >
 *   <Accordion.Content>
 *     <p>Advanced settings content here</p>
 *   </Accordion.Content>
 * </Accordion>
 * ```
 */
const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    {
      title,
      subtitle,
      isDefaultOpen = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) {
    const [isOpen, setIsOpen] = useState(isDefaultOpen)

    const toggle = () => {
      if (!disabled) {
        setIsOpen(prev => !prev)
      }
    }

    const contextValue = {
      isOpen,
      toggle,
      disabled,
    }

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(accordionVariants({ disabled }), className)}
          {...props}
        >
          <div
            role='button'
            className={accordionHeaderVariants({ disabled, isOpen })}
            onClick={toggle}
            aria-disabled={disabled}
            aria-expanded={isOpen}
          >
            <div className='flex items-center justify-between w-full gap-2'>
              <div className='flex items-center gap-3 flex-grow'>
                <div className='flex-1'>{title}</div>
                {subtitle && <div className='flex-shrink-0'>{subtitle}</div>}
              </div>
              <AccordionIcon as={ChevronDown} />
            </div>
          </div>

          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className='p-4 pt-2'>{children}</div>
          </div>
        </div>
      </AccordionContext.Provider>
    )
  }
)

// Compound component assignment
export const Accordion = Object.assign(AccordionRoot, {
  Title: AccordionTitle,
  Content: AccordionContent,
  Icon: AccordionIcon,
})
