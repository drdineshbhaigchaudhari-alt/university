/**
 * Append-only JSON Lines storage for form submissions.
 *
 * This is a deliberately minimal store so the site runs with no database.
 * Each submission is appended as one JSON object per line, which makes the
 * files trivially greppable and safe to append to concurrently on a single
 * host. Swap this module for a real database (Postgres, Mongo) when you need
 * querying, retention policy or multi-instance deployment — the route handlers
 * only use `append` and `readAll`, so the surface to reimplement is small.
 */

import { appendFile, mkdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

const DATA_DIR = path.resolve(process.env.DATA_DIR || 'server/data')

async function ensureDir() {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true })
}

function fileFor(collection) {
  // Guard against path traversal in a collection name.
  const safe = collection.replace(/[^a-z0-9_-]/gi, '')
  if (!safe) throw new Error('Invalid collection name')
  return path.join(DATA_DIR, `${safe}.jsonl`)
}

/**
 * Append a record and return it, stamped with an id and a receipt time.
 * @param {string} collection e.g. 'enquiries'
 * @param {object} record
 */
export async function append(collection, record) {
  await ensureDir()
  const stored = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...record,
  }
  await appendFile(fileFor(collection), `${JSON.stringify(stored)}\n`, 'utf8')
  return stored
}

/**
 * Read every record in a collection, newest first. Malformed lines are skipped
 * rather than throwing, so one bad write cannot take the endpoint down.
 */
export async function readAll(collection) {
  const file = fileFor(collection)
  if (!existsSync(file)) return []
  const text = await readFile(file, 'utf8')
  const records = []
  for (const line of text.split('\n')) {
    if (!line.trim()) continue
    try {
      records.push(JSON.parse(line))
    } catch {
      // Skip a corrupt line; the rest of the file is still usable.
    }
  }
  return records.reverse()
}

export async function count(collection) {
  return (await readAll(collection)).length
}

/**
 * Human-readable reference for an applicant, e.g. VRU-2026-0007.
 * Sequential within the collection, which is fine for a single-host store.
 */
export async function nextReference(collection, prefix = 'VRU') {
  const year = new Date().getFullYear()
  const n = (await count(collection)) + 1
  return `${prefix}-${year}-${String(n).padStart(4, '0')}`
}

export const dataDir = DATA_DIR
