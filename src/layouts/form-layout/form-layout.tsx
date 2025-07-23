import { cn } from '@/utils/cn'
import { formLayoutRootVariants, formLayoutColumnVariants } from './helpers'
import type { FormLayoutProps, FormLayoutColumnProps } from './types'
import { forwardRef } from 'react'
import type { VariantProps } from '@/utils/variants'

/**
 * FormLayout provides a 12-column grid for form layouts
 *
 * @example
 * <FormLayout>
 *   <FormLayout.Column span={6}><input /></FormLayout.Column>
 *   <FormLayout.Column span={6}><input /></FormLayout.Column>
 * </FormLayout>
 */
const FormLayoutRoot = forwardRef<HTMLDivElement, FormLayoutProps>(
  function FormLayout({ className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(formLayoutRootVariants(), className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

/**
 * FormLayout.Column is a grid column (span 1-12, default 4)
 */
const FormLayoutColumn = forwardRef<HTMLDivElement, FormLayoutColumnProps>(
  function FormLayoutColumn({ span = 4, className, children, ...rest }, ref) {
    const safeSpan = Math.min(12, Math.max(1, span))

    return (
      <div
        ref={ref}
        className={cn(
          formLayoutColumnVariants({ span: `${safeSpan}` } as VariantProps<
            typeof formLayoutColumnVariants
          >),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

export const FormLayout = Object.assign(FormLayoutRoot, {
  Column: FormLayoutColumn,
})
