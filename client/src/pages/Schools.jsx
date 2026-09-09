import { Link } from 'react-router-dom'
import { schools, programmes, programmeCount, bySchool } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import { Card } from '../components/cards.jsx'
import {
  Chips,
  CtaBand,
  DataTable,
  Grid,
  MoreLink,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const seatTotals = schools.map((school) => {
  const list = bySchool(school.key)
  const seats = list.reduce((sum, p) => sum + (typeof p.seats === 'number' ? p.seats : 0), 0)
  return { school, count: list.length, seats }
})

export default function Schools() {
  useDocumentMeta(
    'Schools & Faculties | Ved Reyan University',
    'Compare the four schools of Ved Reyan University — Pharmaceutical Sciences, Medical Sciences, Nursing and Allied Health Sciences — their programmes, seats and facilities.',
  )

  return (
    <>
      <Hero
        image="/assets/img/campus-block.jpg"
        imageAlt="A teaching block on the Ved Reyan University campus"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Schools' }]}
        title="Four schools, one clinical ecosystem"
        lead="Each school owns its curriculum, its laboratories and its admissions. What they share is a hospital, an anatomy hall, a resource centre and a rule about the size of a practical batch."
        actions={
          <>
            <Link className="btn btn--lg" to="/programmes">
              Compare all {programmeCount} programmes
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/admissions#apply">
              Apply for 2026–27
            </Link>
          </>
        }
      />

      <HeroStrip
        items={[
          { value: 4, label: 'Schools' },
          { value: programmeCount, label: 'Programmes' },
          { value: 612, label: 'Full-time faculty' },
          { value: 9400, label: 'Students' },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="At a glance"
          title="What each school runs"
          lead="Seat counts below are sanctioned intakes for programmes where a number is fixed; doctoral admission depends on supervisor availability, and MBBS and MD/MS seats are filled entirely through NEET counselling."
        />
        <DataTable
          columns={[
            {
              key: 'school',
              label: 'School',
              render: (row) => (
                <b>
                  <Link to={row.school.slug}>{row.school.short}</Link>
                </b>
              ),
            },
            { key: 'established', label: 'Established', render: (row) => row.school.established, numeric: true },
            { key: 'count', label: 'Programmes', numeric: true },
            {
              key: 'seats',
              label: 'Sanctioned seats',
              numeric: true,
              render: (row) => row.seats.toLocaleString('en-IN'),
            },
            {
              key: 'approvals',
              label: 'Regulatory approval',
              render: (row) => row.school.approvals.join('; '),
            },
          ]}
          rows={seatTotals.map((row) => ({ ...row, key: row.school.key }))}
        />
      </Section>

      {schools.map((school, index) => {
        const list = bySchool(school.key)
        return (
          <Section key={school.key} id={school.key} tone={index % 2 === 0 ? 'paper' : 'plain'}>
            <Split variant={index % 2 === 0 ? 'wideLeft' : 'wideRight'} top>
              {index % 2 === 0 ? null : (
                <Card
                  image={school.image}
                  imageAlt={school.imageAlt}
                  tag={school.flagship ? 'Flagship' : undefined}
                  title={school.name}
                  text={school.intro}
                  footer={<MoreLink to={school.slug}>Open the school page</MoreLink>}
                  reveal={false}
                />
              )}

              <div>
                <SectionHead
                  eyebrow={`Established ${school.established}`}
                  title={school.name}
                  lead={school.intro}
                />
                <div className="mb-3">
                  <MetricRow items={school.facts} columns={4} />
                </div>
                <h3>What sets it apart</h3>
                <TickList items={school.highlights} />

                {school.departments ? (
                  <>
                    <h3 className="mt-3">Departments</h3>
                    <Chips items={school.departments.map((d) => ({ label: d.name }))} variant="teal" />
                  </>
                ) : null}

                <h3 className="mt-3">Programmes ({list.length})</h3>
                <Chips items={list.map((p) => ({ label: p.name }))} />

                <div className="btn-row mt-3">
                  <Link className="btn btn--navy" to={school.slug}>
                    Explore {school.short}
                  </Link>
                  <MoreLink to={`/programmes?school=${school.key}`}>See its programmes</MoreLink>
                </div>
              </div>

              {index % 2 === 0 ? (
                <Card
                  image={school.image}
                  imageAlt={school.imageAlt}
                  tag={school.flagship ? 'Flagship' : undefined}
                  title={school.name}
                  text={school.blurb}
                  footer={<MoreLink to={school.slug}>Open the school page</MoreLink>}
                  reveal={false}
                />
              ) : null}
            </Split>
          </Section>
        )
      })}

      <Section tone="deep">
        <SectionHead
          center
          eyebrow="What they share"
          title="The parts of the university nobody owns alone"
          lead="Four schools on one campus only makes sense if the expensive things are shared — and if students from different disciplines are actually put in the same room."
        />
        <Grid cols={3}>
          <div className="feat">
            <h3>The teaching hospital</h3>
            <p>
              All four schools teach inside the same 750-bed hospital. A pharmacy student on a ward
              round meets the nursing student administering the dose and the resident who prescribed
              it.
            </p>
          </div>
          <div className="feat">
            <h3>The anatomy and simulation halls</h3>
            <p>
              Medicine, nursing, pharmacy and allied health share the anatomy laboratory and the
              fourteen-bed simulation ward, on a rota that deliberately mixes cohorts.
            </p>
          </div>
          <div className="feat">
            <h3>The Knowledge Resource Centre</h3>
            <p>
              One library, 68,000 volumes, 14,000 e-journals, open until midnight — and no
              school-specific borrowing restrictions.
            </p>
          </div>
        </Grid>
      </Section>

      <CtaBand
        title="Not sure which school you belong in?"
        text="Tell us what you want to be doing in five years and we will tell you which programme gets you there — including when the answer is a different university."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact">
              Talk to an adviser
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/programmes">
              Browse programmes
            </Link>
          </>
        }
      />
    </>
  )
}
