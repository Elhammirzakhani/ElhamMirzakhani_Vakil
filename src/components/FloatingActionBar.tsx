import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp, Navigation, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { WhatsAppIcon } from './icons';

export const FloatingActionBar: React.FC = () => {
  const { contact } = businessConfig;
  // The bar steps aside while the contact section (which has the same actions) is on screen
  const [contactInView, setContactInView] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const section = document.getElementById('contact');
    const observer = new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting), {
      rootMargin: '0px 0px -30% 0px',
    });
    if (section) observer.observe(section);

    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile & tablet: compact contact bar */}
      <AnimatePresence initial={false}>
        {!contactInView && (
          <motion.nav
            key="bar"
            aria-label="تماس سریع"
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-paper/95 backdrop-blur-md border-t border-line px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 420, damping: 38 }}
          >
            <div className="mx-auto max-w-md grid grid-cols-3 gap-2">
              <a href={contact.telUri} className="btn min-h-11 px-2 text-sm bg-surface text-ink ring-1 ring-line-strong">
                <Phone className="w-4 h-4" strokeWidth={1.75} />
                تماس
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-11 px-2 text-sm bg-whatsapp text-white"
              >
                <WhatsAppIcon className="w-4 h-4" />
                واتس‌اپ
              </a>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-11 px-2 text-sm bg-ink text-white"
              >
                <Navigation className="w-4 h-4" strokeWidth={1.75} />
                مسیریابی
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop: back to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden lg:flex fixed bottom-6 left-6 z-40 w-12 h-12 items-center justify-center rounded-full bg-ink text-gold-soft shadow-lift hover:bg-ink-soft transition-colors"
            aria-label="بازگشت به بالای صفحه"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
