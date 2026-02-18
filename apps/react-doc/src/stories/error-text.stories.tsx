import type { Meta, StoryObj } from "@storybook/react"
import { ErrorText } from "@versaur/react"

const meta = {
  component: ErrorText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Utilities/ErrorText",
} satisfies Meta<typeof ErrorText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This field is required",
  },
}

export const InvalidEmail: Story = {
  args: {
    id: "email-error",
    children: "Please enter a valid email address",
  },
}

export const PasswordMismatch: Story = {
  args: {
    id: "password-error",
    children: "Passwords do not match",
  },
}

export const TooShort: Story = {
  args: {
    children: "Input must be at least 3 characters long",
  },
}

export const TooLong: Story = {
  args: {
    children: "Input exceeds maximum length of 255 characters",
  },
}

export const AlreadyTaken: Story = {
  args: {
    children: "This username is already taken",
  },
}

export const InvalidFormat: Story = {
  args: {
    children: "Invalid format. Please use YYYY-MM-DD",
  },
}
