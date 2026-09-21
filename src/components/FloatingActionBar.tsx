import React, { useState, useEffect } from 'react';
import { Phone, Navigation, MessageCircle, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/business';

export const FloatingActionBar: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { contact } = businessConfig;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 inset-x-0 z-40 px-4 pointer-events-none flex justify-center items-end">
      <div className="pointer-events-auto flex items-center gap-2 bg-[#101c2c]/95 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl shadow-2xl border border-[#715b2d]/50 max-w-md w-full justify-between sm:justify-center">
        {/* Direct Call */}
        <a
          href={contact.telUri}
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white text-[#101c2c] rounded-xl text-xs font-bold shadow-sm hover:bg-gray-100 transition-colors"
          aria-label="تماس مستقیم تلفنی با وکیل"
        >
          <Phone className="w-3.5 h-3.5 text-[#101c2c]" />
          <span>تماس مستقیم</span>
        </a>

        {/* WhatsApp */}
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1b7a4b] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#15633c] transition-colors"
          aria-label="ارسال پیام در واتس‌اپ"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"></path>
          </svg>
          <span>واتس‌اپ</span>
        </a>

        {/* Maps Navigation */}
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#f8f6f1] text-[#101c2c] rounded-xl text-xs font-bold hover:bg-[#efe9dd] transition-colors border border-[#715b2d]/30"
          aria-label="مسیریابی در نقشه گوگل"
        >
          <Navigation className="w-3.5 h-3.5 text-[#715b2d]" />
          <span>مسیریابی</span>
        </a>

        {/* Scroll To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors shrink-0"
            aria-label="رفتن به بالای صفحه"
            title="رفتن به بالا"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
