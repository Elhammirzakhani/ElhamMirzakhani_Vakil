import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, Clock3, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { InstagramIcon, WhatsAppIcon } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const steps = [
  { title: 'تماس یا پیام', desc: 'موضوع پرونده را به‌طور خلاصه تلفنی یا در واتس‌اپ با شخص وکیل مطرح کنید.' },
  { title: 'تعیین وقت', desc: 'زمان مشاوره تلفنی یا مراجعه حضوری با هماهنگی قبلی مشخص می‌شود.' },
  { title: 'بررسی مدارک', desc: 'در جلسه، اسناد و مدارک پرونده با دقت مطالعه و مسیر قانونی تشریح می‌شود.' },
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

  const channelClass =
    'group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-surface ring-1 ring-line transition-[box-shadow,background-color] duration-200 hover:shadow-soft';

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28 bg-paper-deep/60 border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="ارتباط مستقیم با وکیل"
          title="درخواست مشاوره و نشانی دفتر"
          lead="برای حفظ رازداری و امنیت اسناد، در این سایت فرم ثبت‌نام یا واسطه اینترنتی وجود ندارد و شما مستقیماً با خود وکیل در ارتباط خواهید بود."
        />

        {/* Consultation steps */}
        <Reveal className="mt-12 rounded-3xl bg-ink text-white p-6 sm:p-10 relative overflow-hidden">
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold-bright/15 blur-3xl" />
          <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, idx) => (
              <li key={step.title} className="flex gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full border border-gold-bright/50 text-gold-soft flex items-center justify-center text-sm font-bold">
                  {(idx + 1).toLocaleString('fa-IR')}
                </span>
                <div>
                  <h3 className="font-bold text-base">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-white/70">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="relative mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a href={contact.telUri} className="btn bg-gold-soft text-ink hover:bg-white px-6">
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              تماس: <span dir="ltr" className="tabular">{contact.phoneDisplay}</span>
            </a>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6">
              <WhatsAppIcon className="w-4 h-4" />
              ارسال پیام در واتس‌اپ
            </a>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Channels */}
          <Reveal className="flex flex-col gap-3">
            <div className="p-5 sm:p-6 rounded-2xl bg-surface ring-1 ring-line">
              <p className="text-xs font-semibold text-gold">مشخصات وکیل</p>
              <p className="mt-1 text-xl font-extrabold text-ink">{attorney.fullName}</p>
              <p className="mt-1 text-sm text-muted">
                {attorney.title} · پروانه {attorney.licenseNumber} · {contact.city}
              </p>
            </div>

            <div className={channelClass}>
              <span className="w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <a href={contact.telUri} className="flex-1 min-w-0 rounded-lg">
                <span className="block text-xs text-subtle">تلفن همراه (مستقیم)</span>
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

            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={channelClass}>
              <span className="w-12 h-12 rounded-xl bg-whatsapp text-white flex items-center justify-center shrink-0">
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

            <a href={contact.social.instagramUrl} target="_blank" rel="noopener noreferrer" className={channelClass}>
              <span className="w-12 h-12 rounded-xl bg-paper text-ink ring-1 ring-line flex items-center justify-center shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs text-subtle">صفحه اینستاگرام</span>
                <span className="block text-base font-bold text-ink" dir="ltr">
                  {contact.social.instagramHandle}
                </span>
              </span>
              <ChevronLeft className="w-5 h-5 text-subtle transition-transform group-hover:-translate-x-1" />
            </a>
          </Reveal>

          {/* Address & map */}
          <Reveal delay={0.08} className="flex flex-col rounded-2xl bg-surface ring-1 ring-line overflow-hidden">
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gold-bright shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="text-lg font-bold text-ink">نشانی دفتر وکالت</h3>
                  <address className="not-italic mt-1 text-sm sm:text-base leading-8 text-muted">{contact.address}</address>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gold-wash p-4">
                <Clock3 className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.75} />
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
                title={`موقعیت دفتر وکالت ${attorney.fullName} روی نقشه`}
                src={contact.mapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 grayscale-[35%]"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-quiet w-full">
                <Navigation className="w-4 h-4 text-gold" strokeWidth={1.75} />
                مسیریابی در نقشه گوگل
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
