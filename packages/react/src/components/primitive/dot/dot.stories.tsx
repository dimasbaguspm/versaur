import type { Meta, StoryObj } from "@storybook/react"
import { Dot } from "../index"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning", "info"],
    },
  },
  component: Dot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Dot",
} satisfies Meta<typeof Dot>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default dot component with primary variant
 */
export const Default: Story = {
  args: {
    variant: "primary",
  },
}

/**
 * All available variants displayed together
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Dot {...args} variant="primary" />
      <Dot {...args} variant="secondary" />
      <Dot {...args} variant="success" />
      <Dot {...args} variant="danger" />
      <Dot {...args} variant="warning" />
      <Dot {...args} variant="info" />
    </div>
  ),
}

/**
 * All available sizes demonstrated
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Dot {...args} size="small" />
      <Dot {...args} size="medium" />
    </div>
  ),
}
