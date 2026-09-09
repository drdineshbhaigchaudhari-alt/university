import { Link } from 'react-router-dom'
import { laboratories, hospital, campusInfrastructure, university } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow, Stats } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { FeatureCard } from '../components/cards.jsx'
import {
  CtaBand,
  DividerNote,
  Figure,
  Grid,
  MoreLink,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'labs', label: 'Laboratories' },
  { id: 'hospital', label: 'Teaching hospital' },
  { id: 'library', label: 'Library' },
  { id: 'simulation', label: 'Simulation centre' },
  { id: 'digital', label: 'Digital campus' },
  { id: 'campus', label: 'Campus' },
]

/** The library, simulation centre and computing lab get their own sections. */
const featuredIds = new Set(['library', 'simulation', 'digital'])
const labSections = laboratories.filter((lab) => !featuredIds.has(lab.id))

function LabBlock({ lab, flip }) {
  return (
    <Section id={lab.id} tone={flip ? 'paper' : 'plain'}>
      <Split variant={flip ? 'wideRight' : 'wideLeft'} top>
        {flip ? <Figure src={lab.image} alt={lab.imageAlt} /> : null}
        <div>
          <SectionHead eyebrow="Laboratory" title={lab.name} lead={lab.blurb} />
          <h3>Equipment</h3>
          <TickList items={lab.equipment} />
          {lab.note ? (
            <div className="mt-3">
              <DividerNote>
                <p>{lab.note}</p>
              </DividerNote>
            </div>
          ) : null}
        </div>
        {flip ? null : <Figure src={lab.image} alt={lab.imageAlt} />}
      </Split>
    </Section>
  )
}

