import React from 'react';
import { businessConfig } from '../config/business';

interface FooterProps {
  onOpenLicenseModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  return (
    <footer className="w-full bg-[#eff3ff] border-t border-[#c5c6cd]/30 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1: Identity */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-[#101c2c]">
              <div className="w-8 h-8 rounded-lg bg-[#101c2c] text-[#fddfa4] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">balance</span>
              </div>
              <span className="text-lg font-bold">{attorney.fullName}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#715b2d] font-bold">
              {attorney.title} | شماره پروانه وکالت: {attorney.licenseNumber}
            </p>
            <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed max-w-sm">
              ارائه خدمات حقوقی و قبول وکالت در مراجع قضایی و ثبتی استان چهارمحال و بختیاری و شهرکرد با رعایت تعهدات اخلاق حرفه‌ای.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenLicenseModal}
                className="text-xs text-[#715b2d] hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>مشاهده پروانه رسمی کانون وکلای دادگستری</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm sm:text-base text-[#101c2c] font-bold">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#44474c]">
              <li>
                <a href="#hero" className="hover:text-[#715b2d] transition-colors">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#715b2d] transition-colors">
                  درباره وکیل
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#715b2d] transition-colors">
                  حوزه‌های خدمات حقوقی
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#715b2d] transition-colors">
                  تماس با دفتر و نشانی
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm sm:text-base text-[#101c2c] font-bold">اطلاعات تماس و نشانی</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#44474c]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#715b2d] text-base shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#715b2d] text-base shrink-0">
                  call
                </span>
                <a href={contact.telUri} className="hover:text-[#715b2d] transition-colors font-medium" dir="ltr">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#715b2d] text-base shrink-0">
                  chat
                </span>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#715b2d] transition-colors"
                  dir="ltr"
                >
                  {contact.whatsappNumber} (واتس‌اپ)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#715b2d] text-base shrink-0">
                  share
                </span>
                <a
                  href={contact.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#715b2d] transition-colors"
                  dir="ltr"
                >
                  {contact.social.instagramHandle} (اینستاگرام)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-4 border-t border-[#c5c6cd]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right text-xs text-[#44474c]">
          <p>کلیه حقوق محفوظ است - وب‌سایت رسمی الهام میرزاخانی، وکیل پایه یک دادگستری.</p>
          <span className="font-semibold text-[#715b2d]">پروانه وکالت شماره {attorney.licenseNumber}</span>
        </div>
      </div>
    </footer>
  );
};
