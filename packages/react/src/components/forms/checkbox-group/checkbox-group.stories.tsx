import type { Meta, StoryObj } from "@storybook/react"
import { CheckboxGroup } from "../index"
import { Text } from "../../primitive/index"
import { useState } from "react"

const meta = {
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
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
 * Default checkbox group with label and helper text.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <CheckboxGroup {...args} value={value} onChange={setValue} label="Features" helper="Select all that apply">
        <CheckboxGroup.Option value="analytics">Analytics</CheckboxGroup.Option>
        <CheckboxGroup.Option value="reporting">Reporting</CheckboxGroup.Option>
        <CheckboxGroup.Option value="export">Export</CheckboxGroup.Option>
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
        <Text size="sm" weight="medium">
          Row
        </Text>
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
        <Text size="sm" weight="medium">
          Column
        </Text>
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
 * Practical example with error validation message.
 */
export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    const hasError = value.length === 0
    return (
      <CheckboxGroup
        {...args}
        value={value}
        onChange={setValue}
        label="Permissions"
        helper="Select permissions that apply to this role"
        error={hasError ? "At least one permission must be selected" : undefined}
      >
        <CheckboxGroup.Option value="read">Read</CheckboxGroup.Option>
        <CheckboxGroup.Option value="write">Write</CheckboxGroup.Option>
        <CheckboxGroup.Option value="delete">Delete</CheckboxGroup.Option>
        <CheckboxGroup.Option value="admin">Admin</CheckboxGroup.Option>
      </CheckboxGroup>
    )
  },
}
