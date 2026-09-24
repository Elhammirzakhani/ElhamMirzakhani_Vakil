import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Clock3, MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { WhatsAppIcon } from './icons';

interface HeroSectionProps {
  onOpenLicenseModal: () => void;
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  const facts = [
    { icon: BadgeCheck, label: 'پروانه وکالت', value: `شماره ${attorney.licenseNumber}` },
    { icon: MapPin, label: 'محل دفتر', value: `${contact.city}، چهارراه فصیحی` },
    { icon: Clock3, label: contact.workingDays, value: contact.workingHoursShort },
  ];

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0 paper-grid pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-gold-soft/50 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 text-right">
            <motion.span {...rise(0)} className="eyebrow">
              {attorney.title} · {attorney.barAssociation}
            </motion.span>

            <motion.h1
              {...rise(0.08)}
              id="hero-title"
              className="mt-5 text-[2.6rem] leading-[1.15] sm:text-6xl lg:text-[4.25rem] font-black tracking-tight text-ink"
            >
              {attorney.fullName}
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-4 text-lg sm:text-xl font-bold text-gold">
              خدمات حقوقی، کیفری، خانواده و ثبتی در {contact.city}
            </motion.p>

            <motion.p {...rise(0.22)} className="mt-5 max-w-xl text-base sm:text-lg leading-9 text-muted">
              {attorney.biography.lead}
            </motion.p>

            <motion.div {...rise(0.3)} className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href={contact.telUri} className="btn-primary px-6 min-h-14 text-base group">
                <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" strokeWidth={1.75} />
                <span>
                  تماس مستقیم: <span dir="ltr" className="tabular">{contact.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 min-h-14 text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>پیام در واتس‌اپ</span>
              </a>
            </motion.div>

            <motion.p {...rise(0.36)} className="mt-4 text-xs sm:text-sm text-subtle leading-7 max-w-xl">
              برای حفظ رازداری، هماهنگی مشاوره فقط از طریق تماس یا پیام مستقیم با شخص وکیل انجام می‌شود.
            </motion.p>

            {/* Trust facts */}
            <motion.dl
              {...rise(0.44)}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-line ring-1 ring-line max-w-2xl"
            >
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-surface/90 px-4 py-4 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gold-bright shrink-0" strokeWidth={1.75} />
                  <div className="min-w-0">
                    <dt className="text-[11px] text-subtle">{label}</dt>
                    <dd className="text-sm font-bold text-ink tabular truncate">{value}</dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[20rem] sm:max-w-sm">
              {/* Offset gold frame */}
              <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-[2rem] border border-gold-bright/60" />

              <figure className="relative rounded-[2rem] overflow-hidden bg-paper-deep shadow-deep">
                <img
                  src={attorney.avatarUrl}
                  alt={`پرتره ${attorney.fullName}، ${attorney.title}`}
                  className="w-full aspect-[4/5] object-cover"
                  width={400}
                  height={500}
                  fetchPriority="high"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
                <figcaption className="absolute bottom-4 right-5 text-white">
                  <span className="block text-sm font-bold">{attorney.fullName}</span>
                  <span className="block text-xs text-gold-soft">{attorney.title}</span>
                </figcaption>
              </figure>

              {/* License card, overlapping the frame */}
              <button
                type="button"
                onClick={onOpenLicenseModal}
                className="group absolute -left-3 sm:-left-8 top-8 w-32 sm:w-40 rounded-2xl bg-surface p-2 shadow-lift ring-1 ring-line text-right transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1"
                aria-label="مشاهده تصویر بزرگ پروانه وکالت"
              >
                <img
                  src={attorney.licenseImageUrl}
                  alt=""
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  loading="lazy"
                />
                <span className="flex items-center gap-1 px-1 pt-2 pb-0.5 text-[11px] font-bold text-ink">
                  <BadgeCheck className="w-3.5 h-3.5 text-gold-bright" />
                  پروانه رسمی {attorney.licenseNumber}
                </span>
                <span className="block px-1 text-[10px] text-gold group-hover:underline">مشاهده تصویر</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
