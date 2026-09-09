import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Icon from './Icon.jsx'
import useReveal from '../hooks/useReveal.js'

/**
 * Manages scroll position across navigations.
 *
 * A new route goes to the top; a route with a hash scrolls to that element.
 * When the hash points into a page we have just navigated to, the target may
 * not exist on the first frame — images and lazy sections are still settling —
 * so we retry for a few frames before giving up and going to the top. Without
 * that, a link like /about#vision clicked from another page lands at the top of
 * About instead of at the section.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let frame
    let attempts = 0

    const tryScroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      // ~20 frames is a third of a second: long enough for a route to mount,
      // short enough that a genuinely bad anchor does not feel broken.
      if (attempts++ < 20) {
        frame = requestAnimationFrame(tryScroll)
        return
      }
      window.scrollTo({ top: 0 })
    }

    frame = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`totop${visible ? ' is-on' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrowUp" />
    </button>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useReveal(pathname)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
