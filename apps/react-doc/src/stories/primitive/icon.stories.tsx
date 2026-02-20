import type { Meta, StoryObj } from "@storybook/react"
import { StarIcon } from "@versaur/icons"
import { Icon, Text } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    intent: {
      control: "select",
      options: ["inherit", "primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["inherit", "xs", "sm", "md", "lg", "xl"],
    },
  },
  args: {
    as: StarIcon,
  },
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Icon",
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    intent: "inherit",
    size: "md",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="xs" />
        <Text size="sm">XS</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="sm" />
        <Text size="sm">SM</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="md" />
        <Text size="sm">MD</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="lg" />
        <Text size="sm">LG</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="xl" />
        <Text size="sm">XL</Text>
      </div>
    </div>
  ),
}

export const Intents: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} intent="primary" />
        <Text size="sm">Primary</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} intent="secondary" />
        <Text size="sm">Secondary</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} intent="danger" />
        <Text size="sm">Danger</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} intent="outline" />
        <Text size="sm">Outline</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} intent="ghost" />
        <Text size="sm">Ghost</Text>
      </div>
    </div>
  ),
  args: {
    size: "md",
  },
}
