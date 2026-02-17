import { radioSections } from "@versaur/react/radio";
import { SectionBlock } from "../../components/section-block";

export function RadioDocPage() {
  return (
    <>
      <p>
        Native radio input with custom styling. For grouped radio management,
        see RadioGroup.
      </p>

      {radioSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
