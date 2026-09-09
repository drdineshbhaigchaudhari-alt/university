/** The four schools, as shown on the home page and /schools. */

export const schools = [
  {
    key: 'pharmacy',
    slug: '/pharmaceutical-sciences',
    name: 'School of Pharmaceutical Sciences',
    short: 'Pharmaceutical Sciences',
    flagship: true,
    established: 2011,
    image: '/assets/img/pharmacy-practice.jpg',
    imageAlt: 'Pharmacy students at a dispensing counter',
    blurb:
      'PCI-approved D.Pharm, B.Pharm, Pharm.D, eight M.Pharm specialisations and Ph.D., taught across twelve dedicated laboratories.',
    intro:
      'The founding school, and still the largest. Everything else at Ved Reyan grew outwards from its four original laboratories.',
    facts: [
      { value: '21', label: 'Pharmacy programmes' },
      { value: '12', label: 'Dedicated laboratories' },
      { value: '68', label: 'Full-time faculty' },
      { value: '96%', label: 'Placement, class of 2025' },
    ],
    highlights: [
      'Student-operated HPLC, HPTLC, GC-MS, DSC, tablet press and lyophiliser from the second year',
      'Clinical postings inside the university’s own 750-bed teaching hospital',
      'Regulatory science taught as core curriculum, not an elective',
      'Four undergraduate research places reserved in each centre of excellence',
    ],
    approvals: ['PCI approved', 'AICTE approved', 'CPCSEA-registered animal house'],
  },
  {
    key: 'medical',
    slug: '/medical-sciences',
    name: 'School of Medical Sciences',
    short: 'Medical Sciences',
    established: 2017,
    image: '/assets/img/surgery.jpg',
    imageAlt: 'Surgical team at work in an operating theatre',
    blurb:
      'MBBS with 150 sanctioned seats, 14 MD/MS specialities and DM/M.Ch. super-speciality training in our own hospital.',
    intro:
      'Ved Reyan Medical College & Hospital is owned and staffed by the university, so clinical teaching is timetabled by us rather than negotiated with an outside institution.',
    facts: [
      { value: '150', label: 'MBBS seats per year' },
      { value: '14', label: 'MD / MS specialities' },
      { value: '750', label: 'Teaching hospital beds' },
      { value: '9', label: 'Operation theatres' },
    ],
    highlights: [
      'Competency-based curriculum with early clinical exposure from the first professional year',
      'Family-adoption programme across eleven villages, running through all four years',
      '60-bed critical-care block and four super-speciality units',
      'Compulsory research project in the third professional year, with faculty supervision',
    ],
    approvals: ['NMC recognised', 'NABH-accredited hospital', 'NABL-accredited central laboratory'],
  },
  {
    key: 'nursing',
    slug: '/nursing',
    name: 'School of Nursing',
    short: 'Nursing',
    established: 2020,
    image: '/assets/img/nursing-care.jpg',
    imageAlt: 'Nursing student wearing protective gloves',
    blurb:
      'B.Sc. Nursing, Post-Basic B.Sc., M.Sc. Nursing across five specialities and a nurse-practitioner critical-care track.',
    intro:
      'Skills before wards: two years of simulation-led training in a fourteen-bed skills laboratory before a student takes responsibility for a real patient.',
    facts: [
      { value: '100', label: 'B.Sc. Nursing seats' },
      { value: '5', label: 'M.Sc. specialities' },
      { value: '8', label: 'High-fidelity manikins' },
      { value: '14', label: 'Bed skills ward' },
    ],
    highlights: [
      'Eight high-fidelity manikins and a fourteen-bed simulation ward',
      'Rotating postings across medicine, surgery, paediatrics, obstetrics, psychiatry and community health',
      'Evening-shift Post-Basic B.Sc. cohort for nurses in active employment',
      'Residency-pattern Nurse Practitioner in Critical Care programme',
    ],
    approvals: ['INC approved', 'Punjab State Nursing Council registered'],
  },
  {
    key: 'allied',
    slug: '/allied-health',
    name: 'School of Allied Health Sciences',
    short: 'Allied Health Sciences',
    established: 2021,
    image: '/assets/img/imaging-lab.jpg',
    imageAlt: 'Clinicians reviewing diagnostic images on screen',
    blurb:
      'Physiotherapy, laboratory technology, radiology & imaging, optometry, operation-theatre technology, dietetics and public health.',
    intro:
      'Thirteen programmes covering the professions a hospital cannot function without — each one taught in the department where the work actually happens.',
    facts: [
      { value: '16', label: 'Programmes' },
      { value: '14', label: 'Station rehab suite' },
      { value: '11', label: 'Adopted villages for fieldwork' },
      { value: 'ISO 15189', label: 'Laboratory accreditation standard' },
    ],
    highlights: [
      'Physiotherapy outpatient caseload supervised from the third year of BPT',
      'NABL-accredited central laboratory used as the teaching laboratory for MLT',
      'Public-health fieldwork in eleven adopted villages, continuous across the MPH',
      'Emergency medical technology programme rotating through the emergency department',
    ],
    approvals: ['University-awarded degrees', 'NABL-accredited teaching laboratory'],
    departments: [
      { id: 'physiotherapy', name: 'Physiotherapy & Rehabilitation' },
      { id: 'public-health', name: 'Public Health' },
      { id: 'diagnostics', name: 'Diagnostic & Laboratory Sciences' },
      { id: 'imaging', name: 'Radiology & Imaging Sciences' },
      { id: 'nutrition', name: 'Nutrition & Dietetics' },
    ],
  },
]

export function findSchool(key) {
  return schools.find((s) => s.key === key)
}
