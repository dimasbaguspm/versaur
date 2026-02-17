import {
  textInputSections,
  textInputInstallation,
  textInputProps,
} from "@versaur/react/text-input";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function TextInputDocPage() {
  return (
    <>
      {textInputSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={textInputProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(textInputInstallation)} />
    </>
  );
}
