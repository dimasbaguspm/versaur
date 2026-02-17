import { hrSections, hrInstallation, hrProps } from "@versaur/react/hr";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function HrDocPage() {
  return (
    <>
      {hrSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={hrProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(hrInstallation)} />
    </>
  );
}
