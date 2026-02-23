import type { Meta, StoryObj } from "@storybook/react"
import { ErrorText } from "../index"

const meta = {
  component: ErrorText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/ErrorText",
} satisfies Meta<typeof ErrorText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default error text with a generic required field message.
 */
export const Default: Story = {
  args: {
    children: "This field is required",
  },
}

/**
 * Error text with an id attribute for associating with form fields.
 */
export const WithId: Story = {
  args: {
    id: "email-error",
    children: "Please enter a valid email address",
  },
}
