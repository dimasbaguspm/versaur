import { useEffect, useRef, useState } from "react";

interface PreviewFrameProps {
  component: string;
  exampleKey: string;
}

let frameCounter = 0;

export function PreviewFrame({ component, exampleKey }: PreviewFrameProps) {
  const [height, setHeight] = useState(100);
  const idRef = useRef(`preview-${frameCounter++}`);
  const id = idRef.current;

  const src = `/preview.html?component=${encodeURIComponent(component)}&exampleKey=${encodeURIComponent(exampleKey)}&id=${encodeURIComponent(id)}`;

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data;
      if (
        data &&
        data.type === "versaur-preview-resize" &&
        data.id === id &&
        typeof data.height === "number"
      ) {
        setHeight(data.height);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [id]);

  return (
    <iframe
      src={src}
      title={`${component} ${exampleKey} preview`}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
        display: "block",
      }}
    />
  );
}
