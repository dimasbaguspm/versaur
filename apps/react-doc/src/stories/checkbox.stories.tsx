import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@versaur/react"

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
  title: "Components/Forms/Checkbox",
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Checkbox label",
  },
}

export const Checked: Story = {
  args: {
    children: "Checked checkbox",
    defaultChecked: true,
  },
}

export const Unchecked: Story = {
  args: {
    children: "Unchecked checkbox",
    defaultChecked: false,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled checkbox",
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    children: "Disabled checked checkbox",
    disabled: true,
    defaultChecked: true,
  },
}

export const Required: Story = {
  args: {
    children: "Required checkbox",
    required: true,
  },
}

export const Invalid: Story = {
  args: {
    children: "Invalid checkbox",
    invalid: true,
  },
}

export const InvalidChecked: Story = {
  args: {
    children: "Invalid selected checkbox",
    invalid: true,
    defaultChecked: true,
  },
}

export const WithLongLabel: Story = {
  args: {
    children: "I agree to the terms and conditions of service",
    id: "terms-checkbox",
  },
}

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
