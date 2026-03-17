import { pageContentStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import type { PageContentProps } from "./page-content.types"

/**
 * PageContent component for wrapping main page content
 *
 * Container that applies consistent padding matching PageHeader.
 * Used as a pair with PageHeader for consistent spacing.
 *
 * @example
 * ```tsx
 * <AppLayout>
 *   <AppLayout.Main>
 *     <PageHeader title="Settings" />
 *     <PageContent>
 *       <Form>
 *         <TextInput label="Name" />
 *       </Form>
 *     </PageContent>
 *   </AppLayout.Main>
 * </AppLayout>
 * ```
 */
export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx(pageContentStyles.content, className)} {...rest}>
        {children}
      </div>
    )
  },
)

PageContent.displayName = "PageContent"
