import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

export interface ParsedComponent {
  componentName: string;
  classNames: string[];
  enumeratedAttrs: Map<string, Set<string>>;
  booleanAttrs: Set<string>;
}

/**
 * Parse a CSS module file and extract data-attribute selectors and class names.
 */
export function parseCssModule(
  css: string,
  componentName: string,
): ParsedComponent {
  const root = postcss.parse(css);
  const classNames = new Set<string>();
  const enumeratedAttrs = new Map<string, Set<string>>();
  const booleanAttrs = new Set<string>();

  root.walkRules((rule) => {
    selectorParser((selectors) => {
      selectors.walk((node) => {
        // Collect class names
        if (node.type === "class") {
          classNames.add(node.value);
        }

        // Collect data-* attributes
        if (node.type === "attribute" && node.attribute.startsWith("data-")) {
          const attrName = node.attribute.replace(/^data-/, "");

          // Skip aria-* attributes that might appear
          if (attrName.startsWith("aria-")) return;

          if (node.value) {
            // Enumerated: has a value like [data-variant="primary"]
            const cleaned = node.value.replace(/^['"]|['"]$/g, "");
            if (!enumeratedAttrs.has(attrName)) {
              enumeratedAttrs.set(attrName, new Set());
            }
            enumeratedAttrs.get(attrName)!.add(cleaned);
          } else {
            // Boolean: no value like [data-loading]
            // Only add as boolean if not already known as enumerated
            if (!enumeratedAttrs.has(attrName)) {
              booleanAttrs.add(attrName);
            }
          }
        }
      });
    }).processSync(rule.selector);
  });

  // If an attr appears as both boolean and enumerated, keep only enumerated
  for (const attrName of enumeratedAttrs.keys()) {
    booleanAttrs.delete(attrName);
  }

  return {
    componentName,
    classNames: [...classNames].sort(),
    enumeratedAttrs,
    booleanAttrs,
  };
}
