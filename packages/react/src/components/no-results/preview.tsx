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
    key: "search-no-results",
    title: "Search No Results",
    preview: SearchNoResultsPreview,
    code: `<NoResults
  icon={SearchXIcon}
  title="No results found"
/>`,
    language: "tsx",
  },
  {
    key: "search-with-action",
    title: "Search with Action",
    preview: SearchNoResultsWithActionPreview,
    code: `<NoResults
  icon={SearchXIcon}
  title="No results found"
  subtitle="Try adjusting your search terms or filters."
  action={<Button variant="primary">Clear Search</Button>}
/>`,
    language: "tsx",
  },
];

export const noResultsProps = [
  {
    name: "icon",
    type: "ComponentType<SVGProps<SVGSVGElement>>",
    default: "—",
    description: "Icon component to display. Required.",
  },
  {
    name: "title",
    type: "string",
    default: "—",
    description: "Main heading text for the empty state. Required.",
  },
  {
    name: "subtitle",
    type: "string | ReactNode",
    default: "undefined",
    description: "Secondary descriptive text. Optional.",
  },
  {
    name: "action",
    type: "ReactNode",
    default: "undefined",
    description: "Action element to render (typically a Button). Optional.",
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
