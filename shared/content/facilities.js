/** Laboratories, hospital, library and digital infrastructure. */

export const laboratories = [
  {
    id: 'chemistry',
    name: 'Pharmaceutical Chemistry Lab',
    school: 'pharmacy',
    image: '/assets/img/lab-flasks.jpg',
    imageAlt: 'Volumetric glassware holding coloured solutions',
    blurb:
      'Synthesis benches with fume extraction, reflux and distillation sets, melting-point and refractometry stations.',
    equipment: [
      'Fume hoods with scrubber extraction (6 bays)',
      'Reflux, distillation and Dean–Stark assemblies',
      'Digital melting-point apparatus and Abbe refractometer',
      'Rotary evaporators and vacuum pumps',
      'Magnetic stirrer–hotplates with temperature probes',
    ],
  },
  {
    id: 'cif',
    name: 'Central Instrumentation Facility',
    school: 'pharmacy',
    image: '/assets/img/lab-instrumentation.jpg',
    imageAlt: 'Analytical instrument benches in a long laboratory',
    blurb:
      'LC-MS/MS, GC-MS, FTIR, DSC/TGA, Zetasizer, probe sonicator and a lyophiliser, bookable by project students seven days a week.',
    equipment: [
      'LC-MS/MS triple quadrupole',
      'GC-MS with headspace sampler',
      'FTIR with ATR accessory',
      'DSC and TGA thermal analysers',
      'Dynamic light scattering / zeta potential analyser',
      'Probe sonicator and high-pressure homogeniser',
      'Bench-top lyophiliser',
    ],
  },
  {
    id: 'analysis',
    name: 'Pharmaceutical Analysis & QC Lab',
    school: 'pharmacy',
    image: '/assets/img/lab-research.jpg',
    imageAlt: 'Researcher working at an analytical bench',
    blurb:
      'Four HPLC systems, HPTLC, double-beam UV-Vis, Karl Fischer titrator and ICH-compliant stability chambers.',
    equipment: [
      'HPLC with UV, PDA and fluorescence detectors (4 systems)',
      'HPTLC with scanner and documentation system',
      'Double-beam UV-Visible spectrophotometers',
      'Karl Fischer and potentiometric titrators',
      'ICH-compliant stability chambers (25/60, 30/65, 40/75)',
      'Flame photometer and pH/conductivity meters',
    ],
  },
  {
    id: 'formulation',
    name: 'Pharmaceutics & Formulation Development Lab',
    school: 'pharmacy',
    image: '/assets/img/lab-pipette.jpg',
    imageAlt: 'Pipetting a sample into a microplate',
    blurb:
      'Dissolution testers (USP I–IV), Franz diffusion cells, Brookfield viscometer, homogenisers and tablet-testing rigs.',
    equipment: [
      'Dissolution test apparatus, USP types I–IV',
      'Franz diffusion cell assembly (6 cells)',
      'Brookfield viscometer and texture analyser',
      'Tablet hardness, friability and disintegration testers',
      'Sieve shaker, tap-density and angle-of-repose apparatus',
      'Laminar airflow benches for sterile compounding',
    ],
  },
  {
    id: 'pilot',
    name: 'Pilot Plant & Machine Room',
    school: 'pharmacy',
    image: '/assets/img/blister-packs.jpg',
    imageAlt: 'Blister-packed tablets and capsules',
    blurb:
      '16-station rotary tablet press, fluidised-bed processor, coating pan, capsule filler and blister-packing machine.',
    equipment: [
      '16-station rotary tablet press',
      'Fluidised-bed processor with top-spray granulation',
      'Rapid mixer granulator and multi-mill',
      'Automatic coating pan',
      'Semi-automatic capsule filling machine',
      'Blister packing and strip packing machines',
      'Ointment and cream manufacturing vessel',
    ],
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology & Toxicology Lab',
    school: 'pharmacy',
    image: '/assets/img/lab-microscopy.jpg',
    imageAlt: 'Researcher using a laboratory microscope',
    blurb:
      'Rotarod, actophotometer, plethysmometer, digital polygraph, Langendorff apparatus and an ELISA reader.',
    equipment: [
      'Rotarod, actophotometer and analgesiometer',
      'Plethysmometer and digital polygraph',
      'Langendorff heart perfusion assembly',
      'Organ bath with transducers',
      'ELISA plate reader and washer',
      'Cooling centrifuge and −80 °C deep freezer',
    ],
  },
  {
    id: 'animal-house',
    name: 'CPCSEA-registered Animal House',
    school: 'pharmacy',
    image: '/assets/img/animal-house.jpg',
    imageAlt: 'Procedure room inside the animal house facility',
    blurb:
      'Separate quarantine, breeding and experimental rooms with controlled environment and an active Institutional Animal Ethics Committee.',
    equipment: [
      'Segregated quarantine, breeding and experimental rooms',
      'Environmental control: 22 ± 3 °C, 30–70% RH, 12-hour light cycle',
      'Individually ventilated cage racks',
      'Dedicated procedure and post-operative recovery room',
      'Autoclave, bedding disposal and carcass management systems',
    ],
    note: 'All animal work requires prior IAEC approval. Practical batches here are capped at eight students.',
  },
  {
    id: 'pharmacognosy',
    name: 'Pharmacognosy Lab & Herbal Garden',
    school: 'pharmacy',
    image: '/assets/img/capsules.jpg',
    imageAlt: 'Capsules arranged on a coloured surface',
    blurb:
      'Soxhlet and Clevenger assemblies, rotary evaporators, column chromatography and a two-acre medicinal-plant garden.',
    equipment: [
      'Soxhlet and Clevenger extraction assemblies',
      'Column and flash chromatography systems',
      'Rotary evaporators and lyophiliser access',
      'Compound and stereo microscopes with camera',
      'Two-acre medicinal-plant garden with a voucher-specimen herbarium',
    ],
  },
  {
    id: 'anatomy',
    name: 'Human Anatomy & Physiology Lab',
    school: 'shared',
    image: '/assets/img/anatomy-heart.jpg',
    imageAlt: 'Anatomical model of the human heart',
    blurb:
      'Sectional and organ models, haemocytometry, sphygmomanometry, spirometry and an ECG demonstration station.',
    equipment: [
      'Full-body sectional and individual organ models',
      'Articulated and disarticulated skeletons',
      'Haemocytometers, haemoglobinometers and centrifuges',
      'Sphygmomanometers, stethoscopes and pulse oximeters',
      'Computerised spirometer and ECG demonstration station',
    ],
  },
  {
    id: 'simulation',
    name: 'Clinical Simulation Centre & Model Pharmacy',
    school: 'shared',
    image: '/assets/img/pharmacy-dispensing.jpg',
    imageAlt: 'Pharmacist reaching for stock on a dispensary shelf',
    blurb:
      'Eight high-fidelity manikins, a working dispensary layout with hospital software, standardised patients and recorded counselling booths.',
    equipment: [
      'Eight high-fidelity adult, paediatric and birthing manikins',
      'Fourteen-bed simulation ward with piped gases',
      'Model pharmacy running the hospital dispensing system',
      'Four recorded counselling booths for reviewed practice',
      'Standardised-patient programme with trained actors',
    ],
  },
  {
    id: 'digital',
    name: 'Pharmacoinformatics & Computing Lab',
    school: 'shared',
    image: '/assets/img/computer-lab.jpg',
    imageAlt: 'Rows of computer laboratory workstations',
    blurb:
      'Schrödinger, GROMACS, AutoDock, SAS and R on a 96-core compute node for docking, molecular dynamics and biostatistics.',
    equipment: [
      '60 workstations plus a 96-core, 512 GB compute node',
      'Schrödinger Maestro, GROMACS, AutoDock Vina',
      'SAS, SPSS and R with RStudio Server',
      'ChemDraw and reference-management licences',
      'Campus-wide access to DELNET and J-Gate',
    ],
  },
  {
    id: 'library',
    name: 'Knowledge Resource Centre',
    school: 'shared',
    image: '/assets/img/library-hall.jpg',
    imageAlt: 'Reading galleries inside the Knowledge Resource Centre',
    blurb:
      '68,000 volumes, the Indian and US Pharmacopoeias, 14,000 e-journals via DELNET and J-Gate, open until midnight.',
    equipment: [
      '68,000 print volumes across three floors',
      'Indian, British and US Pharmacopoeias, current editions',
      '14,000 e-journals through DELNET and J-Gate',
      '340 reading seats plus 12 bookable discussion rooms',
      'Open 08:00–24:00 in term; 24 hours during examinations',
    ],
  },
]

