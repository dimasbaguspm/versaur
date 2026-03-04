import type { Meta, StoryObj } from "@storybook/react"

import { EmailInput } from "./email-input"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
  },
  component: EmailInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/EmailInput",
} satisfies Meta<typeof EmailInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default email input with mail icon.
 */
export const Default: Story = {
  args: {
    placeholder: "you@example.com",
  },
}

/**
 * Email input with a label.
 */
export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
  },
}

/**
 * Email input with helper text.
 */
export const WithHelper: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    helper: "We'll never share your email",
  },
}

/**
 * Email input with error state.
 */
export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    error: "Invalid email address",
  },
}

/**
 * Disabled email input.
 */
export const Disabled: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    disabled: true,
  },
}

/**
 * Read-only email input.
 */
export const ReadOnly: Story = {
  args: {
    label: "Email Address",
    value: "john@example.com",
    readOnly: true,
  },
}
