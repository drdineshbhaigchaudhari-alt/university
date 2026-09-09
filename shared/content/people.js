/**
 * Faculty, university leadership and alumni.
 *
 * Every photograph is bound to exactly one identity across the whole site, so
 * no face appears under two names.
 */

export const leadership = [
  {
    id: 'sahni',
    name: 'Prof. (Dr.) Devendra Nath Sahni',
    shortName: 'Prof. (Dr.) D. N. Sahni',
    role: 'Vice-Chancellor',
    photo: '/assets/img/faculty-4.jpg',
    qualification: 'M.Pharm, Ph.D. (BHU), FIC',
    area: 'Medicinal chemistry, heterocyclic anti-infectives',
    remit: 'Chairs the Academic Council; accountable for academic standards and statutory compliance.',
    meta: '210 publications',
  },
  {
    id: 'vasudevan',
    name: 'Prof. (Dr.) Meera Vasudevan',
    shortName: 'Prof. (Dr.) Meera Vasudevan',
    role: 'Pro-Vice-Chancellor & Dean, Pharmaceutical Sciences',
    photo: '/assets/img/dean.jpg',
    qualification: 'M.Pharm, Ph.D. (NIPER Mohali)',
    area: 'Novel drug delivery systems, oral peptide carriers',
    remit: 'Research policy, doctoral programmes and inter-school curriculum coordination.',
    meta: 'h-index 44',
  },
  {
    id: 'kulkarni',
    name: 'Prof. (Dr.) Arvind Raghunath Kulkarni',
    shortName: 'Prof. (Dr.) A. R. Kulkarni',
    role: 'Registrar & Professor, Pharmaceutics',
    photo: '/assets/img/faculty-1.jpg',
    qualification: 'M.Pharm, Ph.D. (ICT Mumbai)',
    area: 'Solid-state pharmaceutics, quality by design, scale-up',
    remit: 'Examinations, admissions administration, records and statutory returns.',
    meta: '7 granted patents',
  },
  {
    id: 'deshmukh',
    name: 'Dr. Kabir Deshmukh',
    shortName: 'Dr. Kabir Deshmukh',
    role: 'Dean, Student Welfare & Associate Professor, Pharmacy Practice',
    photo: '/assets/img/faculty-3.jpg',
    qualification: 'Pharm.D, Ph.D. (JSS Mysuru)',
    area: 'Antimicrobial stewardship, medication review, de-prescribing',
    remit: 'Hostels, societies, counselling, anti-ragging and grievance redressal.',
    meta: 'Hospital ASP lead',
  },
]

