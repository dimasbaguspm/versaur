import {
  tableSections,
  tableInstallation,
  tableProps,
  type TableSection,
} from "@versaur/react/table";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function TableDocPage() {
  return (
    <>
      {tableSections.map((section: TableSection) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
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

      <h2>Installation</h2>
      <pre
        style={{
          background: "#f3f4f6",
          padding: "1rem",
          borderRadius: "0.5rem",
          overflow: "auto",
        }}
      >
        <code>{tableInstallation}</code>
      </pre>

      <h2>Sub-Components</h2>
      <p>
        The Table component includes the following sub-components for building
        structured data tables:
      </p>
      <ul>
        <li>
          <strong>Table.Header</strong> - Container for header rows using{" "}
          {`<thead>`}
        </li>
        <li>
          <strong>Table.Body</strong> - Container for body rows using{" "}
          {`<tbody>`}
        </li>
        <li>
          <strong>Table.Footer</strong> - Container for footer rows using{" "}
          {`<tfoot>`}
        </li>
        <li>
          <strong>Table.Row</strong> - Table row element using {`<tr>`}
        </li>
        <li>
          <strong>Table.Head</strong> - Header cell element using {`<th>`}
        </li>
        <li>
          <strong>Table.Cell</strong> - Data cell element using {`<td>`} with
          optional variant prop
        </li>
      </ul>
    </>
  );
}
