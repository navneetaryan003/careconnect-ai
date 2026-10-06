import React from 'react';
import { Stethoscope, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';
import './SpecialtyRecommendation.css';

export default function SpecialtyRecommendation({
  recommendation,
  onViewDoctors
}) {
  if (!recommendation || !recommendation.success) return null;

  const { specialty, careGreeting, careMessage, guidanceReason, isEmergency, questionsForDoctor, disclaimer } = recommendation;

  const handleViewDoctors = () => {
    if (onViewDoctors) {
      onViewDoctors(specialty.id);
    }
    const elem = document.getElementById('find-doctor');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="recommendation-section" className="py-8 bg-sky-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="recommendation-card p-6 sm:p-9 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Emergency Alert Banner if critical symptoms detected */}
          {isEmergency && (
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="font-bold">Urgent Medical Advisory:</span> If you are experiencing acute chest pain, severe shortness of breath, sudden weakness, or an emergency, please call 112 / 911 or head to the nearest Emergency Department immediately.
              </div>
            </div>
          )}

          {/* Continuous Dialogue Header from Care */}
          <div className="flex items-start gap-3.5 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-soft flex-shrink-0">
              Care
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">Care</span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 font-semibold">
                  Recommendation
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1 italic font-medium">
                "{careGreeting}"
              </p>
            </div>
          </div>

          {/* Main Recommendation Box */}
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 relative z-10 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
              Based on what you've described
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {specialty.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {specialty.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={handleViewDoctors}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all cursor-pointer"
                >
                  View available doctors
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Empathetic Reasoning */}
            <div className="mt-5 pt-4 border-t border-slate-200 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-800 mb-1">
                A {specialty.name} specialist may be a good place to start.
              </p>
              <p className="text-slate-600 text-sm">{guidanceReason}</p>
            </div>

            {/* Helpful Questions to ask doctor */}
            {questionsForDoctor && questionsForDoctor.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                  Helpful questions you might ask your doctor:
                </p>
                <ul className="space-y-1 text-xs text-slate-600">
                  {questionsForDoctor.map((q, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Safety Disclaimer */}
          <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-sky-50/50 p-3.5 rounded-xl border border-sky-100">
            <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
            <p className="leading-normal">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
