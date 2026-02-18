import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@versaur/react"
import { useState } from "react"

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
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
  },
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/RadioGroup",
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

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

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="label" label="Choose one">
        <RadioGroup.Option value="yes">Yes</RadioGroup.Option>
        <RadioGroup.Option value="no">No</RadioGroup.Option>
        <RadioGroup.Option value="maybe">Maybe</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const WithHelper: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={setValue}
        name="helper"
        label="Plan"
        helper="Select the plan that works best for you"
      >
        <RadioGroup.Option value="basic">Basic - $10/month</RadioGroup.Option>
        <RadioGroup.Option value="pro">Pro - $50/month</RadioGroup.Option>
        <RadioGroup.Option value="enterprise">Enterprise - Custom pricing</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

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

export const Horizontal: Story = {
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

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="vertical" direction="column" label="Level">
        <RadioGroup.Option value="beginner">Beginner</RadioGroup.Option>
        <RadioGroup.Option value="intermediate">Intermediate</RadioGroup.Option>
        <RadioGroup.Option value="advanced">Advanced</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="filled" variant="filled" label="Type">
        <RadioGroup.Option value="typeA">Type A</RadioGroup.Option>
        <RadioGroup.Option value="typeB">Type B</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Outline: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="outline" variant="outline" label="Style">
        <RadioGroup.Option value="outlined">Outlined</RadioGroup.Option>
        <RadioGroup.Option value="filled2">Filled</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Small: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="small" size="small" label="Small Size">
        <RadioGroup.Option value="small1">Small 1</RadioGroup.Option>
        <RadioGroup.Option value="small2">Small 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="large" size="large" label="Large Size">
        <RadioGroup.Option value="large1">Large 1</RadioGroup.Option>
        <RadioGroup.Option value="large2">Large 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("option1")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="disabled" disabled label="Disabled Group">
        <RadioGroup.Option value="option1">Disabled 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Disabled 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="required" required label="Required">
        <RadioGroup.Option value="req1">Required 1</RadioGroup.Option>
        <RadioGroup.Option value="req2">Required 2</RadioGroup.Option>
      </RadioGroup>
    )
  },
}

export const PreSelected: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("moderate")
    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="preselected" label="Activity Level">
        <RadioGroup.Option value="sedentary">Sedentary</RadioGroup.Option>
        <RadioGroup.Option value="moderate">Moderate</RadioGroup.Option>
        <RadioGroup.Option value="active">Active</RadioGroup.Option>
      </RadioGroup>
    )
  },
}
