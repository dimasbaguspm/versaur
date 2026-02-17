import { SectionBlock } from "../../components/section-block.js";
import { PropsTable } from "../../components/props-table.js";
import { tooltipSections, tooltipProps } from "@versaur/react/tooltip";

export function TooltipDocPage() {
  return (
    <>
      {tooltipSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={tooltipProps} />
    </>
  );
}
