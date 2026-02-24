import type { Meta, StoryObj } from "@storybook/react"

import { Select } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Select",
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default select with basic styling.
 */
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Option value="">-- Select --</Select.Option>
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
      <Select.Option value="option3">Option 3</Select.Option>
    </Select>
  ),
}

/**
 * Select with a label.
 */
export const WithLabel: Story = {
  render: (args) => (
    <Select {...args} label="Choose an option">
      <Select.Option value="">-- Select --</Select.Option>
      <Select.Option value="apple">Apple</Select.Option>
      <Select.Option value="banana">Banana</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
    </Select>
  ),
}

/**
 * Select with a placeholder.
 */
export const WithPlaceholder: Story = {
  render: (args) => (
    <Select {...args} label="Fruit" placeholder="Select a fruit">
      <Select.Option value="apple">Apple</Select.Option>
      <Select.Option value="banana">Banana</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
    </Select>
  ),
}

/**
 * Select with helper text for additional guidance.
 */
export const WithHelper: Story = {
  render: (args) => (
    <Select {...args} label="Country" placeholder="Select your country" helper="You can change this later">
      <Select.Option value="us">United States</Select.Option>
      <Select.Option value="uk">United Kingdom</Select.Option>
      <Select.Option value="ca">Canada</Select.Option>
    </Select>
  ),
}

/**
 * Select with error state and validation message.
 */
export const WithError: Story = {
  render: (args) => (
    <Select {...args} label="Region" placeholder="Select region" error="Please select a region">
      <Select.Option value="north">North</Select.Option>
      <Select.Option value="south">South</Select.Option>
      <Select.Option value="east">East</Select.Option>
    </Select>
  ),
}

/**
 * Showcase select states: disabled and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        <Select {...args} label="Disabled" disabled>
          <Select.Option value="">-- Select --</Select.Option>
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        <Select {...args} label="Category" placeholder="Select category" required>
          <Select.Option value="category1">Category 1</Select.Option>
          <Select.Option value="category2">Category 2</Select.Option>
          <Select.Option value="category3">Category 3</Select.Option>
        </Select>
      </div>
    </div>
  ),
}

/**
 * Select with option groups for organizing related choices.
 */
export const WithOptGroups: Story = {
  render: (args) => (
    <Select {...args} label="Vehicle" placeholder="Select a vehicle">
      <Select.OptionGroup label="Cars">
        <Select.Option value="tesla">Tesla</Select.Option>
        <Select.Option value="bmw">BMW</Select.Option>
      </Select.OptionGroup>
      <Select.OptionGroup label="Trucks">
        <Select.Option value="ford">Ford</Select.Option>
        <Select.Option value="chevy">Chevy</Select.Option>
      </Select.OptionGroup>
    </Select>
  ),
}
