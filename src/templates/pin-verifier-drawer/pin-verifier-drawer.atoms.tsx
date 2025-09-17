import React from 'react'
import { cn } from '@/utils/cn'
import {
  keypadButtonVariants,
  keypadGridVariants,
  getKeypadNumbers,
} from './helpers'
import type { NumericKeypadProps } from './types'

/**
 * Individual keypad button component
 */
const KeypadButton: React.FC<{
  value: string | null
  onPress: () => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  'aria-label'?: string
}> = ({ value, onPress, disabled, size = 'md', 'aria-label': ariaLabel }) => {
  if (value === null) {
    // Empty space in the grid
    return <div />
  }

  const isDelete = value === 'delete'
  const displayValue = isDelete ? '⌫' : value

  return (
    <button
      type='button'
      className={cn(
        keypadButtonVariants({
          variant: isDelete ? 'delete' : 'default',
          size,
        })
      )}
      onClick={onPress}
      disabled={disabled}
      aria-label={ariaLabel || (isDelete ? 'Delete' : `Digit ${value}`)}
    >
      {displayValue}
    </button>
  )
}

/**
 * NumericKeypad - A 3x4 grid of numbers (1-9, 0) with delete button
 * Provides touch-friendly input for PIN entry in drawer mode
 */
export const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onNumberPress,
  onDelete,
  disabled = false,
  size = 'md',
}) => {
  const keypadNumbers = getKeypadNumbers()

  const handleKeyPress = (value: string | null) => {
    if (disabled || value === null) return

    if (value === 'delete') {
      onDelete()
    } else {
      onNumberPress(value)
    }
  }

  return (
    <div className={cn(keypadGridVariants())}>
      {keypadNumbers.map((number, index) => (
        <KeypadButton
          key={index}
          value={number}
          size={size}
          onPress={() => handleKeyPress(number)}
          disabled={disabled}
        />
      ))}
    </div>
  )
}
