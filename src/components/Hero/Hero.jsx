import React from 'react';
import { ArrowRight, Compass, HeartPulse } from 'lucide-react';
import CareAssistant3D from '../CareAssistant3D/CareAssistant3D';
import HeartBackground3D from '../HeartBackground3D/HeartBackground3D';
import './Hero.css';

export default function Hero({ careState, setCareState }) {
  const scrollToHabits = () => {
    const elem = document.getElementById('healthy-habits');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTools = () => {
    const elem = document.getElementById('find-doctor');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <HeartBackground3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="hero-copy-panel">
              <span className="hero-kicker">
                <HeartPulse className="w-3.5 h-3.5" />
                Daily Wellness & Clinical Guidance
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your health starts with the{' '}
                <span className="hero-accent">little things.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Small daily choices can make a big difference. Learn how to take better care of yourself and know when it's time to seek professional help.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToHabits}
                  className="hero-cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-white cursor-pointer active:scale-95"
                >
                  <Compass className="w-4 h-4 text-rose-100" />
                  Explore your health
                </button>

                <button
                  onClick={scrollToTools}
                  className="hero-cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-700 cursor-pointer"
                >
                  Find a doctor
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="hero-care-frame w-full max-w-[380px] sm:max-w-[420px] aspect-square relative flex items-center justify-center">
              <CareAssistant3D
                state={careState}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
