import React from 'react';
import { Sparkles, Clock, Lock, RotateCcw, Bell, Users2 } from 'lucide-react';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'AI Symptom Guidance',
    description: 'Interprets everyday descriptions and directs you toward the appropriate specialty without giving a medical diagnosis.'
  },
  {
    icon: Clock,
    title: 'Live Slot Availability',
    description: 'Doctors publish real-time open slots so you see verified times instead of waiting on callback queues.'
  },
  {
    icon: Lock,
    title: 'Conflict-Free Slot Locking',
    description: 'Instant locking guarantees zero double-bookings even during high concurrent clinic requests.'
  },
  {
    icon: RotateCcw,
    title: 'Easy Cancel & Reschedule',
    description: 'Plans change. Easily reschedule or release your time slot with a single tap, keeping clinic schedules running smoothly.'
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Smart SMS and calendar notifications keep both patients and clinicians punctual, reducing no-shows.'
  },
  {
    icon: Users2,
    title: 'Three-Sided Ecosystem',
    description: 'Tailored portals for Patients, Clinicians, and Clinic Administrators for unified OPD operations.'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/60">
            Engineered For Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for patients, trusted by clinicians
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            CareConnect AI brings clarity, speed, and reliability to modern outpatient appointment scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/80 bg-[#FAFCFF] hover:bg-white hover:border-sky-300 hover:shadow-soft transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
