import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Label",
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default label with standard styling.
 */
export const Default: Story = {
  args: {
    children: "Form Label",
  },
}

/**
 * Showcase all label states: normal, required, disabled, and disabled+required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Normal</div>
        <Label {...args}>Normal Label</Label>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        <Label {...args} required>
          Required Label
        </Label>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        <Label {...args} disabled>
          Disabled Label
        </Label>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled+Required</div>
        <Label {...args} disabled required>
          Disabled Required
        </Label>
      </div>
    </div>
  ),
}

/**
 * Label with htmlFor attribute to associate with an input element.
 */
export const WithHtmlFor: Story = {
  render: (args) => (
    <div>
      <Label {...args} htmlFor="example-input">
        Email Address
      </Label>
      <input id="example-input" type="email" placeholder="Enter email" />
    </div>
  ),
  args: {
    required: true,
  },
}

/**
 * Label paired with helper text to provide additional context.
 */
export const WithHelperText: Story = {
  render: (args) => (
    <div>
      <Label {...args} htmlFor="password-input">
        Password
      </Label>
      <input id="password-input" type="password" placeholder="Enter password" />
      <p style={{ fontSize: "0.875rem", color: "gray" }}>Minimum 8 characters required</p>
    </div>
  ),
  args: {
    required: true,
  },
}
