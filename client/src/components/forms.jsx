/**
 * Enquiry, application and campus-visit forms.
 *
 * All three POST to the Express API and render the server's field-level
 * validation messages inline. Browser validation is kept as a first pass, but
 * the server is treated as the authority — a client-side check is a courtesy,
 * not a control.
 */

import { useState } from 'react'
import { programmes } from '@shared/content/programmes.js'
import { schools } from '@shared/content/schools.js'
import useApi from '../hooks/useApi.js'

/* ------------------------------------------------------------------- field */

export function Field({ label, name, error, hint, required, children }) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {required ? <span className="req">*</span> : null}
      </label>
      {children}
      {hint && !error ? <span className="field__hint">{hint}</span> : null}
      {error ? (
        <span className="field__hint" style={{ color: 'var(--crimson)', fontWeight: 600 }}>
          {error}
        </span>
      ) : null}
    </div>
  )
}

function Status({ state, message }) {
  if (state === 'idle') return null
  if (state === 'ok') {
    return (
      <div className="form-ok" role="status">
        {message}
      </div>
    )
  }
  if (state === 'error') {
    return (
      <div
        className="form-ok"
        role="alert"
        style={{ background: '#fdecea', borderColor: '#f3c6c2', color: '#8f1d18' }}
      >
        {message}
      </div>
    )
  }
  return null
}

/* ----------------------------------------------------------------- enquiry */

const emptyEnquiry = { name: '', email: '', phone: '', programme: '', city: '', message: '', consent: false }

