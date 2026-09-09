import { Link } from 'react-router-dom'
import {
  bySchool,
  rankings,
  laboratories,
  faculty,
  alumni,
  partners,
  pharmacyPlacementHeadline,
  placementHistory,
  recruiters,
  pharmacyResearchHeadline,
  centres,
  fundingAgencies,
  ugResearch,
  news,
  guestLectures,
  pharmacyFaqs,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow, Stats } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import Tabs from '../components/Tabs.jsx'
import Accordion from '../components/Accordion.jsx'
import Slider from '../components/Slider.jsx'
import { Card, FacilityCard, FeatureCard, PersonCard, ProgrammeCard, StoryCard } from '../components/cards.jsx'
import {
  AccreditationStrip,
  Chips,
  CtaBand,
  DataTable,
  DividerNote,
  Figure,
  Grid,
  LogoWall,
  MoreLink,
  Section,
  SectionHead,
  Split,
  StripCta,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'placements', label: 'Placements' },
  { id: 'rankings', label: 'Rankings' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'labs', label: 'Laboratories' },
  { id: 'industry', label: 'Industry tie-ups' },
  { id: 'research', label: 'Research' },
  { id: 'dean', label: 'Dean’s message' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'events', label: 'Events' },
  { id: 'lectures', label: 'Guest lectures' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'faqs', label: 'FAQs' },
]

const pharmacyProgrammes = bySchool('pharmacy')
const pharmacyLabs = laboratories.filter((lab) => lab.school === 'pharmacy' || lab.school === 'shared')
const pharmacyFaculty = faculty.filter((person) => person.school === 'pharmacy')
const pharmacyNews = news.filter((item) => item.schools.includes('pharmacy'))

const programmeTabs = [
  {
    id: 'after-12',
    label: (
      <>
        After 12<sup>th</sup>
      </>
    ),
    ids: ['b-pharm', 'pharm-d', 'd-pharm', 'b-pharm-hons'],
  },
  { id: 'after-diploma', label: 'After D.Pharm', ids: ['b-pharm-lateral', 'cert-hospital-community-pharmacy'] },
  {
    id: 'after-b-pharm',
    label: 'After B.Pharm',
    ids: [
      'm-pharm-pharmaceutics',
      'm-pharm-pharmacology',
      'm-pharm-chemistry',
      'm-pharm-analysis',
      'm-pharm-pharmacognosy',
      'm-pharm-practice',
      'm-pharm-regulatory',
      'm-pharm-industrial',
      'pharm-d-pb',
      'msc-clinical-research',
    ],
  },
  {
    id: 'doctoral',
    label: 'Doctoral & certificate',
    ids: [
      'phd-pharmaceutical-sciences',
      'pgd-clinical-research-pv',
      'cert-medical-writing',
      'cert-gmp-qa',
      'cert-analytical-instrumentation',
    ],
  },
].map((tab) => ({
  id: tab.id,
  label: tab.label,
  render: () => (
    <>
      <Grid cols={3}>
        {tab.ids
          .map((id) => pharmacyProgrammes.find((programme) => programme.id === id))
          .filter(Boolean)
          .map((programme) => (
            <ProgrammeCard key={programme.id} programme={programme} showEligibility />
          ))}
      </Grid>
      {tab.id === 'after-b-pharm' ? (
        <p className="mt-3">
          <strong>Admission to all M.Pharm programmes:</strong> B.Pharm with minimum 55% aggregate,
          through a valid GPAT score or the VRUET-PG test. GPAT-qualified candidates are exempt from
          VRUET-PG and are eligible for the AICTE stipend where applicable.
        </p>
      ) : null}
    </>
  ),
}))

