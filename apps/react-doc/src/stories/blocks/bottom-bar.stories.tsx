import type { Meta, StoryObj } from "@storybook/react"
import { BellIcon, HomeIcon, SearchIcon, SettingsIcon, UserIcon } from "@versaur/icons"
import { AppLayout, BottomBar } from "@versaur/react/blocks"
import { Icon, Text } from "@versaur/react/primitive"

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
    <AppLayout variant="mobile">
      <AppLayout.Body>
        <AppLayout.Main>
          <div style={{ minHeight: "120vh" }}>
            <Text size="lg" weight="bold">
              Main Content
            </Text>
            <Text size="sm" color="secondary" style={{ marginTop: "1rem" }}>
              Swipe navigation with BottomBar
            </Text>
          </div>
        </AppLayout.Main>
        <AppLayout.Bottom>
          <BottomBar>
            <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />}>
              Home
            </BottomBar.Item>
            <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />}>Search</BottomBar.Item>
            <BottomBar.Item icon={<Icon as={BellIcon} size="md" />}>Notify</BottomBar.Item>
            <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />}>Settings</BottomBar.Item>
            <BottomBar.Item icon={<Icon as={UserIcon} size="md" />}>Profile</BottomBar.Item>
          </BottomBar>
        </AppLayout.Bottom>
      </AppLayout.Body>
    </AppLayout>
  ),
}

export const WithDisabledAndVariants: Story = {
  render: () => (
    <AppLayout variant="mobile">
      <AppLayout.Body>
        <AppLayout.Main>
          <div style={{ minHeight: "120vh" }}>
            <Text size="lg" weight="bold">
              With Disabled Items
            </Text>
          </div>
        </AppLayout.Main>
        <AppLayout.Bottom>
          <BottomBar>
            <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />}>
              Home
            </BottomBar.Item>
            <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />}>Search</BottomBar.Item>
            <BottomBar.Item disabled icon={<Icon as={BellIcon} size="md" />}>
              Notify
            </BottomBar.Item>
            <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />}>Settings</BottomBar.Item>
            <BottomBar.Item icon={<Icon as={UserIcon} size="md" />}>Profile</BottomBar.Item>
          </BottomBar>
        </AppLayout.Bottom>
      </AppLayout.Body>
    </AppLayout>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <AppLayout variant="mobile">
      <AppLayout.Body>
        <AppLayout.Main>
          <div style={{ minHeight: "120vh" }}>
            <Text size="lg" weight="bold">
              Icon-Only BottomBar
            </Text>
          </div>
        </AppLayout.Main>
        <AppLayout.Bottom>
          <BottomBar>
            <BottomBar.Item active icon={<Icon as={HomeIcon} size="md" />} />
            <BottomBar.Item icon={<Icon as={SearchIcon} size="md" />} />
            <BottomBar.Item icon={<Icon as={BellIcon} size="md" />} />
            <BottomBar.Item icon={<Icon as={SettingsIcon} size="md" />} />
            <BottomBar.Item icon={<Icon as={UserIcon} size="md" />} />
          </BottomBar>
        </AppLayout.Bottom>
      </AppLayout.Body>
    </AppLayout>
  ),
}

export const AsLinks: Story = {
  render: () => (
    <AppLayout variant="mobile">
      <AppLayout.Body>
        <AppLayout.Main>
          <div style={{ minHeight: "120vh" }}>
            <Text size="lg" weight="bold">
              Link-based Navigation
            </Text>
          </div>
        </AppLayout.Main>
        <AppLayout.Bottom>
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
        </AppLayout.Bottom>
      </AppLayout.Body>
    </AppLayout>
  ),
}
