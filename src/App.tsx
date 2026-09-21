import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { LicenseModal } from './components/LicenseModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalService } from './types';

export default function App() {
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#151c26] flex flex-col relative selection:bg-[#fddfa4] selection:text-[#261a00]">
      {/* Top Sovereign Accent Line */}
      <div className="fixed top-0 inset-x-0 z-50 h-1 bg-gradient-to-r from-transparent via-[#715b2d] to-transparent opacity-90"></div>

      {/* Header */}
      <Header onOpenLicenseModal={() => setIsLicenseModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-14 sm:pt-16 flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenLicenseModal={() => setIsLicenseModalOpen(true)} />

        {/* 2. About the Attorney Section */}
        <AboutSection onOpenLicenseModal={() => setIsLicenseModalOpen(true)} />

        {/* 3. Legal Practice Areas (4 Services) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Contact & Office Location with Direct Consultation Notice */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLicenseModal={() => setIsLicenseModalOpen(true)} />

      {/* Floating Contact Bar */}
      <FloatingActionBar />

      {/* Official Bar License Image Lightbox Modal */}
      <LicenseModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
