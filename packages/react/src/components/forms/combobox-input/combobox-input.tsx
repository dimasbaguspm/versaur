import { comboboxInputStyles } from "@versaur/core/forms"
import { CheckIcon, ChevronDownIcon } from "@versaur/icons"
import type { CSSProperties } from "react"
import { forwardRef, useEffect, useId, useMemo } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { FilterChip } from "../../primitive/filter-chip"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type {
  ComboboxInputButtonProps,
  ComboboxInputContainerProps,
  ComboboxInputSearchProps,
  ComboboxInputOptionProps,
  ComboboxInputRootProps,
  ComboboxInputSelectionChipsProps,
} from "./combobox-input.types"
import { ComboboxInputContext, useComboboxInputContext } from "./context"
import { useComboboxInputState, useComboboxInputPlacement } from "./hooks"
import { Drawer } from "../../blocks/drawer"

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
      multiple = false,
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

    // Normalize external value to internal string[] representation
    // Use useMemo to prevent infinite loop from new array refs on every render
    const normalizedValue = useMemo(() => {
      if (multiple) {
        return Array.isArray(value) ? (value as string[]) : []
      }
      return value === null ? [] : [value as string]
    }, [value, multiple])

    const {
      internalValue,
      setInternalValue,
      isOpen,
      toggleOpen,
      closeListbox,
      optionRegistry,
      registerOption,
      unregisterOption,
    } = useComboboxInputState(normalizedValue)

    useEffect(() => {
      setInternalValue(normalizedValue)
    }, [normalizedValue, setInternalValue])

    const handleChange = (newValue: string[]) => {
      if (!disabled) {
        setInternalValue(newValue)
        if (multiple) {
          ;(onChange as (v: string[]) => void)(newValue)
        } else {
          ;(onChange as (v: string | null) => void)(newValue[0] ?? null)
        }
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
            multiple,
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

    const displayText =
      children ||
      // oxlint-disable-next-line no-nested-ternary
      (isEmpty
        ? "Select"
        : ctx.multiple
          ? `${ctx.value.length} selected`
          : (ctx.optionRegistry.get(ctx.value[0]) ?? ctx.value[0]))

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

    // Get label for display
    const label = typeof children === "string" ? children : String(value)

    useEffect(() => {
      ctx.registerOption(value, label)
      return () => ctx.unregisterOption(value)
    }, [value, label, ctx.registerOption, ctx.unregisterOption])

    const handleClick = () => {
      if (isDisabled) return
      if (ctx.multiple) {
        const newValue = isSelected ? ctx.value.filter((v) => v !== value) : [...ctx.value, value]
        ctx.onChange(newValue)
      } else {
        ctx.onChange(isSelected ? [] : [value])
        ctx.closeListbox()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === " ") {
        e.preventDefault()
        handleClick()
      }
    }

    const optionDataAttrs = useDataAttrs({ active: isSelected, disabled: isDisabled })

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
            <FilterChip key={val} disabled={ctx.disabled} onClick={() => handleRemoveChip(val)}>
              {label}
            </FilterChip>
          )
        })}
      </div>
    )
  },
)

ComboboxInputSelectionChips.displayName = "ComboboxInput.SelectionChips"

/**
 * ComboboxInput.Search - Controlled search input for filtering options
 * Consumer owns filtering logic - this is a pure pass-through controlled input
 */
const ComboboxInputSearch = forwardRef<HTMLInputElement, ComboboxInputSearchProps>(
  ({ name, value, onChange, placeholder = "Search options...", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        name={name}
        className={comboboxInputStyles["drawer-input"]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search options"
        {...rest}
      />
    )
  },
)

ComboboxInputSearch.displayName = "ComboboxInput.Search"

/**
 * ComboboxInput.Container - Renders arbitrary content with integrated search and variant handling
 * Replaces Listbox for non-list content like "No results", "Start typing", custom components
 */
const ComboboxInputContainer = ({ search, children, variant = "list" }: ComboboxInputContainerProps) => {
  const ctx = useComboboxInputContext()
  const { internalRef, placement } = useComboboxInputPlacement(ctx.isOpen, ctx.variant)

  const handleToggle = (e: Event) => {
    const el = e.target as HTMLElement
    if (el && !el.matches(":popover-open")) {
      ctx.closeListbox()
    }
  }

  // Drawer variant - uses Drawer component internally
  if (ctx.variant === "drawer" || variant === "drawer") {
    return (
      <Drawer open={ctx.isOpen} onOpenChange={(open: boolean) => !open && ctx.closeListbox()} placement="right">
        <Drawer.Body>
          <div className={comboboxInputStyles["drawer-container"]}>
            {search && <div className={comboboxInputStyles["drawer-input-wrapper"]}>{search}</div>}
            {children}
          </div>
        </Drawer.Body>
      </Drawer>
    )
  }

  // Plain wrapper variant - no popover/drawer styling, but still renders search
  if (variant === "none") {
    return (
      <>
        {search && <div className={comboboxInputStyles["drawer-input-wrapper"]}>{search}</div>}
        {children}
      </>
    )
  }

  // List variant - popover with optional search
  const divProps = {
    ref: internalRef as React.Ref<HTMLDivElement>,
    className: comboboxInputStyles.listbox,
    popover: "auto" as any,
    "data-placement": placement,
    style: { positionAnchor: ctx.anchorName } as CSSProperties,
    onToggle: handleToggle,
  }

  return (
    <div {...divProps}>
      {search && <div className={comboboxInputStyles["listbox-search"]}>
        <div className={comboboxInputStyles["drawer-input-wrapper"]}>{search}</div>
      </div>}
      {children}
    </div>
  )
}

ComboboxInputContainer.displayName = "ComboboxInput.Container"

export const ComboboxInput = Object.assign(ComboboxInputRoot, {
  Button: ComboboxInputButton,
  Option: ComboboxInputOption,
  SelectionChips: ComboboxInputSelectionChips,
  Search: ComboboxInputSearch,
  Container: ComboboxInputContainer,
})