/** Faculty with published profiles and photographs. */
export const faculty = [
  {
    id: 'vasudevan',
    name: 'Prof. (Dr.) Meera Vasudevan',
    role: 'Dean & Professor',
    school: 'pharmacy',
    department: 'Pharmaceutics',
    photo: '/assets/img/dean.jpg',
    area: 'Novel drug delivery systems, oral peptide carriers',
    qualification: 'M.Pharm, Ph.D. (NIPER Mohali)',
    meta: 'h-index 44 · world top-2% list',
    research:
      'Named in the Stanford / Elsevier world top-2% list for three consecutive years. Principal investigator on a ₹1.9 crore SERB project on enteric nanocarriers for oral peptide delivery; 148 publications.',
  },
  {
    id: 'kulkarni',
    name: 'Prof. (Dr.) Arvind R. Kulkarni',
    role: 'Professor & Head, Pharmaceutics',
    school: 'pharmacy',
    department: 'Pharmaceutics',
    photo: '/assets/img/faculty-1.jpg',
    area: 'Solid-state pharmaceutics, quality by design, scale-up',
    qualification: 'M.Pharm, Ph.D. (ICT Mumbai)',
    meta: '7 granted patents',
    research:
      'Co-inventor on seven granted patents covering co-amorphous dispersions. Runs the quality-by-design module and consults on scale-up for two CDMO partners.',
  },
  {
    id: 'bhatnagar',
    name: 'Dr. Sanya Bhatnagar',
    role: 'Associate Professor, Pharmacology',
    school: 'pharmacy',
    department: 'Pharmacology & Toxicology',
    photo: '/assets/img/faculty-2.jpg',
    area: 'Neuropharmacology, toxicology, pharmacovigilance',
    qualification: 'M.Pharm, Ph.D. (Panjab University)',
    meta: 'Chair, Institutional Animal Ethics Committee',
    research:
      'ICMR-funded work on neuroinflammation in chemotherapy-induced peripheral neuropathy. Chairs the IAEC and the hospital’s ADR monitoring centre.',
  },
  {
    id: 'deshmukh',
    name: 'Dr. Kabir Deshmukh',
    role: 'Associate Professor, Pharmacy Practice',
    school: 'pharmacy',
    department: 'Pharmacy Practice',
    photo: '/assets/img/faculty-3.jpg',
    area: 'Antimicrobial stewardship, medication review, de-prescribing',
    qualification: 'Pharm.D, Ph.D. (JSS Mysuru)',
    meta: 'Hospital ASP lead',
    research:
      'Runs the antimicrobial stewardship programme across four hospital units and published the de-prescribing protocol now used in eleven adopted villages.',
  },
  {
    id: 'mahajan',
    name: 'Dr. Ritika Mahajan',
    role: 'Associate Professor, Pharmaceutical Analysis',
    school: 'pharmacy',
    department: 'Pharmaceutical Analysis',
    photo: '/assets/img/faculty-5.jpg',
    area: 'Stability-indicating assays, impurity profiling, data integrity',
    qualification: 'M.Pharm, Ph.D. (Ved Reyan)',
    meta: '14 validated methods in industry use',
    research:
      'Developed fourteen validated stability-indicating assays now used by partner manufacturers; leads the school’s data-integrity training programme.',
  },
  {
    id: 'chandran',
    name: 'Dr. Naveen Chandran',
    role: 'Assistant Professor, Pharmacognosy',
    school: 'pharmacy',
    department: 'Pharmacognosy',
    photo: '/assets/img/faculty-6.jpg',
    area: 'Phytochemical isolation, AYUSH standardisation, HPTLC',
    qualification: 'M.Pharm, Ph.D. (Amrita)',
    meta: 'Curator, medicinal-plant garden',
    research:
      'AYUSH-funded standardisation of six polyherbal formulations. Curates the two-acre medicinal-plant garden and its voucher-specimen herbarium.',
  },
  {
    id: 'qureshi',
    name: 'Dr. Imran Qureshi',
    role: 'Assistant Professor, Regulatory Affairs',
    school: 'pharmacy',
    department: 'Regulatory Affairs',
    photo: '/assets/img/faculty-7.jpg',
    area: 'CTD/eCTD dossiers, CDSCO & USFDA pathways, labelling law',
    qualification: 'M.Pharm, Ph.D. (Jamia Hamdard)',
    meta: '9 years in industry before academia',
    research:
      'Teaches the regulatory-affairs specialisation and coordinates the mock-inspection exercise run each April on the student pilot plant.',
  },
  {
    id: 'sahni',
    name: 'Prof. (Dr.) D. N. Sahni',
    role: 'Vice-Chancellor & Professor',
    school: 'pharmacy',
    department: 'Pharmaceutical Chemistry',
    photo: '/assets/img/faculty-4.jpg',
    area: 'Medicinal chemistry, heterocyclic anti-infectives',
    qualification: 'M.Pharm, Ph.D. (BHU), FIC',
    meta: '210 publications',
    research:
      'Twenty-six years of teaching medicinal chemistry before taking up administration; continues to supervise doctoral candidates in heterocyclic synthesis.',
  },
]

/**
 * Additional faculty listed without photographs. This is the honest way to
 * publish a directory: names and credentials for everyone, portraits for those
 * who have supplied one.
 */
