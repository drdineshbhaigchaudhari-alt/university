/**
 * The full programme catalogue.
 *
 * Consumed by:
 *   - the React client (programme cards, tabs, filters, fee table)
 *   - the Express API at GET /api/programmes
 *
 * Field notes
 *   level  'diploma' | 'ug' | 'pg' | 'doctoral'   — used by the filter control
 *   entry  'after-12' | 'after-diploma' | 'after-graduation' | 'after-pg'
 *          — used by the "where are you now?" tabs
 *   feePerYear  number in INR, or null where the fee is fixed by an external
 *          authority (MD/MS seats are set by the state fee committee)
 *   feeTotal    number in INR for short courses billed as a single fee
 */

export const schoolKeys = {
  pharmacy: 'pharmacy',
  medical: 'medical',
  nursing: 'nursing',
  allied: 'allied',
}

export const levelLabels = {
  diploma: 'Diploma & Certificate',
  ug: 'Undergraduate',
  pg: 'Postgraduate',
  doctoral: 'Doctoral',
}

export const entryLabels = {
  'after-12': 'After 12th',
  'after-diploma': 'After a Diploma',
  'after-graduation': 'After Graduation',
  'after-pg': 'After Post-Graduation',
}

export const programmes = [
  /* ---------------------------------------------------------------- Pharmacy */
  {
    id: 'd-pharm',
    name: 'Diploma in Pharmacy (D.Pharm)',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-12',
    duration: '2 years + 500 hrs training',
    seats: 60,
    feePerYear: 78000,
    approval: 'PCI approved',
    eligibility:
      '10+2 with Physics, Chemistry and either Biology or Mathematics, minimum 45% aggregate.',
    summary:
      'The shortest route to a registered-pharmacist licence. Two academic years of pharmaceutics, pharmaceutical chemistry, pharmacology, biochemistry and hospital and community pharmacy, followed by 500 hours of supervised practical training in our own hospital pharmacy — not an outside chemist shop.',
    careers: ['Registered pharmacist', 'Hospital pharmacy technician', 'Community pharmacy'],
  },
  {
    id: 'b-pharm',
    name: 'Bachelor of Pharmacy (B.Pharm)',
    school: 'pharmacy',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years · 8 semesters',
    seats: 120,
    feePerYear: 142000,
    approval: 'PCI approved',
    flagship: true,
    eligibility:
      '10+2 with Physics, Chemistry and either Biology or Mathematics; minimum 50% aggregate (45% for reserved categories). Admission through VRUET-UG or qualifying marks.',
    summary:
      'The mainstream pharmacy degree. Semesters 1–4 build the science — physical pharmaceutics, organic and medicinal chemistry, human anatomy and physiology, pharmacognosy. Semesters 5–7 turn it into practice: formulation development, quality assurance, biopharmaceutics, industrial pharmacy and pharmacy practice. Semester 8 is a six-month supervised project in industry, a hospital or one of our research centres.',
    careers: ['Formulation R&D', 'Quality assurance & control', 'Regulatory affairs', 'Clinical research', 'Production'],
  },
  {
    id: 'b-pharm-hons',
    name: 'B.Pharm (Hons.) — Research',
    school: 'pharmacy',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years',
    seats: 30,
    feePerYear: 152000,
    approval: 'PCI approved',
    eligibility:
      'As B.Pharm, plus a top-15% VRUET-UG score or 75% in 10+2 science. A 7.5 CGPA is required to continue past the second year.',
    summary:
      'The same PCI curriculum with a compulsory research thread: a literature review in semester 3, a funded mini-project in semesters 5–6 and a full dissertation in semesters 7–8. Intended for students aiming at NIPER, a funded foreign master’s or an industrial R&D career.',
    careers: ['Industrial R&D', 'NIPER / IIT postgraduate study', 'Funded overseas master’s'],
  },
  {
    id: 'b-pharm-lateral',
    name: 'B.Pharm (Lateral Entry)',
    school: 'pharmacy',
    level: 'ug',
    entry: 'after-diploma',
    duration: '3 years',
    seats: 24,
    feePerYear: 142000,
    approval: 'PCI approved',
    eligibility: 'D.Pharm from a PCI-approved institution with minimum 50% aggregate.',
    summary:
      'Direct entry into the second year (third semester) of B.Pharm for D.Pharm holders. A compulsory bridge module in physical pharmaceutics, biostatistics and communication runs alongside the first semester so lateral-entry students are not disadvantaged in the analytical subjects.',
    careers: ['Formulation R&D', 'Quality control', 'Hospital pharmacy'],
  },
  {
    id: 'pharm-d',
    name: 'Doctor of Pharmacy (Pharm.D)',
    school: 'pharmacy',
    level: 'ug',
    entry: 'after-12',
    duration: '6 years (5 + 1 internship)',
    seats: 30,
    feePerYear: 165000,
    approval: 'PCI approved',
    flagship: true,
    eligibility:
      '10+2 with Physics, Chemistry and Biology, minimum 50%; or D.Pharm from a PCI-approved institution.',
    summary:
      'A clinical pharmacy degree, not an extended B.Pharm. Years 1–3 cover the pharmaceutical sciences alongside pathophysiology and clinical pharmacokinetics; years 4–5 are built around pharmacotherapeutics, clinical research and hospital rotations; year 6 is a full-time residency in our teaching hospital covering medicine, ICU, paediatrics, oncology and the ADR monitoring centre.',
    careers: ['Clinical pharmacist', 'Therapeutic drug monitoring', 'Medical affairs', 'Pharmacovigilance'],
  },
  {
    id: 'pharm-d-pb',
    name: 'Pharm.D (Post Baccalaureate)',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '3 years',
    seats: 10,
    feePerYear: 165000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm from a PCI-approved institution with minimum 50% aggregate.',
    summary:
      'Two academic years of clinical pharmacy and pharmacotherapeutics followed by a full-year hospital residency. Designed for B.Pharm graduates moving from an industrial to a clinical career.',
    careers: ['Clinical pharmacist', 'Hospital pharmacy management', 'Medical science liaison'],
  },
  {
    id: 'm-pharm-pharmaceutics',
    name: 'M.Pharm — Pharmaceutics',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 18,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Novel drug delivery, nanocarriers, solid-dosage design, scale-up and quality-by-design formulation development. Dissertations run in the Formulation Development Lab and the Centre for Nanomedicine.',
    careers: ['Formulation development', 'Product development', 'Technology transfer'],
  },
  {
    id: 'm-pharm-pharmacology',
    name: 'M.Pharm — Pharmacology',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 18,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Screening models, toxicology, molecular pharmacology and pharmacovigilance, with practical work in the CPCSEA-registered animal house and the hospital’s ADR monitoring centre.',
    careers: ['Preclinical research', 'Toxicology', 'Pharmacovigilance', 'Medical writing'],
  },
  {
    id: 'm-pharm-chemistry',
    name: 'M.Pharm — Pharmaceutical Chemistry',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 15,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Synthetic medicinal chemistry, structure–activity relationships, computer-aided drug design and spectral characterisation. Linked to the Centre for Drug Discovery & Molecular Modelling.',
    careers: ['Discovery chemistry', 'API process research', 'Computational chemistry'],
  },
  {
    id: 'm-pharm-analysis',
    name: 'M.Pharm — Pharmaceutical Analysis',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 15,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Method development and validation, stability-indicating assays, impurity profiling, forced-degradation studies and the analytical documentation an audit will examine.',
    careers: ['Analytical R&D', 'Quality control', 'Stability studies'],
  },
  {
    id: 'm-pharm-pharmacognosy',
    name: 'M.Pharm — Pharmacognosy',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 12,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Phytochemical isolation, standardisation of herbal formulations, AYUSH pharmacopoeial methods and marker-based fingerprinting using HPTLC. Supported by a two-acre medicinal-plant garden.',
    careers: ['Herbal product development', 'AYUSH quality control', 'Natural-product research'],
  },
  {
    id: 'm-pharm-practice',
    name: 'M.Pharm — Pharmacy Practice',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 12,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Ward-based clinical pharmacy: medication review, therapeutic drug monitoring, antimicrobial stewardship and patient counselling, with postings across seven hospital departments.',
    careers: ['Clinical pharmacist', 'Antimicrobial stewardship', 'Medical affairs'],
  },
  {
    id: 'm-pharm-regulatory',
    name: 'M.Pharm — Regulatory Affairs',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 12,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'CTD and eCTD dossier construction, CDSCO and USFDA submission pathways, ANDA and DMF filings, labelling law and post-approval change management. Taught largely by serving practitioners.',
    careers: ['Regulatory affairs', 'Dossier management', 'Regulatory intelligence'],
  },
  {
    id: 'm-pharm-industrial',
    name: 'M.Pharm — Industrial Pharmacy',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 12,
    feePerYear: 128000,
    approval: 'PCI approved',
    eligibility: 'B.Pharm with minimum 55% aggregate, through a valid GPAT score or VRUET-PG.',
    summary:
      'Process validation, technology transfer, Schedule M and GMP compliance, plant layout, utilities qualification and deviation investigation, taught on our pilot-plant equipment.',
    careers: ['Production management', 'Quality assurance', 'Process validation'],
  },
  {
    id: 'msc-clinical-research',
    name: 'M.Sc. Clinical Research',
    school: 'pharmacy',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 30,
    feePerYear: 110000,
    eligibility: 'Any life-science, pharmacy, nursing or medical graduate with minimum 50% aggregate.',
    summary:
      'ICH-GCP, protocol and case-report-form design, site management, monitoring, safety reporting and clinical data management, closing with a six-month placement at a partner contract research organisation.',
    careers: ['Clinical research associate', 'Clinical data management', 'Site management'],
  },
  {
    id: 'phd-pharmaceutical-sciences',
    name: 'Ph.D. in Pharmaceutical Sciences',
    school: 'pharmacy',
    level: 'doctoral',
    entry: 'after-pg',
    duration: '3–5 years · full & part time',
    seats: 'As per supervisor availability',
    feePerYear: 85000,
    eligibility:
      'M.Pharm or M.Sc. in a relevant discipline with 55%, through VRUET-RET and an interview. NET/GATE/GPAT-JRF holders are exempt from VRUET-RET.',
    summary:
      'Supervised research in drug delivery, medicinal chemistry, pharmacology and toxicology, pharmaceutical analysis, phytopharmaceuticals, clinical pharmacy, regulatory science or pharmacoinformatics. Coursework runs in the first two semesters, followed by a public pre-submission seminar before thesis submission.',
    careers: ['Academia', 'Industrial R&D leadership', 'Scientific advisory'],
  },
  {
    id: 'pgd-clinical-research-pv',
    name: 'PG Diploma in Clinical Research & Pharmacovigilance',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-graduation',
    duration: '1 year',
    seats: 40,
    feeTotal: 72000,
    eligibility: 'Any life-science or pharmacy graduate.',
    summary:
      'A conversion course for graduates entering the CRO sector: GCP, safety-database practice (case intake, narrative writing, causality assessment), aggregate reporting and signal detection.',
    careers: ['Pharmacovigilance associate', 'Drug safety physician support', 'Clinical trial assistant'],
  },
  {
    id: 'cert-medical-writing',
    name: 'Certificate in Medical Writing',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-graduation',
    duration: '6 months · evening mode',
    seats: 35,
    feeTotal: 34000,
    eligibility: 'Any life-science, pharmacy, nursing or medical graduate.',
    summary:
      'Regulatory and scientific writing: clinical study reports, protocols, investigator brochures, plain-language summaries, systematic reviews and manuscript preparation, with weekly assessed writing tasks.',
    careers: ['Medical writer', 'Regulatory writer', 'Scientific communications'],
  },
  {
    id: 'cert-gmp-qa',
    name: 'Certificate in GMP & Quality Assurance',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-graduation',
    duration: '6 months · weekend mode',
    seats: 40,
    feeTotal: 31000,
    eligibility: 'D.Pharm, B.Pharm or a science graduate working in manufacturing.',
    summary:
      'Schedule M, ICH Q7–Q10, documentation and data integrity (ALCOA+), deviation and CAPA handling, internal audit technique, and a mock regulatory inspection run on our pilot plant.',
    careers: ['Quality assurance', 'Internal audit', 'Documentation control'],
  },
  {
    id: 'cert-analytical-instrumentation',
    name: 'Certificate in Analytical Instrumentation',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-graduation',
    duration: '3 months · weekend mode',
    seats: 24,
    feeTotal: 22000,
    eligibility: 'D.Pharm, B.Pharm or a chemistry graduate.',
    summary:
      'Hands-on operation, calibration and troubleshooting of HPLC, GC, UV-Vis, FTIR and HPTLC, with a documented instrument log book that many employers accept as evidence of competence.',
    careers: ['Analytical technician', 'Quality control chemist'],
  },
  {
    id: 'cert-hospital-community-pharmacy',
    name: 'Certificate in Hospital & Community Pharmacy Practice',
    school: 'pharmacy',
    level: 'diploma',
    entry: 'after-diploma',
    duration: '6 months · weekend mode',
    seats: 30,
    feeTotal: 28000,
    eligibility: 'D.Pharm or B.Pharm with State Pharmacy Council registration.',
    summary:
      'For registered pharmacists already in practice: prescription screening, drug-interaction checking, inventory and cold-chain management, patient counselling technique, and the documentation a pharmacy inspection will ask for.',
    careers: ['Hospital pharmacist', 'Community pharmacy manager'],
  },

  /* ----------------------------------------------------------------- Medical */
  {
    id: 'mbbs',
    name: 'MBBS',
    school: 'medical',
    level: 'ug',
    entry: 'after-12',
    duration: '5.5 years (4.5 + 1 internship)',
    seats: 150,
    feePerYear: null,
    feeNote: 'As notified by the state fee-regulatory committee',
    approval: 'NMC recognised',
    flagship: true,
    eligibility:
      '10+2 with Physics, Chemistry, Biology and English, minimum 50% (40% for reserved categories); admission strictly through NEET-UG and state counselling.',
    summary:
      'A competency-based curriculum with early clinical exposure from the first professional year, taught inside our own 750-bed teaching hospital. Includes the AETCOM module, a family-adoption programme across eleven villages, and a compulsory research project in the third professional year.',
    careers: ['Clinical practice', 'MD/MS residency', 'Public health', 'Medical research'],
  },
  {
    id: 'md',
    name: 'MD — nine specialities',
    school: 'medical',
    level: 'pg',
    entry: 'after-graduation',
    duration: '3 years',
    seats: 58,
    feePerYear: null,
    feeNote: 'As notified by the state fee-regulatory committee',
    approval: 'NMC recognised',
    eligibility: 'MBBS with a completed internship and a valid NEET-PG score.',
    summary:
      'Residency training in General Medicine, Paediatrics, Radiodiagnosis, Anaesthesiology, Pathology, Microbiology, Pharmacology, Community Medicine and Dermatology, with a thesis requirement and rotating unit responsibility from the first year.',
    careers: ['Consultant physician', 'DM super-speciality', 'Academic medicine'],
  },
  {
    id: 'ms',
    name: 'MS — five specialities',
    school: 'medical',
    level: 'pg',
    entry: 'after-graduation',
    duration: '3 years',
    seats: 38,
    feePerYear: null,
    feeNote: 'As notified by the state fee-regulatory committee',
    approval: 'NMC recognised',
    eligibility: 'MBBS with a completed internship and a valid NEET-PG score.',
    summary:
      'Residency training in General Surgery, Orthopaedics, ENT, Obstetrics & Gynaecology and Ophthalmology, with logged operative experience and a graded progression to independent operating.',
    careers: ['Consultant surgeon', 'M.Ch. super-speciality', 'Academic surgery'],
  },
  {
    id: 'dm-mch',
    name: 'DM / M.Ch. — super-speciality',
    school: 'medical',
    level: 'doctoral',
    entry: 'after-pg',
    duration: '3 years',
    seats: 8,
    feePerYear: null,
    feeNote: 'As notified by the state fee-regulatory committee',
    approval: 'NMC recognised',
    eligibility: 'MD or MS in the relevant feeder speciality with a valid NEET-SS score.',
    summary:
      'Cardiology, Neurology, Neurosurgery and Paediatric Surgery, delivered in the hospital’s super-speciality blocks with a dedicated 60-bed critical-care unit.',
    careers: ['Super-speciality consultant', 'Academic leadership'],
  },
  {
    id: 'phd-medical-health',
    name: 'Ph.D. in Medical & Health Sciences',
    school: 'medical',
    level: 'doctoral',
    entry: 'after-pg',
    duration: '3–5 years · full & part time',
    seats: 'As per supervisor availability',
    feePerYear: 85000,
    eligibility: 'MD, MS, MBBS with a postgraduate qualification, or a relevant master’s with 55%.',
    summary:
      'Clinical, translational and public-health research streams, including a clinician-scientist track that allows serving hospital consultants to register part time while continuing clinical duties.',
    careers: ['Clinician scientist', 'Translational research', 'Academic medicine'],
  },
  {
    id: 'fellowship-critical-care',
    name: 'Fellowship in Critical Care Medicine',
    school: 'medical',
    level: 'diploma',
    entry: 'after-pg',
    duration: '1 year',
    seats: 6,
    feeTotal: 180000,
    eligibility: 'MD (Medicine / Anaesthesiology / Paediatrics) or equivalent.',
    summary:
      'A full-time clinical fellowship in the 60-bed critical-care block covering ventilation, haemodynamic monitoring, renal replacement, sepsis management and end-of-life communication.',
    careers: ['Intensivist', 'Critical-care unit lead'],
  },

  /* ----------------------------------------------------------------- Nursing */
  {
    id: 'bsc-nursing',
    name: 'B.Sc. Nursing',
    school: 'nursing',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years',
    seats: 100,
    feePerYear: 118000,
    approval: 'INC approved',
    flagship: true,
    eligibility:
      '10+2 with Physics, Chemistry, Biology and English, minimum 45%; minimum age 17 years on 31 December of the admission year.',
    summary:
      'Simulation-led skills training in the first two years, followed by rotating clinical postings across medicine, surgery, paediatrics, obstetrics, psychiatry and community health. Eight high-fidelity manikins and a 14-bed skills ward support the pre-clinical phase.',
    careers: ['Staff nurse', 'ICU / speciality nursing', 'Nurse educator', 'Overseas registration'],
  },
  {
    id: 'post-basic-bsc-nursing',
    name: 'Post-Basic B.Sc. Nursing',
    school: 'nursing',
    level: 'ug',
    entry: 'after-diploma',
    duration: '2 years',
    seats: 30,
    feePerYear: 96000,
    approval: 'INC approved',
    eligibility: 'GNM with registration as RN/RM with a State Nursing Council.',
    summary:
      'For registered nurses moving into supervisory, education or specialist roles. An evening-shift cohort is available for nurses in active hospital employment.',
    careers: ['Nursing supervisor', 'Nurse educator', 'Quality & infection control'],
  },
  {
    id: 'msc-nursing',
    name: 'M.Sc. Nursing — five specialities',
    school: 'nursing',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 40,
    feePerYear: 132000,
    approval: 'INC approved',
    eligibility:
      'B.Sc. Nursing or Post-Basic B.Sc. Nursing with 55% and at least one year of clinical experience after registration.',
    summary:
      'Medical-Surgical, Obstetrics & Gynaecological, Paediatric, Community Health and Mental Health Nursing, each with a clinical speciality practicum, a teaching practicum and a dissertation.',
    careers: ['Clinical nurse specialist', 'Nursing faculty', 'Nursing administration'],
  },
  {
    id: 'npcc',
    name: 'Nurse Practitioner in Critical Care (NPCC)',
    school: 'nursing',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years · residency mode',
    seats: 10,
    feePerYear: 138000,
    approval: 'INC approved',
    eligibility: 'B.Sc. Nursing with registration and at least one year of critical-care experience.',
    summary:
      'A residency-pattern programme placing nurse practitioners in the critical-care block with graded clinical autonomy, advanced assessment, ventilator management and prescribing support under protocol.',
    careers: ['Critical-care nurse practitioner', 'Rapid-response team lead'],
  },
  {
    id: 'phd-nursing',
    name: 'Ph.D. in Nursing',
    school: 'nursing',
    level: 'doctoral',
    entry: 'after-pg',
    duration: '3–5 years',
    seats: 'As per supervisor availability',
    feePerYear: 85000,
    eligibility: 'M.Sc. Nursing with 55%, through VRUET-RET and an interview.',
    summary:
      'Nursing-education research, patient-safety and quality-improvement science, community-health interventions and health-systems research.',
    careers: ['Nursing academia', 'Health-systems research', 'Policy advisory'],
  },
  {
    id: 'cert-critical-care-nursing',
    name: 'Certificate in Critical Care Nursing',
    school: 'nursing',
    level: 'diploma',
    entry: 'after-diploma',
    duration: '6 months',
    seats: 24,
    feeTotal: 42000,
    eligibility: 'GNM or B.Sc. Nursing with State Nursing Council registration.',
    summary:
      'Ventilator basics, haemodynamic monitoring, arrhythmia recognition, sepsis bundles and infection-prevention practice, taught on rotation in the critical-care block.',
    careers: ['ICU staff nurse', 'Step-down unit nursing'],
  },

  /* -------------------------------------------------------------- Allied health */
  {
    id: 'bpt',
    name: 'Bachelor of Physiotherapy (BPT)',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4.5 years (4 + 6 months internship)',
    seats: 60,
    feePerYear: 105000,
    flagship: true,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 50% aggregate.',
    summary:
      'Musculoskeletal, neurological, cardiopulmonary and sports physiotherapy, supported by a 14-station electrotherapy and exercise-therapy suite and a supervised outpatient caseload from the third year.',
    careers: ['Clinical physiotherapist', 'Sports rehabilitation', 'Community rehabilitation'],
  },
  {
    id: 'mpt',
    name: 'Master of Physiotherapy (MPT) — four streams',
    school: 'allied',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 24,
    feePerYear: 112000,
    eligibility: 'BPT with a completed internship and minimum 50% aggregate.',
    summary:
      'Musculoskeletal, Neurology, Cardiopulmonary and Sports Physiotherapy, with a supervised outpatient caseload from the first semester and a dissertation in the second year.',
    careers: ['Speciality physiotherapist', 'Physiotherapy faculty', 'Sports team practitioner'],
  },
  {
    id: 'bsc-mlt',
    name: 'B.Sc. Medical Laboratory Technology',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 60,
    feePerYear: 92000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Haematology, clinical biochemistry, histopathology, microbiology, immunology and molecular diagnostics, taught inside the hospital’s NABL-accredited central laboratory.',
    careers: ['Medical laboratory technologist', 'Molecular diagnostics', 'Blood-bank technology'],
  },
  {
    id: 'bsc-mlt-lateral',
    name: 'B.Sc. Medical Laboratory Technology (Lateral)',
    school: 'allied',
    level: 'ug',
    entry: 'after-diploma',
    duration: '2 years',
    seats: 20,
    feePerYear: 92000,
    eligibility: 'DMLT with minimum 50% aggregate.',
    summary:
      'Direct entry into the second year for DMLT holders, concentrating on advanced haematology, histopathology, clinical biochemistry and molecular diagnostics.',
    careers: ['Senior laboratory technologist', 'Laboratory quality officer'],
  },
  {
    id: 'msc-medical-lab-sciences',
    name: 'M.Sc. Medical Laboratory Sciences',
    school: 'allied',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 20,
    feePerYear: 104000,
    eligibility: 'B.Sc. MLT or an equivalent life-science degree with 50%.',
    summary:
      'Advanced diagnostics, laboratory quality management to ISO 15189, method verification, and a research dissertation using hospital laboratory data.',
    careers: ['Laboratory manager', 'Quality manager', 'Diagnostics R&D'],
  },
  {
    id: 'bsc-radiology',
    name: 'B.Sc. Radiology & Imaging Technology',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 40,
    feePerYear: 98000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Radiographic technique, CT, MRI, ultrasound, interventional radiology support and radiation protection, with rotations across the hospital’s imaging department.',
    careers: ['Radiographer', 'CT / MRI technologist', 'Cath-lab technologist'],
  },
  {
    id: 'msc-radiology',
    name: 'M.Sc. Radiology & Imaging Technology',
    school: 'allied',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 15,
    feePerYear: 108000,
    eligibility: 'B.Sc. Radiology & Imaging Technology or equivalent with 50%.',
    summary:
      'Advanced cross-sectional imaging, protocol optimisation, quality assurance in imaging, dose audit and a dissertation on imaging practice.',
    careers: ['Chief technologist', 'Imaging QA officer', 'Applications specialist'],
  },
  {
    id: 'bsc-optometry',
    name: 'B.Sc. Optometry',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 30,
    feePerYear: 94000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Refraction, binocular vision, contact-lens practice, low-vision rehabilitation and ocular disease screening, with a full clinical year in the hospital eye department.',
    careers: ['Optometrist', 'Contact-lens practitioner', 'Vision screening programmes'],
  },
  {
    id: 'bsc-ot-anaesthesia',
    name: 'B.Sc. Anaesthesia & Operation Theatre Technology',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 40,
    feePerYear: 96000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Anaesthesia machine and monitoring technology, sterilisation and asepsis, theatre workflow, positioning and emergency response, across nine functioning operation theatres.',
    careers: ['Anaesthesia technologist', 'OT technologist', 'CSSD supervisor'],
  },
  {
    id: 'bsc-cardiovascular',
    name: 'B.Sc. Cardiovascular Technology',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 25,
    feePerYear: 102000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Electrocardiography, echocardiography, cath-lab assistance, pacemaker follow-up and cardiac rehabilitation support, with rotations in the cardiology block.',
    careers: ['Cardiac technologist', 'Echo technician', 'Cath-lab technologist'],
  },
  {
    id: 'bsc-dialysis',
    name: 'B.Sc. Renal Dialysis Technology',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 25,
    feePerYear: 96000,
    eligibility: '10+2 with Physics, Chemistry and Biology, minimum 45% aggregate.',
    summary:
      'Haemodialysis and peritoneal dialysis practice, water-treatment and machine maintenance, vascular-access care and the management of dialysis emergencies.',
    careers: ['Dialysis technologist', 'Renal unit supervisor'],
  },
  {
    id: 'bsc-nutrition',
    name: 'B.Sc. Nutrition & Dietetics',
    school: 'allied',
    level: 'ug',
    entry: 'after-12',
    duration: '4 years (3 + 1 internship)',
    seats: 40,
    feePerYear: 88000,
    eligibility: '10+2 with Biology or Home Science, minimum 45% aggregate.',
    summary:
      'Clinical nutrition, therapeutic diet planning, food service management and community nutrition, with a supervised internship in the hospital dietetics department.',
    careers: ['Clinical dietitian', 'Community nutrition', 'Food service management'],
  },
  {
    id: 'mph',
    name: 'Master of Public Health (MPH)',
    school: 'allied',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 40,
    feePerYear: 98000,
    eligibility: 'Any graduate; preference to medical, pharmacy, nursing, allied-health and social-science graduates.',
    summary:
      'Epidemiology, biostatistics, health economics, health-systems management and implementation research, anchored by continuous fieldwork in eleven adopted villages and a supervised practicum.',
    careers: ['Programme manager', 'Epidemiologist', 'Health-systems consultant', 'NGO leadership'],
  },
  {
    id: 'msc-clinical-nutrition',
    name: 'M.Sc. Clinical Nutrition',
    school: 'allied',
    level: 'pg',
    entry: 'after-graduation',
    duration: '2 years',
    seats: 20,
    feePerYear: 96000,
    eligibility: 'B.Sc. Nutrition & Dietetics, Home Science or an equivalent life-science degree with 50%.',
    summary:
      'Advanced medical nutrition therapy, nutrition in critical care and renal disease, paediatric nutrition, and a dissertation using hospital dietetics data.',
    careers: ['Senior clinical dietitian', 'Nutrition support team', 'Academia'],
  },
  {
    id: 'phd-allied-health',
    name: 'Ph.D. in Allied Health Sciences',
    school: 'allied',
    level: 'doctoral',
    entry: 'after-pg',
    duration: '3–5 years',
    seats: 'As per supervisor availability',
    feePerYear: 85000,
    eligibility: 'A relevant master’s degree with 55%, through VRUET-RET and an interview.',
    summary:
      'Rehabilitation science, diagnostic technology, public health and implementation research, including a part-time route for practitioners in hospital employment.',
    careers: ['Allied-health academia', 'Rehabilitation research', 'Public-health research'],
  },
  {
    id: 'cert-emt',
    name: 'Certificate in Emergency Medical Technology',
    school: 'allied',
    level: 'diploma',
    entry: 'after-12',
    duration: '1 year',
    seats: 30,
    feeTotal: 58000,
    eligibility: '10+2 in any stream; a valid driving licence is an advantage.',
    summary:
      'Pre-hospital care: airway management, trauma immobilisation, basic and advanced life support, ambulance operations and triage, with rotations through the emergency department.',
    careers: ['Emergency medical technician', 'Ambulance service', 'Event medical cover'],
  },
]

/* ----------------------------------------------------------------- helpers */

export const programmeCount = programmes.length

export function byLevel(level) {
  return level === 'all' ? programmes : programmes.filter((p) => p.level === level)
}

export function bySchool(school) {
  return programmes.filter((p) => p.school === school)
}

export function byEntry(entry) {
  return programmes.filter((p) => p.entry === entry)
}

export function findProgramme(id) {
  return programmes.find((p) => p.id === id)
}

/** "₹1,42,000" — Indian digit grouping, no decimals. */
export function formatINR(value) {
  if (value == null) return null
  return '₹' + value.toLocaleString('en-IN', { maximumFractionDigits: 0 })
}

/** Short form used on cards: "₹1.42 L" / "₹78,000". */
export function formatFeeShort(programme) {
  if (programme.feeTotal) return `${formatINR(programme.feeTotal)} total`
  if (programme.feePerYear == null) return programme.feeNote || 'On application'
  if (programme.feePerYear >= 100000) {
    return `₹${(programme.feePerYear / 100000).toFixed(2).replace(/\.00$/, '')} L/yr`
  }
  return `${formatINR(programme.feePerYear)}/yr`
}
