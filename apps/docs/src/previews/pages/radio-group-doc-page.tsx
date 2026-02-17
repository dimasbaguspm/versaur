import { radioGroupSections } from "@versaur/react/radio-group";
import { SectionBlock } from "../../components/section-block";

export function RadioGroupDocPage() {
  return (
    <>
      <p>
        Grouped radio inputs with coordinated state management. Provides a
        compound component pattern with built-in labels, helper text, and error
        handling.
      </p>

      {radioGroupSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
