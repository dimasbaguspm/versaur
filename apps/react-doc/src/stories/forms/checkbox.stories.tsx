import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@versaur/react/forms"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
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
 * Default checkbox in unchecked state.
 */
export const Default: Story = {
  args: {
    children: "Checkbox label",
  },
}

/**
 * Showcase all checkbox states: normal, checked, disabled, disabled+checked, invalid, invalid+checked, and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Normal</div>
          <Checkbox {...args}>Normal</Checkbox>
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
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Invalid</div>
          <Checkbox {...args} invalid>
            Invalid
          </Checkbox>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Invalid+Checked</div>
          <Checkbox {...args} invalid defaultChecked>
            Invalid+Checked
          </Checkbox>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Required</div>
          <Checkbox {...args} required>
            Required
          </Checkbox>
        </div>
      </div>
    </div>
  ),
}

/**
 * Checkbox with a long text label that wraps to multiple lines.
 */
export const WithLongLabel: Story = {
  args: {
    children: "I agree to the terms and conditions of service",
    id: "terms-checkbox",
  },
}

/**
 * Checkbox paired with helper text to provide additional context.
 */
export const WithDescription: Story = {
  render: (args) => (
    <div>
      <Checkbox {...args} id="newsletter" />
      <p style={{ fontSize: "0.875rem", color: "gray", marginTop: "0.5rem" }}>
        We'll send you updates about new features
      </p>
    </div>
  ),
  args: {
    children: "Subscribe to newsletter",
  },
}
