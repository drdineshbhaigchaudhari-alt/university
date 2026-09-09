/** Admissions: process, entrance test, eligibility, scholarships, FAQs. */

export const applicationSteps = [
  {
    title: 'Register online',
    text: 'Create an applicant account with your name, date of birth, mobile number and email. One registration covers every programme you are eligible for — you do not fill separate forms.',
  },
  {
    title: 'Choose up to three programmes',
    text: 'List them in order of preference. If you are not offered your first choice, you are automatically considered for the next, so there is no advantage in listing only one.',
  },
  {
    title: 'Upload documents',
    text: 'Class X and XII marksheets, a photograph and signature, category certificate if applicable, and your degree transcripts for postgraduate applications. Scans are accepted; originals are verified at joining.',
  },
  {
    title: 'Sit VRUET, or opt for merit-based consideration',
    text: 'Book a VRUET slot in the 18–24 May window, or tick the merit-based route and be assessed on your qualifying marks. You may do both — we take whichever places you higher.',
  },
  {
    title: 'Counselling and seat allotment',
    text: 'Merit lists are published with rank and score. Counselling is held online with a document-verification call; a seat is held for 72 hours once offered.',
  },
  {
    title: 'Accept and join',
    text: 'Pay the first instalment, complete medical fitness screening, and report on the joining date printed on your admission letter. Hostel allotment is confirmed at this stage.',
  },
]

export const entranceTest = {
  name: 'VRUET 2026',
  fullName: 'Ved Reyan University Entrance Test',
  window: '18–24 May 2026',
  mode: 'Computer-based, at test centres in 34 cities, or remotely proctored',
  duration: '150 minutes',
  fee: '₹1,200 (₹600 for reserved categories)',
  papers: [
    {
      code: 'VRUET-UG',
      for: 'D.Pharm, B.Pharm, Pharm.D, B.Sc. Nursing and all allied-health bachelor programmes',
      pattern: '120 multiple-choice questions: Physics 30, Chemistry 40, Biology 40, English & reasoning 10',
      marking: '+4 for a correct answer, −1 for an incorrect answer, 0 if unattempted',
    },
    {
      code: 'VRUET-PG',
      for: 'M.Pharm, M.Sc. programmes, MPT, MPH and M.Sc. Nursing',
      pattern: '100 multiple-choice questions on the relevant bachelor syllabus, plus research aptitude',
      marking: '+4 for a correct answer, −1 for an incorrect answer, 0 if unattempted',
    },
    {
      code: 'VRUET-RET',
      for: 'Ph.D. programmes across all four schools',
      pattern: '70 questions on the subject discipline and 30 on research methodology, followed by an interview',
      marking: '+2 for a correct answer, no negative marking',
    },
  ],
  exemptions: [
    'GPAT-qualified candidates are exempt from VRUET-PG for M.Pharm admission',
    'NEET-PG and NEET-SS govern all MD/MS and DM/M.Ch. admission — VRUET does not apply',
    'NEET-UG governs MBBS admission — VRUET does not apply',
    'UGC-NET, CSIR-NET, GATE and GPAT-JRF holders are exempt from VRUET-RET',
  ],
  notApplicable:
    'MBBS, MD, MS and DM/M.Ch. admissions run entirely through NEET and the state counselling authority. The university has no discretion over those seats and does not operate a management quota for them.',
}

export const eligibilityTable = [
  { programme: 'D.Pharm', qualification: '10+2 with PCB or PCM', minimum: '45%', route: 'VRUET-UG or merit' },
  { programme: 'B.Pharm', qualification: '10+2 with PCB or PCM', minimum: '50% (45% reserved)', route: 'VRUET-UG or merit' },
  { programme: 'B.Pharm (Lateral)', qualification: 'D.Pharm (PCI-approved)', minimum: '50%', route: 'Merit + interview' },
  { programme: 'Pharm.D', qualification: '10+2 with PCB, or D.Pharm', minimum: '50%', route: 'VRUET-UG or merit' },
  { programme: 'M.Pharm (all)', qualification: 'B.Pharm', minimum: '55%', route: 'GPAT or VRUET-PG' },
  { programme: 'Pharm.D (Post Bacc.)', qualification: 'B.Pharm', minimum: '50%', route: 'Merit + interview' },
  { programme: 'MBBS', qualification: '10+2 with PCB and English', minimum: '50% (40% reserved)', route: 'NEET-UG only' },
  { programme: 'MD / MS', qualification: 'MBBS with internship', minimum: 'As per NMC', route: 'NEET-PG only' },
  { programme: 'B.Sc. Nursing', qualification: '10+2 with PCB and English', minimum: '45%', route: 'VRUET-UG or merit' },
  { programme: 'Post-Basic B.Sc. Nursing', qualification: 'GNM with RN/RM registration', minimum: 'Pass', route: 'Merit + interview' },
  { programme: 'M.Sc. Nursing', qualification: 'B.Sc. / Post-Basic B.Sc. Nursing', minimum: '55% + 1 yr experience', route: 'VRUET-PG' },
  { programme: 'BPT', qualification: '10+2 with PCB', minimum: '50%', route: 'VRUET-UG or merit' },
  { programme: 'MPT', qualification: 'BPT with internship', minimum: '50%', route: 'VRUET-PG' },
  { programme: 'Allied bachelor programmes', qualification: '10+2 with PCB', minimum: '45%', route: 'VRUET-UG or merit' },
  { programme: 'MPH', qualification: 'Any bachelor degree', minimum: '50%', route: 'VRUET-PG + interview' },
  { programme: 'Ph.D. (all schools)', qualification: 'Relevant master’s degree', minimum: '55%', route: 'VRUET-RET + interview' },
]

