import React from 'react';
import { MessageSquare, Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Tell Care',
    description: "Describe what you're experiencing in your everyday words. No medical jargon needed.",
    icon: MessageSquare,
    badge: 'Symptom Triage'
  },
  {
    num: '02',
    title: 'Find your match',
    description: 'Care guides you toward the relevant clinical specialty and verified specialists.',
    icon: Sparkles,
    badge: 'Specialty Routing'
  },
  {
    num: '03',
    title: 'Choose a time',
    description: 'See live, conflict-free appointment slots for today, tomorrow, or later.',
    icon: Calendar,
    badge: 'Live Slots'
  },
  {
    num: '04',
    title: "You're booked",
    description: 'Receive instant confirmation, calendar sync, and automated SMS reminders.',
    icon: CheckCircle2,
    badge: 'Zero Waiting'
  }
];

export default function HowItWorks() {
  const scrollToSymptom = () => {
    const elem = document.getElementById('symptom-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/60">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Healthcare, without the hassle.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From first symptom to confirmed doctor consultation in under two minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 transition-all duration-200 group"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-sky-600/30 group-hover:text-sky-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded-md inline-block mb-2">
                  {step.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA banner under steps */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToSymptom}
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 bg-sky-50 px-5 py-2.5 rounded-xl border border-sky-200/80 hover:bg-sky-100 transition-colors cursor-pointer"
          >
            Ready to try it? Tell Care your symptoms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