export function EnquiryForm({ compact = false, source = 'website', defaultProgramme = '' }) {
  const [values, setValues] = useState({ ...emptyEnquiry, programme: defaultProgramme })
  const { submit, state, message, fieldErrors } = useApi('/api/enquiries')

  function update(event) {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const result = await submit({ ...values, source })
    if (result.ok) setValues({ ...emptyEnquiry, programme: defaultProgramme })
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <Field label="Full name" name="enq-name" required error={fieldErrors.name}>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            required
          />
        </Field>
        <Field label="Mobile number" name="enq-phone" required error={fieldErrors.phone}>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile"
            value={values.phone}
            onChange={update}
            required
          />
        </Field>
      </div>

      <div className="form__row">
        <Field label="Email address" name="enq-email" required error={fieldErrors.email}>
          <input
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            required
          />
        </Field>
        <Field label="Programme of interest" name="enq-programme" error={fieldErrors.programme}>
          <select id="enq-programme" name="programme" value={values.programme} onChange={update}>
            <option value="">Not sure yet</option>
            {schools.map((school) => (
              <optgroup key={school.key} label={school.name}>
                {programmes
                  .filter((programme) => programme.school === school.key)
                  .map((programme) => (
                    <option key={programme.id} value={programme.name}>
                      {programme.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      {!compact ? (
        <Field label="City" name="enq-city" error={fieldErrors.city}>
          <input
            id="enq-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            value={values.city}
            onChange={update}
          />
        </Field>
      ) : null}

      <Field
        label="Your question"
        name="enq-message"
        error={fieldErrors.message}
        hint="Ask us anything — eligibility, fees, hostels, laboratories, placements."
      >
        <textarea id="enq-message" name="message" value={values.message} onChange={update} rows={compact ? 3 : 5} />
      </Field>

      <label className="check">
        <input type="checkbox" name="consent" checked={values.consent} onChange={update} required />
        <span>
          I agree to be contacted by the university about my enquiry, and I have read the privacy
          policy.
          {fieldErrors.consent ? (
            <strong style={{ color: 'var(--crimson)', display: 'block' }}>{fieldErrors.consent}</strong>
          ) : null}
        </span>
      </label>

      <div className="btn-row">
        <button className="btn" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <span className="muted">
          <small>Or call 1800 419 7788, 9 am – 6 pm</small>
        </span>
      </div>

      <Status state={state} message={message} />
    </form>
  )
}

/* ------------------------------------------------------------- application */

const emptyApplication = {
  name: '',
  email: '',
  phone: '',
  programmeId: '',
  qualification: '',
  percentage: '',
  state: '',
  category: 'general',
  entranceScore: '',
  message: '',
  consent: false,
}

export function ApplicationForm() {
  const [values, setValues] = useState(emptyApplication)
  const { submit, state, message, fieldErrors, result } = useApi('/api/applications')

  function update(event) {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const outcome = await submit(values)
    if (outcome.ok) setValues(emptyApplication)
  }

  if (state === 'ok' && result?.reference) {
    return (
      <div>
        <div className="form-ok" role="status">
          {message}
        </div>
        <p className="mt-3">
          Keep your reference <strong>{result.reference}</strong> safe. You will need it for
          counselling, document verification and any correspondence with the admissions office.
        </p>
        <p className="muted">
          <small>
            Nothing further is required from you today. If you have not heard from us within three
            working days, call 1800 419 7788 and quote the reference above.
          </small>
        </p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <Field label="Full name (as on your marksheet)" name="app-name" required error={fieldErrors.name}>
          <input id="app-name" name="name" type="text" autoComplete="name" value={values.name} onChange={update} required />
        </Field>
        <Field label="Mobile number" name="app-phone" required error={fieldErrors.phone}>
          <input
            id="app-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={values.phone}
            onChange={update}
            required
          />
        </Field>
      </div>

      <div className="form__row">
        <Field label="Email address" name="app-email" required error={fieldErrors.email}>
          <input id="app-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} required />
        </Field>
        <Field label="Programme applied for" name="app-programme" required error={fieldErrors.programmeId}>
          <select id="app-programme" name="programmeId" value={values.programmeId} onChange={update} required>
            <option value="">Select a programme</option>
            {schools.map((school) => (
              <optgroup key={school.key} label={school.name}>
                {programmes
                  .filter((programme) => programme.school === school.key)
                  .map((programme) => (
                    <option key={programme.id} value={programme.id}>
                      {programme.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <div className="form__row">
        <Field
          label="Qualifying examination"
          name="app-qualification"
          required
          error={fieldErrors.qualification}
          hint="e.g. CBSE 10+2 2026, or B.Pharm 2025, Panjab University"
        >
          <input
            id="app-qualification"
            name="qualification"
            type="text"
            value={values.qualification}
            onChange={update}
            required
          />
        </Field>
        <Field label="Aggregate percentage" name="app-percentage" required error={fieldErrors.percentage}>
          <input
            id="app-percentage"
            name="percentage"
            type="text"
            inputMode="decimal"
            placeholder="e.g. 82.4"
            value={values.percentage}
            onChange={update}
            required
          />
        </Field>
      </div>

      <div className="form__row">
        <Field label="State of domicile" name="app-state" required error={fieldErrors.state}>
          <input
            id="app-state"
            name="state"
            type="text"
            autoComplete="address-level1"
            value={values.state}
            onChange={update}
            required
          />
        </Field>
        <Field label="Category" name="app-category" error={fieldErrors.category}>
          <select id="app-category" name="category" value={values.category} onChange={update}>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="ews">EWS</option>
            <option value="pwd">PwD</option>
          </select>
        </Field>
      </div>

      <Field
        label="Entrance examination score, if any"
        name="app-entrance"
        error={fieldErrors.entranceScore}
        hint="NEET, GPAT, VRUET or NIPER JEE — roll number and score, if you have already appeared."
      >
        <input id="app-entrance" name="entranceScore" type="text" value={values.entranceScore} onChange={update} />
      </Field>

      <Field label="Anything we should know" name="app-message" error={fieldErrors.message}>
        <textarea id="app-message" name="message" rows={4} value={values.message} onChange={update} />
      </Field>

      <label className="check">
        <input type="checkbox" name="consent" checked={values.consent} onChange={update} required />
        <span>
          I declare that the information given above is true, and I understand that admission is
          subject to verification of original documents and to the eligibility criteria of the
          relevant regulatory council.
          {fieldErrors.consent ? (
            <strong style={{ color: 'var(--crimson)', display: 'block' }}>{fieldErrors.consent}</strong>
          ) : null}
        </span>
      </label>

      <p className="form-note">
        This registration covers every programme you are eligible for. No fee is payable at this
        stage, and the university does not appoint commission-paid agents — if anyone offers you a
        seat outside this process, report it to the Registrar.
      </p>

      <div className="btn-row">
        <button className="btn btn--lg" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Submitting…' : 'Submit application'}
        </button>
      </div>

      <Status state={state} message={message} />
    </form>
  )
}

/* --------------------------------------------------------------- visit form */

const emptyVisit = { name: '', email: '', phone: '', preferredDate: '', visitors: '2', interest: '', consent: false }

export function VisitForm() {
  const [values, setValues] = useState(emptyVisit)
  const { submit, state, message, fieldErrors } = useApi('/api/visits')

  function update(event) {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const result = await submit(values)
    if (result.ok) setValues(emptyVisit)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <Field label="Name" name="vis-name" required error={fieldErrors.name}>
          <input id="vis-name" name="name" type="text" autoComplete="name" value={values.name} onChange={update} required />
        </Field>
        <Field label="Mobile number" name="vis-phone" required error={fieldErrors.phone}>
          <input id="vis-phone" name="phone" type="tel" inputMode="numeric" value={values.phone} onChange={update} required />
        </Field>
      </div>

      <div className="form__row">
        <Field label="Email address" name="vis-email" required error={fieldErrors.email}>
          <input id="vis-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} required />
        </Field>
        <Field
          label="Preferred Saturday"
          name="vis-date"
          required
          error={fieldErrors.preferredDate}
          hint="Tours run every Saturday at 10:30."
        >
          <input id="vis-date" name="preferredDate" type="date" value={values.preferredDate} onChange={update} required />
        </Field>
      </div>

      <div className="form__row">
        <Field label="Number of visitors" name="vis-visitors" error={fieldErrors.visitors}>
          <input
            id="vis-visitors"
            name="visitors"
            type="number"
            min="1"
            max="6"
            value={values.visitors}
            onChange={update}
          />
        </Field>
        <Field label="What would you like to see?" name="vis-interest" error={fieldErrors.interest}>
          <input
            id="vis-interest"
            name="interest"
            type="text"
            placeholder="e.g. formulation lab, hostels, hospital"
            value={values.interest}
            onChange={update}
          />
        </Field>
      </div>

      <label className="check">
        <input type="checkbox" name="consent" checked={values.consent} onChange={update} required />
        <span>
          I agree to be contacted to confirm this visit.
          {fieldErrors.consent ? (
            <strong style={{ color: 'var(--crimson)', display: 'block' }}>{fieldErrors.consent}</strong>
          ) : null}
        </span>
      </label>

      <div className="btn-row">
        <button className="btn btn--teal" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Request a visit'}
        </button>
      </div>

      <Status state={state} message={message} />
    </form>
  )
}
