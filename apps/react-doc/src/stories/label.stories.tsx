import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@versaur/react/forms"

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
  title: "Components/Utilities/Label",
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Form Label",
  },
}

export const Required: Story = {
  args: {
    children: "Required Field",
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Label",
    disabled: true,
  },
}

export const DisabledRequired: Story = {
  args: {
    children: "Disabled Required Field",
    disabled: true,
    required: true,
  },
}

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
