/**
 * Barrel export for the shared content layer.
 *
 * Both the React client (`import { programmes } from '@shared/content'`) and the
 * Express API (`import { programmes } from '../../shared/content/index.js'`)
 * read from here, so a content change lands in both at once.
 */

export * from './university.js'
export * from './navigation.js'
export * from './schools.js'
export * from './programmes.js'
export * from './facilities.js'
export * from './people.js'
export * from './placements.js'
export * from './research.js'
export * from './happenings.js'
export * from './admissions.js'
