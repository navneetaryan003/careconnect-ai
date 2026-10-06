import React from 'react';
import { ArrowDown, Check, Clock, AlertCircle, HeartHandshake, Shield } from 'lucide-react';

export default function SeekHelp() {
  const scrollToTools = () => {
    const elem = document.getElementById('careconnect-tools');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="seek-help" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            Professional Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sometimes, the next step is talking to a doctor.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            While healthy habits support your foundation, noticing when symptoms persist, escalate, or disrupt your daily routine is the hallmark of responsible self-care.
          </p>
        </div>

        {/* The 3 Medical Checkpoint Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1.5">Persistence</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When an ache, cough, or unusual fatigue lingers for more than a few days without natural improvement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <AlertCircle className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1.5">Interference</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When physical discomfort stops you from working, sleeping peacefully, or enjoying time with loved ones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1.5">Uncertainty</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you feel unsure of whether your symptoms are minor or need an examination from an expert clinician.
            </p>
          </div>
        </div>

        {/* Bridge to CareConnect */}
        <div className="text-center max-w-xl mx-auto space-y-4 pt-4 border-t border-slate-100">
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
            That's where CareConnect can help.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We bridge the gap between everyday healthy living and medical access—guiding you toward the right department and verified clinical care without confusion.
          </p>

          <div className="pt-2">
            <button
              onClick={scrollToTools}
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-900 bg-teal-50 px-5 py-2.5 rounded-xl border border-teal-200/80 hover:bg-teal-100 transition-colors cursor-pointer"
            >
              Explore CareConnect tools
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
