import type { Meta, StoryObj } from "@storybook/react"
import { HelperText } from "../index"

const meta = {
  component: HelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/HelperText",
} satisfies Meta<typeof HelperText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default helper text providing additional context to a form field.
 */
export const Default: Story = {
  args: {
    children: "This is helper text that provides additional context",
  },
}

/**
 * Helper text with an id attribute for associating with form fields.
 */
export const WithId: Story = {
  args: {
    id: "helper-1",
    children: "Password must be at least 8 characters long",
  },
}
