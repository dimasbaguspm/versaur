import type { Meta, StoryObj } from "@storybook/react"
import { MenuIcon, SearchIcon } from "@versaur/icons"
import { Button, Text, TopBar } from "@versaur/react"

const meta = {
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Components/Navigation/TopBar",
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <TopBar {...args}>
      <TopBar.Leading>
        <Text weight="bold" size="lg">
          Brand
        </Text>
      </TopBar.Leading>
      <TopBar.Centred>
        <Text>Center Content</Text>
      </TopBar.Centred>
      <TopBar.Trailing>
        <Button variant="ghost" size="small">
          Login
        </Button>
      </TopBar.Trailing>
    </TopBar>
  ),
}

export const WithNav: Story = {
  render: (args) => (
    <TopBar {...args}>
      <TopBar.Leading>
        <Text weight="bold">Logo</Text>
      </TopBar.Leading>
      <TopBar.Centred style={{ display: "flex", gap: "2rem" }}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Services</Text>
      </TopBar.Centred>
      <TopBar.Trailing>
        <Button variant="primary" size="small">
          Sign Up
        </Button>
      </TopBar.Trailing>
    </TopBar>
  ),
}

export const WithSearch: Story = {
  render: (args) => (
    <TopBar {...args}>
      <TopBar.Leading>
        <MenuIcon width={24} height={24} />
      </TopBar.Leading>
      <TopBar.Centred style={{ width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%" }}>
          <SearchIcon width={20} height={20} />
          <input type="text" placeholder="Search..." style={{ width: "100%", border: "none", outline: "none" }} />
        </div>
      </TopBar.Centred>
      <TopBar.Trailing>
        <Text>Account</Text>
      </TopBar.Trailing>
    </TopBar>
  ),
}

export const Simple: Story = {
  render: (args) => (
    <TopBar {...args}>
      <TopBar.Leading>
        <Text weight="bold">My App</Text>
      </TopBar.Leading>
    </TopBar>
  ),
}

export const FullWidth: Story = {
  render: (args) => (
    <TopBar {...args} style={{ width: "100%" }}>
      <TopBar.Leading>
        <Text weight="bold" size="lg">
          Dashboard
        </Text>
      </TopBar.Leading>
      <TopBar.Centred>Search</TopBar.Centred>
      <TopBar.Trailing>Settings</TopBar.Trailing>
    </TopBar>
  ),
}
