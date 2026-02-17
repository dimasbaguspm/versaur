import {
  selectSections,
  selectInstallation,
  selectProps,
} from "@versaur/react/select";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function SelectDocPage() {
  return (
    <>
      {selectSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={selectProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(selectInstallation)} />
    </>
  );
}
