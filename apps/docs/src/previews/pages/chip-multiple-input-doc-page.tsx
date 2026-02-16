import { chipMultipleInputSections } from "@versaur/react/chip-multiple-input";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function ChipMultipleInputDocPage() {
  return (
    <>
      <p>
        Multi-selection chip input - a modern alternative to checkbox groups
        with an interactive chip/pill UI. Supports selecting multiple options
        with array state management.
      </p>

      {chipMultipleInputSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
