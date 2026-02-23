import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Checkbox",
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default checkbox with interactive state.
 */
export const Default: Story = {
  args: {
    children: "Accept terms and conditions",
  },
}

/**
 * Showcase all checkbox states: normal, checked, disabled, disabled+checked, and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Normal</div>
        <Checkbox {...args}>Unchecked</Checkbox>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Checked</div>
        <Checkbox {...args} defaultChecked>
          Checked
        </Checkbox>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Disabled</div>
        <Checkbox {...args} disabled>
          Disabled
        </Checkbox>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Disabled+Checked</div>
        <Checkbox {...args} disabled defaultChecked>
          Disabled+Checked
        </Checkbox>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Required</div>
        <Checkbox {...args} required>
          Required
        </Checkbox>
      </div>
    </div>
  ),
}
