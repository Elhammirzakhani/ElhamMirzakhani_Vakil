import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
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

  const openLicense = () => setIsLicenseModalOpen(true);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ink focus:text-white"
      >
        رفتن به محتوای اصلی
      </a>

      <div className="min-h-dvh flex flex-col">
        <Header onOpenLicenseModal={openLicense} />

        <main id="main" className="flex-1">
          <HeroSection onOpenLicenseModal={openLicense} />
          <AboutSection onOpenLicenseModal={openLicense} />
          <ServicesSection onSelectService={setSelectedService} />
          <ContactSection />
        </main>

        <Footer onOpenLicenseModal={openLicense} />
      </div>

      <FloatingActionBar />

      <LicenseModal isOpen={isLicenseModalOpen} onClose={() => setIsLicenseModalOpen(false)} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </MotionConfig>
  );
}
