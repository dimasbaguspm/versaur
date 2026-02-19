import type { Meta, StoryObj } from "@storybook/react"
import { TextArea } from "@versaur/react/forms"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
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
  title: "Components/Forms/TextArea",
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Comments",
    placeholder: "Enter your feedback...",
  },
}

export const WithHelper: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself",
    helper: "Maximum 500 characters",
  },
}

export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Type something",
    error: "Message is required",
    value: "",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot edit",
    disabled: true,
    value: "This textarea is disabled",
  },
}

export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    value: "This content cannot be edited",
    readOnly: true,
  },
}

export const Resizable: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description",
    resizable: true,
    minRows: 3,
  },
}

export const NonResizable: Story = {
  args: {
    label: "Fixed Size",
    placeholder: "This textarea cannot be resized",
    resizable: false,
    minRows: 4,
  },
}

export const MinRows: Story = {
  args: {
    label: "Message",
    placeholder: "Minimum 5 rows",
    minRows: 5,
  },
}

export const MaxRows: Story = {
  args: {
    label: "Limited Size",
    placeholder: "Maximum 8 rows before scrolling",
    minRows: 3,
    maxRows: 8,
  },
}

export const LongContent: Story = {
  args: {
    label: "Rich Content",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    minRows: 4,
  },
}
