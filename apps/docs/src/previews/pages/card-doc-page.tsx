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
      {cardSections.map((section: CardSection) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>API Reference</h2>

      <h3>Card Root Props</h3>
      <PropsTable props={cardProps} />

      <h2>Sub-Components</h2>
      <p>
        The Card component includes the following sub-components for composing
        flexible card layouts:
      </p>
      <ul>
        <li>
          <strong>Card.Avatar</strong> - Namespace wrapper for Avatar component;
          can be embedded in Card.Header via props or used standalone
        </li>
        <li>
          <strong>Card.Header</strong> - Top section for title and subtitle;
          accepts optional avatar and avatarProps for in-header avatar placement
          (flex-start aligned)
        </li>
        <li>
          <strong>Card.Title</strong> - Heading for the card
        </li>
        <li>
          <strong>Card.Subtitle</strong> - Secondary heading or description
        </li>
        <li>
          <strong>Card.Footer</strong> - Bottom section for badges and
          supplementary info
        </li>
        <li>
          <strong>Card.Badge</strong> - Namespace wrapper for Badge component;
          can be placed in Header or Footer for flexible badge positioning
        </li>
        <li>
          <strong>Card.BadgeGroup</strong> - Container for multiple badges with
          spacing
        </li>
        <li>
          <strong>Card.Supplementary</strong> - Additional info slot (price,
          status, etc)
        </li>
        <li>
          <strong>Card.List</strong> - List wrapper for list items
        </li>
        <li>
          <strong>Card.ListItem</strong> - Individual list item with separator
          dot
        </li>
      </ul>

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(cardInstallation)} />
    </>
  );
}
