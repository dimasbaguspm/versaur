/**
 * Drawer component exports
 *
 * Provides a sliding drawer overlay component with compound pattern
 * Supports left/right positioning, multiple sizes, and glass variant
 */

export { Drawer } from './drawer'
export {
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from './drawer.atoms'
export { useDrawerContext } from './context'

// Export types
export type {
  DrawerProps,
  DrawerHeaderProps,
  DrawerBodyProps,
  DrawerFooterProps,
  DrawerOverlayProps,
  DrawerContextValue,
  DrawerPosition,
  DrawerSize,
  DrawerVariant,
  DrawerVariantProps,
  DrawerTransitionType,
} from './types'
