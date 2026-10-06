import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Loader2, Sparkles, HelpCircle, ShieldAlert } from 'lucide-react';
import { analyzeSymptoms } from '../../services/aiService';
import './SymptomInput.css';

const SAMPLE_SYMPTOMS = [
  "I've been having headaches for the last few days...",
  "Persistent lower back pain and stiffness after sitting...",
  "Red itchy rash on my forearm since yesterday...",
  "Chest tightness and mild palpitations when stressed...",
  "Stomach cramps and acid reflux after meals...",
  "Sore throat, runny nose and mild fever..."
];

export default function SymptomInput({
  careState,
  setCareState,
  onRecommendationReceived,
  onClearRecommendation
}) {
  const [symptomText, setSymptomText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFocus = () => {
    setCareState('listening');
  };

  const handleBlur = () => {
    if (!symptomText.trim() && !loading) {
      setCareState('idle');
    }
  };

  const handleChange = (e) => {
    setSymptomText(e.target.value);
    if (error) setError('');
    if (e.target.value.length > 0) {
      setCareState('typing');
    } else {
      setCareState('listening');
    }
  };

  const handleSampleClick = (text) => {
    setSymptomText(text);
    setError('');
    setCareState('typing');
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!symptomText.trim()) {
      setError('Please describe your symptoms so Care can guide you.');
      return;
    }

    setLoading(true);
    setCareState('listening');

    try {
      const result = await analyzeSymptoms(symptomText);
      setLoading(false);
      setCareState('pointing');
      onRecommendationReceived(result);

      // Smooth scroll to recommendation
      setTimeout(() => {
        const elem = document.getElementById('recommendation-section');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError('Care had trouble analyzing your input. Please try again.');
      setCareState('idle');
    }
  };

  return (
    <section
      id="symptom-section"
      className="py-16 md:py-20 bg-gradient-to-b from-[#FAFCFF] via-white to-sky-50/40 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5 text-sky-600" />
            Conversational Triage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What's bothering you?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Tell Care what you're experiencing. You don't need to use medical terms or know which department to choose.
          </p>
        </div>

        {/* Conversational Box */}
        <div className="symptom-card p-6 sm:p-8 relative">
          {/* Care's Speech Bubble Header */}
          <div className="flex items-start gap-3.5 mb-5 pb-5 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-soft flex-shrink-0">
              Care
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">Care</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  Listening
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                "Hi, I'm Care. Tell me what you're experiencing. You don't need to know medical terminology—I'll guide you to the right place to start."
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="symptom-textarea" className="sr-only">
                Describe your symptoms
              </label>
              <textarea
                id="symptom-textarea"
                rows={4}
                value={symptomText}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="I've been having headaches for the last few days..."
                className="w-full px-4 py-3.5 text-base sm:text-lg text-slate-800 placeholder-slate-400 rounded-xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all resize-none leading-relaxed"
              />
            </div>

            {error && (
              <div className="text-xs text-rose-600 font-medium flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                {error}
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Ordinary language is best. E.g., "stiff neck", "fever since Monday".</span>
              </div>

              <button
                type="submit"
                disabled={loading || !symptomText.trim()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Care is thinking...
                  </>
                ) : (
                  <>
                    Help me find the right doctor
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Sample Prompts */}
          <div className="mt-7 pt-5 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Or try one of these common examples:
            </p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_SYMPTOMS.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSampleClick(sample)}
                  className="sample-chip"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
