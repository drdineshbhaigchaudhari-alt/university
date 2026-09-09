import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently under the sticky sub-navigation.
 * @param {string[]} ids section ids, in document order
 * @param {number} offset pixels from the top of the viewport to probe at
 */
export default function useScrollSpy(ids, offset = 190) {
  const [current, setCurrent] = useState(ids[0])

  useEffect(() => {
    if (!ids.length) return
    let queued = false

    function measure() {
      const probe = window.scrollY + offset
      let active = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) active = id
      }
      setCurrent(active)
      queued = false
    }

    function onScroll() {
      if (queued) return
      queued = true
      window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids.join('|'), offset])

  return current
}
