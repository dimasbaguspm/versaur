import { useState } from "react";
import { useFrameworkSelection } from "../hooks/use-framework-selection";
import { useShikiHighlighter } from "../hooks/use-shiki-highlighter";
import { copyToClipboard } from "../utils/clipboard";
import styles from "./component-preview.module.css";

interface ComponentPreviewProps {
  examples: Record<string, { code: string; language: string }>;
  defaultExpanded?: boolean;
  docked?: boolean;
}

export function ComponentPreview({
  examples,
  defaultExpanded = true,
  docked = false,
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

  const codeHtml = isReady ? highlightCode(code, language) : null;

  return (
    <div className={styles.wrapper} {...(docked ? { "data-docked": "" } : {})}>
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
