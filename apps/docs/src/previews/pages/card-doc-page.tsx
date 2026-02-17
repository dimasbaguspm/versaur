import {
  cardSections,
  cardInstallation,
  cardProps,
  type CardSection,
} from "@versaur/react/card";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function CardDocPage() {
  return (
    <>
      <h2>Featured Example</h2>
      {cardSections.find((s) => s.key === "featured") && (
        <div>
          <p>
            A complete example showing a card with avatar, contact information,
            badges, and supplementary data (price). This demonstrates the
            flexibility of the new composable Card API.
          </p>
          {(() => {
            const section = cardSections.find((s) => s.key === "featured")!;
            return (
              <div style={{ marginBottom: "2rem" }}>
                <section.preview />
                <ComponentPreview examples={makeExamples(section)} />
              </div>
            );
          })()}
        </div>
      )}

      {cardSections.map((section: CardSection) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>API Reference</h2>

      <h3>Card Root Props</h3>
      <p>
        Configure the card container with size, shape, and border visibility.
      </p>
      <PropsTable props={cardProps} />

      <h2>Layout Regions</h2>

      <h3>Card.Header</h3>
      <p>
        Flexible layout container for top section. Use for titles, avatars, and
        primary content.
      </p>
      <ul>
        <li>
          <strong>justify</strong> - Flex justify-content: 'start', 'center',
          'end', 'between', 'around'
        </li>
        <li>
          <strong>gap</strong> - Internal spacing: 'none', 'xs', 'sm', 'md',
          'lg'
        </li>
      </ul>

      <h3>Card.Body</h3>
      <p>
        Flexible column layout container for main content. Auto-grows to fill
        available space.
      </p>
      <ul>
        <li>
          <strong>align</strong> - Horizontal alignment: 'left', 'center',
          'right'
        </li>
        <li>
          <strong>gap</strong> - Internal spacing: 'none', 'xs', 'sm', 'md',
          'lg'
        </li>
      </ul>

      <h3>Card.Footer</h3>
      <p>
        Flexible layout container for bottom section. Use for actions, badges,
        or supplementary content.
      </p>
      <ul>
        <li>
          <strong>justify</strong> - Flex justify-content: 'start', 'center',
          'end', 'between', 'around'
        </li>
        <li>
          <strong>gap</strong> - Internal spacing: 'none', 'xs', 'sm', 'md',
          'lg'
        </li>
      </ul>

      <h2>Composition Examples</h2>

      <h3>Header with Avatar</h3>
      <p>
        Use Card.Header with Avatar and Heading for a flexible header layout:
      </p>
      <pre>
        {`<Card.Header gap="md">
  <Avatar shape="circle" size="lg">AC</Avatar>
  <Heading as="h3" size="md">Alice Cooper</Heading>
</Card.Header>`}
      </pre>

      <h3>Body with Badges</h3>
      <p>
        Compose badge groups by placing badges in a flexbox div inside
        Card.Body:
      </p>
      <pre>
        {`<Card.Body gap="sm">
  <div style={{ display: "flex", gap: "var(--spacing-2)" }}>
    <Badge variant="success">Active</Badge>
    <Badge variant="primary">Admin</Badge>
  </div>
</Card.Body>`}
      </pre>

      <h3>Body with List</h3>
      <p>
        Create list-like content using Dot and Text components for visual
        separators:
      </p>
      <pre>
        {`<Card.Body gap="sm">
  <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
    <Dot variant="secondary" size="small" />
    <span>Software Engineer</span>
  </div>
  <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
    <Dot variant="secondary" size="small" />
    <span>San Francisco</span>
  </div>
</Card.Body>`}
      </pre>

      <h3>Footer with Buttons</h3>
      <p>Use Card.Footer with justify="between" for button alignment:</p>
      <pre>
        {`<Card.Footer justify="between">
  <Button variant="ghost">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</Card.Footer>`}
      </pre>

      <h2>Migration Guide</h2>

      <h3>From Old Card API</h3>
      <p>
        If you're upgrading from the previous Card version, here are common
        migration patterns:
      </p>

      <h4>Card.Title → Heading</h4>
      <pre>
        {`// Before
<Card.Title>User Profile</Card.Title>

// After
<Heading as="h3" size="md">User Profile</Heading>`}
      </pre>

      <h4>Card.Subtitle → Text</h4>
      <pre>
        {`// Before
<Card.Subtitle>Software Engineer</Card.Subtitle>

// After
<Text size="sm" intent="secondary">Software Engineer</Text>`}
      </pre>

      <h4>Card.Header with avatar prop</h4>
      <pre>
        {`// Before
<Card.Header avatar="AC" avatarProps={{ shape: "circle", size: "lg" }}>
  <Card.Title>Alice</Card.Title>
</Card.Header>

// After
<Card.Header gap="md">
  <Avatar shape="circle" size="lg">AC</Avatar>
  <Heading as="h3" size="md">Alice</Heading>
</Card.Header>`}
      </pre>

      <h4>Card.List + Card.ListItem</h4>
      <pre>
        {`// Before
<Card.List>
  <Card.ListItem>Item 1</Card.ListItem>
  <Card.ListItem>Item 2</Card.ListItem>
</Card.List>

// After
<Card.Body gap="sm">
  <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
    <Dot variant="secondary" size="small" />
    <span>Item 1</span>
  </div>
  <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
    <Dot variant="secondary" size="small" />
    <span>Item 2</span>
  </div>
</Card.Body>`}
      </pre>

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(cardInstallation)} />
    </>
  );
}
