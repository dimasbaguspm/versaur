import { checkboxGroupSections } from "@versaur/react/checkbox-group";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function CheckboxGroupDocPage() {
  return (
    <>
      <p>
        Grouped checkboxes for multi-selection. Provides a compound component
        pattern with built-in labels, helper text, and error handling. Manages
        array state automatically.
      </p>

      {checkboxGroupSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
