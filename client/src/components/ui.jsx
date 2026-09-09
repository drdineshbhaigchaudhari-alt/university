/**
 * Small presentational primitives shared across every page: section shells,
 * headings, lists, tables, logo walls and call-to-action bands.
 *
 * These are deliberately thin wrappers over the class names in global.css.
 * Keeping the markup here means a change to, say, section padding is made once
 * rather than in fifteen page files.
 */

import { Link } from 'react-router-dom'

/* ------------------------------------------------------------------ layout */

/**
 * @param {'plain'|'paper'|'mist'|'navy'|'deep'} tone
 */
export function Section({ id, tone = 'plain', tight = false, narrow = false, className = '', children }) {
  const tones = { plain: '', paper: ' section--paper', mist: ' section--mist', navy: ' section--navy', deep: ' section--deep' }
  return (
    <section id={id} className={`section${tight ? ' section--tight' : ''}${tones[tone] || ''} ${className}`.trim()}>
      <div className={`wrap${narrow ? ' wrap-narrow' : ''}`}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

/**
 * Section heading block. Pass `action` to get the heading-left,
 * button-right arrangement used across the site.
 */
export function SectionHead({ eyebrow, title, lead, center = false, action, children }) {
  const inner = (
    <>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {title ? <h2>{title}</h2> : null}
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </>
  )

  if (action) {
    return (
      <div className="sec-head sec-head--row">
        <div>{inner}</div>
        {action}
      </div>
    )
  }

  return <div className={`sec-head${center ? ' sec-head--center' : ''}`}>{inner}</div>
}

export function Grid({ cols = 3, className = '', children }) {
  return <div className={`grid g-${cols} ${className}`.trim()}>{children}</div>
}

export function Split({ variant, top = false, className = '', children }) {
  const variants = { wideLeft: ' split--wide-left', wideRight: ' split--wide-right' }
  return (
    <div className={`split${variants[variant] || ''}${top ? ' split--top' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------- text */

export function TickList({ items }) {
  return (
    <ul className="tick-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export function Chips({ items, variant }) {
  const variants = { teal: ' chip--teal', saffron: ' chip--saffron' }
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.label}>
          <span className={`chip${variants[variant] || ''}`}>{typeof item === 'string' ? item : item.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function AccreditationStrip({ items }) {
  return (
    <ul className="accred">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function DividerNote({ children }) {
  return <div className="divider-note">{children}</div>
}

export function MoreLink({ to, href, children }) {
  if (href) {
    return (
      <a className="link-more" href={href}>
        {children}
      </a>
    )
  }
  return (
    <Link className="link-more" to={to}>
      {children}
    </Link>
  )
}

/* ------------------------------------------------------------------ media */

export function Figure({ src, alt, caption, width = 1400, height = 933 }) {
  return (
    <figure className="figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

/** One wide image above two square ones — used in the split sections. */
export function FigureStack({ images }) {
  return (
    <div className="figure--stack">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ tables */

export function DataTable({ caption, columns, rows, footnote }) {
  return (
    <>
      <div className="table-wrap">
        <table className="data">
          {caption ? <caption>{caption}</caption> : null}
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.key ?? rowIndex}>
                {columns.map((column) => (
                  <td key={column.key} className={column.numeric ? 'num' : undefined}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? (
        <p className="muted mt-2">
          <small>{footnote}</small>
        </p>
      ) : null}
    </>
  )
}

/* --------------------------------------------------------------- logo wall */

export function LogoWall({ items }) {
  return (
    <div className="logowall">
      {items.map((item) => (
        <span className="logowall__cell" key={item.name}>
          {item.name}
          {item.domain ? <small>{item.domain}</small> : null}
        </span>
      ))}
    </div>
  )
}

/* --------------------------------------------------------------------- CTA */

export function CtaBand({ title, text, actions }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <div className="btn-row">{actions}</div>
      </div>
    </section>
  )
}

export function StripCta({ title, text, actions, stacked = false }) {
  return (
    <div className="strip-cta" style={stacked ? { display: 'block' } : undefined}>
      <div>
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
      </div>
      <div className={`btn-row${stacked ? ' mt-2' : ''}`}>{actions}</div>
    </div>
  )
}

/* ------------------------------------------------------------------- steps */

export function Steps({ items }) {
  return (
    <div className="steps">
      {items.map((item) => (
        <div className="step" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
