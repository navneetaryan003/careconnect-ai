import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Video, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { getStoredAppointments, cancelAppointment } from '../../services/appointmentService';

export default function AppointmentsListModal({ onClose }) {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = () => {
    setAppointments(getStoredAppointments());
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment? Your slot will be immediately freed for other patients.')) {
      cancelAppointment(id);
      loadAppointments();
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              My Appointments
            </h3>
            <p className="text-xs text-slate-500">
              Live conflict-free bookings stored in your browser session
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {appointments.length > 0 ? (
            appointments.map(app => (
              <div
                key={app.id}
                className={`p-4 rounded-2xl border transition-all ${
                  app.status === 'cancelled'
                    ? 'bg-slate-50 border-slate-200 opacity-60'
                    : 'bg-white border-slate-200 shadow-xs hover:border-sky-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={app.doctorAvatar}
                      alt={app.doctorName}
                      className="w-11 h-11 rounded-xl object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {app.doctorName}
                      </h4>
                      <p className="text-xs text-sky-700 font-semibold">
                        {app.doctorSpecialty}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        app.status === 'cancelled'
                          ? 'bg-slate-200 text-slate-600'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {app.status}
                    </span>
                    <p className="text-[10px] text-slate-400 font-mono mt-1">
                      {app.id}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {app.dateFormatted}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-900">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      {app.time}
                    </span>
                  </div>

                  {app.status !== 'cancelled' && (
                    <button
                      onClick={() => handleCancel(app.id)}
                      className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400">
              <Calendar className="w-12 h-12 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium text-slate-600">No appointments booked yet</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Book a doctor consultation above to see your scheduled visits here.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
