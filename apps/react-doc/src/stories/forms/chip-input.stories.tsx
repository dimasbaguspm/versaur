import type { Meta, StoryObj } from "@storybook/react"
import { ChipInput } from "@versaur/react/forms"
import { Icon } from "@versaur/react/primitive"
import { CheckIcon, HomeIcon, SettingsIcon, StarIcon } from "@versaur/icons"
import { useState } from "react"

const meta = {
  args: {
    value: undefined,
    onChange: () => {},
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
  },
  component: ChipInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/ChipInput",
} satisfies Meta<typeof ChipInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default chip input in single-selection mode.
 * Click a chip to select it, click again to deselect.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipInput value={value} onChange={setValue} label="Select size" helper="Choose one option">
          <ChipInput.Option value="xs">XS</ChipInput.Option>
          <ChipInput.Option value="s">S</ChipInput.Option>
          <ChipInput.Option value="m">M</ChipInput.Option>
          <ChipInput.Option value="l">L</ChipInput.Option>
          <ChipInput.Option value="xl">XL</ChipInput.Option>
        </ChipInput>
      </div>
    )
  },
}

/**
 * Chip input in multiple-selection mode.
 * Click chips to toggle them on/off. Multiple chips can be selected.
 */
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipInput multiple value={value} onChange={setValue} label="Select interests" helper="Choose all that apply">
          <ChipInput.Option value="design">Design</ChipInput.Option>
          <ChipInput.Option value="dev">Development</ChipInput.Option>
          <ChipInput.Option value="marketing">Marketing</ChipInput.Option>
          <ChipInput.Option value="sales">Sales</ChipInput.Option>
        </ChipInput>
      </div>
    )
  },
}

/**
 * Showcase chip input states: disabled and required (both modes).
 */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Single (Disabled)</div>
        {(() => {
          const [value] = useState<string>("low")
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipInput value={value} onChange={() => {}} label="Priority" disabled>
                <ChipInput.Option value="low">Low</ChipInput.Option>
                <ChipInput.Option value="medium">Medium</ChipInput.Option>
                <ChipInput.Option value="high">High</ChipInput.Option>
              </ChipInput>
            </div>
          )
        })()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Multiple (Required)</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipInput multiple value={value} onChange={setValue} label="Skills" required>
                <ChipInput.Option value="react">React</ChipInput.Option>
                <ChipInput.Option value="vue">Vue</ChipInput.Option>
                <ChipInput.Option value="angular">Angular</ChipInput.Option>
              </ChipInput>
            </div>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Chip input with error state (both single and multiple).
 */
export const WithError: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Single Mode</div>
        {(() => {
          const [value, setValue] = useState<string>()
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <ChipInput value={value} onChange={setValue} label="Color" error="Please select a color">
                <ChipInput.Option value="red">Red</ChipInput.Option>
                <ChipInput.Option value="blue">Blue</ChipInput.Option>
                <ChipInput.Option value="green">Green</ChipInput.Option>
              </ChipInput>
            </div>
          )
        })()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Multiple Mode</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <ChipInput
                multiple
                value={value}
                onChange={setValue}
                label="Features"
                error="At least one feature required"
              >
                <ChipInput.Option value="export">Export</ChipInput.Option>
                <ChipInput.Option value="import">Import</ChipInput.Option>
                <ChipInput.Option value="share">Share</ChipInput.Option>
              </ChipInput>
            </div>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * Chip input with icons (left and right positions).
 */
export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipInput
          multiple
          value={value}
          onChange={setValue}
          label="Select features"
          helper="Choose with icons"
        >
          <ChipInput.Option value="star" iconLeft={<Icon as={StarIcon} />}>
            Featured
          </ChipInput.Option>
          <ChipInput.Option value="check" iconLeft={<Icon as={CheckIcon} />}>
            Verified
          </ChipInput.Option>
          <ChipInput.Option value="settings" iconRight={<Icon as={SettingsIcon} />}>
            Settings
          </ChipInput.Option>
          <ChipInput.Option value="home" iconLeft={<Icon as={HomeIcon} />} iconRight={<Icon as={CheckIcon} />}>
            Home
          </ChipInput.Option>
        </ChipInput>
      </div>
    )
  },
}
