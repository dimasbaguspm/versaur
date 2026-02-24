import { appLayoutStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { AppLayoutRegionProps, AppLayoutRootProps, AppLayoutBodyProps, AppLayoutType } from "./app-layout.types"

const AppLayoutRoot = forwardRef<HTMLDivElement, AppLayoutRootProps>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cx(appLayoutStyles["app-layout"], className)}>
      {children}
    </div>
  )
})

AppLayoutRoot.displayName = "AppLayout"

const AppLayoutBody = forwardRef<HTMLDivElement, AppLayoutBodyProps>(({ centered, className, children }, ref) => {
  const attrs = useDataAttrs({
    centered,
  })

  return (
    <div ref={ref} className={cx(appLayoutStyles["app-layout-body"], className)} {...attrs}>
      {children}
    </div>
  )
})

AppLayoutBody.displayName = "AppLayout.Body"

const AppLayoutHeader = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <header ref={ref} className={cx(appLayoutStyles["app-layout-header"], className)}>
    {children}
  </header>
))

AppLayoutHeader.displayName = "AppLayout.Header"

const AppLayoutMain = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <main ref={ref} className={cx(appLayoutStyles["app-layout-main"], className)}>
    {children}
  </main>
))

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

const AppLayoutFooter = forwardRef<HTMLDivElement, AppLayoutRegionProps>(({ className, children }, ref) => (
  <footer ref={ref} className={cx(appLayoutStyles["app-layout-footer"], className)}>
    {children}
  </footer>
))

AppLayoutFooter.displayName = "AppLayout.Footer"

export const AppLayout = Object.assign(AppLayoutRoot, {
  Body: AppLayoutBody,
  Footer: AppLayoutFooter,
  Header: AppLayoutHeader,
  Main: AppLayoutMain,
  SideLeft: AppLayoutSideLeft,
  SideRight: AppLayoutSideRight,
}) as AppLayoutType
