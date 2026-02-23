import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Radio",
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default radio button in unchecked state.
 */
export const Default: Story = {
  args: {
    children: "Radio option",
    name: "option",
  },
}

/**
 * Checked radio button.
 */
export const Checked: Story = {
  args: {
    children: "Radio option",
    defaultChecked: true,
    name: "option",
  },
}

/**
 * Disabled radio button (unchecked).
 */
export const Disabled: Story = {
  args: {
    children: "Disabled radio",
    disabled: true,
    name: "disabled",
  },
}

/**
 * Disabled and checked radio button.
 */
export const DisabledChecked: Story = {
  args: {
    children: "Disabled radio",
    defaultChecked: true,
    disabled: true,
    name: "disabled-checked",
  },
}
