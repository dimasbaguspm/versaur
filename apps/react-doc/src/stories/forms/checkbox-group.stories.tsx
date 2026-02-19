import type { Meta, StoryObj } from "@storybook/react"
import { CheckboxGroup } from "@versaur/react/forms"
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
  },
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/CheckboxGroup",
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue}>
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option3">Option 3</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} label="Features">
        <CheckboxGroup.Option value="analytics">Analytics</CheckboxGroup.Option>
        <CheckboxGroup.Option value="reporting">Reporting</CheckboxGroup.Option>
        <CheckboxGroup.Option value="export">Export</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const WithHelper: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
        label="Permissions"
        helper="Select all permissions that apply"
      >
        <CheckboxGroup.Option value="read">Read</CheckboxGroup.Option>
        <CheckboxGroup.Option value="write">Write</CheckboxGroup.Option>
        <CheckboxGroup.Option value="delete">Delete</CheckboxGroup.Option>
        <CheckboxGroup.Option value="admin">Admin</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
        label="Required fields"
        error="At least one option must be selected"
      >
        <CheckboxGroup.Option value="agree">I agree to terms</CheckboxGroup.Option>
        <CheckboxGroup.Option value="privacy">I agree to privacy policy</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const Horizontal: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} direction="row" label="Size">
        <CheckboxGroup.Option value="small">Small</CheckboxGroup.Option>
        <CheckboxGroup.Option value="medium">Medium</CheckboxGroup.Option>
        <CheckboxGroup.Option value="large">Large</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} direction="column" label="Results">
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option3">Option 3</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["option1"])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} disabled label="Disabled Group">
        <CheckboxGroup.Option value="option1">Disabled 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Disabled 2</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} required label="Required Options">
        <CheckboxGroup.Option value="accept">Accept terms</CheckboxGroup.Option>
        <CheckboxGroup.Option value="confirm">Confirm information</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}

export const PreSelected: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["nodejs", "python"])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} label="Languages">
        <CheckboxGroup.Option value="javascript">JavaScript</CheckboxGroup.Option>
        <CheckboxGroup.Option value="typescript">TypeScript</CheckboxGroup.Option>
        <CheckboxGroup.Option value="python">Python</CheckboxGroup.Option>
        <CheckboxGroup.Option value="nodejs">Node.js</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}
