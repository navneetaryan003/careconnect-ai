import React, { useState } from 'react';
import { X, CheckCircle2, User, Phone, Mail, Calendar, Clock, MapPin, Video, Loader2, ShieldCheck } from 'lucide-react';
import { bookAppointment } from '../../services/appointmentService';

export default function BookingModal({
  bookingData,
  onClose,
  onBookingSuccess
}) {
  if (!bookingData) return null;

  const { doctor, date, time, consultationMode, symptomsSummary } = bookingData;

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientNotes, setPatientNotes] = useState(symptomsSummary || '');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      setErrorMsg('Please enter your full name and contact number.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await bookAppointment({
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialtyName,
        doctorAvatar: doctor.avatar,
        doctorClinic: doctor.hospitalOrClinic,
        consultationMode,
        dateString: date.dateString,
        dateFormatted: `${date.label}, ${date.monthName} ${date.dayNumber}`,
        time,
        patientName,
        patientPhone,
        patientEmail,
        symptomsSummary: patientNotes
      });

      setSubmitting(false);

      if (res.success) {
        onBookingSuccess(res.appointment);
      } else {
        setErrorMsg(res.message || 'Could not complete booking.');
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      setErrorMsg('Failed to connect to the scheduling service. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Step 2 of 2: Patient Details
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Confirm your appointment
          </h3>
        </div>

        {/* Appointment summary card */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-2 text-xs text-slate-600">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="font-semibold text-slate-800">Doctor:</span>
            <span className="font-bold text-sky-700">{doctor.name} ({doctor.specialtyName})</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Date & Time:</span>
            <span className="font-bold text-slate-900">{date.label}, {date.monthName} {date.dayNumber} at {time}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Mode:</span>
            <span className="font-medium text-slate-700 flex items-center gap-1">
              {consultationMode === 'Video Call' ? <Video className="w-3.5 h-3.5 text-sky-600" /> : <MapPin className="w-3.5 h-3.5 text-emerald-600" />}
              {consultationMode}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Navneet Aryan"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Reason / Symptoms Note for Doctor (Optional)
            </label>
            <textarea
              rows={2}
              value={patientNotes}
              onChange={(e) => setPatientNotes(e.target.value)}
              placeholder="Any symptoms or questions you'd like the doctor to know in advance..."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 resize-none"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-600 font-medium">
              {errorMsg}
            </p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Locking slot & booking...
                </>
              ) : (
                'Confirm & Lock Appointment'
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Conflict-free slot locking • Free cancellation anytime
          </p>
        </form>
      </div>
    </div>
  );
}
