import React, {
  cloneElement,
  useId,
  useState,
  useRef,
  useEffect,
  type FC,
} from 'react'
import { cn } from '@/utils/cn'
import type { TooltipRootProps } from './types'
import { Text } from '@/primitive/text'
import { useTooltipPositionRef } from './use-tooltip-position'
import { tooltipPopoverCva } from './helpers'

export const Tooltip: FC<TooltipRootProps & { delay?: number }> = ({
  children,
  content,
  position = 'auto',
  popoverClassName,
  delay,
  ...props
}) => {
  const popoverId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const openTimeout = useRef<NodeJS.Timeout | null>(null)

  // Accessibility: aria-describedby, tabIndex, keyboard focus
  const handleOpen = () => {
    if (delay) {
      openTimeout.current = setTimeout(() => setIsOpen(true), delay)
    } else {
      setIsOpen(true)
    }
  }
  const handleClose = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current)
    setIsOpen(false)
  }

  useEffect(() => {
    return () => {
      if (openTimeout.current) clearTimeout(openTimeout.current)
    }
  }, [])

  const triggerProps = {
    tabIndex: 0,
    'aria-describedby': popoverId,
    onMouseEnter: handleOpen,
    onFocus: handleOpen,
    onMouseLeave: handleClose,
    onBlur: handleClose,
    ...props,
  }

  const { ref, position: actualPosition } = useTooltipPositionRef(position)

  return (
    <div className='relative w-fit' ref={ref}>
      {cloneElement(children as React.ReactElement, triggerProps)}
      <div
        id={popoverId}
        className={cn(
          tooltipPopoverCva({ position: actualPosition }),
          popoverClassName,
          !isOpen && 'opacity-0 pointer-events-none'
        )}
        role='tooltip'
        aria-hidden={!isOpen}
      >
        <Text as='small' fontWeight='normal' color='black'>
          {content}
        </Text>
      </div>
    </div>
  )
}
