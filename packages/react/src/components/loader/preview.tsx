import type { ComponentType } from "react";
import { Loader } from "./loader";

export interface LoaderSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function TypesPreview() {
  return (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Spinner</h4>
        <Loader type="spinner" size="sm">
          Loading...
        </Loader>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Bar</h4>
        <Loader type="bar" size="sm">
          Loading...
        </Loader>
      </div>
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>Small</h4>
        <Loader type="spinner" size="sm">
          Loading...
        </Loader>
      </div>
      <div>
        <h4>Large</h4>
        <Loader type="spinner" size="lg">
          Loading...
        </Loader>
      </div>
    </div>
  );
}

function NoLabelPreview() {
  return (
    <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h4>Spinner</h4>
        <Loader type="spinner" size="sm" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h4>Bar</h4>
        <Loader type="bar" size="sm" />
      </div>
    </div>
  );
}

export const loaderSections: LoaderSection[] = [
  {
    key: "types",
    title: "Types",
    preview: TypesPreview,
    code: `<Loader type="spinner">Loading...</Loader>
<Loader type="bar">Loading...</Loader>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Loader type="spinner" size="sm">Small</Loader>
<Loader type="spinner" size="lg">Large</Loader>`,
    language: "tsx",
  },
  {
    key: "no-label",
    title: "No Label",
    preview: NoLabelPreview,
    code: `<Loader type="spinner" size="sm" />
<Loader type="bar" size="sm" />`,
    language: "tsx",
  },
];

export const loaderProps = [
  {
    name: "type",
    type: "'spinner' | 'bar'",
    default: "'spinner'",
    description: "The type of loading indicator to display",
  },
  {
    name: "size",
    type: "'sm' | 'lg'",
    default: "'sm'",
    description: "Size of the loading indicator",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "Loading status text to display below the indicator",
  },
];

export function LoaderPreview() {
  return (
    <>
      {loaderSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
