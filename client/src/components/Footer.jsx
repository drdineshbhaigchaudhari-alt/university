import { Link } from 'react-router-dom'
import { footerColumns } from '@shared/content/navigation.js'
import { university } from '@shared/content/university.js'
import Icon from './Icon.jsx'

const socialIcons = {
  facebook: 'facebook',
  x: 'x',
  linkedin: 'linkedin',
  instagram: 'instagram',
  youtube: 'youtube',
}

export default function Footer() {
  const { address, phone, email } = university

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/assets/img/logo-crest.png" alt="Ved Reyan University crest" width="46" height="46" />
              <span>
                <b>{university.shortName}</b>
                <small>Medical · Pharmaceutical · Health Sciences</small>
              </span>
            </div>

            <ul className="footer-contact">
              <li>
                <Icon name="pin" />
                <span>
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.line3}
                </span>
              </li>
              <li>
                <Icon name="phone" />
                <span>
                  <a href={`tel:${phone.tollFree.replace(/\s/g, '')}`}>{phone.tollFree}</a> (toll free)
                  <br />
                  <a href={`tel:${phone.landline.replace(/[\s+]/g, '')}`}>{phone.landline}</a>
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <span>
                  <a href={`mailto:${email.registrar}`}>{email.registrar}</a>
                </span>
              </li>
            </ul>

            <div className="socials">
              {university.socials.map((social) => (
                <Link key={social.key} to="/contact" aria-label={social.label}>
                  <Icon name={socialIcons[social.key]} />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4>{column.heading}</h4>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legal">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {university.name}. All rights reserved.
          </p>
          <ul>
            <li>
              <Link to="/contact#grievance">Privacy policy</Link>
            </li>
            <li>
              <Link to="/contact#grievance">Terms of use</Link>
            </li>
            <li>
              <Link to="/contact#grievance">Refund policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Remove this strip before publishing a live site — see README.md,
        "Before you go live". It is here so that placeholder statistics and
        accreditations are never mistaken for verified institutional claims.
      */}
      <div className="footer-disclaimer">
        <div className="wrap">
          Demonstration website. Institutional names, statistics, rankings, accreditations, faculty
          profiles, recruiter lists and testimonials on these pages are illustrative placeholders and
          must be replaced with verified information before publication. Photographs are licensed
          stock images — see <code>CREDITS.md</code>.
        </div>
      </div>
    </footer>
  )
}
