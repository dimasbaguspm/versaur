import type { Banner as BannerCore } from "@versaur/core/primitive"
import { bannerStyles } from "@versaur/core/primitive"
import { XIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../button-icon"
import type { BannerProps } from "./banner.types"

/**
 * Banner component for displaying notifications and alerts
 *
 * @example
 * ```tsx
 * <Banner variant="danger" icon={<AlertIcon />} onDismiss={() => {}}>
 *   You need to complete your payment
 * </Banner>
 *
 * <Banner variant="warning">
 *   This action cannot be undone
 * </Banner>
 * ```
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ variant = "info" as BannerCore.Variant, icon, onDismiss, children, className, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      variant,
    })

    return (
      <div ref={ref} className={cx(bannerStyles.banner, className)} {...dataAttrs} {...rest}>
        {icon && <div className={bannerStyles.icon}>{icon}</div>}
        <div className={bannerStyles.content}>{children}</div>
        {onDismiss && (
          <ButtonIcon as={XIcon} variant="ghost" size="small" onClick={onDismiss} aria-label="Dismiss banner" />
        )}
      </div>
    )
  },
)

Banner.displayName = "Banner"
