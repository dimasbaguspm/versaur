import type { Meta, StoryObj } from "@storybook/react"
import { HelperText } from "@versaur/react/forms"

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

export const Default: Story = {
  args: {
    children: "This is helper text that provides additional context",
  },
}

export const ShortHelp: Story = {
  args: {
    children: "Enter a valid email address",
  },
}

export const WithId: Story = {
  args: {
    id: "helper-1",
    children: "Password must be at least 8 characters long",
  },
}

export const ForPassword: Story = {
  args: {
    id: "password-helper",
    children: "Use a combination of letters, numbers, and symbols",
  },
}

export const ForEmail: Story = {
  args: {
    id: "email-helper",
    children: "We'll use this to send you important updates",
  },
}

export const ForPhone: Story = {
  args: {
    id: "phone-helper",
    children: "Include country code for international numbers",
  },
}
