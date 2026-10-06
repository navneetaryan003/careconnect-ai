/**
 * CareConnect AI — Doctor Directory & Specialty Registry Service
 *
 * Provides realistic demo doctor profiles clearly identified as sample clinical data.
 * No fake hospital partnerships or misleading credentials.
 */

export const DOCTORS = [
  {
    id: 'doc-1',
    name: 'Dr. Priya Sharma',
    gender: 'female',
    title: 'Senior Consultant Physician',
    specialtyId: 'general-medicine',
    specialtyName: 'General Medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experienceYears: 12,
    consultationFee: 500,
    languages: ['English', 'Hindi'],
    rating: 4.9,
    reviewCount: 312,
    hospitalOrClinic: 'CareConnect Community Health Center',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Today, 10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    bio: 'Focuses on holistic primary care, persistent seasonal viral fevers, fatigue workups, and chronic lifestyle guidance with a gentle, patient-first approach.'
  },
  {
    id: 'doc-2',
    name: 'Dr. Rajesh Verma',
    gender: 'male',
    title: 'Consultant Neurologist',
    specialtyId: 'neurology',
    specialtyName: 'Neurology',
    qualification: 'MBBS, MD, DM (Neurology)',
    experienceYears: 15,
    consultationFee: 800,
    languages: ['English', 'Hindi'],
    rating: 4.95,
    reviewCount: 428,
    hospitalOrClinic: 'Metro Neuro & Spine Center',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Today, 11:30 AM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    bio: 'Specializes in tension headaches, migraine management, vestibular dizziness, sleep disorders, and comprehensive neurological triage.'
  },
  {
    id: 'doc-3',
    name: 'Dr. Ananya Iyer',
    gender: 'female',
    title: 'Orthopedic & Joint Specialist',
    specialtyId: 'orthopedics',
    specialtyName: 'Orthopedics',
    qualification: 'MBBS, MS (Orthopedics), Fellowship Joint Care',
    experienceYears: 10,
    consultationFee: 700,
    languages: ['English', 'Hindi', 'Tamil'],
    rating: 4.88,
    reviewCount: 265,
    hospitalOrClinic: 'CareConnect Ortho & Rehab Clinic',
    consultationModes: ['In-Person'],
    nextAvailable: 'Today, 02:00 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813637-2950541e2638?auto=format&fit=crop&q=80&w=300',
    bio: 'Dedicated to ergonomic lower back care, knee pain rehabilitation, sports sprains, and non-surgical mobility restoration.'
  },
  {
    id: 'doc-4',
    name: 'Dr. Kabir Mehta',
    gender: 'male',
    title: 'Consultant Dermatologist',
    specialtyId: 'dermatology',
    specialtyName: 'Dermatology',
    qualification: 'MBBS, MD (Dermatology, Venereology & Leprosy)',
    experienceYears: 8,
    consultationFee: 600,
    languages: ['English', 'Hindi'],
    rating: 4.85,
    reviewCount: 190,
    hospitalOrClinic: 'Aura Skin & Allergy Care',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Tomorrow, 09:30 AM',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
    bio: 'Special interest in acute allergic reactions, contact dermatitis, adult acne, scalp treatments, and patient comfort.'
  },
  {
    id: 'doc-5',
    name: 'Dr. Sunita Rao',
    gender: 'female',
    title: 'Senior Cardiologist',
    specialtyId: 'cardiology',
    specialtyName: 'Cardiology',
    qualification: 'MBBS, MD (Medicine), DM (Cardiology)',
    experienceYears: 18,
    consultationFee: 950,
    languages: ['English', 'Hindi', 'Kannada'],
    rating: 4.97,
    reviewCount: 512,
    hospitalOrClinic: 'Heart & Vascular Institute',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Today, 04:30 PM',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    bio: 'Extensive background in preventive cardiology, hypertension control, arrhythmia evaluations, and gentle lifestyle cardiac guidance.'
  },
  {
    id: 'doc-6',
    name: 'Dr. Arpit Saxena',
    gender: 'male',
    title: 'ENT & Head-Neck Surgeon',
    specialtyId: 'ent',
    specialtyName: 'ENT (Ear, Nose & Throat)',
    qualification: 'MBBS, MS (ENT), DNB',
    experienceYears: 11,
    consultationFee: 550,
    languages: ['English', 'Hindi'],
    rating: 4.89,
    reviewCount: 220,
    hospitalOrClinic: 'Apex ENT & Sinus Clinic',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Tomorrow, 10:00 AM',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    bio: 'Helps patients suffering from chronic allergic rhinitis, recurring throat infections, ear pressure imbalance, and sinus headaches.'
  },
  {
    id: 'doc-7',
    name: 'Dr. Meera Nambiar',
    gender: 'female',
    title: 'Consultant Gastroenterologist',
    specialtyId: 'gastroenterology',
    specialtyName: 'Gastroenterology',
    qualification: 'MBBS, MD, DNB (Gastroenterology)',
    experienceYears: 13,
    consultationFee: 750,
    languages: ['English', 'Hindi', 'Malayalam'],
    rating: 4.92,
    reviewCount: 340,
    hospitalOrClinic: 'Digestive Health Center',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Today, 03:30 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813637-2950541e2638?auto=format&fit=crop&q=80&w=300',
    bio: 'Warm, attentive specialist in acid reflux, IBS, microbiome health, recurring stomach discomfort, and therapeutic nutritional planning.'
  },
  {
    id: 'doc-8',
    name: 'Dr. Rohan Deshmukh',
    gender: 'male',
    title: 'Senior Pediatrician',
    specialtyId: 'pediatrics',
    specialtyName: 'Pediatrics',
    qualification: 'MBBS, MD (Pediatrics), FIAP',
    experienceYears: 14,
    consultationFee: 600,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.96,
    reviewCount: 460,
    hospitalOrClinic: 'Little Stars Pediatric Care',
    consultationModes: ['In-Person', 'Video Call'],
    nextAvailable: 'Today, 11:00 AM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    bio: 'Gentle and cheerful approach to child fever, developmental milestones, adolescent wellness, and parental reassurance.'
  }
];

export function getAllDoctors() {
  return DOCTORS;
}

export function getDoctorsBySpecialty(specialtyId) {
  if (!specialtyId || specialtyId === 'all') return DOCTORS;
  return DOCTORS.filter(doc => doc.specialtyId === specialtyId);
}

export function getDoctorById(id) {
  return DOCTORS.find(doc => doc.id === id) || null;
}

export function searchDoctors(query = '', specialtyId = 'all', mode = 'all') {
  let list = DOCTORS;

  if (specialtyId && specialtyId !== 'all') {
    list = list.filter(doc => doc.specialtyId === specialtyId);
  }

  if (mode && mode !== 'all') {
    list = list.filter(doc => doc.consultationModes.includes(mode));
  }

  const cleanQ = query.trim().toLowerCase();
  if (cleanQ) {
    list = list.filter(doc =>
      doc.name.toLowerCase().includes(cleanQ) ||
      doc.specialtyName.toLowerCase().includes(cleanQ) ||
      doc.qualification.toLowerCase().includes(cleanQ) ||
      doc.bio.toLowerCase().includes(cleanQ)
    );
  }

  return list;
}
