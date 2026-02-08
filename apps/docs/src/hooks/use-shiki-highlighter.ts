import { useEffect, useState } from "react";
import type { Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;
let highlighterInstance: Highlighter | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (highlighterInstance) return Promise.resolve(highlighterInstance);
  if (highlighterPromise) return highlighterPromise;

  highlighterPromise = import("shiki")
    .then(({ createHighlighter }) =>
      createHighlighter({
        themes: ["github-dark"],
        langs: ["tsx", "vue", "bash", "typescript", "css"],
      }),
    )
    .then((instance) => {
      highlighterInstance = instance;
      return instance;
    });

  return highlighterPromise;
}

export function useShikiHighlighter() {
  const [isReady, setIsReady] = useState(highlighterInstance !== null);

  useEffect(() => {
    if (highlighterInstance) {
      setIsReady(true);
      return;
    }
    getHighlighter().then(() => setIsReady(true));
  }, []);

  function highlightCode(code: string, lang: string): string {
    if (!highlighterInstance) return code;
    return highlighterInstance.codeToHtml(code, {
      lang,
      theme: "github-dark",
    });
  }

  return { highlightCode, isReady };
}
