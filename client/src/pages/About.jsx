import { Link } from 'react-router-dom'
import { university, leadership, programmeCount } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import Accordion from '../components/Accordion.jsx'
import { FeatureCard, PersonCard } from '../components/cards.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Figure,
  FigureStack,
  Grid,
  MoreLink,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'story', label: 'Our story' },
  { id: 'vision', label: 'Vision & mission' },
  { id: 'vc', label: 'Vice-Chancellor' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'accreditation', label: 'Accreditation' },
  { id: 'regulations', label: 'Academic regulations' },
  { id: 'campus', label: 'Campus & location' },
]

const values = [
  {
    icon: 'heart',
    title: 'Care first',
    text: 'Every clinical decision taught here is framed by its effect on a patient who cannot check our work.',
  },
  {
    icon: 'check',
    title: 'Evidence over assertion',
    text: 'A claim in a seminar needs a citation. A result in a laboratory needs a method. Both get asked for.',
  },
  {
    icon: 'clock',
    title: 'Time on task',
    text: 'Contact hours are protected. Laboratory sessions are not cancelled to accommodate events.',
  },
  {
    icon: 'users',
    title: 'Nobody left alone',
    text: 'Every batch has a named faculty mentor for the full degree, plus a resident counselling team.',
  },
]

const regulations = [
  {
    q: 'Attendance requirement',
    a: 'A minimum of 80% attendance in theory and 80% in practicals is required in each subject to be eligible for the end-semester examination, in line with the relevant regulatory council’s requirement. Condonation up to 5% may be granted by the Dean on documented medical grounds. Clinical postings and hospital residency have a separate 90% requirement and cannot be condoned, because the missed hours are the training.',
  },
  {
    q: 'Assessment & grading',
    a: 'Each theory subject carries 25 marks of continuous internal assessment (two sessional tests and one assignment) and 75 marks of end-semester examination. Practical subjects carry 20 marks internal, 30 marks continuous laboratory record and 50 marks end-semester practical with viva. A minimum of 40% in the end-semester component and 50% in aggregate is required to pass. Grades are reported on a ten-point scale with a semester and cumulative grade-point average.',
  },
  {
    q: 'Re-appearance & maximum duration',
    a: 'A student may re-appear in a failed subject at the next scheduled examination without repeating the year, subject to the carry-forward limits set by the regulating council for that programme. The maximum period permitted to complete a programme is twice its normal duration, counted from the date of first registration. Requests beyond that require Academic Council approval and are rarely granted.',
  },
  {
    q: 'Academic integrity',
    a: 'All dissertations and theses are screened for similarity before submission; the permitted threshold and the graded consequences follow the UGC academic-integrity regulations. Fabrication or falsification of experimental data is treated more seriously than plagiarism and normally results in cancellation of the submission. Supervisors are required to retain raw data and instrument logs for five years after award.',
  },
  {
    q: 'Migration, transfer & withdrawal',
    a: 'Inward migration is considered only into the second year, only where the regulating council permits it, and only against a vacancy. Withdrawal refunds follow the UGC fee-refund schedule: a full refund less a processing charge if notified before the last date of admission, tapering thereafter. Original documents are returned within seven working days of a withdrawal request — the university does not retain certificates as security.',
  },
  {
    q: 'Grievance & appeal',
    a: (
      <p>
        Academic grievances go first to the Head of Department, then to the Dean, then to the
        Grievance Redressal Committee, which must respond within fifteen working days.
        Examination-result grievances have a separate re-evaluation and answer-script-inspection
        route with a published fee and a thirty-day window. Matters of harassment go directly to the
        Internal Complaints Committee and bypass this chain entirely. See the{' '}
        <Link to="/contact#grievance">grievance page</Link>.
      </p>
    ),
  },
]

