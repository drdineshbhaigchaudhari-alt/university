/** Placement statistics, recruiters and career pathways. */

export const placementHeadline = [
  { value: 12.4, decimals: 1, prefix: '₹', suffix: ' LPA', label: 'Highest package' },
  { value: 8.6, decimals: 1, prefix: '₹', suffix: ' LPA', label: 'Average, top 10% of cohort' },
  { value: 96, suffix: '%', label: 'Eligible students placed' },
  { value: 480, label: 'Offers made on campus' },
]

export const pharmacyPlacementHeadline = [
  { value: 12.4, decimals: 1, prefix: '₹', suffix: ' LPA', label: 'Highest package (M.Pharm, Dr. Reddy’s)' },
  { value: 8.6, decimals: 1, prefix: '₹', suffix: ' LPA', label: 'Average for the top 10% of the cohort' },
  { value: 5.8, decimals: 1, prefix: '₹', suffix: ' LPA', label: 'Median package across all offers' },
  { value: 118, suffix: '+', label: 'Recruiters who hired pharmacy graduates' },
]

export const recruiters = [
  { name: 'Sun Pharma', domain: 'Formulation R&D' },
  { name: 'Cipla', domain: 'Quality assurance' },
  { name: 'Dr. Reddy’s', domain: 'Analytical R&D' },
  { name: 'Lupin', domain: 'Regulatory affairs' },
  { name: 'Zydus Lifesciences', domain: 'Production' },
  { name: 'Torrent Pharma', domain: 'Medical affairs' },
  { name: 'Alkem', domain: 'Quality control' },
  { name: 'Glenmark', domain: 'Formulation' },
  { name: 'Intas', domain: 'Regulatory' },
  { name: 'Mankind', domain: 'Sales & marketing' },
  { name: 'Biocon', domain: 'Biologics' },
  { name: 'Serum Institute', domain: 'Vaccine QC' },
  { name: 'Emcure', domain: 'Packaging development' },
  { name: 'IQVIA', domain: 'Clinical research' },
  { name: 'Parexel', domain: 'Pharmacovigilance' },
  { name: 'Syneos Health', domain: 'Site monitoring' },
  { name: 'Novotech', domain: 'Clinical operations' },
  { name: 'Abbott', domain: 'Medical writing' },
  { name: 'Piramal Pharma', domain: 'CDMO' },
  { name: 'Max Healthcare', domain: 'Clinical pharmacy' },
  { name: 'Fortis Healthcare', domain: 'Hospital operations' },
  { name: 'Apollo Pharmacy', domain: 'Community practice' },
  { name: 'Accenture Life Sciences', domain: 'Consulting' },
  { name: '+187 more', domain: '2025 season' },
]

export const partners = [
  { name: 'NIPER Mohali', domain: 'Instrument access' },
  { name: 'CSIR-IMTECH', domain: 'Joint projects' },
  { name: 'PGIMER', domain: 'Clinical research' },
  { name: 'Sun Pharma', domain: 'Internship quota' },
  { name: 'Cipla', domain: 'Visiting faculty' },
  { name: 'Zydus', domain: 'Industrial training' },
  { name: 'Nectar Lifesciences', domain: 'Plant training' },
  { name: 'Ind-Swift Labs', domain: 'API internships' },
  { name: 'IQVIA', domain: 'CRO placement' },
  { name: 'Parexel', domain: 'PV training' },
  { name: 'Shimadzu', domain: 'Instrument lab' },
  { name: 'Agilent', domain: 'Method development' },
  { name: 'Fortis Mohali', domain: 'Clinical postings' },
  { name: 'AYUSH Directorate', domain: 'Herbal standardisation' },
  { name: 'Univ. of Nottingham', domain: 'Student exchange' },
  { name: 'Monash Malaysia', domain: 'Joint supervision' },
]

