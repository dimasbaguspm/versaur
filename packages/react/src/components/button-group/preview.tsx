import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export const buttonGroupProps = [
  {
    name: "gap",
    type: "ButtonGroupGap",
    default: "md",
    description: "Gap between buttons: xs, sm, md, or lg",
  },
  {
    name: "direction",
    type: "ButtonGroupDirection",
    default: "horizontal",
    description: "Direction of flex layout: horizontal or vertical",
  },
  {
    name: "align",
    type: "ButtonGroupAlign",
    default: "center",
    description:
      "Alignment of items: start, center, end, space-between, space-around, or space-evenly",
  },
  {
    name: "wrap",
    type: "ButtonGroupWrap",
    default: "nowrap",
    description: "Flex wrap behavior: wrap or nowrap",
  },
  {
    name: "aria-label",
    type: "string",
    default: "Button group",
    description: "Accessible label for the group (customizable)",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Button children components",
  },
];

function GapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>xs gap</p>
        <ButtonGroup gap="xs">
          <Button variant="primary" size="small">
            Save
          </Button>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>sm gap</p>
        <ButtonGroup gap="sm">
          <Button variant="primary" size="small">
            Save
          </Button>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>md gap</p>
        <ButtonGroup gap="md">
          <Button variant="primary" size="small">
            Save
          </Button>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>lg gap</p>
        <ButtonGroup gap="lg">
          <Button variant="primary" size="small">
            Save
          </Button>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

function DirectionSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Horizontal</p>
        <ButtonGroup direction="horizontal">
          <Button variant="primary">Submit</Button>
          <Button variant="secondary">Reset</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Vertical</p>
        <ButtonGroup direction="vertical" align="start">
          <Button variant="primary">Option 1</Button>
          <Button variant="secondary">Option 2</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

function AlignmentSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Start</p>
        <ButtonGroup align="start" gap="lg">
          <Button variant="primary">Yes</Button>
          <Button variant="secondary">No</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Center</p>
        <ButtonGroup align="center" gap="lg">
          <Button variant="primary">Yes</Button>
          <Button variant="secondary">No</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>End</p>
        <ButtonGroup align="end" gap="lg">
          <Button variant="primary">Yes</Button>
          <Button variant="secondary">No</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Between
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <ButtonGroup align="space-between" gap="lg" style={{ width: "100%" }}>
            <Button variant="secondary" size="small">
              Cancel
            </Button>
            <Button variant="primary" size="small">
              Submit
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Around
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <ButtonGroup align="space-around" gap="lg" style={{ width: "100%" }}>
            <Button variant="secondary" size="small">
              Previous
            </Button>
            <Button variant="secondary" size="small">
              Next
            </Button>
            <Button variant="primary" size="small">
              Submit
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Evenly
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <ButtonGroup align="space-evenly" gap="lg" style={{ width: "100%" }}>
            <Button variant="secondary" size="small">
              Save
            </Button>
            <Button variant="secondary" size="small">
              Draft
            </Button>
            <Button variant="secondary" size="small">
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

function WrapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>No wrap</p>
        <ButtonGroup wrap="nowrap" style={{ width: "300px" }}>
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
          <Button size="small">Button 4</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>With wrap</p>
        <ButtonGroup wrap="wrap" style={{ width: "300px" }}>
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
          <Button size="small">Button 4</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

function CustomSpacingSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Custom spacing override
        </p>
        <ButtonGroup
          gap="md"
          style={
            {
              "--vers-comp-button-group-gap": "var(--spacing-4)",
            } as React.CSSProperties
          }
        >
          <Button variant="primary">Custom</Button>
          <Button variant="secondary">Gap</Button>
          <Button variant="outline">Override</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export const buttonGroupSections = [
  {
    key: "gap-variants",
    title: "Gap Variants",
    preview: GapSection,
    code: `<ButtonGroup gap="xs">
  <Button variant="primary" size="small">Save</Button>
  <Button variant="secondary" size="small">Cancel</Button>
</ButtonGroup>

<ButtonGroup gap="sm">...</ButtonGroup>
<ButtonGroup gap="md">...</ButtonGroup>
<ButtonGroup gap="lg">...</ButtonGroup>`,
    language: "tsx",
  },
  {
    key: "direction",
    title: "Direction",
    preview: DirectionSection,
    code: `<ButtonGroup direction="horizontal">
  <Button variant="primary">Submit</Button>
  <Button variant="secondary">Reset</Button>
</ButtonGroup>

<ButtonGroup direction="vertical" align="start">
  <Button variant="primary">Option 1</Button>
  <Button variant="secondary">Option 2</Button>
</ButtonGroup>`,
    language: "tsx",
  },
  {
    key: "alignment",
    title: "Alignment",
    preview: AlignmentSection,
    code: `<ButtonGroup align="start" gap="lg">
  <Button variant="primary">Yes</Button>
  <Button variant="secondary">No</Button>
</ButtonGroup>

<ButtonGroup align="space-between" style={{ width: "100%" }}>
  <Button variant="secondary" size="small">Cancel</Button>
  <Button variant="primary" size="small">Submit</Button>
</ButtonGroup>

<ButtonGroup align="space-around" style={{ width: "100%" }}>
  <Button variant="secondary" size="small">Previous</Button>
  <Button variant="secondary" size="small">Next</Button>
  <Button variant="primary" size="small">Submit</Button>
</ButtonGroup>

<ButtonGroup align="space-evenly" style={{ width: "100%" }}>
  <Button variant="secondary" size="small">Save</Button>
  <Button variant="secondary" size="small">Draft</Button>
  <Button variant="secondary" size="small">Cancel</Button>
</ButtonGroup>`,
    language: "tsx",
  },
  {
    key: "wrap",
    title: "Flex Wrap",
    preview: WrapSection,
    code: `<ButtonGroup wrap="nowrap" style={{ width: "300px" }}>
  <Button size="small">Button 1</Button>
  <Button size="small">Button 2</Button>
  <Button size="small">Button 3</Button>
  <Button size="small">Button 4</Button>
</ButtonGroup>

<ButtonGroup wrap="wrap" style={{ width: "300px" }}>
  ...
</ButtonGroup>`,
    language: "tsx",
  },
  {
    key: "custom-spacing",
    title: "Custom Spacing Override",
    preview: CustomSpacingSection,
    code: `<ButtonGroup
  gap="md"
  style={{
    "--vers-comp-button-group-gap": "var(--spacing-4)",
  }}
>
  <Button variant="primary">Custom</Button>
  <Button variant="secondary">Gap</Button>
  <Button variant="outline">Override</Button>
</ButtonGroup>`,
    language: "tsx",
  },
];

export const buttonGroupInstallation = {
  code: `import { Button, ButtonGroup } from "@versaur/react";

export function App() {
  return (
    <ButtonGroup gap="md" direction="horizontal" align="center" wrap="nowrap">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  );
}`,
  language: "tsx",
};

export function ButtonGroupPreview() {
  return (
    <div>
      <h2>ButtonGroup Component</h2>
      <p>
        Container component for grouping multiple buttons with customizable
        spacing, direction, alignment, and wrap behavior.
      </p>
    </div>
  );
}
