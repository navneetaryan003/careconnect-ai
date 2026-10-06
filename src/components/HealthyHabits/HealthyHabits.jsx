import React, { useState } from 'react';
import { Activity, Apple, Moon, Droplets, Heart, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import './HealthyHabits.css';

const HABITS = [
  {
    id: 'move',
    title: 'MOVE',
    tagline: 'Stay physically active throughout the day.',
    description: 'Our bodies are designed for frequent, gentle motion. You do not need punishing workouts to protect your cardiovascular health—regular daily walking, stretching between desk tasks, and light resistance preserve joint flexibility and circulation.',
    icon: Activity,
    highlight: 'Aim for 30 minutes of gentle, consistent movement every day.',
    stats: 'Reduces cardiovascular risk and lifts baseline energy',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderColor: 'border-emerald-200/80',
    accentColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    tips: ['Take short 5-minute movement breaks every hour', 'Choose stairs over elevators when possible', 'Gentle evening strolls aid digestion']
  },
  {
    id: 'eat',
    title: 'EAT WELL',
    tagline: 'Choose balanced, nutritious meals.',
    description: 'Nutrition is your primary medicine. Whole foods rich in fiber, varied plant colors, lean proteins, and unsaturated fats sustain the gut microbiome, balance blood sugar, and shield your body from chronic low-grade inflammation.',
    icon: Apple,
    highlight: 'Fill half your plate with colorful plants, leafy greens, and whole grains.',
    stats: 'Strengthens immune resilience and cognitive clarity',
    bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderColor: 'border-amber-200/80',
    accentColor: 'text-amber-800',
    badgeBg: 'bg-amber-100 text-amber-900',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    tips: ['Eat a rainbow of varied vegetable colors', 'Mindful eating: chew slowly and savor flavors', 'Limit ultra-processed sugars and artificial additives']
  },
  {
    id: 'sleep',
    title: 'SLEEP',
    tagline: 'Give your body enough time to recover.',
    description: 'Sleep is the fundamental biological process through which your brain clears metabolic waste, tissues repair, and cellular memories consolidate. Chronic sleep deficits quietly stress hormone regulation and immune defenses.',
    icon: Moon,
    highlight: '7 to 8 hours of uninterrupted rest is essential for cellular repair.',
    stats: 'Vital for immune defense and emotional equilibrium',
    bgGradient: 'from-indigo-500/10 via-sky-500/5 to-transparent',
    borderColor: 'border-indigo-200/80',
    accentColor: 'text-indigo-800',
    badgeBg: 'bg-indigo-100 text-indigo-900',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    tips: ['Maintain a consistent sleep and wake schedule', 'Keep your bedroom dark, quiet, and cool', 'Power down screens 45 minutes before sleep']
  },
  {
    id: 'hydrate',
    title: 'HYDRATE',
    tagline: 'Keep your body properly hydrated.',
    description: 'Water enables every chemical reaction in human physiology. Proper hydration preserves kidney filtration, maintains blood volume, lubricates joints, prevents tension headaches, and promotes glowing skin health.',
    icon: Droplets,
    highlight: 'Drink clean water consistently from morning until evening.',
    stats: 'Protects kidney filtration and metabolic alertness',
    bgGradient: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    borderColor: 'border-sky-200/80',
    accentColor: 'text-sky-800',
    badgeBg: 'bg-sky-100 text-sky-900',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80',
    tips: ['Start your morning with a large glass of room-temp water', 'Keep a reusable water bottle within arm’s reach', 'Increase fluids naturally during warm weather or exercise']
  },
  {
    id: 'stress',
    title: 'MANAGE STRESS',
    tagline: 'Make time to slow down and recharge.',
    description: 'Unmanaged chronic stress floods your vascular system with cortisol and adrenaline, altering blood pressure and impairing sleep. Learning to deliberately slow your breathing sends an immediate physiological signal of safety.',
    icon: Heart,
    highlight: 'Carve out 10 to 15 quiet minutes each day for stillness and conscious breaths.',
    stats: 'Calms the nervous system and supports heart health',
    bgGradient: 'from-rose-500/10 via-pink-500/5 to-transparent',
    borderColor: 'border-rose-200/80',
    accentColor: 'text-rose-800',
    badgeBg: 'bg-rose-100 text-rose-900',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    tips: ['Practice 4-second box breathing when overwhelmed', 'Step outdoors into natural daylight daily', 'Set healthy boundaries around digital connectivity']
  }
];

export default function HealthyHabits() {
  const [activeHabitIndex, setActiveHabitIndex] = useState(0);
  const activeHabit = HABITS[activeHabitIndex];
  const Icon = activeHabit.icon;

  return (
    <section id="healthy-habits" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            Daily Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Good health is built every day.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Taking care of your health starts long before you ever need an appointment. These five daily practices form the cornerstone of lifelong vitality.
          </p>
        </div>

        {/* Interactive Habit Navigation Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {HABITS.map((habit, idx) => (
            <button
              key={habit.id}
              onClick={() => setActiveHabitIndex(idx)}
              className={`habit-nav-btn ${idx === activeHabitIndex ? 'active' : ''}`}
            >
              {habit.title}
            </button>
          ))}
        </div>

        {/* Big Visual Storytelling Card */}
        <div className={`habit-story-card bg-gradient-to-br ${activeHabit.bgGradient} bg-white border ${activeHabit.borderColor} p-6 sm:p-10 lg:p-12 shadow-soft-lg`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Story Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeHabit.badgeBg}`}>
                  Chapter 0{activeHabitIndex + 1}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeHabit.stats}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeHabit.tagline}
              </h3>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {activeHabit.description}
              </p>

              {/* Highlight callout */}
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <p className={`text-sm font-bold ${activeHabit.accentColor} flex items-start gap-2`}>
                  <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{activeHabit.highlight}</span>
                </p>
              </div>

              {/* Daily Actionable Micro-tips */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Simple daily rhythm:
                </p>
                <div className="space-y-2">
                  {activeHabit.tips.map((tip, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${activeHabit.accentColor}`} />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photographic / Visual Companion */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3] sm:aspect-[5/4] lg:aspect-square">
                <img
                  src={activeHabit.image}
                  alt={activeHabit.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-semibold tracking-wide uppercase">
                    Daily Practice • {activeHabit.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Progression Indicator */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 max-w-sm mx-auto">
          <button
            onClick={() => setActiveHabitIndex((prev) => (prev > 0 ? prev - 1 : HABITS.length - 1))}
            className="hover:text-slate-900 font-semibold cursor-pointer p-1"
          >
            ← Previous habit
          </button>
          <span>{activeHabitIndex + 1} of {HABITS.length}</span>
          <button
            onClick={() => setActiveHabitIndex((prev) => (prev < HABITS.length - 1 ? prev + 1 : 0))}
            className="hover:text-slate-900 font-semibold cursor-pointer p-1"
          >
            Next habit →
          </button>
        </div>
      </div>
    </section>
  );
}
