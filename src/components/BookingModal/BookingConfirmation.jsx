import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, Video, Download, ArrowLeft, ShieldCheck, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingConfirmation({
  appointment,
  onClose,
  onViewAllAppointments
}) {
  useEffect(() => {
    // Fire gentle celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#14b8a6', '#38bdf8', '#10b981']
      });
    } catch (e) {
      // ignore
    }
  }, []);

  if (!appointment) return null;

  // Generate .ics calendar download
  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CareConnect AI//Doctor Appointment//EN
BEGIN:VEVENT
SUMMARY:Doctor Appointment with ${appointment.doctorName} (${appointment.doctorSpecialty})
DESCRIPTION:Consultation with ${appointment.doctorName} at ${appointment.doctorClinic}. Appointment ID: ${appointment.id}.
LOCATION:${appointment.doctorClinic}
DTSTART;VALUE=DATE:${appointment.dateString.replace(/-/g, '')}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `appointment-${appointment.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl border border-slate-100 text-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-sky-100/60 rounded-full blur-2xl pointer-events-none" />

        {/* Success Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-soft">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Main Heading */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          You're all set.
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-1">
          Your appointment has been successfully booked.
        </p>

        {/* Care's Celebration Message */}
        <div className="mt-4 p-3 bg-sky-50/80 rounded-2xl border border-sky-100 flex items-center justify-center gap-2.5 text-xs text-sky-800 font-medium">
          <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[10px]">
            Care
          </span>
          <span>"I've secured your time slot! You're taking a positive step toward feeling better."</span>
        </div>

        {/* Detailed Appointment Card */}
        <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Appointment ID
              </span>
              <p className="text-sm font-extrabold text-sky-700 font-mono">
                {appointment.id}
              </p>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              Confirmed
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={appointment.doctorAvatar}
              alt={appointment.doctorName}
              className="w-12 h-12 rounded-xl object-cover border border-slate-200"
            />
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                {appointment.doctorName}
              </h4>
              <p className="text-xs text-sky-700 font-semibold">
                {appointment.doctorSpecialty}
              </p>
              <p className="text-[11px] text-slate-500">
                {appointment.doctorClinic}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="font-semibold">{appointment.dateFormatted}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="font-semibold">{appointment.time}</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2 text-slate-600">
              {appointment.consultationMode === 'Video Call' ? (
                <Video className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
              ) : (
                <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              )}
              <span>{appointment.consultationMode} • Patient: {appointment.patientName}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownloadCalendar}
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            Add to Calendar (.ics)
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-700 text-white shadow-soft transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Back to Home
          </button>
        </div>

        {/* View All Appointments link */}
        <button
          onClick={onViewAllAppointments}
          className="mt-4 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors inline-block"
        >
          View all booked appointments →
        </button>
      </div>
    </div>
  );
}
