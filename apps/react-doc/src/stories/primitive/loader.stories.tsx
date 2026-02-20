import type { Meta, StoryObj } from "@storybook/react"
import { Loader } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "lg"],
    },
    type: {
      control: "select",
      options: ["spinner", "bar"],
    },
  },
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Loader",
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default loader component with spinner type
 */
export const Default: Story = {
  args: {
    type: "spinner",
  },
}

/**
 * All available loader types demonstrated
 */
export const Types: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Loader {...args} type="spinner" />
        <span style={{ fontSize: "0.875rem", color: "#666" }}>Spinner</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Loader {...args} type="bar" />
        <span style={{ fontSize: "0.875rem", color: "#666" }}>Bar</span>
      </div>
    </div>
  ),
}

/**
 * All available sizes demonstrated
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#666" }}>Spinner</div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Loader {...args} type="spinner" size="sm" />
          <span style={{ fontSize: "0.875rem", color: "#666" }}>Small</span>
          <Loader {...args} type="spinner" size="lg" />
          <span style={{ fontSize: "0.875rem", color: "#666" }}>Large</span>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#666" }}>Bar</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Loader {...args} type="bar" size="sm" />
            <span style={{ fontSize: "0.875rem", color: "#666" }}>Small</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Loader {...args} type="bar" size="lg" />
            <span style={{ fontSize: "0.875rem", color: "#666" }}>Large</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

/**
 * Loader examples with text content
 */
export const WithText: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Loader {...args} type="spinner" size="sm">
        Loading...
      </Loader>
      <Loader {...args} type="bar">
        Processing request
      </Loader>
    </div>
  ),
}
