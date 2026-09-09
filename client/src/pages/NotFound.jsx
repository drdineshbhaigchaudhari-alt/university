import { Link } from 'react-router-dom'
import { schools } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import { Grid, Section, SectionHead } from '../components/ui.jsx'
import { FeatureCard } from '../components/cards.jsx'

export default function NotFound() {
  useDocumentMeta('Page not found | Ved Reyan University', 'The page you asked for does not exist.')

  return (
    <Section narrow>
      <SectionHead
        center
        eyebrow="404"
        title="That page does not exist"
        lead="The link may be out of date, or we may have moved the page. Here are the places most people are looking for."
      />

      <Grid cols={2}>
        <FeatureCard
          icon="graduation"
          title="Programmes & fees"
          text="All programmes with duration, seats, eligibility and tuition, filterable by level and school."
        >
          <p className="mt-2 mb-0">
            <Link className="link-more" to="/programmes">
              Browse programmes
            </Link>
          </p>
        </FeatureCard>
        <FeatureCard icon="check" title="Admissions 2026–27" text="Process, VRUET, eligibility, scholarships and the online application.">
          <p className="mt-2 mb-0">
            <Link className="link-more" to="/admissions">
              Go to admissions
            </Link>
          </p>
        </FeatureCard>
      </Grid>

      <div className="mt-4">
        <h3>The four schools</h3>
        <Grid cols={4}>
          {schools.map((school) => (
            <FeatureCard key={school.key} title={school.short} text={school.blurb}>
              <p className="mt-2 mb-0">
                <Link className="link-more" to={school.slug}>
                  Open
                </Link>
              </p>
            </FeatureCard>
          ))}
        </Grid>
      </div>

      <div className="btn-row mt-4" style={{ justifyContent: 'center' }}>
        <Link className="btn btn--navy" to="/">
          Back to the home page
        </Link>
        <Link className="btn btn--ghost" to="/contact">
          Contact us
        </Link>
      </div>
    </Section>
  )
}
