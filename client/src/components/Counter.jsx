import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number up when it first scrolls into view, then stops.
 *
 * Falls back to the final value immediately if IntersectionObserver is missing
 * or the visitor has asked for reduced motion — the figure is the content, the
 * animation is decoration.
 */
export default function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(() => format(0, decimals))
  const [done, setDone] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || done) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !('IntersectionObserver' in window)) {
      setDisplay(format(value, decimals))
      setDone(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        setDone(true)

        const start = performance.now()
        let frame

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(format(value * eased, decimals))
          if (progress < 1) frame = requestAnimationFrame(step)
        }

        frame = requestAnimationFrame(step)
        return () => cancelAnimationFrame(frame)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, decimals, duration, done])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

function format(n, decimals) {
  return decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString('en-IN')
}
