import { Link } from 'react-router-dom'
import {
  university,
  schools,
  programmes,
  programmeCount,
  byEntry,
  entryLabels,
  news,
  alumni,
  researchHeadline,
  placementHeadline,
  recruiters,
  centres,
  admissionFaqs,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, Stats } from '../components/Stats.jsx'
import Tabs from '../components/Tabs.jsx'
import Accordion from '../components/Accordion.jsx'
import Slider from '../components/Slider.jsx'
import { Card, FacilityCard, FeatureCard, ProgrammeCard, StoryCard } from '../components/cards.jsx'
import {
  AccreditationStrip,
  Chips,
  CtaBand,
  FigureStack,
  Grid,
  LogoWall,
  MoreLink,
  Section,
  SectionHead,
  Split,
  TickList,
} from '../components/ui.jsx'

const whyUs = [
  {
    icon: 'hospital',
    title: 'A hospital that belongs to the university',
    text: 'Ved Reyan Medical College & Hospital is owned and staffed by the university. Clinical postings are scheduled by our own timetable, not negotiated with an outside institution.',
  },
  {
    icon: 'flask',
    title: 'Instruments you actually get to operate',
    text: 'HPLC, LC-MS/MS, HPTLC, DSC and the tablet press are student-operated under supervision from the second year — not demonstration-only equipment behind glass.',
  },
  {
    icon: 'users',
    title: 'A 1:20 laboratory ratio',
    text: 'Practical batches are hard-capped at twenty students. Where a technique needs one-to-one supervision — animal handling, sterile compounding — the cap drops to eight.',
  },
  {
    icon: 'shield',
    title: 'Regulatory literacy from year one',
    text: 'Schedule M, ICH Q8–Q10, CDSCO submissions and USFDA 483 case studies are woven through the core curriculum, not bolted on as an elective.',
  },
  {
    icon: 'gear',
    title: 'Nine funded centres of excellence',
    text: 'Undergraduates can join a funded project from the fifth semester. Sixty-one of our 2025 graduates left with a co-authored publication or a patent filing.',
  },
  {
    icon: 'graduation',
    title: 'A placement cell with industry alumni in it',
    text: 'Six of our nine placement officers came out of pharmaceutical manufacturing, CRO operations or hospital administration. They prepare you for the interview that is actually held.',
  },
]

const featuredFacilities = [
  {
    to: '/infrastructure#cif',
    image: '/assets/img/lab-instrumentation.jpg',
    imageAlt: 'Analytical benches in the central instrumentation facility',
    title: 'Central Instrumentation Facility',
    text: 'LC-MS/MS, GC-MS, FTIR, DSC and a Zetasizer under one roof, open to students by booking.',
  },
  {
    to: '/infrastructure#hospital',
    image: '/assets/img/teaching-hospital.jpg',
    imageAlt: 'Exterior of the university teaching hospital',
    title: '750-bed Teaching Hospital',
    text: 'NABH-accredited, with 14 specialities, 9 operation theatres and a 60-bed critical-care block.',
  },
  {
    to: '/infrastructure#library',
    image: '/assets/img/library-stacks.jpg',
    imageAlt: 'Book stacks in the Knowledge Resource Centre',
    title: 'Knowledge Resource Centre',
    text: '68,000 volumes and 14,000 e-journals through DELNET and J-Gate, open until midnight.',
  },
  {
    to: '/pharmaceutical-sciences#labs',
    image: '/assets/img/lab-pipette.jpg',
    imageAlt: 'Pipetting samples into a microplate',
    title: 'Formulation Development Lab',
    text: 'Tablet press, fluidised-bed processor, lyophiliser and USP I–IV dissolution testers.',
  },
  {
    to: '/infrastructure#simulation',
    image: '/assets/img/reception.jpg',
    imageAlt: 'Simulation ward reception area',
    title: 'Clinical Simulation Centre',
    text: 'Eight high-fidelity manikins, a model pharmacy and a standardised-patient consultation suite.',
  },
  {
    to: '/infrastructure#digital',
    image: '/assets/img/computer-lab.jpg',
    imageAlt: 'Computer laboratory workstations',
    title: 'Pharmacoinformatics Lab',
    text: 'Schrödinger, GROMACS, SAS and R on a 96-core compute node for modelling coursework.',
  },
]

/** Six programmes per entry route, so each tab reads as a real shortlist. */
const entryTabs = ['after-12', 'after-diploma', 'after-graduation', 'after-pg'].map((entry) => ({
  id: entry,
  label: entry === 'after-12' ? <>After 12<sup>th</sup></> : entryLabels[entry],
  render: () => (
    <Grid cols={3}>
      {byEntry(entry)
        .slice(0, 6)
        .map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} linkLabel="Details" />
        ))}
    </Grid>
  ),
}))

