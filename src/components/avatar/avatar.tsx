import { Avatar as AvatarRoot, AvatarImage } from './avatar.atoms'

/**
 * Avatar component - displays user avatars with fallback support
 * Uses simple compound pattern for flexible composition
 *
 * @example
 * ```tsx
 * // Basic avatar with fallback text
 * <Avatar>
 *   JD
 * </Avatar>
 *
 * // Different variants and sizes
 * <Avatar variant="secondary" size="lg" shape="rounded">
 *   <Avatar.Image src="/avatar.jpg" alt="Jane Smith" />
 *   JS
 * </Avatar>
 * ```
 */
export const Avatar = Object.assign(AvatarRoot, {
  /**
   * AvatarImage sub-component for displaying images with fallback behavior
   */
  Image: AvatarImage,
})
