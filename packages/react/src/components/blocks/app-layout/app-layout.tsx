import { appLayoutStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { AppLayoutMainProps, AppLayoutRegionProps, AppLayoutRootProps, AppLayoutBodyProps, AppLayoutType } from "./app-layout.types"

const AppLayoutRoot = forwardRef<HTMLDivElement, AppLayoutRootProps>(
  (
    {
      variant = "classic",
      hideHeader,
      hideBottom,
      className,
      children,
    },
    ref,
  ) => {
    const attrs = useDataAttrs({
      "hide-header": hideHeader,
      "hide-bottom": hideBottom,
      variant,
    })

    return (
      <div ref={ref} className={cx(appLayoutStyles["app-layout"], className)} {...attrs}>
        {children}
      </div>
    )
  },
)

AppLayoutRoot.displayName = "AppLayout"

const AppLayoutBody = forwardRef<HTMLDivElement, AppLayoutBodyProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cx(appLayoutStyles["app-layout-body"], className)}>
      {children}
    </div>
  ),
)

AppLayoutBody.displayName = "AppLayout.Body"

const AppLayoutHeader = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <header ref={ref} className={cx(appLayoutStyles["app-layout-header"], className)}>
    {children}
  </header>
))

AppLayoutHeader.displayName = "AppLayout.Header"

const AppLayoutMain = forwardRef<HTMLDivElement, AppLayoutMainProps>(
  ({ className, placement = "full-width", children }, ref) => {
    const attrs = useDataAttrs({
      placement,
    })

    return (
      <main ref={ref} className={cx(appLayoutStyles["app-layout-main"], className)} {...attrs}>
        {children}
      </main>
    )
  },
)

AppLayoutMain.displayName = "AppLayout.Main"

const AppLayoutSideLeft = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <aside ref={ref} className={cx(appLayoutStyles["app-layout-side-left"], className)}>
    {children}
  </aside>
))

AppLayoutSideLeft.displayName = "AppLayout.SideLeft"

const AppLayoutSideRight = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <aside ref={ref} className={cx(appLayoutStyles["app-layout-side-right"], className)}>
    {children}
  </aside>
))

AppLayoutSideRight.displayName = "AppLayout.SideRight"

const AppLayoutBottom = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <footer ref={ref} className={cx(appLayoutStyles["app-layout-bottom"], className)}>
    {children}
  </footer>
))

AppLayoutBottom.displayName = "AppLayout.Bottom"

export const AppLayout = Object.assign(AppLayoutRoot, {
  Body: AppLayoutBody,
  Bottom: AppLayoutBottom,
  Header: AppLayoutHeader,
  Main: AppLayoutMain,
  SideLeft: AppLayoutSideLeft,
  SideRight: AppLayoutSideRight,
}) as AppLayoutType
