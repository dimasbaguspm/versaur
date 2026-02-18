import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * Hook for observing resize events on a DOM element
 *
 * @param ref - React ref to the element to observe
 * @param callback - Function to call when element is resized
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * useResizeObserver(containerRef, () => {
 *   console.log("Container resized!");
 * });
 * ```
 */
export function useResizeObserver(ref: RefObject<HTMLElement>, callback: () => void): void {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, callback]);
}
