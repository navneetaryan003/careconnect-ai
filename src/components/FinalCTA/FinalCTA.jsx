import React from 'react';
import { ArrowRight, MessageCircle, Stethoscope, Sparkles } from 'lucide-react';

export default function FinalCTA({ setCareState }) {
  const handleTalkToCare = () => {
    setCareState('listening');
    const elem = document.getElementById('symptom-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const textarea = document.getElementById('symptom-textarea');
        if (textarea) textarea.focus();
      }, 500);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-600 text-white rounded-3xl p-8 sm:p-14 text-center shadow-soft-lg relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              Friendly Healthcare Guide
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Not sure where to start?{' '}
              <span className="block text-sky-100 mt-1 font-bold">Care can help.</span>
            </h2>

            <p className="text-base sm:text-lg text-sky-50 max-w-xl mx-auto leading-relaxed">
              Skip the confusion and long hold times. Describe your symptoms in plain language and discover the right doctor in moments.
            </p>

            <div className="pt-2">
              <button
                onClick={handleTalkToCare}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-base bg-white text-sky-700 hover:bg-sky-50 active:scale-95 shadow-soft transition-all duration-200 cursor-pointer"
              >
                Talk to Care
                <ArrowRight className="w-5 h-5 text-sky-600" />
              </button>
            </div>

            <p className="text-xs text-sky-100/80 pt-2">
              No medical terms required • 100% Confidential • Instant conflict-free booking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
