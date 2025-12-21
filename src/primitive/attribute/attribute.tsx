import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { AttributeProps } from './types'
import { Text } from '../text'
import { Heading } from '../heading'

/**
 * Attribute component for Versaur UI
 *
 * A simple component that displays a title and content in a structured format.
 *
 * Usage:
 * <Attribute title="Name">John Doe</Attribute>
 */
export const Attribute = forwardRef<HTMLDivElement, AttributeProps>(
  function Attribute({ title, children, className, hasMargin, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('space-y-1', className, hasMargin && 'mb-4')}
        {...props}
      >
        <Heading as='h6' color='gray' className='leading-none'>
          {title}
        </Heading>
        <Text as='small' fontWeight='normal'>
          {children}
        </Text>
      </div>
    )
  }
)
