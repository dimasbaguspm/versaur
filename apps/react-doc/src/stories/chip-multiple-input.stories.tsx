import type { Meta, StoryObj } from "@storybook/react"
import { ChipMultipleInput } from "@versaur/react/forms"
import { useState } from "react"

const meta = {
  argTypes: {
    gap: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
  },
  component: ChipMultipleInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Advanced/ChipMultipleInput",
} satisfies Meta<typeof ChipMultipleInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={setValue} label="Select tags">
          <ChipMultipleInput.Option value="react">React</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="typescript">TypeScript</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="javascript">JavaScript</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="css">CSS</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="html">HTML</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
  args: {
    gap: "2",
  },
}

export const WithHelper: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput
          {...args}
          value={value}
          onChange={setValue}
          label="Skills"
          helper="Select one or more skills"
        >
          <ChipMultipleInput.Option value="frontend">Frontend</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="backend">Backend</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="devops">DevOps</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="design">Design</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="qa">QA</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput
          {...args}
          value={value}
          onChange={setValue}
          label="Categories"
          error="Please select at least one category"
        >
          <ChipMultipleInput.Option value="work">Work</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="personal">Personal</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="urgent">Urgent</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="archive">Archive</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const PreSelected: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["2", "4"])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={setValue} label="Interests">
          <ChipMultipleInput.Option value="1">Reading</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="2">Gaming</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="3">Sports</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="4">Music</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="5">Travel</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value] = useState<string[]>(["2"])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={() => {}} label="Disabled" disabled>
          <ChipMultipleInput.Option value="1">Option 1</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="2">Option 2</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="3">Option 3</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const Required: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={setValue} label="Requirements" required>
          <ChipMultipleInput.Option value="responsive">Responsive Design</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="accessible">Accessibility</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="performance">Performance</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="testing">Testing</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const NoWrap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput
          {...args}
          value={value}
          onChange={setValue}
          label="No wrapping"
          helper="Chips stay on one line"
          wrap={false}
        >
          <ChipMultipleInput.Option value="option1">Very Long Option Text</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="option2">Another Very Long Option</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="option3">One More Long Option</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
}

export const ManyOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={setValue} label="Select numbers (multi-select)" gap="2">
          {Array.from({ length: 15 }, (_, i) => (
            <ChipMultipleInput.Option key={i} value={String(i + 1)}>
              {i + 1}
            </ChipMultipleInput.Option>
          ))}
        </ChipMultipleInput>
      </div>
    )
  },
}

export const LargeGap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ChipMultipleInput {...args} value={value} onChange={setValue} label="Large spacing" gap="4">
          <ChipMultipleInput.Option value="1">First</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="2">Second</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="3">Third</ChipMultipleInput.Option>
          <ChipMultipleInput.Option value="4">Fourth</ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    )
  },
  args: {
    gap: "4",
  },
}
