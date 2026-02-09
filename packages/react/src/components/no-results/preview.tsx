import { type ComponentType } from "react";
import { NoResults } from "./no-results";
import { LoaderIcon, UserIcon } from "@versaur/icons";
import { Button } from "../button";

export interface NoResultsSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

/**
 * Default Preview
 */
function DefaultPreview() {
  return <NoResults icon={LoaderIcon} title="No data available" />;
}

/**
 * With Subtitle and Action Preview
 */
function WithSubtitleAndActionPreview() {
  return (
    <NoResults
      icon={LoaderIcon}
      title="Loading your content"
      subtitle="Please wait while we fetch the data for you."
      action={<Button variant="primary">Retry</Button>}
    />
  );
}

/**
 * Different Use Cases Preview
 */
function UseCasesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <NoResults
        icon={UserIcon}
        title="No users found"
        subtitle="Start inviting team members to get started."
        action={<Button variant="primary">Invite Users</Button>}
      />
      <NoResults
        icon={LoaderIcon}
        title="Nothing to see here"
        subtitle="This section is currently empty."
      />
    </div>
  );
}

export const noResultsSections: NoResultsSection[] = [
  {
    key: "default",
    title: "Default",
    preview: DefaultPreview,
    code: `<NoResults
  icon={LoaderIcon}
  title="No data available"
/>`,
    language: "tsx",
  },
  {
    key: "with-subtitle-action",
    title: "With Subtitle and Action",
    preview: WithSubtitleAndActionPreview,
    code: `<NoResults
  icon={LoaderIcon}
  title="Loading your content"
  subtitle="Please wait while we fetch the data for you."
  action={<Button variant="primary">Retry</Button>}
/>`,
    language: "tsx",
  },
  {
    key: "use-cases",
    title: "Use Cases",
    preview: UseCasesPreview,
    code: `<NoResults
  icon={UserIcon}
  title="No users found"
  subtitle="Start inviting team members to get started."
  action={<Button variant="primary">Invite Users</Button>}
/>

<NoResults
  icon={LoaderIcon}
  title="Nothing to see here"
  subtitle="This section is currently empty."
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

export const noResultsInstallation = {
  code: `npm install @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
};

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
