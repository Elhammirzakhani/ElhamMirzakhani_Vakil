import React from 'react';
import { BadgeCheck, X } from 'lucide-react';
import { businessConfig } from '../config/business';
import { Modal } from './Modal';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const { attorney, contact } = businessConfig;

  const rows = [
    { label: 'نام و نام خانوادگی', value: attorney.fullName },
    { label: 'عنوان حرفه‌ای', value: attorney.title },
    { label: 'شماره پروانه', value: attorney.licenseNumber },
    { label: 'حوزه فعالیت', value: `استان ${contact.province}، ${contact.city}` },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="license-modal-title" className="sm:max-w-lg">
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-line">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gold-wash text-gold flex items-center justify-center">
            <BadgeCheck className="w-5 h-5" strokeWidth={1.75} />
          </span>
          <div>
            <h2 id="license-modal-title" className="text-base font-bold text-ink">پروانه رسمی وکالت</h2>
            <p className="text-xs text-gold">{attorney.barAssociation}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-subtle hover:text-ink hover:bg-paper transition-colors"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-y-auto">
        <div className="p-4 bg-ink">
          <img
            src={attorney.licenseImageUrl}
            alt={`تصویر پروانه رسمی وکالت ${attorney.fullName}`}
            className="max-h-[55dvh] w-auto mx-auto object-contain rounded-lg ring-1 ring-gold-bright/40"
          />
        </div>

        <dl className="px-5 py-4 divide-y divide-line text-sm">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
              <dt className="text-subtle">{row.label}</dt>
              <dd className="font-bold text-ink text-left">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Modal>
  );
};
