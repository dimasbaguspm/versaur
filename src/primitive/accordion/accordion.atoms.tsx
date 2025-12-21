import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { Heading } from '@/primitive/heading'
import { Icon } from '@/primitive/icon'
import { useAccordionContext } from './context'
import {
  accordionContentVariants,
  accordionContentInnerVariants,
  accordionIconVariants,
} from './helpers'
import type { AccordionTitleProps, AccordionContentProps } from './types'

/**
 * Accordion Title sub-component
 * Renders the title content within the accordion header
 */
export const AccordionTitle = forwardRef<
  HTMLHeadingElement,
  AccordionTitleProps
>(function AccordionTitle({ className, children, ...props }, ref) {
  return (
    <Heading
      ref={ref}
      as='h6'
      className={cn('font-medium', className)}
      {...props}
      color='black'
    >
      {children}
    </Heading>
  )
})

/**
 * Accordion Content sub-component
 * Renders the expandable content area when accordion is open
 */
export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(function AccordionContent({ className, children, ...props }, ref) {
  const { isOpen } = useAccordionContext()

  return (
    <div
      ref={ref}
      className={cn(accordionContentVariants({ isOpen }), className)}
      {...props}
    >
      <div className={accordionContentInnerVariants()}>{children}</div>
    </div>
  )
})

/**
 * Accordion Icon sub-component
 * Renders the expand/collapse icon with rotation animation
 */
export const AccordionIcon = forwardRef<
  SVGSVGElement,
  { as: React.ComponentType<{ className?: string }> }
>(function AccordionIcon({ as: IconComponent, ...props }, ref) {
  const { isOpen } = useAccordionContext()

  return (
    <Icon
      ref={ref}
      as={IconComponent}
      color={'ghost' as const}
      size={'sm' as const}
      className={accordionIconVariants({ isOpen })}
      {...props}
    />
  )
})
