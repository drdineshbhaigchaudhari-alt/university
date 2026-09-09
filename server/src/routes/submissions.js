/**
 * Write endpoints: general enquiries, admission applications and campus-visit
 * bookings. Each is validated, sanitised, rate-limited and appended to the
 * JSON Lines store.
 *
 * No email is sent from here. Wire your transactional provider into
 * `notify()` below — it is called after a successful write and its failure is
 * logged rather than surfaced, so a mail outage never loses a submission.
 */

import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { append, nextReference, readAll } from '../lib/store.js'
import { rules, sanitiseText, validate } from '../lib/validate.js'
import { programmes } from '../../../shared/content/index.js'

const router = Router()

const programmeIds = programmes.map((p) => p.id)

/** Six writes per fifteen minutes per IP is generous for a human, hostile to a bot. */
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 6,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    error: 'Too many submissions from this address. Please try again in a few minutes.',
  },
})

/**
 * Placeholder notification hook. Replace the body with a call to your mail or
 * CRM provider; keep the try/catch so a provider outage cannot fail the write.
 */
async function notify(kind, record) {
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[notify:${kind}]`, record.reference || record.id, record.email)
    }
    // await mailer.send({ to: university.email.admissions, ... })
  } catch (err) {
    console.error(`[notify:${kind}] failed`, err)
  }
}

/* ------------------------------------------------------------------ enquiry */

const enquirySchema = {
  name: [rules.required('Name'), rules.minLength('Name', 2), rules.maxLength('Name', 120)],
  email: [rules.required('Email'), rules.email('Email'), rules.maxLength('Email', 160)],
  phone: [rules.required('Mobile number'), rules.phone('Mobile number')],
  programme: [rules.maxLength('Programme', 120)],
  city: [rules.maxLength('City', 80)],
  message: [rules.maxLength('Message', 2000)],
  consent: [rules.accepted('Consent')],
}

router.post('/enquiries', writeLimiter, async (req, res, next) => {
  try {
    const { valid, errors, value } = validate(req.body, enquirySchema)
    if (!valid) return res.status(422).json({ error: 'Please correct the highlighted fields.', errors })

    const record = await append('enquiries', {
      kind: 'enquiry',
      name: sanitiseText(value.name, 120),
      email: sanitiseText(value.email, 160).toLowerCase(),
      phone: sanitiseText(value.phone, 20),
      programme: sanitiseText(value.programme, 120),
      city: sanitiseText(value.city, 80),
      message: sanitiseText(value.message, 2000),
      consent: true,
      source: sanitiseText(req.body?.source, 80) || 'website',
      userAgent: sanitiseText(req.get('user-agent'), 300),
    })

    await notify('enquiry', record)

    res.status(201).json({
      ok: true,
      id: record.id,
      message:
        'Thank you — your enquiry has been recorded. An adviser will contact you within one working day.',
    })
  } catch (err) {
    next(err)
  }
})

/* -------------------------------------------------------------- application */

const applicationSchema = {
  name: [rules.required('Full name'), rules.minLength('Full name', 2), rules.maxLength('Full name', 120)],
  email: [rules.required('Email'), rules.email('Email'), rules.maxLength('Email', 160)],
  phone: [rules.required('Mobile number'), rules.phone('Mobile number')],
  programmeId: [rules.required('Programme'), rules.oneOf('Programme', programmeIds)],
  qualification: [rules.required('Qualifying examination'), rules.maxLength('Qualifying examination', 160)],
  percentage: [rules.required('Aggregate percentage'), rules.maxLength('Aggregate percentage', 10)],
  state: [rules.required('State'), rules.maxLength('State', 80)],
  category: [rules.oneOf('Category', ['general', 'obc', 'sc', 'st', 'ews', 'pwd'])],
  entranceScore: [rules.maxLength('Entrance score', 40)],
  message: [rules.maxLength('Message', 2000)],
  consent: [rules.accepted('Declaration')],
}

router.post('/applications', writeLimiter, async (req, res, next) => {
  try {
    const { valid, errors, value } = validate(req.body, applicationSchema)
    if (!valid) return res.status(422).json({ error: 'Please correct the highlighted fields.', errors })

    const percentage = Number(String(value.percentage).replace('%', ''))
    if (!Number.isFinite(percentage) || percentage < 0 || percentage > 100) {
      return res.status(422).json({
        error: 'Please correct the highlighted fields.',
        errors: { percentage: 'Aggregate percentage must be a number between 0 and 100.' },
      })
    }

    const programme = programmes.find((p) => p.id === value.programmeId)
    const reference = await nextReference('applications')

    const record = await append('applications', {
      kind: 'application',
      reference,
      session: '2026-27',
      name: sanitiseText(value.name, 120),
      email: sanitiseText(value.email, 160).toLowerCase(),
      phone: sanitiseText(value.phone, 20),
      programmeId: programme.id,
      programmeName: programme.name,
      school: programme.school,
      qualification: sanitiseText(value.qualification, 160),
      percentage,
      state: sanitiseText(value.state, 80),
      category: sanitiseText(value.category, 20) || 'general',
      entranceScore: sanitiseText(value.entranceScore, 40),
      message: sanitiseText(value.message, 2000),
      consent: true,
      status: 'received',
      userAgent: sanitiseText(req.get('user-agent'), 300),
    })

    await notify('application', record)

    res.status(201).json({
      ok: true,
      reference,
      programme: programme.name,
      message:
        `Application received. Your reference is ${reference} — quote it in any correspondence. ` +
        'You will receive a document-verification call within three working days.',
    })
  } catch (err) {
    next(err)
  }
})

/* ------------------------------------------------------------- campus visit */

const visitSchema = {
  name: [rules.required('Name'), rules.maxLength('Name', 120)],
  email: [rules.required('Email'), rules.email('Email')],
  phone: [rules.required('Mobile number'), rules.phone('Mobile number')],
  preferredDate: [rules.required('Preferred date'), rules.maxLength('Preferred date', 20)],
  visitors: [rules.maxLength('Number of visitors', 3)],
  interest: [rules.maxLength('Area of interest', 120)],
  consent: [rules.accepted('Consent')],
}

router.post('/visits', writeLimiter, async (req, res, next) => {
  try {
    const { valid, errors, value } = validate(req.body, visitSchema)
    if (!valid) return res.status(422).json({ error: 'Please correct the highlighted fields.', errors })

    const record = await append('visits', {
      kind: 'visit',
      name: sanitiseText(value.name, 120),
      email: sanitiseText(value.email, 160).toLowerCase(),
      phone: sanitiseText(value.phone, 20),
      preferredDate: sanitiseText(value.preferredDate, 20),
      visitors: Number(value.visitors) || 1,
      interest: sanitiseText(value.interest, 120),
      consent: true,
    })

    await notify('visit', record)

    res.status(201).json({
      ok: true,
      id: record.id,
      message:
        'Visit request received. Campus tours run every Saturday at 10:30 — we will confirm your slot by email.',
    })
  } catch (err) {
    next(err)
  }
})

/* -------------------------------------------------------------------- admin */

/**
 * Read back submissions. Requires ADMIN_TOKEN to be set in the environment and
 * sent as `x-admin-token`. If the variable is unset the route stays closed —
 * failing shut rather than open.
 */
function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_TOKEN
  if (!expected) return res.status(503).json({ error: 'Admin access is not configured.' })
  if (req.get('x-admin-token') !== expected) return res.status(401).json({ error: 'Unauthorised.' })
  next()
}

router.get('/admin/:collection', requireAdmin, async (req, res, next) => {
  try {
    const allowed = ['enquiries', 'applications', 'visits']
    if (!allowed.includes(req.params.collection)) {
      return res.status(404).json({ error: 'No such collection.' })
    }
    const records = await readAll(req.params.collection)
    res.set('Cache-Control', 'no-store')
    res.json({ count: records.length, records })
  } catch (err) {
    next(err)
  }
})

export default router
