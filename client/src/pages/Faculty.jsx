import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { faculty, facultyRegister, leadership, schools } from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { FeatureCard, PersonCard } from '../components/cards.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Grid,
  Section,
  SectionHead,
} from '../components/ui.jsx'

const sections = [
  { id: 'leadership', label: 'Leadership' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'register', label: 'Full register' },
  { id: 'mentoring', label: 'Mentoring' },
]

const schoolLabel = (key) => schools.find((school) => school.key === key)?.short || key

export default function Faculty() {
  useDocumentMeta(
    'Faculty Directory | Ved Reyan University',
    'Professors, associate professors and assistant professors across the four schools of Ved Reyan University, with qualifications and research areas.',
  )

  const [school, setSchool] = useState('all')
  const [query, setQuery] = useState('')

  const register = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return facultyRegister.filter((person) => {
      if (school !== 'all' && person.school !== school) return false
      if (!needle) return true
      return [person.name, person.department, person.area, person.qualification, person.designation]
        .join(' ')
        .toLowerCase()
        .includes(needle)
    })
  }, [school, query])

  const profiles = useMemo(
    () => (school === 'all' ? faculty : faculty.filter((person) => person.school === school)),
    [school],
  )

  return (
    <>
      <Hero
        image="/assets/img/seminar-hall.jpg"
        imageAlt="Faculty and delegates at a seminar session"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Academics' }, { label: 'Faculty' }]}
        title="Faculty directory"
        lead="612 full-time faculty across four schools. Everyone appears in the register below with their designation, qualification and research area; those who have supplied a photograph and a profile appear above it."
        actions={
          <>
            <a className="btn btn--lg" href="#register">
              Search the register
            </a>
            <Link className="btn btn--outline-light btn--lg" to="/research">
              Research areas
            </Link>
          </>
        }
      />

      <HeroStrip
        items={[
          { value: 612, label: 'Full-time faculty' },
          { value: 348, label: 'With a doctorate' },
          { value: 41, label: 'Ph.D. holders in pharmacy alone' },
          { value: 4, label: 'In the world top-2% list' },
        ]}
      />

      <SubNav sections={sections} />

      {/* --------------------------------------------------------- leadership */}
      <Section id="leadership">
        <SectionHead
          eyebrow="University leadership"
          title="Who is accountable for what"
          lead="Each office below carries a stated remit, so you know whom to write to."
        />
        <Grid cols={4}>
          {leadership.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </Grid>
      </Section>

      {/* ------------------------------------------------------------ filters */}
      <Section id="profiles" tone="paper">
        <SectionHead eyebrow="Faculty profiles" title="Filter by school or search by name" />

        <div className="form-card mb-3">
          <div className="form__row">
            <div className="field">
              <label htmlFor="fac-school">School</label>
              <select id="fac-school" value={school} onChange={(event) => setSchool(event.target.value)}>
                <option value="all">All schools</option>
                {schools.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.short}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="fac-search">Search the register</label>
              <input
                id="fac-search"
                type="search"
                placeholder="e.g. pharmacology, neonatology, Kulkarni"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="field__hint">
                {register.length} of {facultyRegister.length} register entries match.
              </span>
            </div>
          </div>
        </div>

        {profiles.length ? (
          <Grid cols={4}>
            {profiles.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </Grid>
        ) : (
          <div className="divider-note">
            <p>
              No published profiles for that school yet — the register below still lists every member
              of its faculty.
            </p>
          </div>
        )}

        {profiles.length ? (
          <div className="mt-4">
            <Grid cols={2}>
              {profiles
                .filter((person) => person.research)
                .slice(0, 4)
                .map((person) => (
                  <FeatureCard key={`${person.id}-research`} title={person.name}>
                    <p className="mb-0">{person.research}</p>
                  </FeatureCard>
                ))}
            </Grid>
          </div>
        ) : null}
      </Section>

      {/* ----------------------------------------------------------- register */}
      <Section id="register">
        <SectionHead
          eyebrow="Full register"
          title="Every member of faculty, photograph or not"
          lead="Publishing only the faculty who have a headshot makes a directory look tidier and tells a prospective student less. Everyone is listed."
        />
        {register.length ? (
          <DataTable
            caption="Faculty register — name, designation, school, qualification and area of work."
            columns={[
              { key: 'name', label: 'Name', render: (row) => <b>{row.name}</b> },
              { key: 'designation', label: 'Designation' },
              { key: 'school', label: 'School', render: (row) => schoolLabel(row.school) },
              { key: 'department', label: 'Department' },
              { key: 'qualification', label: 'Qualification' },
              { key: 'area', label: 'Area of work' },
            ]}
            rows={register.map((row) => ({ ...row, key: row.name }))}
            footnote="This register is a representative extract published for the website. The complete list of 612 faculty, with appointment dates, is available from the Registrar’s office and in the annual quality-assurance report."
          />
        ) : (
          <div className="divider-note">
            <p>Nothing matches that search. Try a department, a subject area or a surname.</p>
          </div>
        )}
      </Section>

      {/* ---------------------------------------------------------- mentoring */}
      <Section id="mentoring" tone="deep">
        <SectionHead
          center
          eyebrow="Mentoring"
          title="Every batch has a named mentor for the whole degree"
          lead="Not a rota, not a duty roster — the same person from admission to convocation."
        />
        <Grid cols={3}>
          <FeatureCard
            icon="users"
            title="One mentor, one batch"
            text="A mentor carries a single batch through the full programme, so by the third year they know who is struggling before the marks show it."
          />
          <FeatureCard
            icon="clock"
            title="Scheduled, not incidental"
            text="Mentor meetings are timetabled once a fortnight. Attendance is recorded for the mentor, not the student."
          />
          <FeatureCard
            icon="shield"
            title="Separate from assessment"
            text="A mentor’s notes are confidential and are not shared with examiners. Pastoral concerns go to the counselling team, not into an academic file."
          />
        </Grid>

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>Faculty vacancies.</strong> Teaching and research positions are advertised with
              the pay band, the teaching load and the reporting line stated. We do not advertise
              positions that are already filled, and we do not ask candidates to pay any fee at any
              stage of recruitment.
            </p>
          </DividerNote>
        </div>
      </Section>

      <CtaBand
        title="Looking for a supervisor or a collaborator?"
        text="Tell us the area and we will connect you with the relevant centre lead directly."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/contact">
              Get in touch
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/research#centres">
              Browse research centres
            </Link>
          </>
        }
      />
    </>
  )
}
