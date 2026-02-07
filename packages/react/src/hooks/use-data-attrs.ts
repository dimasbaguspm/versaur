/**
 * Converts component state props into data attributes for CSS styling
 * This is the core pattern for the data-attribute state machine
 */

type DataAttrInput = Record<string, string | boolean | number | undefined | null>;

export function useDataAttrs<T extends DataAttrInput>(
  props: T
): Record<string, string | undefined> {
  const dataAttrs: Record<string, string | undefined> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) {
      continue;
    }

    // Boolean values: presence indicates true
    if (typeof value === 'boolean') {
      if (value) {
        dataAttrs[`data-${key}`] = '';
      }
    }
    // String/number values: use as attribute value
    else if (typeof value === 'string' || typeof value === 'number') {
      dataAttrs[`data-${key}`] = String(value);
    }
  }

  return dataAttrs;
}
