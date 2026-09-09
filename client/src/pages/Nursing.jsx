import { Link } from 'react-router-dom'
import {
  findSchool,
  bySchool,
  facultyRegister,
  news,
  levelLabels,
  laboratories,
  placementBySchool,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { Card, FeatureCard, ProgrammeCard } from '../components/cards.jsx'
import {
  AccreditationStrip,
  Chips,
  CtaBand,
  DataTable,
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
  { id: 'overview', label: 'Overview' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'clinical', label: 'Clinical postings' },
  { id: 'careers', label: 'Careers' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'news', label: 'News' },
]

const school = findSchool('nursing')
const nursingProgrammes = bySchool('nursing')
const nursingFaculty = facultyRegister.filter((person) => person.school === 'nursing')
const nursingNews = news.filter((item) => item.schools.includes('nursing'))
const simulation = laboratories.find((lab) => lab.id === 'simulation')
const nursingPlacement = placementBySchool.find((row) => row.school === 'Nursing')

export default function Nursing() {
  useDocumentMeta(
    'School of Nursing | Ved Reyan University',
    'INC-approved B.Sc. Nursing, Post-Basic B.Sc. Nursing and M.Sc. Nursing programmes with simulation-led skills training and hospital-based clinical postings.',
  )

  return (
    <>
      <Hero
        image="/assets/img/nursing-care.jpg"
        imageAlt="A nursing student wearing protective gloves"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Schools', to: '/schools' }, { label: 'Nursing' }]}
        title="School of Nursing"
        lead="Skills before wards. Two years of simulation-led training in a fourteen-bed skills laboratory before a student takes responsibility for a real patient — and then clinical postings in the university’s own hospital."
        actions={
          <>
            <Link className="btn btn--lg" to="/admissions#apply">
              Apply for 2026–27
            </Link>
            <a className="btn btn--outline-light btn--lg" href="#simulation">
              See the simulation ward
            </a>
          </>
        }
        notes={[
          { label: 'INC approved', value: '— all nursing programmes' },
          { label: '100 seats', value: '— B.Sc. Nursing' },
          { label: 'Since 2020', value: '— the newest teaching school but one' },
        ]}
      />

      <HeroStrip items={school.facts.map((fact) => ({ value: fact.value, label: fact.label }))} />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- overview */}
      <Section id="overview">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Overview"
              title="The profession that spends the most time with the patient"
              lead={school.intro}
            />
            <p>
              A physician sees a patient for minutes a day. A nurse is there for the shift. That
              simple arithmetic decides who notices the change in breathing, the confusion that was
              not there at eight o’clock, the wound that has started to smell wrong. Nursing
              education is therefore not a lighter version of medical education — it is training in
              sustained, structured observation, and in acting on it.
            </p>
            <p>
              Which is why we do not put first-year students on a ward. The first two years are
              simulation-led: eight high-fidelity manikins, a fourteen-bed skills ward with piped
              gases, and repeated practice of the procedures that go wrong when they are done for the
              first time on a person. Students find it repetitive. Patients benefit from the
              repetition.
            </p>
            <TickList items={school.highlights} />

            <div className="mt-3">
              <DividerNote>
                <p>
                  <strong>Registration.</strong> Graduates of the B.Sc. Nursing and Post-Basic B.Sc.
                  programmes are eligible to register as RN/RM with a State Nursing Council.
                  Registration is granted by the Council, not the university; the school provides the
                  clinical-hours record, attested transcripts and the completion certificate, and runs
                  a documentation clinic each March for graduating students.
                </p>
              </DividerNote>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/clinical-care.jpg"
                alt="A clinician holding a patient’s hands"
                caption="Communication and consent are assessed, not assumed — with trained standardised patients."
              />
            </div>
            <MetricRow
              columns={1}
              items={[
                { value: '1 : 12', label: 'Maximum students per skills-laboratory session' },
                { value: '90%', label: 'Attendance required in clinical postings, non-condonable' },
                { value: nursingPlacement?.rate || '98%', label: 'Placement rate, class of 2025' },
                { value: '6', label: 'Departments in the clinical rotation' },
              ]}
            />
          </div>
        </Split>

        <div className="mt-4">
          <AccreditationStrip items={['INC approved', 'Punjab State Nursing Council registered', 'NABH-accredited teaching hospital']} />
        </div>
      </Section>

      {/* -------------------------------------------------------- programmes */}
      <Section id="programmes" tone="paper">
        <SectionHead
          eyebrow="Programmes"
          title={`${nursingProgrammes.length} nursing programmes`}
          lead="From a four-year bachelor degree to a residency-pattern nurse-practitioner track and doctoral study."
          action={
            <Link className="btn btn--ghost" to="/programmes?school=nursing">
              Compare in the catalogue
            </Link>
          }
        />
        <Grid cols={3}>
          {nursingProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              levelLabel={levelLabels[programme.level]}
              showEligibility
            />
          ))}
        </Grid>

        <div className="mt-4">
          <h3>M.Sc. Nursing specialities</h3>
          <Chips
            items={[
              'Medical-Surgical Nursing',
              'Obstetrics & Gynaecological Nursing',
              'Paediatric Nursing',
              'Community Health Nursing',
              'Mental Health Nursing',
            ]}
            variant="teal"
          />
        </div>
      </Section>

      {/* --------------------------------------------------------- simulation */}
      {simulation ? (
        <Section id="simulation" tone="deep">
          <Split variant="wideRight" top>
            <div>
              <SectionHead
                eyebrow="Simulation"
                title="Practise on a manikin, not on a person"
                lead={simulation.blurb}
              />
              <TickList items={simulation.equipment} />
              <p className="mt-3">
                Sessions are recorded and debriefed with a tutor. The debrief, not the procedure, is
                where the learning happens: what did you notice, what did you miss, and at what point
                should you have escalated.
              </p>
              <div className="btn-row mt-3">
                <Link className="btn btn--light" to="/infrastructure#simulation">
                  Simulation centre detail
                </Link>
              </div>
            </div>
            <Figure src={simulation.image} alt={simulation.imageAlt} />
          </Split>
        </Section>
      ) : null}

      {/* ----------------------------------------------------------- clinical */}
      <Section id="clinical">
        <SectionHead
          eyebrow="Clinical postings"
          title="Where B.Sc. Nursing students actually work"
          lead="All postings are inside the university’s own 750-bed hospital, so they are timetabled rather than negotiated. Attendance in clinical postings is 90% and cannot be condoned — the missed hours are the training."
        />
        <DataTable
          caption="Clinical rotation across the four years of B.Sc. Nursing."
          columns={[
            { key: 'year', label: 'Year', render: (row) => <b>{row.year}</b> },
            { key: 'focus', label: 'Focus' },
            { key: 'postings', label: 'Postings' },
            { key: 'hours', label: 'Clinical hours', numeric: true },
          ]}
          rows={[
            {
              key: 1,
              year: 'First',
              focus: 'Fundamentals and skills laboratory',
              postings: 'Skills ward, simulation suite, hospital orientation',
              hours: '≈ 200',
            },
            {
              key: 2,
              year: 'Second',
              focus: 'Medical-surgical nursing',
              postings: 'General medicine, general surgery, operation theatre, CSSD',
              hours: '≈ 700',
            },
            {
              key: 3,
              year: 'Third',
              focus: 'Speciality nursing',
              postings: 'Paediatrics, obstetrics & gynaecology, orthopaedics, psychiatry',
              hours: '≈ 900',
            },
            {
              key: 4,
              year: 'Fourth',
              focus: 'Critical care, community and management',
              postings: 'ICU, emergency, community health centres, nursing administration',
              hours: '≈ 1,100',
            },
          ]}
          footnote="Indicative hours, in line with the Indian Nursing Council syllabus. Night duty begins in the third year, always with a supervising staff nurse present."
        />
      </Section>

      {/* ------------------------------------------------------------ careers */}
      <Section id="careers" tone="paper">
        <SectionHead
          eyebrow="Careers"
          title="Where nursing graduates go"
          lead="Nursing places at the highest rate of any school here, at lower packages than pharmacy. Both halves of that sentence are true and we publish both."
        />
        <Grid cols={3}>
          <FeatureCard
            icon="hospital"
            title="Hospital practice"
            text="Staff nurse posts in medicine, surgery, ICU, emergency, paediatrics and theatre — in our own hospital and across the private and government sector."
          />
          <FeatureCard
            icon="shield"
            title="Speciality & critical care"
            text="Critical-care, dialysis, oncology and cardiac nursing, usually after the certificate course or the NPCC residency."
          />
          <FeatureCard
            icon="graduation"
            title="Education & administration"
            text="Nurse educator and nursing supervisor roles, normally after M.Sc. Nursing; several of our own faculty came this route."
          />
          <FeatureCard
            icon="globe"
            title="Overseas registration"
            text="Graduates commonly register in the Gulf, the United Kingdom, Ireland and Australia. We provide transcripts and clinical-hours records in the format each regulator asks for — and we do not charge for it."
          />
          <FeatureCard
            icon="users"
            title="Community health"
            text="Community health centres, national health programmes and NGO practice, supported by the community postings in the eleven adopted villages."
          />
          <FeatureCard
            icon="check"
            title="Quality & infection control"
            text="Hospital quality, patient safety and infection-prevention roles — a growing route since NABH accreditation became widespread."
          />
        </Grid>

        {nursingPlacement ? (
          <div className="mt-4">
            <MetricRow
              columns={4}
              items={[
                { value: nursingPlacement.rate, label: 'Placement rate, 2025' },
                { value: nursingPlacement.offers, label: 'Offers received' },
                { value: nursingPlacement.highest, label: 'Highest package' },
                { value: nursingPlacement.median, label: 'Median package' },
              ]}
            />
          </div>
        ) : null}

        <p className="mt-3">
          <MoreLink to="/placements">See the full placement report</MoreLink>
        </p>
      </Section>

      {/* ------------------------------------------------------------ faculty */}
      <Section id="faculty">
        <SectionHead
          eyebrow="Faculty"
          title="Nursing faculty"
          action={
            <Link className="btn btn--ghost" to="/faculty">
              Full faculty directory
            </Link>
          }
        />
        <DataTable
          columns={[
            { key: 'name', label: 'Name', render: (row) => <b>{row.name}</b> },
            { key: 'designation', label: 'Designation' },
            { key: 'department', label: 'Department' },
            { key: 'qualification', label: 'Qualification' },
            { key: 'area', label: 'Area of work' },
          ]}
          rows={nursingFaculty.map((row) => ({ ...row, key: row.name }))}
        />
      </Section>

      {/* --------------------------------------------------------------- news */}
      {nursingNews.length ? (
        <Section id="news" tone="paper">
          <SectionHead eyebrow="News" title="From the School of Nursing" />
          <Grid cols={3}>
            {nursingNews.map((item) => (
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
      ) : null}

      <CtaBand
        title="Nursing admissions for 2026–27 are open"
        text="100 B.Sc. Nursing seats, 30 Post-Basic B.Sc. seats and 40 M.Sc. Nursing seats. Apply on VRUET-UG or on your qualifying marks."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/admissions#apply">
              Apply now
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/contact">
              Talk to an adviser
            </Link>
          </>
        }
      />
    </>
  )
}
