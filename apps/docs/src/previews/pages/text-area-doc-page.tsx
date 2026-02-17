import {
  textAreaSections,
  textAreaInstallation,
  textAreaProps,
} from "@versaur/react/text-area";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function TextAreaDocPage() {
  return (
    <>
      {textAreaSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={textAreaProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(textAreaInstallation)} />
    </>
  );
}
