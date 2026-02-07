"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { _Button as Button } from "./button";

type ExampleKey = "variants" | "sizes" | "states" | "combined";

interface ButtonPreviewProps {
  nodeId: string;
  exampleKey: ExampleKey;
}

export function ReactButtonPreview({
  exampleKey,
}: {
  exampleKey: string;
}) {
  if (exampleKey === "variants") {
    return (
      <div className="button-group">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    );
  }

  if (exampleKey === "sizes") {
    return (
      <div className="button-group" style={{ alignItems: "center" }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    );
  }

  if (exampleKey === "states") {
    return (
      <div className="button-group">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button pressed>Pressed</Button>
      </div>
    );
  }

  if (exampleKey === "combined") {
    return (
      <div className="button-group">
        <Button variant="primary" size="large">
          Large Primary
        </Button>
        <Button variant="danger" size="small">
          Small Danger
        </Button>
        <Button variant="secondary" loading>
          Loading Secondary
        </Button>
      </div>
    );
  }

  return null;
}

export function ButtonPreview({ nodeId, exampleKey }: ButtonPreviewProps) {
  useEffect(() => {
    const container = document.getElementById(nodeId);
    if (!container) return;

    const content = <ReactButtonPreview exampleKey={exampleKey} />;

    const root = createRoot(container);
    root.render(content);

    return () => {
      root.unmount();
    };
  }, [nodeId, exampleKey]);

  return null;
}
