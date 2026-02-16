import type { ComponentType } from "react";
import { AttributeList } from ".";

export interface AttributeListSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function GridLayoutPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>3 Column Grid (Default)</h4>
        <AttributeList columns="3">
          <AttributeList.Item columnSpan="3" title="Bio">
            Full-stack developer with 8+ years of experience in building
            scalable web applications
          </AttributeList.Item>
          <AttributeList.Item columnSpan="2" title="Name">
            John Doe
          </AttributeList.Item>
          <AttributeList.Item columnSpan="1" title="Status">
            Active
          </AttributeList.Item>
        </AttributeList>
      </div>
      <div>
        <h4>4 Column Grid</h4>
        <AttributeList columns="4">
          <AttributeList.Item columnSpan="4" title="Role">
            Senior Software Engineer
          </AttributeList.Item>
          <AttributeList.Item columnSpan="2" title="Department">
            Engineering
          </AttributeList.Item>
          <AttributeList.Item columnSpan="2" title="Location">
            Remote
          </AttributeList.Item>
        </AttributeList>
      </div>
    </div>
  );
}

function SpanningPreview() {
  return (
    <AttributeList columns="6">
      <AttributeList.Item columnSpan="6" title="Summary" contentLineClamp="3">
        Experienced full-stack developer passionate about building user-centric
        solutions
      </AttributeList.Item>
      <AttributeList.Item columnSpan="2" title="First Name">
        John
      </AttributeList.Item>
      <AttributeList.Item columnSpan="2" title="Last Name">
        Doe
      </AttributeList.Item>
      <AttributeList.Item columnSpan="2" title="Age">
        32
      </AttributeList.Item>
      <AttributeList.Item columnSpan="3" title="Email">
        john.doe@example.com
      </AttributeList.Item>
      <AttributeList.Item columnSpan="3" title="Phone">
        +1 (555) 123-4567
      </AttributeList.Item>
    </AttributeList>
  );
}

function SingleColumnPreview() {
  return (
    <AttributeList columns="1">
      <AttributeList.Item title="Name">Alice Chen</AttributeList.Item>
      <AttributeList.Item title="Email">
        alice.chen@example.com
      </AttributeList.Item>
      <AttributeList.Item title="Organization">
        Tech Innovations Inc.
      </AttributeList.Item>
      <AttributeList.Item title="Role">Product Manager</AttributeList.Item>
    </AttributeList>
  );
}

export const attributeListSections: AttributeListSection[] = [
  {
    key: "grid-layout",
    title: "Grid Layouts",
    preview: GridLayoutPreview,
    code: `<AttributeList columns="3">
  <AttributeList.Item columnSpan="3" title="Bio">
    Full-stack developer with 8+ years of experience
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="Name">
    John Doe
  </AttributeList.Item>
  <AttributeList.Item columnSpan="1" title="Status">
    Active
  </AttributeList.Item>
</AttributeList>

<AttributeList columns="4">
  <AttributeList.Item columnSpan="4" title="Role">
    Senior Software Engineer
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="Department">
    Engineering
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="Location">
    Remote
  </AttributeList.Item>
</AttributeList>`,
    language: "tsx",
  },
  {
    key: "spanning",
    title: "Column Spanning",
    preview: SpanningPreview,
    code: `<AttributeList columns="6">
  <AttributeList.Item columnSpan="6" title="Summary" contentLineClamp="3">
    Experienced full-stack developer...
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="First Name">
    John
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="Last Name">
    Doe
  </AttributeList.Item>
  <AttributeList.Item columnSpan="2" title="Age">
    32
  </AttributeList.Item>
  <AttributeList.Item columnSpan="3" title="Email">
    john.doe@example.com
  </AttributeList.Item>
  <AttributeList.Item columnSpan="3" title="Phone">
    +1 (555) 123-4567
  </AttributeList.Item>
</AttributeList>`,
    language: "tsx",
  },
  {
    key: "single-column",
    title: "Single Column",
    preview: SingleColumnPreview,
    code: `<AttributeList columns="1">
  <AttributeList.Item title="Name">
    Alice Chen
  </AttributeList.Item>
  <AttributeList.Item title="Email">
    alice.chen@example.com
  </AttributeList.Item>
  <AttributeList.Item title="Organization">
    Tech Innovations Inc.
  </AttributeList.Item>
  <AttributeList.Item title="Role">
    Product Manager
  </AttributeList.Item>
</AttributeList>`,
    language: "tsx",
  },
];

export const attributeListProps = [
  {
    name: "columns",
    type: "'1' | '2' | '3' | '4' | '5' | '6'",
    default: "'3'",
    description: "Number of columns for the grid layout",
  },
  {
    name: "root",
    type: "'dl' | 'div'",
    default: "'dl'",
    description: "HTML root element type (semantic DL or non-semantic DIV)",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "AttributeList.Item components",
  },
];

export const attributeListItemProps = [
  {
    name: "title",
    type: "string",
    default: "required",
    description: "The title/label for this attribute",
  },
  {
    name: "columnSpan",
    type: "'1' | '2' | '3' | '4' | '5' | '6'",
    default: "'1'",
    description: "Number of columns to span (auto-clamped to columns count)",
  },
  {
    name: "contentLineClamp",
    type: "'1' | '2' | '3' | '4' | '5'",
    default: "'2'",
    description: "Number of lines before truncating with ellipsis",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "The value content (text, links, badges, etc.)",
  },
];

export function AttributeListPreview() {
  return (
    <>
      {attributeListSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
