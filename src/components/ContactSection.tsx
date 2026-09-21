import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, Check, ChevronLeft } from 'lucide-react';
import { businessConfig } from '../config/business';

export const ContactSection: React.FC = () => {
  const { attorney, contact } = businessConfig;
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contact.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#715b2d] tracking-wide">
            راه‌های ارتباطی مستقیم
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151c26]">
            تماس با وکیل
          </h2>
          <div className="w-16 h-1 bg-[#715b2d] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Quick Consultation Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 p-5 sm:p-6 bg-white border-2 border-[#715b2d]/50 rounded-2xl shadow-md text-right space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101c2c] text-[#fddfa4] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
            </div>
            <div>
              <span className="text-xs text-[#715b2d] font-bold">ارتباط مستقیم با وکیل پایه یک دادگستری</span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#101c2c]">نحوه درخواست و دریافت مشاوره حقوقی</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            به منظور حفظ رازداری حرفه‌ای، صیانت از اسناد پرونده و بررسی جامع جوانب حقوقی، <strong>هیچ‌گونه فرم ثبت‌نام یا واسطه اینترنتی در سایت وجود ندارد</strong>. درخواست مشاوره و تعیین وقت ملاقات حضوری یا تلفنی، <strong>صرفاً از طریق تماس مستقیم تلفنی با شخص وکیل یا ارسال پیام در واتس‌اپ</strong> انجام می‌پذیرد و شما مستقیماً با خود وکیل در ارتباط خواهید بود.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={contact.telUri}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#101c2c] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:bg-[#1a2d46] transition-all w-full sm:w-auto min-h-[44px]"
            >
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              <span>تماس مستقیم تلفنی با وکیل: <span dir="ltr">{contact.phoneDisplay}</span></span>
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1b7a4b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:bg-[#15633c] transition-colors w-full sm:w-auto min-h-[44px]"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>ارسال پیام در واتس‌اپ</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Left is Contacts, Right is Address & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Right Column in RTL: Contact Channels */}
          <div className="lg:col-span-6 flex flex-col space-y-4 text-right">
            {/* Attorney Identity Box */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#c5c6cd]/40 space-y-1">
              <div className="text-[#715b2d] text-xs font-semibold">مشخصات وکیل</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101c2c]">{attorney.fullName}</h3>
              <p className="text-xs sm:text-sm text-[#44474c]">
                {attorney.title} | پروانه وکالت: {attorney.licenseNumber} | استان {contact.province}، {contact.city}
              </p>
            </div>

            {/* Direct Phone Call */}
            <a
              href={contact.telUri}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-xs hover:bg-[#f8f6f1] transition-all group border border-[#c5c6cd]/40 min-h-[64px]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#101c2c] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#44474c]">تلفن همراه و مستقیم</span>
                  <span className="text-sm sm:text-base text-[#101c2c] font-bold" dir="ltr">
                    {contact.phoneDisplay}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#715b2d] text-xs sm:text-sm font-semibold group-hover:-translate-x-1 transition-transform">
                <span>تماس مستقیم</span>
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </div>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-xs hover:bg-emerald-50/40 transition-all group border border-emerald-800/20 min-h-[64px]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1b7a4b] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#44474c]">پیام‌رسان واتس‌اپ</span>
                  <span className="text-sm sm:text-base text-[#101c2c] font-bold" dir="ltr">
                    {contact.whatsappNumber}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#1b7a4b] text-xs sm:text-sm font-semibold group-hover:-translate-x-1 transition-transform">
                <span>ارسال پیام</span>
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </div>
            </a>

            {/* Instagram Link */}
            <a
              href={contact.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-xs hover:bg-pink-50/40 transition-all group border border-pink-800/20 min-h-[64px]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#44474c]">صفحه رسمی اینستاگرام</span>
                  <span className="text-sm sm:text-base text-[#101c2c] font-bold" dir="ltr">
                    {contact.social.instagramHandle}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#b52667] text-xs sm:text-sm font-semibold group-hover:-translate-x-1 transition-transform">
                <span>مشاهده صفحه</span>
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </div>
            </a>

            {/* Email Link */}
            <a
              href={contact.emailUri}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-xs hover:bg-gray-50 transition-all group border border-[#c5c6cd]/40 min-h-[64px]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-[#101c2c] flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform border border-gray-200">
                  <Mail className="w-5 h-5 text-[#715b2d]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#44474c]">پست الکترونیک (ایمیل)</span>
                  <span className="text-xs sm:text-sm text-[#101c2c] font-medium" dir="ltr">
                    {contact.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#715b2d] text-xs sm:text-sm font-semibold group-hover:-translate-x-1 transition-transform">
                <span>ارسال ایمیل</span>
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </div>
            </a>
          </div>

          {/* Left Column in RTL: Office Address & Google Maps Navigation */}
          <div className="lg:col-span-6 flex flex-col space-y-4 text-right">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-[#c5c6cd]/40 flex flex-col justify-between h-full space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#715b2d]">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">location_on</span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#151c26]">نشانی دفتر وکالت</h4>
                </div>

                <p className="text-sm sm:text-base text-[#151c26] leading-relaxed pt-1 font-medium">
                  {contact.address}
                </p>

                <div className="bg-[#eff3ff] p-3.5 rounded-lg border border-[#dce3f1] space-y-1 text-xs sm:text-sm text-[#101c2c]">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-4 h-4 text-[#715b2d]" />
                    <span>ساعات پذیرش مراجعین:</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {contact.workingDays} {contact.workingHours}
                  </p>
                </div>

                <p className="text-xs text-[#44474c] leading-relaxed">
                  {contact.appointmentNote}
                </p>
              </div>

              {/* Embedded Map Visual */}
              <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-inner">
                <iframe
                  title="موقعیت دفتر وکالت الهام میرزاخانی در شهرکرد چهارراه فصیحی"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=50.8520%2C32.3240%2C50.8670%2C32.3310&layer=mapnik&marker=32.3276%2C50.8596"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded text-[10px] font-semibold text-gray-700 shadow-xs">
                  شهرکرد، چهارراه فصیحی
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="pt-2">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#101c2c] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:bg-[#1a2d46] transition-colors min-h-[46px]"
                >
                  <span className="material-symbols-outlined text-lg">map</span>
                  <span>مسیریابی در نقشه گوگل (شهرکرد، چهارراه فصیحی)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
