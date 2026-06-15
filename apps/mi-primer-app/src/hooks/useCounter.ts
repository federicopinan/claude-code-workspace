'use client'

import { useState, useCallback } from 'react'

// Custom hook following the container/presentational pattern
// Logic lives here, presentation is delegated

interface UseCounterOptions {
  initialValue?: number
  min?: number
  max?: number
}

interface UseCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  set: (value: number) => void
}

export function useCounter({
  initialValue = 0,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
}: UseCounterOptions = {}): UseCounterReturn {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + 1, max))
  }, [max])

  const decrement = useCallback(() => {
    setCount((prev) => Math.max(prev - 1, min))
  }, [min])

  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  const set = useCallback(
    (value: number) => {
      setCount(Math.max(min, Math.min(value, max)))
    },
    [min, max],
  )

  return { count, increment, decrement, reset, set }
}
