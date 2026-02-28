import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon, ZapIcon } from "@versaur/icons"

import { Button } from "../../primitive/button/button"
import { Icon } from "../../primitive/icon/icon"
import { Badge, ButtonIcon } from "../../primitive/index"
import { ButtonGroup } from "../button-group/button-group"
import { BadgeGroup, Features } from "../index"
import { PageHeader } from "./index"

const meta = {
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/PageHeader",
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default page header with title and subtitle
 */
export const Default: Story = {
  render: (args) => (
    <PageHeader
      {...args}
      title={
        <PageHeader.Title
          action={
            <ButtonGroup>
              <Button variant="outline" aria-label="Edit">
                Edit
              </Button>
              <Button variant="outline" aria-label="Search">
                Details
              </Button>
            </ButtonGroup>
          }
        >
          Dashboard
        </PageHeader.Title>
      }
      subtitle={<PageHeader.Subtitle>Welcome back to your workspace</PageHeader.Subtitle>}
    />
  ),
}

/**
 * Page header with action button and additional info badges
 */
export const WithAction: Story = {
  render: (args) => (
    <PageHeader
      {...args}
      title={
        <PageHeader.Title action={<ButtonIcon as={SearchIcon} variant="ghost" aria-label="Search" />}>
          Projects
        </PageHeader.Title>
      }
      subtitle={
        <PageHeader.Subtitle additionalInfo={<Badge variant="info">8 total</Badge>}>
          Manage your projects and settings
        </PageHeader.Subtitle>
      }
    />
  ),
}

/**
 * Full composition with supplementary content
 */
export const WithSupplementary: Story = {
  render: (args) => (
    <PageHeader
      {...args}
      title={
        <PageHeader.Title action={<ButtonIcon as={SearchIcon} variant="ghost" aria-label="Search" />}>
          Application Settings
        </PageHeader.Title>
      }
      subtitle={<PageHeader.Subtitle>Configure your application behavior and preferences</PageHeader.Subtitle>}
      supplementary={
        <>
          <BadgeGroup gap="sm" align="end">
            <Badge variant="warning">Changes unsaved</Badge>
            <Badge variant="info">Updated 5 mins ago</Badge>
          </BadgeGroup>
          <Features direction="row">
            <Features.Item aria-label="34 Transaction" icon={<Icon as={ZapIcon} />}>
              34
            </Features.Item>
            <Features.Item aria-label="99 Errors" icon={<Icon as={ZapIcon} />}>
              99
            </Features.Item>
          </Features>
        </>
      }
    />
  ),
}

export const Complete: Story = {
  render: (args) => {
    return (
      <PageHeader
        {...args}
        title={
          <PageHeader.Title
            action={<ButtonIcon as={SearchIcon} variant="ghost" aria-label="Search" />}
            additionalInfo={<Badge variant="info">Updated 5 mins ago</Badge>}
          >
            Application Settings
          </PageHeader.Title>
        }
        subtitle={
          <PageHeader.Subtitle additionalInfo={<Badge variant="warning">3 pending</Badge>}>
            Configure your application behavior and preferences
          </PageHeader.Subtitle>
        }
        supplementary={
          <>
            <BadgeGroup gap="sm" align="end">
              <Badge variant="warning">Changes unsaved</Badge>
              <Badge variant="info">Updated 5 mins ago</Badge>
            </BadgeGroup>
            <Features direction="row">
              <Features.Item aria-label="34 Transaction" icon={<Icon as={ZapIcon} />}>
                34
              </Features.Item>
              <Features.Item aria-label="99 Errors" icon={<Icon as={ZapIcon} />}>
                99
              </Features.Item>
            </Features>
          </>
        }
      />
    )
  },
}
