import React, { useState } from 'react';
import { MessageCircle, Stethoscope, CalendarDays, ArrowRight } from 'lucide-react';
import './CareConnectTools.css';

const TOOLS = [
  {
    id: 'triage',
    target: 'symptom-section',
    title: 'Talk to Care',
    description: 'Describe what you are experiencing in everyday words. Care guides you toward the right specialty without a diagnosis.',
    action: 'Start symptom guidance',
    icon: MessageCircle
  },
  {
    id: 'doctors',
    target: 'find-doctor',
    title: 'Find a doctor',
    description: 'Browse verified specialists by department, search by name, and choose in-person or video consultation.',
    action: 'Open doctor directory',
    icon: Stethoscope
  },
  {
    id: 'slots',
    target: 'appointment-slots',
    title: 'Book a live slot',
    description: 'See conflict-free appointment times for today or later, then lock a slot in a few taps.',
    action: 'View available times',
    icon: CalendarDays
  }
];

export default function CareConnectTools() {
  const [activeTool, setActiveTool] = useState('triage');

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="careconnect-tools" className="py-20 md:py-28 bg-[#FAFCFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            CareConnect Tools
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From first symptom to a booked visit.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            When healthy habits are not enough, these tools help you find the right specialist and lock a real appointment time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                className={`tool-card text-left ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveTool(tool.id)}
                onFocus={() => setActiveTool(tool.id)}
                onClick={() => scrollTo(tool.target)}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 border border-teal-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{tool.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-teal-800">
                  {tool.action}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
