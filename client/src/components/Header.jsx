import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { primaryNav, topbarLinks } from '@shared/content/navigation.js'
import { university } from '@shared/content/university.js'

/** Matches a nav item against the current path using its `match` prefixes. */
function isActive(item, pathname) {
  if (!item.match) return false
  if (item.match.includes('/') && pathname === '/') return true
  return item.match.some((prefix) => prefix !== '/' && pathname.startsWith(prefix))
}

export default function Header() {
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const [stuck, setStuck] = useState(false)
  const closeTimer = useRef(null)
  const isMobile = useRef(false)

  // Track the breakpoint that switches dropdowns from hover to tap.
  useEffect(() => {
    const query = window.matchMedia('(max-width:1080px)')
    const sync = () => {
      isMobile.current = query.matches
    }
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Any navigation closes the drawer and any open dropdown.
  useEffect(() => {
    setDrawerOpen(false)
    setOpenIndex(null)
  }, [pathname])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenIndex(null)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function handleEnter(index) {
    if (isMobile.current) return
    clearTimeout(closeTimer.current)
    setOpenIndex(index)
  }

  function handleLeave() {
    if (isMobile.current) return
    // A short delay keeps the menu open across a diagonal mouse path.
    closeTimer.current = setTimeout(() => setOpenIndex(null), 160)
  }

  function handleParentClick(event, index, item) {
    if (!item.children || !isMobile.current) return
    event.preventDefault()
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <div className="topbar">
        <div className="wrap">
          <ul className="topbar-links">
            {topbarLinks.map((link) => (
              <li key={link.to + link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="topbar-cta" style={{ margin: 0 }}>
            <span>Admission Helpline</span>
            <a className="tel" href={`tel:${university.phone.tollFree.replace(/\s/g, '')}`}>
              {university.phone.tollFree}
            </a>
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="brandbar">
          <Link className="brand" to="/">
            <img
              className="brand__mark"
              src="/assets/img/logo.svg"
              alt="Ved Reyan University crest"
              width="52"
              height="52"
            />
            <span className="brand__text">
              <span className="brand__name">{university.shortName}</span>
              <span className="brand__sub">Medical · Pharmaceutical · Health Sciences</span>
            </span>
          </Link>
          <div className="brandbar__actions">
            <Link className="btn btn--ghost btn--sm" to="/programmes">
              Programmes
            </Link>
            <Link className="btn btn--sm" to="/admissions#apply">
              Apply Now — 2026
            </Link>
          </div>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary">
        <div className="wrap">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="primary-nav"
            onClick={() => setDrawerOpen((open) => !open)}
          >
            Menu
            <span className="bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>

          <ul className={`nav${drawerOpen ? ' is-open' : ''}`} id="primary-nav">
            {primaryNav.map((item, index) => {
              const active = isActive(item, pathname)
              const open = openIndex === index
              return (
                <li
                  key={item.label}
                  className={[active ? 'is-active' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    to={item.to}
                    aria-expanded={item.children ? open : undefined}
                    aria-current={active ? 'page' : undefined}
                    onClick={(event) => handleParentClick(event, index, item)}
                    onFocus={() => handleEnter(index)}
                  >
                    {item.label}
                    {item.children ? <span className="caret" aria-hidden="true" /> : null}
                  </Link>

                  {item.children ? (
                    <ul className="submenu">
                      {item.children.map((child) => (
                        <li key={child.to + child.label}>
                          <Link to={child.to}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
