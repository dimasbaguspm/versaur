import { useEffect } from "react";
import type { MutableRefObject } from "react";

// Singleton map to track open menus
const openMenus = new Map<string, HTMLElement>();

/**
 * Register a menu as open
 */
export function registerMenu(id: string, element: HTMLElement) {
  openMenus.set(id, element);
}

/**
 * Unregister a menu as open
 */
export function unregisterMenu(id: string) {
  openMenus.delete(id);
}

/**
 * Close a menu programmatically
 */
export function closeMenu(options: { id: string }) {
  const { id } = options;
  const menuElement = openMenus.get(id);
  if (menuElement && "hidePopover" in menuElement) {
    (menuElement as any).hidePopover();
  }
}

/**
 * Hook to register/unregister a menu
 */
export function useMenuState(
  id: string,
  menuRef: MutableRefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl || !id) return;

    registerMenu(id, menuEl);

    return () => {
      unregisterMenu(id);
    };
  }, [id, menuRef]);
}
