"use client";

import { useEffect, useState } from "react";
import { useFrameworkSelection } from "../hooks/useFrameworkSelection";
import { buttonExamples } from "@versaur/react/button";
import { CopyButton } from "./CopyButton";

type ExampleKey = "variants" | "sizes" | "states" | "combined" | "installation";

interface CodeBlockProps {
  exampleKey: ExampleKey;
}

// Placeholder for Vue examples - to be implemented
const buttonExamplesVue: Record<
  ExampleKey,
  { code: string; language: "vue" | "bash" }
> = {
  variants: { code: "", language: "vue" },
  sizes: { code: "", language: "vue" },
  states: { code: "", language: "vue" },
  combined: { code: "", language: "vue" },
  installation: { code: "", language: "bash" },
};

// Placeholder for Angular examples - to be implemented
const buttonExamplesAngular: Record<
  ExampleKey,
  { code: string; language: "angular" | "bash" }
> = {
  variants: { code: "", language: "angular" },
  sizes: { code: "", language: "angular" },
  states: { code: "", language: "angular" },
  combined: { code: "", language: "angular" },
  installation: { code: "", language: "bash" },
};

const examplesByFramework: Record<
  string,
  Record<ExampleKey, { code: string; language: string }>
> = {
  react: buttonExamples,
  vue: buttonExamplesVue,
  angular: buttonExamplesAngular,
};

export function CodeBlock({ exampleKey }: CodeBlockProps) {
  const { selectedFramework, isClient } = useFrameworkSelection();
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<"tsx" | "vue" | "angular" | "bash">(
    "tsx",
  );

  useEffect(() => {
    if (!isClient) return;

    const examples = examplesByFramework[selectedFramework];
    const example = examples[exampleKey];

    if (example) {
      setCode(example.code);
      setLanguage(
        example.language === "bash"
          ? "bash"
          : (example.language as "tsx" | "vue" | "angular"),
      );
    }
  }, [selectedFramework, exampleKey, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="code-block">
      <div className="code-header">
        <CopyButton code={code} />
      </div>
      <div className="code-content">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
