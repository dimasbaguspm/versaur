import { badgeSections, badgeProps } from "@versaur/react/badge";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function BadgeDocPage() {
  return (
    <>
      {badgeSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>Badge Props</h3>
      <PropsTable props={badgeProps} />
    </>
  );
}
