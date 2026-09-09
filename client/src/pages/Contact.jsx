import { Link } from 'react-router-dom'
import { university } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import Accordion from '../components/Accordion.jsx'
import { FeatureCard } from '../components/cards.jsx'
import { EnquiryForm, VisitForm } from '../components/forms.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Grid,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'enquire', label: 'Send an enquiry' },
  { id: 'offices', label: 'Offices' },
  { id: 'visit', label: 'Visit us' },
  { id: 'directions', label: 'Directions' },
  { id: 'grievance', label: 'Grievance & disclosures' },
]

const offices = [
  {
    name: 'Admissions office',
    detail: 'Applications, eligibility, counselling, scholarships and fee queries.',
    phone: university.phone.tollFree,
    email: university.email.admissions,
    hours: 'Monday–Saturday, 09:00–18:00',
  },
  {
    name: 'Registrar’s office',
    detail: 'Transcripts, migration and provisional certificates, verification, statutory disclosures.',
    phone: university.phone.landline,
    email: university.email.registrar,
    hours: 'Monday–Friday, 10:00–17:00',
  },
  {
    name: 'Placement cell',
    detail: 'Campus drives, internship quotas, visiting-faculty modules, alumni mentoring.',
    phone: university.phone.landline,
    email: university.email.placements,
    hours: 'Monday–Friday, 10:00–17:00',
  },
  {
    name: 'Grievance & compliance',
    detail: 'Grievance redressal, anti-ragging, internal complaints, RTI and disclosures.',
    phone: university.phone.landline,
    email: university.email.grievance,
    hours: 'Monday–Saturday, 09:00–18:00 · helpline 24×7',
  },
]

const grievanceRoutes = [
  {
    q: 'Academic grievance — marks, attendance, teaching, supervision',
    a: 'Raise it first with the Head of Department, then the Dean of the school, then the Grievance Redressal Committee, which must respond within fifteen working days. Examination results have a separate route: re-evaluation and answer-script inspection, with a published fee and a thirty-day window from the date of result. Write to grievance@vedreyan.edu.in if you are unsure which applies — it will be routed rather than returned.',
  },
  {
    q: 'Ragging',
    a: 'Prohibited absolutely under the UGC regulations and the university statutes. The Anti-Ragging Committee operates a 24×7 helpline and an anonymous reporting form; a report may be filed by a witness, not only by the person affected. Findings result in suspension or expulsion, and anonymised action reports are published in the annual quality-assurance report.',
  },
  {
    q: 'Sexual harassment',
    a: 'Complaints go directly to the Internal Complaints Committee constituted under the POSH Act, and bypass the departmental chain entirely. You are not required to raise the matter with a teacher, warden or head of department first. The committee includes an external member, and proceedings are confidential.',
  },
  {
    q: 'Caste, religious, regional, gender or disability discrimination',
    a: 'Handled by the SC/ST Cell together with the Grievance Redressal Committee. A complaint may be made by a witness. Where a reasonable adjustment for disability has been refused, the Equal Opportunity Cell can direct the department to provide it pending the outcome.',
  },
  {
    q: 'RTI and statutory disclosures',
    a: 'Approval letters, the NAAC self-study report, NIRF submissions, audited accounts, the notified fee schedule and the annual quality-assurance report are published on the disclosures page. For anything not published, write to the Public Information Officer via the Registrar’s office; a response is due within thirty days.',
  },
  {
    q: 'Fee refunds and withdrawal',
    a: 'Refunds follow the UGC fee-refund schedule: a full refund less a processing charge if you notify us before the last date of admission, tapering thereafter. Original documents are returned within seven working days of a withdrawal request. The university does not retain certificates as security, and you should treat any institution that does with caution.',
  },
]

