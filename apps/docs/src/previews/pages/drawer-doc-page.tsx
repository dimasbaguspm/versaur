import {
  DrawerSections,
  drawerInstallation,
  drawerProps,
} from "@versaur/react/drawer";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function DrawerDocPage() {
  return (
    <>
      {DrawerSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>API Reference</h2>
      <PropsTable props={drawerProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(drawerInstallation)} />
    </>
  );
}
