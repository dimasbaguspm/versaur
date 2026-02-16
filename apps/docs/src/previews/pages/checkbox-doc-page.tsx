import { checkboxSections } from "@versaur/react/checkbox";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function CheckboxDocPage() {
  return (
    <>
      <p>
        Native checkbox input with custom styling. For grouped checkbox
        management, see CheckboxGroup.
      </p>

      {checkboxSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
