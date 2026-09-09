import { Link } from 'react-router-dom'
import {
  findSchool,
  bySchool,
  facultyRegister,
  news,
  levelLabels,
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
  { id: 'physiotherapy', label: 'Physiotherapy' },
  { id: 'diagnostics', label: 'Diagnostics & imaging' },
  { id: 'public-health', label: 'Public health' },
  { id: 'careers', label: 'Careers' },
  { id: 'faculty', label: 'Faculty' },
]

const school = findSchool('allied')
const alliedProgrammes = bySchool('allied')
const alliedFaculty = facultyRegister.filter((person) => person.school === 'allied')
const alliedNews = news.filter((item) => item.schools.includes('allied'))
const alliedPlacement = placementBySchool.find((row) => row.school === 'Allied Health Sciences')

const physioProgrammes = alliedProgrammes.filter((p) => ['bpt', 'mpt'].includes(p.id))
const diagnosticProgrammes = alliedProgrammes.filter((p) =>
  ['bsc-mlt', 'bsc-mlt-lateral', 'msc-medical-lab-sciences', 'bsc-radiology', 'msc-radiology'].includes(p.id),
)
const publicHealthProgrammes = alliedProgrammes.filter((p) =>
  ['mph', 'bsc-nutrition', 'msc-clinical-nutrition'].includes(p.id),
)