export const placementHistory = [
  { cohort: '2025', eligible: 248, offers: 302, rate: '96%', highest: '₹12.4 LPA', median: '₹5.8 LPA' },
  { cohort: '2024', eligible: 231, offers: 271, rate: '94%', highest: '₹11.0 LPA', median: '₹5.2 LPA' },
  { cohort: '2023', eligible: 216, offers: 239, rate: '92%', highest: '₹9.6 LPA', median: '₹4.8 LPA' },
]

export const placementBySchool = [
  { school: 'Pharmaceutical Sciences', eligible: 248, offers: 302, rate: '96%', highest: '₹12.4 LPA', median: '₹5.8 LPA' },
  { school: 'Nursing', eligible: 96, offers: 112, rate: '98%', highest: '₹6.8 LPA', median: '₹4.2 LPA' },
  { school: 'Allied Health Sciences', eligible: 174, offers: 196, rate: '93%', highest: '₹7.6 LPA', median: '₹4.0 LPA' },
  { school: 'Medical Sciences (non-residency)', eligible: 22, offers: 24, rate: '—', highest: '—', median: '—' },
]

export const careerPaths = [
  {
    title: 'Formulation & product development',
    text: 'Designing dosage forms, running trial batches, writing development reports and taking a product through scale-up.',
    entry: 'B.Pharm, M.Pharm (Pharmaceutics / Industrial Pharmacy)',
  },
  {
    title: 'Quality assurance & quality control',
    text: 'Method execution, batch release, deviation investigation, audit readiness and data-integrity practice.',
    entry: 'B.Pharm, M.Pharm (Analysis / Industrial Pharmacy)',
  },
  {
    title: 'Regulatory affairs',
    text: 'Building CTD and eCTD dossiers, responding to deficiency letters, managing post-approval changes and labelling.',
    entry: 'B.Pharm, M.Pharm (Regulatory Affairs)',
  },
  {
    title: 'Clinical research',
    text: 'Site monitoring, source-data verification, protocol compliance and clinical data management in a CRO or sponsor team.',
    entry: 'B.Pharm, Pharm.D, M.Sc. Clinical Research',
  },
  {
    title: 'Pharmacovigilance & drug safety',
    text: 'Case intake, narrative writing, causality assessment, aggregate reporting and signal detection.',
    entry: 'B.Pharm, M.Pharm (Pharmacology), PG Diploma',
  },
  {
    title: 'Clinical pharmacy practice',
    text: 'Ward rounds, medication review, therapeutic drug monitoring, antimicrobial stewardship and patient counselling.',
    entry: 'Pharm.D, M.Pharm (Pharmacy Practice)',
  },
  {
    title: 'Medical writing & communications',
    text: 'Clinical study reports, protocols, investigator brochures, publications and plain-language summaries.',
    entry: 'B.Pharm, Pharm.D, Certificate in Medical Writing',
  },
  {
    title: 'Community & hospital pharmacy',
    text: 'Dispensing, prescription screening, inventory and cold-chain management, and pharmacy inspection readiness.',
    entry: 'D.Pharm, B.Pharm',
  },
  {
    title: 'Higher study & research',
    text: 'NIPER, GPAT-funded master’s programmes, doctoral study in India or abroad, and academic careers.',
    entry: 'B.Pharm (Hons.), M.Pharm, Ph.D.',
  },
]

export const placementSupport = [
  {
    title: 'Training starts in semester five',
    text: 'Aptitude and technical drills, mock group discussions, one-to-one CV clinics and a compulsory industry-visit series — not a scramble in the final semester.',
  },
  {
    title: 'A separate higher-studies track',
    text: 'Students preparing for GPAT, NIPER JEE or a foreign master’s are moved into a mentoring track instead of the placement drive, and are excluded from the placement denominator.',
  },
  {
    title: 'Officers who have done the job',
    text: 'Six of the nine placement officers came out of pharmaceutical manufacturing, CRO operations or hospital administration.',
  },
  {
    title: 'Alumni interview panels',
    text: 'Mock technical interviews are run by alumni currently working in the function the student is applying to.',
  },
]
