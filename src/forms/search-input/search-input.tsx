import { forwardRef } from 'react'
import { TextInput } from '../text-input/text-input'
import type { SearchInputProps } from './types'
import { Icon } from '@/primitive'
import { SearchIcon } from 'lucide-react'

/**
 * SearchInput component for Versaur UI
 *
 * A styled input field for search, extending TextInput and enforcing HTML search input standards
 * Follows browser standards and accessibility best practices
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      autoComplete = 'off',
      spellCheck = false,
      inputMode = 'search',
      placeholder = 'Search...',
      maxLength = 256,
      enterKeyHint = 'search',
      'aria-label': ariaLabel = 'Search', // internal default, not in props
      ...rest
    },
    ref
  ) => {
    return (
      <TextInput
        ref={ref}
        type='search'
        inputMode={inputMode}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        placeholder={placeholder}
        maxLength={maxLength}
        enterKeyHint={enterKeyHint}
        aria-label={ariaLabel}
        leftContent={<Icon as={SearchIcon} color='inherit' size='sm' />}
        {...rest}
      />
    )
  }
)
