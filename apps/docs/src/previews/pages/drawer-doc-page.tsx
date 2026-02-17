import {
  DrawerSections,
  drawerInstallation,
  drawerProps,
} from "@versaur/react/drawer";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function DrawerDocPage() {
  return (
    <>
      {DrawerSections.map((section) => (
        <SectionBlock
          key={section.key}
          section={section}
          canvas={{ minHeight: "280px" }}
        />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={drawerProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(drawerInstallation)} />
    </>
  );
}
