import { Patient, RxOrder } from '../types/clinical';

export const INITIAL_PATIENTS: Patient[] = [
  {
    id: 'pt-eleanor-vance',
    name: 'Eleanor Vance',
    age: 58,
    gender: 'Female',
    mrn: '#MS-84920',
    room: '304B',
    department: 'Cardiology',
    bloodType: 'A+',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9H9tMRdqXwvgM0lgfDKkjmIM_KdEIyTNXBpI4HR8z0hHn5gYWEeAPQZmD_Lz7g7xxyx3N4Bamhp9pMdF8BgBlIjgAdXpgcXTtkmB0lF-3m-th4CIvTs4CpQmVeGlIkqmM2xHAZznA_VJbVPTQVAMi_RaNIsBb-bdJ99yEj6HUPKTKvR04g04hBETCQQMVGFHSYm6tA40CfD8acUUz4i5_eoIUK4tKEJvVyZRq_IB4KJOf2qU1SRm9mw',
    allergies: [
      {
        id: 'all-1',
        allergen: 'PENICILLIN',
        severity: 'Severe',
        reaction: 'Anaphylaxis, severe bronchospasm, facial angioedema (2014)',
        confirmedDate: '2014-08-14',
        notes: 'Absolute contraindication: Penicillins, Amoxicillin, Ampicillin, Piperacillin/Tazobactam. Use extreme caution with 1st gen cephalosporins.'
      }
    ],
    alerts: [
      'SEVERE PENICILLIN ALLERGY',
      'NPO Post-Midnight',
      'Fall Risk'
    ],
    acuity: 'Stable',
    admitDate: 'Oct 21, 2026',
    attendingDoctor: 'Dr. Marcus Chen, MD',
    vitals: {
      bpSystolic: 128,
      bpDiastolic: 82,
      bpStatus: 'Normal Target',
      pulse: 76,
      rhythm: 'Sinus Rhythm',
      spO2: 98,
      spO2Mode: 'Room Air',
      glucose: 112,
      glucoseState: 'Post-Prandial',
      temp: 98.4,
      respRate: 16,
      syncTimeAgo: 'Sync 8m ago',
      history: [
        { time: '02:00', bp: '124/80', pulse: 72, spO2: 98, glucose: 108 },
        { time: '04:00', bp: '126/82', pulse: 74, spO2: 98, glucose: 105 },
        { time: '06:00', bp: '130/84', pulse: 78, spO2: 97, glucose: 118 },
        { time: '08:00', bp: '128/82', pulse: 76, spO2: 98, glucose: 112 }
      ]
    },
    recentNote: {
      id: 'note-112',
      noteNumber: 112,
      type: 'SOAP Note',
      authorName: 'Dr. Marcus Chen, MD',
      authorRole: 'Attending',
      department: 'Cardiology Inpatient Rounds',
      timestamp: 'Today, 08:30 AM',
      content: '“Patient showing stable hemodynamics. Titrated Amlodipine last visit; continue current regimen. Order routine renal panel prior to discharge.”',
      signedElectronically: true,
      addenda: []
    },
    pastNotes: [
      {
        id: 'note-111',
        noteNumber: 111,
        type: 'Progress Note',
        authorName: 'Dr. Sarah Lin, MD',
        authorRole: 'Fellow',
        department: 'Cardiology',
        timestamp: 'Yesterday, 17:15 PM',
        content: 'Telemetry reviewed. No ectopic beats observed on 12-lead strip. Patient ambulated 80 feet in hallway with physical therapy assistance without desaturation.',
        signedElectronically: true,
        addenda: []
      },
      {
        id: 'note-110',
        noteNumber: 110,
        type: 'Nursing Shift Note',
        authorName: 'Jessica Morales, RN',
        authorRole: 'Primary ICU Nurse',
        department: 'ICU Station 3',
        timestamp: 'Yesterday, 07:00 AM',
        content: 'Patient resting comfortably. Heparin lock patent in right forearm. Blood sugars monitored QAC. Bed alarm engaged due to high fall risk assessment.',
        signedElectronically: true,
        addenda: []
      },
      {
        id: 'note-109',
        noteNumber: 109,
        type: 'Consultation',
        authorName: 'Dr. James Thorne, MD',
        authorRole: 'Endocrinologist',
        department: 'Endocrinology Consult',
        timestamp: 'Oct 21, 2026, 14:00 PM',
        content: 'Reviewed glycemic management. Patient on Metformin 500mg BID. Fasting glucose well-controlled between 105-120 mg/dL. HbA1c 6.8%. Continue oral therapy.',
        signedElectronically: true,
        addenda: []
      }
    ],
    diagnoses: [
      {
        id: 'dx-1',
        name: 'Hypertension',
        status: 'Managed',
        icd10: 'I10',
        onsetYear: '2018',
        details: 'Essential hypertension well managed with calcium channel blocker therapy.',
        icon: 'cardiology'
      },
      {
        id: 'dx-2',
        name: 'Type 2 Diabetes Mellitus',
        status: 'Chronic',
        icd10: 'E11.9',
        onsetYear: '2016',
        details: 'Last HbA1c: 6.8% (collected 3 weeks prior). No diabetic retinopathy on recent ophthalmology exam.',
        icon: 'bloodtype'
      },
      {
        id: 'dx-3',
        name: 'Mild Osteoarthritis',
        status: 'Monitored',
        statusBadgeColor: 'Bilateral Knees',
        icd10: 'M17.0',
        onsetYear: '2021',
        details: 'Bilateral knee joint stiffness exacerbated by prolonged bed rest. Physical therapy assigned.',
        icon: 'accessibility_new'
      }
    ],
    medications: [
      {
        id: 'med-1',
        name: 'Metformin',
        dosage: '500 mg',
        route: 'Oral',
        frequency: 'BID (With meals)',
        timingLabel: 'Due 12:00',
        dueTime: '12:00',
        status: 'due',
        prescribedBy: 'Dr. James Thorne, MD',
        category: 'Antidiabetic'
      },
      {
        id: 'med-2',
        name: 'Amlodipine',
        dosage: '5 mg',
        route: 'Oral',
        frequency: 'Daily (Morning)',
        timingLabel: 'Given 08:00',
        dueTime: '08:00',
        status: 'given',
        administeredTime: '08:00 AM',
        administeredBy: 'Nurse J. Morales, RN',
        prescribedBy: 'Dr. Marcus Chen, MD',
        category: 'Antihypertensive (CCB)'
      },
      {
        id: 'med-3',
        name: 'Atorvastatin',
        dosage: '20 mg',
        route: 'Oral',
        frequency: 'QHS (Bedtime)',
        timingLabel: 'Due 21:00',
        dueTime: '21:00',
        status: 'scheduled',
        prescribedBy: 'Dr. Marcus Chen, MD',
        category: 'HMG-CoA Reductase Inhibitor (Statin)'
      }
    ],
    labs: [
      {
        id: 'lab-renal',
        title: 'Renal & Electrolyte Panel',
        collectedTime: 'Collected 06:15 AM',
        status: 'Completed',
        metrics: [
          { key: 'egfr', label: 'eGFR', value: 78, unit: 'mL/min', refRange: '>60 mL/min', status: 'normal' },
          { key: 'creat', label: 'Creatinine', value: 0.92, unit: 'mg/dL', refRange: '0.6 - 1.2 mg/dL', status: 'normal' },
          { key: 'k', label: 'Potassium', value: 4.2, unit: 'mEq/L', refRange: '3.5 - 5.0 mEq/L', status: 'normal' }
        ]
      },
      {
        id: 'lab-cbc',
        title: 'Complete Blood Count (CBC)',
        collectedTime: 'Collected 06:15 AM',
        status: 'Completed',
        metrics: [
          { key: 'wbc', label: 'WBC', value: 6.8, unit: 'K/uL', refRange: '4.5 - 11.0 K/uL', status: 'normal' },
          { key: 'hgb', label: 'Hemoglobin', value: 13.4, unit: 'g/dL', refRange: '12.0 - 15.5 g/dL', status: 'normal' },
          { key: 'plt', label: 'Platelets', value: 242, unit: 'K/uL', refRange: '150 - 450 K/uL', status: 'normal' }
        ]
      },
      {
        id: 'lab-cardiac',
        title: 'Cardiac Biomarkers',
        collectedTime: 'Collected 04:30 AM',
        status: 'Completed',
        metrics: [
          { key: 'trop', label: 'Troponin I', value: '<0.01', unit: 'ng/mL', refRange: '<0.04 ng/mL', status: 'normal' },
          { key: 'bnp', label: 'BNP', value: 85, unit: 'pg/mL', refRange: '<100 pg/mL', status: 'normal' },
          { key: 'ckmb', label: 'CK-MB', value: 1.8, unit: 'ng/mL', refRange: '<5.0 ng/mL', status: 'normal' }
        ]
      }
    ]
  },
  {
    id: 'pt-marcus-brody',
    name: 'Marcus Brody',
    age: 64,
    gender: 'Male',
    mrn: '#MS-84912',
    room: '302A',
    department: 'Post-Op ICU',
    bloodType: 'A-',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
    allergies: [
      {
        id: 'all-2',
        allergen: 'SULFA DRUGS',
        severity: 'Moderate',
        reaction: 'Hives, maculopapular rash',
        confirmedDate: '2019-02-10'
      }
    ],
    alerts: [
      'POST-CABG DAY 2',
      'Strict I&O Monitoring',
      'Telemetry Paced'
    ],
    acuity: 'Urgent',
    admitDate: 'Oct 20, 2026',
    attendingDoctor: 'Dr. Aris Thorne, MD',
    vitals: {
      bpSystolic: 134,
      bpDiastolic: 86,
      bpStatus: 'Elevated',
      pulse: 82,
      rhythm: 'Atrial Paced',
      spO2: 96,
      spO2Mode: '2L Nasal Cannula',
      glucose: 142,
      glucoseState: 'Pre-Prandial',
      temp: 99.1,
      respRate: 18,
      syncTimeAgo: 'Sync 3m ago'
    },
    recentNote: {
      id: 'note-201',
      noteNumber: 201,
      type: 'Post-Op Rounds',
      authorName: 'Dr. Aris Thorne, MD',
      authorRole: 'Cardiothoracic Surgery',
      department: 'CVICU',
      timestamp: 'Today, 07:45 AM',
      content: '“Post-CABG Day 2. Chest tubes removed with minimal drainage. Pacing wires intact. Wean oxygen to room air today as tolerated.”',
      signedElectronically: true,
      addenda: []
    },
    pastNotes: [],
    diagnoses: [
      {
        id: 'dx-brody-1',
        name: 'Coronary Artery Disease',
        status: 'Managed',
        icd10: 'I25.10',
        onsetYear: '2020',
        icon: 'cardiology'
      },
      {
        id: 'dx-brody-2',
        name: 'Status Post CABG x3',
        status: 'Acute',
        icd10: 'Z95.1',
        onsetYear: '2026',
        icon: 'healing'
      }
    ],
    medications: [
      {
        id: 'med-b1',
        name: 'Metoprolol Tartrate',
        dosage: '25 mg',
        route: 'Oral',
        frequency: 'BID',
        timingLabel: 'Due 12:00',
        dueTime: '12:00',
        status: 'due',
        prescribedBy: 'Dr. Aris Thorne, MD'
      },
      {
        id: 'med-b2',
        name: 'Aspirin (Chewable)',
        dosage: '81 mg',
        route: 'Oral',
        frequency: 'Daily (Morning)',
        timingLabel: 'Given 08:00',
        dueTime: '08:00',
        status: 'given',
        administeredTime: '08:00 AM',
        prescribedBy: 'Dr. Aris Thorne, MD'
      }
    ],
    labs: [
      {
        id: 'lab-brody-1',
        title: 'Renal & Electrolyte Panel',
        collectedTime: 'Collected 05:45 AM',
        status: 'Completed',
        metrics: [
          { key: 'egfr', label: 'eGFR', value: 65, unit: 'mL/min', refRange: '>60 mL/min', status: 'normal' },
          { key: 'creat', label: 'Creatinine', value: 1.15, unit: 'mg/dL', refRange: '0.6 - 1.2 mg/dL', status: 'normal' },
          { key: 'k', label: 'Potassium', value: 4.0, unit: 'mEq/L', refRange: '3.5 - 5.0 mEq/L', status: 'normal' }
        ]
      }
    ]
  },
  {
    id: 'pt-clara-higgins',
    name: 'Clara Higgins',
    age: 71,
    gender: 'Female',
    mrn: '#MS-84931',
    room: '305A',
    department: 'Cardiology',
    bloodType: 'O+',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80',
    allergies: [
      {
        id: 'all-3',
        allergen: 'ACE INHIBITORS',
        severity: 'Severe',
        reaction: 'Angioedema of tongue & lips',
        confirmedDate: '2022-11-04'
      }
    ],
    alerts: [
      'SEVERE ANGIOEDEMA WITH ACE-I',
      'Strict Fluid Restriction 1.5L',
      'High Fall Risk'
    ],
    acuity: 'Stable',
    admitDate: 'Oct 19, 2026',
    attendingDoctor: 'Dr. Marcus Chen, MD',
    vitals: {
      bpSystolic: 122,
      bpDiastolic: 78,
      bpStatus: 'Normal Target',
      pulse: 70,
      rhythm: 'Controlled Afib',
      spO2: 97,
      spO2Mode: 'Room Air',
      glucose: 104,
      glucoseState: 'Fasting',
      temp: 98.2,
      respRate: 15,
      syncTimeAgo: 'Sync 15m ago'
    },
    recentNote: {
      id: 'note-301',
      noteNumber: 301,
      type: 'Heart Failure Rounds',
      authorName: 'Dr. Marcus Chen, MD',
      authorRole: 'Attending',
      department: 'Cardiology',
      timestamp: 'Today, 09:15 AM',
      content: '“Euvolemic clinically today. Net negative 1.2L on IV Furosemide. Transitioning to oral Torsemide 20mg daily for planned tomorrow discharge.”',
      signedElectronically: true,
      addenda: []
    },
    pastNotes: [],
    diagnoses: [
      {
        id: 'dx-clara-1',
        name: 'Congestive Heart Failure (HFpEF)',
        status: 'Managed',
        icd10: 'I50.32',
        onsetYear: '2019',
        icon: 'cardiology'
      },
      {
        id: 'dx-clara-2',
        name: 'Chronic Atrial Fibrillation',
        status: 'Chronic',
        icd10: 'I48.2',
        onsetYear: '2021',
        icon: 'ecg_heart'
      }
    ],
    medications: [
      {
        id: 'med-c1',
        name: 'Torsemide',
        dosage: '20 mg',
        route: 'Oral',
        frequency: 'Daily (Morning)',
        timingLabel: 'Due 12:00',
        dueTime: '12:00',
        status: 'due',
        prescribedBy: 'Dr. Marcus Chen, MD'
      },
      {
        id: 'med-c2',
        name: 'Apixaban (Eliquis)',
        dosage: '5 mg',
        route: 'Oral',
        frequency: 'BID',
        timingLabel: 'Given 08:00',
        dueTime: '08:00',
        status: 'given',
        administeredTime: '08:00 AM',
        prescribedBy: 'Dr. Marcus Chen, MD'
      }
    ],
    labs: [
      {
        id: 'lab-clara-1',
        title: 'Renal & Electrolyte Panel',
        collectedTime: 'Collected 06:00 AM',
        status: 'Completed',
        metrics: [
          { key: 'egfr', label: 'eGFR', value: 72, unit: 'mL/min', refRange: '>60 mL/min', status: 'normal' },
          { key: 'creat', label: 'Creatinine', value: 0.88, unit: 'mg/dL', refRange: '0.6 - 1.2 mg/dL', status: 'normal' },
          { key: 'k', label: 'Potassium', value: 4.1, unit: 'mEq/L', refRange: '3.5 - 5.0 mEq/L', status: 'normal' }
        ]
      }
    ]
  }
];

