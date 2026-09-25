import React from 'react';
import { BadgeCheck, ChevronLeft, MessageCircleMore, Scale } from 'lucide-react';
import { businessConfig } from '../config/business';
import { Portrait } from './Portrait';

interface HeroSectionProps {
  onOpenLicenseModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden bg-paper pt-16 sm:pt-[4.5rem]">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-0 w-[28rem] h-[28rem] rounded-full bg-gold-soft/45 blur-3xl pointer-events-none"
      />

      <div className="shell relative pt-6 pb-8 md:py-16 lg:py-20 md:grid md:grid-cols-12 md:gap-10 lg:gap-14 md:items-center">
        {/* Copy — on mobile it sits beside the portrait, on desktop it is the right column */}
        <div className="relative z-10 md:col-span-7">
          <div className="w-[60%] ms-auto md:w-auto md:ms-0 min-h-[19rem] sm:min-h-[24rem] md:min-h-0">
            <h1 id="hero-title" className="text-right">
              <span className="block sm:inline-flex text-xs font-semibold text-gold leading-6 sm:eyebrow">
                {attorney.fullName}، {attorney.title} در {contact.city}
              </span>
              <span className="block mt-3 text-[1.4rem] leading-[1.6] sm:text-4xl sm:leading-[1.45] lg:text-5xl lg:leading-[1.35] font-black tracking-tight text-ink">
                خدمات حقوقی، کیفری، خانواده و ثبتی در {contact.city}
              </span>
            </h1>
            <p className="mt-3 sm:mt-5 max-w-xl text-[13px] leading-7 sm:text-base sm:leading-8 lg:text-lg lg:leading-9 text-muted">
              {attorney.biography.lead}
            </p>
          </div>

          <div className="relative z-10 mt-5 md:mt-8 grid grid-cols-2 sm:flex gap-2.5 sm:gap-3">
            <a href="#contact" className="btn-primary sm:px-6 sm:min-h-12">
              <MessageCircleMore className="w-[1.1rem] h-[1.1rem]" strokeWidth={1.75} />
              درخواست مشاوره
            </a>
            <a href="#services" className="btn-outline sm:px-6 sm:min-h-12">
              مشاهده خدمات
              <ChevronLeft className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="absolute top-0 bottom-[6rem] right-0 w-[46%] md:static md:w-auto md:col-span-5">
          <div className="relative h-full md:max-w-sm md:mx-auto">
            <div className="relative h-full overflow-hidden [mask-image:linear-gradient(to_left,black_62%,transparent)] md:[mask-image:none] md:rounded-[2rem] md:shadow-deep md:aspect-[4/5]">
              <Portrait
                sizes="(min-width: 768px) 384px, 46vw"
                className="w-full h-full object-cover object-[center_18%]"
              />
            </div>

            {/* Credentials card — plain HTML over the photo, never baked into it */}
            <button
              type="button"
              onClick={onOpenLicenseModal}
              className="absolute bottom-2 right-3 md:-bottom-6 md:right-auto md:-left-2 lg:-left-6 flex items-center gap-2.5 rounded-2xl bg-surface/95 backdrop-blur px-3 py-2.5 shadow-lift ring-1 ring-line text-right transition-transform duration-200 hover:-translate-y-0.5"
              aria-label={`مشاهده تصویر پروانه وکالت شماره ${attorney.licenseNumber}`}
            >
              <span className="hidden sm:flex w-10 h-10 rounded-full bg-gold-wash text-gold items-center justify-center ring-1 ring-gold-bright/30">
                <Scale className="w-5 h-5" strokeWidth={1.6} />
              </span>
              <span>
                <span className="flex items-center gap-1 text-[11px] text-gold font-medium">
                  <BadgeCheck className="w-3.5 h-3.5 text-gold-bright" />
                  پروانه وکالت
                </span>
                <span className="block text-sm font-extrabold text-ink">شماره {attorney.licenseNumber}</span>
                <span className="block text-[10px] sm:text-[11px] text-subtle">{attorney.title}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
