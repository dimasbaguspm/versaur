import { currencyInputStyles } from "@versaur/core/forms"
import { forwardRef, useId, useMemo, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { CurrencyInputProps, CurrencyOption } from "./currency-input.types"

/**
 * Get all supported currencies from Intl API
 */
function getSupportedCurrencies(): CurrencyOption[] {
  try {
    const codes = Intl.supportedValuesOf("currency")
    return codes.map((code) => ({
      code,
      label: code,
    }))
  } catch {
    // Fallback if Intl.supportedValuesOf is unavailable
    return [{ code: "USD", label: "USD" }]
  }
}

/**
 * CurrencyInput component
 * Combined currency selector and amount input in a single bordered field
 */
export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      label,
      helper,
      error,
      required = false,
      disabled = false,
      readOnly = false,
      name,
      amountValue = "",
      onAmountChange,
      currencyValue = "USD",
      onCurrencyChange,
      currencies,
      currencyName,
      id: providedId,
      className,
      ...rest
    },
    ref,
  ) => {
    // Memoize default currencies from Intl API
    const defaultCurrencies = useMemo(() => getSupportedCurrencies(), [])

    const finalCurrencies = useMemo(() => {
      if (!currencies) return defaultCurrencies
      return currencies.map((code) => ({
        code,
        label: code,
      }))
    }, [currencies, defaultCurrencies])

    const [isFocused, setIsFocused] = useState(false)

    // Generate unique IDs for accessibility
    const generatedId = useId()
    const inputId = providedId || generatedId
    const helperId = helper ? `${inputId}-helper` : undefined
    const errorId = error ? `${inputId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(" ")

    // Default currency name to `${name}-currency` if not provided
    const finalCurrencyName = currencyName || (name ? `${name}-currency` : undefined)

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      disabled,
      invalid: Boolean(error),
      readOnly,
      focused: isFocused,
    })

    return (
      <div className={cx(currencyInputStyles.field, className)}>
        {label && (
          <Label htmlFor={inputId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <div className={currencyInputStyles.wrapper} {...dataAttrs}>
          <select
            className={currencyInputStyles["currency-select"]}
            name={finalCurrencyName}
            value={currencyValue}
            onChange={(e) => onCurrencyChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            aria-disabled={disabled ? "true" : undefined}
          >
            {finalCurrencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.label}
              </option>
            ))}
          </select>

          <span className={currencyInputStyles.divider} aria-hidden />

          <input
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            className={currencyInputStyles["amount-input"]}
            name={name}
            value={amountValue}
            onChange={(e) => onAmountChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={error ? "true" : undefined}
            aria-disabled={disabled ? "true" : undefined}
            aria-describedby={describedBy || undefined}
            {...rest}
          />
        </div>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    )
  },
)

CurrencyInput.displayName = "CurrencyInput"
