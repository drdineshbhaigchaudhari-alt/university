import { Link } from 'react-router-dom'
import {
  university,
  applicationSteps,
  entranceTest,
  eligibilityTable,
  scholarships,
  scholarshipNote,
  internationalAdmissions,
  admissionFaqs,
  programmeCount,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip, MetricRow } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import Accordion from '../components/Accordion.jsx'
import { FeatureCard } from '../components/cards.jsx'
import { ApplicationForm, EnquiryForm } from '../components/forms.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Grid,
  Section,
  SectionHead,
  Split,
  Steps,
  TickList,
} from '../components/ui.jsx'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'How to apply' },
  { id: 'vruet', label: 'VRUET 2026' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'international', label: 'International' },
  { id: 'apply', label: 'Apply online' },
  { id: 'faqs', label: 'FAQs' },
]

export default function Admissions() {
  useDocumentMeta(
    'Admissions 2026-27 | Ved Reyan University',
    'Admission process, VRUET entrance test, eligibility criteria, scholarships, fees and international admissions for the 2026-27 session at Ved Reyan University.',
  )

  return (
    <>
      <Hero
        image="/assets/img/graduation.jpg"
        imageAlt="Graduands celebrating at convocation"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Admissions' }]}
        kicker={`Applications open — ${university.session}`}
        title="Admissions 2026–27"
        lead="One registration, considered for every programme you are eligible for. No application fee, no agents, and a published merit list with ranks and scores."
        actions={
          <>
            <a className="btn btn--lg" href="#apply">
              Apply online now
            </a>
            <a className="btn btn--outline-light btn--lg" href="#eligibility">
              Check your eligibility
            </a>
          </>
        }
        notes={university.keyDates.slice(0, 3).map((date) => ({ label: date.label, value: date.value }))}
      />

      <HeroStrip
        items={[
          { value: programmeCount, label: 'Programmes to choose from' },
          { value: 34, label: 'VRUET test cities' },
          { value: 6, label: 'Scholarship schemes' },
          { value: 68, label: 'Countries in the student body' },
        ]}
      />

      <SubNav sections={sections} />

      {/* ----------------------------------------------------------- overview */}
      <Section id="overview">
        <Split top>
          <div className="prose">
            <SectionHead
              eyebrow="Overview"
              title="How admission works here, in one page"
              lead="Two things are worth knowing before you start. First, you register once and are automatically considered for every programme you qualify for — you do not submit separate applications. Second, medical seats are not ours to give."
            />
            <p>
              For pharmacy, nursing and allied-health programmes, admission is decided on either your
              VRUET score or your qualifying-examination marks, and we use whichever places you
              higher in the merit list. You can sit VRUET and still be considered on marks; there is
              no penalty for trying both.
            </p>
            <p>
              For MBBS, MD, MS and DM/M.Ch., admission runs entirely through NEET and the state
              counselling authority. The university has no discretion over those seats, does not
              operate a management quota for them, and cannot accelerate or influence counselling.
              Anyone who tells you otherwise — including anyone claiming to represent us — is not
              acting for this university, and we would like to know about it.
            </p>

            <h3>Key dates</h3>
            <DataTable
              columns={[
                { key: 'label', label: 'Milestone', render: (row) => <b>{row.label}</b> },
                { key: 'value', label: 'Date' },
              ]}
              rows={university.keyDates.map((date) => ({ ...date, key: date.label }))}
            />

            <div className="mt-3">
              <DividerNote>
                <p>
                  <strong>What we will never ask you for.</strong> A payment outside the notified fee
                  schedule. Your original certificates as security. A commission to an agent. If any
                  of these is requested, report it to the Registrar at{' '}
                  <a href={`mailto:${university.email.registrar}`}>{university.email.registrar}</a>.
                </p>
              </DividerNote>
            </div>
          </div>

          <div>
            <div className="form-card">
              <h3>Quick enquiry</h3>
              <p className="muted">
                <small>
                  Not ready to apply? Ask a question and an adviser will call you back within one
                  working day.
                </small>
              </p>
              <EnquiryForm compact source="admissions-page" />
            </div>

            <div className="mt-3">
              <MetricRow
                columns={1}
                items={[
                  { value: 'No fee', label: 'To register and be considered' },
                  { value: '72 hours', label: 'A seat is held once offered' },
                  { value: '7 working days', label: 'To return documents on withdrawal' },
                ]}
              />
            </div>
          </div>
        </Split>
      </Section>

      {/* ------------------------------------------------------------ process */}
      <Section id="process" tone="paper">
        <SectionHead
          eyebrow="How to apply"
          title="Six steps, and none of them cost anything"
          lead="The whole sequence, from registration to reporting on campus."
        />
        <Steps items={applicationSteps} />
      </Section>

      {/* -------------------------------------------------------------- VRUET */}
      <Section id="vruet">
        <SectionHead
          eyebrow="Entrance test"
          title={`${entranceTest.name} — ${entranceTest.fullName}`}
          lead={`${entranceTest.mode}. ${entranceTest.duration}. Test window ${entranceTest.window}.`}
        />

        <div className="mb-3">
          <MetricRow
            columns={4}
            items={[
              { value: entranceTest.window, label: 'Test window' },
              { value: entranceTest.duration, label: 'Duration' },
              { value: '34 cities', label: 'Test centres, plus remote proctoring' },
              { value: entranceTest.fee, label: 'Examination fee' },
            ]}
          />
        </div>

        <h3>Papers</h3>
        <Grid cols={3}>
          {entranceTest.papers.map((paper) => (
            <FeatureCard key={paper.code} title={paper.code}>
              <p>
                <strong>For:</strong> {paper.for}
              </p>
              <p>
                <strong>Pattern:</strong> {paper.pattern}
              </p>
              <p className="mb-0">
                <strong>Marking:</strong> {paper.marking}
              </p>
            </FeatureCard>
          ))}
        </Grid>

        <div className="mt-4">
          <Grid cols={2}>
            <FeatureCard title="Exemptions">
              <div className="mt-2">
                <TickList items={entranceTest.exemptions} />
              </div>
            </FeatureCard>
            <FeatureCard title="Where VRUET does not apply" text={entranceTest.notApplicable} />
          </Grid>
        </div>
      </Section>

      {/* -------------------------------------------------------- eligibility */}
      <Section id="eligibility" tone="paper">
        <SectionHead
          eyebrow="Eligibility"
          title="What you need, programme by programme"
          lead="Minimum aggregates below are the university’s requirement. Where a regulatory council sets a higher bar, the council’s requirement applies."
        />
        <DataTable
          caption="Eligibility criteria and admission route by programme."
          columns={[
            { key: 'programme', label: 'Programme', render: (row) => <b>{row.programme}</b> },
            { key: 'qualification', label: 'Qualifying examination' },
            { key: 'minimum', label: 'Minimum aggregate' },
            { key: 'route', label: 'Admission route' },
          ]}
          rows={eligibilityTable.map((row) => ({ ...row, key: row.programme }))}
          footnote="PCB = Physics, Chemistry, Biology. PCM = Physics, Chemistry, Mathematics. Reserved-category relaxations follow the applicable state and central norms."
        />
      </Section>

      {/* ------------------------------------------------------- scholarships */}
      <Section id="scholarships">
        <SectionHead
          eyebrow="Scholarships & financial aid"
          title="Six schemes, assessed automatically"
          lead={scholarshipNote}
        />
        <Grid cols={3}>
          {scholarships.map((scheme) => (
            <FeatureCard key={scheme.name} title={scheme.name}>
              <p>
                <strong>{scheme.award}</strong>
              </p>
              <p className="mb-0">{scheme.basis}</p>
            </FeatureCard>
          ))}
        </Grid>

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Continuation.</strong> A scholarship is granted for the full duration of the
              programme, subject to maintaining the CGPA stated in your award letter and to clean
              disciplinary standing. If you fall below the threshold in one semester the award is
              suspended, not cancelled — it is restored the semester you recover.
            </p>
          </DividerNote>
        </div>
      </Section>

      {/* ------------------------------------------------------ international */}
      <Section id="international" tone="deep">
        <Split top>
          <div>
            <SectionHead
              eyebrow="International admissions"
              title="Students from 68 countries study here"
              lead={internationalAdmissions.intro}
            />
            <TickList items={internationalAdmissions.points} />
          </div>
          <div>
            <FeatureCard icon="globe" title="One caution, stated plainly" text={internationalAdmissions.caution} />
            <div className="mt-3">
              <FeatureCard icon="mail" title="Talk to the international office">
                <p>
                  Write to{' '}
                  <a href={`mailto:${university.email.admissions}`}>{university.email.admissions}</a>{' '}
                  with your qualification, your country and the programme you want. You will get a
                  direct answer on eligibility before you are asked for anything else.
                </p>
              </FeatureCard>
            </div>
          </div>
        </Split>
      </Section>

      {/* -------------------------------------------------------------- apply */}
      <Section id="apply">
        <SectionHead
          center
          eyebrow="Apply online"
          title="Register for the 2026–27 session"
          lead="No fee is payable at this stage. This single registration considers you for every programme you are eligible for."
        />
        <div className="wrap-narrow" style={{ marginInline: 'auto', padding: 0 }}>
          <div className="form-card">
            <ApplicationForm />
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------------- FAQs */}
      <Section id="faqs" tone="paper" narrow>
        <SectionHead center eyebrow="Frequently asked" title="Admission questions, answered" />
        <Accordion items={admissionFaqs} />
      </Section>

      <CtaBand
        title="Questions the website did not answer?"
        text={`Call ${university.phone.tollFree} between 9 am and 6 pm, or send an enquiry and an adviser will call you back.`}
        actions={
          <>
            <a className="btn btn--light btn--lg" href={`tel:${university.phone.tollFree.replace(/\s/g, '')}`}>
              Call the helpline
            </a>
            <Link className="btn btn--outline-light btn--lg" to="/contact">
              Send an enquiry
            </Link>
          </>
        }
      />
    </>
  )
}