export const hospital = {
  name: 'Ved Reyan Medical College & Hospital',
  image: '/assets/img/teaching-hospital.jpg',
  imageAlt: 'Exterior of the university teaching hospital',
  summary:
    'A 750-bed multi-speciality teaching hospital on campus, owned and staffed by the university. It is the teaching platform for the medical, nursing, allied-health and clinical-pharmacy programmes, and it runs a genuine service load — which is the point.',
  facts: [
    { value: '750', label: 'Sanctioned beds' },
    { value: '14', label: 'Clinical specialities' },
    { value: '9', label: 'Operation theatres' },
    { value: '60', label: 'Critical-care beds' },
  ],
  features: [
    'NABH-accredited (full accreditation, valid to 2027)',
    'NABL-accredited central laboratory to ISO 15189',
    'Four super-speciality units: cardiology, neurology, neurosurgery, paediatric surgery',
    '24×7 emergency department with a dedicated triage and resuscitation bay',
    'Adverse drug reaction monitoring centre run jointly with the School of Pharmaceutical Sciences',
    'Antimicrobial stewardship programme across four inpatient units',
    'Outpatient footfall of roughly 2,100 per day across all specialities',
  ],
}

export const campusInfrastructure = [
  {
    title: 'Six academic blocks',
    text: 'Lecture theatres from 60 to 240 seats, all with recording facilities, plus 38 tutorial rooms sized for a batch of twenty.',
  },
  {
    title: 'Seven residence halls',
    text: 'Separate halls for men and women with resident wardens, Wi-Fi throughout, and triple, twin, single and air-conditioned options.',
  },
  {
    title: 'Sports complex',
    text: 'Eight-lane swimming pool, 400 m athletics track, cricket ground, four floodlit courts and an indoor complex with a gymnasium.',
  },
  {
    title: '900-seat auditorium',
    text: 'Used for convocation, conferences and the weekly professional-practice lecture slot, with simultaneous overflow streaming.',
  },
  {
    title: 'Health centre',
    text: 'A 24×7 on-campus health centre with two resident medical officers, plus free consultation at the teaching hospital for students and staff.',
  },
  {
    title: 'Sustainability',
    text: 'Rooftop solar generation covering 38% of daytime campus load, a sewage treatment plant, and rainwater harvesting across all six blocks.',
  },
]
