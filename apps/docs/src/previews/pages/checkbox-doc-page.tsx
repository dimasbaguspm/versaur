import { checkboxSections } from "@versaur/react/checkbox";
import { SectionBlock } from "../../components/section-block";

export function CheckboxDocPage() {
  return (
    <>
      <p>
        Native checkbox input with custom styling. For grouped checkbox
        management, see CheckboxGroup.
      </p>

      {checkboxSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
