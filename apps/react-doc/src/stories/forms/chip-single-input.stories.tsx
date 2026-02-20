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

/**
 * Default chip single input with multiple options.
 */
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

/**
 * Chip single input with helper text for additional guidance.
 */
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

/**
 * Chip single input with error state and validation message.
 */
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

/**
 * Showcase chip single input states: disabled and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        {(() => {
          const [value] = useState<string>("2")
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipSingleInput {...args} value={value} onChange={() => {}} label="Disabled" disabled>
                <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
                <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
                <ChipSingleInput.Option value="3">Option 3</ChipSingleInput.Option>
              </ChipSingleInput>
            </div>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        {(() => {
          const [value, setValue] = useState<string>()
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipSingleInput {...args} value={value} onChange={setValue} label="Priority" required>
                <ChipSingleInput.Option value="low">Low</ChipSingleInput.Option>
                <ChipSingleInput.Option value="medium">Medium</ChipSingleInput.Option>
                <ChipSingleInput.Option value="high">High</ChipSingleInput.Option>
              </ChipSingleInput>
            </div>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Showcase all gap spacing options: 1, 2, 3, and 4.
 */
export const GapOptions: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {(["1", "2", "3", "4"] as const).map((gapValue) => (
        <div key={gapValue} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Gap: {gapValue}</div>
          {(() => {
            const [value, setValue] = useState<string>()
            return (
              <div style={{ width: "100%", maxWidth: "400px" }}>
                <ChipSingleInput {...args} value={value} onChange={setValue} label="Choose" gap={gapValue}>
                  <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
                  <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
                  <ChipSingleInput.Option value="3">Option 3</ChipSingleInput.Option>
                  <ChipSingleInput.Option value="4">Option 4</ChipSingleInput.Option>
                </ChipSingleInput>
              </div>
            )
          })()}
        </div>
      ))}
    </div>
  ),
}
