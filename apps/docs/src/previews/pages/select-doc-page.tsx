import { selectSections, selectProps } from "@versaur/react/select";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function SelectDocPage() {
  return (
    <>
      {selectSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={selectProps} />
    </>
  );
}
