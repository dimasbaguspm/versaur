"use client"

import type { ComponentType } from "react"

import { Avatar } from "../avatar"
import { Card } from "../card/card"
import { Text } from "../text"
import { Tooltip } from "./tooltip.js"

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
      <button {...Tooltip.getTooltipTriggerProps({ id: "basic-tooltip" })}>Hover me</button>
      <Tooltip id="basic-tooltip" placement="top">
        <Tooltip.Text>This is a helpful tooltip</Tooltip.Text>
      </Tooltip>
    </div>
  )
}

/**
 * All placement variants
 */
function PlacementsPreview() {
  const placements: (
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
  )[] = [
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
  ]

  return (
    <div
      style={{
        alignItems: "center",
        display: "grid",
        gap: "3rem",
        gridTemplateColumns: "repeat(4, 1fr)",
        justifyItems: "center",
        padding: "4rem",
      }}
    >
      {placements.map((placement) => (
        <div key={placement} style={{ position: "relative" }}>
          <button {...Tooltip.getTooltipTriggerProps({ id: `tooltip-${placement}` })}>{placement}</button>
          <Tooltip id={`tooltip-${placement}`} placement={placement}>
            <Tooltip.Text>Tooltip at {placement}</Tooltip.Text>
          </Tooltip>
        </div>
      ))}
    </div>
  )
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
      <button {...Tooltip.getTooltipTriggerProps({ id: "wide-tooltip" })}>Wide tooltip</button>
      <Tooltip id="wide-tooltip" placement="top">
        <Tooltip.Text maxWidth="400px">
          This tooltip has a custom maximum width of 400 pixels and will wrap text across multiple lines if needed.
        </Tooltip.Text>
      </Tooltip>
    </div>
  )
}

/**
 * Line clamping example
 */
function LineClampPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "clamped-2-lines" })}>2 lines (default)</button>
        <Tooltip id="clamped-2-lines" placement="top">
          <Tooltip.Text maxWidth="200px">
            Line one is here. Line two is here. Line three will be cut off and hidden with ellipsis.
          </Tooltip.Text>
        </Tooltip>
      </div>

      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "clamped-1-line" })}>1 line only</button>
        <Tooltip id="clamped-1-line" placement="top">
          <Tooltip.Text maxWidth="200px" maxLines={1}>
            This long text will be completely cut off because it exceeds the single line limit.
          </Tooltip.Text>
        </Tooltip>
      </div>
    </div>
  )
}

/**
 * Trigger type example - when to show tooltip
 */
function TriggerTypePreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <div>
        <button {...Tooltip.getTooltipTriggerProps({ id: "trigger-hover" })}>Hover me</button>
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
  )
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
                backgroundColor: "#3b82f6",
                border: "none",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
                flex: 1,
                fontSize: "12px",
                padding: "6px 12px",
              }}
            >
              Follow
            </button>
          </Card.Footer>
        </Card>
      </Tooltip>
    </div>
  )
}

/* ============================================================================
   Preview Sections Configuration
   ========================================================================= */

export interface TooltipSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

export const tooltipSections: TooltipSection[] = [
  {
    code: `const triggerProps = Tooltip.getTooltipTriggerProps({ id: "basic-tooltip" });

<button {...triggerProps}>Hover me</button>
<Tooltip id="basic-tooltip" placement="top">
  <Tooltip.Text>This is a helpful tooltip</Tooltip.Text>
</Tooltip>`,
    key: "basic",
    language: "tsx",
    preview: BasicTooltipPreview,
    title: "Basic Tooltip",
  },
  {
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
    key: "placements",
    language: "tsx",
    preview: PlacementsPreview,
    title: "All Placements",
  },
  {
    code: `<button {...Tooltip.getTooltipTriggerProps({ id: "wide-tooltip" })}>
  Wide tooltip
</button>
<Tooltip id="wide-tooltip" placement="top">
  <Tooltip.Text maxWidth="400px">
    This tooltip has a custom maximum width of 400 pixels and will wrap text across multiple lines if needed.
  </Tooltip.Text>
</Tooltip>`,
    key: "max-width",
    language: "tsx",
    preview: CustomMaxWidthPreview,
    title: "Custom Max-Width",
  },
  {
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
    key: "line-clamp",
    language: "tsx",
    preview: LineClampPreview,
    title: "Line Clamping",
  },
  {
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
    key: "trigger-type",
    language: "tsx",
    preview: TriggerTypePreview,
    title: "Trigger Type",
  },
  {
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
    key: "custom-ui",
    language: "tsx",
    preview: CustomUIPreview,
    title: "Custom UI Content",
  },
]

/**
 * Props metadata for API reference table
 */
export const tooltipProps = [
  {
    description: "Unique identifier matching the popovertarget on trigger",
    name: "id",
    required: true,
    type: "string",
  },
  {
    description: "Tooltip content (can use Tooltip.Text or any custom component)",
    name: "children",
    required: true,
    type: "ReactNode",
  },
  {
    defaultValue: '"top"',
    description:
      "Placement relative to trigger (top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end)",
    name: "placement",
    required: false,
    type: "Tooltip.Placement",
  },
  {
    defaultValue: "8",
    description: "Gap between tooltip and trigger in pixels",
    name: "gap",
    required: false,
    type: "number",
  },
  {
    defaultValue: '"all"',
    description: "When to show tooltip: focus, hover, or both (all)",
    name: "triggerType",
    required: false,
    type: "'focus' | 'hover' | 'all'",
  },
  {
    description: "Text variant with optional text-specific styling",
    name: "Tooltip.Text",
    required: false,
    type: "Component",
  },
  {
    defaultValue: '"280px"',
    description: "Maximum width CSS value for text (e.g. 400px, 20rem)",
    name: "Tooltip.Text.maxWidth",
    required: false,
    type: "string",
  },
  {
    defaultValue: "2",
    description: "Maximum number of lines before text is clamped with ellipsis",
    name: "Tooltip.Text.maxLines",
    required: false,
    type: "number",
  },
]
