import React from 'react';
import { Eye, ShieldCheck, HeartPulse, Sparkles, AlertCircle, Compass, HelpCircle } from 'lucide-react';

const SIGNALS = [
  {
    title: 'Persistent Fatigue',
    subtitle: 'Tiredness that does not lift after a full night’s sleep.',
    insight: 'While common after intense work, sustained exhaustion can indicate iron imbalance, thyroid variations, or sleep apnea.',
    icon: Sparkles
  },
  {
    title: 'Recurring Tension & Aches',
    subtitle: 'Tension headaches or lower back stiffness that repeats weekly.',
    insight: 'Often tied to posture, hydration, or stress, but worth noting if it begins to limit your ordinary activities.',
    icon: Compass
  },
  {
    title: 'Digestive Fluctuations',
    subtitle: 'Unusual changes in appetite, recurring bloating, or acid reflux.',
    insight: 'Your gut reacts swiftly to stress and diet, but persistent changes deserve thoughtful observation.',
    icon: HeartPulse
  },
  {
    title: 'Sleep Disruptions',
    subtitle: 'Waking frequently or struggling to enter deep rest.',
    insight: 'Restless nights alter immune resistance and blood pressure, often serving as an early indicator that your pace needs adjusting.',
    icon: Eye
  }
];

export default function BodySignals() {
  return (
    <section id="body-signals" className="py-20 md:py-28 bg-[#FAFCFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            Awareness & Mindful Health
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your body tells you when something needs attention.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Not every symptom means something serious. But understanding what you're experiencing can help you decide what to do next.
          </p>
        </div>

        {/* 4 Thoughtful Observations (Non-diagnostic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SIGNALS.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 border border-teal-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">
                    {signal.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {signal.insight}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-teal-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Observe duration and intensity calmly</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thoughtful Reassurance Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5 text-xs text-slate-600">
          <HelpCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-800">Mindful Awareness Principle:</strong> Our bodies naturally fluctuate day to day. A single headache after a busy afternoon is normal; recognizing patterns over weeks helps you take charge of your wellness before issues escalate.
          </p>
        </div>
      </div>
    </section>
  );
}
