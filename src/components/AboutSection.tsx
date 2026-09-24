import React from 'react';
import { BadgeCheck, MapPin } from 'lucide-react';
import { businessConfig } from '../config/business';
import { valueIcons } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface AboutSectionProps {
  onOpenLicenseModal: () => void;
}

const persianOrdinals = ['۰۱', '۰۲', '۰۳', '۰۴', '۰۵', '۰۶'];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 sm:py-28 bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Story */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-7">
          <SectionHeading id="about-title" eyebrow={`درباره ${attorney.fullName}`} title={attorney.biography.headline} />

          <Reveal delay={0.08}>
            <p className="text-base leading-9 text-ink/85">{attorney.biography.fullText}</p>
          </Reveal>

          <Reveal delay={0.14} className="flex flex-wrap gap-2.5 text-sm">
            <button
              type="button"
              onClick={onOpenLicenseModal}
              className="inline-flex items-center gap-2 rounded-full bg-gold-wash border border-gold/25 px-4 py-2 font-semibold text-gold hover:bg-gold-soft transition-colors"
            >
              <BadgeCheck className="w-4 h-4" strokeWidth={1.75} />
              پروانه وکالت {attorney.licenseNumber} · مشاهده
            </button>
            <span className="inline-flex items-center gap-2 rounded-full bg-paper border border-line px-4 py-2 text-muted">
              <MapPin className="w-4 h-4 text-gold-bright" strokeWidth={1.75} />
              استان {contact.province}، {contact.city}
            </span>
          </Reveal>
        </div>

        {/* Values */}
        <ol className="lg:col-span-7 divide-y divide-line border-y border-line">
          {attorney.biography.coreValues.map((value, idx) => {
            const Icon = valueIcons[value.icon];
            return (
              <Reveal as="li" key={value.title} delay={idx * 0.06} className="group py-7 sm:py-8 grid grid-cols-[auto_1fr_auto] items-start gap-5">
                <span className="text-sm font-bold text-gold-bright tabular pt-1">{persianOrdinals[idx]}</span>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-ink">{value.title}</h3>
                  <p className="text-sm sm:text-base leading-8 text-muted max-w-lg">{value.desc}</p>
                </div>
                <span className="w-11 h-11 rounded-2xl bg-paper text-gold flex items-center justify-center ring-1 ring-line transition-colors duration-300 group-hover:bg-ink group-hover:text-gold-soft">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
