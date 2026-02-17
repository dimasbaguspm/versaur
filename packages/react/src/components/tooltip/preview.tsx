"use client";

import { Tooltip } from "./tooltip.js";
import { Card } from "../card/card";
import { Avatar } from "../avatar";
import { Text } from "../text";
import type { ComponentType } from "react";

/**
 * Basic tooltip example
 */
function BasicTooltipPreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <button {...Tooltip.getTooltipTriggerProps({ id: "basic-tooltip" })}>
        Hover me
      </button>
      <Tooltip id="basic-tooltip" placement="top">
        <Tooltip.Text>This is a helpful tooltip</Tooltip.Text>
      </Tooltip>
    </div>
  );
}

/**
 * All placement variants
 */
function PlacementsPreview() {
  const placements: Array<
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end"
  > = [
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "3rem",
        padding: "4rem",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {placements.map((placement) => (
        <div key={placement} style={{ position: "relative" }}>
          <button
            {...Tooltip.getTooltipTriggerProps({ id: `tooltip-${placement}` })}
          >
            {placement}
          </button>
          <Tooltip id={`tooltip-${placement}`} placement={placement}>
            <Tooltip.Text>Tooltip at {placement}</Tooltip.Text>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

/**
 * Custom max-width example
 */
function CustomMaxWidthPreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <button {...Tooltip.getTooltipTriggerProps({ id: "wide-tooltip" })}>
        Wide tooltip
      </button>
      <Tooltip id="wide-tooltip" placement="top">
        <Tooltip.Text maxWidth="400px">
          This tooltip has a custom maximum width of 400 pixels and will wrap
          text across multiple lines if needed.
        </Tooltip.Text>
      </Tooltip>
    </div>
  );
}

/**
 * Line clamping example
 */
function LineClampPreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "clamped-2-lines" })}>
          2 lines (default)
        </button>
        <Tooltip id="clamped-2-lines" placement="top">
          <Tooltip.Text maxWidth="200px">
            Line one is here. Line two is here. Line three will be cut off and
            hidden with ellipsis.
          </Tooltip.Text>
        </Tooltip>
      </div>

      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "clamped-1-line" })}>
          1 line only
        </button>
        <Tooltip id="clamped-1-line" placement="top">
          <Tooltip.Text maxWidth="200px" maxLines={1}>
            This long text will be completely cut off because it exceeds the
            single line limit.
          </Tooltip.Text>
        </Tooltip>
      </div>
    </div>
  );
}

/**
 * Trigger type example - when to show tooltip
 */
function TriggerTypePreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "trigger-hover" })}>
          Hover me
        </button>
        <Tooltip id="trigger-hover" placement="top" triggerType="hover">
          <Tooltip.Text>Shows on hover only</Tooltip.Text>
        </Tooltip>
      </div>

      <div>
        <button
          {...Tooltip.getTooltipTriggerProps({
            id: "trigger-focus",
            triggerType: "focus",
          })}
        >
          Focus me
        </button>
        <Tooltip id="trigger-focus" placement="top" triggerType="focus">
          <Tooltip.Text>Shows on focus only</Tooltip.Text>
        </Tooltip>
      </div>

      <div>
        <button
          {...Tooltip.getTooltipTriggerProps({
            id: "trigger-all",
            triggerType: "all",
          })}
        >
          Hover or focus me
        </button>
        <Tooltip id="trigger-all" placement="top" triggerType="all">
          <Tooltip.Text>Shows on both hover and focus</Tooltip.Text>
        </Tooltip>
      </div>
    </div>
  );
}

/**
 * Custom UI content example
 */
function CustomUIPreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <button
        {...Tooltip.getTooltipTriggerProps({
          id: "user-card",
          triggerType: "focus",
        })}
      >
        View Profile
      </button>
      <Tooltip id="user-card" placement="right" triggerType="focus">
        <Card size="sm">
          <Card.Header gap="md" justify="start">
            <Avatar shape="circle" size="md" variant="primary">
              JD
            </Avatar>
            <div>
              <Text weight="semibold" size="sm">
                John Doe
              </Text>
              <Text size="xs" intent="secondary">
                @johndoe
              </Text>
            </div>
          </Card.Header>
          <Card.Body>
            <Text size="xs" intent="secondary">
              Product Designer at Acme Inc.
            </Text>
          </Card.Body>
          <Card.Footer gap="sm">
            <button
              style={{
                flex: 1,
                padding: "6px 12px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Follow
            </button>
          </Card.Footer>
        </Card>
      </Tooltip>
    </div>
  );
}

/* ============================================================================
   Preview Sections Configuration
   ========================================================================= */

export interface TooltipSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

