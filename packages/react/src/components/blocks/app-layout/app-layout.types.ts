import type { AppLayout } from "@versaur/core/blocks"
import type { ForwardRefExoticComponent, RefAttributes, ReactNode } from "react"

export interface AppLayoutRootProps {
  variant?: AppLayout.Variant
  hideHeader?: boolean
  hideBottom?: boolean
  className?: string
  children?: ReactNode
}

export interface AppLayoutBodyProps {
  className?: string
  children?: ReactNode
}

export interface AppLayoutRegionProps {
  className?: string
  children?: ReactNode
}

export interface AppLayoutMainProps extends AppLayoutRegionProps {
  /**
   * Controls content width constraint and alignment.
   * - 'full-width': Content uses the entire main area width
   * - 'centred': Content is constrained to max-width and centered
   * @default 'full-width'
   */
  placement?: AppLayout.Placement
}

export interface AppLayoutType extends ForwardRefExoticComponent<AppLayoutRootProps & RefAttributes<HTMLDivElement>> {
  Body: ForwardRefExoticComponent<AppLayoutBodyProps & RefAttributes<HTMLDivElement>>
  Bottom: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  Header: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  Main: ForwardRefExoticComponent<AppLayoutMainProps & RefAttributes<HTMLElement>>
  SideLeft: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  SideRight: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
}
