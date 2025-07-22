import SpenicleSquare from './__assets__/spenicle-square.svg?react'
import SpenicleRounded from './__assets__/spenicle-rounded.svg?react'
import SpenicleCircle from './__assets__/spenicle-circle.svg?react'
import type { BrandAtomProps } from './types'

import { forwardRef, type SVGProps } from 'react'
import { brandSizeClass } from './helpers'
import { cn } from '@/utils'

/**
 * Atom: BrandLogo
 * Handles SVG rendering and shape at SVG level
 */
export const BrandLogo = forwardRef<SVGSVGElement, BrandAtomProps>(
  ({ shape = 'square', size, ...props }, ref) => {
    const SpenicleLogos: Record<
      NonNullable<BrandAtomProps['shape']>,
      React.FunctionComponent<SVGProps<SVGSVGElement>>
    > = {
      square: SpenicleSquare,
      rounded: SpenicleRounded,
      circle: SpenicleCircle,
    }

    const LogoComponent = SpenicleLogos[shape] || SpenicleSquare

    return (
      <LogoComponent
        ref={ref}
        {...props}
        className={cn('inline-block', brandSizeClass({ size }))}
      />
    )
  }
)
