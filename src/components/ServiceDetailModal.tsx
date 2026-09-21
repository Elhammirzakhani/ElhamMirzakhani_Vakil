import React from 'react';
import { X, CheckCircle2, PhoneCall, ArrowLeft } from 'lucide-react';
import { LegalService } from '../types';
import { businessConfig } from '../config/business';

interface ServiceDetailModalProps {
  service: LegalService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  const prefilledWhatsappForService = `https://wa.me/989131803538?text=${encodeURIComponent(
    `سلام، جهت مشاوره حقوقی در زمینه «${service.title}» با شما ارتباط برقرار می‌کنم.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-l from-[#101c2c] to-[#1a2d46] text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#fddfa4]">
              <span className="material-symbols-outlined text-2xl">{service.icon}</span>
            </div>
            <div>
              <span className="text-xs text-[#fddfa4] font-medium">خدمات تخصصی وکالت</span>
              <h3 id="service-modal-title" className="text-xl font-bold mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          <p className="text-sm text-[#44474c] leading-relaxed">
            {service.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-bold text-[#101c2c] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#715b2d]"></span>
              شرح موضوعات و محورهای اصلی رسیدگی:
            </h4>
            <ul className="space-y-2.5">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151c26] bg-[#f8f9ff] p-3 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#715b2d] shrink-0 mt-0.5" />
                  <span className="leading-normal">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#eff3ff] p-4 rounded-xl text-xs text-[#151c26] border border-[#e2e8f7] space-y-1">
            <div className="font-semibold text-[#101c2c]">نحوه درخواست مشاوره:</div>
            <p className="text-gray-600 leading-relaxed">
              جهت حفظ محرمانگی مدارک و بررسی تخصصی موضوع، درخواست مشاوره صرفاً از طریق تماس تلفنی مستقیم با خود وکیل یا ارسال پیام در واتس‌اپ انجام می‌گردد.
            </p>
          </div>
        </div>

        {/* Action Buttons: Direct Call & WhatsApp */}
        <div className="p-4 bg-[#f8f9ff] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={businessConfig.contact.telUri}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#101c2c] text-white rounded-lg hover:bg-[#1a2d46] text-xs font-bold w-full sm:w-auto transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-[#fddfa4]" />
            <span>تماس تلفنی مستقیم با وکیل</span>
          </a>

          <a
            href={prefilledWhatsappForService}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1b7a4b] text-white rounded-lg hover:bg-[#15633c] text-xs font-bold w-full sm:w-auto transition-colors"
          >
            <span>ارسال پیام در واتس‌اپ</span>
          </a>
        </div>
      </div>
    </div>
  );
};
