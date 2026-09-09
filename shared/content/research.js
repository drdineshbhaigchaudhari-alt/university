/** Research centres, funding, patents, incubation. */

export const researchHeadline = [
  { value: 1450, suffix: '+', label: 'Scopus-indexed publications' },
  { value: 62, label: 'Patents filed, 18 granted' },
  { value: 18.6, decimals: 1, prefix: '₹', suffix: ' Cr', label: 'External research funding' },
  { value: 9, label: 'Funded centres of excellence' },
]

export const pharmacyResearchHeadline = [
  { value: 980, suffix: '+', label: 'Scopus-indexed papers from this school' },
  { value: 41, label: 'Patents filed, 12 granted' },
  { value: 11.4, decimals: 1, prefix: '₹', suffix: ' Cr', label: 'Live external grants' },
  { value: 61, label: '2025 graduates with a paper or patent' },
]

export const centres = [
  {
    id: 'drug-discovery',
    name: 'Centre for Drug Discovery & Molecular Modelling',
    lead: 'Prof. (Dr.) D. N. Sahni',
    funding: 'DST-SERB, CSIR',
    text: 'Synthetic medicinal chemistry and computer-aided design of heterocyclic anti-infectives, with docking and molecular-dynamics work run on the campus compute node.',
  },
  {
    id: 'nanomedicine',
    name: 'Centre for Nanomedicine & Targeted Delivery',
    lead: 'Prof. (Dr.) Meera Vasudevan',
    funding: 'DST-SERB, DBT',
    text: 'Lipid and polymeric nanocarriers for oral peptide and poorly soluble drug delivery, including a ₹1.9 crore programme on enteric-coated insulin carriers.',
  },
  {
    id: 'herbal',
    name: 'Centre for Herbal Drug Standardisation',
    lead: 'Dr. Naveen Chandran',
    funding: 'Ministry of AYUSH',
    text: 'Marker-based fingerprinting and pharmacopoeial standardisation of polyherbal formulations, supported by the two-acre medicinal-plant garden and herbarium.',
  },
  {
    id: 'clinical-pharmacy',
    name: 'Centre for Clinical Pharmacy & Pharmacovigilance',
    lead: 'Dr. Sanya Bhatnagar',
    funding: 'ICMR',
    text: 'Runs the hospital ADR monitoring centre, causality assessment training and outcome studies on medication review in inpatient units.',
  },
  {
    id: 'amr',
    name: 'Centre for Antimicrobial Resistance',
    lead: 'Dr. Kabir Deshmukh',
    funding: 'ICMR, PSCST',
    text: 'Hospital antimicrobial stewardship, community de-prescribing protocols and resistance surveillance across the eleven adopted villages.',
  },
  {
    id: 'regulatory',
    name: 'Centre for Regulatory Science',
    lead: 'Dr. Imran Qureshi',
    funding: 'Industry-sponsored',
    text: 'Comparative regulatory pathway research, submission-quality studies and the annual mock-inspection exercise on the student pilot plant.',
  },
  {
    id: 'bioequivalence',
    name: 'Bioequivalence & BA/BE Study Centre',
    lead: 'Prof. (Dr.) A. R. Kulkarni',
    funding: 'Industry-sponsored',
    text: 'In-vitro release and dissolution profile comparison, IVIVC modelling and biowaiver documentation support for partner manufacturers.',
  },
  {
    id: 'digital-health',
    name: 'Centre for Digital Health & Pharmacoinformatics',
    lead: 'Dr. Ritika Mahajan',
    funding: 'DST-SERB, PSCST',
    text: 'Signal detection in safety databases, prescription-pattern analytics and chemoinformatics tooling for the modelling coursework.',
  },
  {
    id: 'bionest',
    name: 'Ved Reyan BioNest Incubator',
    lead: 'Dean, Research',
    funding: 'BIRAC-supported',
    text: 'Eleven active ventures in diagnostics, nutraceuticals, medical devices and health services, with bench space, mentoring and seed-grant access for student founders.',
  },
]

export const fundingAgencies = [
  'DST-SERB',
  'ICMR',
  'DBT',
  'Ministry of AYUSH',
  'CSIR',
  'AICTE',
  'DRDO (LSRB)',
  'BIRAC',
  'PSCST',
]

export const fundedProjects = [
  {
    title: 'Enteric-coated nanostructured carriers for oral peptide delivery',
    agency: 'DST-SERB',
    amount: '₹1.90 Cr',
    duration: '2026–2029',
    pi: 'Prof. (Dr.) Meera Vasudevan',
  },
  {
    title: 'Neuroinflammatory mechanisms in chemotherapy-induced peripheral neuropathy',
    agency: 'ICMR',
    amount: '₹1.34 Cr',
    duration: '2025–2028',
    pi: 'Dr. Sanya Bhatnagar',
  },
  {
    title: 'Pharmacopoeial standardisation of six polyherbal AYUSH formulations',
    agency: 'Ministry of AYUSH',
    amount: '₹96.5 L',
    duration: '2025–2028',
    pi: 'Dr. Naveen Chandran',
  },
  {
    title: 'Community de-prescribing of antimicrobials in rural Punjab',
    agency: 'ICMR',
    amount: '₹88.0 L',
    duration: '2024–2027',
    pi: 'Dr. Kabir Deshmukh',
  },
  {
    title: 'Co-amorphous dispersions for poorly soluble antihypertensives',
    agency: 'DST-SERB',
    amount: '₹1.12 Cr',
    duration: '2024–2027',
    pi: 'Prof. (Dr.) A. R. Kulkarni',
  },
  {
    title: 'Machine-assisted signal detection in spontaneous ADR reporting',
    agency: 'PSCST',
    amount: '₹42.0 L',
    duration: '2026–2028',
    pi: 'Dr. Ritika Mahajan',
  },
]

export const patents = [
  { title: 'A co-amorphous solid dispersion of a poorly soluble antihypertensive and process thereof', status: 'Granted', year: 2024 },
  { title: 'Enteric nanostructured lipid carrier composition for oral peptide administration', status: 'Published', year: 2025 },
  { title: 'Process for marker-standardised extraction of a polyherbal hepatoprotective formulation', status: 'Granted', year: 2023 },
  { title: 'A stability-indicating chromatographic method for simultaneous estimation of three antidiabetics', status: 'Granted', year: 2024 },
  { title: 'Mucoadhesive buccal film for paediatric antiemetic delivery', status: 'Published', year: 2026 },
  { title: 'Low-cost dissolution profiling attachment for teaching laboratories', status: 'Granted', year: 2022 },
]

export const ugResearch = {
  title: 'How an undergraduate joins a project',
  text: 'Applications open in the fifth semester. Submit a one-page proposal, sit a short interview with the centre coordinator, and if selected you receive a monthly contingency stipend, bench space and co-authorship on any output. Around seventy places are filled each year, and each centre must carry at least four undergraduate project students to keep its internal allocation.',
}

export const publicationRecord = [
  { year: 2025, papers: 214, chapters: 61, patents: 14 },
  { year: 2024, papers: 198, chapters: 54, patents: 11 },
  { year: 2023, papers: 176, chapters: 47, patents: 9 },
  { year: 2022, papers: 151, chapters: 42, patents: 8 },
]
