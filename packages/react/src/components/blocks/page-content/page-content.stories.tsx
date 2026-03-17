import type { Meta, StoryObj } from "@storybook/react"

import { Card, PageContent, PageHeader } from "../index"
import { Button } from "../../primitive/button"
import { Text, Heading } from "../../primitive/index"

const meta = {
  title: "Blocks/PageContent",
  component: PageContent,
  tags: ["autodocs"],
} satisfies Meta<typeof PageContent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default PageContent with simple text
 */
export const Default: Story = {
  render: () => (
    <PageContent>
      <Text>
        This is the main page content area with consistent padding matching PageHeader. Use this
        container for your main page content.
      </Text>
    </PageContent>
  ),
}

/**
 * PageContent with a Card
 */
export const WithCard: Story = {
  render: () => (
    <PageContent>
      <Card size="md" border="top">
        <Card.Header>
          <Heading as="h2" size="lg">
            User Profile
          </Heading>
        </Card.Header>
        <Card.Body gap="md">
          <Text>This is a card inside PageContent with proper spacing.</Text>
          <Button variant="primary">Save Changes</Button>
        </Card.Body>
      </Card>
    </PageContent>
  ),
}

/**
 * PageHeader and PageContent as a pair
 */
export const WithPageHeader: Story = {
  render: () => (
    <>
      <PageHeader title="Dashboard" subtitle="Welcome back" />
      <PageContent>
        <Text>
          PageContent is typically used alongside PageHeader for consistent spacing and layout. They
          share the same horizontal padding to create a cohesive page structure.
        </Text>
      </PageContent>
    </>
  ),
}

/**
 * Multiple content sections with consistent spacing
 */
export const MultipleCards: Story = {
  render: () => (
    <>
      <PageHeader title="Settings" />
      <PageContent>
        <Card size="md" border="top" style={{ marginBottom: "2rem" }}>
          <Card.Header>
            <Heading as="h2" size="lg">
              General Settings
            </Heading>
          </Card.Header>
          <Card.Body gap="md">
            <Text>Configure your general application settings here.</Text>
          </Card.Body>
        </Card>

        <Card size="md" border="top">
          <Card.Header>
            <Heading as="h2" size="lg">
              Advanced Settings
            </Heading>
          </Card.Header>
          <Card.Body gap="md">
            <Text>Manage advanced configuration options.</Text>
          </Card.Body>
        </Card>
      </PageContent>
    </>
  ),
}