export default function Contact() {
  useDocumentMeta(
    'Contact, Enquiry & Grievance Redressal | Ved Reyan University',
    'Contact the admissions office, find the campus, book a visit, raise a grievance, or send an enquiry to Ved Reyan University of Medical, Pharmaceutical & Health Sciences.',
  )

  const { address, phone, email } = university

  return (
    <>
      <Hero
        image="/assets/img/reception.jpg"
        imageAlt="The reception area of the university administrative block"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title="Contact us"
        lead="An enquiry sent here reaches a named adviser, not a queue. If you would rather talk to someone, the helpline is answered by a person between nine and six."
        actions={
          <>
            <a className="btn btn--lg" href={`tel:${phone.tollFree.replace(/\s/g, '')}`}>
              Call {phone.tollFree}
            </a>
            <a className="btn btn--outline-light btn--lg" href="#enquire">
              Send an enquiry
            </a>
          </>
        }
        notes={[
          { label: 'Helpline', value: `${phone.tollFree} (toll free)` },
          { label: 'Admissions', value: email.admissions },
          { label: 'Campus visits', value: 'Saturdays, 10:30' },
        ]}
      />

      <HeroStrip
        items={[
          { value: '1 working day', label: 'Enquiry response target' },
          { value: '24×7', label: 'Anti-ragging helpline' },
          { value: '15 days', label: 'Grievance response deadline' },
          { value: '30 days', label: 'RTI response deadline' },
        ]}
      />

      <SubNav sections={sections} />

      {/* ------------------------------------------------------------ enquire */}
      <Section id="enquire">
        <Split top>
          <div>
            <SectionHead
              eyebrow="Send an enquiry"
              title="Ask us anything about admission"
              lead="Eligibility, fees, hostels, laboratories, scholarships, placements — or whether a programme is the wrong choice for what you want to do. We would rather tell you that now."
            />
            <EnquiryForm source="contact-page" />
          </div>

          <div>
            <FeatureCard icon="pin" title="Campus address">
              <p className="mb-0">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.line3}
              </p>
            </FeatureCard>

            <div className="mt-3">
              <FeatureCard icon="phone" title="Telephone">
                <p className="mb-0">
                  <a href={`tel:${phone.tollFree.replace(/\s/g, '')}`}>{phone.tollFree}</a> — toll free
                  <br />
                  <a href={`tel:${phone.landline.replace(/[\s+]/g, '')}`}>{phone.landline}</a> — reception
                </p>
              </FeatureCard>
            </div>

            <div className="mt-3">
              <FeatureCard icon="mail" title="Email">
                <p className="mb-0">
                  <a href={`mailto:${email.admissions}`}>{email.admissions}</a> — admissions
                  <br />
                  <a href={`mailto:${email.registrar}`}>{email.registrar}</a> — registrar
                  <br />
                  <a href={`mailto:${email.grievance}`}>{email.grievance}</a> — grievance
                </p>
              </FeatureCard>
            </div>
          </div>
        </Split>
      </Section>

      {/* ------------------------------------------------------------ offices */}
      <Section id="offices" tone="paper">
        <SectionHead
          eyebrow="Offices"
          title="Who to contact for what"
          lead="Writing to the right office is the fastest way to a real answer."
        />
        <DataTable
          columns={[
            { key: 'name', label: 'Office', render: (row) => <b>{row.name}</b> },
            { key: 'detail', label: 'Handles' },
            {
              key: 'phone',
              label: 'Telephone',
              render: (row) => <a href={`tel:${row.phone.replace(/[\s+]/g, '')}`}>{row.phone}</a>,
            },
            {
              key: 'email',
              label: 'Email',
              render: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
            },
            { key: 'hours', label: 'Hours' },
          ]}
          rows={offices.map((row) => ({ ...row, key: row.name }))}
        />
      </Section>

      {/* -------------------------------------------------------------- visit */}
      <Section id="visit">
        <Split top>
          <div>
            <SectionHead
              eyebrow="Visit us"
              title="Book a campus visit"
              lead="Tours run every Saturday at 10:30 during term. You will see working laboratories, a residence hall and the food court — and you can talk to students without a member of staff in the room."
            />
            <div className="form-card">
              <VisitForm />
            </div>
          </div>
          <div>
            <FeatureCard title="What a visit covers">
              <div className="mt-2">
                <TickList
                  items={[
                    'Two teaching laboratories, in use rather than staged',
                    'The Central Instrumentation Facility',
                    'A residence hall room of the type you would be allotted',
                    'The Knowledge Resource Centre and the simulation ward',
                    'Twenty minutes with current students, unsupervised',
                    'A one-to-one slot with an admissions adviser if you want one',
                  ]}
                />
              </div>
            </FeatureCard>
            <div className="mt-3">
              <MetricRow
                columns={1}
                items={[
                  { value: '10:30', label: 'Saturday start time, term weeks' },
                  { value: '~2 hours', label: 'Typical duration' },
                  { value: 'Up to 6', label: 'Visitors per booking' },
                ]}
              />
            </div>
          </div>
        </Split>
      </Section>

      {/* --------------------------------------------------------- directions */}
      <Section id="directions" tone="deep">
        <SectionHead
          eyebrow="Directions"
          title="Getting here"
          lead="The campus is on NH-44 between Rajpura and Patiala, thirty-five minutes from Chandigarh."
        />
        <Grid cols={4}>
          <FeatureCard
            icon="globe"
            title="By air"
            text="Chandigarh International Airport (IXC) is 46 km away, about an hour by road. Pre-paid taxis and app cabs both serve the campus."
          />
          <FeatureCard
            icon="building"
            title="By train"
            text="Rajpura Junction is 6 km; Ambala Cantt, with more long-distance services, is 28 km. University shuttles meet scheduled arrivals during admission weeks."
          />
          <FeatureCard
            icon="pin"
            title="By road"
            text="Directly off NH-44. Parking is free for visitors at Gate 2. Set your navigation to the Ved Reyan Knowledge City main gate rather than the postal address."
          />
          <FeatureCard
            icon="users"
            title="University shuttles"
            text="Scheduled services to Chandigarh, Patiala and Ambala on a published timetable, free for students and staff with a valid card."
          />
        </Grid>

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Adding a map.</strong> This build ships without an embedded map so that the
              site loads no third-party trackers by default. To add one, drop an iframe or a
              Leaflet/Mapbox component into this section and extend the{' '}
              <code>connectSrc</code> and <code>frameSrc</code> directives in{' '}
              <code>server/src/index.js</code> — see README.md.
            </p>
          </DividerNote>
        </div>
      </Section>

      {/* ---------------------------------------------------------- grievance */}
      <Section id="grievance" narrow>
        <SectionHead
          eyebrow="Grievance & disclosures"
          title="How to raise a problem, and who has to answer"
          lead="Each route below has a named committee and a response deadline. None of them requires you to go through the person you are complaining about."
        />
        <Accordion items={grievanceRoutes} single={false} openFirst={false} />

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Escalation outside the university.</strong> If a grievance is not resolved
              here, it may be taken to the UGC Ombudsperson for the university, to the relevant
              regulatory council (PCI, NMC or INC) for matters within its remit, or to the State
              Higher Education Council. We will provide the contact details on request rather than
              making you find them.
            </p>
          </DividerNote>
        </div>
      </Section>

      <CtaBand
        title="Applications for 2026–27 are open"
        text="Register once and you are considered for every programme you are eligible for. No application fee."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/admissions#apply">
              Apply now
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
