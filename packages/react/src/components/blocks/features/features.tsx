import { featuresStyles } from "@versaur/core/blocks"
import { forwardRef, useId } from "react"

import { cx } from "../../../utils/cx"
import { Tooltip } from "../../primitive/tooltip"
import type { FeaturesItemProps, FeaturesProps } from "./features.types"

function FeaturesRoot({ direction = "column", children, className, ...rest }: FeaturesProps, ref: any) {
  return (
    <ul ref={ref} className={cx(featuresStyles.features, className)} data-direction={direction} {...rest}>
      {children}
    </ul>
  )
}

export const FeaturesRootComponent = forwardRef<HTMLUListElement, FeaturesProps>(FeaturesRoot)
FeaturesRootComponent.displayName = "Features"

export const FeaturesItem = forwardRef<HTMLLIElement, FeaturesItemProps>(
  ({ icon, children, className, "aria-label": ariaLabel, ...rest }, ref) => {
    const id = useId()
    const tooltipId = `features-item-${id}`
    const triggerProps = ariaLabel ? Tooltip.getTooltipTriggerProps({ id: tooltipId }) : {}

    return (
      <li ref={ref} aria-label={ariaLabel} className={cx(featuresStyles.item, className)} {...triggerProps} {...rest}>
        {icon && <span className={featuresStyles.icon}>{icon}</span>}
        {children}
        {ariaLabel && (
          <Tooltip id={tooltipId}>
            <Tooltip.Text>{ariaLabel}</Tooltip.Text>
          </Tooltip>
        )}
      </li>
    )
  },
)
FeaturesItem.displayName = "Features.Item"

export interface FeaturesComponent extends React.ForwardRefExoticComponent<
  FeaturesProps & React.RefAttributes<HTMLUListElement>
> {
  Item: typeof FeaturesItem
}

export const Features = Object.assign(FeaturesRootComponent, {
  Item: FeaturesItem,
}) as unknown as FeaturesComponent
