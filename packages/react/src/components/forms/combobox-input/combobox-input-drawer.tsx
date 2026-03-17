import { comboboxInputStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import { Drawer } from "../../blocks/drawer"
import type { ComboboxInputListboxProps } from "./combobox-input.types"
import { useComboboxInputContext } from "./context"

/**
 * ComboboxInput.Drawer - Right drawer variant for mobile-friendly selection
 * Options are filtered in real-time based on search query
 */
export const ComboboxInputDrawer = forwardRef<HTMLUListElement, ComboboxInputListboxProps>(
  ({ search, children, className, ...rest }, ref) => {
    const ctx = useComboboxInputContext()

    return (
      <Drawer open={ctx.isOpen} onOpenChange={(open) => !open && ctx.closeListbox()} placement="right">
        <Drawer.Body>
          <div className={comboboxInputStyles["drawer-container"]}>
            {/* Search input in drawer */}
            <div className={comboboxInputStyles["drawer-input-wrapper"]}>{search}</div>
            {/* Options list - drawer variant styling */}
            <ul
              ref={ref}
              role="listbox"
              aria-multiselectable="true"
              className={cx(comboboxInputStyles["drawer-listbox"], className)}
              {...rest}
            >
              {children}
            </ul>
          </div>
        </Drawer.Body>
      </Drawer>
    )
  },
)

ComboboxInputDrawer.displayName = "ComboboxInput.Drawer"
