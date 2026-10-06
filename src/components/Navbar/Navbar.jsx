import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, Calendar, ArrowRight, Shield } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenArchitecture, onOpenAppointments }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (!elem) return;
    const headerOffset = 88;
    const y = elem.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <header
      className={`navbar-sticky transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/40 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-sky-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  CareConnect
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200/60">
                  AI
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('healthy-habits')}
              className="nav-link"
            >
              Healthy Habits
            </button>
            <button
              onClick={() => scrollToSection('body-signals')}
              className="nav-link"
            >
              Listen to Your Body
            </button>
            <button
              onClick={() => scrollToSection('seek-help')}
              className="nav-link"
            >
              When to Seek Help
            </button>
            <button
              onClick={() => scrollToSection('careconnect-tools')}
              className="nav-link text-teal-800 font-semibold"
            >
              CareConnect Tools
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="nav-link"
            >
              How it works
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAppointments}
              className="text-xs font-semibold text-slate-600 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              My Bookings
            </button>

            <button
              onClick={() => scrollToSection('find-doctor')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow-soft transition-all duration-200"
            >
              Find a doctor
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-1 bg-white/98 rounded-2xl p-4 shadow-soft">
            <button
              onClick={() => scrollToSection('healthy-habits')}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Healthy Habits
            </button>
            <button
              onClick={() => scrollToSection('body-signals')}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Listen to Your Body
            </button>
            <button
              onClick={() => scrollToSection('seek-help')}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              When to Seek Help
            </button>
            <button
              onClick={() => scrollToSection('careconnect-tools')}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-teal-800 hover:bg-teal-50"
            >
              CareConnect Tools
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              How it works
            </button>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointments();
                }}
                className="w-full text-center px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
              >
                View My Bookings
              </button>
              <button
                onClick={() => scrollToSection('find-doctor')}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800"
              >
                Find a doctor →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