export const INITIAL_RX_ORDERS: RxOrder[] = [
  {
    id: 'rx-101',
    patientId: 'pt-eleanor-vance',
    patientName: 'Eleanor Vance (304B)',
    medName: 'Metformin',
    dosage: '500 mg',
    route: 'Oral',
    frequency: 'BID (With meals)',
    indication: 'Type 2 Diabetes Glycemic Control',
    prescribingDoctor: 'Dr. James Thorne, MD',
    orderedAt: 'Today, 08:00 AM',
    status: 'Active MAR',
    urgent: false
  },
  {
    id: 'rx-102',
    patientId: 'pt-eleanor-vance',
    patientName: 'Eleanor Vance (304B)',
    medName: 'Amlodipine',
    dosage: '5 mg',
    route: 'Oral',
    frequency: 'Daily (Morning)',
    indication: 'Essential Hypertension',
    prescribingDoctor: 'Dr. Marcus Chen, MD',
    orderedAt: 'Today, 07:30 AM',
    status: 'Active MAR',
    urgent: false
  },
  {
    id: 'rx-103',
    patientId: 'pt-eleanor-vance',
    patientName: 'Eleanor Vance (304B)',
    medName: 'Atorvastatin',
    dosage: '20 mg',
    route: 'Oral',
    frequency: 'QHS (Bedtime)',
    indication: 'Dyslipidemia & Vascular Prophylaxis',
    prescribingDoctor: 'Dr. Marcus Chen, MD',
    orderedAt: 'Today, 08:30 AM',
    status: 'Active MAR',
    urgent: false
  },
  {
    id: 'rx-104',
    patientId: 'pt-marcus-brody',
    patientName: 'Marcus Brody (302A)',
    medName: 'Metoprolol Tartrate',
    dosage: '25 mg',
    route: 'Oral',
    frequency: 'BID',
    indication: 'Post-CABG Rate Control',
    prescribingDoctor: 'Dr. Aris Thorne, MD',
    orderedAt: 'Today, 06:45 AM',
    status: 'Active MAR',
    urgent: false
  }
];

export const PENICILLIN_DRUGS = [
  'penicillin',
  'amoxicillin',
  'ampicillin',
  'piperacillin',
  'augmentin',
  'unasyn',
  'zosyn',
  'oxacillin',
  'nafcillin',
  'dicloxacillin'
];
