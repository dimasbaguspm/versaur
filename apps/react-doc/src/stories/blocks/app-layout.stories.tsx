import type { Meta, StoryObj } from "@storybook/react"
import { HomeIcon, LayoutDashboardIcon, SettingsIcon, UserIcon } from "@versaur/icons"
import { Button, Heading, Text } from "@versaur/react/primitive"
import { AppLayout } from "@versaur/react/blocks"

const meta = {
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "full", "mobile", "split"],
    },
  },
  component: AppLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/AppLayout",
} satisfies Meta<typeof AppLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="classic">
        <AppLayout.Header>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "1rem",
              height: "100%",
              padding: "0 1.5rem",
            }}
          >
            <Heading as="h4" style={{ margin: 0, fontSize: "1.25rem" }}>
              Dashboard
            </Heading>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="ghost" size="small">
                <UserIcon />
              </Button>
            </div>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button variant="ghost" style={{ justifyContent: "flex-start" }}>
              <LayoutDashboardIcon />
              <span>Dashboard</span>
            </Button>
            <Button variant="ghost" style={{ justifyContent: "flex-start" }}>
              <HomeIcon />
              <span>Home</span>
            </Button>
            <Button variant="ghost" style={{ justifyContent: "flex-start" }}>
              <SettingsIcon />
              <span>Settings</span>
            </Button>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main placement="centred">
          <div style={{ padding: "2rem" }}>
            <Heading as="h2" style={{ marginBottom: "1rem" }}>
              Main Content
            </Heading>
            <Text>
              This is the main content area with header, left sidebar, and centered content placement. The layout is
              responsive and adapts to different screen sizes.
            </Text>
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "classic",
  },
}

export const FullWidth: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="full">
        <AppLayout.Header>
          <div style={{ padding: "0 1.5rem", display: "flex", alignItems: "center", height: "100%" }}>
            <Heading as="h4" style={{ margin: 0, fontSize: "1.25rem" }}>
              Full Width Layout
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Text>This layout uses the full width without sidebars. Great for full-width content displays.</Text>
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "full",
  },
}

export const Split: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="split">
        <AppLayout.Header>
          <div style={{ padding: "0 1.5rem", display: "flex", alignItems: "center", height: "100%" }}>
            <Heading as="h4" style={{ margin: 0, fontSize: "1.25rem" }}>
              Split Layout
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem" }}>
            <Text weight="bold" style={{ marginBottom: "1rem" }}>
              Left Panel
            </Text>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Text size="sm">Item 1</Text>
              <Text size="sm">Item 2</Text>
              <Text size="sm">Item 3</Text>
            </div>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Heading as="h3">Main Area</Heading>
            <Text>Content in the center with left and right sidebars.</Text>
          </div>
        </AppLayout.Main>

        <AppLayout.SideRight>
          <div style={{ padding: "1.5rem" }}>
            <Text weight="bold" style={{ marginBottom: "1rem" }}>
              Right Panel
            </Text>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Text size="sm">Detail A</Text>
              <Text size="sm">Detail B</Text>
              <Text size="sm">Detail C</Text>
            </div>
          </div>
        </AppLayout.SideRight>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "split",
  },
}

export const Mobile: Story = {
  render: (args) => (
    <div style={{ height: "500px", maxWidth: "400px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="mobile">
        <AppLayout.Header>
          <div style={{ padding: "0 1rem", display: "flex", alignItems: "center", height: "100%" }}>
            <Heading as="h4" style={{ margin: 0, fontSize: "1rem" }}>
              Mobile
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ padding: "1rem" }}>
            <Text>
              Mobile layout optimized for small screens. Navigation is typically in the bottom bar or collapsed menu.
            </Text>
          </div>
        </AppLayout.Main>

        <AppLayout.Bottom>
          <div style={{ display: "flex", justifyContent: "space-around", padding: "0.5rem" }}>
            <Button variant="ghost" size="small">
              <HomeIcon />
            </Button>
            <Button variant="ghost" size="small">
              <SettingsIcon />
            </Button>
            <Button variant="ghost" size="small">
              <UserIcon />
            </Button>
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "mobile",
  },
}

export const WithBottomBar: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="classic">
        <AppLayout.Header>
          <div style={{ padding: "0 1.5rem", display: "flex", alignItems: "center", height: "100%" }}>
            <Heading as="h4" style={{ margin: 0, fontSize: "1.25rem" }}>
              App
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1rem" }}>
            <Text size="sm">Navigation</Text>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Text>Content with header, sidebar, and bottom bar.</Text>
          </div>
        </AppLayout.Main>

        <AppLayout.Bottom>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", padding: "0.5rem" }}>
            <Text size="sm">© 2024</Text>
            <Text size="sm">Privacy</Text>
            <Text size="sm">Terms</Text>
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  ),
}

export const CenteredMain: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="classic">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              background: "#f5f5f5",
            }}
          >
            <Heading as="h4" style={{ margin: 0, fontSize: "1.25rem" }}>
              Centered Content
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem" }}>
            <Text weight="bold" size="sm" style={{ marginBottom: "1rem" }}>
              Sidebar
            </Text>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main placement="centred">
          <div style={{ padding: "2rem", maxWidth: "700px" }}>
            <Heading as="h2">Centered Layout</Heading>
            <Text>
              The main content area is centered with a constrained max-width. Perfect for reading-focused content,
              documentation, or blog posts.
            </Text>
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
}
