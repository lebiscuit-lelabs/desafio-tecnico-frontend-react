import { useRef } from 'react'

export default function useDebounce(fn: any, ms: number) {
  const timeoutRef = useRef<NodeJS.Timeout>()

  function debounce(...params: any[]) {
    timeoutRef.current && clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      fn(...params)
    }, ms)
  }

  return debounce
}
