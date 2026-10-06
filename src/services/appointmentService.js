/**
 * CareConnect AI — Live Appointment Slots & Conflict-Free Booking Engine
 *
 * Implements slot locking, conflict detection, and localStorage persistence.
 * Designed to seamlessly connect to a Java Spring Boot + MySQL backend later.
 */

const STORAGE_KEY = 'careconnect_appointments_v1';

// Standard clinic time slots
export const TIME_SLOTS = [
  { id: '0930', time: '09:30 AM', period: 'Morning' },
  { id: '1000', time: '10:00 AM', period: 'Morning' },
  { id: '1030', time: '10:30 AM', period: 'Morning' },
  { id: '1130', time: '11:30 AM', period: 'Morning' },
  { id: '1400', time: '02:00 PM', period: 'Afternoon' },
  { id: '1500', time: '03:00 PM', period: 'Afternoon' },
  { id: '1630', time: '04:30 PM', period: 'Afternoon' },
  { id: '1730', time: '05:30 PM', period: 'Evening' },
  { id: '1830', time: '06:30 PM', period: 'Evening' }
];

export function getRelativeDates() {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    let label = '';
    if (i === 0) label = 'Today';
    else if (i === 1) label = 'Tomorrow';
    else {
      label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    dates.push({
      dateString: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: d.getDate(),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      label: label,
      isToday: i === 0,
      isTomorrow: i === 1
    });
  }

  return dates;
}

export function getStoredAppointments() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed reading appointments from localStorage', e);
    return [];
  }
}

export function saveAppointments(appointments) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  } catch (e) {
    console.error('Failed saving appointments to localStorage', e);
  }
}

/**
 * Returns available slots for a given doctor and date, factoring in locked/booked slots.
 */
export function getDoctorSlotsForDate(doctorId, dateString) {
  const booked = getStoredAppointments();

  // Filter existing bookings for this doctor & date
  const doctorBookings = booked.filter(b => b.doctorId === doctorId && b.dateString === dateString && b.status !== 'cancelled');
  const bookedSlotTimes = new Set(doctorBookings.map(b => b.time));

  // Some default mock booked slots to simulate realistic clinic schedules
  const deterministicSeed = (doctorId.charCodeAt(doctorId.length - 1) + (dateString.charCodeAt(dateString.length - 1) || 0)) % 4;
  const mockBusySlots = [
    TIME_SLOTS[deterministicSeed % TIME_SLOTS.length].time,
    TIME_SLOTS[(deterministicSeed + 3) % TIME_SLOTS.length].time
  ];

  return TIME_SLOTS.map(slot => {
    const isBooked = bookedSlotTimes.has(slot.time) || mockBusySlots.includes(slot.time);
    return {
      ...slot,
      isAvailable: !isBooked,
      isBooked: isBooked
    };
  });
}

/**
 * Books an appointment with conflict-free slot locking
 */
export async function bookAppointment({
  doctorId,
  doctorName,
  doctorSpecialty,
  doctorAvatar,
  doctorClinic,
  consultationMode = 'In-Person',
  dateString,
  dateFormatted,
  time,
  patientName,
  patientPhone,
  patientEmail,
  symptomsSummary = ''
}) {
  // Simulate network request latency (400ms)
  await new Promise(r => setTimeout(r, 450));

  const all = getStoredAppointments();

  // Double-booking check
  const conflict = all.find(b =>
    b.doctorId === doctorId &&
    b.dateString === dateString &&
    b.time === time &&
    b.status !== 'cancelled'
  );

  if (conflict) {
    return {
      success: false,
      message: 'This slot was just booked by another patient. Please choose another convenient time.'
    };
  }

  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const appointmentId = `CC-${randomNum}`;

  const newAppointment = {
    id: appointmentId,
    doctorId,
    doctorName,
    doctorSpecialty,
    doctorAvatar,
    doctorClinic,
    consultationMode,
    dateString,
    dateFormatted: dateFormatted || dateString,
    time,
    patientName,
    patientPhone,
    patientEmail,
    symptomsSummary,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  all.unshift(newAppointment);
  saveAppointments(all);

  return {
    success: true,
    appointment: newAppointment,
    message: 'Your appointment has been successfully booked.'
  };
}

export function cancelAppointment(appointmentId) {
  const all = getStoredAppointments();
  const updated = all.map(app => {
    if (app.id === appointmentId) {
      return { ...app, status: 'cancelled' };
    }
    return app;
  });
  saveAppointments(updated);
  return { success: true };
}
