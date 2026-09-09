import { Link } from 'react-router-dom'
import {
  placementHeadline,
  placementHistory,
  placementBySchool,
  recruiters,
  careerPaths,
  placementSupport,
  alumni,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import Slider from '../components/Slider.jsx'
import { FeatureCard, StoryCard } from '../components/cards.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Grid,
  LogoWall,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'headline', label: '2025 report' },
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'by-school', label: 'By school' },
  { id: 'careers', label: 'Career paths' },
  { id: 'support', label: 'How we prepare you' },
  { id: 'alumni', label: 'Alumni outcomes' },
  { id: 'method', label: 'How we count' },
]

export default function Placements() {
  useDocumentMeta(
    'Placements & Career Outcomes | Ved Reyan University',
    '2025 placement report: 480 offers, 210 recruiting organisations, ₹12.4 LPA highest package and 96% placement of eligible students.',
  )

  return (
    <>
      <Hero
        image="/assets/img/study-group.jpg"
        imageAlt="Students working together at a shared table"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Placements' }]}
        title="Placements & career outcomes"
        lead="480 offers from 210 organisations in the 2025 season. Below is the full report, including what the figures exclude — because a placement percentage without its denominator tells you nothing."
        actions={
          <>
            <a className="btn btn--lg" href="#by-school">
              See the numbers by school
            </a>
            <a className="btn btn--outline-light btn--lg" href="#method">
              How we count
            </a>
          </>
        }
        notes={[
          { label: 'Highest', value: '₹12.4 LPA' },
          { label: 'Median', value: '₹5.8 LPA (pharmacy)' },
          { label: 'Recruiters', value: '210 organisations' },
        ]}
      />

      <HeroStrip items={placementHeadline} />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- headline */}
      <Section id="headline">
        <SectionHead
          eyebrow="2025 placement report"
          title="Three years of outcomes, side by side"
          lead="Year-on-year figures matter more than a single headline package. Here is the trend."
        />
        <DataTable
          caption="Pharmacy cohort outcomes, last three graduating years."
          columns={[
            { key: 'cohort', label: 'Cohort', render: (row) => <b>{row.cohort}</b> },
            { key: 'eligible', label: 'Eligible students', numeric: true },
            { key: 'offers', label: 'Offers received', numeric: true },
            { key: 'rate', label: 'Placement rate', numeric: true },
            { key: 'highest', label: 'Highest package', numeric: true },
            { key: 'median', label: 'Median package', numeric: true },
          ]}
          rows={placementHistory.map((row) => ({ ...row, key: row.cohort }))}
        />

        <div className="mt-4">
          <MetricRow
            columns={4}
            items={[
              { value: '480', label: 'Total offers, all schools' },
              { value: '210', label: 'Recruiting organisations' },
              { value: '9', label: 'Placement officers' },
              { value: 'Semester 5', label: 'When placement training begins' },
            ]}
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------- recruiters */}
      <Section id="recruiters" tone="paper">
        <SectionHead
          eyebrow="Recruiters"
          title="Who came to campus"
          lead="Listed with the function they recruited into, because “a pharmaceutical company visited” is not useful information when you are choosing a specialisation."
        />
        <LogoWall items={recruiters} />
      </Section>

      {/* ----------------------------------------------------------- by school */}
      <Section id="by-school">
        <SectionHead
          eyebrow="By school"
          title="Outcomes are not uniform, and we do not average them away"
          lead="Nursing places at a higher rate but at lower packages. Pharmacy has the widest spread. Medical graduates mostly proceed to residency rather than employment, so a placement rate is not a meaningful measure for them."
        />
        <DataTable
          caption="2025 outcomes by school."
          columns={[
            { key: 'school', label: 'School', render: (row) => <b>{row.school}</b> },
            { key: 'eligible', label: 'Eligible students', numeric: true },
            { key: 'offers', label: 'Offers', numeric: true },
            { key: 'rate', label: 'Placement rate', numeric: true },
            { key: 'highest', label: 'Highest package', numeric: true },
            { key: 'median', label: 'Median package', numeric: true },
          ]}
          rows={placementBySchool.map((row) => ({ ...row, key: row.school }))}
          footnote="MBBS and MD/MS graduates proceed to residency, further specialisation or independent practice; campus placement does not apply and is marked with a dash rather than being counted as a success or a failure."
        />
      </Section>

      {/* ------------------------------------------------------------ careers */}
      <Section id="careers" tone="deep">
        <SectionHead
          eyebrow="Career paths"
          title="Nine directions a health-science degree can take"
          lead="Each path lists the qualifications that lead into it, so you can work backwards from the job to the programme."
        />
        <Grid cols={3}>
          {careerPaths.map((path) => (
            <FeatureCard key={path.title} title={path.title}>
              <p>{path.text}</p>
              <p className="person__meta mb-0">Entry: {path.entry}</p>
            </FeatureCard>
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ support */}
      <Section id="support">
        <Split top>
          <div>
            <SectionHead
              eyebrow="How we prepare you"
              title="Training starts three semesters before the drives do"
              lead="A placement cell that only appears in the final semester is a placement cell that cannot help you."
            />
            <TickList
              items={[
                'Aptitude and technical drills from semester five, timetabled rather than optional',
                'One-to-one CV clinics, with a second review after your first rejection',
                'Mock group discussions and technical interviews run by alumni in the same function',
                'A compulsory industry-visit series across manufacturing, hospital and CRO settings',
                'On-campus drives from August through March, with results published internally',
              ]}
            />
          </div>
          <Grid cols={2}>
            {placementSupport.map((item) => (
              <FeatureCard key={item.title} title={item.title} text={item.text} />
            ))}
          </Grid>
        </Split>
      </Section>

      {/* -------------------------------------------------------------- alumni */}
      <Section id="alumni" tone="paper">
        <SectionHead
          eyebrow="Alumni outcomes"
          title="Six graduates, six different routes"
          lead="Industry R&D, higher study, clinical practice, clinical research, pharmacovigilance and one who started a business in their final year."
        />
        <Slider label="Alumni outcomes">
          {alumni.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </Slider>
      </Section>

      {/* -------------------------------------------------------------- method */}
      <Section id="method" narrow>
        <SectionHead
          center
          eyebrow="Methodology"
          title="How we count a placement"
          lead="Published so you can compare our figures with anyone else’s on the same basis."
        />
        <DividerNote>
          <p>
            <strong>“Eligible students”</strong> means students in the final year of a programme who
            registered for campus placement and met the minimum academic standing set by the
            recruiters. It excludes students who opted out to prepare for GPAT, NIPER JEE, NEET-PG or
            a foreign master’s, students who joined a family business, and students carrying a
            backlog that made them ineligible for the drives. Those exclusions are why our
            denominator is smaller than our graduating cohort, and we would rather say so than quote
            a percentage of a number we have quietly shrunk.
          </p>
          <p>
            <strong>“Offers received”</strong> counts every distinct written offer, so it exceeds the
            number of students placed — a strong candidate may hold three. <strong>“Highest
            package”</strong> is a single verified cost-to-company figure, not a projection.{' '}
            <strong>“Median”</strong> is used in preference to mean because a handful of large offers
            distorts an average and flatters the institution.
          </p>
          <p>
            Figures are compiled by the placement cell from offer letters and verified by the
            Registrar’s office before publication. If you find an inconsistency in this page, write
            to the placement cell and it will be corrected.
          </p>
        </DividerNote>
      </Section>

      <CtaBand
        title="Recruiting from Ved Reyan"
        text="To schedule a campus drive, discuss an internship quota, or propose a visiting-faculty module, contact the placement cell."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact">
              Contact the placement cell
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/programmes">
              See our programmes
            </Link>
          </>
        }
      />
    </>
  )
}
