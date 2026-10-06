import React from 'react';
import { X, Server, Database, Brain, Smartphone, Users, Shield, Award, CheckCircle2 } from 'lucide-react';

export default function ArchitectureModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            NeoHack 2026 Innovation Architecture
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            CareConnect AI System Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Production design for end-to-end outpatient healthcare scheduling and AI guidance.
          </p>
        </div>

        {/* Multi-Tier Architecture Pipeline */}
        <div className="space-y-4 mb-6">
          {/* Layer 1: Client */}
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">Client Tier</span>
              <h4 className="font-bold text-sm text-slate-900">Responsive WebApp & Companion Mobile App</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                React 18, Three.js WebGL Assistant ("Care"), Tailwind CSS, and conflict-free slot reservation interface.
              </p>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="text-center text-xs font-bold text-slate-400">
            ↓ REST API / HTTPS
          </div>

          {/* Layer 2: Java Spring Boot Backend */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">Backend Tier</span>
              <h4 className="font-bold text-sm text-slate-900">Java + Spring Boot REST Engine</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Slot locking engine, concurrent transactional booking safety, Twilio SMS/email notifications, and authentication.
              </p>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="text-center text-xs font-bold text-slate-400">
            ↓ ORM / JDBC & AI Gateway
          </div>

          {/* Layer 3: Database & AI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Data Tier</span>
                <h4 className="font-bold text-xs text-slate-900">MySQL Database</h4>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Doctor schemas, clinic timetables, slot states, appointment records, and patient profiles.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">Intelligence Tier</span>
                <h4 className="font-bold text-xs text-slate-900">LLM Triage Gateway</h4>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Natural language symptom classification, department suggestion, and non-diagnostic safety guardrails.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Sided Role Breakdown */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            Unified 3-Sided Portal Ecosystem
          </h4>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-white border border-slate-200">
              <span className="font-bold text-slate-900 block">Patient</span>
              <span className="text-[10px] text-slate-500">Symptom Search & Slot Booking</span>
            </div>
            <div className="p-2 rounded-xl bg-white border border-slate-200">
              <span className="font-bold text-slate-900 block">Doctor</span>
              <span className="text-[10px] text-slate-500">Availability & Patient Queue</span>
            </div>
            <div className="p-2 rounded-xl bg-white border border-slate-200">
              <span className="font-bold text-slate-900 block">Admin</span>
              <span className="text-[10px] text-slate-500">OPD Ops & Clinic Analytics</span>
            </div>
          </div>
        </div>

        {/* Hackathon Team Credits */}
        <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-center justify-between text-xs text-slate-600">
          <div>
            <span className="font-bold text-slate-900 block">Team CareConnect AI (NeoHack 2026)</span>
            <span className="text-slate-500">Navneet Aryan • Anshu Kumari • Pragati Jaiswal</span>
          </div>
          <span className="text-[11px] font-semibold text-sky-700">
            IMS Engineering College
          </span>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-all cursor-pointer shadow-soft"
          >
            Close Architecture Overview
          </button>
        </div>
      </div>
    </div>
  );
}
