import type { AppBarProps } from './types'
import { cn } from '@/utils/cn'
import { appBarVariants } from './helpers'
import {
  AppBarLeading,
  AppBarHeadline,
  AppBarSubtitle,
  AppBarTrailing,
  AppBarCenter,
  AppBarBottom,
} from './app-bar.atoms'

const AppBarRoot = ({
  children,
  className,
  variant = 'primary',
}: AppBarProps) => {
  return (
    <header
      className={cn(appBarVariants({ variant }), className)}
      role={'banner'}
    >
      {children}
    </header>
  )
}

export const AppBar = Object.assign(AppBarRoot, {
  Leading: AppBarLeading,
  Headline: AppBarHeadline,
  Subtitle: AppBarSubtitle,
  Trailing: AppBarTrailing,
  Center: AppBarCenter,
  Bottom: AppBarBottom,
})
