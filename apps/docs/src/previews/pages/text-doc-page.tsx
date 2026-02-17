import { textSections, textProps } from "@versaur/react/text";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function TextDocPage() {
  return (
    <>
      {textSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={textProps} />
    </>
  );
}
