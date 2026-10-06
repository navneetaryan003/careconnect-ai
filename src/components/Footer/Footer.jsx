import React from 'react';
import { Activity, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenArchitecture }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Row: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                CareConnect AI
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Smart online doctor appointment booking platform. Helping patients find the right specialist through compassionate conversational AI guidance and conflict-free live slot booking.
            </p>
            <div className="text-xs text-slate-500 font-medium">
              NeoHack 2026 Project • IMS Engineering College, Ghaziabad
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-sky-400 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#symptom-section" className="hover:text-sky-400 transition-colors">
                  Symptom Triage
                </a>
              </li>
              <li>
                <a href="#find-doctor" className="hover:text-sky-400 transition-colors">
                  Doctor Directory
                </a>
              </li>
              <li>
                <a href="#appointment-slots" className="hover:text-sky-400 transition-colors">
                  Live Slot Booking
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenArchitecture}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  System Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Ethics Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Clinical Safety
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400">Non-diagnostic Triage</span>
              </li>
              <li>
                <span className="text-slate-400">Conflict-Free Slot Locks</span>
              </li>
              <li>
                <span className="text-slate-400">Emergency Protocol (112/911)</span>
              </li>
              <li>
                <span className="text-slate-400">Patient Privacy Protected</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reassuring Medical Disclaimer Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold text-white">Trust & Clinical Safety Disclaimer:</span> Care provides guidance to help you find the right healthcare service. It does not diagnose medical conditions or replace professional medical advice. If you are experiencing a life-threatening emergency, please contact your local emergency helpline immediately.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Team CareConnect AI (Navneet Aryan, Anshu Kumari, Pragati Jaiswal)</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 CareConnect AI. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
