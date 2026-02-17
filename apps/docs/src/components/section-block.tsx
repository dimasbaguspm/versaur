import { ComponentType } from "react";
import { ComponentPreview } from "./component-preview";
import { PreviewCanvas, type PreviewCanvasProps } from "./preview-canvas";
import { makeExamples } from "../utils/make-examples";

interface SectionBlockProps {
  section: {
    key?: string;
    title: string;
    preview: ComponentType;
    code: string;
    language: string;
  };
  canvas?: Omit<PreviewCanvasProps, "children">;
  titleAs?: "h2" | "h3" | "h4";
}

export function SectionBlock({
  section,
  canvas,
  titleAs: Title = "h3",
}: SectionBlockProps) {
  const Preview = section.preview;

  return (
    <div>
      <Title>{section.title}</Title>
      <PreviewCanvas {...canvas}>
        <Preview />
      </PreviewCanvas>
      <ComponentPreview examples={makeExamples(section)} docked />
    </div>
  );
}
