import { Link } from 'react-router-dom'
import {
  researchHeadline,
  centres,
  fundingAgencies,
  fundedProjects,
  patents,
  publicationRecord,
  ugResearch,
  faculty,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow, Stats } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { FeatureCard, PersonCard } from '../components/cards.jsx'
import {
  Chips,
  CtaBand,
  DataTable,
  DividerNote,
  Figure,
  Grid,
  Section,
  SectionHead,
  Split,
  StripCta,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'centres', label: 'Centres of excellence' },
  { id: 'funding', label: 'Funded projects' },
  { id: 'patents', label: 'Patents & IPR' },
  { id: 'undergraduate', label: 'For undergraduates' },
  { id: 'incubation', label: 'Incubation' },
  { id: 'phd', label: 'Doctoral study' },
]

export default function Research() {
  useDocumentMeta(
    'Research & Innovation | Ved Reyan University',
    'Nine centres of excellence, 1,450+ Scopus-indexed publications, 62 patent filings and ₹18.6 crore of external research funding at Ved Reyan University.',
  )

  return (
    <>
      <Hero
        image="/assets/img/lab-research.jpg"
        imageAlt="A researcher working at an analytical bench"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Research' }]}
        title="Research & innovation"
        lead="Nine funded centres, ₹18.6 crore of live external grants, and a rule that every centre must carry at least four undergraduate project students a year to keep its internal allocation."
        actions={
          <>
            <a className="btn btn--lg" href="#undergraduate">
              How students join a project
            </a>
            <a className="btn btn--outline-light btn--lg" href="#centres">
              See the nine centres
            </a>
          </>
        }
      />

      <HeroStrip items={researchHeadline} />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- overview */}
      <Section id="overview">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Overview"
              title="Research that a student can actually get into"
              lead="A great deal of institutional research is inaccessible to the people paying tuition. Postgraduates get bench space; undergraduates get a poster session. We decided to make that structurally impossible."
            />
            <p>
              Each of the nine centres of excellence receives an internal allocation on top of its
              external grants. That allocation is conditional: the centre must carry at least four
              undergraduate project students in the year, named on the outputs, with a contingency
              stipend. A centre that does not is funded at a lower rate the following year. It is a
              blunt mechanism and it works — sixty-one of the 2025 graduating cohort left with a
              co-authored publication or a patent filing.
            </p>
            <p>
              The second commitment is about honesty. Supervisors must retain raw data and instrument
              logs for five years after a degree is awarded, and negative results are expected to be
              written up. A dissertation that reports four failed formulation attempts and explains
              why is a better dissertation than one which quietly reports only the batch that worked.
            </p>

            <h3>Output over four years</h3>
            <DataTable
              caption="Publications, book chapters and patent filings by year, all four schools."
              columns={[
                { key: 'year', label: 'Year', render: (row) => <b>{row.year}</b> },
                { key: 'papers', label: 'Peer-reviewed papers', numeric: true },
                { key: 'chapters', label: 'Book chapters', numeric: true },
                { key: 'patents', label: 'Patents filed', numeric: true },
              ]}
              rows={publicationRecord.map((row) => ({ ...row, key: row.year }))}
              footnote="Counts are of Scopus-indexed output with at least one Ved Reyan-affiliated author. Conference abstracts are excluded."
            />
          </div>

          <div>
            <div className="mb-3">
              <Figure
                src="/assets/img/lab-microscopy.jpg"
                alt="A researcher using a microscope"
                caption="Undergraduate project students work at the bench alongside doctoral candidates."
              />
            </div>
            <FeatureCard title="Funding agencies">
              <div className="mt-2">
                <Chips items={fundingAgencies} variant="teal" />
              </div>
            </FeatureCard>
          </div>
        </Split>
      </Section>

      {/* ------------------------------------------------------------ centres */}
      <Section id="centres" tone="paper">
        <SectionHead
          eyebrow="Centres of excellence"
          title={`${centres.length} centres, each with a named lead`}
          lead="Every centre below has an external funding source, a resident academic lead and a standing obligation to undergraduate project students."
        />
        <Grid cols={3}>
          {centres.map((centre) => (
            <FeatureCard key={centre.id} icon="gear" title={centre.name}>
              <p>{centre.text}</p>
              <p className="person__meta mb-0">
                Lead: {centre.lead} · Funding: {centre.funding}
              </p>
            </FeatureCard>
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ funding */}
      <Section id="funding">
        <SectionHead
          eyebrow="Funded projects"
          title="Live externally funded work"
          lead="Sanctioned amounts as per the award letter. Projects are listed while active; completed projects move to the annual report."
        />
        <DataTable
          caption="Externally funded research projects currently running."
          columns={[
            { key: 'title', label: 'Project', render: (row) => <b>{row.title}</b> },
            { key: 'pi', label: 'Principal investigator' },
            { key: 'agency', label: 'Agency' },
            { key: 'amount', label: 'Sanctioned', numeric: true },
            { key: 'duration', label: 'Period', numeric: true },
          ]}
          rows={fundedProjects.map((row) => ({ ...row, key: row.title }))}
        />

        <div className="mt-4">
          <MetricRow
            columns={4}
            items={[
              { value: '₹18.6 Cr', label: 'Live external funding, all schools' },
              { value: '₹11.4 Cr', label: 'Held by Pharmaceutical Sciences' },
              { value: '9', label: 'Funding agencies currently supporting work' },
              { value: '31', label: 'Active institutional MoUs' },
            ]}
          />
        </div>
      </Section>

      {/* ------------------------------------------------------------ patents */}
      <Section id="patents" tone="deep">
        <SectionHead
          eyebrow="Patents & IPR"
          title="62 filed, 18 granted"
          lead="A representative selection. The university’s IPR cell handles drafting support, filing costs and the revenue-sharing agreement with inventors, which is published rather than negotiated case by case."
        />
        <Grid cols={2}>
          {patents.map((patent) => (
            <FeatureCard key={patent.title} title={patent.title}>
              <p className="mb-0">
                <span className="chip">{patent.status}</span> <span className="chip">{patent.year}</span>
              </p>
            </FeatureCard>
          ))}
        </Grid>

        <div className="mt-4">
          <Grid cols={2}>
            <FeatureCard
              icon="shield"
              title="Inventor revenue share"
              text="Published, not negotiated: inventors receive 60% of net licensing revenue, the centre 25% and the university 15%. Student co-inventors are treated identically to faculty."
            />
            <FeatureCard
              icon="check"
              title="Filing support"
              text="The IPR cell covers drafting, attorney and filing costs for any disclosure that passes internal novelty review, so a student is never asked to fund a filing personally."
            />
          </Grid>
        </div>
      </Section>

      {/* ------------------------------------------------------ undergraduates */}
      <Section id="undergraduate">
        <Split top>
          <div>
            <SectionHead eyebrow="For undergraduates" title={ugResearch.title} lead={ugResearch.text} />
            <h3>What you get</h3>
            <TickList
              items={[
                'Bench space in the centre, and instrument booking rights with your supervisor’s countersignature',
                'A monthly contingency stipend for consumables and travel',
                'Named co-authorship on any publication or patent your work contributes to',
                'A written supervisor reference — useful for NIPER, GPAT interviews and overseas applications',
              ]}
            />

            <h3 className="mt-3">What is expected of you</h3>
            <TickList
              items={[
                'A one-page proposal and a short interview with the centre coordinator',
                'Roughly eight hours a week during term, agreed in advance and not at the expense of classes',
                'A maintained laboratory notebook that can be audited',
                'An honest write-up, including the attempts that did not work',
              ]}
            />
          </div>
          <div>
            <Stats
              items={[
                { value: 70, label: 'Undergraduate project places filled each year' },
                { value: 61, label: '2025 graduates with a paper or patent' },
                { value: 4, label: 'Places reserved in every centre' },
                { value: 5, label: 'Semester at which applications open' },
              ]}
              columns={2}
            />
            <div className="mt-3">
              <DividerNote>
                <p>
                  <strong>A caution worth stating.</strong> A research place is not a shortcut to a
                  better grade, and it will not compensate for weak coursework. Students whose
                  attendance or internal assessment slips are asked to step back for a semester —
                  their place is held, not lost.
                </p>
              </DividerNote>
            </div>
          </div>
        </Split>
      </Section>

      {/* ---------------------------------------------------------- incubation */}
      <Section id="incubation" tone="paper">
        <Split variant="wideRight">
          <div>
            <SectionHead
              eyebrow="Incubation & start-ups"
              title="Ved Reyan BioNest"
              lead="Eleven active ventures in diagnostics, nutraceuticals, medical devices and health services, with bench space, mentoring and seed-grant access for student founders."
            />
            <TickList
              items={[
                'Bench and desk space on campus, with access to the Central Instrumentation Facility',
                'Mentoring panel drawn from alumni founders and two CDMO partners',
                'Seed-grant applications supported through BIRAC and state innovation schemes',
                'Regulatory and IPR advice from the Centre for Regulatory Science and the IPR cell',
                'A final-year student founder may substitute the incubation project for the standard dissertation',
              ]}
            />
          </div>
          <Figure
            src="/assets/img/desk-research.jpg"
            alt="Students working together at a shared desk"
            caption="Two of the eleven BioNest ventures were founded by undergraduates still on programme."
          />
        </Split>
      </Section>

      {/* ---------------------------------------------------------------- PhD */}
      <Section id="phd">
        <SectionHead
          eyebrow="Doctoral study"
          title="Ph.D. programmes across all four schools"
          lead="Admission through VRUET-RET and an interview, with exemption for UGC-NET, CSIR-NET, GATE and GPAT-JRF holders. Coursework runs in the first two semesters, and a public pre-submission seminar is required before the thesis is submitted."
          action={
            <Link className="btn btn--ghost" to="/programmes?level=doctoral">
              See doctoral programmes
            </Link>
          }
        />
        <Grid cols={4}>
          {faculty.slice(0, 4).map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </Grid>

        <div className="mt-4">
          <StripCta
            title="Looking for a supervisor?"
            text="Tell us your area and we will put you in touch with the centre lead directly — before you apply, not after."
            actions={
              <>
                <Link className="btn" to="/contact">
                  Contact a centre
                </Link>
                <Link className="btn btn--ghost" to="/faculty">
                  Browse faculty
                </Link>
              </>
            }
          />
        </div>
      </Section>

      <CtaBand
        title="Research collaboration & sponsored work"
        text="Analytical services, method development, bioequivalence support and sponsored projects. Write to the Dean of Research with what you need."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact">
              Contact the research office
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/infrastructure#cif">
              See the instrumentation
            </Link>
          </>
        }
      />
    </>
  )
}
