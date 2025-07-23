import { forwardRef } from 'react'
import { CalculatorButton } from './calculator.atoms'
import { calculatorRootVariants } from './helpers'
import type { CalculatorProps } from './types'
import { cn } from '@/utils/cn'
import { ButtonIcon } from '@/primitive/button-icon'
import { X as BackspaceIcon } from 'lucide-react'
import { useCalculator } from './use-calculator'

// Standard calculator layout (no C or ⌫ in the first row)
const BUTTONS = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
]

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(
  (
    {
      initialValue = '',
      onChange,
      disabled,
      className,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const { input, inputRef, handleButton, handleInput } = useCalculator({
      initialValue,
      disabled,
      onChange,
    })

    return (
      <div
        ref={ref}
        className={cn(calculatorRootVariants({ disabled }), className)}
        aria-label={ariaLabel || 'Calculator'}
        role='region'
      >
        <input
          ref={inputRef}
          className='w-full mb-3 px-3 py-2 rounded border border-[var(--color-neutral)] bg-[var(--color-neutral-soft)] text-right text-xl font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]'
          value={input}
          onChange={handleInput}
          disabled={disabled}
          inputMode='decimal'
          aria-label='Calculator input'
        />
        <div className='flex flex-col gap-1 mb-3'>
          {BUTTONS.map((row, i) => (
            <div key={i} className='flex w-full'>
              {row.map(btn => {
                if (btn === '⌫') {
                  return (
                    <ButtonIcon
                      key='backspace'
                      as={BackspaceIcon}
                      variant='danger-ghost'
                      aria-label='Backspace'
                      size='md'
                      onClick={() => handleButton('⌫')}
                      disabled={disabled}
                    />
                  )
                }
                return (
                  <CalculatorButton
                    key={btn}
                    variant={
                      btn === '='
                        ? 'action'
                        : btn === 'C'
                          ? 'danger'
                          : ['/', '*', '-', '+', '/'].includes(btn)
                            ? 'operator'
                            : 'default'
                    }
                    onClick={() => handleButton(btn)}
                    disabled={disabled}
                    aria-label={btn}
                  >
                    {btn}
                  </CalculatorButton>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }
)
Calculator.displayName = 'Calculator'