export const facultyRegister = [
  { name: 'Prof. (Dr.) Sudha Raghavan', designation: 'Professor', school: 'medical', department: 'General Medicine', qualification: 'MD (Medicine), DNB', area: 'Diabetology, metabolic medicine' },
  { name: 'Prof. (Dr.) Balbir Singh Grewal', designation: 'Professor & Head', school: 'medical', department: 'General Surgery', qualification: 'MS (Surgery), FMAS', area: 'Minimal-access and hepatobiliary surgery' },
  { name: 'Dr. Harkirat Bajwa', designation: 'Professor', school: 'medical', department: 'Nephrology', qualification: 'MD, DM (Nephrology)', area: 'Renal replacement therapy, transplant medicine' },
  { name: 'Dr. Ananya Bose', designation: 'Associate Professor', school: 'medical', department: 'Paediatrics', qualification: 'MD (Paediatrics)', area: 'Neonatology, developmental paediatrics' },
  { name: 'Dr. Vikramjit Sekhon', designation: 'Associate Professor', school: 'medical', department: 'Anaesthesiology', qualification: 'MD (Anaesthesiology), IDCCM', area: 'Critical care, regional anaesthesia' },
  { name: 'Dr. Pooja Chaturvedi', designation: 'Assistant Professor', school: 'medical', department: 'Pathology', qualification: 'MD (Pathology)', area: 'Histopathology, immunohistochemistry' },
  { name: 'Dr. Mohammad Ashraf Wani', designation: 'Assistant Professor', school: 'medical', department: 'Community Medicine', qualification: 'MD (Community Medicine)', area: 'Epidemiology, immunisation programmes' },

  { name: 'Prof. (Dr.) Gurpreet Kaur Sandhu', designation: 'Principal & Professor', school: 'nursing', department: 'Medical-Surgical Nursing', qualification: 'M.Sc. Nursing, Ph.D.', area: 'Patient safety, nursing education' },
  { name: 'Dr. Elizabeth Thomas', designation: 'Associate Professor', school: 'nursing', department: 'Obstetrics & Gynaecological Nursing', qualification: 'M.Sc. Nursing, Ph.D.', area: 'Maternal health, respectful maternity care' },
  { name: 'Mrs. Rekha Devi Yadav', designation: 'Associate Professor', school: 'nursing', department: 'Community Health Nursing', qualification: 'M.Sc. Nursing', area: 'Home-based care, village health programmes' },
  { name: 'Mr. Joseph Kuruvilla', designation: 'Assistant Professor', school: 'nursing', department: 'Mental Health Nursing', qualification: 'M.Sc. Nursing', area: 'Psychiatric rehabilitation, de-escalation practice' },
  { name: 'Mrs. Simranjeet Kaur', designation: 'Assistant Professor', school: 'nursing', department: 'Paediatric Nursing', qualification: 'M.Sc. Nursing', area: 'Neonatal nursing, simulation teaching' },

  { name: 'Prof. (Dr.) Rajesh Nambiar', designation: 'Professor & Head', school: 'allied', department: 'Physiotherapy', qualification: 'MPT (Musculoskeletal), Ph.D.', area: 'Manual therapy, sports rehabilitation' },
  { name: 'Dr. Shalini Prabhu', designation: 'Associate Professor', school: 'allied', department: 'Physiotherapy', qualification: 'MPT (Neurology), Ph.D.', area: 'Stroke rehabilitation, gait retraining' },
  { name: 'Dr. Tejinder Pal Singh', designation: 'Associate Professor', school: 'allied', department: 'Medical Laboratory Sciences', qualification: 'M.Sc., Ph.D. (Microbiology)', area: 'Molecular diagnostics, antimicrobial resistance' },
  { name: 'Dr. Nafisa Merchant', designation: 'Assistant Professor', school: 'allied', department: 'Public Health', qualification: 'MBBS, MPH, Ph.D.', area: 'Implementation research, health economics' },
  { name: 'Mr. Aditya Ranganathan', designation: 'Assistant Professor', school: 'allied', department: 'Radiology & Imaging', qualification: 'M.Sc. Radiology & Imaging Technology', area: 'Cross-sectional imaging protocols, dose audit' },
  { name: 'Ms. Kavya Menon', designation: 'Assistant Professor', school: 'allied', department: 'Nutrition & Dietetics', qualification: 'M.Sc. Clinical Nutrition, RD', area: 'Critical-care nutrition, renal diets' },

  { name: 'Dr. Shubhangi Patil', designation: 'Associate Professor', school: 'pharmacy', department: 'Pharmaceutics', qualification: 'M.Pharm, Ph.D.', area: 'Transdermal systems, in-vitro release modelling' },
  { name: 'Dr. Yash Bhardwaj', designation: 'Assistant Professor', school: 'pharmacy', department: 'Pharmaceutical Chemistry', qualification: 'M.Pharm, Ph.D.', area: 'Computer-aided drug design, docking studies' },
  { name: 'Dr. Lakshmi Narayanan', designation: 'Assistant Professor', school: 'pharmacy', department: 'Pharmacology', qualification: 'M.Pharm, Ph.D.', area: 'Cardiovascular pharmacology, screening models' },
  { name: 'Mrs. Preeti Malhotra', designation: 'Assistant Professor', school: 'pharmacy', department: 'Pharmacy Practice', qualification: 'Pharm.D', area: 'Therapeutic drug monitoring, patient counselling' },
  { name: 'Mr. Sameer Khatri', designation: 'Assistant Professor', school: 'pharmacy', department: 'Pharmaceutical Analysis', qualification: 'M.Pharm', area: 'Chromatographic method development' },
]