const researchers = [
  {
    title: 'Prof. (Dr.) Meera Vasudevan',
    body: (
      <p>
        <strong>Novel drug delivery.</strong> Named in the Stanford / Elsevier world top-2% list for
        three consecutive years. Principal investigator on a ₹1.9 crore SERB project on enteric
        nanocarriers for oral peptide delivery; 148 publications, h-index 44.
      </p>
    ),
  },
  {
    title: 'Prof. (Dr.) Arvind R. Kulkarni',
    body: (
      <p>
        <strong>Solid-state pharmaceutics.</strong> Co-inventor on seven granted patents covering
        co-amorphous dispersions. Runs the quality-by-design module and consults on scale-up for two
        CDMO partners.
      </p>
    ),
  },
  {
    title: 'Dr. Sanya Bhatnagar',
    body: (
      <p>
        <strong>Neuropharmacology.</strong> ICMR-funded work on neuroinflammation in
        chemotherapy-induced peripheral neuropathy; chairs the Institutional Animal Ethics Committee
        and the hospital’s ADR monitoring centre.
      </p>
    ),
  },
  {
    title: 'Dr. Ritika Mahajan',
    body: (
      <p>
        <strong>Analytical method development.</strong> Developed fourteen validated
        stability-indicating assays now used by partner manufacturers; leads the school’s
        data-integrity training programme.
      </p>
    ),
  },
  {
    title: 'Dr. Naveen Chandran',
    body: (
      <p>
        <strong>Phytopharmaceuticals.</strong> AYUSH-funded standardisation of six polyherbal
        formulations; curates the two-acre medicinal-plant garden and its voucher-specimen herbarium.
      </p>
    ),
  },
  {
    title: 'Dr. Kabir Deshmukh',
    body: (
      <p>
        <strong>Clinical pharmacy.</strong> Runs the antimicrobial stewardship programme across four
        hospital units; published the de-prescribing protocol now used in eleven adopted villages.
      </p>
    ),
  },
]

