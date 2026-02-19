import type { Meta, StoryObj } from "@storybook/react"
import {
  AlertCircleIcon,
  BellIcon,
  CheckIcon,
  HelpCircleIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TrashIcon,
  UserIcon,
} from "@versaur/icons"
import { Icon, Text } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["inherit", "xs", "sm", "md", "lg", "xl"],
    },
  },
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Advanced/Icon",
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Icon {...args} as={StarIcon} />
      <Icon {...args} as={SearchIcon} />
      <Icon {...args} as={SettingsIcon} />
      <Icon {...args} as={HomeIcon} />
    </div>
  ),
  args: {
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

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} color="primary" />
        <Text size="sm">Primary</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} color="secondary" />
        <Text size="sm">Secondary</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} color="danger" />
        <Text size="sm">Danger</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} color="outline" />
        <Text size="sm">Outline</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} color="ghost" />
        <Text size="sm">Ghost</Text>
      </div>
    </div>
  ),
}

export const CommonIcons: Story = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: "1.5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={HomeIcon} />
        <Text size="sm">Home</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={UserIcon} />
        <Text size="sm">User</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={SettingsIcon} />
        <Text size="sm">Settings</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={SearchIcon} />
        <Text size="sm">Search</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={BellIcon} />
        <Text size="sm">Notifications</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={MailIcon} />
        <Text size="sm">Mail</Text>
      </div>
    </div>
  ),
  args: {
    size: "lg",
  },
}

export const StatusIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={CheckIcon} color="primary" />
        <Text size="sm">Success</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={AlertCircleIcon} color="danger" />
        <Text size="sm">Error</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={BellIcon} color="secondary" />
        <Text size="sm">Info</Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={HelpCircleIcon} color="secondary" />
        <Text size="sm">Help</Text>
      </div>
    </div>
  ),
  args: {
    size: "lg",
  },
}

export const InlineWithText: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={StarIcon} size="md" />
        <Text>Favorite this item</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={TrashIcon} size="md" color="danger" />
        <Text>Delete this item</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Icon {...args} as={SettingsIcon} size="md" />
        <Text>Configure settings</Text>
      </div>
    </div>
  ),
}

export const Inherit: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px" }}>
        <Icon {...args} as={MailIcon} size="inherit" />
        <Text size="sm">Small text with small icon</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "16px" }}>
        <Icon {...args} as={MailIcon} size="inherit" />
        <Text>Medium text with medium icon</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "20px" }}>
        <Icon {...args} as={MailIcon} size="inherit" />
        <Text size="lg">Large text with large icon</Text>
      </div>
    </div>
  ),
  args: {
    size: "inherit",
  },
}
