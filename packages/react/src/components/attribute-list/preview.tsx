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
          <AttributeList.Item span="3" title="Bio">
            Full-stack developer with 8+ years of experience in building
            scalable web applications
          </AttributeList.Item>
          <AttributeList.Item span="2" title="Name">
            John Doe
          </AttributeList.Item>
          <AttributeList.Item span="1" title="Status">
            Active
          </AttributeList.Item>
        </AttributeList>
      </div>
      <div>
        <h4>4 Column Grid</h4>
        <AttributeList columns="4">
          <AttributeList.Item span="4" title="Role">
            Senior Software Engineer
          </AttributeList.Item>
          <AttributeList.Item span="2" title="Department">
            Engineering
          </AttributeList.Item>
          <AttributeList.Item span="2" title="Location">
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
      <AttributeList.Item span="6" title="Summary">
        Experienced full-stack developer passionate about building user-centric
        solutions
      </AttributeList.Item>
      <AttributeList.Item span="2" title="First Name">
        John
      </AttributeList.Item>
      <AttributeList.Item span="2" title="Last Name">
        Doe
      </AttributeList.Item>
      <AttributeList.Item span="2" title="Age">
        32
      </AttributeList.Item>
      <AttributeList.Item span="3" title="Email">
        john.doe@example.com
      </AttributeList.Item>
      <AttributeList.Item span="3" title="Phone">
        +1 (555) 123-4567
      </AttributeList.Item>
    </AttributeList>
  );
}

function MixedContentPreview() {
  return (
    <AttributeList columns="3">
      <AttributeList.Item span="3" title="Full Name">
        <strong>Sarah Johnson</strong>
      </AttributeList.Item>
      <AttributeList.Item span="1" title="Role">
        <span
          style={{
            padding: "2px 8px",
            backgroundColor: "#e3f2fd",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          Lead
        </span>
      </AttributeList.Item>
      <AttributeList.Item span="1" title="Team">
        <span
          style={{
            padding: "2px 8px",
            backgroundColor: "#f3e5f5",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          Platform
        </span>
      </AttributeList.Item>
      <AttributeList.Item span="1" title="Status">
        <span style={{ color: "green", fontWeight: "500" }}>● Online</span>
      </AttributeList.Item>
      <AttributeList.Item span="3" title="Contact">
        <a
          href="mailto:sarah@example.com"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          sarah@example.com
        </a>
        {" | "}
        <a
          href="tel:+15551234567"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          +1 (555) 123-4567
        </a>
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
  <AttributeList.Item span="3" title="Bio">
    Full-stack developer with 8+ years of experience
  </AttributeList.Item>
  <AttributeList.Item span="2" title="Name">
    John Doe
  </AttributeList.Item>
  <AttributeList.Item span="1" title="Status">
    Active
  </AttributeList.Item>
</AttributeList>

<AttributeList columns="4">
  <AttributeList.Item span="4" title="Role">
    Senior Software Engineer
  </AttributeList.Item>
  <AttributeList.Item span="2" title="Department">
    Engineering
  </AttributeList.Item>
  <AttributeList.Item span="2" title="Location">
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
  <AttributeList.Item span="6" title="Summary">
    Experienced full-stack developer...
  </AttributeList.Item>
  <AttributeList.Item span="2" title="First Name">
    John
  </AttributeList.Item>
  <AttributeList.Item span="2" title="Last Name">
    Doe
  </AttributeList.Item>
  <AttributeList.Item span="2" title="Age">
    32
  </AttributeList.Item>
  <AttributeList.Item span="3" title="Email">
    john.doe@example.com
  </AttributeList.Item>
  <AttributeList.Item span="3" title="Phone">
    +1 (555) 123-4567
  </AttributeList.Item>
</AttributeList>`,
    language: "tsx",
  },
  {
    key: "mixed-content",
    title: "Mixed Content",
    preview: MixedContentPreview,
    code: `<AttributeList columns="3">
  <AttributeList.Item span="3" title="Full Name">
    <strong>Sarah Johnson</strong>
  </AttributeList.Item>
  <AttributeList.Item span="1" title="Role">
    <span style={{ ...badgeStyle }}>Lead</span>
  </AttributeList.Item>
  <AttributeList.Item span="1" title="Team">
    <span style={{ ...badgeStyle }}>Platform</span>
  </AttributeList.Item>
  <AttributeList.Item span="1" title="Status">
    <span style={{ color: "green" }}>● Online</span>
  </AttributeList.Item>
  <AttributeList.Item span="3" title="Contact">
    <a href="mailto:sarah@example.com">sarah@example.com</a>
    {" | "}
    <a href="tel:+15551234567">+1 (555) 123-4567</a>
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
    name: "span",
    type: "'1' | '2' | '3' | '4' | '5' | '6'",
    default: "'1'",
    description: "Number of columns to span (auto-clamped to columns count)",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "The value content (text, links, badges, etc.)",
  },
];

export const attributeListInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

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
