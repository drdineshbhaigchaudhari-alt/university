/**
 * Ved Reyan University — API server.
 *
 * In development this runs alongside the Vite dev server, which proxies /api
 * here (see client/vite.config.js). In production it also serves the built
 * React bundle from client/dist and falls back to index.html so client-side
 * routes resolve on a hard refresh.
 *
 *   npm run dev     both, with reload
 *   npm run build   build the client
 *   npm start       serve API + built client on PORT
 */

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import contentRoutes from './routes/content.js'
import submissionRoutes from './routes/submissions.js'
import { university } from '../../shared/content/index.js'
import { dataDir } from './lib/store.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')
const CLIENT_DIST = path.join(ROOT, 'client', 'dist')

const PORT = Number(process.env.PORT) || 4000
const isProd = process.env.NODE_ENV === 'production'

const app = express()
app.set('trust proxy', 1)
app.disable('x-powered-by')

/* ---------------------------------------------------------------- security */

app.use(
  helmet({
    // The built page pulls its typefaces from Google Fonts; everything else is
    // served from this origin. Tighten or extend this list if you add a CDN.
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'self'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: isProd ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
)

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:4173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      // Same-origin requests and server-to-server calls arrive without an Origin.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
      callback(new Error(`Origin ${origin} is not allowed by CORS.`))
    },
    methods: ['GET', 'POST'],
    maxAge: 600,
  }),
)

/* ------------------------------------------------------------- middleware */

app.use(compression())
app.use(express.json({ limit: '64kb' }))
app.use(express.urlencoded({ extended: false, limit: '64kb' }))
app.use(morgan(isProd ? 'combined' : 'dev'))

/* ----------------------------------------------------------------- routes */

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'ved-reyan-api',
    university: university.shortName,
    env: process.env.NODE_ENV || 'development',
    dataDir,
    uptimeSeconds: Math.round(process.uptime()),
    time: new Date().toISOString(),
  })
})

app.use('/api/content', contentRoutes)
app.use('/api', submissionRoutes)

// Keep unmatched API routes as JSON — never let them fall into the SPA handler.
app.use('/api', (req, res) => {
  res.status(404).json({ error: `No API route for ${req.method} ${req.originalUrl}` })
})

/* ------------------------------------------------- built client (production) */

if (existsSync(CLIENT_DIST)) {
  // Hashed assets are immutable; index.html must always be revalidated.
  app.use(
    express.static(CLIENT_DIST, {
      index: false,
      setHeaders(res, filePath) {
        if (filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache')
        else if (/\.[0-9a-f]{8,}\./.test(filePath)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        }
      },
    }),
  )
  app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_DIST, 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res
      .status(200)
      .type('text/plain')
      .send(
        'Ved Reyan University API is running.\n\n' +
          'The React client has not been built yet.\n' +
          '  Development:  npm run dev      (client on http://localhost:5173)\n' +
          '  Production:   npm run build && npm start\n\n' +
          'Health check:   /api/health\n',
      )
  })
}

/* ------------------------------------------------------------ error handler */

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || (/CORS/.test(err.message) ? 403 : 500)
  if (status >= 500) console.error('[error]', err)
  res.status(status).json({
    error: status >= 500 ? 'Something went wrong on our side. Please try again.' : err.message,
  })
})

app.listen(PORT, () => {
  console.log(`Ved Reyan API listening on http://localhost:${PORT}`)
  console.log(`  health      http://localhost:${PORT}/api/health`)
  console.log(`  programmes  http://localhost:${PORT}/api/content/programmes`)
  if (!existsSync(CLIENT_DIST)) console.log('  client      not built — run "npm run dev" for the React app')
})

export default app
