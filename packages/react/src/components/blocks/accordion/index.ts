import type { AccordionRootProps, AccordionSummaryProps } from "./accordion.types"

declare namespace Accordion {
  export type RootProps = AccordionRootProps
  export type SummaryProps = AccordionSummaryProps
}

export { Accordion } from "./accordion"
export type { AccordionRootProps, AccordionSummaryProps } from "./accordion.types"
