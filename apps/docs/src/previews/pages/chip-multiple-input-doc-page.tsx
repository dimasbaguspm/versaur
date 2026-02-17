import { chipMultipleInputSections } from "@versaur/react/chip-multiple-input";
import { SectionBlock } from "../../components/section-block";

export function ChipMultipleInputDocPage() {
  return (
    <>
      <p>
        Multi-selection chip input - a modern alternative to checkbox groups
        with an interactive chip/pill UI. Supports selecting multiple options
        with array state management.
      </p>

      {chipMultipleInputSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
