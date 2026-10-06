import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, User, ArrowRight, ShieldCheck, MapPin, Video, AlertCircle } from 'lucide-react';
import { getRelativeDates, getDoctorSlotsForDate } from '../../services/appointmentService';
import { DOCTORS } from '../../services/doctorService';
import './AppointmentSlots.css';

export default function AppointmentSlots({
  selectedDoctor,
  onSelectDoctor,
  onProceedToBook
}) {
  const dates = getRelativeDates();
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlotTime, setSelectedSlotTime] = useState(null);
  const [consultationMode, setConsultationMode] = useState('In-Person');

  // Fallback to first doctor if none explicitly selected
  const activeDoctor = selectedDoctor || DOCTORS[0];

  // Fetch slots whenever activeDoctor or selectedDate changes
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (activeDoctor && selectedDate) {
      const liveSlots = getDoctorSlotsForDate(activeDoctor.id, selectedDate.dateString);
      setSlots(liveSlots);
      setSelectedSlotTime(null); // reset selected slot when date changes
    }
  }, [activeDoctor, selectedDate]);

  // Group slots by period
  const morningSlots = slots.filter(s => s.period === 'Morning');
  const afternoonSlots = slots.filter(s => s.period === 'Afternoon');
  const eveningSlots = slots.filter(s => s.period === 'Evening');

  const handleBookClick = () => {
    if (!selectedSlotTime) return;
    onProceedToBook({
      doctor: activeDoctor,
      date: selectedDate,
      time: selectedSlotTime,
      consultationMode
    });
  };

  return (
    <section id="appointment-slots" className="py-16 md:py-20 bg-sky-50/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            Live Slot Scheduling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose a time that works for you
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real-time conflict-free slot booking. Select a date and available time slot to meet with your specialist.
          </p>
        </div>

        {/* Selected Doctor Summary Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={activeDoctor.avatar}
              alt={activeDoctor.name}
              className="w-14 h-14 rounded-2xl object-cover border border-slate-100 shadow-xs"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Selected Specialist
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {activeDoctor.name}
              </h4>
              <p className="text-xs text-slate-500">
                {activeDoctor.specialtyName} • {activeDoctor.hospitalOrClinic}
              </p>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Consultation:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setConsultationMode('In-Person')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1 ${
                  consultationMode === 'In-Person'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                In-Person
              </button>
              <button
                type="button"
                onClick={() => setConsultationMode('Video Call')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1 ${
                  consultationMode === 'Video Call'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5 text-sky-600" />
                Video Call
              </button>
            </div>
          </div>
        </div>

        {/* Date Selector Tabs */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Select Date
          </label>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {dates.map((d, index) => {
              const isActive = selectedDate.dateString === d.dateString;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedDate(d)}
                  className={`date-card ${isActive ? 'active' : ''}`}
                >
                  <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {d.label}
                  </div>
                  <div className={`text-[11px] date-subtext ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    {d.monthName} {d.dayNumber}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-7">
          {/* Morning */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <span>Morning</span>
              <span className="text-[10px] text-slate-400 font-normal">(09:30 AM – 11:30 AM)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {morningSlots.map(slot => (
                <button
                  key={slot.id}
                  type="button"
                  disabled={slot.isBooked}
                  onClick={() => setSelectedSlotTime(slot.time)}
                  className={`slot-btn ${
                    slot.isBooked
                      ? 'booked'
                      : selectedSlotTime === slot.time
                      ? 'selected'
                      : 'available'
                  }`}
                >
                  {slot.time}
                  {slot.isBooked && (
                    <span className="text-[10px] uppercase font-bold text-slate-400">(Booked)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Afternoon */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <span>Afternoon</span>
              <span className="text-[10px] text-slate-400 font-normal">(02:00 PM – 04:30 PM)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {afternoonSlots.map(slot => (
                <button
                  key={slot.id}
                  type="button"
                  disabled={slot.isBooked}
                  onClick={() => setSelectedSlotTime(slot.time)}
                  className={`slot-btn ${
                    slot.isBooked
                      ? 'booked'
                      : selectedSlotTime === slot.time
                      ? 'selected'
                      : 'available'
                  }`}
                >
                  {slot.time}
                  {slot.isBooked && (
                    <span className="text-[10px] uppercase font-bold text-slate-400">(Booked)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Evening */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <span>Evening</span>
              <span className="text-[10px] text-slate-400 font-normal">(05:30 PM – 06:30 PM)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {eveningSlots.map(slot => (
                <button
                  key={slot.id}
                  type="button"
                  disabled={slot.isBooked}
                  onClick={() => setSelectedSlotTime(slot.time)}
                  className={`slot-btn ${
                    slot.isBooked
                      ? 'booked'
                      : selectedSlotTime === slot.time
                      ? 'selected'
                      : 'available'
                  }`}
                >
                  {slot.time}
                  {slot.isBooked && (
                    <span className="text-[10px] uppercase font-bold text-slate-400">(Booked)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Slot Selection Summary Bar */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              {selectedSlotTime ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Selected appointment time:</span>
                    <p className="text-sm font-bold text-slate-900">
                      {selectedDate.label}, {selectedDate.monthName} {selectedDate.dayNumber} at {selectedSlotTime} ({consultationMode})
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  Click any available time slot above to proceed with booking.
                </p>
              )}
            </div>

            <button
              type="button"
              disabled={!selectedSlotTime}
              onClick={handleBookClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Book appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
