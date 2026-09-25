import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, Clock3, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { InstagramIcon, WhatsAppIcon } from './icons';
import { SectionHeading } from './SectionHeading';

const steps = [
  'موضوع را تلفنی یا در واتس‌اپ با شخص وکیل مطرح کنید.',
  'زمان مشاوره تلفنی یا مراجعه حضوری هماهنگ می‌شود.',
  'در جلسه، مدارک پرونده بررسی و مسیر قانونی تشریح می‌شود.',
];

export const ContactSection: React.FC = () => {
  const { attorney, contact } = businessConfig;
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneInternational);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the number stays visible to copy manually
    }
  };

  const rowClass =
    'group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-surface ring-1 ring-line transition-shadow duration-200 hover:shadow-soft';

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-paper-deep/60 border-t border-line">
      <div className="shell">
        <SectionHeading
          id="contact-title"
          eyebrow="تماس با وکیل"
          title="درخواست مشاوره و نشانی دفتر"
          lead="برای حفظ رازداری، درخواست مشاوره فقط از طریق تماس یا پیام مستقیم با شخص وکیل انجام می‌شود."
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Channels & process */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <div className={rowClass}>
              <span className="w-11 h-11 rounded-xl bg-ink text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <a href={contact.telUri} className="flex-1 min-w-0 rounded-lg">
                <span className="block text-xs text-subtle">تلفن مستقیم وکیل</span>
                <span className="block text-base sm:text-lg font-bold text-ink tabular" dir="ltr">
                  {contact.phoneDisplay}
                </span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold text-muted bg-paper ring-1 ring-line hover:text-ink transition-colors"
                aria-label="کپی شماره تلفن"
              >
                {copied ? <Check className="w-4 h-4 text-whatsapp" /> : <Copy className="w-4 h-4" />}
                <span aria-live="polite">{copied ? 'کپی شد' : 'کپی'}</span>
              </button>
            </div>

            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <span className="w-11 h-11 rounded-xl bg-whatsapp text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs text-subtle">پیام در واتس‌اپ</span>
                <span className="block text-base sm:text-lg font-bold text-ink tabular" dir="ltr">
                  {contact.whatsappNumber}
                </span>
              </span>
              <ChevronLeft className="w-5 h-5 text-subtle transition-transform group-hover:-translate-x-1" />
            </a>

            <a href={contact.social.instagramUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <span className="w-11 h-11 rounded-xl bg-paper text-ink ring-1 ring-line flex items-center justify-center shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs text-subtle">اینستاگرام</span>
                <span className="block text-base font-bold text-ink" dir="ltr">
                  {contact.social.instagramHandle}
                </span>
              </span>
              <ChevronLeft className="w-5 h-5 text-subtle transition-transform group-hover:-translate-x-1" />
            </a>

            <div className="mt-1 rounded-2xl bg-surface ring-1 ring-line p-4 sm:p-5">
              <h3 className="text-sm font-bold text-ink">مراحل دریافت مشاوره</h3>
              <ol className="mt-3 space-y-2.5">
                {steps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-7 text-muted">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-gold-wash text-gold text-xs font-bold flex items-center justify-center ring-1 ring-gold-bright/30">
                      {(idx + 1).toLocaleString('fa-IR')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Address, hours & map */}
          <div className="flex flex-col rounded-2xl bg-surface ring-1 ring-line overflow-hidden">
            <div className="p-4 sm:p-5 space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gold-bright shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="text-base font-bold text-ink">نشانی دفتر وکالت</h3>
                  <address className="not-italic mt-1 text-sm leading-7 text-muted">{contact.address}</address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="w-5 h-5 mt-1 text-gold-bright shrink-0" strokeWidth={1.75} />
                <div className="text-sm">
                  <p className="font-bold text-ink">
                    {contact.workingDays}، ساعت <span className="tabular">{contact.workingHoursShort}</span>
                  </p>
                  <p className="mt-1 leading-7 text-muted">{contact.appointmentNote}</p>
                </div>
              </div>
            </div>

            <div className="relative flex-1 min-h-56 border-y border-line bg-paper">
              <iframe
                title={`موقعیت دفتر وکالت ${attorney.fullName} در ${contact.city} روی نقشه`}
                src={contact.mapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="p-3 sm:p-4">
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-quiet w-full">
                <Navigation className="w-4 h-4 text-gold" strokeWidth={1.75} />
                مسیریابی تا دفتر
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
