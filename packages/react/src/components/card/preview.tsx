import { Card } from "./card";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
import { BadgeGroup } from "../badge-group/badge-group";
import { Heading } from "../heading";
import { Text } from "../text";
import { Dot } from "../dot";

/**
 * Featured Example - Full card with avatar, info, badges, and price
 */
export function CardFeaturedPreview() {
  return (
    <Card size="md">
      <Card.Header gap="md" justify="between">
        <div style={{ display: "flex", gap: "var(--spacing-3)" }}>
          <Avatar shape="circle" size="md" variant="primary">
            AC
          </Avatar>
          <div>
            <Heading as="h3" size="lg">
              Alice Cooper
            </Heading>
            <Text size="sm" intent="secondary">
              Software Engineer • San Francisco
            </Text>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <Text size="lg" weight="semibold">
            $2,847.32
          </Text>
        </div>
      </Card.Header>
      <Card.Body gap="sm">
        <BadgeGroup>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Admin</Badge>
          <Badge variant="info">Verified</Badge>
          <Badge variant="success">Online</Badge>
        </BadgeGroup>
      </Card.Body>
    </Card>
  );
}

/**
 * Card with List using Dot and Text
 */
export function CardWithListPreview() {
  return (
    <Card size="md">
      <Card.Header>
        <Heading as="h3" size="lg">
          Job Details
        </Heading>
      </Card.Header>
      <Card.Body gap="sm">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "var(--spacing-2)",
          }}
        >
          <Dot variant="secondary" size="small" />
          <span>Software Engineer</span>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "var(--spacing-2)",
          }}
        >
          <Dot variant="secondary" size="small" />
          <span>San Francisco</span>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "var(--spacing-2)",
          }}
        >
          <Dot variant="secondary" size="small" />
          <span>Full-time</span>
        </div>
      </Card.Body>
    </Card>
  );
}

/**
 * Complex Card - Full example with avatar, heading, badges, and list
 */
export function CardComplexPreview() {
  return (
    <Card size="lg">
      <Card.Header gap="md" justify="start">
        <Avatar shape="circle" size="lg" variant="primary">
          AC
        </Avatar>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Heading as="h3" size="lg">
            Alice Cooper
          </Heading>
          <div style={{ display: "flex", gap: "var(--spacing-2)" }}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: "var(--spacing-2)",
              }}
            >
              <Dot variant="secondary" size="small" />
              <span style={{ fontSize: "0.875rem" }}>Software Engineer</span>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: "var(--spacing-2)",
              }}
            >
              <Dot variant="secondary" size="small" />
              <span style={{ fontSize: "0.875rem" }}>San Francisco</span>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body gap="sm">
        <BadgeGroup>
          <Badge variant="secondary">Active</Badge>
          <Badge variant="primary">Admin</Badge>
          <Badge variant="accent-1">Verified</Badge>
          <Badge variant="success">Online</Badge>
        </BadgeGroup>
      </Card.Body>
    </Card>
  );
}

/**
 * Card with Header, Body, and Footer
 */
export function CardWithFooterPreview() {
  return (
    <Card size="md">
      <Card.Header>
        <Heading as="h3">Task Summary</Heading>
      </Card.Header>
      <Card.Body gap="sm">
        <Text>Complete the project requirements and submit for review by end of week.</Text>
      </Card.Body>
      <Card.Footer gap="md" justify="between">
        <Text size="sm" intent="secondary">
          Due: March 15, 2024
        </Text>
        <Badge variant="warning">In Progress</Badge>
      </Card.Footer>
    </Card>
  );
}

/**
 * Interactive Card (button) - with Header, Body, Footer
 */
export function CardInteractivePreview() {
  return (
    <Card as="button" size="md" onClick={() => {}}>
      <Card.Header>
        <Heading as="h3">Click Me</Heading>
      </Card.Header>
      <Card.Body gap="sm">
        <Text>This card is interactive and can be clicked. It will highlight on hover.</Text>
      </Card.Body>
      <Card.Footer>
        <Text size="sm" intent="secondary">
          Interactive Button Card
        </Text>
      </Card.Footer>
    </Card>
  );
}

