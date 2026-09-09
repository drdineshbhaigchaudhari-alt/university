/**
 * Read-only content endpoints.
 *
 * The React client bundles the shared content directly, so these routes are not
 * on the critical path for rendering. They exist so that the same content can
 * be consumed by anything else — a mobile app, a chatbot, a partner site, a
 * CMS migration script — without duplicating the data.
 */

import { Router } from 'express'
import {
  university,
  rankings,
  schools,
  findSchool,
  programmes,
  programmeCount,
  findProgramme,
  levelLabels,
  entryLabels,
  laboratories,
  hospital,
  faculty,
  facultyRegister,
  leadership,
  alumni,
  news,
  guestLectures,
  centres,
  fundedProjects,
  patents,
  researchHeadline,
  placementHeadline,
  placementHistory,
  placementBySchool,
  recruiters,
  careerPaths,
  scholarships,
  entranceTest,
  eligibilityTable,
  applicationSteps,
} from '../../../shared/content/index.js'

const router = Router()

/** Cache read-only content at the edge for five minutes. */
function cacheable(req, res, next) {
  res.set('Cache-Control', 'public, max-age=300')
  next()
}
router.use(cacheable)

router.get('/university', (req, res) => {
  res.json({ university, rankings })
})

router.get('/schools', (req, res) => {
  res.json({ count: schools.length, schools })
})

router.get('/schools/:key', (req, res) => {
  const school = findSchool(req.params.key)
  if (!school) return res.status(404).json({ error: 'No such school.' })
  res.json({
    school,
    programmes: programmes.filter((p) => p.school === school.key),
  })
})

/**
 * GET /api/content/programmes?level=ug&school=pharmacy&entry=after-12&q=pharm
 * All filters are optional and combine with AND.
 */
router.get('/programmes', (req, res) => {
  const { level, school, entry, q } = req.query
  let results = programmes

  if (level && level !== 'all') results = results.filter((p) => p.level === level)
  if (school) results = results.filter((p) => p.school === school)
  if (entry) results = results.filter((p) => p.entry === entry)
  if (q) {
    const needle = String(q).toLowerCase()
    results = results.filter((p) =>
      [p.name, p.summary, p.eligibility, ...(p.careers || [])]
        .join(' ')
        .toLowerCase()
        .includes(needle),
    )
  }

  res.json({
    total: programmeCount,
    count: results.length,
    filters: { level: level || 'all', school: school || null, entry: entry || null, q: q || null },
    levelLabels,
    entryLabels,
    programmes: results,
  })
})

router.get('/programmes/:id', (req, res) => {
  const programme = findProgramme(req.params.id)
  if (!programme) return res.status(404).json({ error: 'No such programme.' })
  res.json({ programme })
})

router.get('/facilities', (req, res) => {
  res.json({ laboratories, hospital })
})

router.get('/people', (req, res) => {
  res.json({ leadership, faculty, facultyRegister, alumni })
})

router.get('/news', (req, res) => {
  const limit = Math.min(Number(req.query.limit) || news.length, news.length)
  const school = req.query.school
  const items = school ? news.filter((n) => n.schools.includes(school)) : news
  res.json({ count: items.length, news: items.slice(0, limit), guestLectures })
})

router.get('/research', (req, res) => {
  res.json({ researchHeadline, centres, fundedProjects, patents })
})

router.get('/placements', (req, res) => {
  res.json({ placementHeadline, placementHistory, placementBySchool, recruiters, careerPaths })
})

router.get('/admissions', (req, res) => {
  res.json({ applicationSteps, entranceTest, eligibilityTable, scholarships })
})

export default router
