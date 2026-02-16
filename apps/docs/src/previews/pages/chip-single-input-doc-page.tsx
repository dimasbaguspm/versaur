import { chipSingleInputSections } from "@versaur/react/chip-single-input";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function ChipSingleInputDocPage() {
  return (
    <>
      <p>
        Single-selection chip input - a modern alternative to radio groups with
        an interactive chip/pill UI. Perfect for size selectors, categories, or
        any single-choice scenarios.
      </p>

      {chipSingleInputSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
