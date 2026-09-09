/**
 * Render every route through react-dom/server and fail on any error.
 *
 * This is not server-side rendering for production — the site ships as a
 * client-rendered SPA. It is a smoke test: rendering each page in Node catches
 * the errors a bundler cannot (a missing property, a bad prop shape, a map over
 * something undefined) without needing a browser.
 *
 *   npm run smoke --workspace client
 */

import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'

const routes = [
  '/',
  '/about',
  '/schools',
  '/pharmaceutical-sciences',
  '/medical-sciences',
  '/nursing',
  '/allied-health',
  '/programmes',
  '/programmes?level=pg&school=pharmacy',
  '/admissions',
  '/infrastructure',
  '/research',
  '/placements',
  '/faculty',
  '/campus-life',
  '/contact',
  '/this-route-does-not-exist',
]

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const failures = []
const warnings = []

// Capture the console noise React emits for bad keys, invalid props and so on.
const realError = console.error
const realWarn = console.warn
console.error = (...args) => warnings.push(['error', args.join(' ')])
console.warn = (...args) => warnings.push(['warn', args.join(' ')])

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const { StaticRouter } = await vite.ssrLoadModule('react-router-dom/server')

  for (const route of routes) {
    try {
      const html = renderToString(
        React.createElement(StaticRouter, { location: route }, React.createElement(App)),
      )
      if (html.length < 500) {
        failures.push(`${route} rendered only ${html.length} bytes — probably an empty page`)
      } else {
        realError.call(console, `  ok   ${route.padEnd(38)} ${html.length.toLocaleString()} bytes`)
      }
    } catch (error) {
      failures.push(`${route} threw: ${error.message}`)
    }
  }
} finally {
  console.error = realError
  console.warn = realWarn
  await vite.close()
}

// React's "useLayoutEffect does nothing on the server" notice is expected here
// and only applies to this Node-side smoke test, not to the real browser build.
const realWarnings = warnings.filter(([, text]) => !/useLayoutEffect does nothing on the server/.test(text))

if (realWarnings.length) {
  console.log('\nReact warnings:')
  for (const [level, text] of realWarnings) console.log(`  [${level}] ${text.slice(0, 400)}`)
}

if (failures.length) {
  console.log('\nFailures:')
  for (const failure of failures) console.log(`  ${failure}`)
  process.exit(1)
}

console.log(`\nAll ${routes.length} routes rendered cleanly.`)