export const tooltipSections: TooltipSection[] = [
  {
    key: "basic",
    title: "Basic Tooltip",
    preview: BasicTooltipPreview,
    code: `const triggerProps = Tooltip.getTooltipTriggerProps({ id: "basic-tooltip" });

<button {...triggerProps}>Hover me</button>
<Tooltip id="basic-tooltip" placement="top">
  <Tooltip.Text>This is a helpful tooltip</Tooltip.Text>
</Tooltip>`,
    language: "tsx",
  },
  {
    key: "placements",
    title: "All Placements",
    preview: PlacementsPreview,
    code: `const placements = [
  "top", "top-start", "top-end",
  "bottom", "bottom-start", "bottom-end",
  "left", "left-start", "left-end",
  "right", "right-start", "right-end"
];

{placements.map((placement) => (
  <div key={placement}>
    <button {...Tooltip.getTooltipTriggerProps({ id: \`tooltip-\${placement}\` })}>
      {placement}
    </button>
    <Tooltip id={\`tooltip-\${placement}\`} placement={placement}>
      <Tooltip.Text>Tooltip at {placement}</Tooltip.Text>
    </Tooltip>
  </div>
))}`,
    language: "tsx",
  },
  {
    key: "max-width",
    title: "Custom Max-Width",
    preview: CustomMaxWidthPreview,
    code: `<button {...Tooltip.getTooltipTriggerProps({ id: "wide-tooltip" })}>
  Wide tooltip
</button>
<Tooltip id="wide-tooltip" placement="top">
  <Tooltip.Text maxWidth="400px">
    This tooltip has a custom maximum width of 400 pixels and will wrap text across multiple lines if needed.
  </Tooltip.Text>
</Tooltip>`,
    language: "tsx",
  },
  {
    key: "line-clamp",
    title: "Line Clamping",
    preview: LineClampPreview,
    code: `{/* 2 lines (default) */}
<button {...Tooltip.getTooltipTriggerProps({ id: "clamped-2-lines" })}>
  2 lines
</button>
<Tooltip id="clamped-2-lines" placement="top">
  <Tooltip.Text maxWidth="200px">
    Line one is here. Line two is here. Line three will be cut off.
  </Tooltip.Text>
</Tooltip>

{/* 1 line only */}
<button {...Tooltip.getTooltipTriggerProps({ id: "clamped-1-line" })}>
  1 line only
</button>
<Tooltip id="clamped-1-line" placement="top">
  <Tooltip.Text maxWidth="200px" maxLines={1}>
    This long text will be completely cut off because it exceeds the single line limit.
  </Tooltip.Text>
</Tooltip>`,
    language: "tsx",
  },
  {
    key: "trigger-type",
    title: "Trigger Type",
    preview: TriggerTypePreview,
    code: `{/* Shows on hover only */}
<button {...Tooltip.getTooltipTriggerProps({ id: "trigger-hover" })}>
  Hover me
</button>
<Tooltip id="trigger-hover" placement="top" triggerType="hover">
  <Tooltip.Text>Shows on hover only</Tooltip.Text>
</Tooltip>

{/* Shows on focus only */}
<button {...Tooltip.getTooltipTriggerProps({ id: "trigger-focus", triggerType: "focus" })}>
  Focus me
</button>
<Tooltip id="trigger-focus" placement="top" triggerType="focus">
  <Tooltip.Text>Shows on focus only</Tooltip.Text>
</Tooltip>

{/* Shows on both hover and focus */}
<button {...Tooltip.getTooltipTriggerProps({ id: "trigger-all", triggerType: "all" })}>
  Hover or focus me
</button>
<Tooltip id="trigger-all" placement="top" triggerType="all">
  <Tooltip.Text>Shows on both hover and focus</Tooltip.Text>
</Tooltip>`,
    language: "tsx",
  },
  {
    key: "custom-ui",
    title: "Custom UI Content",
    preview: CustomUIPreview,
    code: `<button {...Tooltip.getTooltipTriggerProps({ id: "user-card", triggerType: "focus" })}>
  View Profile
</button>
<Tooltip id="user-card" placement="right" triggerType="focus">
  <Card size="sm">
    <Card.Header gap="md" justify="start">
      <Avatar shape="circle" size="md" variant="primary">
        JD
      </Avatar>
      <div>
        <Text weight="semibold" size="sm">
          John Doe
        </Text>
        <Text size="xs" intent="secondary">
          @johndoe
        </Text>
      </div>
    </Card.Header>
    <Card.Body>
      <Text size="xs" intent="secondary">
        Product Designer at Acme Inc.
      </Text>
    </Card.Body>
    <Card.Footer gap="sm">
      <button style={{ flex: 1, padding: "6px 12px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>
        Follow
      </button>
    </Card.Footer>
  </Card>
</Tooltip>`,
    language: "tsx",
  },
];

/**
 * Props metadata for API reference table
 */
export const tooltipProps = [
  {
    name: "id",
    type: "string",
    required: true,
    description: "Unique identifier matching the popovertarget on trigger",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description:
      "Tooltip content (can use Tooltip.Text or any custom component)",
  },
  {
    name: "placement",
    type: "Tooltip.Placement",
    required: false,
    defaultValue: '"top"',
    description:
      "Placement relative to trigger (top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end)",
  },
  {
    name: "gap",
    type: "number",
    required: false,
    defaultValue: "8",
    description: "Gap between tooltip and trigger in pixels",
  },
  {
    name: "triggerType",
    type: "'focus' | 'hover' | 'all'",
    required: false,
    defaultValue: '"all"',
    description: "When to show tooltip: focus, hover, or both (all)",
  },
  {
    name: "Tooltip.Text",
    type: "Component",
    required: false,
    description: "Text variant with optional text-specific styling",
  },
  {
    name: "Tooltip.Text.maxWidth",
    type: "string",
    required: false,
    defaultValue: '"280px"',
    description: "Maximum width CSS value for text (e.g. 400px, 20rem)",
  },
  {
    name: "Tooltip.Text.maxLines",
    type: "number",
    required: false,
    defaultValue: "2",
    description: "Maximum number of lines before text is clamped with ellipsis",
  },
];
