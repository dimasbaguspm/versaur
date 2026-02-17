import {
  attributeListSections,
  attributeListProps,
  attributeListItemProps,
} from "@versaur/react/attribute-list";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function AttributeListDocPage() {
  return (
    <>
      {attributeListSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>AttributeList Props</h3>
      <PropsTable props={attributeListProps} />

      <h3>AttributeList.Item Props</h3>
      <PropsTable props={attributeListItemProps} />
    </>
  );
}