export const scholarships = [
  {
    name: 'Merit scholarship',
    award: '25% – 100% of tuition',
    basis:
      'VRUET rank or qualifying-examination aggregate. 100% for the top 10 VRUET-UG ranks, 50% for 90%+ in 10+2 science, 25% for 80%+.',
  },
  {
    name: 'National examination award',
    award: '50% – 100% of tuition',
    basis:
      'GPAT, NEET, NIPER JEE or GATE rank holders. Applied for the full duration of the programme subject to a 7.0 CGPA.',
  },
  {
    name: 'Ved Reyan Sisters’ Concession',
    award: '20% of tuition',
    basis: 'A second sibling studying concurrently at the university, on the later admission.',
  },
  {
    name: 'Defence & paramilitary dependants',
    award: '25% of tuition',
    basis: 'Wards of serving or retired armed-forces, paramilitary and state police personnel, on documentary proof.',
  },
  {
    name: 'Sports scholarship',
    award: '25% – 75% of tuition',
    basis: 'Representation at state level or above in a recognised discipline, verified by the sports council.',
  },
  {
    name: 'Need-based hardship fund',
    award: 'Up to 60% of tuition',
    basis:
      'Assessed on family income by a committee that does not include the applicant’s own teachers. Confidential; no announcement is made.',
  },
]

export const scholarshipNote =
  'You are considered automatically at the time of admission — there is no separate application. Only one tuition scholarship applies at a time; where you qualify for more than one, the higher award is granted. Scholarships cover tuition only, not hostel, mess or examination charges.'

export const internationalAdmissions = {
  intro:
    'Students from 68 countries currently study at Ved Reyan. International applications are handled by a dedicated office that will tell you plainly whether a programme is open to you before you pay anything.',
  points: [
    'Applications through the international office, or a designated national-level equivalence route where one exists',
    'Equivalence of the qualifying examination is determined by the Association of Indian Universities',
    'English proficiency: IELTS 6.0, TOEFL iBT 70, or medium-of-instruction certification',
    'Assistance with the student visa invitation letter, FRRO registration and residential permit',
    'Guaranteed hostel accommodation for the full duration of the programme',
    'An orientation week covering local registration, banking, healthcare and transport',
  ],
  caution:
    'MBBS admission for international candidates is governed by NEET-UG and by the NMC regulations on foreign nationals and NRI seats. If an agent tells you otherwise, they are wrong. The university does not appoint commission-paid recruitment agents.',
}

export const admissionFaqs = [
  {
    q: 'Is the university recognised, and are the pharmacy programmes PCI approved?',
    a: 'Ved Reyan University is a state private university recognised by the UGC under Section 2(f). The D.Pharm, B.Pharm, Pharm.D and M.Pharm programmes are approved by the Pharmacy Council of India; MBBS and the MD/MS programmes are recognised by the National Medical Commission; and the nursing programmes are approved by the Indian Nursing Council and the State Nursing Council. The full approval register, with the scope and validity of each, is published on the About page.',
  },
  {
    q: 'Do I have to sit VRUET, or can I apply on my board marks?',
    a: 'It depends on the programme. MBBS and MD/MS admissions run entirely through NEET and the state counselling authority. For pharmacy, nursing and allied-health programmes you may apply either through VRUET or on the strength of your qualifying-examination marks, and we consider whichever route places you higher. GPAT and NEET-PG qualified candidates are exempt from VRUET for the relevant postgraduate programmes.',
  },
  {
    q: 'What scholarships are available, and how do I qualify?',
    a: 'Six schemes run in parallel: merit scholarships of 25–100% of tuition; a national-examination award for GPAT, NEET and NIPER JEE rank holders; the Sisters’ Concession for a second sibling; a defence and paramilitary dependants’ waiver; a sports scholarship at state level and above; and a need-based hardship fund assessed on family income. You are considered automatically at admission — there is no separate application.',
  },
  {
    q: 'Is hostel accommodation guaranteed?',
    a: 'Accommodation is guaranteed for all first-year students who apply by the date printed on their admission letter, and for every student in a programme with compulsory clinical postings. Returning students are allotted by a published seniority-and-conduct rule. Rooms are available as triple, twin and single occupancy, with a separate air-conditioned block.',
  },
  {
    q: 'What happens if I withdraw after paying?',
    a: 'Refunds follow the UGC fee-refund schedule: a full refund less a processing charge if you notify us before the last date of admission, tapering thereafter. Original documents are returned within seven working days of a withdrawal request — the university does not retain certificates as security, and you should be wary of any institution that does.',
  },
  {
    q: 'Is there a management quota or a donation route?',
    a: 'No. Seats are filled on published merit and, for MBBS and MD/MS, entirely through NEET and state counselling, over which the university has no discretion. Anyone offering you a seat in exchange for a payment outside the notified fee is not acting for this university. Report it to the Registrar.',
  },
  {
    q: 'Can undergraduates really join funded research projects?',
    a: 'Yes, and it is a written condition of every centre’s internal funding: each centre of excellence carries at least four undergraduate project students per year. Applications open in the fifth semester and are decided on a short written proposal plus an interview with the centre coordinator. Selected students receive a monthly contingency stipend and are named on any resulting publication.',
  },
  {
    q: 'What does the placement cell actually do?',
    a: 'Training starts in the fifth semester, not the final one: aptitude and technical drills, mock group discussions, one-to-one CV clinics and a compulsory industry-visit series. The cell then runs on-campus drives from August through March. Students not seeking placement are moved into a separate higher-studies mentoring track and are excluded from the placement denominator.',
  },
]

