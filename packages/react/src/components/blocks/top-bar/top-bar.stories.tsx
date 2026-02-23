import type { Meta, StoryObj } from "@storybook/react"
import { AppLayout, TopBar } from "../index"
import { Button, Text } from "../../primitive/index"

const meta = {
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/TopBar",
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ height: "400px", display: "flex", flexDirection: "column" }}>
      <AppLayout>
        <AppLayout.Header>
          <TopBar>
            <TopBar.Leading>
              <Text weight="bold" size="sm">
                Versaur
              </Text>
            </TopBar.Leading>
            <TopBar.Centred>
              <TopBar.ListItem>
                <TopBar.Item active>Dashboard</TopBar.Item>
                <TopBar.Item>Projects</TopBar.Item>
                <TopBar.Item>Team</TopBar.Item>
                <TopBar.Item disabled>Billing</TopBar.Item>
              </TopBar.ListItem>
            </TopBar.Centred>
            <TopBar.Trailing>
              <Button variant="primary" size="small">
                New Project
              </Button>
            </TopBar.Trailing>
          </TopBar>
        </AppLayout.Header>
        <AppLayout.Body centered>
          <AppLayout.Main>
            <div style={{ padding: "2rem" }}>
              <Text size="lg" weight="bold">
                Main Content
              </Text>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    </div>
  ),
}
