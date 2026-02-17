import { noResultsSections, noResultsProps } from "@versaur/react/no-results";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function NoResultsDocPage() {
  return (
    <>
      {noResultsSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={noResultsProps} />
    </>
  );
}
