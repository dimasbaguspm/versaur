import type { Meta, StoryObj } from "@storybook/react"
import { useId } from "react"

import { Tooltip } from "../index"

const meta = {
  argTypes: {
    placement: {
      control: "select",
      options: [undefined, "top", "bottom", "left", "right"],
    },
    triggerType: {
      control: "select",
      options: ["hover", "focus", "all"],
    },
  },
  args: {
    id: "tooltip",
    children: undefined,
  },
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Tooltip",
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default Tooltip component with auto-placement that detects best direction based on viewport space.
 */
export const Default: Story = {
  render: (args) => {
    const id = useId()
    return (
      <div style={{ padding: "2rem" }}>
        <Tooltip {...args} id={id}>
          <Tooltip.Text>This is a helpful tooltip message</Tooltip.Text>
        </Tooltip>
        <button {...Tooltip.getTooltipTriggerProps({ id })}>Hover me</button>
      </div>
    )
  },
  args: {
    triggerType: "hover",
  },
}

/**
 * Auto-placement in action: position the button in different corners to see the tooltip
 * automatically adjust its placement based on available viewport space.
 */
export const AutoPlacement: Story = {
  render: (args) => (
    <div
      style={{
        padding: "2rem",
        minHeight: "400px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ position: "relative" }}>
        <Tooltip {...args} id="story-auto-tooltip">
          <Tooltip.Text>This tooltip automatically positions itself in the direction with most space</Tooltip.Text>
        </Tooltip>
        <button {...Tooltip.getTooltipTriggerProps({ id: "story-auto-tooltip" })}>Hover me</button>
      </div>
    </div>
  ),
  args: {
    triggerType: "hover",
  },
  parameters: {
    layout: "fullscreen",
  },
}

/**
 * Showcase all placement variants in a grid.
 * Displays all placement options: auto (default), top, bottom, left, right
 */
export const Placements: Story = {
  render: (args) => {
    const placements: Array<[string, "top" | "bottom" | "left" | "right" | undefined]> = [
      ["Auto", undefined],
      ["Top", "top"],
      ["Bottom", "bottom"],
      ["Left", "left"],
      ["Right", "right"],
    ]

    return (
      <div style={{ padding: "4rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4rem",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {placements.map(([label, placement]) => (
            <div
              key={placement}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
            >
              <Tooltip {...args} id={`story-placement-${placement}`} placement={placement} gap={16}>
                <Tooltip.Text>{label}</Tooltip.Text>
              </Tooltip>
              <button {...Tooltip.getTooltipTriggerProps({ id: `story-placement-${placement}` })}>{label}</button>
            </div>
          ))}
        </div>
      </div>
    )
  },
  args: {
    triggerType: "hover",
  },
}

/**
 * Showcase all trigger type variants: hover, focus, and all.
 * Demonstrates how tooltips are triggered based on user interactions.
 */
export const TriggerTypes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Hover Trigger</div>
        <Tooltip {...args} id="story-hover-tooltip" placement="bottom" triggerType="hover">
          <Tooltip.Text>Shows on hover</Tooltip.Text>
        </Tooltip>
        <button {...Tooltip.getTooltipTriggerProps({ id: "story-hover-tooltip" })}>Hover me</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Focus Trigger</div>
        <Tooltip {...args} id="story-focus-tooltip" triggerType="focus">
          <Tooltip.Text>Shows on focus</Tooltip.Text>
        </Tooltip>
        <button {...Tooltip.getTooltipTriggerProps({ id: "story-focus-tooltip" })}>Focus me</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>All Trigger</div>
        <Tooltip {...args} id="story-all-tooltip" triggerType="all">
          <Tooltip.Text>Shows on hover or focus</Tooltip.Text>
        </Tooltip>
        <button {...Tooltip.getTooltipTriggerProps({ id: "story-all-tooltip" })}>Hover or focus</button>
      </div>
    </div>
  ),
  args: {
    placement: "bottom",
  },
}

/**
 * Showcase tooltip with longer content that wraps to multiple lines.
 */
export const LongContent: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="story-long-tooltip">
        <Tooltip.Text maxWidth="250px">
          This is a longer tooltip message that spans multiple lines. It provides additional context and detailed
          information about the element or action.
        </Tooltip.Text>
      </Tooltip>
      <button {...Tooltip.getTooltipTriggerProps({ id: "story-long-tooltip" })}>Hover for details</button>
    </div>
  ),
  args: {
    placement: "bottom",
    triggerType: "hover",
  },
}
