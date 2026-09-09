# Ved Reyan University of Medical, Pharmaceutical &amp; Health Sciences

Website for a health-sciences university: a React single-page app served by a
Node/Express API, structured after the school pages of LPU and Chandigarh
University (hero → statistics strip → sticky in-page nav → overview,
placements, rankings, programmes, laboratories, industry tie-ups, research,
dean's message, faculty, events, guest lectures, alumni, FAQs).

Sixteen routes, forty-nine programmes, a filterable catalogue and fee table, a
faculty directory, and three working forms (enquiry, application, campus visit)
that validate and persist server-side.

---

## Quick start

```bash
npm install          # installs client and server workspaces
npm run dev          # API on :4000, React app on :5173
```

Open **http://localhost:5173**. The Vite dev server proxies `/api` to Express,
so both halves work from one URL.

For a production run:

```bash
npm run build        # builds the React client into client/dist
npm start            # Express serves the API and the built client on :4000
```

Requires Node 18.18 or newer (built and tested on Node 24).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Client and API together, both with reload |
| `npm run dev:client` / `npm run dev:server` | Either half on its own |
| `npm run build` | Production build of the React client |
| `npm start` | Serve API + built client from Express |
| `npm run preview` | Preview the built client through Vite |
| `npm run smoke` | Render all 17 routes in Node and fail on any error |

`npm run smoke` is the fastest way to know you have not broken a page. It runs
every route through `react-dom/server` and reports byte counts plus any React
warning — no browser needed.

---

## How it is put together

```
package.json            npm workspaces + dev orchestration
shared/content/         ← the single source of truth for all content
client/                 React 18 + Vite + React Router SPA
server/                 Express API
```

### The shared content layer

Everything factual — programmes, fees, faculty, laboratories, placement
figures, news, FAQs, navigation — lives in `shared/content/*.js` as plain ES
modules. Both halves import it:

```js
// client (via the @shared alias in vite.config.js)
import { programmes, formatFeeShort } from '@shared/content'

// server
import { programmes } from '../../shared/content/index.js'
```

This is the part to change when you update the site. Editing
`shared/content/programmes.js` updates the programme cards, the tabs on four
different pages, the filter, the fee table, the form dropdowns and the
`/api/content/programmes` endpoint at once. Counts such as "49 programmes" are
derived from the array length, so they never go stale.

| File | Holds |
| --- | --- |
| `university.js` | Identity, address, contacts, key dates, approvals register, milestones |
| `navigation.js` | Primary nav tree, top bar, footer columns |
| `schools.js` | The four schools, their facts and highlights |
| `programmes.js` | All 49 programmes + fee formatting helpers |
| `facilities.js` | 12 laboratories with equipment lists, hospital, campus |
| `people.js` | Leadership, faculty profiles, faculty register, alumni |
| `placements.js` | Placement statistics, recruiters, career paths |
| `research.js` | Centres of excellence, funded projects, patents |
| `happenings.js` | News, guest lectures, societies, events, student support |
| `admissions.js` | Application steps, entrance test, eligibility, scholarships, FAQs |

### Client

```
client/src/
  App.jsx               route table
  components/
    Layout.jsx          header + footer + scroll management + back-to-top
    Header.jsx          topbar, brandbar, dropdown nav, mobile drawer
    Hero.jsx  SubNav.jsx  Tabs.jsx  Accordion.jsx  Slider.jsx  Counter.jsx
    Stats.jsx           Stats / MetricRow / HeroStrip
    ui.jsx              Section, SectionHead, Grid, Split, DataTable, LogoWall, CtaBand …
    cards.jsx           Card, FacilityCard, ProgrammeCard, PersonCard, StoryCard, FeatureCard
    forms.jsx           EnquiryForm, ApplicationForm, VisitForm
    Icon.jsx            inline SVG icon set
  hooks/
    useApi.js           form POST + field-error handling
    useReveal.js        scroll-in animation
    useScrollSpy.js     sticky sub-nav highlighting
    useDocumentMeta.js  per-route title and meta description
  pages/                16 route components
  styles/global.css     the whole design system
```

There is no CSS framework and no component library. `global.css` is organised
into sixteen numbered sections with design tokens at the top — change
`--navy`, `--teal` and `--saffron` and the whole site re-skins.

Accessibility is built in rather than retrofitted: a skip link, ARIA tab and
disclosure patterns with keyboard support, visible focus rings, labelled form
fields with inline errors, `aria-current` on the active nav item, and
`prefers-reduced-motion` honoured by the counters and reveal animations.

### Server

```
server/src/
  index.js              app, security middleware, static client, SPA fallback
  routes/content.js     read-only content endpoints
  routes/submissions.js enquiry / application / visit + admin read-back
  lib/validate.js       dependency-free validation rules
  lib/store.js          append-only JSON Lines persistence
```

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Liveness, environment, data directory |
| GET | `/api/content/university` | Identity, approvals, rankings |
| GET | `/api/content/schools` · `/schools/:key` | Schools, with their programmes |
| GET | `/api/content/programmes?level=&school=&entry=&q=` | Filterable catalogue |
| GET | `/api/content/programmes/:id` | One programme |
| GET | `/api/content/facilities` · `/people` · `/news` · `/research` · `/placements` · `/admissions` | Content sections |
| POST | `/api/enquiries` | General enquiry |
| POST | `/api/applications` | Admission application, returns a reference |
| POST | `/api/visits` | Campus-visit request |
| GET | `/api/admin/:collection` | Read submissions back (see below) |

Write endpoints are rate-limited to six per fifteen minutes per IP, validated
field by field, and sanitised before storage. Validation failures return `422`
with a `{ errors: { field: message } }` map, which the React forms render
inline.

Submissions are appended to `server/data/*.jsonl` — one JSON object per line.
That keeps the site running with no database. `lib/store.js` exposes only
`append` and `readAll`, so swapping in Postgres or Mongo means reimplementing
two functions.

`GET /api/admin/:collection` reads submissions back. It requires `ADMIN_TOKEN`
in the environment and the same value in an `x-admin-token` header. **If the
variable is unset the route returns 503** — it fails shut, not open.

### Configuration

Copy `.env.example` to `.env`:

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `4000` | API port |
| `NODE_ENV` | `development` | `production` enables combined logging and HSTS upgrades |
| `CORS_ORIGIN` | `http://localhost:5173,http://localhost:4173` | Comma-separated allowed browser origins |
| `DATA_DIR` | `./server/data` | Where submissions are written |
| `ADMIN_TOKEN` | *(unset)* | Enables `/api/admin/*` when set |

---

## Before you go live

The site currently carries a visible disclaimer strip in the footer saying the
content is illustrative. **That strip is deliberate, and it should be the last
thing you remove** — after, not before, you have worked through this list.

1. **Replace every institutional claim.** Statistics, rankings,
   accreditations, approval validity dates, placement figures, recruiter
   names, faculty profiles and student testimonials in `shared/content/` are
   plausible placeholders, not facts about any real institution. Publishing
   them unchanged would misstate your accreditation status and misrepresent
   named companies and individuals.
2. **Check the address, phone numbers and email addresses** in
   `shared/content/university.js`. The domain `vedreyan.edu.in` is invented.
3. **Replace the photographs.** See `CREDITS.md`. The current images are
   licensed stock, usable but generic; your own campus will always be better.
4. **Replace the crest.** `client/public/assets/img/logo.svg`,
   `logo-light.svg` and `favicon.svg` are a placeholder mark.
5. **Wire up notifications.** `notify()` in
   `server/src/routes/submissions.js` is a stub. Point it at your mail or CRM
   provider. The `try/catch` is there so a provider outage never loses a
   submission — keep it.
6. **Decide on real persistence.** JSON Lines is fine for a single host. If
   you run more than one instance, or need retention rules for personal data,
   replace `lib/store.js`.
7. **Set `ADMIN_TOKEN`** to a long random value, or leave it unset and read
   the `.jsonl` files directly.
8. **Set `CORS_ORIGIN`** to your real domain.
9. **Add a privacy policy.** The forms collect names, phone numbers, email
   addresses and academic records. The footer links to a privacy policy that
   does not exist yet, and the consent checkbox refers to it.
10. **Add a map** to the Contact page if you want one. It is omitted so the
    site loads no third-party trackers by default; adding an iframe or a
    Leaflet/Mapbox component means extending the CSP `connectSrc` and adding
    `frameSrc` in `server/src/index.js`.
11. **Remove the footer disclaimer strip** — the commented block at the bottom
    of `client/src/components/Footer.jsx`.

### Two things worth keeping

The content deliberately states some awkward things plainly: that medical
seats are filled entirely through NEET and the university has no discretion
over them; that the placement denominator excludes students who opted out, and
who those were; that rankings are reported as bands. Prospective students and
their families are lied to constantly by education marketing, and a site that
declines to do it stands out. Adjust the facts, but consider keeping the habit.

The methodology note on the Placements page and the approval-scope table on the
About page exist for the same reason.

---

## Deployment notes

`npm run build && npm start` produces a single Node process that serves both
the API and the built client, which suits a container, a VM or a
platform-as-a-service dyno. Express serves hashed assets with a one-year
immutable cache and `index.html` with `no-cache`, and falls back to
`index.html` for unknown paths so client-side routes survive a hard refresh.

If you would rather host the client on a CDN, deploy `client/dist` as static
files and run the server for `/api` only — set `CORS_ORIGIN` to the CDN origin
and point the client at the API with `VITE_API_TARGET` at build time.

Security middleware in place: Helmet with a content-security policy allowing
only Google Fonts as an external origin, an origin allowlist for CORS, a 64 kB
JSON body limit, compression, request logging, and `x-powered-by` disabled.
