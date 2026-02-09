import { Card } from "./card";
import { Badge } from "../badge";

/**
 * Basic Card - Simple div-based card
 */
export function BasicCardPreview() {
  return (
    <Card size="md" shape="rounded">
      <Card.Header>
        <Card.Title>Simple Card</Card.Title>
      </Card.Header>
    </Card>
  );
}

/**
 * Card Button - Button-based card with interactive styling
 */
export function CardButtonPreview() {
  return (
    <Card
      as="button"
      size="md"
      shape="rounded"
      onClick={() => alert("Card clicked!")}
    >
      <Card.Header>
        <Card.Title>Clickable Card</Card.Title>
        <Card.Subtitle>As button element with hover effects</Card.Subtitle>
      </Card.Header>
    </Card>
  );
}

/**
 * Card with Avatar
 */
export function CardWithAvatarPreview() {
  return (
    <Card size="md" shape="rounded">
      <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
        <Card.Title>Alice Cooper</Card.Title>
      </Card.Header>
    </Card>
  );
}

/**
 * Card with Badges
 */
export function CardWithBadgesPreview() {
  return (
    <Card size="md" shape="rounded">
      <Card.Header>
        <Card.Title>User Status</Card.Title>
      </Card.Header>
      <Card.Footer>
        <Card.BadgeGroup>
          <Badge color="secondary">Active</Badge>
          <Badge color="primary">Admin</Badge>
          <Badge color="success">Online</Badge>
        </Card.BadgeGroup>
      </Card.Footer>
    </Card>
  );
}

/**
 * Card with List
 */
export function CardWithListPreview() {
  return (
    <Card size="md" shape="rounded">
      <Card.Header>
        <Card.Title>Job Details</Card.Title>
      </Card.Header>
      <Card.List>
        <Card.ListItem>Software Engineer</Card.ListItem>
        <Card.ListItem>San Francisco</Card.ListItem>
        <Card.ListItem>Full-time</Card.ListItem>
      </Card.List>
    </Card>
  );
}

/**
 * Complex Card - Full example combining all elements
 */
export function CardComplexPreview() {
  return (
    <Card size="lg" shape="rounded" bordered>
      <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
        <div>
          <Card.Title>Alice Cooper</Card.Title>
          <Card.Subtitle>
            <Card.List>
              <Card.ListItem>Software Engineer</Card.ListItem>
              <Card.ListItem>San Francisco</Card.ListItem>
            </Card.List>
          </Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Footer>
        <Card.BadgeGroup>
          <Badge color="secondary">Active</Badge>
          <Badge color="primary">Admin</Badge>
          <Badge color="accent_1">Verified</Badge>
          <Badge color="success">Online</Badge>
        </Card.BadgeGroup>
        <Card.Supplementary>$2,847.32</Card.Supplementary>
      </Card.Footer>
    </Card>
  );
}

/**
 * Card Size Variants
 */
export function CardSizeVariantsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card size="xs">
        <Card.Title>Extra Small</Card.Title>
      </Card>
      <Card size="sm">
        <Card.Title>Small</Card.Title>
      </Card>
      <Card size="md">
        <Card.Title>Medium</Card.Title>
      </Card>
      <Card size="lg">
        <Card.Title>Large</Card.Title>
      </Card>
      <Card size="xl">
        <Card.Title>Extra Large</Card.Title>
      </Card>
    </div>
  );
}

/**
 * Card Shape Variants
 */
export function CardShapeVariantsPreview() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card shape="rounded" size="md">
        <Card.Title>Rounded</Card.Title>
      </Card>
      <Card shape="square" size="md">
        <Card.Title>Square</Card.Title>
      </Card>
    </div>
  );
}

/**
 * Card Bordered Variants
 */
export function CardBorderedVariantsPreview() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card bordered={false} size="md">
        <Card.Title>No Border</Card.Title>
      </Card>
      <Card bordered={true} size="md">
        <Card.Title>Bordered</Card.Title>
      </Card>
    </div>
  );
}

/**
 * Card with Avatar in Header - Avatar embedded in header via props
 */
export function CardWithAvatarInHeaderPreview() {
  return (
    <Card size="md" shape="rounded">
      <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
        <div>
          <Card.Title>Alice Cooper</Card.Title>
          <Card.Subtitle>Senior Software Engineer</Card.Subtitle>
        </div>
      </Card.Header>
    </Card>
  );
}

/**
 * Card with Avatar and Badge in Header - Flexible placement
 */
export function CardWithHeaderBadgePreview() {
  return (
    <Card size="md" shape="rounded" bordered>
      <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "md" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div>
            <Card.Title>Alice Cooper</Card.Title>
            <Card.Subtitle>Active Now</Card.Subtitle>
          </div>
          <Card.Badge variant="success" size="small">
            Active
          </Card.Badge>
        </div>
      </Card.Header>
    </Card>
  );
}

/**
 * Card with Avatar Footer Badges - Separate Avatar usage
 */
