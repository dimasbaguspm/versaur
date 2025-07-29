import { useCallback, useEffect, useRef, useState } from 'react'
import type { ShowSnackFunction, SnackbarQueueItem } from './types'

// Default duration matches CSS animation (4s)
const DEFAULT_DURATION = 4000

/**
 * Custom hook to manage snackbar queue and auto-close logic
 */
export function useSnackbarsQueue() {
  const [queue, setQueue] = useState<SnackbarQueueItem[]>([])
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({})

  // Remove snackbar by id
  const removeSnack = useCallback((id: string) => {
    setQueue(q => q.filter(snack => snack.id !== id))
    if (timeoutRefs.current[id]) {
      clearTimeout(timeoutRefs.current[id])
      delete timeoutRefs.current[id]
    }
  }, [])

  // Show a new snackbar
  const showSnack: ShowSnackFunction = useCallback(
    (color, message, options) => {
      const id = `${Date.now()}-${Math.random()}`
      const duration = options?.duration ?? DEFAULT_DURATION
      setQueue(q => [
        ...q,
        {
          id,
          color,
          message,
          ...options,
          duration,
        },
      ])
      timeoutRefs.current[id] = setTimeout(() => {
        removeSnack(id)
      }, duration)
    },
    [removeSnack]
  )

  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(clearTimeout)
      timeoutRefs.current = {}
    }
  }, [])

  return { queue, showSnack, removeSnack }
}
