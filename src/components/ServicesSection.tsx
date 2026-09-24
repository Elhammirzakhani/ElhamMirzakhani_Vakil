import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { LegalService } from '../types';
import { businessConfig } from '../config/business';
import { serviceIcons } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface ServicesSectionProps {
  onSelectService: (service: LegalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="زمینه‌های وکالت"
          title="حوزه‌های فعالیت حقوقی"
          lead={`قبول وکالت و مشاوره در مراجع قضایی و ثبتی استان ${businessConfig.contact.province} و شهرستان ${businessConfig.contact.city}.`}
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {businessConfig.services.map((service, idx) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal as="article" key={service.id} delay={(idx % 2) * 0.08}>
                <div className="group relative h-full flex flex-col rounded-3xl bg-surface p-7 sm:p-8 ring-1 ring-line shadow-soft transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-14 h-14 rounded-2xl bg-gold-wash text-gold flex items-center justify-center ring-1 ring-gold/15 transition-colors duration-300 group-hover:bg-ink group-hover:text-gold-soft">
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </span>
                    <span className="text-xs font-semibold text-subtle bg-paper rounded-full px-3 py-1 ring-1 ring-line">
                      {service.scope}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-extrabold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-8 text-muted">{service.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {service.details.slice(0, 2).map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-ink/80 leading-7">
                        <Check className="w-4 h-4 mt-1.5 text-gold-bright shrink-0" strokeWidth={2.25} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-gold after:absolute after:inset-0 after:rounded-3xl after:content-['']"
                      aria-label={`مشاهده جزئیات ${service.title}`}
                    >
                      <span>همه موضوعات و جزئیات</span>
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
