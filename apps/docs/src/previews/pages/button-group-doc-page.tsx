import {
  buttonGroupSections,
  buttonGroupInstallation,
  buttonGroupProps,
} from "@versaur/react/button-group";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function ButtonGroupDocPage() {
  return (
    <>
      {buttonGroupSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>ButtonGroup Props</h3>
      <PropsTable props={buttonGroupProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(buttonGroupInstallation)} />
    </>
  );
}
