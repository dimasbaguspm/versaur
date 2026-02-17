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
    <Card size="md" shape="rounded" bordered>
      <Card.Header gap="md" justify="between">
        <div style={{ display: "flex", gap: "var(--spacing-3)" }}>
          <Avatar shape="circle" size="lg" variant="primary">
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
    <Card size="md" shape="rounded">
      <Card.Header>
        <Heading as="h3" size="lg">
          Job Details
        </Heading>
      </Card.Header>
      <Card.Body gap="sm">
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-2)",
            alignItems: "center",
          }}
        >
          <Dot variant="secondary" size="small" />
          <span>Software Engineer</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-2)",
            alignItems: "center",
          }}
        >
          <Dot variant="secondary" size="small" />
          <span>San Francisco</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-2)",
            alignItems: "center",
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
    <Card size="lg" shape="rounded" bordered>
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
                display: "flex",
                gap: "var(--spacing-2)",
                alignItems: "center",
              }}
            >
              <Dot variant="secondary" size="small" />
              <span style={{ fontSize: "0.875rem" }}>Software Engineer</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-2)",
                alignItems: "center",
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
    key: "featured",
    title: "Featured Example",
    preview: CardFeaturedPreview,
    code: `<Card size="md" shape="rounded" bordered>
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
    language: "tsx",
  },
  {
    key: "list",
    title: "Card with List",
    preview: CardWithListPreview,
    code: `<Card size="md" shape="rounded">
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
    language: "tsx",
  },
  {
    key: "complex",
    title: "Complex Card (Full Example)",
    preview: CardComplexPreview,
    code: `<Card size="lg" shape="rounded" bordered>
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
    language: "tsx",
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
    name: "as",
    type: "'div' | 'button'",
    default: "'div'",
    description:
      "Root element type. Button variant includes interactive styling (hover, cursor, focus ring). Div variant has no interactive styles.",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Card padding size (applied to root container)",
  },
  {
    name: "shape",
    type: "'rounded' | 'square'",
    default: "'rounded'",
    description: "Card border radius style",
  },
  {
    name: "bordered",
    type: "boolean",
    default: "false",
    description: "Whether to show a border around the card",
  },
  {
    name: "Header.justify",
    type: "'start' | 'center' | 'end' | 'between' | 'around'",
    default: "'start'",
    description: "Flex justify-content alignment for Header items",
  },
  {
    name: "Header.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Internal spacing between Header items",
  },
  {
    name: "Body.align",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Horizontal alignment of Body items (align-items)",
  },
  {
    name: "Body.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
    default: "'sm'",
    description: "Internal spacing between Body items",
  },
  {
    name: "Footer.justify",
    type: "'start' | 'center' | 'end' | 'between' | 'around'",
    default: "'start'",
    description: "Flex justify-content alignment for Footer items",
  },
  {
    name: "Footer.gap",
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Internal spacing between Footer items",
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
