import { chipSingleInputSections } from "@versaur/react/chip-single-input";
import { SectionBlock } from "../../components/section-block";

export function ChipSingleInputDocPage() {
  return (
    <>
      <p>
        Single-selection chip input - a modern alternative to radio groups with
        an interactive chip/pill UI. Perfect for size selectors, categories, or
        any single-choice scenarios.
      </p>

      {chipSingleInputSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
    </>
  );
}
