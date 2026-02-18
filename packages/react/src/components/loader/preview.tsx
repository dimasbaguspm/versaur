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
    <div style={{ alignItems: "flex-start", display: "flex", gap: "3rem" }}>
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
    <div style={{ alignItems: "center", display: "flex", gap: "3rem" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h4>Spinner</h4>
        <Loader type="spinner" size="sm" />
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
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
    code: `<Loader type="spinner">Loading...</Loader>
<Loader type="bar">Loading...</Loader>`,
    key: "types",
    language: "tsx",
    preview: TypesPreview,
    title: "Types",
  },
  {
    code: `<Loader type="spinner" size="sm">Small</Loader>
<Loader type="spinner" size="lg">Large</Loader>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Loader type="spinner" size="sm" />
<Loader type="bar" size="sm" />`,
    key: "no-label",
    language: "tsx",
    preview: NoLabelPreview,
    title: "No Label",
  },
];

export const loaderProps = [
  {
    default: "'spinner'",
    description: "The type of loading indicator to display",
    name: "type",
    type: "'spinner' | 'bar'",
  },
  {
    default: "'sm'",
    description: "Size of the loading indicator",
    name: "size",
    type: "'sm' | 'lg'",
  },
  {
    default: "undefined",
    description: "Loading status text to display below the indicator",
    name: "children",
    type: "ReactNode",
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
