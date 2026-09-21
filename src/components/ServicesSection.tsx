import React from 'react';
import { LegalService } from '../types';
import { businessConfig } from '../config/business';

interface ServicesSectionProps {
  onSelectService: (service: LegalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-[#715b2d] tracking-wide">
            صلاحیت‌ها و زمینه‌های وکالت
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151c26]">
            حوزه‌های فعالیت حقوقی
          </h2>
          <p className="text-xs sm:text-sm text-[#44474c] max-w-2xl px-4 font-medium">
            خدمات حقوقی و قبول وکالت در مراجع قضایی و ثبتی در چهارمحال و بختیاری و شهرکرد
          </p>
          <div className="w-16 h-1 bg-[#715b2d] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {businessConfig.services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-[#715b2d]/40 relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service);
                }
              }}
              aria-label={`مشاهده جزئیات ${service.title}`}
            >
              {/* Subtle gold hover indicator on right border */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-[#715b2d] group-hover:h-full transition-all duration-300"></div>

              <div className="space-y-4 text-right">
                <div className="w-12 h-12 rounded-xl bg-[#f8f9ff] flex items-center justify-center text-[#715b2d] group-hover:bg-[#101c2c] group-hover:text-white transition-colors border border-gray-100 shadow-xs">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-[#151c26] group-hover:text-[#101c2c] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[#715b2d] text-xs sm:text-sm font-semibold">
                <span>{service.scope}</span>
                <div className="flex items-center gap-1 group-hover:-translate-x-1.5 transition-transform">
                  <span className="text-xs">مشاهده</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
