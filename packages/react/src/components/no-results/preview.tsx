import { type ComponentType } from "react";
import { NoResults } from "./no-results";
import { SearchXIcon } from "@versaur/icons";
import { Button } from "../button";

export interface NoResultsSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

/**
 * Search No Results Preview
 */
function SearchNoResultsPreview() {
  return <NoResults icon={SearchXIcon} title="No results found" />;
}

/**
 * Search No Results with Action Preview
 */
function SearchNoResultsWithActionPreview() {
  return (
    <NoResults
      icon={SearchXIcon}
      title="No results found"
      subtitle="Try adjusting your search terms or filters."
      action={<Button variant="primary">Clear Search</Button>}
    />
  );
}

export const noResultsSections: NoResultsSection[] = [
  {
    code: `<NoResults
  icon={SearchXIcon}
  title="No results found"
/>`,
    key: "search-no-results",
    language: "tsx",
    preview: SearchNoResultsPreview,
    title: "Search No Results",
  },
  {
    code: `<NoResults
  icon={SearchXIcon}
  title="No results found"
  subtitle="Try adjusting your search terms or filters."
  action={<Button variant="primary">Clear Search</Button>}
/>`,
    key: "search-with-action",
    language: "tsx",
    preview: SearchNoResultsWithActionPreview,
    title: "Search with Action",
  },
];

export const noResultsProps = [
  {
    default: "—",
    description: "Icon component to display. Required.",
    name: "icon",
    type: "ComponentType<SVGProps<SVGSVGElement>>",
  },
  {
    default: "—",
    description: "Main heading text for the empty state. Required.",
    name: "title",
    type: "string",
  },
  {
    default: "undefined",
    description: "Secondary descriptive text. Optional.",
    name: "subtitle",
    type: "string | ReactNode",
  },
  {
    default: "undefined",
    description: "Action element to render (typically a Button). Optional.",
    name: "action",
    type: "ReactNode",
  },
];

export function NoResultsPreview() {
  return (
    <>
      {noResultsSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
        </div>
      ))}
    </>
  );
}
