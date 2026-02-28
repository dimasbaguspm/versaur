import { comboboxInputStyles } from "@versaur/core/forms"
import { CheckIcon, ChevronDownIcon } from "@versaur/icons"
import type { CSSProperties } from "react"
import { forwardRef, useEffect, useId, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { FilterChip } from "../../primitive/filter-chip"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import { ComboboxInputDrawer } from "./combobox-input-drawer"
import { ComboboxInputListbox } from "./combobox-input-listbox"
import type {
  ComboboxInputButtonProps,
  ComboboxInputOptionProps,
  ComboboxInputRootProps,
  ComboboxInputSelectionChipsProps,
} from "./combobox-input.types"
import { ComboboxInputContext, useComboboxInputContext } from "./context"
import { useComboboxInputState } from "./hooks"

/**
 * ComboboxInput Root Component
 * Multi-select input with floating popover listbox or bottom drawer
 */
const ComboboxInputRoot = forwardRef<HTMLDivElement, ComboboxInputRootProps>(
  (
    {
      value,
      onChange,
      variant = "popup",
      disabled = false,
      invalid = false,
      label,
      helper,
      error,
      required = false,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId()
    const groupId = rest.id || generatedId
    const buttonId = `${groupId}-button`
    const helperId = helper ? `${groupId}-helper` : undefined
    const errorId = error ? `${groupId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(" ")

    const anchorName = `--combobox-anchor-${groupId.replace(/[^a-z0-9-]/gi, "")}`

    const {
      internalValue,
      setInternalValue,
      isOpen,
      toggleOpen,
      closeListbox,
      optionRegistry,
      registerOption,
      unregisterOption,
    } = useComboboxInputState(value)

    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
      setInternalValue(value)
    }, [value, setInternalValue])

    const handleChange = (newValue: string[]) => {
      if (!disabled) {
        setInternalValue(newValue)
        onChange(newValue)
      }
    }

    const dataAttrs = useDataAttrs({
      invalid: Boolean(error || invalid),
      disabled,
    })

    return (
      <div ref={ref} className={cx(comboboxInputStyles.field, className)} {...dataAttrs} {...rest}>
        {label && (
          <Label required={required} disabled={disabled} htmlFor={buttonId}>
            {label}
          </Label>
        )}

        <ComboboxInputContext.Provider
          value={{
            value: internalValue,
            onChange: handleChange,
            isOpen,
            toggleOpen,
            closeListbox,
            variant,
            anchorName,
            buttonId,
            optionRegistry,
            registerOption,
            unregisterOption,
            disabled,
            searchQuery,
            setSearchQuery,
          }}
        >
          <div className={comboboxInputStyles.root} aria-describedby={describedBy || undefined}>
            {children}
          </div>
        </ComboboxInputContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && internalValue.length === 0 && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    )
  },
)

ComboboxInputRoot.displayName = "ComboboxInput"

/**
 * ComboboxInput.Button - Trigger button
 */
const ComboboxInputButton = forwardRef<HTMLButtonElement, ComboboxInputButtonProps>(
  ({ children, className, iconLeft, iconRight, ...rest }, ref) => {
    const ctx = useComboboxInputContext()
    const isEmpty = ctx.value.length === 0

    const buttonDataAttrs = useDataAttrs({
      open: ctx.isOpen,
      disabled: ctx.disabled,
      "has-left-icon": Boolean(iconLeft),
      "has-right-icon": true,
    })

    const anchorStyle = {
      anchorName: ctx.anchorName,
    } as CSSProperties

    const displayText = children || (isEmpty ? "Select" : `${ctx.value.length} selected`)

    return (
      <button
        ref={ref}
        id={ctx.buttonId}
        type="button"
        className={cx(comboboxInputStyles.button, className)}
        onClick={() => !ctx.disabled && ctx.toggleOpen()}
        disabled={ctx.disabled}
        aria-expanded={ctx.isOpen}
        aria-haspopup="listbox"
        style={anchorStyle}
        {...buttonDataAttrs}
        {...rest}
      >
        {iconLeft && <span className={comboboxInputStyles["left-icon"]}>{iconLeft}</span>}
        <span className={comboboxInputStyles["button-content"]} {...(isEmpty && { "data-placeholder": "" })}>
          {displayText}
        </span>
        {iconRight ? (
          <span className={comboboxInputStyles["right-icon"]}>{iconRight}</span>
        ) : (
          <span className={comboboxInputStyles["right-icon"]} data-chevron>
            <ChevronDownIcon />
          </span>
        )}
      </button>
    )
  },
)

ComboboxInputButton.displayName = "ComboboxInput.Button"

/**
 * ComboboxInput.Option - Individual option item with search filtering
 * Automatically filters based on searchQuery - hidden if doesn't match
 */
const ComboboxInputOption = forwardRef<HTMLLIElement, ComboboxInputOptionProps>(
  ({ value, children, disabled: _disabled = false, className, ...rest }, ref) => {
    const ctx = useComboboxInputContext()
    const isDisabled = ctx.disabled || _disabled
    const isSelected = ctx.value.includes(value)

    // Get label for filtering and display
    const label = typeof children === "string" ? children : String(value)

    // Filter based on search query
    const matchesSearch =
      !ctx.searchQuery ||
      label.toLowerCase().includes(ctx.searchQuery.toLowerCase()) ||
      value.toLowerCase().includes(ctx.searchQuery.toLowerCase())

    useEffect(() => {
      ctx.registerOption(value, label)
      return () => ctx.unregisterOption(value)
    }, [value, label, ctx.registerOption, ctx.unregisterOption])

    const handleClick = () => {
      if (isDisabled) return
      const newValue = isSelected ? ctx.value.filter((v) => v !== value) : [...ctx.value, value]
      ctx.onChange(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleClick()
      }
    }

    const optionDataAttrs = useDataAttrs({ active: isSelected, disabled: isDisabled })

    // Hide option if search query doesn't match
    if (!matchesSearch) {
      return null
    }

    return (
      <li
        ref={ref}
        role="option"
        className={cx(comboboxInputStyles.option, className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-selected={isSelected}
        tabIndex={isDisabled ? -1 : 0}
        {...optionDataAttrs}
        {...rest}
      >
        <span className={comboboxInputStyles["option-check"]}>
          <CheckIcon width="1em" height="1em" />
        </span>
        <span>{children}</span>
      </li>
    )
  },
)

ComboboxInputOption.displayName = "ComboboxInput.Option"

/**
 * ComboboxInput.SelectionChips - Removable chip display using FilterChip
 */
const ComboboxInputSelectionChips = forwardRef<HTMLDivElement, ComboboxInputSelectionChipsProps>(
  ({ className, ...rest }, ref) => {
    const ctx = useComboboxInputContext()

    if (ctx.value.length === 0) return null

    const handleRemoveChip = (val: string) => {
      ctx.onChange(ctx.value.filter((v) => v !== val))
    }

    return (
      <div ref={ref} className={cx(comboboxInputStyles.chips, className)} role="group" {...rest}>
        {ctx.value.map((val) => {
          const label = ctx.optionRegistry.get(val) ?? val
          return (
            <FilterChip
              key={val}
              disabled={ctx.disabled}
              onClick={() => handleRemoveChip(val)}
            >
              {label}
            </FilterChip>
          )
        })}
      </div>
    )
  },
)

ComboboxInputSelectionChips.displayName = "ComboboxInput.SelectionChips"

export const ComboboxInput = Object.assign(ComboboxInputRoot, {
  Button: ComboboxInputButton,
  Listbox: ComboboxInputListbox,
  Drawer: ComboboxInputDrawer,
  Option: ComboboxInputOption,
  SelectionChips: ComboboxInputSelectionChips,
})