export default function PharmaceuticalSciences() {
  useDocumentMeta(
    'School of Pharmaceutical Sciences | Ved Reyan University',
    'PCI-approved D.Pharm, B.Pharm, Pharm.D, eight M.Pharm specialisations and Ph.D. programmes, twelve laboratories, 96% placement and nine funded research centres.',
  )

  return (
    <>
      <Hero
        image="/assets/img/lab-chemistry.jpg"
        imageAlt="Researchers at work in a pharmaceutical chemistry laboratory"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Schools', to: '/schools' }, { label: 'Pharmaceutical Sciences' }]}
        title="School of Pharmaceutical Sciences"
        lead="Twelve laboratories, a 750-bed hospital next door and a faculty that still runs its own experiments. Whether you want to formulate the medicine, analyse it, register it or dispense it at a bedside, the route starts here."
        actions={
          <>
            <Link className="btn btn--lg" to="/admissions#apply">
              Apply for 2026–27
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/programmes">
              Compare programmes
            </Link>
          </>
        }
        notes={[
          { label: 'PCI approved', value: '— all pharmacy programmes' },
          { label: 'NIRF 2026', value: '— rank band 21 (Pharmacy)' },
          { label: 'Since 2011', value: '— the founding school' },
        ]}
      />

      <HeroStrip
        items={[
          { value: pharmacyProgrammes.length, label: 'Pharmacy programmes' },
          { value: 12, label: 'Dedicated laboratories' },
          { value: 96, suffix: '%', label: 'Placement, class of 2025' },
          { value: 68, label: 'Full-time faculty, 41 with Ph.D.' },
        ]}
      />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- overview */}
      <Section id="overview">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Overview"
              title="The school the university was built around"
              lead="Ved Reyan began in 2011 as a single pharmacy institute with sixty students and four laboratories. Everything else — the medical college, the hospital, the nursing and allied-health schools — grew outwards from it. That order of events still shows in how we teach."
            />
            <p>
              A pharmacy graduate is asked to do very different jobs depending on where they land. In
              a formulation plant they need to know why a granulation failed. In a quality laboratory
              they need to defend a chromatogram. In a regulatory team they need to read a deficiency
              letter without panicking. On a hospital ward they need to tell a consultant, politely,
              that a dose is wrong. No single course can rehearse all four, so we built the school
              around a simple rule: every student meets all four settings before choosing one.
            </p>
            <p>
              In practice that means a B.Pharm student spends time on the pilot plant and time on a
              ward round. It means the analysis laboratory keeps a folder of real out-of-specification
              investigations for teaching. It means the Pharm.D cohort presents medication reviews to
              working consultants, who push back. And it means the final-year project is six months
              long, supervised, and written up to journal standard — not a fortnight of tidying up
              somebody else’s data.
            </p>

            <h3>What makes this school different</h3>
            <TickList
              items={[
                <>
                  <strong>Student-operated instruments.</strong> HPLC, HPTLC, GC-MS, DSC, the tablet
                  press and the lyophiliser are all hands-on from the second year, under supervision,
                  with a booking system rather than a queue.
                </>,
                <>
                  <strong>A hospital inside the university.</strong> Clinical postings for Pharm.D and
                  Pharmacy Practice students are timetabled by us, in our own 750-bed hospital,
                  alongside our own physicians.
                </>,
                <>
                  <strong>Regulatory work as core, not elective.</strong> Schedule M, ICH Q8–Q10,
                  CTD/eCTD structure and CDSCO submissions run through the curriculum from the fourth
                  semester onwards.
                </>,
                <>
                  <strong>Research places reserved for undergraduates.</strong> Each of the nine
                  centres carries at least four UG project students a year — 61 of the 2025 cohort
                  graduated with a co-authored paper or patent filing.
                </>,
                <>
                  <strong>Batches of twenty.</strong> Hard cap on every practical class, dropping to
                  eight for animal handling and sterile compounding.
                </>,
              ]}
            />

            <div className="mt-3">
              <DividerNote>
                <p>
                  <strong>Registration note.</strong> D.Pharm and B.Pharm graduates are eligible to
                  register as pharmacists with a State Pharmacy Council under the Pharmacy Act, 1948.
                  The school assists every graduating student with the registration application and
                  the 500-hour practical training record.
                </p>
              </DividerNote>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/lab-instrumentation.jpg"
                alt="Analytical benches in the central instrumentation facility"
                caption="The Central Instrumentation Facility is open to project students by booking, seven days a week."
              />
            </div>

            <MetricRow
              columns={1}
              items={[
                { value: '1 : 20', label: 'Maximum students per instrument in a practical batch' },
                { value: '500 hrs', label: 'Supervised hospital-pharmacy training in D.Pharm' },
                { value: '6 months', label: 'Final-year industry or hospital project, B.Pharm & M.Pharm' },
              ]}
            />

            <div className="mt-3">
              <StripCta
                stacked
                title="Not sure which pharmacy route fits you?"
                text="D.Pharm, B.Pharm, Pharm.D and M.Pharm lead to genuinely different careers. Our advisers will walk you through the difference in fifteen minutes."
                actions={
                  <Link className="btn btn--sm" to="/contact">
                    Book a call
                  </Link>
                }
              />
            </div>
          </div>
        </Split>
      </Section>

      {/* --------------------------------------------------------- placements */}
      <Section id="placements" tone="paper">
        <SectionHead
          eyebrow="Placements"
          title="Class of 2025: 302 offers to pharmacy graduates"
          lead="Across formulation development, quality assurance and control, regulatory affairs, pharmacovigilance, clinical research, medical writing and hospital practice."
          action={
            <Link className="btn btn--ghost" to="/placements">
              Full placement report
            </Link>
          }
        />

        <div className="mb-3">
          <Stats items={pharmacyPlacementHeadline} />
        </div>

        <h3>Where our pharmacy graduates work</h3>
        <div className="mb-3">
          <LogoWall items={recruiters.slice(0, 20)} />
        </div>

        <h3>Three of last year’s appointments</h3>
        <Grid cols={3}>
          {[alumni[0], alumni[1], alumni[4]].map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </Grid>

        <div className="mt-4">
          <DataTable
            caption="Pharmacy placement summary, last three graduating cohorts."
            columns={[
              { key: 'cohort', label: 'Cohort', render: (row) => <b>{row.cohort}</b> },
              { key: 'eligible', label: 'Eligible students', numeric: true },
              { key: 'offers', label: 'Offers received', numeric: true },
              { key: 'rate', label: 'Placement rate', numeric: true },
              { key: 'highest', label: 'Highest package', numeric: true },
              { key: 'median', label: 'Median package', numeric: true },
            ]}
            rows={placementHistory.map((row) => ({ ...row, key: row.cohort }))}
            footnote="Figures cover pharmacy programmes only and exclude students who opted out of campus placement to pursue GPAT, NIPER JEE, a foreign master’s or a family business."
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------- rankings */}
      <Section id="rankings" tight>
        <SectionHead
          center
          eyebrow="Rankings & recognition"
          title="Independently assessed"
          lead="We publish the assessment that was actually made, including the band rather than a single flattering number."
        />
        <Stats items={rankings} />
        <div className="mt-4">
          <AccreditationStrip
            items={[
              'Pharmacy Council of India — approved',
              'UGC Section 2(f)',
              'AICTE approved',
              'CPCSEA-registered animal house',
              'NABL-linked analytical services',
              'ISO 9001:2015',
            ]}
          />
        </div>
      </Section>

      {/* -------------------------------------------------------- programmes */}
      <Section id="programmes" tone="paper">
        <SectionHead
          eyebrow="Programmes"
          title={`${pharmacyProgrammes.length} pharmacy programmes, four entry points`}
          lead="Pick the tab that matches the qualification you already hold."
        />
        <Tabs tabs={programmeTabs} label="Pharmacy programmes by entry level" />
      </Section>

      {/* -------------------------------------------------------------- labs */}
      <Section id="labs">
        <SectionHead
          eyebrow="Laboratories & facilities"
          title="Twelve laboratories, and you will use all of them"
          lead="Every laboratory below is a teaching laboratory first. Research groups book time around the class timetable, not the other way round."
          action={
            <Link className="btn btn--ghost" to="/infrastructure">
              All university facilities
            </Link>
          }
        />
        <Grid cols={3}>
          {pharmacyLabs.map((lab) => (
            <FacilityCard
              key={lab.id}
              to={`/infrastructure#${lab.id}`}
              image={lab.image}
              imageAlt={lab.imageAlt}
              title={lab.name}
              text={lab.blurb}
            />
          ))}
        </Grid>
      </Section>

      {/* ----------------------------------------------------------- industry */}
      <Section id="industry" tone="paper">
        <SectionHead
          eyebrow="Industry & institutional tie-ups"
          title="Thirty-one active memoranda of understanding"
          lead="Each MoU below carries at least one of: a guaranteed internship quota, a joint research project, shared instrument access, or a visiting-faculty commitment. Decorative agreements are not renewed."
        />
        <div className="mb-3">
          <LogoWall items={partners} />
        </div>
        <Grid cols={4}>
          <FeatureCard
            title="Guaranteed internships"
            text="Every B.Pharm student is placed in a manufacturing or hospital internship after semester six — a condition written into eleven of our MoUs."
          />
          <FeatureCard
            title="Practitioner-taught modules"
            text="Regulatory affairs, GMP and pharmacovigilance modules are co-delivered by serving industry professionals under visiting-faculty agreements."
          />
          <FeatureCard
            title="Shared instrumentation"
            text="Reciprocal access to NIPER Mohali and CSIR-IMTECH for NMR, single-crystal XRD and high-end mass spectrometry."
          />
          <FeatureCard
            title="Two exchange semesters"
            text="Credit-transfer exchange places at partner universities in the United Kingdom and Malaysia, with a partial fee waiver on selection."
          />
        </Grid>
      </Section>

      {/* ----------------------------------------------------------- research */}
      <Section id="research" tone="deep">
        <SectionHead
          eyebrow="Research & innovation"
          title="Nine centres, and a written duty to carry undergraduates"
          lead="The school holds ₹11.4 crore of the university’s live external funding. Every centre must carry at least four undergraduate project students each year to keep its internal allocation."
          action={
            <Link className="btn btn--light" to="/research">
              Research at Ved Reyan
            </Link>
          }
        />

        <div className="mb-3">
          <Stats items={pharmacyResearchHeadline} />
        </div>

        <h3>Researchers to know</h3>
        <Grid cols={3}>
          {researchers.map((person) => (
            <FeatureCard key={person.title} title={person.title}>
              {person.body}
            </FeatureCard>
          ))}
        </Grid>

        <div className="mt-4">
          <Grid cols={2}>
            <FeatureCard title="Funding agencies supporting this school">
              <div className="mt-2">
                <Chips items={fundingAgencies} />
              </div>
            </FeatureCard>
            <FeatureCard title={ugResearch.title} text={ugResearch.text}>
              <p className="mt-2">
                <MoreLink to="/research#centres">See all {centres.length} centres</MoreLink>
              </p>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      {/* --------------------------------------------------------------- dean */}
      <Section id="dean">
        <div className="dean">
          <figure className="dean__photo">
            <img
              src="/assets/img/dean.jpg"
              alt="Portrait of Prof. (Dr.) Meera Vasudevan, Dean of the School of Pharmaceutical Sciences"
              width="560"
              height="560"
              loading="lazy"
            />
            <figcaption>
              <b>Prof. (Dr.) Meera Vasudevan</b>
              <small>
                Dean, School of Pharmaceutical Sciences
                <br />
                M.Pharm, Ph.D. (NIPER Mohali)
              </small>
            </figcaption>
          </figure>
          <div className="prose">
            <SectionHead
              eyebrow="Dean’s message"
              title="“The pharmacist is the last person who can stop a mistake.”"
            />
            <p>
              A physician writes a prescription in ninety seconds. A nurse administers it. Somewhere
              in between stands a pharmacist, and that pharmacist is very often the last professional
              with both the knowledge and the licence to say: wait, this dose is wrong for this kidney
              function. Students sometimes arrive here thinking pharmacy is a support discipline. It
              is not. It is a checkpoint.
            </p>
            <p>
              Teaching that responsibility requires a particular kind of honesty in the laboratory.
              When a granulation fails, we write up why it failed. When a chromatogram shows an
              unexpected peak, we chase it rather than re-injecting until it disappears. When a
              student’s result contradicts the textbook, we look at the method before we look at the
              student. I would rather graduate a pharmacist who has documented four honest failures
              than one who has produced twelve tidy reports.
            </p>
            <p>
              What I can promise you is access. The instruments are not ornaments; you will operate
              them. The hospital is not a field trip; you will work in it. The research centres are
              not closed to undergraduates; four places in each are reserved for you. Come and use
              them.
            </p>
            <p className="dean__sign">Prof. (Dr.) Meera Vasudevan</p>
          </div>
        </div>

        <div className="mt-4">
          <Grid cols={2}>
            <FeatureCard
              title="Vision"
              text="To be recognised nationally as a school where pharmaceutical scientists are trained by doing — producing graduates who can formulate a medicine, defend its analysis, register it lawfully and use it safely at a patient’s bedside."
            />
            <FeatureCard title="Mission">
              <div className="mt-2">
                <TickList
                  items={[
                    'Keep every practical class small enough for genuine hands-on work.',
                    'Anchor clinical teaching inside the university’s own hospital.',
                    'Reserve research places for undergraduates and fund them.',
                    'Teach regulatory and ethical practice as core competence, not compliance theatre.',
                    'Publish honestly, including negative results.',
                  ]}
                />
              </div>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      {/* ------------------------------------------------------------ faculty */}
      <Section id="faculty" tone="paper">
        <SectionHead
          eyebrow="Faculty"
          title="Sixty-eight full-time faculty, forty-one with a doctorate"
          lead="Every batch is assigned a named faculty mentor for the full duration of the degree — the same person from admission to convocation."
          action={
            <Link className="btn btn--ghost" to="/faculty">
              Full faculty directory
            </Link>
          }
        />
        <Grid cols={4}>
          {pharmacyFaculty.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------- events */}
      <Section id="events">
        <SectionHead
          eyebrow="Events & happenings"
          title="What the school has been doing"
          action={
            <Link className="btn btn--ghost" to="/campus-life#events">
              All events
            </Link>
          }
        />
        <Grid cols={3}>
          {pharmacyNews.map((item) => (
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

      {/* ----------------------------------------------------------- lectures */}
      <Section id="lectures" tone="paper">
        <SectionHead
          eyebrow="Guest lectures & workshops"
          title="Practitioners, not just professors"
          lead="The school runs a compulsory weekly professional-practice slot. Twenty-eight external speakers addressed it last session; here is a representative sample."
        />
        <Grid cols={3}>
          {guestLectures.map((lecture) => (
            <Card
              key={lecture.title}
              date={lecture.topic}
              title={lecture.title}
              text={lecture.text}
              reveal={false}
              footer={
                <span className="muted">
                  <small>{lecture.speaker}</small>
                </span>
              }
            />
          ))}
        </Grid>
      </Section>

      {/* -------------------------------------------------------------- alumni */}
      <Section id="alumni" tone="navy">
        <SectionHead
          eyebrow="Alumni"
          title="Four thousand graduates, and they answer their email"
          lead="The alumni association runs the mentoring scheme, the mock-interview panels and eleven of the internships in our MoU list."
          action={
            <Link className="btn btn--light" to="/placements#alumni">
              More alumni outcomes
            </Link>
          }
        />
        <Slider label="Alumni stories">
          {alumni.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </Slider>
      </Section>

      {/* ---------------------------------------------------------------- FAQs */}
      <Section id="faqs" narrow>
        <SectionHead center eyebrow="Frequently asked" title="Pharmacy admissions, answered" />
        <Accordion items={pharmacyFaqs} />

        <div className="mt-4">
          <StripCta
            title="Still deciding?"
            text="Ask us anything about the pharmacy programmes — you will get a person, not an auto-reply."
            actions={
              <>
                <Link className="btn" to="/admissions#apply">
                  Apply now
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Send an enquiry
                </Link>
              </>
            }
          />
        </div>
      </Section>

      <CtaBand
        title="Pharmacy admissions for 2026–27 are open"
        text="120 B.Pharm seats, 30 Pharm.D seats, 60 D.Pharm seats and 114 M.Pharm seats. Phase I counselling closes 30 April 2026."
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
