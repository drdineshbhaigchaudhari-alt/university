import { useCallback, useState } from 'react'

/**
 * POST helper for the form components.
 *
 * Returns { submit, state } where state is one of idle | sending | ok | error,
 * plus the server's message and any per-field validation errors so the form can
 * render them inline.
 */
export default function useApi(endpoint) {
  const [state, setState] = useState('idle')
  const [message, setMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [result, setResult] = useState(null)

  const submit = useCallback(
    async (payload) => {
      setState('sending')
      setMessage('')
      setFieldErrors({})
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          setState('error')
          setFieldErrors(data.errors || {})
          setMessage(data.error || 'We could not send that. Please try again.')
          return { ok: false, data }
        }

        setState('ok')
        setResult(data)
        setMessage(data.message || 'Thank you — that has been recorded.')
        return { ok: true, data }
      } catch {
        setState('error')
        setMessage(
          'We could not reach the server. Check your connection, or call the admission helpline on 1800 419 7788.',
        )
        return { ok: false }
      }
    },
    [endpoint],
  )

  const reset = useCallback(() => {
    setState('idle')
    setMessage('')
    setFieldErrors({})
    setResult(null)
  }, [])

  return { submit, reset, state, message, fieldErrors, result }
}
