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
  args: {
    value: [],
    onChange: () => {},
  },
  component: ChipMultipleInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/ChipMultipleInput",
} satisfies Meta<typeof ChipMultipleInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default chip multiple input with multiple options for selection.
 */
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

/**
 * Chip multiple input with helper text for additional guidance.
 */
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

/**
 * Chip multiple input with error state and validation message.
 */
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

/**
 * Chip multiple input with pre-selected options.
 */
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

/**
 * Showcase chip multiple input states: disabled and required.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        {(() => {
          const [value] = useState<string[]>(["2"])
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipMultipleInput {...args} value={value} onChange={() => {}} label="Disabled" disabled>
                <ChipMultipleInput.Option value="1">Option 1</ChipMultipleInput.Option>
                <ChipMultipleInput.Option value="2">Option 2</ChipMultipleInput.Option>
                <ChipMultipleInput.Option value="3">Option 3</ChipMultipleInput.Option>
              </ChipMultipleInput>
            </div>
          )
        })()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Required</div>
        {(() => {
          const [value, setValue] = useState<string[]>([])
          return (
            <div style={{ width: "100%", maxWidth: "250px" }}>
              <ChipMultipleInput {...args} value={value} onChange={setValue} label="Requirements" required>
                <ChipMultipleInput.Option value="responsive">Responsive</ChipMultipleInput.Option>
                <ChipMultipleInput.Option value="accessible">Accessible</ChipMultipleInput.Option>
                <ChipMultipleInput.Option value="performance">Performance</ChipMultipleInput.Option>
              </ChipMultipleInput>
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
            const [value, setValue] = useState<string[]>([])
            return (
              <div style={{ width: "100%", maxWidth: "400px" }}>
                <ChipMultipleInput {...args} value={value} onChange={setValue} label="Choose" gap={gapValue}>
                  <ChipMultipleInput.Option value="1">Option 1</ChipMultipleInput.Option>
                  <ChipMultipleInput.Option value="2">Option 2</ChipMultipleInput.Option>
                  <ChipMultipleInput.Option value="3">Option 3</ChipMultipleInput.Option>
                  <ChipMultipleInput.Option value="4">Option 4</ChipMultipleInput.Option>
                </ChipMultipleInput>
              </div>
            )
          })()}
        </div>
      ))}
    </div>
  ),
}
