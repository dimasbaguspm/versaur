import React from 'react'
import type { SelectOptionProps, SelectOptionGroupProps } from './types'

/**
 * SelectOption component - an atom for SelectInput
 *
 * Wraps native HTML option element with proper typing
 * Part of the SelectInput compound pattern
 */
export const SelectOption = React.forwardRef<
  HTMLOptionElement,
  SelectOptionProps
>(({ value, children, ...props }, ref) => {
  return (
    <option ref={ref} value={value} {...props}>
      {children}
    </option>
  )
})

SelectOption.displayName = 'SelectOption'

/**
 * SelectOptionGroup component - an atom for SelectInput
 *
 * Wraps native HTML optgroup element with proper typing
 * Part of the SelectInput compound pattern
 */
export const SelectOptionGroup = React.forwardRef<
  HTMLOptGroupElement,
  SelectOptionGroupProps
>(({ label, children, ...props }, ref) => {
  return (
    <optgroup ref={ref} label={label} {...props}>
      {children}
    </optgroup>
  )
})

SelectOptionGroup.displayName = 'SelectOptionGroup'