/**
 * Card with Border Variants
 */
export function CardBorderVariantsPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-6)",
      }}
    >
      <Card size="md" border="all-rounded">
        <Card.Header>
          <Heading as="h4" size="sm">
            All Rounded Border
          </Heading>
        </Card.Header>
        <Card.Body gap="sm">
          <Text size="sm">Full border with rounded corners</Text>
        </Card.Body>
      </Card>

      <Card size="md" border="vertical">
        <Card.Header>
          <Heading as="h4" size="sm">
            Vertical Border
          </Heading>
        </Card.Header>
        <Card.Body gap="sm">
          <Text size="sm">Left and right borders only</Text>
        </Card.Body>
      </Card>

      <Card size="md" border="horizontal">
        <Card.Header>
          <Heading as="h4" size="sm">
            Horizontal Border
          </Heading>
        </Card.Header>
        <Card.Body gap="sm">
          <Text size="sm">Top and bottom borders only</Text>
        </Card.Body>
      </Card>
    </div>
  );
}

/**
 * Card Sections for documentation
 */
export interface CardSection {
  key: string;
  title: string;
  preview: () => JSX.Element;
  code: string;
  language: string;
}

export const cardSections: CardSection[] = [
  {
    code: `<Card size="md">
  <Card.Header gap="md" justify="between">
    <div style={{ display: "flex", gap: "var(--spacing-3)" }}>
      <Avatar shape="circle" size="lg" variant="primary">AC</Avatar>
      <div>
        <Heading as="h3" size="lg">Alice Cooper</Heading>
        <Text size="sm" intent="secondary">
          Software Engineer • San Francisco
        </Text>
      </div>
    </div>
    <Text size="lg" weight="semibold">$2,847.32</Text>
  </Card.Header>
  <Card.Body gap="sm">
    <BadgeGroup>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Admin</Badge>
      <Badge variant="info">Verified</Badge>
      <Badge variant="success">Online</Badge>
    </BadgeGroup>
  </Card.Body>
</Card>`,
    key: "featured",
    language: "tsx",
    preview: CardFeaturedPreview,
    title: "Featured Example",
  },
  {
    code: `<Card size="md">
  <Card.Header>
    <Heading as="h3" size="lg">
      Job Details
    </Heading>
  </Card.Header>
  <Card.Body gap="sm">
    <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
      <Dot variant="secondary" size="small" />
      <span>Software Engineer</span>
    </div>
    <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
      <Dot variant="secondary" size="small" />
      <span>San Francisco</span>
    </div>
  </Card.Body>
</Card>`,
    key: "list",
    language: "tsx",
    preview: CardWithListPreview,
    title: "Card with List",
  },
  {
    code: `<Card size="lg">
  <Card.Header gap="md" justify="start">
    <Avatar shape="circle" size="lg" variant="primary">AC</Avatar>
    <div style={{ flex: 1 }}>
      <Heading as="h3" size="lg">Alice Cooper</Heading>
      {/* Additional content */}
    </div>
  </Card.Header>
  <Card.Body gap="sm">
    <BadgeGroup>
      <Badge variant="secondary">Active</Badge>
      <Badge variant="primary">Admin</Badge>
      <Badge variant="accent-1">Verified</Badge>
      <Badge variant="success">Online</Badge>
    </BadgeGroup>
  </Card.Body>
</Card>`,
    key: "complex",
    language: "tsx",
    preview: CardComplexPreview,
    title: "Complex Card (Full Example)",
  },
  {
    code: `<Card size="md">
  <Card.Header>
    <Heading as="h3" size="md">Task Summary</Heading>
  </Card.Header>
  <Card.Body gap="sm">
    <Text>Complete the project requirements and submit for review by end of week.</Text>
  </Card.Body>
  <Card.Footer gap="md" justify="between">
    <Text size="sm" intent="secondary">Due: March 15, 2024</Text>
    <Badge variant="warning">In Progress</Badge>
  </Card.Footer>
</Card>`,
    key: "with-footer",
    language: "tsx",
    preview: CardWithFooterPreview,
    title: "Card with Header, Body, and Footer",
  },
  {
    code: `<Card as="button" size="md" onClick={() => {}}>
  <Card.Header>
    <Heading as="h3" size="md">Click Me</Heading>
  </Card.Header>
  <Card.Body gap="sm">
    <Text>This card is interactive and can be clicked. It will highlight on hover.</Text>
  </Card.Body>
  <Card.Footer>
    <Text size="sm" intent="secondary">Interactive Button Card</Text>
  </Card.Footer>
</Card>`,
    key: "interactive",
    language: "tsx",
    preview: CardInteractivePreview,
    title: "Interactive Card (Button)",
  },
  {
    code: `<Card size="md" border="all-rounded" bordered>
  <Card.Header><Heading as="h4" size="sm">All Rounded</Heading></Card.Header>
  <Card.Body gap="sm"><Text size="sm">Full border with rounded corners</Text></Card.Body>
</Card>

<Card size="md" border="vertical" bordered>
  <Card.Header><Heading as="h4" size="sm">Vertical Border</Heading></Card.Header>
  <Card.Body gap="sm"><Text size="sm">Left and right borders only</Text></Card.Body>
</Card>

<Card size="md" border="horizontal" bordered>
  <Card.Header><Heading as="h4" size="sm">Horizontal Border</Heading></Card.Header>
  <Card.Body gap="sm"><Text size="sm">Top and bottom borders only</Text></Card.Body>
</Card>`,
    key: "border-variants",
    language: "tsx",
    preview: CardBorderVariantsPreview,
    title: "Border Variants",
  },
];

