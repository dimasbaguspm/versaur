import { SearchIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { Icon } from "../../primitive/icon/icon"
import { TextInput } from "../text-input"
import type { SearchInputProps } from "./search-input.types"

/**
 * SearchInput component
 * A pre-configured TextInput with SearchIcon and search inputMode
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ leftIcon, ...rest }, ref) => (
  <TextInput ref={ref} inputMode="search" leftIcon={leftIcon ?? <Icon as={SearchIcon} />} {...rest} />
))

SearchInput.displayName = "SearchInput"
