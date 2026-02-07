import { useEffect, useRef, useState } from "react";

interface PreviewFrameProps {
  component: string;
}

let frameCounter = 0;

export function PreviewFrame({ component }: PreviewFrameProps) {
  const [height, setHeight] = useState(100);
  const idRef = useRef(`preview-${frameCounter++}`);
  const id = idRef.current;

  const src = `/preview.html?component=${encodeURIComponent(component)}&id=${encodeURIComponent(id)}`;

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
      title={`${component} preview`}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
        display: "block",
      }}
    />
  );
}
