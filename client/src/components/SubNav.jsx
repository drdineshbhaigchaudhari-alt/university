import useScrollSpy from '../hooks/useScrollSpy.js'

/**
 * Sticky in-page navigation with scroll-spy highlighting.
 *
 * Anchors are plain `#id` links rather than router links: they move within the
 * current document, so routing should not be involved. `scroll-padding-top` in
 * global.css keeps the target clear of the sticky header.
 *
 * @param {{id:string,label:string}[]} sections in document order
 */
export default function SubNav({ sections }) {
  const ids = sections.map((section) => section.id)
  const current = useScrollSpy(ids)

  return (
    <nav className="subnav" aria-label="On this page">
      <div className="wrap">
        <div className="subnav__scroll">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={section.id === current ? 'is-current' : undefined}
              aria-current={section.id === current ? 'true' : undefined}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
