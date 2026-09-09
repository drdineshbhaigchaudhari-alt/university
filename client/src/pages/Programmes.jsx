import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  programmes,
  programmeCount,
  levelLabels,
  schools,
  formatINR,
  formatFeeShort,
  hostelFees,
  otherCharges,
  university,
} from '@shared/content'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import Hero from '../components/Hero.jsx'
import { HeroStrip } from '../components/Stats.jsx'
import SubNav from '../components/SubNav.jsx'
import { ProgrammeCard } from '../components/cards.jsx'
import {
  CtaBand,
  DataTable,
  DividerNote,
  Grid,
  Section,
  SectionHead,
  StripCta,
} from '../components/ui.jsx'

const sections = [
  { id: 'browse', label: 'Browse all' },
  { id: 'fees', label: 'Fee structure' },
  { id: 'other-charges', label: 'Other charges' },
  { id: 'hostel', label: 'Hostel charges' },
]

const levelOrder = ['ug', 'pg', 'doctoral', 'diploma']

export default function Programmes() {
  useDocumentMeta(
    'All Programmes & Fee Structure | Ved Reyan University',
    `Browse all ${programmeCount} undergraduate, postgraduate, doctoral, diploma and certificate programmes at Ved Reyan University with duration, seats, eligibility and tuition fees.`,
  )

  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const level = params.get('level') || 'all'
  const school = params.get('school') || 'all'

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return programmes.filter((programme) => {
      if (level !== 'all' && programme.level !== level) return false
      if (school !== 'all' && programme.school !== school) return false
      if (!needle) return true
      return [programme.name, programme.summary, programme.eligibility, ...(programme.careers || [])]
        .join(' ')
        .toLowerCase()
        .includes(needle)
    })
  }, [level, school, query])

  function setFilter(key, value) {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const feeRows = levelOrder.flatMap((lvl) =>
    programmes
      .filter((programme) => programme.level === lvl)
      .map((programme) => ({ ...programme, key: programme.id })),
  )

  return (
    <>
      <Hero
        image="/assets/img/classroom.jpg"
        imageAlt="Students in a tiered lecture theatre"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Programmes' }]}
        title={`${programmeCount} programmes across four schools`}
        lead="Every programme below lists its real duration, its sanctioned intake, what you need to get in and what it costs. Filter by level or school, or search for the work you want to do."
        actions={
          <>
            <Link className="btn btn--lg" to="/admissions#apply">
              Apply for 2026–27
            </Link>
            <a className="btn btn--outline-light btn--lg" href="#fees">
              Jump to the fee table
            </a>
          </>
        }
      />

      <HeroStrip
        items={[
          { value: programmes.filter((p) => p.level === 'ug').length, label: 'Undergraduate' },
          { value: programmes.filter((p) => p.level === 'pg').length, label: 'Postgraduate' },
          { value: programmes.filter((p) => p.level === 'doctoral').length, label: 'Doctoral' },
          { value: programmes.filter((p) => p.level === 'diploma').length, label: 'Diploma & certificate' },
        ]}
      />

      <SubNav sections={sections} />

      {/* -------------------------------------------------------------- browse */}
      <Section id="browse">
        <SectionHead eyebrow="Browse" title="Find your programme" />

        <div className="form-card mb-3">
          <div className="form__row">
            <div className="field">
              <label htmlFor="prog-level">Level of study</label>
              <select id="prog-level" value={level} onChange={(event) => setFilter('level', event.target.value)}>
                <option value="all">All levels</option>
                {levelOrder.map((key) => (
                  <option key={key} value={key}>
                    {levelLabels[key]}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="prog-school">School</label>
              <select id="prog-school" value={school} onChange={(event) => setFilter('school', event.target.value)}>
                <option value="all">All schools</option>
                {schools.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.short}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="prog-search">Search by name, subject or career</label>
            <input
              id="prog-search"
              type="search"
              placeholder="e.g. regulatory, nanocarrier, dialysis, epidemiology"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="field__hint">
              Showing <strong>{results.length}</strong> of {programmeCount} programmes.
            </span>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="divider-note">
            <p>
              Nothing matches that combination. Try clearing the search box, or{' '}
              <Link to="/contact">ask us directly</Link> — if we do not run what you are looking for
              we will say so and, where we can, point you somewhere that does.
            </p>
          </div>
        ) : (
          <Grid cols={3}>
            {results.map((programme) => (
              <ProgrammeCard
                key={programme.id}
                programme={programme}
                levelLabel={levelLabels[programme.level]}
                showEligibility
              />
            ))}
          </Grid>
        )}
      </Section>

      {/* ----------------------------------------------------------------- fees */}
      <Section id="fees" tone="paper">
        <SectionHead
          eyebrow="Fee structure"
          title={`Tuition for the ${university.session} session`}
          lead="One published schedule, charged in two instalments per year. Tuition does not change mid-programme except by the annual revision notified before admission."
        />
        <DataTable
          caption="Annual tuition by programme. Short courses are billed as a single total fee."
          columns={[
            { key: 'name', label: 'Programme', render: (row) => <b>{row.name}</b> },
            { key: 'level', label: 'Level', render: (row) => levelLabels[row.level] },
            {
              key: 'school',
              label: 'School',
              render: (row) => schools.find((s) => s.key === row.school)?.short || '—',
            },
            { key: 'duration', label: 'Duration' },
            {
              key: 'seats',
              label: 'Seats',
              numeric: true,
              render: (row) => (typeof row.seats === 'number' ? row.seats : '—'),
            },
            {
              key: 'fee',
              label: 'Tuition',
              numeric: true,
              render: (row) => formatFeeShort(row),
            },
          ]}
          rows={feeRows}
          footnote="MBBS, MD, MS and DM/M.Ch. tuition is fixed by the state fee-regulatory committee and is notified separately each year; the university has no discretion over it."
        />

        <div className="mt-4">
          <DividerNote>
            <p>
              <strong>What tuition covers.</strong> Teaching, laboratory access, clinical postings,
              library membership, the learning-management system and internal assessment. It does not
              cover examination fees, hostel and mess charges, the one-time admission and registration
              charges, or the refundable security deposit — all of which are listed below.
            </p>
          </DividerNote>
        </div>
      </Section>

      {/* ------------------------------------------------------- other charges */}
      <Section id="other-charges">
        <SectionHead eyebrow="Other charges" title="Everything else you will be billed for" />
        <Grid cols={2}>
          <div>
            <h3>University charges</h3>
            <DataTable
              columns={[
                { key: 'item', label: 'Item' },
                { key: 'amount', label: 'Amount', numeric: true, render: (row) => formatINR(row.amount) },
              ]}
              rows={otherCharges.map((row) => ({ ...row, key: row.item }))}
            />
          </div>
          <div id="hostel">
            <h3>Hostel charges</h3>
            <DataTable
              columns={[
                { key: 'type', label: 'Room type' },
                { key: 'perYear', label: 'Per year', numeric: true, render: (row) => formatINR(row.perYear) },
              ]}
              rows={hostelFees.map((row) => ({ ...row, key: row.type }))}
              footnote="Mess charges are billed separately and are optional for day scholars. A refundable hostel security deposit of ₹10,000 applies."
            />
          </div>
        </Grid>

        <div className="mt-4">
          <StripCta
            title="Scholarships can reduce tuition by 25–100%"
            text="Six schemes run in parallel and you are considered automatically at admission — there is no separate application."
            actions={
              <>
                <Link className="btn" to="/admissions#scholarships">
                  See scholarships
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Ask about fees
                </Link>
              </>
            }
          />
        </div>
      </Section>

      <CtaBand
        title="Register once, be considered for everything"
        text="One application covers every programme you are eligible for. No fee is payable at the registration stage."
        actions={
          <>
            <Link className="btn btn--light btn--lg" to="/admissions#apply">
              Start your application
            </Link>
            <Link className="btn btn--outline-light btn--lg" to="/admissions#eligibility">
              Check eligibility
            </Link>
          </>
        }
      />
    </>
  )
}
