import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Re-export cva and VariantProps for convenience
 * CVA provides a powerful, type-safe way to handle component variants
 * with better performance and developer experience than custom solutions
 */
export { cva, type VariantProps }

/**
 * @deprecated Use `cva` directly instead
 * This function is kept for backwards compatibility but will be removed in a future version
 */
export function createVariants<
  T extends Record<string, Record<string, string>>,
>(
  config: T
): (props: { [K in keyof T]?: keyof T[K] | null | undefined }) => string {
  return props => {
    const classes: string[] = []

    for (const [key, value] of Object.entries(props)) {
      if (value != null && config[key] && config[key][value as string]) {
        classes.push(config[key][value as string])
      }
    }

    return classes.join(' ')
  }
}
