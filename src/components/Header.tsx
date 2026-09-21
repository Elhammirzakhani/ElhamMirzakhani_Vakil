import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, FileText } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeaderProps {
  onOpenLicenseModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLicenseModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'صفحه اصلی', href: '#hero' },
    { label: 'درباره وکیل', href: '#about' },
    { label: 'خدمات حقوقی', href: '#services' },
    { label: 'تماس با وکیل', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f8f9ff]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(16,28,44,0.08)] py-1'
            : 'bg-[#f8f9ff]/90 backdrop-blur-sm shadow-[0_1px_8px_rgba(16,28,44,0.04)] py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* Brand / Attorney Details */}
          <a href="#hero" className="flex items-center gap-3 text-right group">
            <div className="w-10 h-10 rounded-lg bg-[#101c2c] text-[#fddfa4] flex items-center justify-center shadow-sm shrink-0 border border-[#715b2d]/40 group-hover:bg-[#1a2d46] transition-colors">
              <span className="material-symbols-outlined text-2xl">balance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#101c2c] tracking-tight leading-tight group-hover:text-[#715b2d] transition-colors">
                {businessConfig.attorney.fullName}
              </span>
              <span className="text-[11px] sm:text-xs text-[#715b2d] font-medium">
                {businessConfig.attorney.title} | پروانه {businessConfig.attorney.licenseNumber}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#44474c] hover:text-[#101c2c] hover:font-semibold transition-all relative py-1 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#715b2d] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Direct Phone CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Bar License Button */}
            <button
              onClick={onOpenLicenseModal}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#715b2d] bg-[#f8f6f1] border border-[#715b2d]/40 rounded-lg hover:bg-[#efe9dd] transition-colors"
              title="مشاهده پروانه رسمی وکالت"
            >
              <Shield className="w-3.5 h-3.5 text-[#715b2d]" />
              <span>استعلام پروانه</span>
            </button>

            {/* Direct Call Link */}
            <a
              href={businessConfig.contact.telUri}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#101c2c] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#1a2d46] transition-all shadow-sm shrink-0 min-h-[40px]"
              aria-label={`تماس با شماره ${businessConfig.contact.phoneDisplay}`}
            >
              <span className="material-symbols-outlined text-[18px]">phone</span>
              <span className="font-medium" dir="ltr">{businessConfig.contact.phoneDisplay}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#101c2c] hover:bg-gray-200/60 transition-colors focus:outline-none"
              aria-label="باز کردن منوی موبایل"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 right-0 w-4/5 max-w-sm h-[calc(100vh-4rem)] bg-[#f8f9ff] shadow-2xl p-6 flex flex-col justify-between border-l border-gray-200 animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6 text-right">
              <div className="pb-4 border-b border-gray-200">
                <span className="text-sm font-bold text-[#101c2c]">
                  {businessConfig.attorney.fullName}
                </span>
                <p className="text-xs text-[#715b2d] mt-1">
                  {businessConfig.attorney.title} (پروانه {businessConfig.attorney.licenseNumber})
                </p>
              </div>

              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-[#151c26] hover:text-[#715b2d] py-2 px-3 rounded-lg hover:bg-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLicenseModal();
                }}
                className="w-full flex items-center justify-between p-3 bg-white rounded-xl border border-[#715b2d]/30 text-xs font-semibold text-[#715b2d]"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#715b2d]" />
                  <span>مشاهده تصویر پروانه رسمی وکالت</span>
                </div>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href={businessConfig.contact.telUri}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#101c2c] text-white rounded-lg text-sm font-bold shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{businessConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={businessConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1b7a4b] text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                <span>ارسال پیام در واتس‌اپ</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
