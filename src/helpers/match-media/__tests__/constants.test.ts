import { describe, it, expect } from 'vitest'
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE_AND_TABLET,
  BREAKPOINT_TABLET_AND_DESKTOP,
  BREAKPOINT_MOBILE_PORTRAIT,
  BREAKPOINT_MOBILE_LANDSCAPE,
  BREAKPOINT_TABLET_PORTRAIT,
  BREAKPOINT_TABLET_LANDSCAPE,
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

  it('should define BREAKPOINT_MOBILE_AND_TABLET correctly', () => {
    expect(BREAKPOINT_MOBILE_AND_TABLET).toBe('(max-width: 1023px)')
  })

  it('should define BREAKPOINT_TABLET_AND_DESKTOP correctly', () => {
    expect(BREAKPOINT_TABLET_AND_DESKTOP).toBe('(min-width: 768px)')
  })

  it('should define BREAKPOINT_MOBILE_PORTRAIT correctly', () => {
    expect(BREAKPOINT_MOBILE_PORTRAIT).toBe(
      '(max-width: 767px) and (orientation: portrait)'
    )
  })

  it('should define BREAKPOINT_MOBILE_LANDSCAPE correctly', () => {
    expect(BREAKPOINT_MOBILE_LANDSCAPE).toBe(
      '(max-width: 767px) and (orientation: landscape)'
    )
  })

  it('should define BREAKPOINT_TABLET_PORTRAIT correctly', () => {
    expect(BREAKPOINT_TABLET_PORTRAIT).toBe(
      '(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)'
    )
  })

  it('should define BREAKPOINT_TABLET_LANDSCAPE correctly', () => {
    expect(BREAKPOINT_TABLET_LANDSCAPE).toBe(
      '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)'
    )
  })
})
