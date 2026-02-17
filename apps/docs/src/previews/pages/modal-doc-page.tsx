import {
  ModalSections,
  modalInstallation,
  modalProps,
} from "@versaur/react/modal";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function ModalDocPage() {
  return (
    <>
      {ModalSections.map((section) => (
        <SectionBlock
          key={section.key}
          section={section}
          canvas={{ minHeight: "280px" }}
        />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={modalProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(modalInstallation)} />
    </>
  );
}
