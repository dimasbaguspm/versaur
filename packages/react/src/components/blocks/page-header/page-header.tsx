import { pageHeaderStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Heading } from "../../primitive/heading"
import { Text } from "../../primitive/text"
import type {
  PageHeaderComponent,
  PageHeaderRootProps,
  PageHeaderSubtitleProps,
  PageHeaderTitleProps,
} from "./page-header.types"

const PageHeaderRoot = forwardRef<HTMLElement, PageHeaderRootProps>(
  ({ title, subtitle, supplementary, className, ...rest }, ref) => {
    return (
      <header ref={ref} className={cx(pageHeaderStyles.header, className)} {...rest}>
        {title}
        {subtitle}
        {supplementary && <div className={pageHeaderStyles.supplementary}>{supplementary}</div>}
      </header>
    )
  },
)
PageHeaderRoot.displayName = "PageHeader"

const PageHeaderTitle = forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  ({ action, additionalInfo, className, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      action: action ? "true" : "false",
      "additional-info": additionalInfo ? "true" : "false",
    })

    return (
      <div ref={ref} className={cx(pageHeaderStyles.title, className)} {...dataAttrs} {...rest}>
        <div className={pageHeaderStyles["title-inner"]}>
          <Heading as="h1" size="xl" weight="bold" intent="default" className={pageHeaderStyles.heading}>
            {children}
          </Heading>
        </div>
        {(action || additionalInfo) && (
          <div className={pageHeaderStyles["title-right"]}>
            {additionalInfo && <div className={pageHeaderStyles["additional-info"]}>{additionalInfo}</div>}
            {action && <div className={pageHeaderStyles.action}>{action}</div>}
          </div>
        )}
      </div>
    )
  },
)
PageHeaderTitle.displayName = "PageHeader.Title"

const PageHeaderSubtitle = forwardRef<HTMLElement, PageHeaderSubtitleProps>(
  ({ additionalInfo, className, children, ...rest }, ref) => (
    <div ref={ref as any} className={cx(pageHeaderStyles.subtitle, className)} {...rest}>
      <Text as="p" size="base" weight="normal" intent="default" className={pageHeaderStyles["subtitle-text"]}>
        {children}
      </Text>
      {additionalInfo && <div className={pageHeaderStyles["subtitle-additional-info"]}>{additionalInfo}</div>}
    </div>
  ),
)
PageHeaderSubtitle.displayName = "PageHeader.Subtitle"

export const PageHeader = Object.assign(PageHeaderRoot, {
  Title: PageHeaderTitle,
  Subtitle: PageHeaderSubtitle,
}) as PageHeaderComponent