/**
 * Card Props Documentation
 */
export interface CardPropDoc {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const cardProps: CardPropDoc[] = [
  {
    default: "'div'",
    description:
      "Root element type. Button variant includes interactive styling (hover, cursor, focus ring). Div variant has no interactive styles.",
    name: "as",
    type: "'div' | 'button'",
  },
  {
    default: "'md'",
    description: "Card padding size (applied to root container)",
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
  },
  {
    default: "undefined",
    description: "Border style variant for custom border styling",
    name: "border",
    type: "'all-rounded' | 'vertical' | 'horizontal'",
  },
  {
    default: "'start'",
    description: "Flex justify-content alignment for Header items",
    name: "Header.justify",
    type: "'start' | 'center' | 'end' | 'between' | 'around'",
  },
  {
    default: "'md'",
    description: "Internal spacing between Header items",
    name: "Header.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
  },
  {
    default: "'left'",
    description: "Horizontal alignment of Body items (align-items)",
    name: "Body.align",
    type: "'left' | 'center' | 'right'",
  },
  {
    default: "'sm'",
    description: "Internal spacing between Body items",
    name: "Body.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
  },
  {
    default: "'start'",
    description: "Flex justify-content alignment for Footer items",
    name: "Footer.justify",
    type: "'start' | 'center' | 'end' | 'between' | 'around'",
  },
  {
    default: "'md'",
    description: "Internal spacing between Footer items",
    name: "Footer.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
  },
];

/**
 * Installation instructions
 */
export const cardInstallation = {
  code: `import { Card } from "@versaur/react";
import { Avatar } from "@versaur/react";
import { Badge } from "@versaur/react";
import { BadgeGroup } from "@versaur/react";
import { Heading } from "@versaur/react";
import { Text } from "@versaur/react";
import { Dot } from "@versaur/react";

// Use these components for composable card content`,
  language: "tsx" as const,
};

/**
 * Card Preview Component - Convenience export for doc pages
 */
export function CardPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {cardSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
        </div>
      ))}
    </div>
  );
}
