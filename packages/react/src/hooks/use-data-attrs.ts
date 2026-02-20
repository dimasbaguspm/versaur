/**
 * Converts component state props into data attributes for CSS styling
 * This is the core pattern for the data-attribute state machine
 */

type DataAttrInput = Record<string, string | boolean | number | undefined | null>

// Convert camelCase to kebab-case
function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

export function useDataAttrs<T extends DataAttrInput>(props: T): Record<string, string | undefined> {
  const dataAttrs: Record<string, string | undefined> = {}

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) {
      continue
    }

    if (typeof value === "boolean") {
      // Skip false boolean values (only include true)
    }

    const kebabKey = camelToKebab(key)

    // Boolean values: presence indicates true
    if (typeof value === "boolean") {
      if (value) {
        dataAttrs[`data-${kebabKey}`] = Boolean(value).toString()
      }
    }
    // String/number values: use as attribute value
    else if (typeof value === "string" || typeof value === "number") {
      dataAttrs[`data-${kebabKey}`] = String(value)
    }
  }

  return dataAttrs
}
