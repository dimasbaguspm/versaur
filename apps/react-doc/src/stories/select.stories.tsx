import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "@versaur/react/forms"

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
  title: "Components/Forms/Select",
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

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

export const WithPlaceholder: Story = {
  render: (args) => (
    <Select {...args} label="Fruit" placeholder="Select a fruit">
      <Select.Option value="apple">Apple</Select.Option>
      <Select.Option value="banana">Banana</Select.Option>
      <Select.Option value="orange">Orange</Select.Option>
    </Select>
  ),
}

export const WithHelper: Story = {
  render: (args) => (
    <Select {...args} label="Country" placeholder="Select your country" helper="You can change this later">
      <Select.Option value="us">United States</Select.Option>
      <Select.Option value="uk">United Kingdom</Select.Option>
      <Select.Option value="ca">Canada</Select.Option>
    </Select>
  ),
}

export const WithError: Story = {
  render: (args) => (
    <Select {...args} label="Region" placeholder="Select region" error="Please select a region">
      <Select.Option value="north">North</Select.Option>
      <Select.Option value="south">South</Select.Option>
      <Select.Option value="east">East</Select.Option>
    </Select>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} label="Disabled" disabled>
      <Select.Option value="">-- Select --</Select.Option>
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
    </Select>
  ),
}

export const Required: Story = {
  render: (args) => (
    <Select {...args} label="Category" placeholder="Select category" required>
      <Select.Option value="category1">Category 1</Select.Option>
      <Select.Option value="category2">Category 2</Select.Option>
      <Select.Option value="category3">Category 3</Select.Option>
    </Select>
  ),
}

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

export const ManyOptions: Story = {
  render: (args) => (
    <Select {...args} label="Number" placeholder="Pick a number 1-50">
      {Array.from({ length: 50 }, (_, i) => (
        <Select.Option key={i + 1} value={String(i + 1)}>
          {i + 1}
        </Select.Option>
      ))}
    </Select>
  ),
}
