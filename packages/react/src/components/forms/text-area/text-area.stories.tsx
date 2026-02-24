import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    resizable: {
      control: "boolean",
    },
  },
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/TextArea",
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default textarea with basic styling.
 */
export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
}

/**
 * Textarea with a label.
 */
export const WithLabel: Story = {
  args: {
    label: "Comments",
    placeholder: "Enter your feedback...",
  },
}

/**
 * Textarea with helper text for additional guidance.
 */
export const WithHelper: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself",
    helper: "Maximum 500 characters",
  },
}

/**
 * Textarea with error state and validation message.
 */
export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Type something",
    error: "Message is required",
    value: "",
  },
}

/**
 * Showcase textarea states: disabled and read-only.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "250px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        <TextArea {...args} label="Disabled" placeholder="Cannot edit" disabled value="This textarea is disabled" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "250px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Read Only</div>
        <TextArea {...args} label="Read Only" value="This content cannot be edited" readOnly />
      </div>
    </div>
  ),
}

/**
 * Showcase resize behavior: resizable vs non-resizable.
 */
export const ResizeBehavior: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "250px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Resizable</div>
        <TextArea {...args} label="Description" placeholder="Can be resized" resizable minRows={3} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "250px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Non-Resizable</div>
        <TextArea {...args} label="Fixed Size" placeholder="Cannot be resized" resizable={false} minRows={3} />
      </div>
    </div>
  ),
}

/**
 * Showcase row constraints with minRows and maxRows.
 */
export const RowConstraints: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Min Rows (5)</div>
        <TextArea {...args} label="Message" placeholder="Minimum 5 rows" minRows={5} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Max Rows (3-8)</div>
        <TextArea {...args} label="Limited Size" placeholder="3 to 8 rows" minRows={3} maxRows={8} />
      </div>
    </div>
  ),
}
