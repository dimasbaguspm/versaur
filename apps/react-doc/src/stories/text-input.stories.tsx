import type { Meta, StoryObj } from "@storybook/react"
import { MailIcon, SearchIcon } from "@versaur/icons"
import { TextInput } from "@versaur/react/forms"

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
  },
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/TextInput",
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "name@example.com",
    type: "email",
  },
}

export const WithHelper: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helper: "Must be at least 8 characters",
  },
}

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    error: "Username is already taken",
    value: "john",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Cannot edit",
    disabled: true,
    value: "Disabled",
  },
}

export const ReadOnly: Story = {
  args: {
    label: "Read Only Field",
    value: "This is read only",
    readOnly: true,
  },
}

export const WithLeftIcon: Story = {
  render: (args) => <TextInput {...args} leftIcon={<SearchIcon width={20} height={20} />} />,
  args: {
    label: "Search",
    placeholder: "Search...",
  },
}

export const WithRightIcon: Story = {
  render: (args) => <TextInput {...args} rightIcon={<MailIcon width={20} height={20} />} />,
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
}

export const WithBothIcons: Story = {
  render: (args) => (
    <TextInput
      {...args}
      leftIcon={<MailIcon width={20} height={20} />}
      rightIcon={<SearchIcon width={20} height={20} />}
    />
  ),
  args: {
    placeholder: "With icons on both sides",
  },
}

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helper: "Min 8 chars, with uppercase, lowercase, and numbers",
  },
}

export const Email: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    helper: "We'll never share your email",
  },
}

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    min: "0",
    max: "120",
  },
}

export const Url: Story = {
  args: {
    label: "Website",
    type: "url",
    placeholder: "https://example.com",
  },
}

export const Tel: Story = {
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
}
