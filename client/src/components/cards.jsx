/**
 * Card variants. Each one maps to a block in global.css section 9.
 */

import { Link } from 'react-router-dom'
import { formatFeeShort } from '@shared/content/programmes.js'
import Icon from './Icon.jsx'
import { MoreLink } from './ui.jsx'

/** Image-on-top content card, used for news, events and school summaries. */
export function Card({ image, imageAlt, tag, date, title, text, footer, reveal = true }) {
  return (
    <article className={`card${reveal ? ' reveal' : ''}`}>
      {image ? (
        <div className="card__media">
          <img src={image} alt={imageAlt || ''} width="1400" height="875" loading="lazy" />
          {tag ? <span className="card__tag">{tag}</span> : null}
        </div>
      ) : null}
      <div className="card__body">
        {date ? <span className="card__date">{date}</span> : null}
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
        {footer ? <p className="card__foot">{footer}</p> : null}
      </div>
    </article>
  )
}

/** Full-bleed image with a gradient caption — the laboratory tiles. */
export function FacilityCard({ to, image, imageAlt, title, text }) {
  return (
    <Link className="facility reveal" to={to}>
      <img src={image} alt={imageAlt || ''} width="1400" height="933" loading="lazy" />
      <div className="facility__cap">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  )
}

/**
 * Programme card. Takes a programme object straight from the shared content
 * layer, so a change to the catalogue needs no change here.
 */
export function ProgrammeCard({ programme, levelLabel, showEligibility = false, linkTo = '/admissions#apply', linkLabel = 'Apply' }) {
  const seats = typeof programme.seats === 'number' ? `${programme.seats} seats` : programme.seats

  return (
    <article className="prog">
      <span className="prog__level">
        {levelLabel || programme.approval || 'Programme'}
      </span>
      <h3>{programme.name}</h3>
      <p className="prog__meta">
        <span>{programme.duration}</span>
        {seats ? <span>{seats}</span> : null}
        {programme.approval ? <span>{programme.approval}</span> : null}
      </p>
      <p>{programme.summary}</p>
      {showEligibility && programme.eligibility ? (
        <p>
          <strong>Eligibility:</strong> {programme.eligibility}
        </p>
      ) : null}
      <p className="prog__foot">
        <span className="prog__fee">
          {programme.feePerYear || programme.feeTotal ? 'Tuition ' : ''}
          <b>{formatFeeShort(programme)}</b>
        </span>
        <MoreLink to={linkTo}>{linkLabel}</MoreLink>
      </p>
    </article>
  )
}

/** Square-portrait faculty and leadership card. */
export function PersonCard({ person }) {
  return (
    <article className="person">
      <div className="person__photo">
        <img
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          width="560"
          height="560"
          loading="lazy"
        />
      </div>
      <div className="person__body">
        <h3>{person.shortName || person.name}</h3>
        <span className="person__role">{person.role}</span>
        <p className="person__area">{person.remit || person.area}</p>
        {person.qualification || person.meta ? (
          <p className="person__meta">
            {[person.qualification, person.meta].filter(Boolean).join(' · ')}
          </p>
        ) : null}
      </div>
    </article>
  )
}

/** Testimonial card used in the placement and alumni sliders. */
export function StoryCard({ story }) {
  return (
    <article className="story">
      {story.badge ? <span className="story__badge">{story.badge}</span> : null}
      <blockquote className="story__quote">
        <span>{story.quote}</span>
      </blockquote>
      <div className="story__who">
        <img src={story.photo} alt={`Portrait of ${story.name}`} width="52" height="52" loading="lazy" />
        <div>
          <b>{story.name}</b>
          <small>
            {story.programme} · {story.now}
          </small>
        </div>
      </div>
    </article>
  )
}

/** Icon-and-text feature card. Works on light and dark sections. */
export function FeatureCard({ icon, title, text, children }) {
  return (
    <article className="feat">
      {icon ? (
        <div className="feat__ico">
          <Icon name={icon} />
        </div>
      ) : null}
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {children}
    </article>
  )
}
