import type { Meta, StoryObj } from "@storybook/react"

import { PasswordInput } from "./password-input"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
  },
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/PasswordInput",
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default password input with lock icon.
 */
export const Default: Story = {
  args: {
    placeholder: "Enter password",
  },
}

/**
 * Password input with a label.
 */
export const WithLabel: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
  },
}

/**
 * Password input with helper text.
 */
export const WithHelper: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    helper: "Must be at least 8 characters",
  },
}

/**
 * Password input with error state.
 */
export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    error: "Password is too weak",
  },
}

/**
 * Disabled password input.
 */
export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
}

/**
 * Read-only password input.
 */
export const ReadOnly: Story = {
  args: {
    label: "Password",
    value: "••••••••",
    readOnly: true,
  },
}