export default function Home() {
  useDocumentMeta(
    `${university.name}`,
    'A health-sciences university in Punjab offering B.Pharm, Pharm.D, M.Pharm, MBBS, Nursing and Allied Health programmes, with a 750-bed teaching hospital and twelve research laboratories.',
  )

  return (
    <>
      <Hero
        variant="home"
        image="/assets/img/campus-main.jpg"
        imageAlt="The academic block of the Ved Reyan University campus"
        kicker={`Admissions open — Session ${university.session}`}
        kickerTo="/admissions#apply"
        title="Where medicine, pharmacy and health sciences learn together."
        lead="Ved Reyan University brings four health-science schools, a 750-bed teaching hospital and twelve research laboratories onto one 120-acre campus — so a pharmacy student can follow a molecule from the synthesis bench to the patient’s bedside without leaving the university."
        actions={
          <>
            <Link className="btn btn--lg" to="/admissions#apply">
              Start your application
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/programmes">
              Explore {programmeCount} programmes
            </Link>
          </>
        }
        notes={[
          { label: 'Phase I', value: 'counselling closes 30 April 2026' },
          { label: 'VRUET 2026', value: 'test window 18–24 May' },
          { label: 'Scholarships', value: 'up to 100% on merit' },
        ]}
      />

      <HeroStrip items={university.heroStats} />

      <Section tight>
        <AccreditationStrip items={university.accreditations} />
      </Section>

      {/* ------------------------------------------------------------ welcome */}
      <Section id="about" tone="paper">
        <Split className="reveal">
          <div>
            <SectionHead
              eyebrow="Welcome to Ved Reyan"
              title="One university for the whole arc of healthcare"
              lead="Most health-science campuses teach their disciplines in separate silos. Ved Reyan was designed the other way round. Our pharmacy, medicine, nursing and allied-health students share the same anatomy halls, the same simulation wards and the same clinical rounds — because that is how they will work once they graduate."
            />
            <p>
              Founded in 2011 as the Ved Reyan Institute of Pharmacy and granted university status in
              2016, we now run {programmeCount} programmes from D.Pharm to Ph.D. across four schools.
              What has not changed in that time is the ratio that matters most to a student: every
              laboratory session is capped at twenty learners, and every batch is attached to a named
              faculty mentor for the full duration of the degree.
            </p>
            <div className="mt-2">
              <TickList
                items={[
                  'A 120-acre residential campus on NH-44, 35 minutes from Chandigarh',
                  'Twelve instrumentation and formulation laboratories, including a CPCSEA-registered animal house',
                  'Clinical training inside our own 750-bed multi-speciality teaching hospital',
                  '1,450+ Scopus-indexed publications and 62 patent filings from resident faculty',
                ]}
              />
            </div>
            <div className="btn-row mt-3">
              <Link className="btn btn--navy" to="/about">
                About the university
              </Link>
              <MoreLink to="/admissions">See admission dates</MoreLink>
            </div>
          </div>
          <FigureStack
            images={[
              { src: '/assets/img/campus-block.jpg', alt: 'Students walking outside the Ved Reyan academic block' },
              { src: '/assets/img/lab-chemistry.jpg', alt: 'Researchers working in a pharmaceutical chemistry laboratory' },
              { src: '/assets/img/library-hall.jpg', alt: 'Reading galleries inside the Knowledge Resource Centre' },
            ]}
          />
        </Split>
      </Section>

      {/* ------------------------------------------------------------ schools */}
      <Section id="schools">
        <SectionHead
          eyebrow="Our schools"
          title="Four schools, one clinical ecosystem"
          lead="Each school owns its curriculum and its laboratories, and every one of them teaches inside the same hospital."
          action={
            <Link className="btn btn--ghost" to="/schools">
              Compare all schools
            </Link>
          }
        />
        <Grid cols={4}>
          {schools.map((school) => (
            <Card
              key={school.key}
              image={school.image}
              imageAlt={school.imageAlt}
              tag={school.flagship ? 'Flagship' : undefined}
              title={school.name}
              text={school.blurb}
              footer={<MoreLink to={school.slug}>Explore the school</MoreLink>}
            />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------- why us */}
      <Section tone="deep">
        <SectionHead
          center
          eyebrow="Why students choose us"
          title="Six things you will not find on most health-science campuses"
        />
        <Grid cols={3}>
          {whyUs.map((item) => (
            <div className="reveal" key={item.title}>
              <FeatureCard icon={item.icon} title={item.title} text={item.text} />
            </div>
          ))}
        </Grid>
      </Section>

      {/* --------------------------------------------------------- programmes */}
      <Section id="programmes">
        <SectionHead
          eyebrow="Programmes"
          title="Find the qualification that fits where you are now"
          action={
            <Link className="btn btn--ghost" to="/programmes">
              All {programmeCount} programmes
            </Link>
          }
        />
        <Tabs tabs={entryTabs} label="Programmes by entry level" />
      </Section>

      {/* ------------------------------------------------------ infrastructure */}
      <Section id="infrastructure" tone="paper">
        <SectionHead
          eyebrow="Infrastructure"
          title="The campus is the teaching aid"
          lead="Twelve laboratories, a NABH-accredited hospital and a 68,000-volume resource centre — all within a ten-minute walk."
          action={
            <Link className="btn btn--ghost" to="/infrastructure">
              Tour the facilities
            </Link>
          }
        />
        <Grid cols={3}>
          {featuredFacilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </Grid>
      </Section>

      {/* ----------------------------------------------------------- research */}
      <Section id="research" tone="navy">
        <Split>
          <div>
            <SectionHead
              eyebrow="Research & innovation"
              title="Undergraduates are not spectators here"
              lead="Nine centres of excellence run on external funding from DST-SERB, ICMR, DBT and the Ministry of AYUSH. Every centre is required to carry at least four undergraduate project students each year — which is why 61 of last year’s graduating cohort left with a co-authored paper or a patent filing to their name."
            />
            <div className="mt-2">
              <Chips items={centres.map((centre) => ({ label: centre.name.replace(/^Centre for |^Ved Reyan /, '') }))} />
            </div>
            <div className="btn-row mt-3">
              <Link className="btn btn--light" to="/research">
                Research at Ved Reyan
              </Link>
              <MoreLink to="/research#patents">See patents &amp; IPR</MoreLink>
            </div>
          </div>
          <Stats items={researchHeadline} columns={2} />
        </Split>
      </Section>

      {/* --------------------------------------------------------- placements */}
      <Section id="placements">
        <SectionHead
          eyebrow="Placements 2025"
          title="Where the class of 2025 went"
          lead="480 offers from 210 recruiting organisations across formulation, quality, regulatory affairs, clinical research and hospital practice."
          action={
            <Link className="btn btn--ghost" to="/placements">
              Full placement report
            </Link>
          }
        />
        <div className="mb-3">
          <Stats items={placementHeadline} />
        </div>
        <div className="mb-3">
          <LogoWall items={recruiters.slice(0, 16)} />
        </div>
        <Slider label="Placement stories">
          {alumni.slice(0, 4).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </Slider>
      </Section>

      {/* ---------------------------------------------------- VC's message */}
      <Section id="vc" tone="paper">
        <div className="dean">
          <figure className="dean__photo">
            <img
              src="/assets/img/faculty-4.jpg"
              alt="Portrait of the Vice-Chancellor, Prof. (Dr.) Devendra Nath Sahni"
              width="560"
              height="560"
              loading="lazy"
            />
            <figcaption>
              <b>Prof. (Dr.) Devendra Nath Sahni</b>
              <small>Vice-Chancellor · M.Pharm, Ph.D. (BHU), FIC</small>
            </figcaption>
          </figure>
          <div>
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
              the drug store. Why a failed batch in the formulation lab gets written up honestly
              instead of quietly repeated.
            </p>
            <p>
              If you are choosing between universities, look past the rankings for a moment and ask a
              simpler question: in whose hands will the equipment actually be? Here, they will be
              yours.
            </p>
            <p className="dean__sign">Prof. (Dr.) Devendra Nath Sahni</p>
            <div className="btn-row mt-2">
              <Link className="btn btn--navy" to="/about#leadership">
                Leadership &amp; governance
              </Link>
              <MoreLink to="/about#vision">Vision &amp; mission</MoreLink>
            </div>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------------- news */}
      <Section id="news">
        <SectionHead
          eyebrow="Happenings"
          title="News & events"
          action={
            <Link className="btn btn--ghost" to="/campus-life#events">
              All events
            </Link>
          }
        />
        <Grid cols={3}>
          {news.slice(0, 6).map((item) => (
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

      {/* ---------------------------------------------------------- campus life */}
      <Section id="life" tone="paper">
        <Split variant="wideRight">
          <div>
            <SectionHead eyebrow="Campus life" title="Nine thousand people live here" />
            <p>
              Health-science degrees are long, and long degrees need somewhere decent to live them.
              Seven residence halls, an eight-lane pool, 34 student societies, a 900-seat auditorium
              and a food court that stays open until one in the morning during examination weeks.
            </p>
            <div className="mt-2">
              <TickList
                items={[
                  'Separate residence halls for men and women, all Wi-Fi enabled, with resident wardens',
                  '24×7 on-campus health centre plus free consultation at the teaching hospital',
                  '34 societies, from the Pharmacy Debate Circle to the National Service Scheme unit',
                  'Anti-ragging committee, internal complaints committee and a resident counselling team',
                ]}
              />
            </div>
            <div className="btn-row mt-3">
              <Link className="btn btn--navy" to="/campus-life">
                Life at Ved Reyan
              </Link>
            </div>
          </div>
          <FigureStack
            images={[
              { src: '/assets/img/classroom.jpg', alt: 'Students in a tiered lecture theatre' },
              { src: '/assets/img/library-study.jpg', alt: 'Student reading in the library' },
              { src: '/assets/img/desk-research.jpg', alt: 'Students working at a shared desk' },
            ]}
          />
        </Split>
      </Section>

      {/* ---------------------------------------------------------------- FAQ */}
      <Section id="faq" narrow>
        <SectionHead center eyebrow="Frequently asked" title="Questions applicants ask us most" />
        <Accordion items={admissionFaqs.slice(0, 6)} />
      </Section>

      <CtaBand
        title={`Applications for ${university.session} are open`}
        text="Phase I counselling closes on 30 April 2026. Register once and you are considered for every programme you are eligible for."
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
