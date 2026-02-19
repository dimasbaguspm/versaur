import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "@versaur/react/forms"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
  },
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/Radio",
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Radio option",
    name: "option",
  },
}

export const Checked: Story = {
  args: {
    children: "Selected radio",
    defaultChecked: true,
    name: "option",
  },
}

export const Unchecked: Story = {
  args: {
    children: "Unselected radio",
    defaultChecked: false,
    name: "option",
  },
}

export const Filled: Story = {
  args: {
    children: "Filled variant",
    variant: "filled",
    name: "filled",
  },
}

export const Outline: Story = {
  args: {
    children: "Outline variant",
    variant: "outline",
    name: "outline",
  },
}

export const Small: Story = {
  args: {
    children: "Small radio",
    size: "small",
    name: "small",
  },
}

export const Large: Story = {
  args: {
    children: "Large radio",
    size: "large",
    name: "large",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled radio",
    disabled: true,
    name: "disabled",
  },
}

export const DisabledChecked: Story = {
  args: {
    children: "Disabled selected radio",
    disabled: true,
    defaultChecked: true,
    name: "disabled-checked",
  },
}

export const Invalid: Story = {
  args: {
    children: "Invalid radio",
    invalid: true,
    name: "invalid",
  },
}

export const InvalidChecked: Story = {
  args: {
    children: "Invalid selected radio",
    invalid: true,
    defaultChecked: true,
    name: "invalid-checked",
  },
}

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Radio name="options" defaultChecked>
        Option 1
      </Radio>
      <Radio name="options">Option 2</Radio>
      <Radio name="options">Option 3</Radio>
    </div>
  ),
}

export const SmallGroup: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Radio name="small-options" size="small" defaultChecked>
        Small 1
      </Radio>
      <Radio name="small-options" size="small">
        Small 2
      </Radio>
      <Radio name="small-options" size="small">
        Small 3
      </Radio>
    </div>
  ),
}
