import type { InputHTMLAttributes } from "react"

export interface CurrencyOption {
  code: string
  label: string
}

export interface CurrencyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "onChange"> {
  /**
   * Label text displayed above input
   */
  label?: string

  /**
   * Helper text displayed below input
   */
  helper?: string

  /**
   * Error message displayed below input (replaces helper)
   */
  error?: string

  /**
   * Whether the input is required
   */
  required?: boolean

  /**
   * Whether the input is disabled
   */
  disabled?: boolean

  /**
   * Whether the input is read-only
   */
  readOnly?: boolean

  /**
   * Amount field
   */
  name?: string

  /**
   * The amount value
   */
  amountValue?: string | number

  /**
   * Callback when amount changes
   */
  onAmountChange?: (value: string) => void

  /**
   * Currency field
   */
  currencyValue?: string

  /**
   * Callback when currency changes
   */
  onCurrencyChange?: (code: string) => void

  /**
   * List of available currency codes; defaults to all supported currencies via Intl.supportedValuesOf
   */
  currencies?: string[]

  /**
   * Name attribute for the currency select; defaults to `${name}-currency`
   */
  currencyName?: string
}
