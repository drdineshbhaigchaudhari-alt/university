/**
 * Institutional facts, contact details and headline figures.
 *
 * This is the single source of truth for both the React client and the Express
 * API. Replace the placeholder values with verified institutional data before
 * publishing — see README.md, "Before you go live".
 */

export const university = {
  name: 'Ved Reyan University of Medical, Pharmaceutical & Health Sciences',
  shortName: 'Ved Reyan University',
  tagline: 'Medical · Pharmaceutical · Health Sciences',
  established: 2011,
  universityStatusYear: 2016,
  session: '2026–27',

  address: {
    line1: 'S P Ring Road, Ognaj Circle',
    line2: 'Nr. Lions Karnavati Eye Hospital, Gota - Vadsar Highway, Lapkaman',
    line3: 'Ahmedabad - 380060, Gujarat, India',
  },
  phone: {
    tollFree: '1800 419 7788',
    landline: '0172 2541716',
    registrar: '0172 2541716, 2534867',
    uipsChairperson: '0172 2534101, 9876061147',
  },
  email: {
    hr: 'hr@vedruni.com',
    registrar: 'registrar@vedruni.com',
    regrPU: 'regr@vedruni.com',
    chairpersonUIPS: 'chairperson.uips@vedruni.com',
  },

  keyDates: [
    { label: 'Phase I counselling closes', value: '30 April 2026' },
    { label: 'VRUET 2026 test window', value: '18–24 May 2026' },
    { label: 'Phase II registration closes', value: '10 July 2026' },
    { label: 'Session commences', value: '3 August 2026' },
  ],

  heroStats: [
    { value: 14, suffix: '+', label: 'Years of health-science education' },
    { value: 9400, label: 'Students on campus' },
    { value: 750, label: 'Bed NABH teaching hospital' },
    { value: 210, suffix: '+', label: 'Recruiting organisations' },
  ],

  campusFacts: [
    { value: '120 acres', label: 'Residential campus on NH-44' },
    { value: '9,400', label: 'Students, of whom 2,180 are postgraduates' },
    { value: '612', label: 'Full-time faculty across four schools' },
    { value: '68', label: 'Countries represented in the student body' },
  ],

  accreditations: [
    'NAAC A++ Accredited',
    'UGC Recognised — Sec. 2(f)',
    'PCI Approved',
    'NMC Recognised',
    'INC Approved',
    'NABH Accredited Hospital',
    'ISO 9001:2015',
  ],

  /** Full approval register, rendered as a table on the About page. */
  approvals: [
    {
      body: 'University Grants Commission',
      status: 'Recognised, Section 2(f)',
      scope: 'Whole university, as a state private university',
      validTo: 'Continuing',
    },
    {
      body: 'NAAC',
      status: 'Accredited, grade A++ (CGPA 3.61)',
      scope: 'Institutional, cycle 2',
      validTo: '2029',
    },
    {
      body: 'Pharmacy Council of India',
      status: 'Approved',
      scope: 'D.Pharm, B.Pharm, B.Pharm (Lateral), Pharm.D, Pharm.D (PB), M.Pharm',
      validTo: 'Annual renewal',
    },
    {
      body: 'National Medical Commission',
      status: 'Recognised',
      scope: 'MBBS (150 seats), 14 MD/MS specialities, 4 DM/M.Ch.',
      validTo: 'Annual renewal',
    },
    {
      body: 'Indian Nursing Council',
      status: 'Approved',
      scope: 'B.Sc. Nursing, Post-Basic B.Sc., M.Sc. Nursing',
      validTo: 'Annual renewal',
    },
    {
      body: 'Punjab State Nursing Council',
      status: 'Registered',
      scope: 'All nursing programmes',
      validTo: 'Annual renewal',
    },
    {
      body: 'AICTE',
      status: 'Approved',
      scope: 'Pharmacy programmes for stipend and scholarship purposes',
      validTo: 'Annual renewal',
    },
    {
      body: 'NABH',
      status: 'Accredited (full)',
      scope: 'Ved Reyan Medical College & Hospital, 750 beds',
      validTo: '2027',
    },
    {
      body: 'NABL',
      status: 'Accredited',
      scope: 'Hospital central laboratory, ISO 15189',
      validTo: '2027',
    },
    {
      body: 'CPCSEA',
      status: 'Registered',
      scope: 'Animal house facility, with active IAEC',
      validTo: '2028',
    },
    {
      body: 'ISO',
      status: 'Certified',
      scope: '9001:2015, academic and administrative processes',
      validTo: '2027',
    },
  ],

  milestones: [
    { year: 2011, text: 'Ved Reyan Institute of Pharmacy founded; D.Pharm approved by the Pharmacy Council of India.' },
    { year: 2013, text: 'B.Pharm launched with an intake of 60; first analytical instrumentation laboratory commissioned.' },
    { year: 2015, text: 'M.Pharm approved in three specialisations; animal house registered with CPCSEA.' },
    { year: 2016, text: 'Ved Reyan University constituted under the Punjab Private Universities Act; UGC Section 2(f) recognition.' },
    { year: 2017, text: 'Ved Reyan Medical College & Hospital opens with 300 beds; Pharm.D programme approved.' },
    { year: 2019, text: 'First MBBS cohort admitted after NMC recognition; Central Instrumentation Facility opened.' },
    { year: 2020, text: 'School of Nursing established with INC approval; hospital reaches 500 beds.' },
    { year: 2021, text: 'School of Allied Health Sciences established; BioNest incubator sanctioned.' },
    { year: 2022, text: 'NAAC accreditation, grade A; first Ph.D. degrees awarded.' },
    { year: 2024, text: 'Hospital reaches 750 beds and is reaccredited by NABH; NAAC cycle-2 grade A++ (CGPA 3.61).' },
    { year: 2026, text: 'Ninth convocation; 48 programmes, 9,400 students, 31 active institutional MoUs.' },
  ],

  socials: [
    { label: 'Facebook', key: 'facebook' },
    { label: 'X', key: 'x' },
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Instagram', key: 'instagram' },
    { label: 'YouTube', key: 'youtube' },
  ],
}

export const rankings = [
  { value: '21', label: 'NIRF 2026, Pharmacy category (rank band 21–25)' },
  { value: 'A++', label: 'NAAC institutional grade, CGPA 3.61 (cycle 2)' },
  { value: 'AAA', label: 'Careers360 pharmacy college rating, 2026' },
  { value: '4', label: 'Faculty in the Stanford / Elsevier world top-2% list' },
]

export default university
