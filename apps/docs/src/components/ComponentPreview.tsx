"use client";

import { useState } from "react";
import { useFrameworkSelection } from "../hooks/useFrameworkSelection";
import { useShikiHighlighter } from "../hooks/useShikiHighlighter";
import { copyToClipboard } from "../utils/clipboard";
import styles from "./ComponentPreview.module.css";

interface ComponentPreviewProps {
  preview?: React.ComponentType<{ exampleKey: string }>;
  exampleKey: string;
  examples: Record<string, { code: string; language: string }>;
  defaultExpanded?: boolean;
}

export function ComponentPreview({
  preview: Preview,
  exampleKey,
  examples,
  defaultExpanded = false,
}: ComponentPreviewProps) {
  const { selectedFramework, isClient } = useFrameworkSelection();
  const { highlightCode, isReady } = useShikiHighlighter();
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);

  if (!isClient) return null;

  const example = examples[selectedFramework];
  const code = example?.code ?? "";
  const language = example?.language ?? "tsx";

  const handleCopy = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const codeHtml = isReady
    ? highlightCode(code, language)
    : null;

  const codeOnly = !Preview;

  return (
    <div className={styles.wrapper} {...(codeOnly ? { "data-code-only": "" } : {})}>
      {Preview && (
        <div className={styles.canvas}>
          <Preview exampleKey={exampleKey} />
        </div>
      )}
      <div className={styles.toolbar}>
        <button
          className={styles.toggleButton}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Hide Code" : "Show Code"}
        </button>
        {expanded && (
          <button className={styles.copyButton} onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      <div
        className={styles.codePanel}
        {...(expanded ? { "data-expanded": "" } : {})}
      >
        <div className={styles.codeContent}>
          {codeHtml ? (
            <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
          ) : (
            <pre>
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
