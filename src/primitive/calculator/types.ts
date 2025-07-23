import type { ButtonHTMLAttributes } from 'react'

/**
 * Props for Calculator component
 */
export interface CalculatorProps {
  /**
   * Initial value to display in the calculator input
   */
  initialValue?: string | number
  /**
   * Callback when the value changes (on equals or input)
   */
  onChange?: (value: string) => void
  /**
   * If true, disables all calculator input
   */
  disabled?: boolean
  /**
   * Optional className for the calculator root
   */
  className?: string
  /**
   * Optional aria-label for accessibility
   */
  'aria-label'?: string
}

export interface CalculatorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'action' | 'operator' | 'danger'
}
