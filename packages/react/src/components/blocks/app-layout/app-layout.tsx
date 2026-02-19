import { appLayoutStyles } from "@versaur/core"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { AppLayoutMainProps, AppLayoutRegionProps, AppLayoutRootProps } from "./app-layout.types"

const AppLayoutRoot = forwardRef<HTMLDivElement, AppLayoutRootProps>(
  (
    {
      variant = "classic",
      showHeader = true,
      showSideLeft = true,
      showSideRight = false,
      showBottom = true,
      className = "",
      children,
    },
    ref,
  ) => {
    const attrs = useDataAttrs({
      "show-bottom": showBottom,
      "show-header": showHeader,
      "show-side-left": showSideLeft,
      "show-side-right": showSideRight,
      variant,
    })

    return (
      <div ref={ref} className={`${appLayoutStyles["app-layout"]} ${className}`.trim()} {...attrs}>
        {children}
      </div>
    )
  },
)

AppLayoutRoot.displayName = "AppLayout"

const AppLayoutHeader = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className = "", children }, ref) => (
  <header ref={ref} className={`${appLayoutStyles["app-layout-header"]} ${className}`.trim()}>
    {children}
  </header>
))

AppLayoutHeader.displayName = "AppLayout.Header"

const AppLayoutMain = forwardRef<HTMLDivElement, AppLayoutMainProps>(
  ({ className = "", placement = "full-width", children }, ref) => {
    const attrs = useDataAttrs({
      placement,
    })

    return (
      <main ref={ref} className={`${appLayoutStyles["app-layout-main"]} ${className}`.trim()} {...attrs}>
        {children}
      </main>
    )
  },
)

AppLayoutMain.displayName = "AppLayout.Main"

const AppLayoutSideLeft = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className = "", children }, ref) => (
  <aside ref={ref} className={`${appLayoutStyles["app-layout-side-left"]} ${className}`.trim()}>
    {children}
  </aside>
))

AppLayoutSideLeft.displayName = "AppLayout.SideLeft"

const AppLayoutSideRight = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className = "", children }, ref) => (
  <aside ref={ref} className={`${appLayoutStyles["app-layout-side-right"]} ${className}`.trim()}>
    {children}
  </aside>
))

AppLayoutSideRight.displayName = "AppLayout.SideRight"

const AppLayoutBottom = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className = "", children }, ref) => (
  <footer ref={ref} className={`${appLayoutStyles["app-layout-bottom"]} ${className}`.trim()}>
    {children}
  </footer>
))

AppLayoutBottom.displayName = "AppLayout.Bottom"

export const AppLayout = Object.assign(AppLayoutRoot, {
  Bottom: AppLayoutBottom,
  Header: AppLayoutHeader,
  Main: AppLayoutMain,
  SideLeft: AppLayoutSideLeft,
  SideRight: AppLayoutSideRight,
})
