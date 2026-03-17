import { comboboxInputStyles } from "@versaur/core/forms"
import type { CSSProperties } from "react"
import { forwardRef, useEffect } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { useComboboxInputPlacement } from "./hooks"
import { useComboboxInputContext } from "./context"
import type { ComboboxInputListboxProps } from "./combobox-input.types"

/**
 * ComboboxInput.Listbox - Popup variant (Popover API + CSS Anchor)
 * Renders options as a floating popover with smart placement
 */
export const ComboboxInputListbox = forwardRef<HTMLUListElement, ComboboxInputListboxProps>(
  ({ search, children, className, ...rest }, ref) => {
    const ctx = useComboboxInputContext()
    const { internalRef, placement } = useComboboxInputPlacement(ctx.isOpen, ctx.variant)

    useEffect(() => {
      const listboxEl = internalRef.current
      if (!listboxEl) return

      const handleToggle = () => {
        if (!listboxEl.matches(":popover-open")) {
          ctx.closeListbox()
        }
      }

      listboxEl.addEventListener("toggle", handleToggle)
      return () => listboxEl.removeEventListener("toggle", handleToggle)
    }, [ctx, internalRef])

    const listboxDataAttrs = useDataAttrs({ placement })

    return (
      <ul
        ref={(el) => {
          internalRef.current = el
          if (typeof ref === "function") ref(el)
          else if (ref) ref.current = el
        }}
        role="listbox"
        aria-multiselectable="true"
        className={cx(comboboxInputStyles.listbox, className)}
        popover="auto"
        {...(listboxDataAttrs as any)}
        style={{
          positionAnchor: ctx.anchorName,
        } as CSSProperties}
        {...rest}
      >
        <div className={comboboxInputStyles["listbox-search"]}>
          <div className={comboboxInputStyles["drawer-input-wrapper"]}>{search}</div>
        </div>
        <div className={comboboxInputStyles["listbox-inner"]}>{children}</div>
      </ul>
    )
  },
)

ComboboxInputListbox.displayName = "ComboboxInput.Listbox"
