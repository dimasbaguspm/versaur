import {
  sidebarSections,
  sidebarInstallation,
  sidebarProps,
} from "@versaur/react/sidebar";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function SidebarDocPage() {
  return (
    <>
      {sidebarSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={sidebarProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(sidebarInstallation)} />
    </>
  );
}