export const alumni = [
  {
    id: 'nanda',
    name: 'Aarushi Nanda',
    photo: '/assets/img/alumni-1.jpg',
    programme: 'B.Pharm 2021',
    now: 'Formulation Scientist, Sun Pharma',
    badge: '₹9.2 LPA',
    quote:
      'The formulation lab is the reason I got this job. I had already run a 16-station tablet press and written up a dissolution profile before my first interview, so the technical round felt like a conversation rather than a test.',
  },
  {
    id: 'kohli',
    name: 'Devansh Kohli',
    photo: '/assets/img/alumni-4.jpg',
    programme: 'M.Pharm Pharmaceutics 2022',
    now: 'Senior Research Associate, Dr. Reddy’s',
    badge: '₹11.5 LPA',
    quote:
      'My dissertation on a nanostructured lipid carrier turned into two publications and a patent filing. That file was effectively the whole of my second interview.',
  },
  {
    id: 'raichand',
    name: 'Tanvi Raichand',
    photo: '/assets/img/alumni-3.jpg',
    programme: 'Pharm.D 2023',
    now: 'Clinical Pharmacist, Max Healthcare',
    badge: 'Clinical practice',
    quote:
      'Six years of Pharm.D here meant six years of ward rounds in our own hospital. On day one at Max I was already comfortable presenting a medication review to a consultant.',
  },
  {
    id: 'sheikh',
    name: 'Farhan Sheikh',
    photo: '/assets/img/alumni-5.jpg',
    programme: 'B.Pharm 2020',
    now: 'CRA II, IQVIA',
    badge: '₹7.8 LPA',
    quote:
      'The GCP module was taught by someone who had actually monitored sites, and it showed the moment I sat my CRA interview.',
  },
  {
    id: 'iyer',
    name: 'Sneha Iyer',
    photo: '/assets/img/alumni-2.jpg',
    programme: 'M.Pharm Pharmacology 2021',
    now: 'Pharmacovigilance Lead, Parexel',
    badge: '₹7.4 LPA',
    quote:
      'We wrote a hundred case narratives in class using anonymised reports from the hospital’s own ADR committee. That is not something you can simulate from a textbook.',
  },
  {
    id: 'sandhu',
    name: 'Yuvraj Sandhu',
    photo: '/assets/img/alumni-6.jpg',
    programme: 'B.Pharm 2019',
    now: 'Founder, Sandhu Lifesciences',
    badge: 'Entrepreneurship',
    quote:
      'I started a surgical-supplies distribution business in my final year through the BioNest incubator. It now employs fourteen people across two districts.',
  },
]
