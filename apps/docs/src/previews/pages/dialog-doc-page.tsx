import { DialogSections, dialogProps } from "@versaur/react/dialog";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function DialogDocPage() {
  return (
    <>
      {DialogSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={dialogProps} />
    </>
  );
}
