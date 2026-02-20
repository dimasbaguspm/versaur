import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@versaur/react/forms"
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
 * Radio group with a label.
 */
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

/**
 * Radio group with helper text for additional guidance.
 */
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
 * Showcase all radio group variants: filled and outline.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Filled</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="filled" variant="filled" label="Type">
              <RadioGroup.Option value="typeA">Type A</RadioGroup.Option>
              <RadioGroup.Option value="typeB">Type B</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Outline</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="outline" variant="outline" label="Style">
              <RadioGroup.Option value="outlined">Outlined</RadioGroup.Option>
              <RadioGroup.Option value="filled2">Filled</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Showcase all radio group sizes: small, medium, and large.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Small</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="small" size="small" label="Small">
              <RadioGroup.Option value="small1">Small 1</RadioGroup.Option>
              <RadioGroup.Option value="small2">Small 2</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Large</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="large" size="large" label="Large">
              <RadioGroup.Option value="large1">Large 1</RadioGroup.Option>
              <RadioGroup.Option value="large2">Large 2</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
    </div>
  ),
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
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup
              {...args}
              value={value}
              onChange={setValue}
              name="horizontal"
              direction="row"
              label="Horizontal"
            >
              <RadioGroup.Option value="left">Left</RadioGroup.Option>
              <RadioGroup.Option value="center">Center</RadioGroup.Option>
              <RadioGroup.Option value="right">Right</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Column</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="vertical" direction="column" label="Vertical">
              <RadioGroup.Option value="beginner">Beginner</RadioGroup.Option>
              <RadioGroup.Option value="intermediate">Intermediate</RadioGroup.Option>
              <RadioGroup.Option value="advanced">Advanced</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Showcase radio group states: disabled and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        {(() => {
          const [value] = useState<string>("option1")
          return (
            <RadioGroup {...args} value={value} onChange={() => {}} name="disabled" disabled label="Disabled">
              <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
              <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        {(() => {
          const [value, setValue] = useState<string>("")
          return (
            <RadioGroup {...args} value={value} onChange={setValue} name="required" required label="Required">
              <RadioGroup.Option value="req1">Option 1</RadioGroup.Option>
              <RadioGroup.Option value="req2">Option 2</RadioGroup.Option>
            </RadioGroup>
          )
        })()}
      </div>
    </div>
  ),
}
