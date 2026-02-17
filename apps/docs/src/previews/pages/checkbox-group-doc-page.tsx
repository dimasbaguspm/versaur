import { checkboxGroupSections } from "@versaur/react/checkbox-group";
import { SectionBlock } from "../../components/section-block";

export function CheckboxGroupDocPage() {
  return (
    <>
      <p>
        Grouped checkboxes for multi-selection. Provides a compound component
        pattern with built-in labels, helper text, and error handling. Manages
        array state automatically.
      </p>

      {checkboxGroupSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
