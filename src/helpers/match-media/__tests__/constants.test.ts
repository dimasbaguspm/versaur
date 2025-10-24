import { describe, it, expect } from 'vitest'
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../constants'

describe('constants', () => {
  it('should define BREAKPOINT_MOBILE correctly', () => {
    expect(BREAKPOINT_MOBILE).toBe('(max-width: 767px)')
  })

  it('should define BREAKPOINT_TABLET correctly', () => {
    expect(BREAKPOINT_TABLET).toBe('(min-width: 768px) and (max-width: 1023px)')
  })

  it('should define BREAKPOINT_DESKTOP correctly', () => {
    expect(BREAKPOINT_DESKTOP).toBe('(min-width: 1024px)')
  })
})
