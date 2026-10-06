import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import HealthyHabits from '../../components/HealthyHabits/HealthyHabits';
import BodySignals from '../../components/BodySignals/BodySignals';
import SeekHelp from '../../components/SeekHelp/SeekHelp';
import CareConnectTools from '../../components/CareConnectTools/CareConnectTools';
import SymptomInput from '../../components/SymptomInput/SymptomInput';
import SpecialtyRecommendation from '../../components/SpecialtyRecommendation/SpecialtyRecommendation';
import DoctorDiscovery from '../../components/DoctorDiscovery/DoctorDiscovery';
import AppointmentSlots from '../../components/AppointmentSlots/AppointmentSlots';
import BookingModal from '../../components/BookingModal/BookingModal';
import BookingConfirmation from '../../components/BookingModal/BookingConfirmation';
import AppointmentsListModal from '../../components/BookingModal/AppointmentsListModal';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import ProblemStory from '../../components/ProblemStory/ProblemStory';
import Features from '../../components/Features/Features';
import ArchitectureModal from '../../components/ArchitectureModal/ArchitectureModal';
import FinalCTA from '../../components/FinalCTA/FinalCTA';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  // 3D Care Assistant state: 'idle' | 'hover' | 'listening' | 'typing' | 'pointing'
  const [careState, setCareState] = useState('idle');

  // AI Triage recommendation result
  const [recommendation, setRecommendation] = useState(null);

  // Filtered specialty id
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState('all');

  // Doctor selected for appointment
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Booking Flow Modals
  const [bookingPendingData, setBookingPendingData] = useState(null);
  const [confirmedAppointment, setConfirmedAppointment] = useState(null);
  const [showAppointmentsList, setShowAppointmentsList] = useState(false);
  const [showArchitectureModal, setShowArchitectureModal] = useState(false);

  // Handle recommendation arrival
  const handleRecommendationReceived = (result) => {
    setRecommendation(result);
    if (result?.specialty?.id) {
      setSelectedSpecialtyId(result.specialty.id);
    }
  };

  // Handle "View available doctors" click from recommendation
  const handleViewRecommendedDoctors = (specialtyId) => {
    setSelectedSpecialtyId(specialtyId);
  };

  // Handle proceed to book from slot picker
  const handleProceedToBook = (slotData) => {
    setBookingPendingData({
      ...slotData,
      symptomsSummary: recommendation?.userInput || ''
    });
  };

  // Handle booking success
  const handleBookingSuccess = (appointment) => {
    setBookingPendingData(null);
    setConfirmedAppointment(appointment);
    setCareState('hover'); // Care celebrates with a welcoming wave/smile
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF] text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Sticky Navigation */}
      <Navbar
        onOpenArchitecture={() => setShowArchitectureModal(true)}
        onOpenAppointments={() => setShowAppointmentsList(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive 3D Care */}
        <Hero
          careState={careState}
          setCareState={setCareState}
          onRecommendationReceived={handleRecommendationReceived}
        />

        <HealthyHabits />
        <BodySignals />
        <SeekHelp />
        <CareConnectTools />

        {/* Conversational Symptom Interaction */}
        <SymptomInput
          careState={careState}
          setCareState={setCareState}
          onRecommendationReceived={handleRecommendationReceived}
          onClearRecommendation={() => setRecommendation(null)}
        />

        {/* 3. Specialty Recommendation Result (Continuity of dialogue) */}
        {recommendation && (
          <SpecialtyRecommendation
            recommendation={recommendation}
            onViewDoctors={handleViewRecommendedDoctors}
          />
        )}

        {/* 4. Doctor Discovery Directory */}
        <DoctorDiscovery
          selectedSpecialtyId={selectedSpecialtyId}
          onSpecialtyChange={setSelectedSpecialtyId}
          selectedDoctor={selectedDoctor}
          onSelectDoctor={setSelectedDoctor}
        />

        {/* 5. Live Appointment Slots Selection */}
        <AppointmentSlots
          selectedDoctor={selectedDoctor}
          onSelectDoctor={setSelectedDoctor}
          onProceedToBook={handleProceedToBook}
        />

        {/* 6. Simple 4-Step Process */}
        <HowItWorks />

        {/* 7. The Human Story Behind CareConnect */}
        <ProblemStory />

        {/* 8. Core Platform Features */}
        <Features />

        {/* 9. Final Re-engagement CTA */}
        <FinalCTA setCareState={setCareState} />
      </main>

      {/* Footer */}
      <Footer onOpenArchitecture={() => setShowArchitectureModal(true)} />

      {/* Booking Intake Modal */}
      {bookingPendingData && (
        <BookingModal
          bookingData={bookingPendingData}
          onClose={() => setBookingPendingData(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* Booking Confirmation Card */}
      {confirmedAppointment && (
        <BookingConfirmation
          appointment={confirmedAppointment}
          onClose={() => setConfirmedAppointment(null)}
          onViewAllAppointments={() => {
            setConfirmedAppointment(null);
            setShowAppointmentsList(true);
          }}
        />
      )}

      {/* My Appointments List Modal */}
      {showAppointmentsList && (
        <AppointmentsListModal
          onClose={() => setShowAppointmentsList(false)}
        />
      )}

      {/* NeoHack 2026 Architecture Modal */}
      {showArchitectureModal && (
        <ArchitectureModal
          onClose={() => setShowArchitectureModal(false)}
        />
      )}
    </div>
  );
}
