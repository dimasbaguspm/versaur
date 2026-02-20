import { overlayPartsStyles } from "@versaur/core/utils"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import type { OverlayBodyProps, OverlayFooterProps, OverlayHeaderProps, OverlayTitleProps } from "./overlay-parts.types"

export const OverlayHeader = forwardRef<HTMLDivElement, OverlayHeaderProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(overlayPartsStyles.header, className)} {...props}>
    {children}
  </div>
))
OverlayHeader.displayName = "OverlayHeader"

export const OverlayTitle = forwardRef<HTMLHeadingElement, OverlayTitleProps>(
  ({ children, as: Component = "h2", className, ...props }, ref) => (
    <Component ref={ref} className={cx(overlayPartsStyles.title, className)} {...props}>
      {children}
    </Component>
  ),
)
OverlayTitle.displayName = "OverlayTitle"

export const OverlayBody = forwardRef<HTMLDivElement, OverlayBodyProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(overlayPartsStyles.body, className)} {...props}>
    {children}
  </div>
))
OverlayBody.displayName = "OverlayBody"

export const OverlayFooter = forwardRef<HTMLDivElement, OverlayFooterProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cx(overlayPartsStyles.footer, className)} {...props}>
    {children}
  </div>
))
OverlayFooter.displayName = "OverlayFooter"
