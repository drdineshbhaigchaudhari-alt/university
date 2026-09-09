import { Link } from 'react-router-dom'
import { findSchool, bySchool, hospital, facultyRegister, news, levelLabels } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow, Stats } from '../components/Stats.jsx'
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
  { id: 'hospital', label: 'Teaching hospital' },
  { id: 'clinical', label: 'Clinical training' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'admission', label: 'Admission' },
  { id: 'news', label: 'News' },
]

const school = findSchool('medical')
const medicalProgrammes = bySchool('medical')
const medicalFaculty = facultyRegister.filter((person) => person.school === 'medical')
const medicalNews = news.filter((item) => item.schools.includes('medical'))

const specialities = [
  'General Medicine',
  'General Surgery',
  'Paediatrics',
  'Obstetrics & Gynaecology',
  'Orthopaedics',
  'Anaesthesiology',
  'Radiodiagnosis',
  'Pathology',
  'Microbiology',
  'Pharmacology',
  'Community Medicine',
  'Dermatology',
  'Psychiatry',
  'ENT',
  'Ophthalmology',
  'Cardiology (DM)',
  'Neurology (DM)',
  'Neurosurgery (M.Ch.)',
  'Paediatric Surgery (M.Ch.)',
]

export default function MedicalSciences() {
  useDocumentMeta(
    'School of Medical Sciences | Ved Reyan University',
    'MBBS, MD/MS and DM/M.Ch. programmes taught inside the university’s own 750-bed NABH-accredited teaching hospital.',
  )

  return (
    <>
      <Hero
        image="/assets/img/surgery.jpg"
        imageAlt="A surgical team at work in an operating theatre"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Schools', to: '/schools' }, { label: 'Medical Sciences' }]}
        title="School of Medical Sciences"
        lead="MBBS, fourteen MD/MS specialities and four super-speciality programmes, taught inside a hospital the university owns and staffs. Clinical postings are timetabled by us, not negotiated with anyone else."
        actions={
          <>
            <a className="btn btn--lg" href="#admission">
              How admission works
            </a>
            <Link className="btn btn--outline-light btn--lg" to="/infrastructure#hospital">
              See the hospital
            </Link>
          </>
        }
        notes={[
          { label: 'NMC recognised', value: '— MBBS, MD/MS, DM/M.Ch.' },
          { label: '150 MBBS seats', value: '— through NEET-UG only' },
          { label: 'Since 2017', value: '— hospital opened with 300 beds' },
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
              title="A medical school with its own hospital, not an attachment"
              lead={school.intro}
            />
            <p>
              The single most consequential fact about a medical school is where its students see
              patients. A college that rents clinical exposure from an unaffiliated hospital competes
              for teaching time with that hospital’s own service pressures, and students lose. Ved
              Reyan Medical College &amp; Hospital is owned and staffed by the university, so a
              posting appears on our timetable and stays there.
            </p>
            <p>
              The curriculum is the NMC competency-based one, with early clinical exposure from the
              first professional year, the AETCOM module on attitude, ethics and communication, and a
              family-adoption programme that attaches each student to households in eleven adopted
              villages for the duration of the course. A supervised research project is compulsory in
              the third professional year — not optional, and not a literature review.
            </p>
            <TickList items={school.highlights} />
          </div>
          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/teaching-hospital.jpg"
                alt="Exterior of the university teaching hospital"
                caption="The hospital sits on campus, within walking distance of every academic block."
              />
            </div>
            <MetricRow
              columns={1}
              items={[
                { value: '~2,100', label: 'Outpatient attendances per day' },
                { value: '9', label: 'Operation theatres' },
                { value: '60', label: 'Critical-care beds' },
                { value: '11', label: 'Villages in the family-adoption programme' },
              ]}
            />
          </div>
        </Split>

        <div className="mt-4">
          <AccreditationStrip
            items={['NMC recognised', 'NABH-accredited hospital', 'NABL-accredited central laboratory', 'UGC Section 2(f)']}
          />
        </div>
      </Section>

      {/* -------------------------------------------------------- programmes */}
      <Section id="programmes" tone="paper">
        <SectionHead
          eyebrow="Programmes"
          title={`${medicalProgrammes.length} programmes, from MBBS to super-speciality`}
          lead="Admission to every clinical programme below is governed entirely by NEET and the state or national counselling authority."
          action={
            <Link className="btn btn--ghost" to="/programmes?school=medical">
              Compare in the catalogue
            </Link>
          }
        />
        <Grid cols={3}>
          {medicalProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              levelLabel={levelLabels[programme.level]}
              showEligibility
              linkTo="/contact"
              linkLabel="Enquire"
            />
          ))}
        </Grid>

        <div className="mt-4">
          <h3>Specialities offered</h3>
          <Chips items={specialities} variant="teal" />
        </div>
      </Section>

      {/* ----------------------------------------------------------- hospital */}
      <Section id="hospital" tone="deep">
        <Split top>
          <div>
            <SectionHead eyebrow="Teaching hospital" title={hospital.name} lead={hospital.summary} />
            <TickList items={hospital.features} />
          </div>
          <div>
            <Stats items={hospital.facts.map((fact) => ({ value: fact.value, label: fact.label }))} columns={2} />
            <div className="mt-3">
              <FeatureCard
                icon="hospital"
                title="A real service load"
                text="Around 2,100 outpatient attendances a day. That volume is what makes the teaching work: a student on a medicine posting sees enough presentations to build a pattern, rather than the same three conditions repeatedly."
              />
            </div>
          </div>
        </Split>
      </Section>

      {/* ----------------------------------------------------------- clinical */}
      <Section id="clinical">
        <SectionHead
          eyebrow="Clinical training"
          title="How the four and a half years are actually spent"
          lead="Phases follow the NMC competency-based curriculum. What varies between colleges is the supervision ratio and the honesty of the logbook — so those are the two things we publish."
        />
        <DataTable
          caption="MBBS phase structure and clinical exposure."
          columns={[
            { key: 'phase', label: 'Phase', render: (row) => <b>{row.phase}</b> },
            { key: 'duration', label: 'Duration' },
            { key: 'content', label: 'Content' },
            { key: 'clinical', label: 'Clinical exposure' },
          ]}
          rows={[
            {
              key: '1',
              phase: 'First professional',
              duration: '12 months',
              content: 'Anatomy, physiology, biochemistry, plus AETCOM and the foundation course',
              clinical: 'Early clinical exposure — one half-day a week from month three',
            },
            {
              key: '2',
              phase: 'Second professional',
              duration: '12 months',
              content: 'Pathology, pharmacology, microbiology, forensic medicine',
              clinical: 'Clinical postings begin in medicine, surgery, obstetrics and paediatrics',
            },
            {
              key: '3',
              phase: 'Third professional, part I',
              duration: '12 months',
              content: 'Community medicine, ophthalmology, ENT, plus the compulsory research project',
              clinical: 'Rotating postings; family-adoption visits continue',
            },
            {
              key: '4',
              phase: 'Third professional, part II',
              duration: '14 months',
              content: 'Medicine, surgery, obstetrics & gynaecology, paediatrics, orthopaedics, psychiatry',
              clinical: 'Full clinical load with graded responsibility under supervision',
            },
            {
              key: '5',
              phase: 'Compulsory rotating internship',
              duration: '12 months',
              content: 'Paid internship across all major departments',
              clinical: 'Independent duties under consultant supervision, including night calls',
            },
          ]}
        />

        <div className="mt-4">
          <Grid cols={3}>
            <FeatureCard
              icon="users"
              title="Supervision ratio"
              text="Clinical bedside teaching runs in groups of eight to ten, not thirty. Skills-laboratory sessions are capped at twelve."
            />
            <FeatureCard
              icon="check"
              title="Logbook integrity"
              text="Procedure logbooks are countersigned by the supervising consultant at the time, not retrospectively in the final week. Audited each semester."
            />
            <FeatureCard
              icon="heart"
              title="Family adoption"
              text="Each student follows households in the adopted villages across all four years — the same families, so the longitudinal view is real."
            />
          </Grid>
        </div>
      </Section>

      {/* ------------------------------------------------------------ faculty */}
      <Section id="faculty" tone="paper">
        <SectionHead
          eyebrow="Faculty"
          title="Clinicians who teach and treat"
          lead="Every consultant listed below holds a clinical appointment in the hospital as well as an academic one — they are not visiting lecturers."
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
          rows={medicalFaculty.map((row) => ({ ...row, key: row.name }))}
          footnote="A representative extract. The complete register is available from the Registrar’s office."
        />
      </Section>

      {/* ---------------------------------------------------------- admission */}
      <Section id="admission">
        <SectionHead
          eyebrow="Admission"
          title="Stated plainly: these seats are not ours to give"
          lead="Every clinical seat in this school is filled through NEET and the counselling authority. The university has no discretion, no management quota and no ability to accelerate the process."
        />
        <DividerNote>
          <p>
            <strong>MBBS.</strong> Admission is through NEET-UG followed by counselling conducted by
            the state authority and, for the all-India quota, by the MCC. We cannot allot a seat
            outside counselling, hold one for you, or advise you on your rank prospects beyond
            publishing last year’s closing ranks when the authority releases them.
          </p>
          <p>
            <strong>MD, MS and DM/M.Ch.</strong> Through NEET-PG and NEET-SS respectively, again via
            the designated counselling authority.
          </p>
          <p>
            <strong>What this means for you.</strong> If anyone — an agent, a consultant, or someone
            claiming to represent this university — offers you a medical seat in exchange for a
            payment, they are not acting for us and the offer is not real. Report it to the Registrar
            and, if you are willing, to the state medical education authority.
          </p>
        </DividerNote>

        <div className="mt-3">
          <p>
            <MoreLink to="/admissions">See the full admissions process for other programmes</MoreLink>
          </p>
        </div>
      </Section>

      {/* --------------------------------------------------------------- news */}
      {medicalNews.length ? (
        <Section id="news" tone="paper">
          <SectionHead eyebrow="News" title="From the school and the hospital" />
          <Grid cols={3}>
            {medicalNews.map((item) => (
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
        title="Questions about the medical programmes?"
        text="We will answer honestly, including when the honest answer is that your rank makes a seat here unlikely."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact">
              Ask the admissions office
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/infrastructure#hospital">
              See the hospital
            </Link>
          </>
        }
      />
    </>
  )
}
