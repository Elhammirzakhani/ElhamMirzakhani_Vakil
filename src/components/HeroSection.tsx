import React from 'react';
import { ShieldCheck, Calendar, ArrowDown } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeroSectionProps {
  onOpenLicenseModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLicenseModal,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#eff3ff]/40 to-[#f8f9ff] py-8 sm:py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content (Right side in RTL) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right space-y-4 sm:space-y-5 order-2 lg:order-1">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-[#c5c6cd]/30">
              <span className="w-2 h-2 rounded-full bg-[#715b2d] shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-[#715b2d] tracking-wide">
                وکیل پایه یک دادگستری - کانون وکلای دادگستری
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151c26] leading-tight tracking-tight">
                {businessConfig.attorney.fullName}
              </h1>
              <div className="text-base sm:text-lg text-[#715b2d] font-bold">
                {businessConfig.attorney.title} | شماره پروانه وکالت: {businessConfig.attorney.licenseNumber}
              </div>
              <div className="text-sm sm:text-base text-[#101c2c] font-semibold">
                ارائه خدمات حقوقی، کیفری، خانواده و ثبتی در شهرکرد
              </div>
              <p className="text-sm sm:text-base text-[#44474c] max-w-2xl leading-relaxed pt-1 font-normal">
                {businessConfig.attorney.biography.lead}
              </p>
            </div>

            {/* Prominent Direct Consultation Notice */}
            <div className="p-3.5 bg-white border border-[#715b2d]/35 rounded-xl shadow-xs flex items-start gap-2.5 text-xs sm:text-sm text-[#101c2c] max-w-2xl">
              <span className="material-symbols-outlined text-[#715b2d] text-lg sm:text-xl shrink-0 mt-0.5">support_agent</span>
              <div className="leading-relaxed">
                <strong className="text-[#101c2c] font-bold">نحوه دریافت و درخواست مشاوره:</strong>{' '}
                <span className="text-gray-700">
                  جهت حفظ رازداری حرفه‌ای و بررسی مستقیم پرونده، هماهنگی مشاوره <strong>صرفاً از طریق تماس مستقیم تلفنی یا پیام با شخص وکیل</strong> صورت می‌پذیرد.
                </span>
              </div>
            </div>

            {/* Action CTAs: Direct Call & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Direct Phone Call */}
              <a
                href={businessConfig.contact.telUri}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#101c2c] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[#1a2d46] transition-all min-h-[46px] group"
              >
                <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">phone_in_talk</span>
                <span>تماس تلفنی مستقیم: <span dir="ltr" className="font-sans">{businessConfig.contact.phoneDisplay}</span></span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={businessConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1b7a4b] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[#15633c] transition-colors min-h-[46px]"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"></path>
                </svg>
                <span>پیام در واتس‌اپ</span>
              </a>
            </div>
          </div>

          {/* Visual Presentation (Left side in RTL) */}
          <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[310px] sm:max-w-[380px] lg:max-w-md">
              {/* Subtle architectural framing halo */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#715b2d]/25 via-[#e2e8f7] to-[#715b2d]/15 rounded-2xl -rotate-1 pointer-events-none"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#c5c6cd]/40">
                <img
                  src={businessConfig.attorney.avatarUrl}
                  alt={`پرتره ${businessConfig.attorney.fullName}، ${businessConfig.attorney.title}`}
                  className="w-full h-auto object-cover aspect-[4/5] block"
                  width="400"
                  height="500"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/75 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Official Bar License Thumbnail Button */}
                <button
                  type="button"
                  onClick={onOpenLicenseModal}
                  className="group absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 w-[115px] sm:w-[155px] lg:w-[170px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#715b2d] bg-[#101c2c] transition-all hover:scale-105 duration-300 focus:outline-none text-right cursor-pointer"
                  title="کلیک برای مشاهده بزرگنمایی پروانه رسمی وکالت"
                  aria-label="مشاهده تصویر بزرگ پروانه وکالت"
                >
                  <img
                    src={businessConfig.attorney.licenseImageUrl}
                    alt="پیش‌نمایش پروانه رسمی وکالت"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                  <div className="bg-[#101c2c] py-1 px-2 text-[10px] text-center text-[#fddfa4] font-medium border-t border-[#715b2d]/50 group-hover:bg-[#1a2d46]">
                    مشاهده پروانه رسمی ۴۳۱
                  </div>
                </button>

                {/* Floating Verified Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 py-1.5 px-3 bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-[#c5c6cd]/40 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#715b2d] text-base sm:text-lg">verified</span>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] sm:text-xs font-bold text-[#151c26]">پروانه رسمی ۴۳۱</span>
                    <span className="text-[9px] sm:text-[10px] text-[#715b2d] font-medium">کانون وکلای دادگستری</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
