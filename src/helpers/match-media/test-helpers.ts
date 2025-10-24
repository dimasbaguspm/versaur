import { vi } from 'vitest'

/**
 * Creates a mock MediaQueryList for testing
 */
export const createMatchMediaMock = (matches: boolean) => {
  const listeners: ((event: MediaQueryListEvent) => void)[] = []

  return {
    matches,
    media: '',
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(
      (event: string, listener: (event: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          listeners.push(listener)
        }
      }
    ),
    removeEventListener: vi.fn(
      (event: string, listener: (event: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          const index = listeners.indexOf(listener)
          if (index > -1) {
            listeners.splice(index, 1)
          }
        }
      }
    ),
    dispatchEvent: vi.fn(),
    // Helper to trigger change event
    _triggerChange: (newMatches: boolean) => {
      listeners.forEach(listener => {
        listener({ matches: newMatches } as MediaQueryListEvent)
      })
    },
  }
}

/**
 * Setup and teardown for matchMedia mocking
 */
export const setupMatchMediaMock = () => {
  let originalMatchMedia: typeof window.matchMedia

  const beforeEach = () => {
    originalMatchMedia = window.matchMedia
  }

  const afterEach = () => {
    window.matchMedia = originalMatchMedia
  }

  return { beforeEach, afterEach }
}
