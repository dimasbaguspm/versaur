import type { Meta, StoryObj } from "@storybook/react"
import { ChipSingleInput } from "@versaur/react/forms"
import { useState } from "react"

const meta = {
  argTypes: {
    gap: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
  },
  args: {
    value: undefined,
    onChange: () => {},
  },
  component: ChipSingleInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/ChipSingleInput",
} satisfies Meta<typeof ChipSingleInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={setValue} label="Select size">
          <ChipSingleInput.Option value="xs">XS</ChipSingleInput.Option>
          <ChipSingleInput.Option value="s">S</ChipSingleInput.Option>
          <ChipSingleInput.Option value="m">M</ChipSingleInput.Option>
          <ChipSingleInput.Option value="l">L</ChipSingleInput.Option>
          <ChipSingleInput.Option value="xl">XL</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
  args: {
    gap: "2",
  },
}

export const WithHelper: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput
          {...args}
          value={value}
          onChange={setValue}
          label="Choose a color"
          helper="Select your favorite"
        >
          <ChipSingleInput.Option value="red">Red</ChipSingleInput.Option>
          <ChipSingleInput.Option value="blue">Blue</ChipSingleInput.Option>
          <ChipSingleInput.Option value="green">Green</ChipSingleInput.Option>
          <ChipSingleInput.Option value="yellow">Yellow</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
}

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={setValue} label="Required" error="Please select an option">
          <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
          <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
          <ChipSingleInput.Option value="3">Option 3</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value] = useState<string>("2")
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={() => {}} label="Disabled" disabled>
          <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
          <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
          <ChipSingleInput.Option value="3">Option 3</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
}

export const NoWrap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("option1")
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput
          {...args}
          value={value}
          onChange={setValue}
          label="No wrapping"
          helper="Chips stay on one line"
          wrap={false}
        >
          <ChipSingleInput.Option value="option1">Very Long Option Text</ChipSingleInput.Option>
          <ChipSingleInput.Option value="option2">Another Very Long Option</ChipSingleInput.Option>
          <ChipSingleInput.Option value="option3">One More Long Option</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
}

export const LargeGap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={setValue} label="Large spacing" gap="4">
          <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
          <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
          <ChipSingleInput.Option value="3">Option 3</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
  args: {
    gap: "4",
  },
}

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={setValue} label="Priority" required>
          <ChipSingleInput.Option value="low">Low</ChipSingleInput.Option>
          <ChipSingleInput.Option value="medium">Medium</ChipSingleInput.Option>
          <ChipSingleInput.Option value="high">High</ChipSingleInput.Option>
          <ChipSingleInput.Option value="critical">Critical</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    )
  },
}

export const ManyOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipSingleInput {...args} value={value} onChange={setValue} label="Choose a number">
          {Array.from({ length: 12 }, (_, i) => (
            <ChipSingleInput.Option key={i} value={String(i + 1)}>
              {i + 1}
            </ChipSingleInput.Option>
          ))}
        </ChipSingleInput>
      </div>
    )
  },
}
