import { useState, useMemo, forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import { BottomSheet } from '@/overlays/bottom-sheet/bottom-sheet'
import type {
  BottomSheetInputProps,
  BottomSheetInputContextValue,
} from './types'

/**
 * BottomSheetInput is a readOnly TextInput that opens a BottomSheet when clicked.
 * BottomSheet content is provided by consumer as children.
 */
const BottomSheetInputRoot = forwardRef<
  HTMLInputElement,
  BottomSheetInputProps
>(({ children, onChange, value, ...textInputProps }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, onChange, value }),
    [isOpen, setIsOpen, onChange, value]
  ) satisfies BottomSheetInputContextValue

  return (
    <>
      <TextInput
        {...textInputProps}
        onChange={onChange}
        value={value}
        ref={ref}
        readOnly
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        aria-haspopup='dialog'
        aria-expanded={isOpen}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(true)
          }
        }}
      />
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {isOpen && children(contextValue)}
      </BottomSheet>
    </>
  )
})

export const BottomSheetInput = Object.assign(BottomSheetInputRoot, {
  Header: BottomSheet.Header,
  Body: BottomSheet.Body,
  Footer: BottomSheet.Footer,
  Title: BottomSheet.Title,
})
