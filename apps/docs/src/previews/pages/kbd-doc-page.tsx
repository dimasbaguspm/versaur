import { kbdSections, kbdProps } from "@versaur/react/kbd";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function KbdDocPage() {
  return (
    <>
      {kbdSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={kbdProps} />
    </>
  );
}
