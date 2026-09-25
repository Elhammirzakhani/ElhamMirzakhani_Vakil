import React from 'react';
import { BadgeCheck, Scale } from 'lucide-react';
import { businessConfig } from '../config/business';

interface FooterProps {
  onOpenLicenseModal: () => void;
}

const quickLinks = [
  { label: 'صفحه اصلی', href: '#hero' },
  { label: 'حوزه‌های خدمات حقوقی', href: '#services' },
  { label: 'درباره وکیل', href: '#about' },
  { label: 'سؤالات متداول', href: '#faq' },
  { label: 'تماس و نشانی دفتر', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenLicenseModal }) => {
  const { attorney, contact } = businessConfig;
  const year = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date());

  return (
    // Extra bottom padding on mobile keeps content clear of the floating contact bar
    <footer className="bg-ink text-white/70 pb-28 lg:pb-0">
      <div className="shell pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <span className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-gold-bright/40 text-gold-soft flex items-center justify-center">
                <Scale className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <span className="text-lg font-extrabold">{attorney.fullName}</span>
            </div>
            <p className="text-sm leading-8 max-w-sm">
              ارائه خدمات حقوقی و قبول وکالت در مراجع قضایی و ثبتی استان {contact.province} با رعایت
              تعهدات اخلاق حرفه‌ای.
            </p>
            <button
              type="button"
              onClick={onOpenLicenseModal}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-white transition-colors rounded-lg"
            >
              <BadgeCheck className="w-4 h-4" strokeWidth={1.75} />
              مشاهده پروانه رسمی شماره {attorney.licenseNumber}
            </button>
          </div>

          <nav aria-label="دسترسی سریع" className="md:col-span-3">
            <h2 className="text-sm font-bold text-white">دسترسی سریع</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-soft transition-colors rounded">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-sm font-bold text-white">تماس با دفتر</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="leading-7">{contact.address}</li>
              <li>
                <a href={contact.telUri} className="font-semibold text-white hover:text-gold-soft transition-colors tabular" dir="ltr">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4">
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft transition-colors">
                  واتس‌اپ
                </a>
                <a href={contact.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft transition-colors">
                  اینستاگرام
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p suppressHydrationWarning>© {year} — کلیه حقوق برای دفتر وکالت {attorney.fullName} محفوظ است.</p>
          <p>{attorney.title} · پروانه وکالت شماره {attorney.licenseNumber}</p>
        </div>
      </div>
    </footer>
  );
};
