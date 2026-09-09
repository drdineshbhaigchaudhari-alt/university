/**
 * Primary navigation, top bar and footer link structure.
 *
 * `to` values are React Router paths. A `#hash` suffix is scrolled to by the
 * ScrollManager in App.jsx. `match` lists the route prefixes that should light
 * up this top-level item.
 */

export const topbarLinks = [
  { label: 'Apply Online', to: '/admissions#apply' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Placements', to: '/placements' },
  { label: 'Research', to: '/research' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Contact', to: '/contact' },
]

export const primaryNav = [
  { label: 'Home', to: '/', match: ['/'] },
  {
    label: 'About',
    to: '/about',
    match: ['/about'],
    children: [
      { label: 'About the University', to: '/about' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: 'Vice-Chancellor’s Message', to: '/about#vc' },
      { label: 'Leadership & Governance', to: '/about#leadership' },
      { label: 'Accreditation & Approvals', to: '/about#accreditation' },
      { label: 'Academic Regulations', to: '/about#regulations' },
    ],
  },
  {
    label: 'Schools',
    to: '/schools',
    match: ['/schools', '/pharmaceutical-sciences', '/medical-sciences', '/nursing', '/allied-health'],
    children: [
      { label: 'School of Pharmaceutical Sciences', to: '/pharmaceutical-sciences' },
      { label: 'School of Medical Sciences', to: '/medical-sciences' },
      { label: 'School of Nursing', to: '/nursing' },
      { label: 'School of Allied Health Sciences', to: '/allied-health' },
      { label: 'Physiotherapy & Rehabilitation', to: '/allied-health#physiotherapy' },
      { label: 'Public Health', to: '/allied-health#public-health' },
      { label: 'All Schools', to: '/schools' },
    ],
  },
  {
    label: 'Programmes',
    to: '/programmes',
    match: ['/programmes'],
    children: [
      { label: 'All Programmes', to: '/programmes' },
      { label: 'Undergraduate', to: '/programmes?level=ug' },
      { label: 'Postgraduate', to: '/programmes?level=pg' },
      { label: 'Doctoral (Ph.D.)', to: '/programmes?level=doctoral' },
      { label: 'Diploma & Certificate', to: '/programmes?level=diploma' },
      { label: 'Fee Structure', to: '/programmes#fees' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    match: ['/admissions'],
    children: [
      { label: 'Admission Overview', to: '/admissions' },
      { label: 'VRUET Entrance Test', to: '/admissions#vruet' },
      { label: 'Eligibility Criteria', to: '/admissions#eligibility' },
      { label: 'Application Process', to: '/admissions#process' },
      { label: 'Scholarships', to: '/admissions#scholarships' },
      { label: 'International Admissions', to: '/admissions#international' },
      { label: 'Apply Online', to: '/admissions#apply' },
    ],
  },
  {
    label: 'Academics',
    to: '/infrastructure',
    match: ['/infrastructure', '/faculty'],
    children: [
      { label: 'Infrastructure & Laboratories', to: '/infrastructure' },
      { label: 'Knowledge Resource Centre', to: '/infrastructure#library' },
      { label: 'Teaching Hospital', to: '/infrastructure#hospital' },
      { label: 'Digital Campus', to: '/infrastructure#digital' },
      { label: 'Faculty Directory', to: '/faculty' },
    ],
  },
  {
    label: 'Research',
    to: '/research',
    match: ['/research'],
    children: [
      { label: 'Research & Innovation', to: '/research' },
      { label: 'Centres of Excellence', to: '/research#centres' },
      { label: 'Funded Projects', to: '/research#funding' },
      { label: 'Patents & IPR', to: '/research#patents' },
      { label: 'Incubation & Start-ups', to: '/research#incubation' },
    ],
  },
  { label: 'Placements', to: '/placements', match: ['/placements'] },
  { label: 'Campus Life', to: '/campus-life', match: ['/campus-life'] },
  { label: 'Contact', to: '/contact', match: ['/contact'] },
]

export const footerColumns = [
  {
    heading: 'Admissions',
    links: [
      { label: 'Apply online', to: '/admissions#apply' },
      { label: 'VRUET 2026', to: '/admissions#vruet' },
      { label: 'Eligibility criteria', to: '/admissions#eligibility' },
      { label: 'Scholarships', to: '/admissions#scholarships' },
      { label: 'Fee structure', to: '/programmes#fees' },
      { label: 'International students', to: '/admissions#international' },
    ],
  },
  {
    heading: 'Academics',
    links: [
      { label: 'Pharmaceutical Sciences', to: '/pharmaceutical-sciences' },
      { label: 'Medical Sciences', to: '/medical-sciences' },
      { label: 'Nursing', to: '/nursing' },
      { label: 'Allied Health Sciences', to: '/allied-health' },
      { label: 'All programmes', to: '/programmes' },
      { label: 'Faculty directory', to: '/faculty' },
      { label: 'Laboratories', to: '/infrastructure' },
    ],
  },
  {
    heading: 'Discover',
    links: [
      { label: 'About the university', to: '/about' },
      { label: 'Research & innovation', to: '/research' },
      { label: 'Placements', to: '/placements' },
      { label: 'Campus life', to: '/campus-life' },
      { label: 'Teaching hospital', to: '/infrastructure#hospital' },
      { label: 'Library', to: '/infrastructure#library' },
      { label: 'News & events', to: '/campus-life#events' },
    ],
  },
  {
    heading: 'Statutory',
    links: [
      { label: 'Accreditation & approvals', to: '/about#accreditation' },
      { label: 'Academic regulations', to: '/about#regulations' },
      { label: 'Grievance redressal', to: '/contact#grievance' },
      { label: 'Anti-ragging committee', to: '/contact#grievance' },
      { label: 'Internal complaints committee', to: '/contact#grievance' },
      { label: 'RTI & disclosures', to: '/contact#grievance' },
      { label: 'Campus map & directions', to: '/contact#visit' },
    ],
  },
]
