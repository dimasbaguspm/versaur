import { useEffect, useState } from 'react'

interface UseImageProps {
  src: string
}

/**
 * Custom hook to manage image loading, error, and natural size detection
 */
export function useImage({ src }: UseImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const [naturalSize, setNaturalSize] = useState<{
    width?: number
    height?: number
  }>({})

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleError = () => {
    setErrored(true)
  }

  useEffect(() => {
    if (!src) return
    let cancelled = false
    const img = new Image()
    img.src = src
    img.onload = () => {
      if (!cancelled) {
        setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight })
        setLoaded(true)
      }
    }
    img.onerror = () => {
      if (!cancelled) {
        setErrored(true)
      }
    }
    return () => {
      cancelled = true
    }
  }, [src])

  return {
    loaded,
    errored,
    naturalSize,
    handleLoad,
    handleError,
  }
}
