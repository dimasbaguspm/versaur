import { forwardRef } from "react";
import { overlayPartsStyles } from "@versaur/core";
import type {
  OverlayHeaderProps,
  OverlayTitleProps,
  OverlayBodyProps,
  OverlayFooterProps,
} from "./overlay-parts.types";

export const OverlayHeader = forwardRef<HTMLDivElement, OverlayHeaderProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} className={overlayPartsStyles.header} {...props}>
      {children}
    </div>
  ),
);
OverlayHeader.displayName = "OverlayHeader";

export const OverlayTitle = forwardRef<HTMLHeadingElement, OverlayTitleProps>(
  ({ children, as: Component = "h2", ...props }, ref) => (
    <Component ref={ref} className={overlayPartsStyles.title} {...props}>
      {children}
    </Component>
  ),
);
OverlayTitle.displayName = "OverlayTitle";

export const OverlayBody = forwardRef<HTMLDivElement, OverlayBodyProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} className={overlayPartsStyles.body} {...props}>
      {children}
    </div>
  ),
);
OverlayBody.displayName = "OverlayBody";

export const OverlayFooter = forwardRef<HTMLDivElement, OverlayFooterProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} className={overlayPartsStyles.footer} {...props}>
      {children}
    </div>
  ),
);
OverlayFooter.displayName = "OverlayFooter";
