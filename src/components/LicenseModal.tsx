import React from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="license-modal-title"
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#715b2d]/30 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#f8f9ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#715b2d] text-xl">verified</span>
            <div>
              <h3 id="license-modal-title" className="text-base font-bold text-[#151c26]">
                پروانه رسمی وکالت
              </h3>
              <p className="text-xs text-[#715b2d]">
                {businessConfig.attorney.barAssociation} | پروانه شماره {businessConfig.attorney.licenseNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="بستن پنجره"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* License Image View */}
        <div className="p-4 bg-[#101c2c] flex flex-col items-center justify-center">
          <div className="relative max-h-[70vh] overflow-hidden rounded-lg shadow-md border-2 border-[#715b2d]/50 bg-black/40">
            <img
              src={businessConfig.attorney.licenseImageUrl}
              alt="تصویر پروانه رسمی وکالت الهام میرزاخانی"
              className="max-h-[60vh] w-auto object-contain block mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer Details */}
        <div className="p-4 bg-[#f8f9ff] text-right space-y-2 text-xs text-[#44474c]">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#151c26]">نام و نام خانوادگی:</span>
            <span className="font-bold text-[#101c2c]">{businessConfig.attorney.fullName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#151c26]">عنوان حرفه‌ای:</span>
            <span>{businessConfig.attorney.title}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#151c26]">شماره پروانه رسمی:</span>
            <span className="font-bold text-[#715b2d]">{businessConfig.attorney.licenseNumber}</span>
          </div>
          <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between">
            <span className="text-[11px] text-gray-500">حوزه فعالیت: استان چهارمحال و بختیاری، شهرکرد</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#101c2c] text-white text-xs rounded-lg hover:bg-[#1a2d46] transition-colors"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
