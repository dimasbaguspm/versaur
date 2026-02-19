import type { Meta, StoryObj } from "@storybook/react"
import { HomeIcon, SettingsIcon, UserIcon } from "@versaur/icons"
import { BottomBar } from "@versaur/react/blocks"

const meta = {
  component: BottomBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Components/Navigation/BottomBar",
} satisfies Meta<typeof BottomBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active icon={<HomeIcon width={24} height={24} />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item icon={<SettingsIcon width={24} height={24} />}>Settings</BottomBar.Item>
      <BottomBar.Item icon={<UserIcon width={24} height={24} />}>Profile</BottomBar.Item>
    </BottomBar>
  ),
}

export const Simple: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active>Home</BottomBar.Item>
      <BottomBar.Item>Explore</BottomBar.Item>
      <BottomBar.Item>Account</BottomBar.Item>
    </BottomBar>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active icon={<HomeIcon width={24} height={24} />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item icon={<UserIcon width={24} height={24} />}>Profile</BottomBar.Item>
      <BottomBar.Item icon={<SettingsIcon width={24} height={24} />}>Settings</BottomBar.Item>
    </BottomBar>
  ),
}

export const SingleActive: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active icon={<HomeIcon width={24} height={24} />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item icon={<SettingsIcon width={24} height={24} />}>Settings</BottomBar.Item>
    </BottomBar>
  ),
}

export const WithDisabled: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active>Home</BottomBar.Item>
      <BottomBar.Item disabled>Disabled</BottomBar.Item>
      <BottomBar.Item>Settings</BottomBar.Item>
    </BottomBar>
  ),
}

export const FiveItems: Story = {
  render: (args) => (
    <BottomBar {...args}>
      <BottomBar.Item active icon={<HomeIcon width={20} height={20} />}>
        Tab 1
      </BottomBar.Item>
      <BottomBar.Item icon={<UserIcon width={20} height={20} />}>Tab 2</BottomBar.Item>
      <BottomBar.Item icon={<SettingsIcon width={20} height={20} />}>Tab 3</BottomBar.Item>
      <BottomBar.Item icon={<HomeIcon width={20} height={20} />}>Tab 4</BottomBar.Item>
      <BottomBar.Item icon={<UserIcon width={20} height={20} />}>Tab 5</BottomBar.Item>
    </BottomBar>
  ),
}
