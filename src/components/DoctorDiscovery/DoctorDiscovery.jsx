import React, { useState, useMemo } from 'react';
import { Search, Filter, Stethoscope, Video, MapPin, CheckCircle, Info } from 'lucide-react';
import { getAllDoctors, searchDoctors } from '../../services/doctorService';
import { SPECIALTIES } from '../../services/aiService';
import DoctorCard from './DoctorCard';
import './DoctorDiscovery.css';

const SPECIALTY_OPTIONS = [
  { id: 'all', label: 'All Specialties' },
  ...Object.values(SPECIALTIES).map(s => ({ id: s.id, label: s.name }))
];

export default function DoctorDiscovery({
  selectedSpecialtyId = 'all',
  onSpecialtyChange,
  selectedDoctor,
  onSelectDoctor
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('all');

  const filteredDoctors = useMemo(() => {
    return searchDoctors(searchQuery, selectedSpecialtyId, selectedMode);
  }, [searchQuery, selectedSpecialtyId, selectedMode]);

  const handleSelectAndScroll = (doc) => {
    onSelectDoctor(doc);
    const elem = document.getElementById('appointment-slots');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="find-doctor" className="py-16 md:py-20 bg-[#FAFCFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-2">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
              Verified Doctor Directory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find the right doctor
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Connect with experienced specialists across hospital departments and clinics. Choose between in-person consultation or video appointment.
            </p>
          </div>

          {/* Consultation mode toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setSelectedMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedMode('In-Person')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                selectedMode === 'In-Person' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3 h-3 text-emerald-600" />
              In-Person
            </button>
            <button
              onClick={() => setSelectedMode('Video Call')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                selectedMode === 'Video Call' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-3 h-3 text-sky-600" />
              Video Call
            </button>
          </div>
        </div>

        {/* Search & Specialty Filter Pills */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name, specialty, or condition..."
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all shadow-xs"
            />
          </div>

          {/* Specialty Horizontal Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SPECIALTY_OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => onSpecialtyChange(opt.id)}
                className={`specialty-tab ${selectedSpecialtyId === opt.id ? 'active' : ''}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isSelected={selectedDoctor?.id === doctor.id}
                onSelectDoctor={handleSelectAndScroll}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Stethoscope className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">No doctors match your criteria</h4>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or selecting "All Specialties" to see all available clinical specialists.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSpecialtyChange('all');
                setSelectedMode('all');
              }}
              className="mt-4 px-4 py-2 bg-sky-50 text-sky-700 font-semibold text-xs rounded-xl hover:bg-sky-100"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Clear demo data notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <Info className="w-3.5 h-3.5" />
          <span>Demo clinical directory for CareConnect AI presentation. No artificial statistics or endorsements.</span>
        </div>
      </div>
    </section>
  );
}
