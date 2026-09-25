import React from 'react';
import { BadgeCheck, Clock3, MapPin } from 'lucide-react';
import { businessConfig } from '../config/business';
import { valueIcons } from './icons';
import { InfoCard } from './InfoCard';

interface AboutSectionProps {
  onOpenLicenseModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-surface border-y border-line">
      <div className="shell">
        <div className="grid grid-cols-[1fr_34%] md:grid-cols-12 gap-x-4 md:gap-x-12 lg:gap-x-16 gap-y-6">
          {/* Intro */}
          <div className="md:col-span-7 md:order-1 space-y-3 sm:space-y-4 text-right">
            <span className="eyebrow">درباره {attorney.fullName}</span>
            <h2 id="about-title" className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.45] text-ink">
              {attorney.biography.headline}
            </h2>
            {attorney.biography.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[13px] sm:text-base leading-7 sm:leading-8 text-muted max-w-2xl">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Office detail photo */}
          <div className="md:col-span-5 md:order-2 md:row-span-3 relative">
            <img
              src={attorney.officeDetailUrl}
              alt="نمایی از قفسه کتاب‌های حقوقی و تندیس عدالت در دفتر وکالت"
              width={330}
              height={440}
              loading="lazy"
              decoding="async"
              className="w-full h-full max-h-[22rem] md:max-h-none object-cover object-[30%_center] rounded-2xl md:rounded-[2rem] [mask-image:linear-gradient(to_right,black_70%,transparent)] md:[mask-image:none] md:aspect-[3/4] md:shadow-lift"
            />
          </div>

          {/* Credentials, location and hours */}
          <div className="col-span-2 md:col-span-7 md:order-3 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            <InfoCard icon={MapPin} label="موقعیت دفتر" value={contact.shortAddress} />
            <InfoCard
              icon={Clock3}
              label="ساعات پذیرش"
              value={contact.workingDays}
              hint={<span className="tabular">{contact.workingHoursShort}</span>}
            />
            <InfoCard
              icon={BadgeCheck}
              label="پروانه وکالت"
              value={`شماره ${attorney.licenseNumber}`}
              hint="مشاهده تصویر پروانه"
              onClick={onOpenLicenseModal}
              className="col-span-2 lg:col-span-1"
            />
          </div>

          {/* Principles */}
          <ul className="col-span-2 md:col-span-7 md:order-4 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-6 pt-2">
            {attorney.biography.coreValues.map((value) => {
              const Icon = valueIcons[value.icon];
              return (
                <li key={value.title} className="flex items-start gap-2.5 sm:gap-3">
                  <Icon className="w-5 h-5 mt-0.5 text-gold-bright shrink-0" strokeWidth={1.6} />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-ink">{value.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-6 text-muted">{value.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
