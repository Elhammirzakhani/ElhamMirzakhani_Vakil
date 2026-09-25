import React, { useEffect, useState } from 'react';
import { Check, Phone, X } from 'lucide-react';
import { LegalService } from '../types';
import { businessConfig } from '../config/business';
import { serviceIcons, WhatsAppIcon } from './icons';
import { Modal } from './Modal';

interface ServiceDetailModalProps {
  service: LegalService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const { contact } = businessConfig;

  // Keep the last service so its content stays rendered during the exit animation
  const [shown, setShown] = useState<LegalService | null>(service);
  useEffect(() => {
    if (service) setShown(service);
  }, [service]);

  const current = service ?? shown;
  if (!current) return null;

  const Icon = serviceIcons[current.icon];
  const whatsappUrl = `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(
    `سلام، جهت مشاوره حقوقی در زمینه «${current.title}» با شما ارتباط برقرار می‌کنم.`
  )}`;

  return (
    <Modal isOpen={service !== null} onClose={onClose} labelledBy="service-modal-title" className="sm:max-w-xl">
      <div className="relative px-6 pt-6 pb-5 bg-ink text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-gold-bright/40 text-gold-soft flex items-center justify-center">
              <Icon className="w-6 h-6" strokeWidth={1.6} />
            </span>
            <div>
              <p className="text-xs text-gold-soft">{current.scope}</p>
              <h2 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold mt-0.5">
                {current.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6 overflow-y-auto">
        <p className="text-sm sm:text-base leading-8 text-muted">{current.description}</p>

        {current.detailGroups.map((group, idx) => (
          <div key={group.title ?? idx}>
            <h3 className="text-sm font-bold text-ink">{group.title ?? 'موضوعات اصلی رسیدگی'}</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 text-sm leading-7 text-ink/85">
                  <Check className="w-4 h-4 mt-1.5 text-gold-bright shrink-0" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-xs leading-6 text-subtle">
          برای حفظ محرمانگی مدارک، درخواست مشاوره فقط از طریق تماس تلفنی یا پیام مستقیم به وکیل انجام می‌شود.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 border-t border-line bg-paper">
        <a href={contact.telUri} className="btn-primary">
          <Phone className="w-4 h-4" strokeWidth={1.75} />
          تماس تلفنی با وکیل
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon className="w-4 h-4" />
          پیام درباره این موضوع
        </a>
      </div>
    </Modal>
  );
};
