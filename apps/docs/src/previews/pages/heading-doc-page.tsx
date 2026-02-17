import { headingSections, headingProps } from "@versaur/react/heading";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function HeadingDocPage() {
  return (
    <>
      {headingSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={headingProps} />
    </>
  );
}
