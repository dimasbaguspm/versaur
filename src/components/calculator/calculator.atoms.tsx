import { forwardRef } from 'react'
import { calculatorButtonVariants } from './helpers'
import type { CalculatorButtonProps } from './types'
import { cn } from '@/utils'

export const CalculatorButton = forwardRef<
  HTMLButtonElement,
  CalculatorButtonProps
>(({ variant = 'default', className, ...props }, ref) => (
  <button
    ref={ref}
    type='button'
    className={cn(
      calculatorButtonVariants({ variant, disabled: props.disabled }),
      className
    )}
    {...props}
  />
))
