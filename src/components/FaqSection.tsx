import React from 'react';
import { Plus } from 'lucide-react';
import { businessConfig } from '../config/business';
import { SectionHeading } from './SectionHeading';

export const FaqSection: React.FC = () => (
  <section id="faq" aria-labelledby="faq-title" className="section-y bg-paper">
    <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
      <div className="lg:col-span-4">
        <SectionHeading
          id="faq-title"
          eyebrow="سؤالات متداول"
          title="پیش از تماس بدانید"
          lead="پاسخ پرسش‌هایی که معمولاً پیش از درخواست مشاوره مطرح می‌شود."
        />
      </div>

      <div className="lg:col-span-8 divide-y divide-line border-y border-line">
        {businessConfig.faqs.map((faq) => (
          <details key={faq.question} className="group py-1">
            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none text-right text-sm sm:text-base font-bold text-ink rounded-lg [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="w-8 h-8 shrink-0 rounded-full ring-1 ring-line flex items-center justify-center text-gold transition-transform duration-300 group-open:rotate-45">
                <Plus className="w-4 h-4" />
              </span>
            </summary>
            <p className="pb-5 pe-12 text-sm sm:text-base leading-7 sm:leading-8 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
