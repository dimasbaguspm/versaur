import { dotSections, dotProps } from "@versaur/react/dot";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function DotDocPage() {
  return (
    <>
      {dotSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}
      <h2>API Reference</h2>

      <h3>Dot Props</h3>
      <PropsTable props={dotProps} />
    </>
  );
}
