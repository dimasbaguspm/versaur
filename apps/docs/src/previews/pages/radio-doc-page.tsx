import { radioSections } from "@versaur/react/radio";
import { ComponentPreview } from "../../components/component-preview";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function RadioDocPage() {
  return (
    <>
      <p>
        Native radio input with custom styling. For grouped radio management,
        see RadioGroup.
      </p>

      {radioSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}
    </>
  );
}