export default function About() {
  useDocumentMeta(
    'About the University | Ved Reyan University',
    'History, vision and mission, leadership, governance, accreditation and academic regulations of Ved Reyan University of Medical, Pharmaceutical & Health Sciences.',
  )

  return (
    <>
      <Hero
        image="/assets/img/campus-main.jpg"
        imageAlt="The Ved Reyan University academic block seen across the lawns"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        title="About the university"
        lead="A single pharmacy institute in 2011. Four schools, a 750-bed hospital and 9,400 students today. What has not changed is the size of a practical batch."
        notes={[
          { label: 'Established', value: `${university.established} · university status ${university.universityStatusYear}` },
          { label: 'Campus', value: '120 acres, Rajpura, Punjab' },
          { label: 'NAAC', value: 'A++ (CGPA 3.61)' },
        ]}
      />

      <HeroStrip
        items={university.campusFacts.map((fact) => ({ value: fact.value, label: fact.label }))}
      />

      <SubNav sections={sections} />

      {/* -------------------------------------------------------------- story */}
      <Section id="story">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Our story"
              title="Built outwards from a laboratory"
              lead="Most health-science universities begin with a medical college and add a pharmacy department later. Ved Reyan happened the other way round, and the consequences are still visible in everything from our timetable to our building layout."
            />
            <p>
              In 2011 the Ved Reyan Institute of Pharmacy opened with sixty D.Pharm students, four
              laboratories and eleven teachers, in what is now the north wing of Block A. The founding
              principle was unfashionably narrow: that a pharmacy student should personally operate
              every instrument named in the syllabus. It meant buying fewer, better instruments and
              capping practical batches at twenty — a decision that cost money and won students.
            </p>
            <p>
              B.Pharm followed in 2013, M.Pharm in 2015. The university was constituted in 2016 under
              the Punjab Private Universities Act, and the first MBBS cohort was admitted in 2019 once
              the teaching hospital reached its sanctioned bed strength. Nursing and allied health
              followed in 2020 and 2021. The hospital crossed 750 beds in 2024 and was reaccredited by
              NABH the same year.
            </p>
            <p>
              Fifteen years in, the institution has grown roughly a hundredfold, now runs{' '}
              {programmeCount} programmes, and the batch cap has not moved. We are asked about that
              fairly often by people who have run the arithmetic. The honest answer is that it is the
              one commitment we have never been able to argue ourselves out of.
            </p>

            <h3>Milestones</h3>
            <DataTable
              columns={[
                { key: 'year', label: 'Year', render: (row) => <b>{row.year}</b> },
                { key: 'text', label: 'Milestone' },
              ]}
              rows={university.milestones.map((row) => ({ ...row, key: row.year }))}
            />
          </div>

          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/campus-block.jpg"
                alt="A modern teaching block on the campus"
                caption="Block C, opened in 2021, houses the allied-health teaching laboratories and the simulation suite."
              />
            </div>
            <MetricRow columns={1} items={university.campusFacts} />
          </div>
        </Split>
      </Section>

      {/* ------------------------------------------------------------- vision */}
      <Section id="vision" tone="deep">
        <SectionHead eyebrow="Vision & mission" title="What we are trying to do, in plain words" />
        <Grid cols={2}>
          <FeatureCard
            title="Vision"
            text="To be the health-science university that other institutions visit when they want to see how practical teaching is supposed to work — producing pharmacists, physicians, nurses and allied-health professionals who are trusted on their first day because they have already done the work."
          />
          <FeatureCard title="Mission">
            <div className="mt-2">
              <TickList
                items={[
                  'Cap every practical batch at twenty, whatever the financial pressure.',
                  'Teach clinical subjects inside our own hospital, with our own clinicians.',
                  'Reserve and fund research places for undergraduates in every centre.',
                  'Treat regulatory, ethical and legal competence as core, not compliance.',
                  'Publish honestly, including results that did not work.',
                  'Keep fees legible: one published schedule, no mid-year surprises.',
                ]}
              />
            </div>
          </FeatureCard>
        </Grid>

        <div className="mt-4">
          <Grid cols={4}>
            {values.map((value) => (
              <FeatureCard key={value.title} icon={value.icon} title={value.title} text={value.text} />
            ))}
          </Grid>
        </div>
      </Section>

      {/* ----------------------------------------------------------------- VC */}
      <Section id="vc" tone="paper">
        <div className="dean">
          <figure className="dean__photo">
            <img
              src="/assets/img/faculty-4.jpg"
              alt="Portrait of Prof. (Dr.) Devendra Nath Sahni, Vice-Chancellor"
              width="560"
              height="560"
              loading="lazy"
            />
            <figcaption>
              <b>Prof. (Dr.) Devendra Nath Sahni</b>
              <small>
                Vice-Chancellor
                <br />
                M.Pharm, Ph.D. (BHU), FIC
              </small>
            </figcaption>
          </figure>
          <div className="prose">
            <SectionHead
              eyebrow="From the Vice-Chancellor"
              title="“A health-science degree is a promise made to a stranger.”"
            />
            <p>
              Somewhere in the next decade, a person you have never met will take a tablet you helped
              formulate, or accept a dose you calculated, or trust a report you signed. They will
              never know your name. That asymmetry — enormous consequence, zero recognition — is the
              moral centre of every programme we run.
            </p>
            <p>
              It is also why we are stubborn about certain things. Why practical batches stay at
              twenty students even when it would be cheaper to run forty. Why we insist that every
              pharmacy student spend time on a hospital ward and every medical student spend time in
              the drug store. Why a failed batch in the formulation laboratory gets written up
              honestly instead of quietly repeated.
            </p>
            <p>
              I came to administration late and reluctantly, after twenty-six years of teaching
              medicinal chemistry, and I have kept one habit from the bench: I do not accept a number
              without asking how it was measured. You will find that reflected in how this university
              reports itself. Where a ranking is a band, we print the band. Where a placement figure
              excludes some students, we say who. Where an approval is provisional, we say so.
            </p>
            <p>
              If you are choosing between universities, look past the rankings for a moment and ask a
              simpler question: in whose hands will the equipment actually be? Here, they will be
              yours.
            </p>
            <p className="dean__sign">Prof. (Dr.) Devendra Nath Sahni</p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- leadership */}
      <Section id="leadership">
        <SectionHead
          eyebrow="Leadership & governance"
          title="Who is accountable for what"
          lead="The university is governed by a Board of Management, an Academic Council and a Board of Studies for each school, constituted under the Punjab Private Universities Act."
        />
        <div className="mb-3">
          <Grid cols={4}>
            {leadership.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </Grid>
        </div>

        <Grid cols={3}>
          <FeatureCard
            title="Board of Management"
            text="Fifteen members including the Chancellor’s nominees, the Vice-Chancellor, two state-government nominees, three external academic experts and two elected faculty representatives. Meets quarterly; minutes are tabled before the Academic Council."
          />
          <FeatureCard
            title="Academic Council"
            text="Approves curricula, examination regulations and new programmes on the recommendation of each school’s Board of Studies. Includes four external subject experts and two student representatives with speaking rights."
          />
          <FeatureCard
            title="Statutory committees"
            text="Internal Quality Assurance Cell, Institutional Ethics Committee, Institutional Animal Ethics Committee, Anti-Ragging Committee, Internal Complaints Committee, SC/ST Cell, Grievance Redressal Committee and the Students’ Council."
          />
        </Grid>
      </Section>

      {/* ------------------------------------------------------ accreditation */}
      <Section id="accreditation" tone="paper">
        <SectionHead
          eyebrow="Accreditation & approvals"
          title="Every approval, with its scope stated"
          lead="An approval covers specific programmes for a specific period. We list the scope rather than the badge."
        />
        <DataTable
          caption="Statutory approvals and accreditations currently held."
          columns={[
            { key: 'body', label: 'Body', render: (row) => <b>{row.body}</b> },
            { key: 'status', label: 'Status' },
            { key: 'scope', label: 'Scope' },
            { key: 'validTo', label: 'Valid to' },
          ]}
          rows={university.approvals.map((row) => ({ ...row, key: row.body }))}
        />

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Mandatory disclosure.</strong> Approval letters, the NAAC self-study report,
              NIRF submissions, audited accounts, the fee schedule notified to the state
              fee-regulatory committee and the annual quality-assurance report are published in full
              on the disclosures page. If a document you need is not there, write to the Registrar at{' '}
              <a href={`mailto:${university.email.registrar}`}>{university.email.registrar}</a> and it
              will be provided.
            </p>
          </DividerNote>
        </div>
      </Section>

      {/* -------------------------------------------------------- regulations */}
      <Section id="regulations">
        <SectionHead eyebrow="Academic regulations" title="The rules that decide your degree" />
        <Accordion items={regulations} />
      </Section>

      {/* ------------------------------------------------------------- campus */}
      <Section id="campus" tone="paper">
        <Split>
          <div>
            <SectionHead
              eyebrow="Campus & location"
              title="Rajpura, Punjab — thirty-five minutes from Chandigarh"
            />
            <p>
              The campus sits on 120 acres beside NH-44, between Rajpura and Patiala. Chandigarh
              international airport is 46 km away, Ambala Cantt railway station 28 km, and Rajpura
              railway station 6 km. University shuttles run to Chandigarh, Patiala and Ambala on a
              published timetable.
            </p>
            <div className="mt-2">
              <TickList
                items={[
                  'Six academic blocks, seven residence halls and a 900-seat auditorium',
                  'The 750-bed teaching hospital, on campus and walking distance from every block',
                  'Eight-lane swimming pool, cricket ground, athletics track and indoor sports complex',
                  'Two-acre medicinal-plant garden maintained by the School of Pharmaceutical Sciences',
                  'Solar generation covering 38% of campus daytime load',
                ]}
              />
            </div>
            <div className="btn-row mt-3">
              <Link className="btn btn--navy" to="/contact#visit">
                Directions &amp; campus map
              </Link>
              <MoreLink to="/campus-life">See campus life</MoreLink>
            </div>
          </div>
          <FigureStack
            images={[
              { src: '/assets/img/library-hall.jpg', alt: 'Reading galleries in the Knowledge Resource Centre' },
              { src: '/assets/img/classroom.jpg', alt: 'Students in a tiered lecture theatre' },
              { src: '/assets/img/teaching-hospital.jpg', alt: 'Exterior of the university teaching hospital' },
            ]}
          />
        </Split>
      </Section>

      <CtaBand
        title="Come and see it"
        text="Campus visits run every Saturday at 10:30. You will be shown the laboratories in use, not an empty demonstration room."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact#visit">
              Book a campus visit
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
