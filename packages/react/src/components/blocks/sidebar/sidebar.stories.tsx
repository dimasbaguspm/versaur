import type { Meta, StoryObj } from "@storybook/react"
import {
  ArchiveIcon,
  CheckIcon,
  ClipboardIcon,
  CopyIcon,
  DownloadIcon,
  GridIcon,
  HomeIcon,
  MenuIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
} from "@versaur/icons"

import { Avatar, ButtonIcon, Icon, Text } from "../../primitive/index"
import { AppLayout, Sidebar } from "../index"

const meta = {
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/Sidebar",
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <AppLayout>
        <AppLayout.Body>
          <AppLayout.SideLeft>
            <Sidebar>
              <Sidebar.Header>
                <Text weight="bold" size="sm">
                  Versaur
                </Text>
              </Sidebar.Header>
              <Sidebar.Body>
                <Sidebar.Group label="Main" icon={<Icon as={GridIcon} size="sm" />}>
                  <Sidebar.Item active icon={<Icon as={HomeIcon} />}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item icon={<Icon as={UserIcon} />}>Users</Sidebar.Item>
                </Sidebar.Group>
                <Sidebar.Divider />
                <Sidebar.Group label="Settings" icon={<Icon as={SettingsIcon} size="sm" />} defaultExpanded={false}>
                  <Sidebar.Item icon={<Icon as={SettingsIcon} />}>Preferences</Sidebar.Item>
                </Sidebar.Group>
              </Sidebar.Body>
              <Sidebar.Footer>
                <Sidebar.Item icon={<Icon as={TrashIcon} />}>Delete account</Sidebar.Item>
              </Sidebar.Footer>
            </Sidebar>
          </AppLayout.SideLeft>
          <AppLayout.Main>
            <div style={{ padding: "2rem" }}>
              <Text size="lg" weight="bold">
                Main Content Area
              </Text>
              <Text>
                Groups can be expanded and collapsed by clicking the header. The Settings group starts collapsed.
              </Text>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    return (
      <AppLayout>
        <AppLayout.Body>
          <AppLayout.SideLeft>
            <Sidebar>
              <Sidebar.Header>
                <Text weight="bold" size="sm">
                  Projects
                </Text>
              </Sidebar.Header>
              <Sidebar.Body>
                <Sidebar.Group label="Active" icon={<Icon as={GridIcon} size="sm" />}>
                  <Sidebar.Item
                    active
                    icon={<Icon as={HomeIcon} />}
                    action={<ButtonIcon as={TrashIcon} variant="ghost" size="small" aria-label="Delete app" />}
                  >
                    My App
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={UserIcon} />}
                    action={<ButtonIcon as={TrashIcon} variant="ghost" size="small" aria-label="Delete portal" />}
                  >
                    Team Portal
                  </Sidebar.Item>
                </Sidebar.Group>
                <Sidebar.Divider />
                <Sidebar.Group label="Archive" icon={<Icon as={ArchiveIcon} size="sm" />}>
                  <Sidebar.Item
                    icon={<Icon as={SettingsIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore project" />}
                  >
                    Old Project
                  </Sidebar.Item>
                </Sidebar.Group>
              </Sidebar.Body>
            </Sidebar>
          </AppLayout.SideLeft>
          <AppLayout.Main>
            <div style={{ padding: "2rem" }}>
              <Text size="lg" weight="bold">
                With Actions
              </Text>
              <Text>Items can have action icons on the right for additional functionality.</Text>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    )
  },
}

export const Comprehensive: Story = {
  render: () => {
    return (
      <AppLayout>
        <AppLayout.Body>
          <AppLayout.SideLeft>
            <Sidebar>
              <Sidebar.Header>
                <Text weight="bold" size="sm">
                  File Manager
                </Text>
              </Sidebar.Header>
              <Sidebar.Body>
                <Sidebar.ItemList>
                  <Sidebar.Item active icon={<Icon as={HomeIcon} />}>
                    Home
                  </Sidebar.Item>
                  <Sidebar.Item icon={<Icon as={GridIcon} />}>Folders</Sidebar.Item>
                  <Sidebar.Item icon={<Icon as={ClipboardIcon} />}>Files</Sidebar.Item>
                  <Sidebar.Item icon={<Icon as={DownloadIcon} />}>Downloads</Sidebar.Item>
                </Sidebar.ItemList>

                <Sidebar.Divider />

                <Sidebar.Group label="Workspace" icon={<Icon as={GridIcon} size="sm" />}>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Duplicate" />}
                  >
                    Project Alpha
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Duplicate" />}
                  >
                    Project Beta
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Duplicate" />}
                  >
                    Design System
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Duplicate" />}
                  >
                    Documentation
                  </Sidebar.Item>
                </Sidebar.Group>

                <Sidebar.Group label="Actions" icon={<Icon as={SettingsIcon} size="sm" />}>
                  <Sidebar.Item
                    icon={<Icon as={CheckIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Create new" />}
                  >
                    Save
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={CopyIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Duplicate" />}
                  >
                    Duplicate
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={DownloadIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Export" />}
                  >
                    Export
                  </Sidebar.Item>
                </Sidebar.Group>

                <Sidebar.Group label="Archive" icon={<Icon as={ArchiveIcon} size="sm" />}>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore" />}
                  >
                    Old Backup v1
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore" />}
                  >
                    Old Backup v2
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore" />}
                  >
                    Old Backup v3
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore" />}
                  >
                    Old Backup v4
                  </Sidebar.Item>
                  <Sidebar.Item
                    icon={<Icon as={ClipboardIcon} />}
                    action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="Restore" />}
                  >
                    Old Backup v5
                  </Sidebar.Item>
                </Sidebar.Group>
              </Sidebar.Body>
              <Sidebar.Footer>
                <Sidebar.Item
                  action={<ButtonIcon as={MenuIcon} variant="ghost" size="small" aria-label="User options" />}
                >
                  <Avatar size="sm">JS</Avatar>
                  Profile
                </Sidebar.Item>
              </Sidebar.Footer>
            </Sidebar>
          </AppLayout.SideLeft>
          <AppLayout.Main>
            <div style={{ padding: "2rem" }}>
              <Text size="lg" weight="bold">
                Comprehensive Sidebar
              </Text>
              <Text>
                Multiple groups with many items showing realistic usage patterns with action buttons on items.
              </Text>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    )
  },
}