export default function AlliedHealth() {
  useDocumentMeta(
    'School of Allied Health Sciences | Ved Reyan University',
    'Physiotherapy, medical laboratory technology, radiology and imaging, optometry, operation-theatre technology, dietetics and public health programmes at Ved Reyan University.',
  )

  return (
    <>
      <Hero
        image="/assets/img/imaging-lab.jpg"
        imageAlt="Clinicians reviewing diagnostic images on screen"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Schools', to: '/schools' }, { label: 'Allied Health Sciences' }]}
        title="School of Allied Health Sciences"
        lead="Sixteen programmes covering the professions a hospital cannot function without — each one taught in the department where the work actually happens, not in a classroom that describes it."
        actions={
          <>
            <Link className="btn btn--lg" to="/admissions#apply">
              Apply for 2026–27
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/programmes?school=allied">
              Compare programmes
            </Link>
          </>
        }
        notes={[
          { label: '16 programmes', value: '— bachelor to doctoral' },
          { label: 'NABL laboratory', value: '— used as the teaching laboratory' },
          { label: 'Since 2021', value: '— the newest school' },
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
              title="The professions that make a hospital work"
              lead={school.intro}
            />
            <p>
              A hospital without radiographers has no imaging. Without laboratory technologists it
              has no diagnosis. Without physiotherapists its orthopaedic surgery achieves half of
              what it should, and without dietitians its critical-care patients lose muscle they
              cannot afford to lose. These are not support functions; they are the clinical service.
            </p>
            <p>
              They are also, honestly, the programmes most often taught badly — a syllabus delivered
              in a lecture room, with a token attachment at the end. Our approach is the opposite:
              the NABL-accredited hospital laboratory <em>is</em> the MLT teaching laboratory, the
              imaging department is where radiography is taught, and physiotherapy students carry a
              supervised outpatient caseload from the third year.
            </p>
            <TickList items={school.highlights} />
          </div>
          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/stethoscope.jpg"
                alt="A stethoscope resting on a pale surface"
                caption="Sixteen programmes, from a one-year EMT certificate to doctoral research."
              />
            </div>
            <FeatureCard title="Departments">
              <div className="mt-2">
                <Chips items={school.departments.map((d) => ({ label: d.name }))} variant="teal" />
              </div>
            </FeatureCard>
          </div>
        </Split>

        <div className="mt-4">
          <AccreditationStrip items={school.approvals.concat(['UGC Section 2(f)', 'NABH-accredited teaching hospital'])} />
        </div>
      </Section>

      {/* -------------------------------------------------------- programmes */}
      <Section id="programmes" tone="paper">
        <SectionHead
          eyebrow="Programmes"
          title={`All ${alliedProgrammes.length} allied-health programmes`}
          lead="Most bachelor programmes are three academic years plus a compulsory one-year internship, which is why they are listed as four."
        />
        <Grid cols={3}>
          {alliedProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              levelLabel={levelLabels[programme.level]}
              showEligibility
            />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------ physiotherapy */}
      <Section id="physiotherapy" tone="deep">
        <Split top>
          <div>
            <SectionHead
              eyebrow="Physiotherapy & Rehabilitation"
              title="A caseload, not a case study"
              lead="BPT and MPT across musculoskeletal, neurological, cardiopulmonary and sports physiotherapy, with a fourteen-station electrotherapy and exercise-therapy suite."
            />
            <TickList
              items={[
                'Supervised outpatient caseload from the third year of BPT, and from the first semester of MPT',
                'Fourteen-station electrotherapy and exercise-therapy suite',
                'Gait analysis and conditioning work with the university sports teams',
                'Community rehabilitation camps — 220 assistive devices fitted in the 2026 camp',
                'Six-month compulsory internship across orthopaedics, neurology and cardiopulmonary units',
              ]}
            />
            <div className="btn-row mt-3">
              <Link className="btn btn--light" to="/programmes?school=allied">
                See BPT and MPT
              </Link>
            </div>
          </div>
          <div>
            <Grid cols={1}>
              {physioProgrammes.map((programme) => (
                <ProgrammeCard key={programme.id} programme={programme} levelLabel={levelLabels[programme.level]} />
              ))}
            </Grid>
          </div>
        </Split>
      </Section>

      {/* --------------------------------------------------------- diagnostics */}
      <Section id="diagnostics">
        <SectionHead
          eyebrow="Diagnostics & imaging"
          title="Taught in an accredited laboratory, on working equipment"
          lead="The hospital’s central laboratory is accredited to ISO 15189 and is the teaching laboratory for medical laboratory technology. The imaging department, with CT, MRI and a cath lab, is where radiography is taught."
        />
        <Grid cols={3}>
          {diagnosticProgrammes.map((programme) => (
            <ProgrammeCard key={programme.id} programme={programme} levelLabel={levelLabels[programme.level]} />
          ))}
        </Grid>

        <div className="mt-4">
          <Grid cols={3}>
            <FeatureCard
              icon="microscope"
              title="Laboratory sciences"
              text="Haematology, clinical biochemistry, histopathology, microbiology, immunology and molecular diagnostics, with quality management taught to ISO 15189."
            />
            <FeatureCard
              icon="gear"
              title="Imaging technology"
              text="Radiographic technique, CT, MRI, ultrasound and interventional support, with radiation protection and dose audit as assessed components."
            />
            <FeatureCard
              icon="check"
              title="Why accreditation matters here"
              text="In an accredited laboratory every result is traceable and every method verified. Students learn the documentation habit in the environment that enforces it."
            />
          </Grid>
        </div>
      </Section>

      {/* -------------------------------------------------------- public health */}
      <Section id="public-health" tone="paper">
        <Split variant="wideRight" top>
          <div>
            <SectionHead
              eyebrow="Public Health"
              title="Eleven villages, four years, the same households"
              lead="The MPH and the nutrition programmes are anchored by continuous fieldwork in eleven adopted villages — the same households across the programme, which is what makes the longitudinal view real rather than rhetorical."
            />
            <TickList
              items={[
                'Epidemiology, biostatistics, health economics and health-systems management',
                'Implementation research with a supervised practicum in a live programme',
                'Joint antibiotic-stewardship work with the School of Pharmaceutical Sciences',
                'Screening camps: 4,300 households reached in the 2026 stewardship drive',
                'Nutrition programmes with a hospital dietetics internship',
              ]}
            />
            <div className="btn-row mt-3">
              <Link className="btn btn--navy" to="/research#centres">
                Related research centres
              </Link>
              <MoreLink to="/campus-life#events">Community outreach</MoreLink>
            </div>
          </div>
          <Grid cols={1}>
            {publicHealthProgrammes.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} levelLabel={levelLabels[programme.level]} />
            ))}
          </Grid>
        </Split>
      </Section>

      {/* ------------------------------------------------------------ careers */}
      <Section id="careers">
        <SectionHead
          eyebrow="Careers"
          title="Where allied-health graduates go"
          lead="Allied-health roles are in structural shortage across Indian and overseas hospitals, which is reflected in a high placement rate at moderate packages."
        />
        {alliedPlacement ? (
          <div className="mb-3">
            <MetricRow
              columns={4}
              items={[
                { value: alliedPlacement.rate, label: 'Placement rate, 2025' },
                { value: alliedPlacement.offers, label: 'Offers received' },
                { value: alliedPlacement.highest, label: 'Highest package' },
                { value: alliedPlacement.median, label: 'Median package' },
              ]}
            />
          </div>
        ) : null}

        <DataTable
          caption="Typical first roles by programme."
          columns={[
            { key: 'name', label: 'Programme', render: (row) => <b>{row.name}</b> },
            { key: 'careers', label: 'Typical first roles', render: (row) => (row.careers || []).join(' · ') },
          ]}
          rows={alliedProgrammes.filter((p) => p.careers).map((row) => ({ ...row, key: row.id }))}
        />

        <div className="mt-3">
          <DividerNote>
            <p>
              <strong>Overseas practice.</strong> Several allied-health qualifications are recognised
              for registration in the Gulf, the United Kingdom and Australia, but the requirements
              differ by profession and change often. The school will provide transcripts, syllabus
              attestation and clinical-hours records in the format each regulator asks for, at no
              charge. We do not operate a paid overseas-placement service and will not recommend one.
            </p>
          </DividerNote>
        </div>
      </Section>

      {/* ------------------------------------------------------------ faculty */}
      <Section id="faculty" tone="paper">
        <SectionHead
          eyebrow="Faculty"
          title="Allied-health faculty"
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
          rows={alliedFaculty.map((row) => ({ ...row, key: row.name }))}
        />

        {alliedNews.length ? (
          <div className="mt-4">
            <h3>From the school</h3>
            <Grid cols={3}>
              {alliedNews.map((item) => (
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
          </div>
        ) : null}
      </Section>

      <CtaBand
        title="Allied-health admissions for 2026–27 are open"
        text="Sixteen programmes, most on VRUET-UG or your qualifying marks. Register once to be considered for all of them."
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
