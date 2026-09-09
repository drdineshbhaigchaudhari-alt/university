import { Link } from 'react-router-dom'
import { news, societies, campusEvents, studentSupport, hostelFees, formatINR } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { Card, FeatureCard } from '../components/cards.jsx'
import {
  Chips,
  CtaBand,
  DataTable,
  DividerNote,
  Figure,
  FigureStack,
  Grid,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'living', label: 'Living here' },
  { id: 'hostels', label: 'Hostels' },
  { id: 'societies', label: 'Societies' },
  { id: 'sport', label: 'Sport' },
  { id: 'events', label: 'Events & news' },
  { id: 'support', label: 'Student support' },
  { id: 'safety', label: 'Safety & conduct' },
]

export default function CampusLife() {
  useDocumentMeta(
    'Campus Life, Hostels & Student Societies | Ved Reyan University',
    'Residence halls, sport, 34 student societies, events, student support and wellbeing on the 120-acre Ved Reyan University campus.',
  )

  return (
    <>
      <Hero
        image="/assets/img/classroom.jpg"
        imageAlt="Students in a tiered lecture theatre"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Campus Life' }]}
        title="Campus life"
        lead="Health-science degrees are long, and long degrees need somewhere decent to live them. Seven residence halls, 34 societies, an eight-lane pool, and a food court that stays open until one in the morning during examination weeks."
        actions={
          <>
            <Link className="btn btn--lg" to="/contact#visit">
              Book a campus visit
            </Link>
            <a className="btn btn--outline-light btn--lg" href="#hostels">
              Hostel charges
            </a>
          </>
        }
      />

      <HeroStrip
        items={[
          { value: 9400, label: 'Students on campus' },
          { value: 7, label: 'Residence halls' },
          { value: 34, label: 'Student societies' },
          { value: 120, label: 'Acre campus' },
        ]}
      />

      <SubNav sections={sections} />

      {/* ------------------------------------------------------------- living */}
      <Section id="living">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Living here"
              title="Nine thousand people, one campus, five years"
              lead="A B.Pharm degree is four years. Pharm.D is six. MBBS is five and a half. For most of our students this is not a place they visit for lectures — it is where they live through their twenties, and we try to plan it that way."
            />
            <p>
              The campus is residential by design: seven halls, a food court, a health centre open
              round the clock, a library that stays open until midnight and 24 hours during
              examinations, and enough sports provision that a student who wants to swim at six in
              the morning can. Shuttles run to Chandigarh, Patiala and Ambala on a published
              timetable, so a weekend away does not require a car.
            </p>
            <p>
              What we are less good at, and will say so: the campus is thirty-five minutes from a
              city, and students who want a dense urban social life find the first semester quiet.
              The societies exist partly to fix that, and they are student-run rather than
              administration-run for the same reason.
            </p>
            <div className="mt-2">
              <TickList
                items={[
                  'Separate residence halls for men and women, all Wi-Fi enabled, with resident wardens',
                  '24×7 on-campus health centre plus free consultation at the teaching hospital',
                  '900-seat auditorium, food court and a co-operative store',
                  'Shuttle services to Chandigarh, Patiala and Ambala on a published timetable',
                ]}
              />
            </div>
          </div>
          <FigureStack
            images={[
              { src: '/assets/img/library-study.jpg', alt: 'A student reading in the library' },
              { src: '/assets/img/desk-research.jpg', alt: 'Students working at a shared desk' },
              { src: '/assets/img/graduation.jpg', alt: 'Graduands celebrating at convocation' },
            ]}
          />
        </Split>
      </Section>

      {/* ------------------------------------------------------------ hostels */}
      <Section id="hostels" tone="paper">
        <SectionHead
          eyebrow="Hostels"
          title="Accommodation, and who is guaranteed it"
          lead="Guaranteed for all first-year students who apply by the date on their admission letter, and for every student in a programme with compulsory clinical postings. Returning students are allotted by a published seniority-and-conduct rule."
        />
        <Split top>
          <DataTable
            caption="Hostel charges by room type, per academic year."
            columns={[
              { key: 'type', label: 'Room type', render: (row) => <b>{row.type}</b> },
              { key: 'perYear', label: 'Per year', numeric: true, render: (row) => formatINR(row.perYear) },
            ]}
            rows={hostelFees.map((row) => ({ ...row, key: row.type }))}
            footnote="Mess charges are billed separately (roughly ₹62,000 a year on the standard plan) and a refundable hostel security deposit of ₹10,000 applies."
          />
          <div>
            <FeatureCard title="What is included">
              <div className="mt-2">
                <TickList
                  items={[
                    'Bed, desk, wardrobe, Wi-Fi, laundry access and 24-hour hot water',
                    'A resident warden in every hall, plus a student hall committee',
                    'Common room, study room and a pantry on each floor',
                    'Power backup covering lights, fans and the study rooms',
                  ]}
                />
              </div>
            </FeatureCard>
            <div className="mt-3">
              <DividerNote>
                <p>
                  <strong>Late-night access.</strong> Students on clinical postings and night duty
                  have a standing exemption from hall timings, arranged through the warden at the
                  start of the posting rather than negotiated each night.
                </p>
              </DividerNote>
            </div>
          </div>
        </Split>
      </Section>

      {/* ---------------------------------------------------------- societies */}
      <Section id="societies">
        <SectionHead
          eyebrow="Societies"
          title="Thirty-four societies, all student-run"
          lead="Budgets are approved by the Students’ Council, not by a department. Ten of the larger ones are listed here."
        />
        <Grid cols={2}>
          {societies.map((society) => (
            <FeatureCard key={society.name} title={society.name} text={society.text} />
          ))}
        </Grid>
      </Section>

      {/* -------------------------------------------------------------- sport */}
      <Section id="sport" tone="deep">
        <Split variant="wideRight">
          <div>
            <SectionHead
              eyebrow="Sport & fitness"
              title="An eight-lane pool and a reason to use it"
              lead="Sport is not decorative here: a state-level or above sportsperson qualifies for a tuition scholarship of 25–75%, and the annual meet is a four-day fixture."
            />
            <div className="mt-2">
              <Chips
                items={[
                  'Eight-lane swimming pool',
                  '400 m athletics track',
                  'Cricket ground',
                  'Four floodlit courts',
                  'Indoor sports complex',
                  'Gymnasium',
                  'Table tennis & badminton',
                  'Yoga hall',
                ]}
              />
            </div>
            <div className="mt-3">
              <MetricRow
                columns={3}
                items={[
                  { value: '4 days', label: 'Annual inter-school sports meet' },
                  { value: '25–75%', label: 'Sports scholarship on tuition' },
                  { value: '06:00', label: 'Pool opens, term time' },
                ]}
              />
            </div>
          </div>
          <Figure
            src="/assets/img/rehab-outdoor.jpg"
            alt="An outdoor rehabilitation and exercise session"
            caption="The physiotherapy school runs conditioning and injury clinics for university teams."
          />
        </Split>
      </Section>

      {/* ------------------------------------------------------------- events */}
      <Section id="events" tone="paper">
        <SectionHead
          eyebrow="Events & news"
          title="What happens through the year"
          lead="Six fixtures anchor the calendar; everything else is proposed by societies and approved by the Students’ Council."
        />
        <div className="mb-3">
          <Grid cols={3}>
            {campusEvents.map((event) => (
              <FeatureCard key={event.name} title={`${event.name} — ${event.when}`} text={event.text} />
            ))}
          </Grid>
        </div>

        <h3>Recent news</h3>
        <Grid cols={3}>
          {news.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              imageAlt={item.imageAlt}
              tag={item.tag}
              date={item.date}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ support */}
      <Section id="support">
        <SectionHead
          eyebrow="Student support"
          title="The things that matter when a long degree goes wrong"
          lead="Health-science programmes have a documented problem with student burnout. Pretending otherwise does not help anyone, so here is what actually exists."
        />
        <Grid cols={3}>
          {studentSupport.map((item) => (
            <FeatureCard key={item.title} icon="heart" title={item.title} text={item.text} />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------- safety */}
      <Section id="safety" tone="paper" narrow>
        <SectionHead
          center
          eyebrow="Safety & conduct"
          title="Stated plainly, because it should be"
        />
        <DividerNote>
          <p>
            <strong>Ragging.</strong> Prohibited absolutely, under the UGC regulations and our own
            statutes. The Anti-Ragging Committee operates a 24×7 helpline and an anonymous reporting
            route. Findings result in suspension or expulsion, and action reports are published in
            the annual quality-assurance report.
          </p>
          <p>
            <strong>Harassment.</strong> Complaints of sexual harassment go directly to the Internal
            Complaints Committee under the POSH Act and bypass the departmental chain entirely. No
            complainant is required to raise the matter with a teacher or head of department first.
          </p>
          <p>
            <strong>Discrimination.</strong> The SC/ST Cell and the Grievance Redressal Committee
            handle complaints of caste, religious, regional, gender and disability discrimination. A
            complaint may be filed by a witness, not only by the person affected.
          </p>
          <p>
            <strong>Where to go.</strong> All three routes, with named officers and contact details,
            are on the <Link to="/contact#grievance">grievance page</Link>. If you are unsure which
            applies, write to any of them — it will be routed, not returned.
          </p>
        </DividerNote>
      </Section>

      <CtaBand
        title="Spend a Saturday morning here"
        text="Campus visits run every Saturday at 10:30 during term. You will see halls, laboratories and the food court, and you can talk to students without a member of staff in the room."
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
