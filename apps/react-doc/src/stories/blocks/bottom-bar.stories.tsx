import type { Meta, StoryObj } from "@storybook/react"
import { HomeIcon, SettingsIcon, UserIcon, BellIcon, SearchIcon } from "@versaur/icons"
import { Icon } from "@versaur/react/primitive"
import { BottomBar } from "@versaur/react/blocks"

const meta = {
  component: BottomBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/BottomBar",
} satisfies Meta<typeof BottomBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <BottomBar>
      <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />}>
        Search
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={BellIcon} size="md" />}>
        Notify
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />}>
        Settings
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={UserIcon} size="md" />}>
        Profile
      </BottomBar.Item>
    </BottomBar>
  ),
}

export const WithDisabledAndVariants: Story = {
  render: () => (
    <BottomBar>
      <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />}>
        Search
      </BottomBar.Item>
      <BottomBar.Item disabled icon={<Icon as={BellIcon} size="md" />}>
        Notify
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />}>
        Settings
      </BottomBar.Item>
      <BottomBar.Item icon={<Icon as={UserIcon} size="md" />}>
        Profile
      </BottomBar.Item>
    </BottomBar>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <BottomBar>
      <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />} />
      <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />} />
      <BottomBar.Item icon={<Icon as={BellIcon} size="md" />} />
      <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />} />
      <BottomBar.Item icon={<Icon as={UserIcon} size="md" />} />
    </BottomBar>
  ),
}

export const AsLinks: Story = {
  render: () => (
    <BottomBar>
      <BottomBar.Item as="a" href="#home" active icon={<Icon as={HomeIcon} size="md" />}>
        Home
      </BottomBar.Item>
      <BottomBar.Item as="a" href="#search" icon={<Icon as={SearchIcon} size="md" />}>
        Search
      </BottomBar.Item>
      <BottomBar.Item as="a" href="#notify" icon={<Icon as={BellIcon} size="md" />}>
        Notify
      </BottomBar.Item>
      <BottomBar.Item as="a" href="#settings" icon={<Icon as={SettingsIcon} size="md" />}>
        Settings
      </BottomBar.Item>
      <BottomBar.Item as="a" href="#profile" icon={<Icon as={UserIcon} size="md" />}>
        Profile
      </BottomBar.Item>
    </BottomBar>
  ),
}
