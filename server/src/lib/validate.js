/**
 * A small hand-rolled validator.
 *
 * Deliberately dependency-free: the shapes here are simple enough that pulling
 * in a schema library would add more surface than it removes. Every rule
 * returns a field-keyed error map so the React forms can render messages
 * inline.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Indian mobile numbers, optionally with +91 / 0 prefix and separators.
const PHONE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/

export const rules = {
  required: (label) => (v) =>
    v == null || String(v).trim() === '' ? `${label} is required.` : null,

  maxLength: (label, n) => (v) =>
    v != null && String(v).trim().length > n ? `${label} must be ${n} characters or fewer.` : null,

  minLength: (label, n) => (v) =>
    v != null && String(v).trim().length > 0 && String(v).trim().length < n
      ? `${label} must be at least ${n} characters.`
      : null,

  email: (label) => (v) =>
    v && !EMAIL.test(String(v).trim()) ? `${label} must be a valid email address.` : null,

  phone: (label) => (v) =>
    v && !PHONE.test(String(v).replace(/[\s-]/g, ''))
      ? `${label} must be a valid 10-digit Indian mobile number.`
      : null,

  oneOf: (label, allowed) => (v) =>
    v && !allowed.includes(String(v)) ? `${label} must be one of: ${allowed.join(', ')}.` : null,

  accepted: (label) => (v) =>
    v === true || v === 'true' || v === 'on' ? null : `${label} must be accepted.`,
}

/**
 * Run a { field: [rule, ...] } schema over a request body.
 * @returns {{ valid: boolean, errors: Record<string,string>, value: Record<string,unknown> }}
 */
export function validate(body, schema) {
  const errors = {}
  const value = {}

  for (const [field, fieldRules] of Object.entries(schema)) {
    const raw = body?.[field]
    for (const rule of fieldRules) {
      const message = rule(raw)
      if (message) {
        errors[field] = message
        break
      }
    }
    if (typeof raw === 'string') value[field] = raw.trim()
    else if (raw !== undefined) value[field] = raw
  }

  return { valid: Object.keys(errors).length === 0, errors, value }
}

/**
 * Strip control characters and cap length before anything is stored.
 * Filtering by code point avoids embedding control characters in this source.
 */
export function sanitiseText(input, max = 4000) {
  if (input == null) return ''
  let cleaned = ''
  for (const ch of String(input)) {
    const code = ch.codePointAt(0)
    const isAllowedWhitespace = code === 9 || code === 10 || code === 13
    const isControl = code < 32 || (code >= 127 && code <= 159)
    if (isAllowedWhitespace || !isControl) cleaned += ch
  }
  return cleaned.trim().slice(0, max)
}
