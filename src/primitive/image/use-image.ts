import { useEffect, useRef, useState } from 'react'

interface UseImageProps {
  src: string
}

/**
 * Custom hook to manage image loading, error, and natural size detection
 */
export function useImage({ src }: UseImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const isCancelled = useRef(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleError = () => {
    setErrored(true)
  }

  useEffect(() => {
    if (!src) return
    const img = new Image()

    img.src = src
    img.onload = () => {
      if (!isCancelled.current) {
        setLoaded(true)
      }
    }
    img.onerror = () => {
      if (!isCancelled.current) {
        setErrored(true)
      }
    }
    return () => {
      isCancelled.current = true
    }
  }, [src])

  return {
    loaded,
    errored,
    handleLoad,
    handleError,
  }
}
