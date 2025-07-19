/**
/**
 * IconProps defines the props for the Icon component
 * @property color - Color variant based on Versaur color system
 * @property size - Size of the icon (xs, sm, md, lg, xl)
 * @property children - The icon element (usually from lucide-react)
 * Extends HTMLAttributes<HTMLSpanElement> for native span props
 */
/**
 * IconProps defines the props for the Icon component
 * @property as - Icon component to render (e.g., from lucide-react)
 * @property color - Color variant based on Versaur color system
 * @property size - Size of the icon (xs, sm, md, lg, xl)
 * Extends SVG props for native SVG attributes
 */
export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'children'> & {
  /**
   * Icon component to render (e.g., from lucide-react)
   */
  as: React.ComponentType<{ className?: string }>
  /**
   * Color variant
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'neutral'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
  /**
   * Size of the icon
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
