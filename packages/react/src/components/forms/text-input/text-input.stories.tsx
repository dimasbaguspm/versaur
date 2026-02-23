import type { Meta, StoryObj } from "@storybook/react"
import { MailIcon, SearchIcon } from "@versaur/icons"
import { TextInput } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
  },
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/TextInput",
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default text input with basic styling.
 */
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

/**
 * Text input with a label.
 */
export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "name@example.com",
    type: "email",
  },
}

/**
 * Text input with helper text for additional guidance.
 */
export const WithHelper: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helper: "Must be at least 8 characters",
  },
}

/**
 * Text input with error state and validation message.
 */
export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    error: "Username is already taken",
    value: "john",
  },
}

/**
 * Showcase input states: disabled and read-only.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Disabled</div>
        <TextInput {...args} label="Disabled Field" placeholder="Cannot edit" disabled value="Disabled" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Read Only</div>
        <TextInput {...args} label="Read Only Field" value="This is read only" readOnly />
      </div>
    </div>
  ),
}

/**
 * Showcase different input types: password, email, number, url, and tel.
 */
export const InputTypes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Password</div>
        <TextInput {...args} label="Password" type="password" placeholder="Enter password" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Email</div>
        <TextInput {...args} label="Email Address" type="email" placeholder="you@example.com" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Number</div>
        <TextInput {...args} label="Age" type="number" placeholder="Enter your age" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>URL</div>
        <TextInput {...args} label="Website" type="url" placeholder="https://example.com" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Phone</div>
        <TextInput {...args} label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
  ),
}

/**
 * Text input with various icon configurations: left, right, and both.
 */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Left Icon</div>
        <TextInput {...args} label="Search" placeholder="Search..." leftIcon={<SearchIcon width={20} height={20} />} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Right Icon</div>
        <TextInput
          {...args}
          label="Email"
          type="email"
          placeholder="Enter email"
          rightIcon={<MailIcon width={20} height={20} />}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Both Icons</div>
        <TextInput
          {...args}
          placeholder="With icons on both sides"
          leftIcon={<MailIcon width={20} height={20} />}
          rightIcon={<SearchIcon width={20} height={20} />}
        />
      </div>
    </div>
  ),
}
