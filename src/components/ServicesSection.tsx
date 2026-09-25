import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { LegalService } from '../types';
import { businessConfig } from '../config/business';
import { serviceIcons } from './icons';
import { SectionHeading } from './SectionHeading';

interface ServicesSectionProps {
  onSelectService: (service: LegalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { contact, services } = businessConfig;

  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-paper">
      <div className="shell">
        <SectionHeading
          id="services-title"
          eyebrow="خدمات حقوقی"
          title={`حوزه‌های وکالت در ${contact.city}`}
          lead={`قبول وکالت و مشاوره در مراجع قضایی و ثبتی استان ${contact.province}.`}
        />

        <ul className="mt-8 sm:mt-10 grid grid-cols-1 min-[360px]:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li key={service.id}>
                <article className="group relative h-full flex flex-col items-center text-center rounded-2xl sm:rounded-3xl bg-surface px-2.5 py-5 sm:p-7 lg:p-8 ring-1 ring-line shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
                  <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold-wash text-gold flex items-center justify-center ring-1 ring-gold-bright/25 transition-colors duration-300 group-hover:bg-ink group-hover:text-gold-soft">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-3 sm:mt-5 text-[15px] sm:text-xl font-extrabold text-ink">{service.title}</h3>
                  <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm lg:text-base leading-6 sm:leading-7 text-muted">
                    {service.summary}
                  </p>
                  <p className="hidden md:block mt-3 text-sm leading-7 text-subtle">{service.description}</p>

                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="mt-auto pt-4 sm:pt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold after:absolute after:inset-0 after:content-['']"
                    aria-label={`جزئیات ${service.title}`}
                  >
                    <span className="hidden sm:inline">جزئیات بیشتر</span>
                    <span className="w-8 h-8 rounded-full ring-1 ring-gold-bright/60 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1">
                      <ChevronLeft className="w-4 h-4" />
                    </span>
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
