import SpenicleSquare from './__assets__/spenicle-square.svg?react'
import SpenicleRounded from './__assets__/spenicle-rounded.svg?react'
import SpenicleCircle from './__assets__/spenicle-circle.svg?react'
import HubSquare from './__assets__/hub-square.svg?react'
import HubRounded from './__assets__/hub-rounded.svg?react'
import HubCircle from './__assets__/hub-circle.svg?react'
import type { BrandAtomProps } from './types'

import { forwardRef, type SVGProps } from 'react'
import { brandSizeClass } from './helpers'
import { cn } from '@/utils'

/**
 * Atom: BrandLogo
 * Handles SVG rendering and shape at SVG level
 */
export const BrandLogo = forwardRef<SVGSVGElement, BrandAtomProps>(
  ({ shape = 'square', size, name = 'spenicle', ...props }, ref) => {
    // Map of brand name to shape to SVG component
    const logos: Record<
      string,
      Record<string, React.FunctionComponent<SVGProps<SVGSVGElement>>>
    > = {
      spenicle: {
        square: SpenicleSquare,
        rounded: SpenicleRounded,
        circle: SpenicleCircle,
      },
      hub: {
        square: HubSquare,
        rounded: HubRounded,
        circle: HubCircle,
      },
    }

    const brand = logos[name] || logos['spenicle']
    const LogoComponent = brand[shape || 'square'] || SpenicleSquare

    return (
      <LogoComponent
        ref={ref}
        {...props}
        className={cn('inline-block', brandSizeClass({ size }))}
      />
    )
  }
)