export function CardWithAvatarFooterPreview() {
  return (
    <Card size="lg" shape="rounded" bordered>
      <Card.Header
        avatar="AC"
        avatarProps={{ shape: "circle", size: "lg", variant: "primary" }}
      >
        <div>
          <Card.Title>Alice Cooper</Card.Title>
          <Card.Subtitle>Software Engineer</Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Footer>
        <Card.BadgeGroup>
          <Card.Badge variant="success">Online</Card.Badge>
          <Card.Badge variant="primary">Admin</Card.Badge>
          <Card.Badge variant="info">Verified</Card.Badge>
        </Card.BadgeGroup>
      </Card.Footer>
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
    key: "basic",
    title: "Basic Card",
    preview: BasicCardPreview,
    code: `<Card size="md" shape="rounded">
  <Card.Header>
    <Card.Title>Simple Card</Card.Title>
  </Card.Header>
</Card>`,
    language: "tsx",
  },
  {
    key: "button",
    title: "Card as Button",
    preview: CardButtonPreview,
    code: `<Card as="button" size="md" shape="rounded" onClick={() => alert("Card clicked!")}>
  <Card.Header>
    <Card.Title>Clickable Card</Card.Title>
    <Card.Subtitle>As button element with hover effects</Card.Subtitle>
  </Card.Header>
</Card>`,
    language: "tsx",
  },
  {
    key: "avatar-header",
    title: "Card with Avatar in Header",
    preview: CardWithAvatarInHeaderPreview,
    code: `<Card size="md" shape="rounded">
  <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
    <div>
      <Card.Title>Alice Cooper</Card.Title>
      <Card.Subtitle>Senior Software Engineer</Card.Subtitle>
    </div>
  </Card.Header>
</Card>`,
    language: "tsx",
  },
  {
    key: "avatar-header-badge",
    title: "Card with Avatar and Header Badge",
    preview: CardWithHeaderBadgePreview,
    code: `<Card size="md" shape="rounded" bordered>
  <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "md" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
      <div>
        <Card.Title>Alice Cooper</Card.Title>
        <Card.Subtitle>Active Now</Card.Subtitle>
      </div>
      <Card.Badge variant="success" size="small">Active</Card.Badge>
    </div>
  </Card.Header>
</Card>`,
    language: "tsx",
  },
  {
    key: "avatar-footer",
    title: "Card with Avatar and Footer Badges",
    preview: CardWithAvatarFooterPreview,
    code: `<Card size="lg" shape="rounded" bordered>
  <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg", variant: "primary" }}>
    <div>
      <Card.Title>Alice Cooper</Card.Title>
      <Card.Subtitle>Software Engineer</Card.Subtitle>
    </div>
  </Card.Header>
  <Card.Footer>
    <Card.BadgeGroup>
      <Card.Badge variant="success">Online</Card.Badge>
      <Card.Badge variant="primary">Admin</Card.Badge>
      <Card.Badge variant="info">Verified</Card.Badge>
    </Card.BadgeGroup>
  </Card.Footer>
</Card>`,
    language: "tsx",
  },
  {
    key: "avatar",
    title: "Card with Avatar (Header Pattern)",
    preview: CardWithAvatarPreview,
    code: `<Card size="md" shape="rounded">
  <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
    <Card.Title>Alice Cooper</Card.Title>
  </Card.Header>
</Card>`,
    language: "tsx",
  },
  {
    key: "badges",
    title: "Card with Badges",
    preview: CardWithBadgesPreview,
    code: `<Card size="md" shape="rounded">
  <Card.Header>
    <Card.Title>User Status</Card.Title>
  </Card.Header>
  <Card.Footer>
    <Card.BadgeGroup>
      <Badge color="secondary">Active</Badge>
      <Badge color="primary">Admin</Badge>
      <Badge color="success">Online</Badge>
    </Card.BadgeGroup>
  </Card.Footer>
</Card>`,
    language: "tsx",
  },
  {
    key: "list",
    title: "Card with List",
    preview: CardWithListPreview,
    code: `<Card size="md" shape="rounded">
  <Card.Header>
    <Card.Title>Job Details</Card.Title>
  </Card.Header>
  <Card.List>
    <Card.ListItem>Software Engineer</Card.ListItem>
    <Card.ListItem>San Francisco</Card.ListItem>
    <Card.ListItem>Full-time</Card.ListItem>
  </Card.List>
</Card>`,
    language: "tsx",
  },
  {
    key: "complex",
    title: "Complex Card (Full Example)",
    preview: CardComplexPreview,
    code: `<Card size="lg" shape="rounded" bordered>
  <Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
    <div>
      <Card.Title>Alice Cooper</Card.Title>
      <Card.Subtitle>
        <Card.List>
          <Card.ListItem>Software Engineer</Card.ListItem>
          <Card.ListItem>San Francisco</Card.ListItem>
        </Card.List>
      </Card.Subtitle>
    </div>
  </Card.Header>
  <Card.Footer>
    <Card.BadgeGroup>
      <Badge color="secondary">Active</Badge>
      <Badge color="primary">Admin</Badge>
      <Badge color="accent_1">Verified</Badge>
      <Badge color="success">Online</Badge>
    </Card.BadgeGroup>
    <Card.Supplementary>$2,847.32</Card.Supplementary>
  </Card.Footer>
</Card>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Size Variants",
    preview: CardSizeVariantsPreview,
    code: `<Card size="xs">...</Card>
<Card size="sm">...</Card>
<Card size="md">...</Card>
<Card size="lg">...</Card>
<Card size="xl">...</Card>`,
    language: "tsx",
  },
  {
    key: "shapes",
    title: "Shape Variants",
    preview: CardShapeVariantsPreview,
    code: `<Card shape="rounded">...</Card>
<Card shape="square">...</Card>`,
    language: "tsx",
  },
  {
    key: "bordered",
    title: "Bordered Variants",
    preview: CardBorderedVariantsPreview,
    code: `<Card bordered={false}>...</Card>
<Card bordered={true}>...</Card>`,
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
      "Rendering element. Button variant includes interactive styling (hover, cursor, focus ring). Div variant has no interactive styles.",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Card padding size variant",
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
];

/**
 * Installation instructions
 */
export const cardInstallation = {
  code: `import { Card } from "@versaur/react";

// Also import related components as needed
import { Avatar } from "@versaur/react";
import { Badge } from "@versaur/react";`,
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