export const pharmacyFaqs = [
  {
    q: 'B.Pharm, Pharm.D or D.Pharm — which should I choose?',
    a: 'D.Pharm (2 years) is the fastest route to a registered-pharmacist licence and to community or hospital dispensing work. B.Pharm (4 years) is the mainstream degree and the one most industry roles ask for — formulation, quality, regulatory, production, clinical research. Pharm.D (6 years) is a clinical qualification: it prepares you to work on ward rounds as a clinical pharmacist, and it is the wrong choice if you want a manufacturing career. If you are undecided, B.Pharm keeps the most doors open, and you can move into clinical practice afterwards through Pharm.D (Post Baccalaureate) or M.Pharm Pharmacy Practice.',
  },
  {
    q: 'Is Mathematics acceptable instead of Biology in 10+2?',
    a: 'Yes for D.Pharm and B.Pharm: Physics and Chemistry plus either Biology or Mathematics is acceptable. Pharm.D requires Biology. Students entering B.Pharm from a Mathematics background take a compulsory bridge module in human biology during the first semester — it is not graded towards the degree, but attendance is mandatory.',
  },
  {
    q: 'How much laboratory time will I actually get?',
    a: 'B.Pharm students have between twelve and sixteen timetabled laboratory hours a week depending on the semester, in batches capped at twenty. Beyond the timetable, the Central Instrumentation Facility and the Formulation Development Lab operate a booking system open to any student with a supervisor’s countersignature, including at weekends. Instrument log books are checked, so what you actually operated is a matter of record — useful when an interviewer asks.',
  },
  {
    q: 'Do I need GPAT for M.Pharm admission here?',
    a: 'No, but it helps. GPAT-qualified candidates are exempt from our VRUET-PG test, are considered first in the merit list, and are eligible for the AICTE stipend where applicable. Candidates without GPAT are admitted on VRUET-PG plus B.Pharm aggregate. Both routes lead to the same degree and the same dissertation supervision.',
  },
  {
    q: 'Will I get a registered-pharmacist licence?',
    a: 'D.Pharm and B.Pharm graduates are eligible to register with a State Pharmacy Council under the Pharmacy Act, 1948; registration itself is granted by the Council, not by the university. The school maintains your 500-hour practical-training record, provides attested transcripts and the completion certificate, and runs a documentation clinic each March for graduating students filing their applications.',
  },
  {
    q: 'What if I want to go abroad after B.Pharm?',
    a: 'Around one in nine of our B.Pharm graduates goes on to a master’s degree outside India, most often in the United Kingdom, Canada, Australia or Germany. The school runs a higher-studies mentoring track from the sixth semester: transcript and syllabus attestation, WES evaluation guidance, statement-of-purpose review and referee coordination. We do not operate a paid overseas-placement agency, and we will not recommend one.',
  },
  {
    q: 'Is a laptop required?',
    a: 'Not for the first year. From the third semester onwards you will need one for biostatistics, pharmacoinformatics coursework and dissertation writing. The Pharmacoinformatics Lab has 60 workstations for students who prefer not to buy one, and the modelling software is licensed to run there rather than on personal machines.',
  },
]

export const hostelFees = [
  { type: 'Triple occupancy, non-AC', perYear: 78000 },
  { type: 'Twin occupancy, non-AC', perYear: 96000 },
  { type: 'Twin occupancy, air-conditioned', perYear: 124000 },
  { type: 'Single occupancy, air-conditioned', perYear: 158000 },
]

export const otherCharges = [
  { item: 'Admission processing (one time)', amount: 12000 },
  { item: 'University registration (one time)', amount: 8000 },
  { item: 'Examination fee (per semester)', amount: 4500 },
  { item: 'Laboratory & consumables (per year)', amount: 14000 },
  { item: 'Mess charges (per year, optional plans)', amount: 62000 },
  { item: 'Refundable security deposit', amount: 15000 },
]
