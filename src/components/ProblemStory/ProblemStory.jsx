import React from 'react';
import { HeartHandshake, PhoneCall, Compass, ShieldAlert, Check } from 'lucide-react';

export default function ProblemStory() {
  return (
    <section id="problem-story" className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/20 to-[#FAFCFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs border border-white/10">
              <HeartHandshake className="w-4 h-4 text-sky-400" />
              The Human Story Behind CareConnect
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl">
              "Finding a doctor shouldn't be another thing you have to figure out when you're already not feeling well."
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              When someone is unwell, navigating hospital departments, calling reception desks, and guessing whether they need an internal physician, neurologist, or orthopedist adds needless anxiety.
            </p>

            {/* Three key friction points solved */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5">Department Confusion</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Patients often book with the wrong department, wasting days before reaching the appropriate specialist.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5">Endless Phone Calls</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Traditional clinics still rely on manual phone calls, walk-in queues, and double-booking risks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5">Connected Guidance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  CareConnect AI unifies conversational symptom guidance with real-time, conflict-free slot reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
