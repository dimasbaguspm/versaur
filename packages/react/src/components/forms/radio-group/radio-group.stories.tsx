import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { RadioGroup } from "../index"

const meta = {
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
  args: {
    value: undefined,
    onChange: () => {},
  },
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/RadioGroup",
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default radio group with basic vertical layout.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="default">
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
        <RadioGroup.Option value="option3">Option 3</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

/**
 * Radio group with label and helper text.
 */
export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={setValue}
        name="labeled"
        label="Choose a plan"
        helper="Select the plan that works best for you"
      >
        <RadioGroup.Option value="basic">Basic - $10/month</RadioGroup.Option>
        <RadioGroup.Option value="pro">Pro - $50/month</RadioGroup.Option>
        <RadioGroup.Option value="enterprise">Enterprise - Custom pricing</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

/**
 * Radio group with error state and validation message.
 */
export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={setValue}
        name="error"
        label="Selection"
        error="Please select an option"
      >
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

/**
 * Radio group with row direction layout.
 */
export const RowDirection: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="horizontal" direction="row" label="Alignment">
        <RadioGroup.Option value="left">Left</RadioGroup.Option>
        <RadioGroup.Option value="center">Center</RadioGroup.Option>
        <RadioGroup.Option value="right">Right</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

/**
 * Disabled radio group with all options disabled.
 */
export const Disabled: Story = {
  render: (args) => {
    const [value] = useState<string>("option1")
    return (
      <RadioGroup {...args} value={value} onChange={() => {}} name="disabled" disabled label="Disabled">
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

/**
 * Required radio group with asterisk indicator.
 */
export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="required" required label="Required Field">
        <RadioGroup.Option value="yes">Yes</RadioGroup.Option>
        <RadioGroup.Option value="no">No</RadioGroup.Option>
      </RadioGroup>
    )
  },
}
