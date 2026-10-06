import React from 'react';
import { Star, Clock, MapPin, Video, Building, Calendar, ArrowRight, Award } from 'lucide-react';

export default function DoctorCard({
  doctor,
  isSelected,
  onSelectDoctor
}) {
  return (
    <div
      className={`doctor-card p-5 sm:p-6 flex flex-col justify-between ${
        isSelected ? 'ring-2 ring-sky-600 border-sky-600 bg-sky-50/20' : ''
      }`}
    >
      <div>
        {/* Top Header: Avatar, Name, Specialty & Rating */}
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border border-slate-100 shadow-sm"
              loading="lazy"
            />
            <span className="absolute -bottom-1 -right-1 p-1 bg-sky-600 text-white rounded-full shadow-xs" title="Verified Specialist">
              <Award className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h4 className="font-bold text-lg text-slate-900 truncate">
                {doctor.name}
              </h4>
              <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md flex-shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{doctor.rating}</span>
                <span className="text-slate-400 font-normal">({doctor.reviewCount})</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-sky-700 mt-0.5">
              {doctor.specialtyName}
            </p>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {doctor.qualification} • {doctor.experienceYears} yrs experience
            </p>
          </div>
        </div>

        {/* Short compassionate bio */}
        <p className="text-xs text-slate-600 mt-4 line-clamp-2 leading-relaxed">
          {doctor.bio}
        </p>

        {/* Clinic & Consultation Types */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 truncate">
            <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{doctor.hospitalOrClinic}</span>
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            {doctor.consultationModes.map((mode, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
              >
                {mode === 'Video Call' ? <Video className="w-3 h-3 text-sky-600" /> : <MapPin className="w-3 h-3 text-emerald-600" />}
                {mode}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer: Next Available & Action Button */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50/80 px-2.5 py-1.5 rounded-lg">
          <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
          <span>{doctor.nextAvailable}</span>
        </div>

        <button
          onClick={() => onSelectDoctor(doctor)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            isSelected
              ? 'bg-emerald-600 text-white shadow-soft'
              : 'bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white'
          }`}
        >
          {isSelected ? 'Selected' : 'View Slots'}
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
