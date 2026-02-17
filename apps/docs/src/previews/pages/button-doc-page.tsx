import { buttonSections, buttonProps } from "@versaur/react/button";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function ButtonDocPage() {
  return (
    <>
      {buttonSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={buttonProps} />
    </>
  );
}
