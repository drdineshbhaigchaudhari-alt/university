import { Link } from 'react-router-dom'

/**
 * Page hero with a background photograph and a gradient scrim.
 *
 * @param {'home'|'page'} variant  'home' is the taller landing treatment
 * @param {{label:string,to:string}[]} crumbs  breadcrumb trail, page variant
 * @param {{label:string,value:string}[]} notes the rule-separated footnote row
 */
export default function Hero({
  variant = 'page',
  image,
  imageAlt,
  kicker,
  kickerTo,
  title,
  lead,
  crumbs,
  actions,
  notes,
}) {
  return (
    <section className={`hero${variant === 'page' ? ' hero--page' : ''}`}>
      <div className="hero__media">
        <img
          src={image}
          alt={imageAlt || ''}
          width="1400"
          height="933"
          fetchpriority="high"
        />
      </div>
      <div className="wrap">
        <div className="hero__inner">
          {crumbs ? (
            <p className="crumbs">
              {crumbs.map((crumb, index) => (
                <span key={crumb.label} style={{ opacity: 1, padding: 0 }}>
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
                  {index < crumbs.length - 1 ? <span>/</span> : null}
                </span>
              ))}
            </p>
          ) : null}

          {kicker ? (
            kickerTo ? (
              <Link className="hero__kicker" to={kickerTo}>
                <span className="dot" aria-hidden="true" /> {kicker}
              </Link>
            ) : (
              <span className="hero__kicker">
                <span className="dot" aria-hidden="true" /> {kicker}
              </span>
            )
          ) : null}

          <h1>{title}</h1>
          {lead ? <p className="hero__lead">{lead}</p> : null}
          {actions ? <div className="btn-row">{actions}</div> : null}

          {notes ? (
            <p className="hero__note">
              {notes.map((note) => (
                <span key={note.label}>
                  <b>{note.label}</b> {note.value}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
