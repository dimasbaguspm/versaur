import type { Ref } from "react";

/**
 * Combines multiple refs into a single ref callback
 * Handles both function and object refs
 */
export function combineRefs<T>(...refs: (Ref<T> | undefined)[]): (value: T | null) => void {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref && "current" in ref) {
        // Only assign if ref is a mutable ref
        try {
          (ref as React.MutableRefObject<T | null>).current = value;
        } catch {
          // Ignore if ref.current is read-only
        }
      }
    });
  };
}
