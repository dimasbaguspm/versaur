import {
  attributeListSections,
  attributeListInstallation,
  attributeListProps,
  attributeListItemProps,
} from "@versaur/react/attribute-list";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function AttributeListDocPage() {
  return (
    <>
      {attributeListSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>API Reference</h2>

      <h3>AttributeList Props</h3>
      <PropsTable props={attributeListProps} />

      <h3>AttributeList.Item Props</h3>
      <PropsTable props={attributeListItemProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(attributeListInstallation)} />
    </>
  );
}
