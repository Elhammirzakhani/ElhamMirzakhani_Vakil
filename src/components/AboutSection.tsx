import React from 'react';
import { businessConfig } from '../config/business';

interface AboutSectionProps {
  onOpenLicenseModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  return (
    <section id="about" className="w-full py-12 sm:py-16 bg-white border-t border-[#e2e8f7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#715b2d] tracking-wide">
            هویت حرفه‌ای و پیشینه کاری
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151c26]">
            درباره {attorney.fullName}
          </h2>
          <div className="w-16 h-1 bg-[#715b2d] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Main Philosophy Card */}
        <div className="bg-[#f8f9ff] rounded-2xl p-6 sm:p-9 shadow-sm border border-[#c5c6cd]/40 space-y-6 text-right">
          {/* Card Title */}
          <div className="flex items-center gap-3 text-[#715b2d]">
            <div className="w-12 h-12 rounded-xl bg-[#101c2c] text-[#fddfa4] flex items-center justify-center shrink-0 shadow-sm border border-[#715b2d]/30">
              <span className="material-symbols-outlined text-2xl">balance</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101c2c]">
                {attorney.biography.headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#715b2d] font-medium">
                اصول بنیادین وکالت دادگستری و استانداردهای حرفه‌ای
              </p>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-sm sm:text-base text-[#151c26] leading-8 sm:leading-9 font-normal">
            {attorney.biography.fullText}
          </p>

          {/* 4 Professional Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {attorney.biography.coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-start gap-3 text-right"
              >
                <div className="w-9 h-9 rounded-lg bg-[#f8f6f1] text-[#715b2d] flex items-center justify-center shrink-0 border border-[#715b2d]/20">
                  <span className="material-symbols-outlined text-xl">{value.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#101c2c]">{value.title}</h4>
                  <p className="text-xs text-[#44474c] leading-relaxed mt-1">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Bar */}
          <div className="pt-4 border-t border-[#c5c6cd]/40 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#44474c]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#715b2d] text-lg">verified</span>
              <span className="font-medium">
                شماره پروانه رسمی وکالت: <strong className="text-[#101c2c]">{attorney.licenseNumber}</strong>
              </span>
              <button
                type="button"
                onClick={onOpenLicenseModal}
                className="text-[#715b2d] hover:underline mr-1 font-semibold text-xs"
              >
                (مشاهده پروانه)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#715b2d] text-lg">location_on</span>
              <span className="font-medium">استان {contact.province}، {contact.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
