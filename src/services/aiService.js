/**
 * CareConnect AI — AI Triage & Specialty Guidance Service
 *
 * NOTE: Care is a friendly healthcare guide, NOT a doctor or diagnostic system.
 * Care never gives a medical diagnosis (e.g., never says "You have migraine").
 * Care routes patients toward an appropriate medical department/specialist.
 */

export const SPECIALTIES = {
  GENERAL_MEDICINE: {
    id: 'general-medicine',
    name: 'General Medicine',
    tagline: 'Primary care, fever, fatigue, routine wellness, and initial evaluation',
    badgeColor: 'blue',
    icon: 'Stethoscope'
  },
  NEUROLOGY: {
    id: 'neurology',
    name: 'Neurology',
    tagline: 'Headaches, migraines, dizziness, nerve pain, and cognitive symptoms',
    badgeColor: 'indigo',
    icon: 'Brain'
  },
  ORTHOPEDICS: {
    id: 'orthopedics',
    name: 'Orthopedics',
    tagline: 'Joint pain, backache, spine stiffness, fractures, and sports injuries',
    badgeColor: 'amber',
    icon: 'Bone'
  },
  DERMATOLOGY: {
    id: 'dermatology',
    name: 'Dermatology',
    tagline: 'Skin rashes, allergies, acne, hair loss, and epidermal concerns',
    badgeColor: 'rose',
    icon: 'Sparkles'
  },
  CARDIOLOGY: {
    id: 'cardiology',
    name: 'Cardiology',
    tagline: 'Heart health, chest discomfort, palpitations, and blood pressure',
    badgeColor: 'red',
    icon: 'HeartPulse'
  },
  ENT: {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    tagline: 'Sinus congestion, sore throat, earaches, tinnitus, and vertigo',
    badgeColor: 'teal',
    icon: 'Headphones'
  },
  GASTROENTEROLOGY: {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    tagline: 'Abdominal pain, indigestion, acid reflux, stomach issues',
    badgeColor: 'emerald',
    icon: 'Activity'
  },
  PEDIATRICS: {
    id: 'pediatrics',
    name: 'Pediatrics',
    tagline: 'Children & adolescent health, growth, vaccination, pediatric care',
    badgeColor: 'cyan',
    icon: 'Smile'
  }
};

const SYMPTOM_PATTERNS = [
  {
    regex: /(headache|head ache|migraine|throbbing head|dizziness|vertigo|tingling|numbness|memory|seizure)/i,
    specialty: SPECIALTIES.NEUROLOGY,
    reason: 'Frequent or persistent headaches, head pressure, or dizziness are best evaluated by a neurologist or a general physician to understand neurological factors and provide safe relief.',
    careMessage: "I hear you. Head pain can make it really difficult to focus on your day. A Neurologist or General Physician can examine the underlying triggers and help you get relief."
  },
  {
    regex: /(back pain|lower back|spine|knee|joint|shoulder|neck pain|stiffness|bone|fracture|sprain|swelling in leg|walking difficulty)/i,
    specialty: SPECIALTIES.ORTHOPEDICS,
    reason: 'Joint stiffness, back pain, and musculoskeletal discomfort are the core focus of an Orthopedic specialist or physical health consultant.',
    careMessage: "Back and joint discomfort can really wear you down. An Orthopedic specialist is the ideal place to start for targeted examination and joint-friendly recovery."
  },
  {
    regex: /(rash|itch|red spot|skin|acne|eczema|psoriasis|allergy|hives|hair fall|scalp)/i,
    specialty: SPECIALTIES.DERMATOLOGY,
    reason: 'Skin irritations, unexplained rashes, and allergic dermatological conditions are evaluated and managed by a Dermatologist.',
    careMessage: "Skin symptoms can be both uncomfortable and puzzling. A Dermatologist can take a close look at the pattern and recommend soothing, tailored treatment."
  },
  {
    regex: /(chest pain|chest tightness|heart|palpitation|shortness of breath|breathless|high bp|blood pressure)/i,
    specialty: SPECIALTIES.CARDIOLOGY,
    reason: 'Chest tightness, rapid heartbeat, or unexplained breathlessness warrant careful evaluation by a Cardiologist or immediate medical assessment.',
    careMessage: "Your heart health is top priority. A Cardiologist can review your symptoms thoroughly to ensure everything is functioning safely and soundly."
  },
  {
    regex: /(throat|sore throat|ear|earache|sinus|runny nose|nasal|tinnitus|hearing|swallowing|tonsil)/i,
    specialty: SPECIALTIES.ENT,
    reason: 'Persistent throat irritation, ear discomfort, or sinus congestion fall directly under the care of an ENT (Ear, Nose & Throat) specialist.',
    careMessage: "Ear, nose, and throat symptoms can be very nagging. An ENT specialist will look right at the passages and help clear up the discomfort."
  },
  {
    regex: /(stomach|abdomen|belly|digestion|indigestion|acid|acidity|reflux|bloating|nausea|vomit|cramps|constipation|diarrhea)/i,
    specialty: SPECIALTIES.GASTROENTEROLOGY,
    reason: 'Abdominal pain, recurring acidity, or digestive issues are best evaluated by a Gastroenterologist or Internal Medicine physician.',
    careMessage: "Digestive troubles take a real toll on your daily comfort. A Gastroenterologist can help identify gentle ways to settle your system."
  },
  {
    regex: /(baby|infant|toddler|child|kid|pediatric|growth|vaccine)/i,
    specialty: SPECIALTIES.PEDIATRICS,
    reason: 'Symptoms affecting infants, children, or adolescents are best managed by a board-certified Pediatrician.',
    careMessage: "Taking care of little ones requires gentle, specialized attention. A Pediatrician will ensure your child receives the most appropriate and comforting care."
  }
];

/**
 * Analyze symptoms entered in natural language
 * @param {string} symptomText
 * @returns {Promise<Object>} Recommendation result
 */
export async function analyzeSymptoms(symptomText) {
  // Simulate natural latency of an empathetic AI response (600ms)
  await new Promise(resolve => setTimeout(resolve, 650));

  const text = (symptomText || '').trim();
  if (!text) {
    return {
      success: false,
      message: "Please describe what you are experiencing so Care can guide you."
    };
  }

  // Check emergency keywords for patient safety
  const isEmergency = /(severe chest pain|cannot breathe|unconscious|heavy bleeding|slurred speech|facial droop|stroke|heart attack)/i.test(text);

  // Match against patterns
  let matchedRule = SYMPTOM_PATTERNS.find(pattern => pattern.regex.test(text));

  // Default fallback to General Medicine
  if (!matchedRule) {
    matchedRule = {
      specialty: SPECIALTIES.GENERAL_MEDICINE,
      reason: 'A General Medicine specialist or Internal Physician is the most versatile and reassuring starting point to evaluate your general symptoms and coordinate further tests if required.',
      careMessage: "I understand. When symptoms aren't straightforward, a General Medicine physician is the best starting place for a comprehensive health check."
    };
  }

  return {
    success: true,
    userInput: text,
    isEmergency,
    specialty: matchedRule.specialty,
    careGreeting: "I understand. Let me help you find the right place to start.",
    careMessage: matchedRule.careMessage,
    guidanceReason: matchedRule.reason,
    disclaimer: "Care provides guidance to help you find the right healthcare service. It does not diagnose medical conditions or replace professional medical advice.",
    questionsForDoctor: [
      "How long have you noticed these symptoms happening?",
      "Does anything specific trigger or relieve them?",
      "Are you taking any ongoing medications or vitamins?"
    ]
  };
}
