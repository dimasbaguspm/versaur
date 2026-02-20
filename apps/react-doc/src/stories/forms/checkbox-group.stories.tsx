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
  args: {
    value: [],
    onChange: () => {},
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

/**
 * Default checkbox group with basic vertical layout.
 */
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

/**
 * Checkbox group with a label.
 */
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

/**
 * Checkbox group with helper text for additional guidance.
 */
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

/**
 * Checkbox group with error state and validation message.
 */
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

/**
 * Showcase layout direction: row and column orientations.
 */
export const Direction: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Row</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <CheckboxGroup {...args} value={value} onChange={setValue} direction="row" label="Horizontal">
              <CheckboxGroup.Option value="small">Small</CheckboxGroup.Option>
              <CheckboxGroup.Option value="medium">Medium</CheckboxGroup.Option>
              <CheckboxGroup.Option value="large">Large</CheckboxGroup.Option>
            </CheckboxGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Column</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <CheckboxGroup {...args} value={value} onChange={setValue} direction="column" label="Vertical">
              <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
              <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
              <CheckboxGroup.Option value="option3">Option 3</CheckboxGroup.Option>
            </CheckboxGroup>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Showcase checkbox group states: disabled and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        {(() => {
          const [value] = useState<string[]>(["option1"])
          return (
            <CheckboxGroup {...args} value={value} onChange={() => {}} disabled label="Disabled">
              <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
              <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
            </CheckboxGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <CheckboxGroup {...args} value={value} onChange={setValue} required label="Required">
              <CheckboxGroup.Option value="accept">Accept terms</CheckboxGroup.Option>
              <CheckboxGroup.Option value="confirm">Confirm info</CheckboxGroup.Option>
            </CheckboxGroup>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Checkbox group with pre-selected options.
 */
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
