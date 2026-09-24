import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BadgeCheck, Menu, Phone, Scale, X } from 'lucide-react';
import { businessConfig } from '../config/business';
import { WhatsAppIcon } from './icons';

interface HeaderProps {
  onOpenLicenseModal: () => void;
}

const navLinks = [
  { label: 'صفحه اصلی', id: 'hero' },
  { label: 'درباره وکیل', id: 'about' },
  { label: 'خدمات حقوقی', id: 'services' },
  { label: 'تماس و نشانی', id: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlights the nav link of the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 border-b ${
          isScrolled || mobileMenuOpen
            ? 'bg-paper/90 backdrop-blur-lg border-line shadow-soft'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[4.5rem]">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 group rounded-lg">
            <span className="w-10 h-10 rounded-xl bg-ink text-gold-soft flex items-center justify-center shrink-0 ring-1 ring-gold/40 transition-transform duration-300 group-hover:-rotate-6">
              <Scale className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-extrabold text-ink tracking-tight">{attorney.fullName}</span>
              <span className="text-[11px] sm:text-xs text-gold font-medium">
                {attorney.title} · پروانه {attorney.licenseNumber}
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="منوی اصلی" className="hidden lg:flex items-center gap-1 rounded-full bg-surface/70 ring-1 ring-line px-1.5 py-1.5">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenLicenseModal}
              className="hidden md:inline-flex items-center gap-1.5 h-10 px-3.5 text-xs font-semibold text-gold rounded-xl border border-gold/30 bg-gold-wash hover:bg-gold-soft transition-colors"
            >
              <BadgeCheck className="w-4 h-4" strokeWidth={1.75} />
              <span>مشاهده پروانه</span>
            </button>

            <a
              href={contact.telUri}
              className="hidden sm:inline-flex btn-primary min-h-10 h-10 px-4 text-sm"
              aria-label={`تماس با شماره ${contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              <span className="tabular" dir="ltr">{contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl text-ink hover:bg-paper-deep transition-colors"
              aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              className="absolute top-16 inset-x-3 rounded-3xl bg-surface shadow-deep ring-1 ring-line p-5 space-y-5"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="منوی موبایل" className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-3 text-base font-semibold rounded-xl transition-colors ${
                      activeId === link.id ? 'bg-gold-wash text-ink' : 'text-muted hover:bg-paper'
                    }`}
                  >
                    {link.label}
                    {activeId === link.id && <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" />}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLicenseModal();
                }}
                className="w-full flex items-center gap-2 p-3.5 rounded-xl border border-gold/30 bg-gold-wash text-sm font-semibold text-gold"
              >
                <BadgeCheck className="w-5 h-5" strokeWidth={1.75} />
                مشاهده تصویر پروانه رسمی وکالت
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a href={contact.telUri} className="btn-primary">
                  <Phone className="w-4 h-4" />
                  تماس
                </a>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon className="w-4 h-4" />
                  واتس‌اپ
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
