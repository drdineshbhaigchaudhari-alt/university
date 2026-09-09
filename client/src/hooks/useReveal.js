import { useEffect } from 'react'

/**
 * Adds `.is-in` to every `.reveal` element as it scrolls into view.
 * Re-runs on route change so freshly mounted sections are observed too.
 * Elements are left visible if IntersectionObserver is unavailable.
 */
export default function useReveal(dependency) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.reveal:not(.is-in)'))
    if (!targets.length) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dependency])
}