export default function Infrastructure() {
  useDocumentMeta(
    'Infrastructure, Laboratories & Teaching Hospital | Ved Reyan University',
    'Twelve laboratories, a central instrumentation facility, clinical simulation centre, 68,000-volume Knowledge Resource Centre and a 750-bed NABH-accredited teaching hospital.',
  )

  const library = laboratories.find((lab) => lab.id === 'library')
  const simulation = laboratories.find((lab) => lab.id === 'simulation')
  const digital = laboratories.find((lab) => lab.id === 'digital')

  return (
    <>
      <Hero
        image="/assets/img/lab-instrumentation.jpg"
        imageAlt="Analytical instrument benches in a long laboratory"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Academics' }, { label: 'Infrastructure' }]}
        title="Infrastructure & laboratories"
        lead="Twelve laboratories, a 750-bed hospital, a fourteen-bed simulation ward and a 96-core compute node — listed below with the actual equipment, because that is the only thing a prospective student can usefully compare."
        actions={
          <>
            <Link className="btn btn--lg" to="/contact#visit">
              Book a campus visit
            </Link>
            <a className="btn btn--outline-light btn--lg" href="#hospital">
              See the teaching hospital
            </a>
          </>
        }
      />

      <HeroStrip
        items={[
          { value: 12, label: 'Teaching laboratories' },
          { value: 750, label: 'Hospital beds' },
          { value: 68000, label: 'Library volumes' },
          { value: 120, label: 'Acre campus' },
        ]}
      />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- overview */}
      <Section id="labs">
        <SectionHead
          eyebrow="Laboratories"
          title="Teaching laboratories first, research laboratories second"
          lead="Every laboratory on this page is timetabled for classes before it is booked for research. Practical batches are capped at twenty students, and at eight where a technique needs close supervision."
        />
        <Grid cols={3}>
          {laboratories.map((lab) => (
            <FeatureCard key={lab.id} icon={lab.id === 'library' ? 'book' : 'flask'} title={lab.name} text={lab.blurb}>
              <p className="mt-2 mb-0">
                <MoreLink to={`/infrastructure#${lab.id}`}>Equipment list</MoreLink>
              </p>
            </FeatureCard>
          ))}
        </Grid>

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Booking.</strong> Beyond the timetable, the Central Instrumentation Facility and
              the Formulation Development Lab run an open booking system: any student with a
              supervisor’s countersignature can reserve instrument time, including at weekends.
              Instrument log books are audited, so what you personally operated is a matter of record
              — which is exactly what an employer will ask about.
            </p>
          </DividerNote>
        </div>
      </Section>

      {labSections.map((lab, index) => (
        <LabBlock key={lab.id} lab={lab} flip={index % 2 === 1} />
      ))}

      {/* ----------------------------------------------------------- hospital */}
      <Section id="hospital" tone="deep">
        <Split top>
          <div>
            <SectionHead eyebrow="Teaching hospital" title={hospital.name} lead={hospital.summary} />
            <TickList items={hospital.features} />
            <div className="btn-row mt-3">
              <Link className="btn btn--light" to="/medical-sciences">
                School of Medical Sciences
              </Link>
              <MoreLink to="/nursing">School of Nursing</MoreLink>
            </div>
          </div>
          <div>
            <Stats items={hospital.facts.map((fact) => ({ value: fact.value, label: fact.label }))} columns={2} />
            <div className="mt-3">
              <Figure
                src={hospital.image}
                alt={hospital.imageAlt}
                caption="The hospital is on campus, within walking distance of every academic block."
              />
            </div>
          </div>
        </Split>
      </Section>

      {/* ------------------------------------------------------------ library */}
      {library ? (
        <Section id="library">
          <Split top>
            <Figure
              src={library.image}
              alt={library.imageAlt}
              caption="Three floors, 340 reading seats and twelve bookable discussion rooms."
            />
            <div>
              <SectionHead eyebrow="Knowledge Resource Centre" title={library.name} lead={library.blurb} />
              <TickList items={library.equipment} />
              <p className="mt-3">
                There are no school-specific borrowing restrictions: a nursing student can take out a
                pharmacology text and a pharmacy student can take out a surgical atlas. Reference
                copies of the current Indian, British and US Pharmacopoeias stay in the building.
              </p>
            </div>
          </Split>
        </Section>
      ) : null}

      {/* --------------------------------------------------------- simulation */}
      {simulation ? (
        <Section id="simulation" tone="paper">
          <Split variant="wideRight" top>
            <div>
              <SectionHead
                eyebrow="Clinical simulation"
                title={simulation.name}
                lead={simulation.blurb}
              />
              <TickList items={simulation.equipment} />
              <p className="mt-3">
                Counselling sessions are recorded and reviewed with a tutor. Students find this
                uncomfortable for about two weeks and then stop noticing — and it is the single
                fastest way we have found to improve how someone explains a medicine to a patient.
              </p>
            </div>
            <Figure src={simulation.image} alt={simulation.imageAlt} />
          </Split>
        </Section>
      ) : null}

      {/* ------------------------------------------------------------ digital */}
      {digital ? (
        <Section id="digital">
          <Split top>
            <Figure src={digital.image} alt={digital.imageAlt} />
            <div>
              <SectionHead eyebrow="Digital campus" title={digital.name} lead={digital.blurb} />
              <TickList items={digital.equipment} />
              <p className="mt-3">
                Campus-wide Wi-Fi, a learning-management system carrying every module’s materials and
                assessment, and lecture-theatre recording as standard. Modelling software is licensed
                to run in the laboratory rather than on personal machines, so nobody is disadvantaged
                by the laptop they can afford.
              </p>
            </div>
          </Split>
        </Section>
      ) : null}

      {/* ------------------------------------------------------------- campus */}
      <Section id="campus" tone="paper">
        <SectionHead
          eyebrow="Campus"
          title="Everything else on the 120 acres"
          lead={`${university.address.line1}, ${university.address.line2} — 35 minutes from Chandigarh.`}
        />
        <Grid cols={3}>
          {campusInfrastructure.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </Grid>

        <div className="mt-4">
          <MetricRow
            columns={4}
            items={[
              { value: '6', label: 'Academic blocks' },
              { value: '7', label: 'Residence halls' },
              { value: '900', label: 'Seat auditorium' },
              { value: '38%', label: 'Daytime load from rooftop solar' },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title="See the laboratories in use"
        text="Campus visits run every Saturday at 10:30. We show you working laboratories during a teaching week, not an empty demonstration room."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact#visit">
              Book a visit
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/admissions#apply">
              Apply now
            </Link>
          </>
        }
      />
    </>
  )
}
