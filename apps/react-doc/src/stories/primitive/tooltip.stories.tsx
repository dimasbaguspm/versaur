import type { Meta, StoryObj } from "@storybook/react"
import { HelpCircleIcon } from "@versaur/icons"
import { Button, Text, Tooltip } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    placement: {
      control: "select",
      options: [
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
      ],
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

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="default-tooltip" placement="bottom">
        <Tooltip.Text>This is a helpful tooltip message</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "default-tooltip" })}>Hover me</Button>
    </div>
  ),
  args: {
    placement: "bottom",
    triggerType: "hover",
  },
}

export const Top: Story = {
  render: (args) => (
    <div style={{ padding: "4rem 2rem 2rem" }}>
      <Tooltip {...args} id="top-tooltip" placement="top">
        <Tooltip.Text>Tooltip above the element</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "top-tooltip" })}>Top Tooltip</Button>
    </div>
  ),
  args: {
    placement: "top",
  },
}

export const Bottom: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="bottom-tooltip" placement="bottom">
        <Tooltip.Text>Tooltip below the element</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "bottom-tooltip" })}>Bottom Tooltip</Button>
    </div>
  ),
  args: {
    placement: "bottom",
  },
}

export const Left: Story = {
  render: (args) => (
    <div style={{ padding: "2rem", marginLeft: "10rem" }}>
      <Tooltip {...args} id="left-tooltip" placement="left">
        <Tooltip.Text>Tooltip to the left</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "left-tooltip" })}>Left Tooltip</Button>
    </div>
  ),
  args: {
    placement: "left",
  },
}

export const Right: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="right-tooltip" placement="right">
        <Tooltip.Text>Tooltip to the right</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "right-tooltip" })}>Right Tooltip</Button>
    </div>
  ),
  args: {
    placement: "right",
  },
}

export const OnIcon: Story = {
  render: (args) => (
    <div style={{ padding: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Text>Information</Text>
      <Tooltip {...args} id="icon-tooltip" placement="top">
        <Tooltip.Text>Click for more details</Tooltip.Text>
      </Tooltip>
      <button
        {...Tooltip.getTooltipTriggerProps({ id: "icon-tooltip" })}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <HelpCircleIcon width={20} height={20} />
      </button>
    </div>
  ),
  args: {
    placement: "top",
    triggerType: "hover",
  },
}

export const LongText: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="long-tooltip" placement="bottom">
        <Tooltip.Text maxWidth="250px">
          This is a longer tooltip message that might wrap to multiple lines. It provides more detailed information
          about the element.
        </Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "long-tooltip" })}>Hover for details</Button>
    </div>
  ),
  args: {
    placement: "bottom",
  },
}

export const FocusOnly: Story = {
  render: (args) => (
    <div style={{ padding: "2rem" }}>
      <Tooltip {...args} id="focus-tooltip" placement="bottom" triggerType="focus">
        <Tooltip.Text>Shows on focus only</Tooltip.Text>
      </Tooltip>
      <Button {...Tooltip.getTooltipTriggerProps({ id: "focus-tooltip", triggerType: "focus" })}>Focus me</Button>
    </div>
  ),
  args: {
    placement: "bottom",
    triggerType: "focus",
  },
}

export const HelpIcon: Story = {
  render: (args) => (
    <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
      <Text>Need help?</Text>
      <Tooltip {...args} id="help-tooltip" placement="right">
        <Tooltip.Text>Click here to get assistance or contact support</Tooltip.Text>
      </Tooltip>
      <button
        {...Tooltip.getTooltipTriggerProps({ id: "help-tooltip" })}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <HelpCircleIcon width={24} height={24} />
      </button>
    </div>
  ),
  args: {
    placement: "right",
  },
}
