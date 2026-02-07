import { useEffect, useRef } from "react";
import { previewRegistry } from "../previews/registry";

export function PreviewRenderer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const params = new URLSearchParams(window.location.search);
  const component = params.get("component");
  const id = params.get("id");

  useEffect(() => {
    if (!containerRef.current || !id) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        window.parent.postMessage(
          { type: "versaur-preview-resize", id, height },
          "*",
        );
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [id]);

  if (!component) {
    return <div>Missing component param</div>;
  }

  const Preview = previewRegistry[component];
  if (!Preview) {
    return <div>Unknown component: {component}</div>;
  }

  return (
    <div ref={containerRef}>
      <Preview />
    </div>
  );
}
