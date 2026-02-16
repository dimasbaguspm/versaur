import { radioGroupSections } from "@versaur/react/radio-group";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function RadioGroupDocPage() {
  return (
    <>
      <p>
        Grouped radio inputs with coordinated state management. Provides a
        compound component pattern with built-in labels, helper text, and error
        handling.
      </p>

      {radioGroupSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
