import { tableSections, tableProps } from "@versaur/react/table";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function TableDocPage() {
  return (
    <>
      {tableSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>Table Components</h3>
      <div>
        {tableProps.map((propGroup, idx) => (
          <div key={idx}>
            <h4>{propGroup.name}</h4>
            <PropsTable props={propGroup.props} />
          </div>
        ))}
      </div>
    </>
  );
}
